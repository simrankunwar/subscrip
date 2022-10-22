(self["webpackChunksubscriptions_app"]=self["webpackChunksubscriptions_app"]||[]).push([[28],{6077:function(t,e,n){var r=n(614),s=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+s(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),s=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(3013),a=n(9781),c=n(7854),u=n(614),h=n(111),l=n(2597),d=n(648),f=n(6330),m=n(8880),g=n(8052),p=n(3070).f,y=n(7976),w=n(9518),v=n(7674),b=n(5112),I=n(9711),E=n(9909),_=E.enforce,T=E.get,S=c.Int8Array,D=S&&S.prototype,A=c.Uint8ClampedArray,C=A&&A.prototype,x=S&&w(S),N=D&&w(D),k=Object.prototype,R=c.TypeError,O=b("toStringTag"),L=I("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=o&&!!v&&"Opera"!==d(c.opera),V=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||l(F,e)||l(B,e)},q=function(t){var e=w(t);if(h(e)){var n=T(e);return n&&l(n,M)?n[M]:q(e)}},j=function(t){if(!h(t))return!1;var e=d(t);return l(F,e)||l(B,e)},K=function(t){if(j(t))return t;throw R("Target is not a typed array")},G=function(t){if(u(t)&&(!v||y(x,t)))return t;throw R(f(t)+" is not a typed array constructor")},$=function(t,e,n,r){if(a){if(n)for(var s in F){var i=c[s];if(i&&l(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}N[t]&&!n||g(N,t,n?e:P&&D[t]||e,r)}},z=function(t,e,n){var r,s;if(a){if(v){if(n)for(r in F)if(s=c[r],s&&l(s,t))try{delete s[t]}catch(i){}if(x[t]&&!n)return;try{return g(x,t,n?e:P&&x[t]||e)}catch(i){}}for(r in F)s=c[r],!s||s[t]&&!n||g(s,t,e)}};for(r in F)s=c[r],i=s&&s.prototype,i?_(i)[M]=s:P=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(_(i)[M]=s);if((!P||!u(x)||x===Function.prototype)&&(x=function(){throw R("Incorrect invocation")},P))for(r in F)c[r]&&v(c[r],x);if((!P||!N||N===k)&&(N=x.prototype,P))for(r in F)c[r]&&v(c[r].prototype,N);if(P&&w(C)!==N&&v(C,N),a&&!l(N,O))for(r in V=!0,p(N,O,{get:function(){return h(this)?this[L]:void 0}}),F)c[r]&&m(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:V&&L,aTypedArray:K,aTypedArrayConstructor:G,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:U,isTypedArray:j,TypedArray:x,TypedArrayPrototype:N}},9671:function(t,e,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,h,l=i(n),d=s(l),f=r(a,c),m=o(d);while(m-- >0)if(u=d[m],h=f(u,m,l),h)switch(t){case 0:return u;case 1:return m}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},648:function(t,e,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),a))?n:u?i(e):"Object"==(r=i(e))&&s(e.callee)?"Arguments":r}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,n){var r=n(1702),s=Error,i=r("".replace),o=function(t){return String(s(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9974:function(t,e,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},9587:function(t,e,n){var r=n(614),s=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&r(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},9518:function(t,e,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7674:function(t,e,n){var r=n(1702),s=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},1694:function(t,e,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),s=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},4590:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},2801:function(t,e,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),h=n(9587),l=n(6277),d=n(3678),f=n(1060),m=n(9781),g=n(1913),p="DOMException",y=i("Error"),w=i(p),v=function(){u(this,b);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new w(e,n),s=y(e);return s.name=p,a(r,"stack",o(1,f(s.stack,1))),h(r,this,v),r},b=v.prototype=w.prototype,I="stack"in y(p),E="stack"in new w(1,2),_=w&&m&&Object.getOwnPropertyDescriptor(s,p),T=!!_&&!(_.writable&&_.configurable),S=I&&!T&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?v:w});var D=i(p),A=D.prototype;if(A.constructor!==D)for(var C in g||a(A,"constructor",o(1,D)),d)if(c(d,C)){var x=d[C],N=x.s;c(D,N)||a(D,N,o(6,x.c))}},5028:function(t,e,n){"use strict";n.d(e,{Z:function(){return Qw}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return A},SDK_VERSION:function(){return de},_DEFAULT_ENTRY_NAME:function(){return Zt},_addComponent:function(){return re},_addOrOverwriteComponent:function(){return se},_apps:function(){return ee},_clearComponents:function(){return ce},_components:function(){return ne},_getProvider:function(){return oe},_registerComponent:function(){return ie},_removeServiceInstance:function(){return ae},deleteApp:function(){return pe},getApp:function(){return me},getApps:function(){return ge},initializeApp:function(){return fe},onLog:function(){return we},registerVersion:function(){return ye},setLogLevel:function(){return ve}});n(2801),n(7658);
/**
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
 */
const s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(r.push(l),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=s(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */function h(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&l(n)&&(t[n]=h(t[n],e[n]));return t}function l(t){return"__proto__"!==t}
/**
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
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function w(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const v=()=>w().__FIREBASE_DEFAULTS__,b=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},I=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},E=()=>{try{return v()||b()||I()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=()=>{var t;return null===(t=E())||void 0===t?void 0:t.config};
/**
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
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
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
 */const D="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?x(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new A(r,o,n);return a}}function x(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function R(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(O(n)&&O(i)){if(!R(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function O(t){return null!==t&&"object"===typeof t}
/**
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
 */function L(t,e){const n=new M(t,e);return n.subscribe.bind(n)}class M{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=P(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function V(){}
/**
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
 */
/**
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
 */
function F(t){return t&&t._delegate?t._delegate:t}class B{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const U="[DEFAULT]";
/**
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
 */class q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new T;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(K(t))try{this.getOrInitializeService({instanceIdentifier:U})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=U){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=U){return this.instances.has(t)}getOptions(t=U){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(Jg){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:j(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(Jg){}return n||null}normalizeInstanceIdentifier(t=U){return this.component?this.component.multipleInstances?t:U:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function j(t){return t===U?void 0:t}function K(t){return"EAGER"===t.instantiationMode}
/**
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
 */class G{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const $=[];var z;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(z||(z={}));const Q={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},H=z.INFO,W={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Y=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=W[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class X{constructor(t){this.name=t,this._logLevel=H,this._logHandler=Y,this._userLogHandler=null,$.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?Q[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}function J(t){$.forEach((e=>{e.setLogLevel(t)}))}function Z(t,e){for(const n of $){let r=null;e&&e.level&&(r=Q[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const i=s.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:z[n].toLowerCase(),message:i,args:s,type:e.name})}}}const tt=(t,e)=>e.some((e=>t instanceof e));let et,nt;function rt(){return et||(et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function st(){return nt||(nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const it=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap,ut=new WeakMap;function ht(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(pt(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&it.set(e,t)})).catch((()=>{})),ut.set(e,t),e}function lt(t){if(ot.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));ot.set(t,e)}let dt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ot.get(t);if("objectStoreNames"===e)return t.objectStoreNames||at.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function ft(t){dt=t(dt)}function mt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?st().includes(t)?function(...e){return t.apply(yt(this),e),pt(it.get(this))}:function(...e){return pt(t.apply(yt(this),e))}:function(e,...n){const r=t.call(yt(this),e,...n);return at.set(r,e.sort?e.sort():[e]),pt(r)}}function gt(t){return"function"===typeof t?mt(t):(t instanceof IDBTransaction&&lt(t),tt(t,rt())?new Proxy(t,dt):t)}function pt(t){if(t instanceof IDBRequest)return ht(t);if(ct.has(t))return ct.get(t);const e=gt(t);return e!==t&&(ct.set(t,e),ut.set(e,t)),e}const yt=t=>ut.get(t);function wt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(pt(o.result),t.oldVersion,t.newVersion,pt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const vt=["get","getKey","getAll","getAllKeys","count"],bt=["put","add","delete","clear"],It=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(It.get(e))return It.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!vt.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return It.set(e,i),i}ft((t=>({...t,get:(e,n,r)=>Et(e,n)||t.get(e,n,r),has:(e,n)=>!!Et(e,n)||t.has(e,n)})));
/**
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
 */
class _t{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(Tt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function Tt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const St="@firebase/app",Dt="0.8.2",At=new X("@firebase/app"),Ct="@firebase/app-compat",xt="@firebase/analytics-compat",Nt="@firebase/analytics",kt="@firebase/app-check-compat",Rt="@firebase/app-check",Ot="@firebase/auth",Lt="@firebase/auth-compat",Mt="@firebase/database",Pt="@firebase/database-compat",Vt="@firebase/functions",Ft="@firebase/functions-compat",Bt="@firebase/installations",Ut="@firebase/installations-compat",qt="@firebase/messaging",jt="@firebase/messaging-compat",Kt="@firebase/performance",Gt="@firebase/performance-compat",$t="@firebase/remote-config",zt="@firebase/remote-config-compat",Qt="@firebase/storage",Ht="@firebase/storage-compat",Wt="@firebase/firestore",Yt="@firebase/firestore-compat",Xt="firebase",Jt="9.12.1",Zt="[DEFAULT]",te={[St]:"fire-core",[Ct]:"fire-core-compat",[Nt]:"fire-analytics",[xt]:"fire-analytics-compat",[Rt]:"fire-app-check",[kt]:"fire-app-check-compat",[Ot]:"fire-auth",[Lt]:"fire-auth-compat",[Mt]:"fire-rtdb",[Pt]:"fire-rtdb-compat",[Vt]:"fire-fn",[Ft]:"fire-fn-compat",[Bt]:"fire-iid",[Ut]:"fire-iid-compat",[qt]:"fire-fcm",[jt]:"fire-fcm-compat",[Kt]:"fire-perf",[Gt]:"fire-perf-compat",[$t]:"fire-rc",[zt]:"fire-rc-compat",[Qt]:"fire-gcs",[Ht]:"fire-gcs-compat",[Wt]:"fire-fst",[Yt]:"fire-fst-compat","fire-js":"fire-js",[Xt]:"fire-js-all"},ee=new Map,ne=new Map;function re(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function se(t,e){t.container.addOrOverwriteComponent(e)}function ie(t){const e=t.name;if(ne.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;ne.set(e,t);for(const n of ee.values())re(n,t);return!0}function oe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ae(t,e,n=Zt){oe(t,e).clearInstance(n)}function ce(){ne.clear()}
/**
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
 */const ue={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new C("app","Firebase",ue);
/**
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
 */
class le{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new B("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
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
 */const de=Jt;function fe(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:Zt,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=_()),!n)throw he.create("no-options");const i=ee.get(s);if(i){if(R(n,i.options)&&R(r,i.config))return i;throw he.create("duplicate-app",{appName:s})}const o=new G(s);for(const c of ne.values())o.addComponent(c);const a=new le(n,r,o);return ee.set(s,a),a}function me(t=Zt){const e=ee.get(t);if(!e&&t===Zt)return fe();if(!e)throw he.create("no-app",{appName:t});return e}function ge(){return Array.from(ee.values())}async function pe(t){const e=t.name;ee.has(e)&&(ee.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function ye(t,e,n){var r;let s=null!==(r=te[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void At.warn(t.join(" "))}ie(new B(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}function we(t,e){if(null!==t&&"function"!==typeof t)throw he.create("invalid-log-argument");Z(t,e)}function ve(t){J(t)}
/**
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
 */const be="firebase-heartbeat-database",Ie=1,Ee="firebase-heartbeat-store";let _e=null;function Te(){return _e||(_e=wt(be,Ie,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ee)}}}).catch((t=>{throw he.create("idb-open",{originalErrorMessage:t.message})}))),_e}async function Se(t){var e;try{const e=await Te();return e.transaction(Ee).objectStore(Ee).get(Ae(t))}catch(n){if(n instanceof A)At.warn(n.message);else{const t=he.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});At.warn(t.message)}}}async function De(t,e){var n;try{const n=await Te(),r=n.transaction(Ee,"readwrite"),s=r.objectStore(Ee);return await s.put(e,Ae(t)),r.done}catch(r){if(r instanceof A)At.warn(r.message);else{const t=he.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});At.warn(t.message)}}}function Ae(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const Ce=1024,xe=2592e6;class Ne{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Oe(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ke();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ke(),{heartbeatsToSend:e,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=c(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ke(){const t=new Date;return t.toISOString().substring(0,10)}function Re(t,e=Ce){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Le(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Le(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!p()&&y().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Se(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Le(t){return c(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Me(t){ie(new B("platform-logger",(t=>new _t(t)),"PRIVATE")),ie(new B("heartbeat",(t=>new Ne(t)),"PRIVATE")),ye(St,Dt,t),ye(St,Dt,"esm2017"),ye("fire-js","")}Me("");
/**
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
 */
class Pe{constructor(t,e){this._delegate=t,this.firebase=e,re(t,new B("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),pe(this._delegate))))}_getService(t,e=Zt){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=Zt){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){re(this._delegate,t)}_addOrOverwriteComponent(t){se(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const Ve={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fe=new C("app-compat","Firebase",Ve);
/**
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
 */
function Be(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:ye,setLogLevel:ve,onLog:we,apps:null,SDK_VERSION:de,INTERNAL:{registerComponent:c,removeApp:s,useAsService:u,modularAPIs:r}};function s(t){delete e[t]}function i(t){if(t=t||Zt,!k(e,t))throw Fe.create("no-app",{appName:t});return e[t]}function o(r,s={}){const i=fe(r,s);if(k(e,i.name))return e[i.name];const o=new t(i,n);return e[i.name]=o,o}function a(){return Object.keys(e).map((t=>e[t]))}function c(e){const r=e.name,s=r.replace("-compat","");if(ie(e)&&"PUBLIC"===e.type){const o=(t=i())=>{if("function"!==typeof t[s])throw Fe.create("invalid-app-argument",{appName:r});return t[s]()};void 0!==e.serviceProps&&h(o,e.serviceProps),n[s]=o,t.prototype[s]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null}function u(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=t,n}
/**
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
 */function Ue(){const t=Be(Pe);function e(e){h(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ue,extendNamespace:e,createSubscribe:L,ErrorFactory:C,deepExtend:h}),t}const qe=Ue(),je=new X("@firebase/app-compat"),Ke="@firebase/app-compat",Ge="0.1.37";
/**
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
 */
/**
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
 */
function $e(t){ye(Ke,Ge,t)}
/**
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
 */if(m()&&void 0!==self.firebase){je.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&je.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const ze=qe;$e();var Qe="firebase",He="9.12.1";
/**
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
 */
ze.registerVersion(Qe,He,"app-compat");n(3408),n(4590),n(541);var We,Ye="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Xe={},Je=Je||{},Ze=Ye||self;function tn(){}function en(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function nn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function rn(t){return Object.prototype.hasOwnProperty.call(t,sn)&&t[sn]||(t[sn]=++on)}var sn="closure_uid_"+(1e9*Math.random()>>>0),on=0;function an(t,e,n){return t.call.apply(t.bind,arguments)}function cn(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function un(t,e,n){return un=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?an:cn,un.apply(null,arguments)}function hn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ln(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function dn(){this.s=this.s,this.o=this.o}var fn=0,mn={};dn.prototype.s=!1,dn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=fn)){var t=rn(this);delete mn[t]}},dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pn(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yn(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(en(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function wn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!Ze.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ze.addEventListener("test",tn,e),Ze.removeEventListener("test",tn,e)}catch(n){}return t}();function bn(t){return/^[\s\xa0]*$/.test(t)}var In=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function En(t,e){return t<e?-1:t>e?1:0}function _n(){var t=Ze.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return-1!=_n().indexOf(t)}function Sn(t){return Sn[" "](t),t}function Dn(t){var e=Bn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Sn[" "]=tn;var An,Cn=Tn("Opera"),xn=Tn("Trident")||Tn("MSIE"),Nn=Tn("Edge"),kn=Nn||xn,Rn=Tn("Gecko")&&!(-1!=_n().toLowerCase().indexOf("webkit")&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),On=-1!=_n().toLowerCase().indexOf("webkit")&&!Tn("Edge");function Ln(){var t=Ze.document;return t?t.documentMode:void 0}t:{var Mn="",Pn=function(){var t=_n();return Rn?/rv:([^\);]+)(\)|;)/.exec(t):Nn?/Edge\/([\d\.]+)/.exec(t):xn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):On?/WebKit\/(\S+)/.exec(t):Cn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Pn&&(Mn=Pn?Pn[1]:""),xn){var Vn=Ln();if(null!=Vn&&Vn>parseFloat(Mn)){An=String(Vn);break t}}An=Mn}var Fn,Bn={};function Un(){return Dn((function(){let t=0;const e=In(String(An)).split("."),n=In("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=En(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||En(0==s[2].length,0==i[2].length)||En(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Ze.document&&xn){var qn=Ln();Fn=qn||(parseInt(An,10)||void 0)}else Fn=void 0;var jn=Fn;function Kn(t,e){if(wn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rn){t:{try{Sn(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Gn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kn.X.h.call(this)}}ln(Kn,wn);var Gn={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),zn=0;function Qn(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++zn,this.ba=this.ea=!1}function Hn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wn(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Yn(t){const e={};for(const n in t)e[n]=t[n];return e}const Xn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jn(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<Xn.length;e++)n=Xn[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zn(t){this.src=t,this.g={},this.h=0}function tr(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=gn(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function er(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}Zn.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=er(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Qn(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function sr(t,e,n,r,s){if(r&&r.once)return ar(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sr(t,e[i],n,r,s);return null}return n=mr(n),t&&t[$n]?t.N(e,n,nn(r)?!!r.capture:!!r,s):ir(t,e,n,!1,r,s)}function ir(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=nn(s)?!!s.capture:!!s,a=dr(t);if(a||(t[nr]=a=new Zn(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=or(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vn||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hr(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function or(){function t(n){return e.call(t.src,t.listener,n)}const e=lr;return t}function ar(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ar(t,e[i],n,r,s);return null}return n=mr(n),t&&t[$n]?t.O(e,n,nn(r)?!!r.capture:!!r,s):ir(t,e,n,!0,r,s)}function cr(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)cr(t,e[i],n,r,s);else r=nn(r)?!!r.capture:!!r,n=mr(n),t&&t[$n]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=er(i,n,r,s),-1<n&&(Hn(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=dr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=er(e,n,r,s)),(n=-1<t?e[t]:null)&&ur(n))}function ur(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[$n])tr(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hr(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dr(e))?(tr(n,t),0==n.h&&(n.src=null,e[nr]=null)):Hn(t)}}}function hr(t){return t in rr?rr[t]:rr[t]="on"+t}function lr(t,e){if(t.ba)t=!0;else{e=new Kn(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ur(t),t=n.call(r,e)}return t}function dr(t){return t=t[nr],t instanceof Zn?t:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function mr(t){return"function"===typeof t?t:(t[fr]||(t[fr]=function(e){return t.handleEvent(e)}),t[fr])}function gr(){dn.call(this),this.i=new Zn(this),this.P=this,this.I=null}function pr(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new wn(e,t);else if(e instanceof wn)e.target=e.target||t;else{var s=e;e=new wn(r,t),Jn(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=yr(o,r,!0,e)&&s}if(o=e.g=t,s=yr(o,r,!0,e)&&s,s=yr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=yr(o,r,!1,e)&&s}function yr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&tr(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}ln(gr,dn),gr.prototype[$n]=!0,gr.prototype.removeEventListener=function(t,e,n,r){cr(this,t,e,n,r)},gr.prototype.M=function(){if(gr.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Hn(n[r]);delete e.g[t],e.h--}}this.I=null},gr.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},gr.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var wr=Ze.JSON.stringify;function vr(){var t=Cr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class br{constructor(){this.h=this.g=null}add(t,e){const n=Er.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ir,Er=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new _r),(t=>t.reset()));class _r{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Tr(t){Ze.setTimeout((()=>{throw t}),0)}function Sr(t,e){Ir||Dr(),Ar||(Ir(),Ar=!0),Cr.add(t,e)}function Dr(){var t=Ze.Promise.resolve(void 0);Ir=function(){t.then(xr)}}var Ar=!1,Cr=new br;function xr(){for(var t;t=vr();){try{t.h.call(t.g)}catch(n){Tr(n)}var e=Er;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ar=!1}function Nr(t,e){gr.call(this),this.h=t||1,this.g=e||Ze,this.j=un(this.lb,this),this.l=Date.now()}function kr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Rr(t,e,n){if("function"===typeof t)n&&(t=un(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=un(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ze.setTimeout(t,e||0)}function Or(t){t.g=Rr((()=>{t.g=null,t.i&&(t.i=!1,Or(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ln(Nr,gr),We=Nr.prototype,We.ca=!1,We.R=null,We.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),pr(this,"tick"),this.ca&&(kr(this),this.start()))}},We.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},We.M=function(){Nr.X.M.call(this),kr(this),delete this.g};class Lr extends dn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Or(this)}M(){super.M(),this.g&&(Ze.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(t){dn.call(this),this.h=t,this.g={}}ln(Mr,dn);var Pr=[];function Vr(t,e,n,r){Array.isArray(n)||(n&&(Pr[0]=n.toString()),n=Pr);for(var s=0;s<n.length;s++){var i=sr(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fr(t){Wn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ur(t)}),t),t.g={}}function Br(){this.g=!0}function Ur(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function qr(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function jr(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Gr(t,n)+(r?" "+r:"")}))}function Kr(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Gr(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return wr(n)}catch(a){return e}}Mr.prototype.M=function(){Mr.X.M.call(this),Fr(this)},Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Br.prototype.Aa=function(){this.g=!1},Br.prototype.info=function(){};var $r={},zr=null;function Qr(){return zr=zr||new gr}function Hr(t){wn.call(this,$r.Pa,t)}function Wr(t){const e=Qr();pr(e,new Hr(e,t))}function Yr(t,e){wn.call(this,$r.STAT_EVENT,t),this.stat=e}function Xr(t){const e=Qr();pr(e,new Yr(e,t))}function Jr(t,e){wn.call(this,$r.Qa,t),this.size=e}function Zr(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Ze.setTimeout((function(){t()}),e)}$r.Pa="serverreachability",ln(Hr,wn),$r.STAT_EVENT="statevent",ln(Yr,wn),$r.Qa="timingevent",ln(Jr,wn);var ts={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},es={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ns(){}function rs(t){return t.h||(t.h=t.i())}function ss(){}ns.prototype.h=null;var is,os={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function as(){wn.call(this,"d")}function cs(){wn.call(this,"c")}function us(){}function hs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Mr(this),this.O=ds,t=kn?125:void 0,this.T=new Nr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ls}function ls(){this.i=null,this.g="",this.h=!1}ln(as,wn),ln(cs,wn),ln(us,ns),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},is=new us;var ds=45e3,fs={},ms={};function gs(t,e,n){t.K=1,t.v=Vs(Rs(e)),t.s=n,t.P=!0,ps(t,null)}function ps(t,e){t.F=Date.now(),bs(t),t.A=Rs(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Ys(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ls,t.g=to(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lr(un(t.La,t,t.g),t.N)),Vr(t.S,t.g,"readystatechange",t.ib),e=t.H?Yn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wr(1),Ur(t.j,t.u,t.A,t.m,t.U,t.s)}function ys(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ws(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=vs(t,n),r==ms){4==e&&(t.o=4,Xr(14),s=!1),jr(t.j,t.m,null,"[Incomplete Response]");break}if(r==fs){t.o=4,Xr(15),jr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}jr(t.j,t.m,r,null),Ss(t,r)}ys(t)&&r!=ms&&r!=fs&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Xr(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),zi(e),e.K=!0,Xr(11))):(jr(t.j,t.m,n,"[Invalid Chunked Response]"),Ts(t),_s(t))}function vs(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ms:(n=Number(e.substring(n,r)),isNaN(n)?fs:(r+=1,r+n>e.length?ms:(e=e.substr(r,n),t.C=r+n,e)))}function bs(t){t.V=Date.now()+t.O,Is(t,t.O)}function Is(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Zr(un(t.gb,t),e)}function Es(t){t.B&&(Ze.clearTimeout(t.B),t.B=null)}function _s(t){0==t.l.G||t.I||Wi(t.l,t)}function Ts(t){Es(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,kr(t.T),Fr(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ss(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||si(n.h,t)))if(!t.J&&si(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Hi(n),Vi(n)}$i(n),Xr(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=Zr(un(n.cb,n),6e3));if(1>=ri(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else Xi(n,11)}else if((t.J||n.g==t)&&Hi(n),!bn(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ii(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ps(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Zi(r,r.H?r.ka:null,r.V),o.J){oi(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Es(a),bs(a)),r.g=o}else Gi(r);0<n.i.length&&Bi(n)}else"stop"!=u[0]&&"close"!=u[0]||Xi(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Xi(n,7):Pi(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Wr(4)}catch(u){}}function Ds(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(en(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function As(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(en(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Cs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(en(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=As(t),r=Ds(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}We=hs.prototype,We.setTimeout=function(t){this.O=t},We.ib=function(t){t=t.target;const e=this.L;e&&3==Ni(t)?e.l():this.La(t)},We.La=function(t){try{if(t==this.g)t:{const h=Ni(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(3!=h||kn||this.g&&(this.h.h||this.g.fa()||ki(this.g)))){this.I||4!=h||7==e||Wr(8==e||0>=l?3:2),Es(this);var n=this.g.aa();this.Y=n;e:if(ys(this)){var r=ki(this.g);t="";var s=r.length,i=4==Ni(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ts(this),_s(this);var o="";break e}this.h.i=new Ze.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,qr(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Xr(12),Ts(this),_s(this);break t}jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ss(this,n)}this.P?(ws(this,h,o),kn&&this.i&&3==h&&(Vr(this.S,this.T,"tick",this.hb),this.T.start())):(jr(this.j,this.m,o,null),Ss(this,o)),4==h&&Ts(this),this.i&&!this.I&&(4==h?Wi(this.l,this):(this.i=!1,bs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Xr(12)):(this.o=0,Xr(13)),Ts(this),_s(this)}}}catch(h){}},We.hb=function(){if(this.g){var t=Ni(this.g),e=this.g.fa();this.C<e.length&&(Es(this),ws(this,t,e),this.i&&4!=t&&bs(this))}},We.cancel=function(){this.I=!0,Ts(this)},We.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Kr(this.j,this.A),2!=this.K&&(Wr(3),Xr(17)),Ts(this),this.o=2,_s(this)):Is(this,this.V-t)};var xs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ns(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ks(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ks){this.h=void 0!==e?e:t.h,Os(this,t.j),this.s=t.s,this.g=t.g,Ls(this,t.m),this.l=t.l,e=t.i;var n=new zs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ms(this,n),this.o=t.o}else t&&(n=String(t).match(xs))?(this.h=!!e,Os(this,n[1]||"",!0),this.s=Fs(n[2]||""),this.g=Fs(n[3]||"",!0),Ls(this,n[4]),this.l=Fs(n[5]||"",!0),Ms(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.h=!!e,this.i=new zs(null,this.h))}function Rs(t){return new ks(t)}function Os(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ls(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ms(t,e,n){e instanceof zs?(t.i=e,Js(t.i,t.h)):(n||(e=Bs(e,Gs)),t.i=new zs(e,t.h))}function Ps(t,e,n){t.i.set(e,n)}function Vs(t){return Ps(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bs(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Us),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Us(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ks.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bs(e,qs,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Bs(e,qs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Bs(n,"/"==n.charAt(0)?Ks:js,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bs(n,$s)),t.join("")};var qs=/[#\/\?@]/g,js=/[#\?:]/g,Ks=/[#\?]/g,Gs=/[#\?@]/g,$s=/#/g;function zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qs(t){t.g||(t.g=new Map,t.h=0,t.i&&Ns(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Hs(t,e){Qs(t),e=Xs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ws(t,e){return Qs(t),e=Xs(t,e),t.g.has(e)}function Ys(t,e,n){Hs(t,e),0<n.length&&(t.i=null,t.g.set(Xs(t,e),pn(n)),t.h+=n.length)}function Xs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Js(t,e){e&&!t.j&&(Qs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Hs(this,e),Ys(this,n,t))}),t)),t.j=e}We=zs.prototype,We.add=function(t,e){Qs(this),this.i=null,t=Xs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},We.forEach=function(t,e){Qs(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},We.oa=function(){Qs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},We.W=function(t){Qs(this);let e=[];if("string"===typeof t)Ws(this,t)&&(e=e.concat(this.g.get(Xs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},We.set=function(t,e){return Qs(this),this.i=null,t=Xs(this,t),Ws(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},We.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},We.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var Zs=class{constructor(t,e){this.h=t,this.g=e}};function ti(t){this.l=t||ei,Ze.PerformanceNavigationTiming?(t=Ze.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Ze.g&&Ze.g.Ga&&Ze.g.Ga()&&Ze.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ei=10;function ni(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ri(t){return t.h?1:t.g?t.g.size:0}function si(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ii(t,e){t.g?t.g.add(e):t.h=e}function oi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ai(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pn(t.i)}function ci(){}function ui(){this.g=new ci}function hi(t,e,n){const r=n||"";try{Cs(t,(function(t,n){let s=t;nn(t)&&(s=wr(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function li(t,e){const n=new Br;if(Ze.Image){const r=new Image;r.onload=hn(di,n,r,"TestLoadImage: loaded",!0,e),r.onerror=hn(di,n,r,"TestLoadImage: error",!1,e),r.onabort=hn(di,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=hn(di,n,r,"TestLoadImage: timeout",!1,e),Ze.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function di(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function fi(t){this.l=t.ac||null,this.j=t.jb||!1}function mi(t,e){gr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ti.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ci.prototype.stringify=function(t){return Ze.JSON.stringify(t,void 0)},ci.prototype.parse=function(t){return Ze.JSON.parse(t,void 0)},ln(fi,ns),fi.prototype.g=function(){return new mi(this.l,this.j)},fi.prototype.i=function(t){return function(){return t}}({}),ln(mi,gr);var gi=0;function pi(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wi(t)}function wi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}We=mi.prototype,We.open=function(t,e){if(this.readyState!=gi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wi(this)},We.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ze).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},We.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yi(this)),this.readyState=gi},We.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof Ze.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pi(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},We.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yi(this):wi(this),3==this.readyState&&pi(this)}},We.Va=function(t){this.g&&(this.response=this.responseText=t,yi(this))},We.Ua=function(t){this.g&&(this.response=t,yi(this))},We.ga=function(){this.g&&yi(this)},We.setRequestHeader=function(t,e){this.v.append(t,e)},We.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},We.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var vi=Ze.JSON.parse;function bi(t){gr.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ii,this.K=this.L=!1}ln(bi,gr);var Ii="",Ei=/^https?$/i,_i=["POST","PUT"];function Ti(t){return xn&&Un()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Si(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Di(t),Ci(t)}function Di(t){t.D||(t.D=!0,pr(t,"complete"),pr(t,"error"))}function Ai(t){if(t.h&&"undefined"!=typeof Je&&(!t.C[1]||4!=Ni(t)||2!=t.aa()))if(t.v&&4==Ni(t))Rr(t.Ha,0,t);else if(pr(t,"readystatechange"),4==Ni(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(xs)[1]||null;if(!s&&Ze.self&&Ze.self.location){var i=Ze.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ei.test(s?s.toLowerCase():"")}n=r}if(n)pr(t,"complete"),pr(t,"success");else{t.m=6;try{var o=2<Ni(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Di(t)}}finally{Ci(t)}}}function Ci(t,e){if(t.g){xi(t);const r=t.g,s=t.C[0]?tn:null;t.g=null,t.C=null,e||pr(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function xi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ze.clearTimeout(t.A),t.A=null)}function Ni(t){return t.g?t.g.readyState:0}function ki(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ii:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(yo){return null}}function Ri(t){let e="";return Wn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Oi(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ri(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ps(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mi(t){this.Ca=0,this.i=[],this.j=new Br,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Li("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Li("baseRetryDelayMs",5e3,t),this.bb=Li("retryDelaySeedMs",1e4,t),this.$a=Li("forwardChannelMaxRetries",2,t),this.ta=Li("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ti(t&&t.concurrentRequestLimit),this.Fa=new ui,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Pi(t){if(Fi(t),3==t.G){var e=t.U++,n=Rs(t.F);Ps(n,"SID",t.I),Ps(n,"RID",e),Ps(n,"TYPE","terminate"),ji(t,n),e=new hs(t,t.j,e,void 0),e.K=2,e.v=Vs(Rs(n)),n=!1,Ze.navigator&&Ze.navigator.sendBeacon&&(n=Ze.navigator.sendBeacon(e.v.toString(),"")),!n&&Ze.Image&&((new Image).src=e.v,n=!0),n||(e.g=to(e.l,null),e.g.da(e.v)),e.F=Date.now(),bs(e)}Ji(t)}function Vi(t){t.g&&(zi(t),t.g.cancel(),t.g=null)}function Fi(t){Vi(t),t.u&&(Ze.clearTimeout(t.u),t.u=null),Hi(t),t.h.cancel(),t.m&&("number"===typeof t.m&&Ze.clearTimeout(t.m),t.m=null)}function Bi(t){ni(t.h)||t.m||(t.m=!0,Sr(t.Ja,t),t.C=0)}function Ui(t,e){return!(ri(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=Zr(un(t.Ja,t,e),Yi(t,t.C)),t.C++,!0))}function qi(t,e){var n;n=e?e.m:t.U++;const r=Rs(t.F);Ps(r,"SID",t.I),Ps(r,"RID",n),Ps(r,"AID",t.T),ji(t,r),t.o&&t.s&&Oi(r,t.o,t.s),n=new hs(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ki(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ii(t.h,n),gs(n,r,e)}function ji(t,e){t.ia&&Wn(t.ia,(function(t,n){Ps(e,n,t)})),t.l&&Cs({},(function(t,n){Ps(e,n,t)}))}function Ki(t,e,n){n=Math.min(t.i.length,n);var r=t.l?un(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{hi(a,t,"req"+n+"_")}catch(xo){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Gi(t){t.g||t.u||(t.Z=1,Sr(t.Ia,t),t.A=0)}function $i(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Zr(un(t.Ia,t),Yi(t,t.A)),t.A++,!0)}function zi(t){null!=t.B&&(Ze.clearTimeout(t.B),t.B=null)}function Qi(t){t.g=new hs(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Rs(t.sa);Ps(e,"RID","rpc"),Ps(e,"SID",t.I),Ps(e,"CI",t.L?"0":"1"),Ps(e,"AID",t.T),Ps(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&Oi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vs(Rs(e)),n.s=null,n.P=!0,ps(n,t)}function Hi(t){null!=t.v&&(Ze.clearTimeout(t.v),t.v=null)}function Wi(t,e){var n=null;if(t.g==e){Hi(t),zi(t),t.g=null;var r=2}else{if(!si(t.h,e))return;n=e.D,oi(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Qr(),pr(r,new Jr(r,n,e,s)),Bi(t)}else Gi(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==r&&Ui(t,e)||2==r&&$i(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Xi(t,5);break;case 4:Xi(t,10);break;case 3:Xi(t,6);break;default:Xi(t,2)}}function Yi(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xi(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=un(t.kb,t);n||(n=new ks("//www.google.com/images/cleardot.gif"),Ze.location&&"http"==Ze.location.protocol||Os(n,"https"),Vs(n)),li(n.toString(),r)}else Xr(2);t.G=0,t.l&&t.l.va(e),Ji(t),Fi(t)}function Ji(t){if(t.G=0,t.la=[],t.l){const e=ai(t.h);0==e.length&&0==t.i.length||(yn(t.la,e),yn(t.la,t.i),t.h.i.length=0,pn(t.i),t.i.length=0),t.l.ua()}}function Zi(t,e,n){var r=n instanceof ks?Rs(n):new ks(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ls(r,r.m);else{var s=Ze.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ks(null,void 0);r&&Os(i,r),e&&(i.g=e),s&&Ls(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ps(r,n,e),Ps(r,"VER",t.ma),ji(t,r),r}function to(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new bi(new fi({jb:!0})):new bi(t.ra),e.Ka(t.H),e}function eo(){}function no(){if(xn&&!(10<=Number(jn)))throw Error("Environmental error: no available transport.")}function ro(t,e){gr.call(this),this.g=new Mi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!bn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bn(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oo(this)}function so(t){as.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function io(){cs.call(this),this.status=1}function oo(t){this.g=t}We=bi.prototype,We.Ka=function(t){this.L=t},We.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?rs(this.u):rs(is),this.g.onreadystatechange=un(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Si(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=Ze.FormData&&t instanceof Ze.FormData,!(0<=gn(_i,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xi(this),0<this.B&&((this.K=Ti(this.g))?(this.g.timeout=this.B,this.g.ontimeout=un(this.qa,this)):this.A=Rr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Si(this,i)}},We.qa=function(){"undefined"!=typeof Je&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pr(this,"timeout"),this.abort(8))},We.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pr(this,"complete"),pr(this,"abort"),Ci(this))},We.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ci(this,!0)),bi.X.M.call(this)},We.Ha=function(){this.s||(this.F||this.v||this.l?Ai(this):this.fb())},We.fb=function(){Ai(this)},We.aa=function(){try{return 2<Ni(this)?this.g.status:-1}catch(t){return-1}},We.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},We.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),vi(e)}},We.Ea=function(){return this.m},We.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},We=Mi.prototype,We.ma=8,We.G=1,We.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new hs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Yn(i),Jn(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ki(this,s,e),n=Rs(this.F),Ps(n,"RID",t),Ps(n,"CVER",22),this.D&&Ps(n,"X-HTTP-Session-Id",this.D),ji(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ri(i)))+"&"+e:this.o&&Oi(n,this.o,i)),ii(this.h,s),this.Ya&&Ps(n,"TYPE","init"),this.O?(Ps(n,"$req",e),Ps(n,"SID","null"),s.Z=!0,gs(s,n,null)):gs(s,n,e),this.G=2}}else 3==this.G&&(t?qi(this,t):0==this.i.length||ni(this.h)||qi(this))},We.Ia=function(){if(this.u=null,Qi(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zr(un(this.eb,this),t)}},We.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xr(10),Vi(this),Qi(this))},We.cb=function(){null!=this.v&&(this.v=null,Vi(this),$i(this),Xr(19))},We.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Xr(2)):(this.j.info("Failed to ping google.com"),Xr(1))},We=eo.prototype,We.xa=function(){},We.wa=function(){},We.va=function(){},We.ua=function(){},We.Ra=function(){},no.prototype.g=function(t,e){return new ro(t,e)},ln(ro,gr),ro.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Xr(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Zi(t,null,t.V),Bi(t)},ro.prototype.close=function(){Pi(this.g)},ro.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wr(t),t=n);e.i.push(new Zs(e.ab++,t)),3==e.G&&Bi(e)},ro.prototype.M=function(){this.g.l=null,delete this.j,Pi(this.g),delete this.g,ro.X.M.call(this)},ln(so,as),ln(io,cs),ln(oo,eo),oo.prototype.xa=function(){pr(this.g,"a")},oo.prototype.wa=function(t){pr(this.g,new so(t))},oo.prototype.va=function(t){pr(this.g,new io(t))},oo.prototype.ua=function(){pr(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,ro.prototype.send=ro.prototype.u,ro.prototype.open=ro.prototype.m,ro.prototype.close=ro.prototype.close,ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,es.COMPLETE="complete",ss.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",gr.prototype.listen=gr.prototype.N,bi.prototype.listenOnce=bi.prototype.O,bi.prototype.getLastError=bi.prototype.Oa,bi.prototype.getLastErrorCode=bi.prototype.Ea,bi.prototype.getStatus=bi.prototype.aa,bi.prototype.getResponseJson=bi.prototype.Sa,bi.prototype.getResponseText=bi.prototype.fa,bi.prototype.send=bi.prototype.da,bi.prototype.setWithCredentials=bi.prototype.Ka;var ao=Xe.createWebChannelTransport=function(){return new no},co=Xe.getStatEventTarget=function(){return Qr()},uo=Xe.ErrorCode=ts,ho=Xe.EventType=es,lo=Xe.Event=$r,fo=Xe.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mo=Xe.FetchXmlHttpFactory=fi,go=Xe.WebChannel=ss,po=Xe.XhrIo=bi;const yo="@firebase/firestore";
/**
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
 */class wo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wo.UNAUTHENTICATED=new wo(null),wo.GOOGLE_CREDENTIALS=new wo("google-credentials-uid"),wo.FIRST_PARTY=new wo("first-party-uid"),wo.MOCK_USER=new wo("mock-user");
/**
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
 */
let vo="9.12.1";
/**
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
 */const bo=new X("@firebase/firestore");function Io(){return bo.logLevel}function Eo(t){bo.setLogLevel(t)}function _o(t,...e){if(bo.logLevel<=z.DEBUG){const n=e.map(Do);bo.debug(`Firestore (${vo}): ${t}`,...n)}}function To(t,...e){if(bo.logLevel<=z.ERROR){const n=e.map(Do);bo.error(`Firestore (${vo}): ${t}`,...n)}}function So(t,...e){if(bo.logLevel<=z.WARN){const n=e.map(Do);bo.warn(`Firestore (${vo}): ${t}`,...n)}}function Do(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function Ao(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw To(e),new Error(e)}function Co(t,e){t||Ao()}function xo(t,e){t||Ao()}function No(t,e){return t}
/**
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
 */const ko={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ro extends A{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Oo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wo.UNAUTHENTICATED)))}shutdown(){}}class Po{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Vo{constructor(t){this.t=t,this.currentUser=wo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Oo;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Oo,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{_o("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(_o("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Oo)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(_o("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Co("string"==typeof e.accessToken),new Lo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Co(null===t||"string"==typeof t),new wo(t)}}class Fo{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=wo.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Co(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Bo{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Fo(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(wo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qo{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&_o("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,_o("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{_o("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):_o("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Co("string"==typeof t.token),this.A=t.token,new Uo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function jo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Ko{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=jo(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Go(t,e){return t<e?-1:t>e?1:0}function $o(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}function zo(t){return t+"\0"}
/**
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
 */class Qo{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ro(ko.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ro(ko.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ro(ko.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ro(ko.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Qo.fromMillis(Date.now())}static fromDate(t){return Qo.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Qo(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Go(this.nanoseconds,t.nanoseconds):Go(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Ho{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ho(t)}static min(){return new Ho(new Qo(0,0))}static max(){return new Ho(new Qo(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Wo{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ao(),void 0===n?n=t.length-e:n>t.length-e&&Ao(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Wo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Wo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Yo extends Wo{construct(t,e,n){return new Yo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ro(ko.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Yo(e)}static emptyPath(){return new Yo([])}}const Xo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jo extends Wo{construct(t,e,n){return new Jo(t,e,n)}static isValidIdentifier(t){return Xo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Jo(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Ro(ko.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Ro(ko.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ro(ko.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Ro(ko.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Jo(e)}static emptyPath(){return new Jo([])}}
/**
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
 */class Zo{constructor(t){this.path=t}static fromPath(t){return new Zo(Yo.fromString(t))}static fromName(t){return new Zo(Yo.fromString(t).popFirst(5))}static empty(){return new Zo(Yo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Yo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Yo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Zo(new Yo(t.slice()))}}
/**
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
 */class ta{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function ea(t){return t.fields.find((t=>2===t.kind))}function na(t){return t.fields.filter((t=>2!==t.kind))}ta.UNKNOWN_ID=-1;class ra{constructor(t,e){this.fieldPath=t,this.kind=e}}class sa{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new sa(0,aa.min())}}function ia(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ho.fromTimestamp(1e9===r?new Qo(n+1,0):new Qo(n,r));return new aa(s,Zo.empty(),e)}function oa(t){return new aa(t.readTime,t.key,-1)}class aa{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new aa(Ho.min(),Zo.empty(),-1)}static max(){return new aa(Ho.max(),Zo.empty(),-1)}}function ca(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Zo.comparator(t.documentKey,e.documentKey),0!==n?n:Go(t.largestBatchId,e.largestBatchId))}
/**
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
 */const ua="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ha{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function la(t){if(t.code!==ko.FAILED_PRECONDITION||t.message!==ua)throw t;_o("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class da{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ao(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new da(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof da?e:da.resolve(e)}catch(t){return da.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):da.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):da.reject(e)}static resolve(t){return new da(((e,n)=>{e(t)}))}static reject(t){return new da(((e,n)=>{n(t)}))}static waitFor(t){return new da(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=da.resolve(!1);for(const n of t)e=e.next((t=>t?da.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new da(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new da(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
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
 */class fa{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.P=new Oo,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{e.error?this.P.reject(new pa(t,e.error)):this.P.resolve()},this.transaction.onerror=e=>{const n=Ia(e.target.error);this.P.reject(new pa(t,n))}}static open(t,e,n,r){try{return new fa(e,t.transaction(r,n))}catch(t){throw new pa(e,t)}}get v(){return this.P.promise}abort(t){t&&this.P.reject(t),this.aborted||(_o("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new wa(e)}}class ma{constructor(t,e,n){this.name=t,this.version=e,this.S=n,12.2===ma.D(d())&&To("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _o("SimpleDb","Removing database:",t),va(window.indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!p())return!1;if(ma.N())return!0;const t=d(),e=ma.D(t),n=0<e&&e<10,r=ma.k(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static N(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/"})||void 0===t?void 0:t.O)}static M(t,e){return t.store(e)}static D(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(t){return this.db||(_o("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new pa(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new Ro(ko.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Ro(ko.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new pa(t,r))},r.onupgradeneeded=t=>{_o("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.S.$(e,r.transaction,t.oldVersion,this.version).next((()=>{_o("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.F(t);const e=fa.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).next((t=>(e.V(),t))).catch((t=>(e.abort(t),da.reject(t)))).toPromise();return i.catch((()=>{})),await e.v,i}catch(t){const e=t,n="FirebaseError"!==e.name&&i<3;if(_o("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ga{constructor(t){this.U=t,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(t){this.U=t}done(){this.q=!0}j(t){this.K=t}delete(){return va(this.U.delete())}}class pa extends Ro{constructor(t,e){super(ko.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ya(t){return"IndexedDbTransactionError"===t.name}class wa{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(_o("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(_o("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),va(n)}add(t){return _o("SimpleDb","ADD",this.store.name,t,t),va(this.store.add(t))}get(t){return va(this.store.get(t)).next((e=>(void 0===e&&(e=null),_o("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return _o("SimpleDb","DELETE",this.store.name,t),va(this.store.delete(t))}count(){return _o("SimpleDb","COUNT",this.store.name),va(this.store.count())}W(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.H(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new da(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}J(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new da(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}Y(t,e){_o("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const r=this.cursor(n);return this.H(r,((t,e,n)=>n.delete()))}Z(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.H(r,e)}tt(t){const e=this.cursor({});return new da(((n,r)=>{e.onerror=t=>{const e=Ia(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}H(t,e){const n=[];return new da(((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new ga(s),o=e(s.primaryKey,s.value,i);if(o instanceof da){const t=o.catch((t=>(i.done(),da.reject(t))));n.push(t)}i.isDone?r():null===i.G?s.continue():s.continue(i.G)}})).next((()=>da.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function va(t){return new da(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Ia(t.target.error);n(e)}}))}let ba=!1;function Ia(t){const e=ma.D(d());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new Ro("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ba||(ba=!0,setTimeout((()=>{throw t}),0)),t}}return t}class Ea{constructor(t,e){this.asyncQueue=t,this.et=e,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(t){_o("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{_o("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){ya(t)?_o("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await la(t)}await this.nt(6e4)}))}}class _a{constructor(t,e){this.localStore=t,this.persistence=e}async st(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.it(e,t)))}it(t,e){const n=new Set;let r=e,s=!0;return da.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((e=>{if(null!==e&&!n.has(e))return _o("IndexBackiller",`Processing collection: ${e}`),this.rt(t,e,r).next((t=>{r-=t,n.add(e)}));s=!1})))).next((()=>e-r))}rt(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((r=>this.localStore.localDocuments.getNextDocuments(t,e,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(t,s).next((()=>this.ot(r,n))).next((n=>(_o("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n)))).next((()=>s.size))}))))}ot(t,e){let n=t;return e.changes.forEach(((t,e)=>{const r=oa(e);ca(r,n)>0&&(n=r)})),new aa(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
/**
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
 */class Ta{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
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
 */function Sa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Da(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */Ta.at=-1;class Ca{constructor(t,e){this.comparator=t,this.root=e||Na.EMPTY}insert(t,e){return new Ca(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Na.BLACK,null,null))}remove(t){return new Ca(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Na.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xa(this.root,t,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xa(this.root,t,this.comparator,!0)}}class xa{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Na{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Na.RED,this.left=null!=r?r:Na.EMPTY,this.right=null!=s?s:Na.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Na(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Na.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Na.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Na.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ao();if(this.right.isRed())throw Ao();const t=this.left.check();if(t!==this.right.check())throw Ao();return t+(this.isRed()?0:1)}}Na.EMPTY=null,Na.RED=!0,Na.BLACK=!1,Na.EMPTY=new class{constructor(){this.size=0}get key(){throw Ao()}get value(){throw Ao()}get color(){throw Ao()}get left(){throw Ao()}get right(){throw Ao()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Na(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class ka{constructor(t){this.comparator=t,this.data=new Ca(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ra(this.data.getIterator())}getIteratorFrom(t){return new Ra(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ka))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ka(this.comparator);return e.data=t,e}}class Ra{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Oa(t){return t.hasNext()?t.getNext():void 0}
/**
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
 */class La{constructor(t){this.fields=t,t.sort(Jo.comparator)}static empty(){return new La([])}unionWith(t){let e=new ka(Jo.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new La(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return $o(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */function Ma(){return"undefined"!=typeof atob}
/**
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
 */class Pa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Pa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Pa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Go(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pa.EMPTY_BYTE_STRING=new Pa("");const Va=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fa(t){if(Co(!!t),"string"==typeof t){let e=0;const n=Va.exec(t);if(Co(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ba(t.seconds),nanos:Ba(t.nanos)}}function Ba(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ua(t){return"string"==typeof t?Pa.fromBase64String(t):Pa.fromUint8Array(t)}
/**
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
 */function qa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ja(t){const e=t.mapValue.fields.__previous_value__;return qa(e)?ja(e):e}function Ka(t){const e=Fa(t.mapValue.fields.__local_write_time__.timestampValue);return new Qo(e.seconds,e.nanos)}
/**
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
 */class Ga{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class $a{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $a("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $a&&t.projectId===this.projectId&&t.database===this.database}}function za(t){return null==t}function Qa(t){return 0===t&&1/t==-1/0}function Ha(t){return"number"==typeof t&&Number.isInteger(t)&&!Qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */const Wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ya={nullValue:"NULL_VALUE"};function Xa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qa(t)?4:lc(t)?9007199254740991:10:Ao()}function Ja(t,e){if(t===e)return!0;const n=Xa(t);if(n!==Xa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ka(t).isEqual(Ka(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fa(t.timestampValue),r=Fa(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ua(t.bytesValue).isEqual(Ua(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ba(t.geoPointValue.latitude)===Ba(e.geoPointValue.latitude)&&Ba(t.geoPointValue.longitude)===Ba(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ba(t.integerValue)===Ba(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ba(t.doubleValue),r=Ba(e.doubleValue);return n===r?Qa(n)===Qa(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],Ja);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Sa(n)!==Sa(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ja(n[s],r[s])))return!1;return!0}(t,e);default:return Ao()}}function Za(t,e){return void 0!==(t.values||[]).find((t=>Ja(t,e)))}function tc(t,e){if(t===e)return 0;const n=Xa(t),r=Xa(e);if(n!==r)return Go(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Go(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ba(t.integerValue||t.doubleValue),r=Ba(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ec(t.timestampValue,e.timestampValue);case 4:return ec(Ka(t),Ka(e));case 5:return Go(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ua(t),r=Ua(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Go(n[s],r[s]);if(0!==t)return t}return Go(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Go(Ba(t.latitude),Ba(e.latitude));return 0!==n?n:Go(Ba(t.longitude),Ba(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=tc(n[s],r[s]);if(t)return t}return Go(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Wa.mapValue&&e===Wa.mapValue)return 0;if(t===Wa.mapValue)return 1;if(e===Wa.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Go(r[o],i[o]);if(0!==t)return t;const e=tc(n[r[o]],s[i[o]]);if(0!==e)return e}return Go(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Ao()}}function ec(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Go(t,e);const n=Fa(t),r=Fa(e),s=Go(n.seconds,r.seconds);return 0!==s?s:Go(n.nanos,r.nanos)}function nc(t){return rc(t)}function rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fa(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ua(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Zo.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=rc(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${rc(t.fields[s])}`;return n+"}"}(t.mapValue):Ao();var e,n}function sc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ic(t){return!!t&&"integerValue"in t}function oc(t){return!!t&&"arrayValue"in t}function ac(t){return!!t&&"nullValue"in t}function cc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uc(t){return!!t&&"mapValue"in t}function hc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Da(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=hc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function dc(t){return"nullValue"in t?Ya:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?sc($a.empty(),Zo.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Ao()}function fc(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?sc($a.empty(),Zo.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Wa:Ao()}function mc(t,e){const n=tc(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function gc(t,e){const n=tc(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
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
 */class pc{constructor(t){this.value=t}static empty(){return new pc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!uc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hc(e)}setAll(t){let e=Jo.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=hc(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());uc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ja(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];uc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Da(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new pc(hc(this.value))}}function yc(t){const e=[];return Da(t.fields,((t,n)=>{const r=new Jo([t]);if(uc(n)){const t=yc(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new La(e)
/**
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
 */}class wc{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new wc(t,0,Ho.min(),Ho.min(),pc.empty(),0)}static newFoundDocument(t,e,n){return new wc(t,1,e,Ho.min(),n,0)}static newNoDocument(t,e){return new wc(t,2,e,Ho.min(),pc.empty(),0)}static newUnknownDocument(t,e){return new wc(t,3,e,Ho.min(),pc.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ho.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof wc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wc(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class vc{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ht=null}}function bc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vc(t,e,n,r,s,i,o)}function Ic(t){const e=No(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+nc(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>nc(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>nc(t))).join(",")),e.ht=t}return e.ht}function Ec(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${nc(e.value)}`;var e})).join(", ")}]`),za(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>nc(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>nc(t))).join(",")),`Target(${e})`}function _c(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Bc(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ja(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qc(t.startAt,e.startAt)&&qc(t.endAt,e.endAt)}function Tc(t){return Zo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Sc(t,e){return t.filters.filter((t=>t instanceof Cc&&t.field.isEqual(e)))}function Dc(t,e,n){let r=Ya,s=!0;for(const i of Sc(t,e)){let t=Ya,e=!0;switch(i.op){case"<":case"<=":t=dc(i.value);break;case"==":case"in":case">=":t=i.value;break;case">":t=i.value,e=!1;break;case"!=":case"not-in":t=Ya}mc({value:r,inclusive:s},{value:t,inclusive:e})<0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];mc({value:r,inclusive:s},{value:t,inclusive:n.inclusive})<0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}function Ac(t,e,n){let r=Wa,s=!0;for(const i of Sc(t,e)){let t=Wa,e=!0;switch(i.op){case">=":case">":t=fc(i.value),e=!1;break;case"==":case"in":case"<=":t=i.value;break;case"<":t=i.value,e=!1;break;case"!=":case"not-in":t=Wa}gc({value:r,inclusive:s},{value:t,inclusive:e})>0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];gc({value:r,inclusive:s},{value:t,inclusive:n.inclusive})>0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}class Cc extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new xc(t,e,n):"array-contains"===e?new Oc(t,n):"in"===e?new Lc(t,n):"not-in"===e?new Mc(t,n):"array-contains-any"===e?new Pc(t,n):new Cc(t,e,n)}static lt(t,e,n){return"in"===e?new Nc(t,n):new kc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(tc(e,this.value)):null!==e&&Xa(this.value)===Xa(e)&&this.ft(tc(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ao()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xc extends Cc{constructor(t,e,n){super(t,e,n),this.key=Zo.fromName(n.referenceValue)}matches(t){const e=Zo.comparator(t.key,this.key);return this.ft(e)}}class Nc extends Cc{constructor(t,e){super(t,"in",e),this.keys=Rc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class kc extends Cc{constructor(t,e){super(t,"not-in",e),this.keys=Rc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Rc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Zo.fromName(t.referenceValue)))}class Oc extends Cc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oc(e)&&Za(e.arrayValue,this.value)}}class Lc extends Cc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Za(this.value.arrayValue,e)}}class Mc extends Cc{constructor(t,e){super(t,"not-in",e)}matches(t){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Za(this.value.arrayValue,e)}}class Pc extends Cc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Za(this.value.arrayValue,t)))}}class Vc{constructor(t,e){this.position=t,this.inclusive=e}}class Fc{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Uc(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?Zo.comparator(Zo.fromName(o.referenceValue),n.key):tc(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function qc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ja(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class jc{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Kc(t,e,n,r,s,i,o,a){return new jc(t,e,n,r,s,i,o,a)}function Gc(t){return new jc(t)}function $c(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qc(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Hc(t){return null!==t.collectionGroup}function Wc(t){const e=No(t);if(null===e._t){e._t=[];const t=Qc(e),n=zc(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Fc(t)),e._t.push(new Fc(Jo.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Fc(Jo.keyField(),t))}}}return e._t}function Yc(t){const e=No(t);if(!e.wt)if("F"===e.limitType)e.wt=bc(e.path,e.collectionGroup,Wc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Wc(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Fc(s.field,e))}const n=e.endAt?new Vc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vc(e.startAt.position,e.startAt.inclusive):null;e.wt=bc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Xc(t,e,n){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return _c(Yc(t),Yc(e))&&t.limitType===e.limitType}function Zc(t){return`${Ic(Yc(t))}|lt:${t.limitType}`}function tu(t){return`Query(target=${Ec(Yc(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Zo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Uc(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Wc(t),e))&&!(t.endAt&&!function(t,e,n){const r=Uc(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Wc(t),e))}(t,e)}function nu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ru(t){return(e,n)=>{let r=!1;for(const s of Wc(t)){const t=su(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function su(t,e,n){const r=t.field.isKeyField()?Zo.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?tc(r,s):Ao()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ao()}}
/**
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
 */function iu(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function ou(t){return{integerValue:""+t}}function au(t,e){return Ha(e)?ou(e):iu(t,e)}
/**
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
 */class cu{constructor(){this._=void 0}}function uu(t,e,n){return t instanceof du?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof fu?mu(t,e):t instanceof gu?pu(t,e):function(t,e){const n=lu(t,e),r=wu(n)+wu(t.yt);return ic(n)&&ic(t.yt)?ou(r):iu(t.It,r)}(t,e)}function hu(t,e,n){return t instanceof fu?mu(t,e):t instanceof gu?pu(t,e):n}function lu(t,e){return t instanceof yu?ic(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class du extends cu{}class fu extends cu{constructor(t){super(),this.elements=t}}function mu(t,e){const n=vu(e);for(const r of t.elements)n.some((t=>Ja(t,r)))||n.push(r);return{arrayValue:{values:n}}}class gu extends cu{constructor(t){super(),this.elements=t}}function pu(t,e){let n=vu(e);for(const r of t.elements)n=n.filter((t=>!Ja(t,r)));return{arrayValue:{values:n}}}class yu extends cu{constructor(t,e){super(),this.It=t,this.yt=e}}function wu(t){return Ba(t.integerValue||t.doubleValue)}function vu(t){return oc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class bu{constructor(t,e){this.field=t,this.transform=e}}function Iu(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof fu&&e instanceof fu||t instanceof gu&&e instanceof gu?$o(t.elements,e.elements,Ja):t instanceof yu&&e instanceof yu?Ja(t.yt,e.yt):t instanceof du&&e instanceof du}(t.transform,e.transform)}class Eu{constructor(t,e){this.version=t,this.transformResults=e}}class _u{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _u}static exists(t){return new _u(void 0,t)}static updateTime(t){return new _u(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Su{}function Du(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Pu(t.key,_u.none()):new ku(t.key,t.data,_u.none());{const n=t.data,r=pc.empty();let s=new ka(Jo.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ru(t.key,r,new La(s.toArray()),_u.none())}}function Au(t,e,n){t instanceof ku?function(t,e,n){const r=t.value.clone(),s=Lu(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ru?function(t,e,n){if(!Tu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Lu(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ou(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Cu(t,e,n,r){return t instanceof ku?function(t,e,n,r){if(!Tu(t.precondition,e))return n;const s=t.value.clone(),i=Mu(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ru?function(t,e,n,r){if(!Tu(t.precondition,e))return n;const s=Mu(t.fieldTransforms,r,e),i=e.data;return i.setAll(Ou(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Tu(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function xu(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=lu(r.transform,t||null);null!=s&&(null===n&&(n=pc.empty()),n.set(r.field,s))}return n||null}function Nu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&$o(t,e,((t,e)=>Iu(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ku extends Su{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ru extends Su{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ou(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Lu(t,e,n){const r=new Map;Co(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,hu(o,a,n[s]))}return r}function Mu(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,uu(t,i,e))}return r}class Pu extends Su{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vu extends Su{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Fu{constructor(t){this.count=t}}
/**
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
 */var Bu,Uu;function qu(t){switch(t){default:return Ao();case ko.CANCELLED:case ko.UNKNOWN:case ko.DEADLINE_EXCEEDED:case ko.RESOURCE_EXHAUSTED:case ko.INTERNAL:case ko.UNAVAILABLE:case ko.UNAUTHENTICATED:return!1;case ko.INVALID_ARGUMENT:case ko.NOT_FOUND:case ko.ALREADY_EXISTS:case ko.PERMISSION_DENIED:case ko.FAILED_PRECONDITION:case ko.ABORTED:case ko.OUT_OF_RANGE:case ko.UNIMPLEMENTED:case ko.DATA_LOSS:return!0}}function ju(t){if(void 0===t)return To("GRPC error has no .code"),ko.UNKNOWN;switch(t){case Bu.OK:return ko.OK;case Bu.CANCELLED:return ko.CANCELLED;case Bu.UNKNOWN:return ko.UNKNOWN;case Bu.DEADLINE_EXCEEDED:return ko.DEADLINE_EXCEEDED;case Bu.RESOURCE_EXHAUSTED:return ko.RESOURCE_EXHAUSTED;case Bu.INTERNAL:return ko.INTERNAL;case Bu.UNAVAILABLE:return ko.UNAVAILABLE;case Bu.UNAUTHENTICATED:return ko.UNAUTHENTICATED;case Bu.INVALID_ARGUMENT:return ko.INVALID_ARGUMENT;case Bu.NOT_FOUND:return ko.NOT_FOUND;case Bu.ALREADY_EXISTS:return ko.ALREADY_EXISTS;case Bu.PERMISSION_DENIED:return ko.PERMISSION_DENIED;case Bu.FAILED_PRECONDITION:return ko.FAILED_PRECONDITION;case Bu.ABORTED:return ko.ABORTED;case Bu.OUT_OF_RANGE:return ko.OUT_OF_RANGE;case Bu.UNIMPLEMENTED:return ko.UNIMPLEMENTED;case Bu.DATA_LOSS:return ko.DATA_LOSS;default:return Ao()}}(Uu=Bu||(Bu={}))[Uu.OK=0]="OK",Uu[Uu.CANCELLED=1]="CANCELLED",Uu[Uu.UNKNOWN=2]="UNKNOWN",Uu[Uu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uu[Uu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uu[Uu.NOT_FOUND=5]="NOT_FOUND",Uu[Uu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uu[Uu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uu[Uu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uu[Uu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uu[Uu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uu[Uu.ABORTED=10]="ABORTED",Uu[Uu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uu[Uu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uu[Uu.INTERNAL=13]="INTERNAL",Uu[Uu.UNAVAILABLE=14]="UNAVAILABLE",Uu[Uu.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Ku{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Da(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Aa(this.inner)}size(){return this.innerSize}}
/**
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
 */const Gu=new Ca(Zo.comparator);function $u(){return Gu}const zu=new Ca(Zo.comparator);function Qu(...t){let e=zu;for(const n of t)e=e.insert(n.key,n);return e}function Hu(t){let e=zu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Wu(){return Xu()}function Yu(){return Xu()}function Xu(){return new Ku((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ju=new Ca(Zo.comparator),Zu=new ka(Zo.comparator);function th(...t){let e=Zu;for(const n of t)e=e.add(n);return e}const eh=new ka(Go);function nh(){return eh}
/**
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
 */class rh{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,sh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rh(Ho.min(),r,nh(),$u(),th())}}class sh{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sh(n,e,th(),th(),th())}}
/**
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
 */class ih{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class oh{constructor(t,e){this.targetId=t,this.At=e}}class ah{constructor(t,e,n=Pa.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ch{constructor(){this.Rt=0,this.bt=lh(),this.Pt=Pa.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=th(),e=th(),n=th();return this.bt.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ao()}})),new sh(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=lh()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class uh{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=$u(),this.qt=hh(),this.Kt=new ka(Go)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ao()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(Tc(t))if(0===n){const n=new Zo(t.path);this.jt(e,n,wc.newNoDocument(n,Ho.min()))}else Co(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const s=this.Xt(r);if(s){if(n.current&&Tc(s.target)){const e=new Zo(s.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,wc.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=th();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new rh(t,e,this.Kt,this.Ut,n);return this.Ut=$u(),this.qt=hh(),this.Kt=new ka(Go),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new ch,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new ka(Go),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||_o("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ch),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function hh(){return new Ca(Zo.comparator)}function lh(){return new Ca(Zo.comparator)}
/**
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
 */const dh=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fh=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class mh{constructor(t,e){this.databaseId=t,this.gt=e}}function gh(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ph(t,e){return t.gt?e.toBase64():e.toUint8Array()}function yh(t,e){return gh(t,e.toTimestamp())}function wh(t){return Co(!!t),Ho.fromTimestamp(function(t){const e=Fa(t);return new Qo(e.seconds,e.nanos)}(t))}function vh(t,e){return function(t){return new Yo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function bh(t){const e=Yo.fromString(t);return Co(zh(e)),e}function Ih(t,e){return vh(t.databaseId,e.path)}function Eh(t,e){const n=bh(e);if(n.get(1)!==t.databaseId.projectId)throw new Ro(ko.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ro(ko.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Zo(Dh(n))}function _h(t,e){return vh(t.databaseId,e)}function Th(t){const e=bh(t);return 4===e.length?Yo.emptyPath():Dh(e)}function Sh(t){return new Yo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dh(t){return Co(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ah(t,e,n){return{name:Ih(t,e),fields:n.value.mapValue.fields}}function Ch(t,e,n){const r=Eh(t,e.name),s=wh(e.updateTime),i=new pc({mapValue:{fields:e.fields}}),o=wc.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function xh(t,e){return"found"in e?function(t,e){Co(!!e.found),e.found.name,e.found.updateTime;const n=Eh(t,e.found.name),r=wh(e.found.updateTime),s=new pc({mapValue:{fields:e.found.fields}});return wc.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){Co(!!e.missing),Co(!!e.readTime);const n=Eh(t,e.missing),r=wh(e.readTime);return wc.newNoDocument(n,r)}(t,e):Ao()}function Nh(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ao()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Co(void 0===e||"string"==typeof e),Pa.fromBase64String(e||"")):(Co(void 0===e||e instanceof Uint8Array),Pa.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ko.UNKNOWN:ju(t.code);return new Ro(e,t.message||"")}(o);n=new ah(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eh(t,r.document.name),i=wh(r.document.updateTime),o=new pc({mapValue:{fields:r.document.fields}}),a=wc.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ih(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eh(t,r.document),i=r.readTime?wh(r.readTime):Ho.min(),o=wc.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ih([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eh(t,r.document),i=r.removedTargetIds||[];n=new ih([],i,s,null)}else{if(!("filter"in e))return Ao();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Fu(r),i=t.targetId;n=new oh(i,s)}}return n}function kh(t,e){let n;if(e instanceof ku)n={update:Ah(t,e.key,e.value)};else if(e instanceof Pu)n={delete:Ih(t,e.key)};else if(e instanceof Ru)n={update:Ah(t,e.key,e.data),updateMask:$h(e.fieldMask)};else{if(!(e instanceof Vu))return Ao();n={verify:Ih(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof du)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yu)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Ao()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:yh(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ao()}(t,e.precondition)),n}function Rh(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?_u.updateTime(wh(t.updateTime)):void 0!==t.exists?_u.exists(t.exists):_u.none()}(e.currentDocument):_u.none(),r=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Co("REQUEST_TIME"===e.setToServerValue),n=new du;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new fu(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new gu(t)}else"increment"in e?n=new yu(t,e.increment):Ao();const r=Jo.fromServerFormat(e.fieldPath);return new bu(r,n)}(t,e))):[];if(e.update){e.update.name;const s=Eh(t,e.update.name),i=new pc({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new La(e.map((t=>Jo.fromServerFormat(t))))}(e.updateMask);return new Ru(s,i,t,n,r)}return new ku(s,i,n,r)}if(e.delete){const r=Eh(t,e.delete);return new Pu(r,n)}if(e.verify){const r=Eh(t,e.verify);return new Vu(r,n)}return Ao()}function Oh(t,e){return t&&t.length>0?(Co(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wh(t.updateTime):wh(e);return n.isEqual(Ho.min())&&(n=wh(e)),new Eu(n,t.transformResults||[])}(t,e)))):[]}function Lh(t,e){return{documents:[_h(t,e.path)]}}function Mh(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=_h(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_h(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(cc(t.value))return{unaryFilter:{field:qh(t.field),op:"IS_NAN"}};if(ac(t.value))return{unaryFilter:{field:qh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(cc(t.value))return{unaryFilter:{field:qh(t.field),op:"IS_NOT_NAN"}};if(ac(t.value))return{unaryFilter:{field:qh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qh(t.field),op:Uh(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qh(t.field),direction:Bh(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||za(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ph(t){let e=Th(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Co(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Fh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Fc(jh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,za(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Vc(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Vc(n,e)}(n.endAt)),Kc(e,s,o,i,a,"F",c,u)}function Vh(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ao()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Fh(t){return t?void 0!==t.unaryFilter?[Gh(t)]:void 0!==t.fieldFilter?[Kh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Fh(t))).reduce(((t,e)=>t.concat(e))):Ao():[]}function Bh(t){return dh[t]}function Uh(t){return fh[t]}function qh(t){return{fieldPath:t.canonicalString()}}function jh(t){return Jo.fromServerFormat(t.fieldPath)}function Kh(t){return Cc.create(jh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ao()}}(t.fieldFilter.op),t.fieldFilter.value)}function Gh(t){switch(t.unaryFilter.op){case"IS_NAN":const e=jh(t.unaryFilter.field);return Cc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=jh(t.unaryFilter.field);return Cc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=jh(t.unaryFilter.field);return Cc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=jh(t.unaryFilter.field);return Cc.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ao()}}function $h(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */function Qh(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wh(e)),e=Hh(t.get(n),e);return Wh(e)}function Hh(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Wh(t){return t+""}function Yh(t){const e=t.length;if(Co(e>=2),2===e)return Co(""===t.charAt(0)&&""===t.charAt(1)),Yo.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&Ao(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:Ao()}i=e+2}return new Yo(r)}
/**
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
 */const Xh=["userId","batchId"];
/**
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
 */function Jh(t,e){return[t,Qh(e)]}function Zh(t,e,n){return[t,Qh(e),n]}const tl={},el=["prefixPath","collectionGroup","readTime","documentId"],nl=["prefixPath","collectionGroup","documentId"],rl=["collectionGroup","readTime","prefixPath","documentId"],sl=["canonicalId","targetId"],il=["targetId","path"],ol=["path","targetId"],al=["collectionId","parent"],cl=["indexId","uid"],ul=["uid","sequenceNumber"],hl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ll=["indexId","uid","orderedDocumentKey"],dl=["userId","collectionPath","documentId"],fl=["userId","collectionPath","largestBatchId"],ml=["userId","collectionGroup","largestBatchId"],gl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pl=[...gl,"documentOverlays"],yl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wl=yl,vl=[...wl,"indexConfiguration","indexState","indexEntries"];
/**
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
 */class bl extends ha{constructor(t,e){super(),this.ie=t,this.currentSequenceNumber=e}}function Il(t,e){const n=No(t);return ma.M(n.ie,e)}
/**
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
 */class El{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Au(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Cu(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Cu(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Yu();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Du(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Ho.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),th())}isEqual(t){return this.batchId===t.batchId&&$o(this.mutations,t.mutations,((t,e)=>Nu(t,e)))&&$o(this.baseMutations,t.baseMutations,((t,e)=>Nu(t,e)))}}class _l{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Co(t.mutations.length===n.length);let r=Ju;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new _l(t,e,n,r)}}
/**
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
 */class Tl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Sl{constructor(t,e,n,r,s=Ho.min(),i=Ho.min(),o=Pa.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Sl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Sl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Sl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class Dl{constructor(t){this.re=t}}function Al(t,e){let n;if(e.document)n=Ch(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=Zo.fromSegments(e.noDocument.path),r=kl(e.noDocument.readTime);n=wc.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Ao();{const t=Zo.fromSegments(e.unknownDocument.path),r=kl(e.unknownDocument.version);n=wc.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new Qo(t[0],t[1]);return Ho.fromTimestamp(e)}(e.readTime)),n}function Cl(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:xl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(t,e){return{name:Ih(t,e.key),fields:e.data.value.mapValue.fields,updateTime:gh(t,e.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Nl(e.version)};else{if(!e.isUnknownDocument())return Ao();r.unknownDocument={path:n.path.toArray(),version:Nl(e.version)}}return r}function xl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Nl(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function kl(t){const e=new Qo(t.seconds,t.nanoseconds);return Ho.fromTimestamp(e)}function Rl(t,e){const n=(e.baseMutations||[]).map((e=>Rh(t.re,e)));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((e=>Rh(t.re,e))),s=Qo.fromMillis(e.localWriteTimeMs);return new El(e.batchId,s,n,r)}function Ol(t){const e=kl(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?kl(t.lastLimboFreeSnapshotVersion):Ho.min();let r;var s;return void 0!==t.query.documents?(Co(1===(s=t.query).documents.length),r=Yc(Gc(Th(s.documents[0])))):r=function(t){return Yc(Ph(t))}(t.query),new Sl(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Pa.fromBase64String(t.resumeToken))}function Ll(t,e){const n=Nl(e.snapshotVersion),r=Nl(e.lastLimboFreeSnapshotVersion);let s;s=Tc(e.target)?Lh(t.re,e.target):Mh(t.re,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ic(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Ml(t){const e=Ph({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xc(e,e.limit,"L"):e}function Pl(t,e){return new Tl(e.largestBatchId,Rh(t.re,e.overlayMutation))}function Vl(t,e){const n=e.path.lastSegment();return[t,Qh(e.path.popLast()),n]}function Fl(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Nl(r.readTime),documentKey:Qh(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
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
 */class Bl{getBundleMetadata(t,e){return Ul(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:kl(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return Ul(t).put({bundleId:(n=e).id,createTime:Nl(wh(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return ql(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:Ml(e.bundledQuery),readTime:kl(e.readTime)};var e}))}saveNamedQuery(t,e){return ql(t).put(function(t){return{name:t.name,readTime:Nl(wh(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Ul(t){return Il(t,"bundles")}function ql(t){return Il(t,"namedQueries")}
/**
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
 */class jl{constructor(t,e){this.It=t,this.userId=e}static oe(t,e){const n=e.uid||"";return new jl(t,n)}getOverlay(t,e){return Kl(t).get(Vl(this.userId,e)).next((t=>t?Pl(this.It,t):null))}getOverlays(t,e){const n=Wu();return da.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){const r=[];return n.forEach(((n,s)=>{const i=new Tl(e,s);r.push(this.ue(t,i))})),da.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach((t=>r.add(Qh(t.getCollectionPath()))));const s=[];return r.forEach((e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);s.push(Kl(t).Y("collectionPathOverlayIndex",r))})),da.waitFor(s)}getOverlaysForCollection(t,e,n){const r=Wu(),s=Qh(e),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Kl(t).W("collectionPathOverlayIndex",i).next((t=>{for(const e of t){const t=Pl(this.It,e);r.set(t.getKey(),t)}return r}))}getOverlaysForCollectionGroup(t,e,n,r){const s=Wu();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Kl(t).Z({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=Pl(this.It,e);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ue(t,e){return Kl(t).put(function(t,e,n){const[r,s,i]=Vl(e,n.mutation.key);return{userId:e,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:kh(t.re,n.mutation)}}(this.It,this.userId,e))}}function Kl(t){return Il(t,"documentOverlays")}
/**
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
 */class Gl{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ba(t.integerValue));else if("doubleValue"in t){const n=Ba(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Qa(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ua(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?lc(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ao()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),Zo.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}function $l(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function zl(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=$l(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}Gl.Te=new Gl;class Ql{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ae(n.value),n=e.next();this.Re()}be(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Pe(n.value),n=e.next();this.ve()}Ve(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ae(t);else if(t<2048)this.Ae(960|t>>>6),this.Ae(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ae(480|t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t);else{const t=e.codePointAt(0);this.Ae(240|t>>>18),this.Ae(128|63&t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t)}}this.Re()}Se(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Pe(t);else if(t<2048)this.Pe(960|t>>>6),this.Pe(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Pe(480|t>>>12),this.Pe(128|63&t>>>6),this.Pe(128|63&t);else{const t=e.codePointAt(0);this.Pe(240|t>>>18),this.Pe(128|63&t>>>12),this.Pe(128|63&t>>>6),this.Pe(128|63&t)}}this.ve()}De(t){const e=this.Ce(t),n=zl(e);this.xe(1+n),this.buffer[this.position++]=255&n;for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=255&e[r]}Ne(t){const e=this.Ce(t),n=zl(e);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(t){this.xe(t.length),this.buffer.set(t,this.position),this.position+=t.length}$e(){return this.buffer.slice(0,this.position)}Ce(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let r=1;r<e.length;++r)e[r]^=n?255:0;return e}Ae(t){const e=255&t;0===e?(this.Oe(0),this.Oe(255)):255===e?(this.Oe(255),this.Oe(0)):this.Oe(e)}Pe(t){const e=255&t;0===e?(this.Fe(0),this.Fe(255)):255===e?(this.Fe(255),this.Fe(0)):this.Fe(t)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(t){this.xe(1),this.buffer[this.position++]=t}Fe(t){this.xe(1),this.buffer[this.position++]=~t}xe(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Hl{constructor(t){this.Be=t}me(t){this.Be.Ee(t)}de(t){this.Be.Ve(t)}fe(t){this.Be.De(t)}he(){this.Be.ke()}}class Wl{constructor(t){this.Be=t}me(t){this.Be.be(t)}de(t){this.Be.Se(t)}fe(t){this.Be.Ne(t)}he(){this.Be.Me()}}class Yl{constructor(){this.Be=new Ql,this.Le=new Hl(this.Be),this.Ue=new Wl(this.Be)}seed(t){this.Be.seed(t)}qe(t){return 0===t?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}
/**
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
 */class Xl{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}Ke(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Xl(this.indexId,this.documentKey,this.arrayValue,n)}}function Jl(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=Zl(t.arrayValue,e.arrayValue),0!==n?n:(n=Zl(t.directionalValue,e.directionalValue),0!==n?n:Zo.comparator(t.documentKey,e.documentKey)))}function Zl(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
/**
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
 */class td{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Ge=t.orderBy,this.Qe=[];for(const e of t.filters){const t=e;t.dt()?this.je=t:this.Qe.push(t)}}We(t){const e=ea(t);if(void 0!==e&&!this.ze(e))return!1;const n=na(t);let r=0,s=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){const t=n[r];if(!this.He(this.je,t)||!this.Je(this.Ge[s++],t))return!1;++r}for(;r<n.length;++r){const t=n[r];if(s>=this.Ge.length||!this.Je(this.Ge[s++],t))return!1}return!0}ze(t){for(const e of this.Qe)if(this.He(e,t))return!0;return!1}He(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}Je(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
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
 */class ed{constructor(){this.Ye=new nd}addToCollectionParentIndex(t,e){return this.Ye.add(e),da.resolve()}getCollectionParents(t,e){return da.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return da.resolve()}deleteFieldIndex(t,e){return da.resolve()}getDocumentsMatchingTarget(t,e){return da.resolve(null)}getIndexType(t,e){return da.resolve(0)}getFieldIndexes(t,e){return da.resolve([])}getNextCollectionGroupToUpdate(t){return da.resolve(null)}getMinOffset(t,e){return da.resolve(aa.min())}getMinOffsetFromCollectionGroup(t,e){return da.resolve(aa.min())}updateCollectionGroup(t,e,n){return da.resolve()}updateIndexEntries(t,e){return da.resolve()}}class nd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ka(Yo.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ka(Yo.comparator)).toArray()}}
/**
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
 */const rd=new Uint8Array(0);class sd{constructor(t,e){this.user=t,this.databaseId=e,this.Xe=new nd,this.Ze=new Ku((t=>Ic(t)),((t,e)=>_c(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Xe.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener((()=>{this.Xe.add(e)}));const s={collectionId:n,parent:Qh(r)};return id(t).put(s)}return da.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[zo(e),""],!1,!0);return id(t).W(r).next((t=>{for(const r of t){if(r.collectionId!==e)break;n.push(Yh(r.parent))}return n}))}addFieldIndex(t,e){const n=ad(t),r=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);delete r.indexId;const s=n.add(r);if(e.indexState){const n=cd(t);return s.next((t=>{n.put(Fl(t,this.user,e.indexState.sequenceNumber,e.indexState.offset))}))}return s.next()}deleteFieldIndex(t,e){const n=ad(t),r=cd(t),s=od(t);return n.delete(e.indexId).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=od(t);let r=!0;const s=new Map;return da.forEach(this.tn(e),(e=>this.en(t,e).next((t=>{r&&(r=!!t),s.set(e,t)})))).next((()=>{if(r){let t=th();const r=[];return da.forEach(s,((s,i)=>{var o;_o("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${Ic(e)}`);const a=function(t,e){const n=ea(e);if(void 0===n)return null;for(const r of Sc(t,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(t,e){const n=new Map;for(const r of na(e))for(const e of Sc(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,s),u=function(t,e){const n=[];let r=!0;for(const s of na(e)){const e=0===s.kind?Dc(t,s.fieldPath,t.startAt):Ac(t,s.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new Vc(n,r)}(i,s),h=function(t,e){const n=[];let r=!0;for(const s of na(e)){const e=0===s.kind?Ac(t,s.fieldPath,t.endAt):Dc(t,s.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new Vc(n,r)}(i,s),l=this.nn(s,i,u),d=this.nn(s,i,h),f=this.sn(s,i,c),m=this.rn(s.indexId,a,l,u.inclusive,d,h.inclusive,f);return da.forEach(m,(s=>n.J(s,e.limit).next((e=>{e.forEach((e=>{const n=Zo.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))}))}))))})).next((()=>r))}return da.resolve(null)}))}tn(t){let e=this.Ze.get(t);return e||(e=[t],this.Ze.set(t,e),e)}rn(t,e,n,r,s,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,s.length),c=a/(null!=e?e.length:1),u=[];for(let h=0;h<a;++h){const a=e?this.on(e[h/c]):rd,l=this.un(t,a,n[h%c],r),d=this.cn(t,a,s[h%c],i),f=o.map((e=>this.un(t,a,e,!0)));u.push(...this.createRange(l,d,f))}return u}un(t,e,n,r){const s=new Xl(t,Zo.empty(),e,n);return r?s:s.Ke()}cn(t,e,n,r){const s=new Xl(t,Zo.empty(),e,n);return r?s.Ke():s}en(t,e){const n=new td(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next((t=>{let e=null;for(const r of t)n.We(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e}))}getIndexType(t,e){let n=2;return da.forEach(this.tn(e),(e=>this.en(t,e).next((t=>{t?0!==n&&t.fields.length<function(t){let e=new ka(Jo.comparator),n=!1;for(const r of t.filters){const t=r;t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field))}for(const r of t.orderBy)r.field.isKeyField()||(e=e.add(r.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})))).next((()=>n))}an(t,e){const n=new Yl;for(const r of na(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const s=n.qe(r.kind);Gl.Te.ce(t,s)}return n.$e()}on(t){const e=new Yl;return Gl.Te.ce(t,e.qe(0)),e.$e()}hn(t,e){const n=new Yl;return Gl.Te.ce(sc(this.databaseId,e),n.qe(function(t){const e=na(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.$e()}sn(t,e,n){if(null===n)return[];let r=[];r.push(new Yl);let s=0;for(const i of na(t)){const t=n[s++];for(const n of r)if(this.ln(e,i.fieldPath)&&oc(t))r=this.fn(r,i,t);else{const e=n.qe(i.kind);Gl.Te.ce(t,e)}}return this.dn(r)}nn(t,e,n){return this.sn(t,e,n.position)}dn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].$e();return e}fn(t,e,n){const r=[...t],s=[];for(const i of n.arrayValue.values||[])for(const t of r){const n=new Yl;n.seed(t.$e()),Gl.Te.ce(i,n.qe(e.kind)),s.push(n)}return s}ln(t,e){return!!t.filters.find((t=>t instanceof Cc&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=ad(t),r=cd(t);return(e?n.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.W()).next((t=>{const e=[];return da.forEach(t,(t=>r.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new sa(e.sequenceNumber,new aa(kl(e.readTime),new Zo(Yh(e.documentKey)),e.largestBatchId)):sa.empty(),r=t.fields.map((([t,e])=>new ra(Jo.fromServerFormat(t),e)));return new ta(t.indexId,t.collectionGroup,r,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:Go(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const r=ad(t),s=cd(t);return this._n(t).next((t=>r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>da.forEach(e,(e=>s.put(Fl(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return da.forEach(e,((e,r)=>{const s=n.get(e.collectionGroup);return(s?da.resolve(s):this.getFieldIndexes(t,e.collectionGroup)).next((s=>(n.set(e.collectionGroup,s),da.forEach(s,(n=>this.wn(t,e,n).next((e=>{const s=this.mn(r,n);return e.isEqual(s)?da.resolve():this.gn(t,r,n,e,s)})))))))}))}yn(t,e,n,r){return od(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,e.key),documentKey:e.key.path.toArray()})}pn(t,e,n,r){return od(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const r=od(t);let s=new ka(Jl);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,e)])},((t,r)=>{s=s.add(new Xl(n.indexId,e,r.arrayValue,r.directionalValue))})).next((()=>s))}mn(t,e){let n=new ka(Jl);const r=this.an(e,t);if(null==r)return n;const s=ea(e);if(null!=s){const i=t.data.field(s.fieldPath);if(oc(i))for(const s of i.arrayValue.values||[])n=n.add(new Xl(e.indexId,t.key,this.on(s),r))}else n=n.add(new Xl(e.indexId,t.key,rd,r));return n}gn(t,e,n,r,s){_o("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,r,s){const i=t.getIterator(),o=e.getIterator();let a=Oa(i),c=Oa(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const r=n(a,c);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(c),c=Oa(o)):e?(s(a),a=Oa(i)):(a=Oa(i),c=Oa(o))}}(r,s,Jl,(r=>{i.push(this.yn(t,e,n,r))}),(r=>{i.push(this.pn(t,e,n,r))})),da.waitFor(i)}_n(t){let e=1;return cd(t).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,r)=>{r.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>Jl(t,e))).filter(((t,e,n)=>!e||0!==Jl(t,n[e-1])));const r=[];r.push(t);for(const i of n){const n=Jl(i,t),s=Jl(i,e);if(0===n)r[0]=t.Ke();else if(n>0&&s<0)r.push(i),r.push(i.Ke());else if(s>0)break}r.push(e);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,rd,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,rd,[]]));return s}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(ud)}getMinOffset(t,e){return da.mapArray(this.tn(e),(e=>this.en(t,e).next((t=>t||Ao())))).next(ud)}}function id(t){return Il(t,"collectionParents")}function od(t){return Il(t,"indexEntries")}function ad(t){return Il(t,"indexConfiguration")}function cd(t){return Il(t,"indexState")}function ud(t){Co(0!==t.length);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;ca(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new aa(e.readTime,e.documentKey,n)}
/**
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
 */const hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ld{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ld(t,ld.DEFAULT_COLLECTION_PERCENTILE,ld.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function dd(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((t,e,n)=>(a++,n.delete())));i.push(c.next((()=>{Co(1===a)})));const u=[];for(const h of n.mutations){const t=Zh(e,h.key.path,n.batchId);i.push(s.delete(t)),u.push(h.key)}return da.waitFor(i).next((()=>u))}function fd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Ao();e=t.noDocument}return JSON.stringify(e).length}
/**
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
 */ld.DEFAULT_COLLECTION_PERCENTILE=10,ld.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ld.DEFAULT=new ld(41943040,ld.DEFAULT_COLLECTION_PERCENTILE,ld.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ld.DISABLED=new ld(-1,0,0);class md{constructor(t,e,n,r){this.userId=t,this.It=e,this.indexManager=n,this.referenceDelegate=r,this.In={}}static oe(t,e,n,r){Co(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new md(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pd(t).Z({index:"userMutationsIndex",range:n},((t,n,r)=>{e=!1,r.done()})).next((()=>e))}addMutationBatch(t,e,n,r){const s=yd(t),i=pd(t);return i.add({}).next((o=>{Co("number"==typeof o);const a=new El(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map((e=>kh(t.re,e))),s=n.mutations.map((e=>kh(t.re,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.It,this.userId,a),u=[];let h=new ka(((t,e)=>Go(t.canonicalString(),e.canonicalString())));for(const t of r){const e=Zh(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(i.put(c)),u.push(s.put(e,tl))}return h.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.In[o]=a.keys()})),da.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return pd(t).get(e).next((t=>t?(Co(t.userId===this.userId),Rl(this.It,t)):null))}Tn(t,e){return this.In[e]?da.resolve(this.In[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.In[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return pd(t).Z({index:"userMutationsIndex",range:r},((t,e,r)=>{e.userId===this.userId&&(Co(e.batchId>=n),s=Rl(this.It,e)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return pd(t).Z({index:"userMutationsIndex",range:e,reverse:!0},((t,e,r)=>{n=e.batchId,r.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return pd(t).W("userMutationsIndex",e).next((t=>t.map((t=>Rl(this.It,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Jh(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return yd(t).Z({range:r},((n,r,i)=>{const[o,a,c]=n,u=Yh(a);if(o===this.userId&&e.path.isEqual(u))return pd(t).get(c).next((t=>{if(!t)throw Ao();Co(t.userId===this.userId),s.push(Rl(this.It,t))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ka(Go);const r=[];return e.forEach((e=>{const s=Jh(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=yd(t).Z({range:i},((t,r,s)=>{const[i,o,a]=t,c=Yh(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),da.waitFor(r).next((()=>this.En(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=Jh(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new ka(Go);return yd(t).Z({range:i},((t,e,s)=>{const[i,a,c]=t,u=Yh(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.En(t,o)))}En(t,e){const n=[],r=[];return e.forEach((e=>{r.push(pd(t).get(e).next((t=>{if(null===t)throw Ao();Co(t.userId===this.userId),n.push(Rl(this.It,t))})))})),da.waitFor(r).next((()=>n))}removeMutationBatch(t,e){return dd(t.ie,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.An(e.batchId)})),da.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}An(t){delete this.In[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return da.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return yd(t).Z({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=Yh(t[1]);r.push(e)}else n.done()})).next((()=>{Co(0===r.length)}))}))}containsKey(t,e){return gd(t,this.userId,e)}Rn(t){return wd(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function gd(t,e,n){const r=Jh(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return yd(t).Z({range:i,X:!0},((t,n,r)=>{const[i,a,c]=t;i===e&&a===s&&(o=!0),r.done()})).next((()=>o))}function pd(t){return Il(t,"mutations")}function yd(t){return Il(t,"documentMutations")}function wd(t){return Il(t,"mutationQueues")}
/**
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
 */class vd{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new vd(0)}static vn(){return new vd(-1)}}
/**
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
 */class bd{constructor(t,e){this.referenceDelegate=t,this.It=e}allocateTargetId(t){return this.Vn(t).next((e=>{const n=new vd(e.highestTargetId);return e.highestTargetId=n.next(),this.Sn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.Vn(t).next((t=>Ho.fromTimestamp(new Qo(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.Vn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.Vn(t).next((r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.Sn(t,r))))}addTargetData(t,e){return this.Dn(t,e).next((()=>this.Vn(t).next((n=>(n.targetCount+=1,this.Cn(e,n),this.Sn(t,n))))))}updateTargetData(t,e){return this.Dn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Id(t).delete(e.targetId))).next((()=>this.Vn(t))).next((e=>(Co(e.targetCount>0),e.targetCount-=1,this.Sn(t,e))))}removeTargets(t,e,n){let r=0;const s=[];return Id(t).Z(((i,o)=>{const a=Ol(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))})).next((()=>da.waitFor(s))).next((()=>r))}forEachTarget(t,e){return Id(t).Z(((t,n)=>{const r=Ol(n);e(r)}))}Vn(t){return Ed(t).get("targetGlobalKey").next((t=>(Co(null!==t),t)))}Sn(t,e){return Ed(t).put("targetGlobalKey",e)}Dn(t,e){return Id(t).put(Ll(this.It,e))}Cn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Vn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=Ic(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Id(t).Z({range:r,index:"queryTargetsIndex"},((t,n,r)=>{const i=Ol(n);_c(e,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(t,e,n){const r=[],s=_d(t);return e.forEach((e=>{const i=Qh(e.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(t,n,e))})),da.waitFor(r)}removeMatchingKeys(t,e,n){const r=_d(t);return da.forEach(e,(e=>{const s=Qh(e.path);return da.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=_d(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=_d(t);let s=th();return r.Z({range:n,X:!0},((t,e,n)=>{const r=Yh(t[1]),i=new Zo(r);s=s.add(i)})).next((()=>s))}containsKey(t,e){const n=Qh(e.path),r=IDBKeyRange.bound([n],[zo(n)],!1,!0);let s=0;return _d(t).Z({index:"documentTargetsIndex",X:!0,range:r},(([t,e],n,r)=>{0!==t&&(s++,r.done())})).next((()=>s>0))}se(t,e){return Id(t).get(e).next((t=>t?Ol(t):null))}}function Id(t){return Il(t,"targets")}function Ed(t){return Il(t,"targetGlobal")}function _d(t){return Il(t,"targetDocuments")}
/**
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
 */function Td([t,e],[n,r]){const s=Go(t,n);return 0===s?Go(e,r):s}class Sd{constructor(t){this.xn=t,this.buffer=new ka(Td),this.Nn=0}kn(){return++this.Nn}On(t){const e=[t,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Td(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Dd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(t){_o("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ya(t)?_o("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await la(t)}await this.Fn(3e5)}))}}class Ad{constructor(t,e){this.$n=t,this.params=e}calculateTargetCount(t,e){return this.$n.Bn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return da.resolve(Ta.at);const n=new Sd(e);return this.$n.forEachTarget(t,(t=>n.On(t.sequenceNumber))).next((()=>this.$n.Ln(t,(t=>n.On(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.$n.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.$n.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(_o("LruGarbageCollector","Garbage collection skipped; disabled"),da.resolve(hd)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(_o("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hd):this.Un(t,e)))}getCacheSize(t){return this.$n.getCacheSize(t)}Un(t,e){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(_o("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),Io()<=z.DEBUG&&_o("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),da.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}
/**
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
 */class Cd{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Ad(t,e)}(this,e)}Bn(t){const e=this.qn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}qn(t){let e=0;return this.Ln(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Ln(t,e){return this.Kn(t,((t,n)=>e(n)))}addReference(t,e,n){return xd(t,n)}removeReference(t,e,n){return xd(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return xd(t,e)}Gn(t,e){return function(t,e){let n=!1;return wd(t).tt((r=>gd(t,r,e).next((t=>(t&&(n=!0),da.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Kn(t,((i,o)=>{if(o<=e){const e=this.Gn(t,i).next((e=>{if(!e)return s++,n.getEntry(t,i).next((()=>(n.removeEntry(i,Ho.min()),_d(t).delete([0,Qh(i.path)]))))}));r.push(e)}})).next((()=>da.waitFor(r))).next((()=>n.apply(t))).next((()=>s))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return xd(t,e)}Kn(t,e){const n=_d(t);let r,s=Ta.at;return n.Z({index:"documentTargetsIndex"},(([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==Ta.at&&e(new Zo(Yh(r)),s),s=o,r=i):s=Ta.at})).next((()=>{s!==Ta.at&&e(new Zo(Yh(r)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function xd(t,e){return _d(t).put(function(t,e){return{targetId:0,path:Qh(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
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
 */class Nd{constructor(){this.changes=new Ku((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wc.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?da.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */class kd{constructor(t){this.It=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Md(t).put(n)}removeEntry(t,e,n){return Md(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],xl(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.Qn(t,n))))}getEntry(t,e){let n=wc.newInvalidDocument(e);return Md(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pd(e))},((t,r)=>{n=this.jn(e,r)})).next((()=>n))}Wn(t,e){let n={size:0,document:wc.newInvalidDocument(e)};return Md(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pd(e))},((t,r)=>{n={document:this.jn(e,r),size:fd(r)}})).next((()=>n))}getEntries(t,e){let n=$u();return this.zn(t,e,((t,e)=>{const r=this.jn(t,e);n=n.insert(t,r)})).next((()=>n))}Hn(t,e){let n=$u(),r=new Ca(Zo.comparator);return this.zn(t,e,((t,e)=>{const s=this.jn(t,e);n=n.insert(t,s),r=r.insert(t,fd(e))})).next((()=>({documents:n,Jn:r})))}zn(t,e,n){if(e.isEmpty())return da.resolve();let r=new ka(Fd);e.forEach((t=>r=r.add(t)));const s=IDBKeyRange.bound(Pd(r.first()),Pd(r.last())),i=r.getIterator();let o=i.getNext();return Md(t).Z({index:"documentKeyIndex",range:s},((t,e,r)=>{const s=Zo.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&Fd(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.j(Pd(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(t,e,n){const r=[e.popLast().toArray(),e.lastSegment(),xl(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Md(t).W(IDBKeyRange.bound(r,s,!0)).next((t=>{let e=$u();for(const n of t){const t=this.jn(Zo.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,r){let s=$u();const i=Vd(e,n),o=Vd(e,aa.max());return Md(t).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((t,e,n)=>{const i=this.jn(Zo.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(t){return new Od(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Ld(t).get("remoteDocumentGlobalKey").next((t=>(Co(!!t),t)))}Qn(t,e){return Ld(t).put("remoteDocumentGlobalKey",e)}jn(t,e){if(e){const t=Al(this.It,e);if(!t.isNoDocument()||!t.version.isEqual(Ho.min()))return t}return wc.newInvalidDocument(t)}}function Rd(t){return new kd(t)}class Od extends Nd{constructor(t,e){super(),this.Yn=t,this.trackRemovals=e,this.Xn=new Ku((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,r=new ka(((t,e)=>Go(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Xn.get(s);if(e.push(this.Yn.removeEntry(t,s,o.readTime)),i.isValidDocument()){const a=Cl(this.Yn.It,i);r=r.add(s.path.popLast());const c=fd(a);n+=c-o.size,e.push(this.Yn.addEntry(t,s,a))}else if(n-=o.size,this.trackRemovals){const n=Cl(this.Yn.It,i.convertToNoDocument(Ho.min()));e.push(this.Yn.addEntry(t,s,n))}})),r.forEach((n=>{e.push(this.Yn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.Yn.updateMetadata(t,n)),da.waitFor(e)}getFromCache(t,e){return this.Yn.Wn(t,e).next((t=>(this.Xn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.Yn.Hn(t,e).next((({documents:t,Jn:e})=>(e.forEach(((e,n)=>{this.Xn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function Ld(t){return Il(t,"remoteDocumentGlobal")}function Md(t){return Il(t,"remoteDocumentsV14")}function Pd(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Vd(t,e){const n=e.documentKey.path.toArray();return[t,xl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Fd(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=Go(n[i],r[i]),s)return s;return s=Go(n.length,r.length),s||(s=Go(n[n.length-2],r[r.length-2]),s||Go(n[n.length-1],r[r.length-1]))
/**
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
 */
/**
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
 */}class Bd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Ud{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Cu(n.mutation,t,La.empty(),Qo.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,th()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=th()){const r=Wu();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Qu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Wu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,th())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=$u();const i=Xu(),o=Xu();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ru)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Cu(o.mutation,e,o.mutation.getFieldMask(),Qo.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Bd(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Xu();let r=new Ca(((t,e)=>t-e)),s=th();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||La.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||th()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Yu();c.forEach((t=>{if(!s.has(t)){const r=Du(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return da.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Zo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):da.resolve(Wu());let o=-1,a=s;return i.next((e=>da.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?da.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,th()))).next((t=>({batchId:o,changes:Hu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Zo(e)).next((t=>{let e=Qu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Qu();return this.indexManager.getCollectionParents(t,r).next((i=>da.forEach(i,(i=>{const o=function(t,e){return new jc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,wc.newInvalidDocument(n)))}));let n=Qu();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&Cu(i.mutation,s,La.empty(),Qo.now()),eu(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):da.resolve(wc.newInvalidDocument(e))}}
/**
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
 */class qd{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return da.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:wh(n.createTime)}),da.resolve()}getNamedQuery(t,e){return da.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ml(t.bundledQuery),readTime:wh(t.readTime)}}(e)),da.resolve()}}
/**
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
 */class jd{constructor(){this.overlays=new Ca(Zo.comparator),this.es=new Map}getOverlay(t,e){return da.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Wu();return da.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),da.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),da.resolve()}getOverlaysForCollection(t,e,n){const r=Wu(),s=e.length+1,i=new Zo(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return da.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Ca(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Wu(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Wu(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return da.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Tl(e,n));let s=this.es.get(e);void 0===s&&(s=th(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
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
 */class Kd{constructor(){this.ns=new ka(Gd.ss),this.rs=new ka(Gd.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Gd(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Gd(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Zo(new Yo([])),n=new Gd(e,t),r=new Gd(e,t+1),s=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Zo(new Yo([])),n=new Gd(e,t),r=new Gd(e,t+1);let s=th();return this.rs.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Gd(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Gd{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Zo.comparator(t.key,e.key)||Go(t._s,e._s)}static os(t,e){return Go(t._s,e._s)||Zo.comparator(t.key,e.key)}}
/**
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
 */class $d{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ka(Gd.ss)}checkEmpty(t){return da.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new El(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new Gd(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return da.resolve(i)}lookupMutationBatch(t,e){return da.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),s=r<0?0:r;return da.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return da.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return da.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Gd(e,0),r=new Gd(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);s.push(e)})),da.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ka(Go);return e.forEach((t=>{const e=new Gd(t,0),r=new Gd(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),da.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Zo.isDocumentKey(s)||(s=s.child(""));const i=new Gd(new Zo(s),0);let o=new ka(Go);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),i),da.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Co(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return da.forEach(e.mutations,(r=>{const s=new Gd(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Gd(e,0),r=this.gs.firstAfterOrEqual(n);return da.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,da.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class zd{constructor(t){this.Es=t,this.docs=new Ca(Zo.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return da.resolve(n?n.document.mutableCopy():wc.newInvalidDocument(e))}getEntries(t,e){let n=$u();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():wc.newInvalidDocument(t))})),da.resolve(n)}getAllFromCollection(t,e,n){let r=$u();const s=new Zo(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ca(oa(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return da.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Ao()}As(t,e){return da.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qd(this)}getSize(t){return da.resolve(this.size)}}class Qd extends Nd{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),da.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
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
 */class Hd{constructor(t){this.persistence=t,this.Rs=new Ku((t=>Ic(t)),_c),this.lastRemoteSnapshotVersion=Ho.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Kd,this.targetCount=0,this.vs=vd.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),da.resolve()}getLastRemoteSnapshotVersion(t){return da.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return da.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),da.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),da.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new vd(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,da.resolve()}updateTargetData(t,e){return this.Dn(e),da.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,da.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),da.waitFor(s).next((()=>r))}getTargetCount(t){return da.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return da.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),da.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),da.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),da.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return da.resolve(n)}containsKey(t,e){return da.resolve(this.Ps.containsKey(e))}}
/**
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
 */class Wd{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Ta(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Hd(this),this.indexManager=new ed,this.remoteDocumentCache=function(t){return new zd(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Dl(e),this.Ns=new qd(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new $d(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){_o("MemoryPersistence","Starting transaction:",t);const r=new Yd(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return da.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Yd extends ha{constructor(t){super(),this.currentSequenceNumber=t}}class Xd{constructor(t){this.persistence=t,this.Fs=new Kd,this.$s=null}static Bs(t){return new Xd(t)}get Ls(){if(this.$s)return this.$s;throw Ao()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),da.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),da.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),da.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return da.forEach(this.Ls,(n=>{const r=Zo.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,Ho.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return da.or([()=>da.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
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
 */class Jd{constructor(t){this.It=t}$(t,e,n,r){const s=new fa("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0}),t.createObjectStore("documentMutations")}(t),Zd(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=da.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),Zd(t)),i=i.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ho.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(t,e){return e.store("mutations").W().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0});const r=e.store("mutations"),s=n.map((t=>r.put(t)));return da.waitFor(s)}))}(t,s)))),i=i.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&r>=5&&(i=i.next((()=>this.qs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.Ks(s))))),n<7&&r>=7&&(i=i.next((()=>this.Gs(s)))),n<8&&r>=8&&(i=i.next((()=>this.Qs(t,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&r>=10&&(i=i.next((()=>this.js(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&r>=12&&(i=i.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:dl});e.createIndex("collectionPathOverlayIndex",fl,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",ml,{unique:!1})}(t)}))),n<13&&r>=13&&(i=i.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:el});e.createIndex("documentKeyIndex",nl),e.createIndex("collectionGroupIndex",rl)}(t))).next((()=>this.Ws(t,s))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.zs(t,s)))),n<15&&r>=15&&(i=i.next((()=>function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:cl}).createIndex("sequenceNumberIndex",ul,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:hl}).createIndex("documentKeyIndex",ll,{unique:!1})}(t)))),i}Ks(t){let e=0;return t.store("remoteDocuments").Z(((t,n)=>{e+=fd(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.W().next((e=>da.forEach(e,(e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>da.forEach(n,(n=>{Co(n.userId===e.userId);const r=Rl(this.It,n);return dd(t,e.userId,r).next((()=>{}))}))))}))))}Gs(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const r=[];return n.Z(((n,s)=>{const i=new Yo(n),o=function(t){return[0,Qh(t)]}(i);r.push(e.get(o).next((n=>n?da.resolve():(n=>e.put({targetId:0,path:Qh(n),sequenceNumber:t.highestListenSequenceNumber}))(i))))})).next((()=>da.waitFor(r)))}))}Qs(t,e){t.createObjectStore("collectionParents",{keyPath:al});const n=e.store("collectionParents"),r=new nd,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:Qh(r)})}};return e.store("remoteDocuments").Z({X:!0},((t,e)=>{const n=new Yo(t);return s(n.popLast())})).next((()=>e.store("documentMutations").Z({X:!0},(([t,e,n],r)=>{const i=Yh(e);return s(i.popLast())}))))}js(t){const e=t.store("targets");return e.Z(((t,n)=>{const r=Ol(n),s=Ll(this.It,r);return e.put(s)}))}Ws(t,e){const n=e.store("remoteDocuments"),r=[];return n.Z(((t,n)=>{const s=e.store("remoteDocumentsV14"),i=(o=n,o.document?new Zo(Yo.fromString(o.document.name).popFirst(5)):o.noDocument?Zo.fromSegments(o.noDocument.path):o.unknownDocument?Zo.fromSegments(o.unknownDocument.path):Ao()).path.toArray();var o;
/**
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
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>da.waitFor(r)))}zs(t,e){const n=e.store("mutations"),r=Rd(this.It),s=new Wd(Xd.Bs,this.It.re);return n.W().next((t=>{const n=new Map;return t.forEach((t=>{var e;let r=null!==(e=n.get(t.userId))&&void 0!==e?e:th();Rl(this.It,t).keys().forEach((t=>r=r.add(t))),n.set(t.userId,r)})),da.forEach(n,((t,n)=>{const i=new wo(n),o=jl.oe(this.It,i),a=s.getIndexManager(i),c=md.oe(i,this.It,a,s.referenceDelegate);return new Ud(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new bl(e,Ta.at),t).next()}))}))}}function Zd(t){t.createObjectStore("targetDocuments",{keyPath:il}).createIndex("documentTargetsIndex",ol,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",sl,{unique:!0}),t.createObjectStore("targetGlobal")}const tf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ef{constructor(t,e,n,r,s,i,o,a,c,u,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Hs=s,this.window=i,this.document=o,this.Js=c,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=t=>Promise.resolve(),!ef.C())throw new Ro(ko.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Cd(this,r),this.ii=e+"main",this.It=new Dl(a),this.ri=new ma(this.ii,this.Xs,new Jd(this.It)),this.Cs=new bd(this.referenceDelegate,this.It),this.remoteDocumentCache=Rd(this.It),this.Ns=new Bl,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&To("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Ro(ko.FAILED_PRECONDITION,tf);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Cs.getHighestSequenceNumber(t)))})).then((t=>{this.Ss=new Ta(t,this.Js)})).then((()=>{this.Ds=!0})).catch((t=>(this.ri&&this.ri.close(),Promise.reject(t))))}li(t){return this.si=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ri.L((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>rf(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(t).next((t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(t))).next((e=>this.isPrimary&&!e?this._i(t).next((()=>!1)):!!e&&this.wi(t).next((()=>!0)))))).catch((t=>{if(ya(t))return _o("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _o("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Hs.enqueueRetryable((()=>this.si(t))),this.isPrimary=t}))}fi(t){return nf(t).get("owner").next((t=>da.resolve(this.mi(t))))}gi(t){return rf(t).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=Il(t,"clientMetadata");return e.W().next((t=>{const n=this.Ii(t,18e5),r=t.filter((t=>-1===n.indexOf(t)));return da.forEach(r,(t=>e.delete(t.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const e of t)this.oi.removeItem(this.Ti(e.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(t){return!!t&&t.ownerId===this.clientId}di(t){return this.Ys?da.resolve(!0):nf(t).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)){if(this.mi(e)&&this.networkEnabled)return!0;if(!this.mi(e)){if(!e.allowTabSynchronization)throw new Ro(ko.FAILED_PRECONDITION,tf);return!1}}return!(!this.networkEnabled||!this.inForeground)||rf(t).W().next((t=>void 0===this.Ii(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&_o("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new bl(t,Ta.at);return this._i(e).next((()=>this.gi(e)))})),this.ri.close(),this.Pi()}Ii(t,e){return t.filter((t=>this.pi(t.updateTimeMs,e)&&!this.Ei(t.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(t=>rf(t).W().next((t=>this.Ii(t,18e5).map((t=>t.clientId))))))}get started(){return this.Ds}getMutationQueue(t,e){return md.oe(t,this.It,e,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new sd(t,this.It.re.databaseId)}getDocumentOverlayCache(t){return jl.oe(this.It,t)}getBundleCache(){return this.Ns}runTransaction(t,e,n){_o("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",s=15===(i=this.Xs)?vl:14===i?wl:13===i?yl:12===i?pl:11===i?gl:void Ao();var i;let o;return this.ri.runTransaction(t,r,s,(r=>(o=new bl(r,this.Ss?this.Ss.next():Ta.at),"readwrite-primary"===e?this.fi(o).next((t=>!!t||this.di(o))).next((e=>{if(!e)throw To(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new Ro(ko.FAILED_PRECONDITION,ua);return n(o)})).next((t=>this.wi(o).next((()=>t)))):this.Vi(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}Vi(t){return nf(t).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Ro(ko.FAILED_PRECONDITION,tf)}))}wi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return nf(t).put("owner",e)}static C(){return ma.C()}_i(t){const e=nf(t);return e.get("owner").next((t=>this.mi(t)?(_o("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):da.resolve()))}pi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(To(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Zs=()=>{this.Ai(),g()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(t){var e;try{const n=null!==(null===(e=this.oi)||void 0===e?void 0:e.getItem(this.Ti(t)));return _o("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return To("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(ln){To("Failed to set zombie client id.",ln)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(ln){}}Ti(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function nf(t){return Il(t,"owner")}function rf(t){return Il(t,"clientMetadata")}function sf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
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
 */}class of{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=th(),r=th();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new of(t,e.fromCache,n,r)}}
/**
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
 */class af{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((s=>s||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if($c(e))return da.resolve(null);let n=Yc(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Xc(e,null,"F"),n=Yc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=th(...r);return this.Ni.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,r);return this.$i(e,i,s,n.readTime)?this.ki(t,Xc(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,r){return $c(e)||r.isEqual(Ho.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const i=this.Fi(e,s);return this.$i(e,i,n,r)?this.Mi(t,e):(Io()<=z.DEBUG&&_o("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tu(e)),this.Bi(t,i,e,ia(r,-1)))}))}Fi(t,e){let n=new ka(ru(t));return e.forEach(((e,r)=>{eu(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(t,e){return Io()<=z.DEBUG&&_o("QueryEngine","Using full collection scan to execute query:",tu(e)),this.Ni.getDocumentsMatchingQuery(t,e,aa.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class cf{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new Ca(Go),this.qi=new Ku((t=>Ic(t)),_c),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ud(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function uf(t,e,n,r){return new cf(t,e,n,r)}async function hf(t,e){const n=No(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=th();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function lf(t,e){const n=No(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=da.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Co(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=th();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function df(t){const e=No(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function ff(t,e){const n=No(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Pa.EMPTY_BYTE_STRING,Ho.min()).withLastLimboFreeSnapshotVersion(Ho.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=$u(),c=th();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(mf(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(Ho.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return da.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=s,t)))}function mf(t,e,n){let r=th(),s=th();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=$u();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Ho.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):_o("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function gf(t,e){const n=No(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function pf(t,e){const n=No(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((s=>s?(r=s,da.resolve(r)):n.Cs.allocateTargetId(t).next((s=>(r=new Sl(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function yf(t,e,n){const r=No(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!ya(t))throw t;_o("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function wf(t,e,n){const r=No(t);let s=Ho.min(),i=th();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=No(t),s=r.qi.get(n);return void 0!==s?da.resolve(r.Ui.get(s)):r.Cs.getTargetData(e,n)}(r,t,Yc(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?s:Ho.min(),n?i:th()))).next((t=>(If(r,nu(e),t),{documents:t,Hi:i})))))}function vf(t,e){const n=No(t),r=No(n.Cs),s=n.Ui.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(t=>r.se(t,e).next((t=>t?t.target:null))))}function bf(t,e){const n=No(t),r=n.Ki.get(e)||Ho.min();return n.persistence.runTransaction("Get new document changes","readonly",(t=>n.Gi.getAllFromCollectionGroup(t,e,ia(r,-1),Number.MAX_SAFE_INTEGER))).then((t=>(If(n,e,t),t)))}function If(t,e,n){let r=t.Ki.get(e)||Ho.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}async function Ef(t,e,n,r){const s=No(t);let i=th(),o=$u();for(const u of n){const t=e.Ji(u.metadata.name);u.document&&(i=i.add(t));const n=e.Yi(u);n.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(t,n)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),c=await pf(s,function(t){return Yc(Gc(Yo.fromString(`__bundle__/docs/${t}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(t=>mf(t,a,o).next((e=>(a.apply(t),e))).next((e=>s.Cs.removeMatchingKeysForTargetId(t,c.targetId).next((()=>s.Cs.addMatchingKeys(t,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(t,e.Wi,e.zi))).next((()=>e.Wi))))))}async function _f(t,e,n=th()){const r=await pf(t,Yc(Ml(e.bundledQuery))),s=No(t);return s.persistence.runTransaction("Save named query","readwrite",(t=>{const i=wh(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ns.saveNamedQuery(t,e);const o=r.withResumeToken(Pa.EMPTY_BYTE_STRING,i);return s.Ui=s.Ui.insert(o.targetId,o),s.Cs.updateTargetData(t,o).next((()=>s.Cs.removeMatchingKeysForTargetId(t,r.targetId))).next((()=>s.Cs.addMatchingKeys(t,n,r.targetId))).next((()=>s.Ns.saveNamedQuery(t,e)))}))}function Tf(t,e){return`firestore_clients_${t}_${e}`}function Sf(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Df(t,e){return`firestore_targets_${t}_${e}`}class Af{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Zi(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new Ro(r.error.code,r.error.message))),i?new Af(t,e,r.state,s):(To("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}tr(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Cf{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Zi(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new Ro(n.error.code,n.error.message))),s?new Cf(t,n.state,r):(To("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}tr(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class xf{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Zi(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=nh();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=Ha(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new xf(t,s):(To("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Nf{constructor(t,e){this.clientId=t,this.onlineState=e}static Zi(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Nf(e.clientId,e.onlineState):(To("SharedClientState",`Failed to parse online state: ${t}`),null)}}class kf{constructor(){this.activeTargetIds=nh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rf{constructor(t,e,n,r,s){this.window=t,this.Hs=e,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Ca(Go),this.started=!1,this.cr=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Tf(this.persistenceKey,this.sr),this.hr=function(t){return`firestore_sequence_number_${t}`}
/**
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
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new kf),this.lr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.wr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.mr=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.vi();for(const n of t){if(n===this.sr)continue;const t=this.getItem(Tf(this.persistenceKey,n));if(t){const e=xf.Zi(n,t);e&&(this.ur=this.ur.insert(e.clientId,e))}}this.gr();const e=this.storage.getItem(this.wr);if(e){const t=this.yr(e);t&&this.pr(t)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.hr,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(t){let e=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.Tr(t,"pending")}updateMutationState(t,e,n){this.Tr(t,e,n),this.Er(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Df(this.persistenceKey,t));if(n){const r=Cf.Zi(t,n);r&&(e=r.state)}}return this.Ar.er(t),this.gr(),e}removeLocalQueryTarget(t){this.Ar.nr(t),this.gr()}isLocalQueryTarget(t){return this.Ar.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Df(this.persistenceKey,t))}updateQueryState(t,e,n){this.Rr(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.Er(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.br(t)}notifyBundleLoaded(t){this.Pr(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return _o("SharedClientState","READ",t,e),e}setItem(t,e){_o("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){_o("SharedClientState","REMOVE",t),this.storage.removeItem(t)}rr(t){const e=t;if(e.storageArea===this.storage){if(_o("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ar)return void To("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.lr.test(e.key)){if(null==e.newValue){const t=this.vr(e.key);return this.Vr(t,null)}{const t=this.Sr(e.key,e.newValue);if(t)return this.Vr(t.clientId,t)}}else if(this.dr.test(e.key)){if(null!==e.newValue){const t=this.Dr(e.key,e.newValue);if(t)return this.Cr(t)}}else if(this._r.test(e.key)){if(null!==e.newValue){const t=this.Nr(e.key,e.newValue);if(t)return this.kr(t)}}else if(e.key===this.wr){if(null!==e.newValue){const t=this.yr(e.newValue);if(t)return this.pr(t)}}else if(e.key===this.hr){const t=function(t){let e=Ta.at;if(null!=t)try{const n=JSON.parse(t);Co("number"==typeof n),e=n}catch(t){To("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==Ta.at&&this.sequenceNumberHandler(t)}else if(e.key===this.mr){const t=this.Or(e.newValue);await Promise.all(t.map((t=>this.syncEngine.Mr(t))))}}else this.cr.push(e)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(t,e,n){const r=new Af(this.currentUser,t,e,n),s=Sf(this.persistenceKey,this.currentUser,t);this.setItem(s,r.tr())}Er(t){const e=Sf(this.persistenceKey,this.currentUser,t);this.removeItem(e)}br(t){const e={clientId:this.sr,onlineState:t};this.storage.setItem(this.wr,JSON.stringify(e))}Rr(t,e,n){const r=Df(this.persistenceKey,t),s=new Cf(t,e,n);this.setItem(r,s.tr())}Pr(t){const e=JSON.stringify(Array.from(t));this.setItem(this.mr,e)}vr(t){const e=this.lr.exec(t);return e?e[1]:null}Sr(t,e){const n=this.vr(t);return xf.Zi(n,e)}Dr(t,e){const n=this.dr.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Af.Zi(new wo(s),r,e)}Nr(t,e){const n=this._r.exec(t),r=Number(n[1]);return Cf.Zi(r,e)}yr(t){return Nf.Zi(t)}Or(t){return JSON.parse(t)}async Cr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Fr(t.batchId,t.state,t.error);_o("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}kr(t){return this.syncEngine.$r(t.targetId,t.state,t.error)}Vr(t,e){const n=e?this.ur.insert(t,e):this.ur.remove(t),r=this.Ir(this.ur),s=this.Ir(n),i=[],o=[];return s.forEach((t=>{r.has(t)||i.push(t)})),r.forEach((t=>{s.has(t)||o.push(t)})),this.syncEngine.Br(i,o).then((()=>{this.ur=n}))}pr(t){this.ur.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Ir(t){let e=nh();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class Of{constructor(){this.Lr=new kf,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new kf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Lf{qr(t){}shutdown(){}}
/**
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
 */class Mf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_o("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){_o("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Vf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
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
 */class Ff extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,s){const i=this.ho(t,e);_o("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(t,i,o,n).then((t=>(_o("RestConnection","Received: ",t),t)),(e=>{throw So("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,r,s,i){return this.ao(t,e,n,r,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+vo,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Pf[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((s,i)=>{const o=new po;o.setWithCredentials(!0),o.listenOnce(ho.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case uo.NO_ERROR:const e=o.getResponseJson();_o("Connection","XHR received:",JSON.stringify(e)),s(e);break;case uo.TIMEOUT:_o("Connection",'RPC "'+t+'" timed out'),i(new Ro(ko.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const n=o.getStatus();if(_o("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ko).indexOf(e)>=0?e:ko.UNKNOWN}(t.status);i(new Ro(e,t.message))}else i(new Ro(ko.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Ro(ko.UNAVAILABLE,"Connection failed."));break;default:Ao()}}finally{_o("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ao(),i=co(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new mo({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");_o("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,h=!1;const l=new Vf({Hr:t=>{h?_o("Connection","Not sending because WebChannel is closed:",t):(u||(_o("Connection","Opening WebChannel transport."),c.open(),u=!0),_o("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,go.EventType.OPEN,(()=>{h||_o("Connection","WebChannel transport opened.")})),d(c,go.EventType.CLOSE,(()=>{h||(h=!0,_o("Connection","WebChannel transport closed"),l.io())})),d(c,go.EventType.ERROR,(t=>{h||(h=!0,So("Connection","WebChannel transport errored:",t),l.io(new Ro(ko.UNAVAILABLE,"The operation could not be completed")))})),d(c,go.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Co(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){_o("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Bu[t];if(void 0!==e)return ju(e)}(t),n=s.message;void 0===e&&(e=ko.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,l.io(new Ro(e,n)),c.close()}else _o("Connection","WebChannel received:",n),l.ro(n)}})),d(i,lo.STAT_EVENT,(t=>{t.stat===fo.PROXY?_o("Connection","Detected buffering proxy"):t.stat===fo.NOPROXY&&_o("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
/**
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
 */
/**
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
 */function Bf(){return"undefined"!=typeof window?window:null}function Uf(){return"undefined"!=typeof document?document:null}
/**
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
 */function qf(t){return new mh(t,!0)}class jf{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&_o("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */class Kf{constructor(t,e,n,r,s,i,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.So=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new jf(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===ko.RESOURCE_EXHAUSTED?(To(e.toString()),To("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===ko.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new Ro(ko.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return _o("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(_o("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gf extends Kf{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.It=s}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=Nh(this.It,t),n=function(t){if(!("targetChange"in t))return Ho.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ho.min():e.readTime?wh(e.readTime):Ho.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Sh(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=Tc(r)?{documents:Lh(t,r)}:{query:Mh(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ph(t,e.resumeToken):e.snapshotVersion.compareTo(Ho.min())>0&&(n.readTime=gh(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=Vh(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Sh(this.It),e.removeTarget=t,this.Lo(e)}}class $f extends Kf{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Co(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=Oh(t.writeResults,t.commitTime),n=wh(t.commitTime);return this.listener.tu(n,e)}return Co(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Sh(this.It),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>kh(this.It,t)))};this.Lo(e)}}
/**
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
 */class zf extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new Ro(ko.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So.ao(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ko.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ro(ko.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.So._o(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ko.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ro(ko.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class Qf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(To(e),this.uu=!1):_o("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
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
 */class Hf{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr((t=>{n.enqueueAndForget((async()=>{rm(this)&&(_o("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=No(t);e.wu.add(4),await Yf(e),e.yu.set("Unknown"),e.wu.delete(4),await Wf(e)}(this))}))})),this.yu=new Qf(n,r)}}async function Wf(t){if(rm(t))for(const e of t.mu)await e(!0)}async function Yf(t){for(const e of t.mu)await e(!1)}function Xf(t,e){const n=No(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),nm(n)?em(n):Im(n).Oo()&&Zf(n,e))}function Jf(t,e){const n=No(t),r=Im(n);n._u.delete(e),r.Oo()&&tm(n,e),0===n._u.size&&(r.Oo()?r.$o():rm(n)&&n.yu.set("Unknown"))}function Zf(t,e){t.pu.Mt(e.targetId),Im(t).Ho(e)}function tm(t,e){t.pu.Mt(e),Im(t).Jo(e)}function em(t){t.pu=new uh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Im(t).start(),t.yu.cu()}function nm(t){return rm(t)&&!Im(t).ko()&&t._u.size>0}function rm(t){return 0===No(t).wu.size}function sm(t){t.pu=void 0}async function im(t){t._u.forEach(((e,n)=>{Zf(t,e)}))}async function om(t,e){sm(t),nm(t)?(t.yu.lu(e),em(t)):t.yu.set("Unknown")}async function am(t,e,n){if(t.yu.set("Online"),e instanceof ah&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){_o("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await cm(t,n)}else if(e instanceof ih?t.pu.Gt(e):e instanceof oh?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Ho.min()))try{const e=await df(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t._u.get(r);s&&t._u.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Pa.EMPTY_BYTE_STRING,n.snapshotVersion)),tm(t,e);const r=new Sl(n.target,e,1,n.sequenceNumber);Zf(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){_o("RemoteStore","Failed to raise snapshot:",e),await cm(t,e)}}async function cm(t,e,n){if(!ya(e))throw e;t.wu.add(1),await Yf(t),t.yu.set("Offline"),n||(n=()=>df(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{_o("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Wf(t)}))}function um(t,e){return e().catch((n=>cm(t,n,e)))}async function hm(t){const e=No(t),n=Em(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;lm(e);)try{const t=await gf(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,dm(e,t)}catch(t){await cm(e,t)}fm(e)&&mm(e)}function lm(t){return rm(t)&&t.du.length<10}function dm(t,e){t.du.push(e);const n=Em(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function fm(t){return rm(t)&&!Em(t).ko()&&t.du.length>0}function mm(t){Em(t).start()}async function gm(t){Em(t).nu()}async function pm(t){const e=Em(t);for(const n of t.du)e.Zo(n.mutations)}async function ym(t,e,n){const r=t.du.shift(),s=_l.from(r,e,n);await um(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await hm(t)}async function wm(t,e){e&&Em(t).Xo&&await async function(t,e){if(n=e.code,qu(n)&&n!==ko.ABORTED){const n=t.du.shift();Em(t).Fo(),await um(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await hm(t)}var n}(t,e),fm(t)&&mm(t)}async function vm(t,e){const n=No(t);n.asyncQueue.verifyOperationInProgress(),_o("RemoteStore","RemoteStore received new credentials");const r=rm(n);n.wu.add(3),await Yf(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Wf(n)}async function bm(t,e){const n=No(t);e?(n.wu.delete(2),await Wf(n)):e||(n.wu.add(2),await Yf(n),n.yu.set("Unknown"))}function Im(t){return t.Iu||(t.Iu=function(t,e,n){const r=No(t);return r.iu(),new Gf(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
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
 */}(t.datastore,t.asyncQueue,{Yr:im.bind(null,t),Zr:om.bind(null,t),zo:am.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),nm(t)?em(t):t.yu.set("Unknown")):(await t.Iu.stop(),sm(t))}))),t.Iu}function Em(t){return t.Tu||(t.Tu=function(t,e,n){const r=No(t);return r.iu(),new $f(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:gm.bind(null,t),Zr:wm.bind(null,t),eu:pm.bind(null,t),tu:ym.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await hm(t)):(await t.Tu.stop(),t.du.length>0&&(_o("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
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
 */}class _m{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Oo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new _m(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ro(ko.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tm(t,e){if(To("AsyncQueue",`${e}: ${t}`),ya(t))return new Ro(ko.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Sm{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Zo.comparator(e.key,n.key):(t,e)=>Zo.comparator(t.key,e.key),this.keyedMap=Qu(),this.sortedSet=new Ca(this.comparator)}static emptySet(t){return new Sm(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Sm))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Sm;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Dm{constructor(){this.Eu=new Ca(Zo.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Ao():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Am{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Am(t,e,Sm.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Cm{constructor(){this.Ru=void 0,this.listeners=[]}}class xm{constructor(){this.queries=new Ku((t=>Zc(t)),Jc),this.onlineState="Unknown",this.bu=new Set}}async function Nm(t,e){const n=No(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Cm),s)try{i.Ru=await n.onListen(r)}catch(t){const n=Tm(t,`Initialization of query '${tu(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&Lm(n)}async function km(t,e){const n=No(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Rm(t,e){const n=No(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(s)&&(r=!0);e.Ru=s}}r&&Lm(n)}function Om(t,e,n){const r=No(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Lm(t){t.bu.forEach((t=>{t.next()}))}class Mm{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Am(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=Am.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
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
 */class Pm{constructor(t,e){this.payload=t,this.byteLength=e}Ou(){return"metadata"in this.payload}}
/**
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
 */class Vm{constructor(t){this.It=t}Ji(t){return Eh(this.It,t)}Yi(t){return t.metadata.exists?Ch(this.It,t.document,!1):wc.newNoDocument(this.Ji(t.metadata.name),this.Xi(t.metadata.readTime))}Xi(t){return wh(t)}}class Fm{constructor(t,e,n){this.Mu=t,this.localStore=e,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Bm(t)}Fu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.payload.namedQuery)this.queries.push(t.payload.namedQuery);else if(t.payload.documentMetadata){this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e;const n=Yo.fromString(t.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}$u(t){const e=new Map,n=new Vm(this.It);for(const r of t)if(r.metadata.queries){const t=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||th()).add(t);e.set(n,r)}}return e}async complete(){const t=await Ef(this.localStore,new Vm(this.It),this.documents,this.Mu.id),e=this.$u(this.documents);for(const n of this.queries)await _f(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:t}}}function Bm(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
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
 */class Um{constructor(t){this.key=t}}class qm{constructor(t){this.key=t}}class jm{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=th(),this.mutatedKeys=th(),this.Gu=ru(t),this.Qu=new Sm(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Dm,r=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=eu(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ao()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new Am(this.query,t.Qu,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Dm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=th(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new qm(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Um(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=th();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Am.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Km{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Gm{constructor(t){this.key=t,this.nc=!1}}class $m{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new Ku((t=>Zc(t)),Jc),this.rc=new Map,this.oc=new Set,this.uc=new Ca(Zo.comparator),this.cc=new Map,this.ac=new Kd,this.hc={},this.lc=new Map,this.fc=vd.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function zm(t,e){const n=Ig(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const t=await pf(n.localStore,Yc(e));n.isPrimaryClient&&Xf(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await Qm(n,e,r,"current"===i,t.resumeToken)}return s}async function Qm(t,e,n,r,s){t._c=(e,n,r)=>async function(t,e,n,r){let s=e.view.Wu(n);s.$i&&(s=await wf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return og(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const i=await wf(t.localStore,e,!0),o=new jm(e,i.Hi),a=o.Wu(i.documents),c=sh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);og(t,n,u.Xu);const h=new Km(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Hm(t,e){const n=No(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter((t=>!Jc(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Jf(n.remoteStore,r.targetId),sg(n,r.targetId)})).catch(la)):(sg(n,r.targetId),await yf(n.localStore,r.targetId,!0))}async function Wm(t,e,n){const r=Eg(t);try{const t=await function(t,e){const n=No(t),r=Qo.now(),s=e.reduce(((t,e)=>t.add(e.key)),th());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=$u(),c=th();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=xu(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ru(t.key,e,yc(e.value.mapValue),_u.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Hu(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new Ca(Go)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await ug(r,t.changes),await hm(r.remoteStore)}catch(t){const e=Tm(t,"Failed to persist write");n.reject(e)}}async function Ym(t,e){const n=No(t);try{const t=await ff(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(Co(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?Co(r.nc):t.removedDocuments.size>0&&(Co(r.nc),r.nc=!1))})),await ug(n,t,e)}catch(t){await la(t)}}function Xm(t,e,n){const r=No(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const s=r.view.Pu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=No(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Pu(e)&&(r=!0)})),r&&Lm(n)}(r.eventManager,e),t.length&&r.sc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jm(t,e,n){const r=No(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let t=new Ca(Zo.comparator);t=t.insert(i,wc.newNoDocument(i,Ho.min()));const n=th().add(i),s=new rh(Ho.min(),new Map,new ka(Go),t,n);await Ym(r,s),r.uc=r.uc.remove(i),r.cc.delete(e),cg(r)}else await yf(r.localStore,e,!1).then((()=>sg(r,e,n))).catch(la)}async function Zm(t,e){const n=No(t),r=e.batch.batchId;try{const t=await lf(n.localStore,e);rg(n,r,null),ng(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ug(n,t)}catch(t){await la(t)}}async function tg(t,e,n){const r=No(t);try{const t=await function(t,e){const n=No(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Co(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);rg(r,e,n),ng(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ug(r,t)}catch(n){await la(n)}}async function eg(t,e){const n=No(t);rm(n.remoteStore)||_o("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=No(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const r=n.lc.get(t)||[];r.push(e),n.lc.set(t,r)}catch(t){const n=Tm(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function ng(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function rg(t,e,n){const r=No(t);let s=r.hc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function sg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||ig(t,e)}))}function ig(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Jf(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),cg(t))}function og(t,e,n){for(const r of n)r instanceof Um?(t.ac.addReference(r.key,e),ag(t,r)):r instanceof qm?(_o("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||ig(t,r.key)):Ao()}function ag(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(_o("SyncEngine","New document in limbo: "+n),t.oc.add(r),cg(t))}function cg(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Zo(Yo.fromString(e)),r=t.fc.next();t.cc.set(r,new Gm(n)),t.uc=t.uc.insert(n,r),Xf(t.remoteStore,new Sl(Yc(Gc(n.path)),r,2,Ta.at))}}async function ug(t,e,n){const r=No(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=of.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.sc.zo(s),await async function(t,e){const n=No(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>da.forEach(e,(e=>da.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>da.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ya(t))throw t;_o("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,s)}}}(r.localStore,i))}async function hg(t,e){const n=No(t);if(!n.currentUser.isEqual(e)){_o("SyncEngine","User change. New user:",e.toKey());const t=await hf(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Ro(ko.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ug(n,t.ji)}}function lg(t,e){const n=No(t),r=n.cc.get(e);if(r&&r.nc)return th().add(r.key);{let t=th();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}async function dg(t,e){const n=No(t),r=await wf(n.localStore,e.query,!0),s=e.view.tc(r);return n.isPrimaryClient&&og(n,e.targetId,s.Xu),s}async function fg(t,e){const n=No(t);return bf(n.localStore,e).then((t=>ug(n,t)))}async function mg(t,e,n,r){const s=No(t),i=await function(t,e){const n=No(t),r=No(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>r.Tn(t,e).next((e=>e?n.localDocuments.getDocuments(t,e):da.resolve(null)))))}(s.localStore,e);null!==i?("pending"===n?await hm(s.remoteStore):"acknowledged"===n||"rejected"===n?(rg(s,e,r||null),ng(s,e),function(t,e){No(No(t).mutationQueue).An(e)}(s.localStore,e)):Ao(),await ug(s,i)):_o("SyncEngine","Cannot apply mutation batch with id: "+e)}async function gg(t,e){const n=No(t);if(Ig(n),Eg(n),!0===e&&!0!==n.dc){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await pg(n,t.toArray());n.dc=!0,await bm(n.remoteStore,!0);for(const r of e)Xf(n.remoteStore,r)}else if(!1===e&&!1!==n.dc){const t=[];let e=Promise.resolve();n.rc.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then((()=>(sg(n,s),yf(n.localStore,s,!0)))),Jf(n.remoteStore,s)})),await e,await pg(n,t),function(t){const e=No(t);e.cc.forEach(((t,n)=>{Jf(e.remoteStore,n)})),e.ac.fs(),e.cc=new Map,e.uc=new Ca(Zo.comparator)}(n),n.dc=!1,await bm(n.remoteStore,!1)}}async function pg(t,e,n){const r=No(t),s=[],i=[];for(const o of e){let t;const e=r.rc.get(o);if(e&&0!==e.length){t=await pf(r.localStore,Yc(e[0]));for(const t of e){const e=r.ic.get(t),n=await dg(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await vf(r.localStore,o);t=await pf(r.localStore,e),await Qm(r,yg(e),o,!1,t.resumeToken)}s.push(t)}return r.sc.zo(i),s}function yg(t){return Kc(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function wg(t){const e=No(t);return No(No(e.localStore).persistence).vi()}async function vg(t,e,n,r){const s=No(t);if(s.dc)return void _o("SyncEngine","Ignoring unexpected query state notification.");const i=s.rc.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await bf(s.localStore,nu(i[0])),r=rh.createSynthesizedRemoteEventForCurrentChange(e,"current"===n,Pa.EMPTY_BYTE_STRING);await ug(s,t,r);break}case"rejected":await yf(s.localStore,e,!0),sg(s,e,r);break;default:Ao()}}async function bg(t,e,n){const r=Ig(t);if(r.dc){for(const t of e){if(r.rc.has(t)){_o("SyncEngine","Adding an already active target "+t);continue}const e=await vf(r.localStore,t),n=await pf(r.localStore,e);await Qm(r,yg(e),n.targetId,!1,n.resumeToken),Xf(r.remoteStore,n)}for(const t of n)r.rc.has(t)&&await yf(r.localStore,t,!1).then((()=>{Jf(r.remoteStore,t),sg(r,t)})).catch(la)}}function Ig(t){const e=No(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jm.bind(null,e),e.sc.zo=Rm.bind(null,e.eventManager),e.sc.wc=Om.bind(null,e.eventManager),e}function Eg(t){const e=No(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tg.bind(null,e),e}function _g(t,e,n){const r=No(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=No(t),r=wh(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n.Ns.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(r)>=0))}(t.localStore,r))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Bm(r));const s=new Fm(r,t.localStore,e.It);let i=await e.mc();for(;i;){const t=await s.Fu(i);t&&n._updateProgress(t),i=await e.mc()}const o=await s.complete();return await ug(t,o.Lu,void 0),await function(t,e){const n=No(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n.Ns.saveBundleMetadata(t,e)))}(t.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(t){return So("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t),Promise.resolve(new Set)}}
/**
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
 */)(r,e,n).then((t=>{r.sharedClientState.notifyBundleLoaded(t)}))}class Tg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=qf(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return uf(this.persistence,new af,t.initialUser,this.It)}yc(t){return new Wd(Xd.Bs,this.It)}gc(t){return new Of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sg extends Tg{constructor(t,e,n){super(),this.Ac=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ac.initialize(this,t),await Eg(this.Ac.syncEngine),await hm(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(t){return uf(this.persistence,new af,t.initialUser,this.It)}Tc(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Dd(n,t.asyncQueue,e)}Ec(t,e){const n=new _a(e,this.persistence);return new Ea(t.asyncQueue,n)}yc(t){const e=sf(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ld.withCacheSize(this.cacheSizeBytes):ld.DEFAULT;return new ef(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Bf(),Uf(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(t){return new Of}}class Dg extends Sg{constructor(t,e){super(t,e,!1),this.Ac=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ac.syncEngine;this.sharedClientState instanceof Rf&&(this.sharedClientState.syncEngine={Fr:mg.bind(null,e),$r:vg.bind(null,e),Br:bg.bind(null,e),vi:wg.bind(null,e),Mr:fg.bind(null,e)},await this.sharedClientState.start()),await this.persistence.li((async t=>{await gg(this.Ac.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())}))}gc(t){const e=Bf();if(!Rf.C(e))throw new Ro(ko.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=sf(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Rf(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Ag{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xm(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=hg.bind(null,this.syncEngine),await bm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xm}createDatastore(t){const e=qf(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ff(r));var r;return function(t,e,n,r){return new zf(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Xm(this.syncEngine,t,0),i=Mf.C()?new Mf:new Lf,new Hf(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new $m(t,e,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=No(t);_o("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Yf(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Cg(t,e,n){if(!n)throw new Ro(ko.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xg(t,e,n,r){if(!0===e&&!0===r)throw new Ro(ko.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!Zo.isDocumentKey(t))throw new Ro(ko.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(Zo.isDocumentKey(t))throw new Ro(ko.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ao()}function Og(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ro(ko.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rg(t);throw new Ro(ko.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Lg(t,e){if(e<=0)throw new Ro(ko.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
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
 */const Mg=new Map;class Pg{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ro(ko.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ro(ko.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,xg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Vg{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ro(ko.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ro(ko.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Mo;switch(t.type){case"gapi":const e=t.client;return new Bo(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ro(ko.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Mg.get(t);e&&(_o("ComponentProvider","Removing Datastore"),Mg.delete(t),e.terminate())}(this),Promise.resolve()}}function Fg(t,e,n,r={}){var s;const i=(t=Og(t,Vg))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&So("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=wo.MOCK_USER;else{e=S(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Ro(ko.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new wo(i)}t._authCredentials=new Po(new Lo(e,n))}}
/**
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
 */class Bg{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qg(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bg(this.firestore,t,this._key)}}class Ug{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ug(this.firestore,t,this._query)}}class qg extends Ug{constructor(t,e,n){super(t,e,Gc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bg(this.firestore,null,new Zo(t))}withConverter(t){return new qg(this.firestore,t,this._path)}}function jg(t,e,...n){if(t=F(t),Cg("collection","path",e),t instanceof Vg){const r=Yo.fromString(e,...n);return kg(r),new qg(t,null,r)}{if(!(t instanceof Bg||t instanceof qg))throw new Ro(ko.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Yo.fromString(e,...n));return kg(r),new qg(t.firestore,null,r)}}function Kg(t,e){if(t=Og(t,Vg),Cg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Ro(ko.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ug(t,null,function(t){return new jc(Yo.emptyPath(),t)}(e))}function Gg(t,e,...n){if(t=F(t),1===arguments.length&&(e=Ko.R()),Cg("doc","path",e),t instanceof Vg){const r=Yo.fromString(e,...n);return Ng(r),new Bg(t,null,new Zo(r))}{if(!(t instanceof Bg||t instanceof qg))throw new Ro(ko.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Yo.fromString(e,...n));return Ng(r),new Bg(t.firestore,t instanceof qg?t.converter:null,new Zo(r))}}function $g(t,e){return t=F(t),e=F(e),(t instanceof Bg||t instanceof qg)&&(e instanceof Bg||e instanceof qg)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function zg(t,e){return t=F(t),e=F(e),t instanceof Ug&&e instanceof Ug&&t.firestore===e.firestore&&Jc(t._query,e._query)&&t.converter===e.converter
/**
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
 */}function Qg(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class Hg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):To("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */class Wg{constructor(t,e){this.Pc=t,this.It=e,this.metadata=new Oo,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((t=>{t&&t.Ou()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const t=await this.Sc();if(null===t)return null;const e=this.vc.decode(t),n=Number(e);isNaN(n)&&this.Dc(`length string (${e}) is not valid number`);const r=await this.Cc(n);return new Pm(JSON.parse(r),t.length+n)}xc(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const t=this.xc();t<0&&this.Dc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Cc(t){for(;this.buffer.length<t;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const e=this.vc.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Dc(t){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${t}`)}async Nc(){const t=await this.Pc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
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
 */
/**
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
 */
class Yg{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Ro(ko.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=No(t),r=Sh(n.It)+"/documents",s={documents:e.map((t=>Ih(n.It,t)))},i=await n._o("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach((t=>{const e=xh(n.It,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Co(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Pu(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=Zo.fromPath(e);this.mutations.push(new Vu(n,this.precondition(n)))})),await async function(t,e){const n=No(t),r=Sh(n.It)+"/documents",s={writes:e.map((t=>kh(n.It,t)))};await n.ao("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Ao();e=Ho.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new Ro(ko.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(Ho.min())?_u.exists(!1):_u.updateTime(e):_u.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(Ho.min()))throw new Ro(ko.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _u.updateTime(e)}return _u.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
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
 */class Xg{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this.kc=n.maxAttempts,this.No=new jf(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.No.Ro((async()=>{const t=new Yg(this.datastore),e=this.Mc(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Fc(t)}))))})).catch((t=>{this.Fc(t)}))}))}Mc(t){try{const e=this.updateFunction(t);return!za(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(t){this.kc>0&&this.$c(t)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(t)}$c(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!qu(e)}return!1}}
/**
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
 */class Jg{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=wo.UNAUTHENTICATED,this.clientId=Ko.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{_o("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(_o("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ro(ko.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Oo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Tm(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress(),_o("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await hf(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ep(t);_o("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>vm(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>vm(e.remoteStore,n))),t.onlineComponents=e}async function ep(t){return t.offlineComponents||(_o("FirestoreClient","Using default OfflineComponentProvider"),await Zg(t,new Tg)),t.offlineComponents}async function np(t){return t.onlineComponents||(_o("FirestoreClient","Using default OnlineComponentProvider"),await tp(t,new Ag)),t.onlineComponents}function rp(t){return ep(t).then((t=>t.persistence))}function sp(t){return ep(t).then((t=>t.localStore))}function ip(t){return np(t).then((t=>t.remoteStore))}function op(t){return np(t).then((t=>t.syncEngine))}function ap(t){return np(t).then((t=>t.datastore))}async function cp(t){const e=await np(t),n=e.eventManager;return n.onListen=zm.bind(null,e.syncEngine),n.onUnlisten=Hm.bind(null,e.syncEngine),n}function up(t){return t.asyncQueue.enqueue((async()=>{const e=await rp(t),n=await ip(t);return e.setNetworkEnabled(!0),function(t){const e=No(t);return e.wu.delete(0),Wf(e)}(n)}))}function hp(t){return t.asyncQueue.enqueue((async()=>{const e=await rp(t),n=await ip(t);return e.setNetworkEnabled(!1),async function(t){const e=No(t);e.wu.add(0),await Yf(e),e.yu.set("Offline")}(n)}))}function lp(t,e){const n=new Oo;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await function(t,e){const n=No(t);return n.persistence.runTransaction("read document","readonly",(t=>n.localDocuments.getDocument(t,e)))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Ro(ko.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=Tm(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await sp(t),e,n))),n.promise}function dp(t,e,n={}){const r=new Oo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Hg({next:i=>{e.enqueueAndForget((()=>km(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Ro(ko.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Ro(ko.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Mm(Gc(n.path),i,{includeMetadataChanges:!0,ku:!0});return Nm(t,o)}(await cp(t),t.asyncQueue,e,n,r))),r.promise}function fp(t,e){const n=new Oo;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await wf(t,e,!0),s=new jm(e,r.Hi),i=s.Wu(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const r=Tm(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await sp(t),e,n))),n.promise}function mp(t,e,n={}){const r=new Oo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Hg({next:n=>{e.enqueueAndForget((()=>km(t,o))),n.fromCache&&"server"===r.source?s.reject(new Ro(ko.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Mm(n,i,{includeMetadataChanges:!0,ku:!0});return Nm(t,o)}(await cp(t),t.asyncQueue,e,n,r))),r.promise}function gp(t,e){const n=new Hg(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){No(t).bu.add(e),e.next()}(await cp(t),n))),()=>{n.bc(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){No(t).bu.delete(e)}(await cp(t),n)))}}function pp(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Wg(t,e)}(function(t,e){if(t instanceof Uint8Array)return Qg(t,e);if(t instanceof ArrayBuffer)return Qg(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
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
 */(n,qf(e));t.asyncQueue.enqueueAndForget((async()=>{_g(await op(t),s,r)}))}function yp(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=No(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n.Ns.getNamedQuery(t,e)))}(await sp(t),e)))}class wp{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new jf(this,"async_queue_retry"),this.Wc=()=>{const t=Uf();t&&_o("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Uf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Uf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Oo;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(ln){if(!ya(ln))throw ln;_o("AsyncQueue","Operation failed with retryable error: "+ln)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw To("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=_m.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&Ao()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}function vp(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(t,["next","error","complete"])}class bp{constructor(){this._progressObserver={},this._taskCompletionResolver=new Oo,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
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
 */const Ip=-1;class Ep extends Vg{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tp(this),this._firestoreClient.terminate()}}function _p(t){return t._firestoreClient||Tp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tp(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ga(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Jg(t._authCredentials,t._appCheckCredentials,t._queue,r)}function Sp(t,e){Lp(t=Og(t,Ep));const n=_p(t),r=t._freezeSettings(),s=new Ag;return Ap(n,s,new Sg(s,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Dp(t){Lp(t=Og(t,Ep));const e=_p(t),n=t._freezeSettings(),r=new Ag;return Ap(e,r,new Dg(r,n.cacheSizeBytes))}function Ap(t,e,n){const r=new Oo;return t.asyncQueue.enqueue((async()=>{try{await Zg(t,n),await tp(t,e),r.resolve()}catch(t){const n=t;if(!function(t){return"FirebaseError"===t.name?t.code===ko.FAILED_PRECONDITION||t.code===ko.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(n))throw n;So("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function Cp(t){if(t._initialized&&!t._terminated)throw new Ro(ko.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Oo;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!ma.C())return Promise.resolve();const e=t+"main";await ma.delete(e)}
/**
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
 */(sf(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function xp(t){return function(t){const e=new Oo;return t.asyncQueue.enqueueAndForget((async()=>eg(await op(t),e))),e.promise}(_p(t=Og(t,Ep)))}function Np(t){return up(_p(t=Og(t,Ep)))}function kp(t){return hp(_p(t=Og(t,Ep)))}function Rp(t,e){const n=_p(t=Og(t,Ep)),r=new bp;return pp(n,t._databaseId,e,r),r}function Op(t,e){return yp(_p(t=Og(t,Ep)),e).then((e=>e?new Ug(t,null,e.query):null))}function Lp(t){if(t._initialized||t._terminated)throw new Ro(ko.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Mp{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mp(Pa.fromBase64String(t))}catch(t){throw new Ro(ko.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Mp(Pa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class Pp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ro(ko.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Vp{constructor(t){this._methodName=t}}
/**
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
 */class Fp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ro(ko.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ro(ko.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Go(this._lat,t._lat)||Go(this._long,t._long)}}
/**
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
 */const Bp=/^__.*__$/;class Up{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ru(t,this.data,this.fieldMask,e,this.fieldTransforms):new ku(t,this.data,e,this.fieldTransforms)}}class qp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ru(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function jp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ao()}}class Kp{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Kp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return uy(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(jp(this.sa)&&Bp.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Gp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||qf(t)}da(t,e,n,r=!1){return new Kp({sa:t,methodName:e,fa:n,path:Jo.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function $p(t){const e=t._freezeSettings(),n=qf(t._databaseId);return new Gp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zp(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);iy("Data must be an object, but it was:",o,r);const a=ry(r,o);let c,u;if(i.merge)c=new La(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=oy(e,r,n);if(!o.contains(s))throw new Ro(ko.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);hy(t,s)||t.push(s)}c=new La(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Up(new pc(a),c,u)}class Qp extends Vp{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Qp}}function Hp(t,e,n){return new Kp({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Wp extends Vp{_toFieldTransform(t){return new bu(t.path,new du)}isEqual(t){return t instanceof Wp}}class Yp extends Vp{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Hp(this,t,!0),n=this._a.map((t=>ny(t,e))),r=new fu(n);return new bu(t.path,r)}isEqual(t){return this===t}}class Xp extends Vp{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Hp(this,t,!0),n=this._a.map((t=>ny(t,e))),r=new gu(n);return new bu(t.path,r)}isEqual(t){return this===t}}class Jp extends Vp{constructor(t,e){super(t),this.wa=e}_toFieldTransform(t){const e=new yu(t.It,au(t.It,this.wa));return new bu(t.path,e)}isEqual(t){return this===t}}function Zp(t,e,n,r){const s=t.da(1,e,n);iy("Data must be an object, but it was:",s,r);const i=[],o=pc.empty();Da(r,((t,r)=>{const a=cy(e,t,n);r=F(r);const c=s.ca(a);if(r instanceof Qp)i.push(a);else{const t=ny(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new La(i);return new qp(o,a,s.fieldTransforms)}function ty(t,e,n,r,s,i){const o=t.da(1,e,n),a=[oy(e,r,n)],c=[s];if(i.length%2!=0)throw new Ro(ko.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(oy(e,i[d])),c.push(i[d+1]);const u=[],h=pc.empty();for(let d=a.length-1;d>=0;--d)if(!hy(u,a[d])){const t=a[d];let e=c[d];e=F(e);const n=o.ca(t);if(e instanceof Qp)u.push(t);else{const r=ny(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new La(u);return new qp(h,l,o.fieldTransforms)}function ey(t,e,n,r=!1){return ny(n,t.da(r?4:3,e))}function ny(t,e){if(sy(t=F(t)))return iy("Unsupported field value:",e,t),ry(t,e);if(t instanceof Vp)return function(t,e){if(!jp(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=ny(s,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=F(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return au(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Qo.fromDate(t);return{timestampValue:gh(e.It,n)}}if(t instanceof Qo){const n=new Qo(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gh(e.It,n)}}if(t instanceof Fp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Mp)return{bytesValue:ph(e.It,t._byteString)};if(t instanceof Bg){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Rg(t)}`)}(t,e)}function ry(t,e){const n={};return Aa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Da(t,((t,r)=>{const s=ny(r,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function sy(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Qo||t instanceof Fp||t instanceof Mp||t instanceof Bg||t instanceof Vp)}function iy(t,e,n){if(!sy(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Rg(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function oy(t,e,n){if((e=F(e))instanceof Pp)return e._internalPath;if("string"==typeof e)return cy(t,e);throw uy("Field path arguments must be of type string or ",t,!1,void 0,n)}const ay=new RegExp("[~\\*/\\[\\]]");function cy(t,e,n){if(e.search(ay)>=0)throw uy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pp(...e.split("."))._internalPath}catch(r){throw uy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uy(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Ro(ko.INVALID_ARGUMENT,a+t+c)}function hy(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class ly{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new dy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fy("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class dy extends ly{data(){return super.data()}}function fy(t,e){return"string"==typeof e?cy(t,e):e instanceof Pp?e._internalPath:e._delegate._internalPath}
/**
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
 */function my(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Ro(ko.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gy{}function py(t,...e){for(const n of e)t=n._apply(t);return t}class yy extends gy{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=$p(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Ro(ko.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Ry(o,i);const e=[];for(const n of o)e.push(ky(r,t,n));a={arrayValue:{values:e}}}else a=ky(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Ry(o,i),a=ey(n,e,o,"in"===i||"not-in"===i);const c=Cc.create(s,i,a);return function(t,e){if(e.dt()){const n=Qc(t);if(null!==n&&!n.isEqual(e.field))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=zc(t);null!==r&&Oy(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Ro(ko.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ro(ko.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Ug(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function wy(t,e,n){const r=e,s=fy("where",t);return new yy(s,r,n)}class vy extends gy{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Ro(ko.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Ro(ko.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Fc(e,n);return function(t,e){if(null===zc(t)){const n=Qc(t);null!==n&&Oy(t,n,e.field)}}(t,r),r}(t._query,this.ma,this.pa);return new Ug(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new jc(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function by(t,e="asc"){const n=e,r=fy("orderBy",t);return new vy(r,n)}class Iy extends gy{constructor(t,e,n){super(),this.type=t,this.Ia=e,this.Ta=n}_apply(t){return new Ug(t.firestore,t.converter,Xc(t._query,this.Ia,this.Ta))}}function Ey(t){return Lg("limit",t),new Iy("limit",t,"F")}function _y(t){return Lg("limitToLast",t),new Iy("limitToLast",t,"L")}class Ty extends gy{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){const e=Ny(t,this.type,this.Ea,this.Aa);return new Ug(t.firestore,t.converter,function(t,e){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Sy(...t){return new Ty("startAt",t,!0)}function Dy(...t){return new Ty("startAfter",t,!1)}class Ay extends gy{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){const e=Ny(t,this.type,this.Ea,this.Aa);return new Ug(t.firestore,t.converter,function(t,e){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Cy(...t){return new Ay("endBefore",t,!1)}function xy(...t){return new Ay("endAt",t,!0)}function Ny(t,e,n,r){if(n[0]=F(n[0]),n[0]instanceof ly)return function(t,e,n,r,s){if(!r)throw new Ro(ko.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Wc(t))if(o.field.isKeyField())i.push(sc(e,r.key));else{const t=r.data.field(o.field);if(qa(t))throw new Ro(ko.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new Vc(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=$p(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new Ro(ko.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Hc(t)&&-1!==i.indexOf("/"))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(Yo.fromString(i));if(!Zo.isDocumentKey(n))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Zo(n);a.push(sc(e,s))}else{const t=ey(n,r,i);a.push(t)}}return new Vc(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function ky(t,e,n){if("string"==typeof(n=F(n))){if(""===n)throw new Ro(ko.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hc(e)&&-1!==n.indexOf("/"))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Yo.fromString(n));if(!Zo.isDocumentKey(r))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sc(t,new Zo(r))}if(n instanceof Bg)return sc(t,n._key);throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rg(n)}.`)}function Ry(t,e){if(!Array.isArray(t)||0===t.length)throw new Ro(ko.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Ro(ko.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Oy(t,e,n){if(!n.isEqual(e))throw new Ro(ko.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */class Ly{convertValue(t,e="none"){switch(Xa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ba(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ua(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ao()}}convertObject(t,e){const n={};return Da(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Fp(Ba(t.latitude),Ba(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ja(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ka(t));default:return null}}convertTimestamp(t){const e=Fa(t);return new Qo(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Yo.fromString(t);Co(zh(n));const r=new $a(n.get(1),n.get(3)),s=new Zo(n.popFirst(5));return r.isEqual(e)||To(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
 */function My(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Py extends Ly{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mp(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bg(this.firestore,null,e)}}
/**
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
 */class Vy{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fy extends ly{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new By(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class By extends Fy{data(t={}){return super.data(t)}}class Uy{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Vy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new By(this._firestore,this._userDataWriter,n.key,n,new Vy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ro(ko.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new By(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vy(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new By(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vy(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:qy(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ao()}}function jy(t,e){return t instanceof Fy&&e instanceof Fy?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Uy&&e instanceof Uy&&t._firestore===e._firestore&&zg(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
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
 */function Ky(t){t=Og(t,Bg);const e=Og(t.firestore,Ep);return dp(_p(e),t._key).then((n=>rw(e,t,n)))}class Gy extends Ly{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mp(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bg(this.firestore,null,e)}}function $y(t){t=Og(t,Bg);const e=Og(t.firestore,Ep),n=_p(e),r=new Gy(e);return lp(n,t._key).then((n=>new Fy(e,r,t._key,n,new Vy(null!==n&&n.hasLocalMutations,!0),t.converter)))}function zy(t){t=Og(t,Bg);const e=Og(t.firestore,Ep);return dp(_p(e),t._key,{source:"server"}).then((n=>rw(e,t,n)))}function Qy(t){t=Og(t,Ug);const e=Og(t.firestore,Ep),n=_p(e),r=new Gy(e);return my(t._query),mp(n,t._query).then((n=>new Uy(e,r,t,n)))}function Hy(t){t=Og(t,Ug);const e=Og(t.firestore,Ep),n=_p(e),r=new Gy(e);return fp(n,t._query).then((n=>new Uy(e,r,t,n)))}function Wy(t){t=Og(t,Ug);const e=Og(t.firestore,Ep),n=_p(e),r=new Gy(e);return mp(n,t._query,{source:"server"}).then((n=>new Uy(e,r,t,n)))}function Yy(t,e,n){t=Og(t,Bg);const r=Og(t.firestore,Ep),s=My(t.converter,e,n);return nw(r,[zp($p(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,_u.none())])}function Xy(t,e,n,...r){t=Og(t,Bg);const s=Og(t.firestore,Ep),i=$p(s);let o;return o="string"==typeof(e=F(e))||e instanceof Pp?ty(i,"updateDoc",t._key,e,n,r):Zp(i,"updateDoc",t._key,e),nw(s,[o.toMutation(t._key,_u.exists(!0))])}function Jy(t){return nw(Og(t.firestore,Ep),[new Pu(t._key,_u.none())])}function Zy(t,e){const n=Og(t.firestore,Ep),r=Gg(t),s=My(t.converter,e);return nw(n,[zp($p(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,_u.exists(!1))]).then((()=>r))}function tw(t,...e){var n,r,s;t=F(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||vp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(vp(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,h;if(t instanceof Bg)u=Og(t.firestore,Ep),h=Gc(t._key.path),c={next:n=>{e[o]&&e[o](rw(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Og(t,Ug);u=Og(n.firestore,Ep),h=n._query;const r=new Gy(u);c={next:t=>{e[o]&&e[o](new Uy(u,r,n,t))},error:e[o+1],complete:e[o+2]},my(t._query)}return function(t,e,n,r){const s=new Hg(r),i=new Mm(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Nm(await cp(t),i))),()=>{s.bc(),t.asyncQueue.enqueueAndForget((async()=>km(await cp(t),i)))}}(_p(u),h,a,c)}function ew(t,e){return gp(_p(t=Og(t,Ep)),vp(e)?e:{next:e})}function nw(t,e){return function(t,e){const n=new Oo;return t.asyncQueue.enqueueAndForget((async()=>Wm(await op(t),e,n))),n.promise}(_p(t),e)}function rw(t,e,n){const r=n.docs.get(e._key),s=new Gy(t);return new Fy(t,s,e._key,r,new Vy(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */
/**
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
 */
const sw={maxAttempts:5};
/**
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
 */class iw{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=$p(t)}set(t,e,n){this._verifyNotCommitted();const r=ow(t,this._firestore),s=My(r.converter,e,n),i=zp(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,_u.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const s=ow(t,this._firestore);let i;return i="string"==typeof(e=F(e))||e instanceof Pp?ty(this._dataReader,"WriteBatch.update",s._key,e,n,r):Zp(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(i.toMutation(s._key,_u.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ow(t,this._firestore);return this._mutations=this._mutations.concat(new Pu(e._key,_u.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Ro(ko.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ow(t,e){if((t=F(t)).firestore!==e)throw new Ro(ko.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
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
 */
/**
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
 */class aw extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=$p(t)}get(t){const e=ow(t,this._firestore),n=new Py(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Ao();const r=t[0];if(r.isFoundDocument())return new ly(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new ly(this._firestore,n,e._key,null,e.converter);throw Ao()}))}set(t,e,n){const r=ow(t,this._firestore),s=My(r.converter,e,n),i=zp(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=ow(t,this._firestore);let i;return i="string"==typeof(e=F(e))||e instanceof Pp?ty(this._dataReader,"Transaction.update",s._key,e,n,r):Zp(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=ow(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ow(t,this._firestore),n=new Gy(this._firestore);return super.get(t).then((t=>new Fy(this._firestore,n,e._key,t._document,new Vy(!1,!1),e.converter)))}}function cw(t,e,n){t=Og(t,Ep);const r=Object.assign(Object.assign({},sw),n);return function(t){if(t.maxAttempts<1)throw new Ro(ko.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new Oo;return t.asyncQueue.enqueueAndForget((async()=>{const s=await ap(t);new Xg(t.asyncQueue,s,n,e,r).run()})),r.promise}(_p(t),(n=>e(new aw(t,n))),r)}
/**
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
 */function uw(){return new Qp("deleteField")}function hw(){return new Wp("serverTimestamp")}function lw(...t){return new Yp("arrayUnion",t)}function dw(...t){return new Xp("arrayRemove",t)}function fw(t){return new Jp("increment",t)}
/**
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
 */!function(t,e=!0){!function(t){vo=t}(de),ie(new B("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new Ep(new Vo(t.getProvider("auth-internal")),new qo(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ro(ko.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(t.options.projectId,e)}
/**
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
 */(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),ye(yo,"3.7.1",t),ye(yo,"3.7.1","esm2017")}();const mw="@firebase/firestore-compat",gw="0.2.1";
/**
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
 */
function pw(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new Ro("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
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
 */function yw(){if("undefined"===typeof Uint8Array)throw new Ro("unimplemented","Uint8Arrays are not available in this environment.")}function ww(){if(!Ma())throw new Ro("unimplemented","Blobs are unavailable in Firestore in this environment.")}class vw{constructor(t){this._delegate=t}static fromBase64String(t){return ww(),new vw(Mp.fromBase64String(t))}static fromUint8Array(t){return yw(),new vw(Mp.fromUint8Array(t))}toBase64(){return ww(),this._delegate.toBase64()}toUint8Array(){return yw(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function bw(t){return Iw(t,["next","error","complete"])}function Iw(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
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
 */class Ew{enableIndexedDbPersistence(t,e){return Sp(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Dp(t._delegate)}clearIndexedDbPersistence(t){return Cp(t._delegate)}}class _w{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof $a||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||So("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Fg(this._delegate,t,e,n)}enableNetwork(){return Np(this._delegate)}disableNetwork(){return kp(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,xg("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return xp(this._delegate)}onSnapshotsInSync(t){return ew(this._delegate,t)}get app(){if(!this._appCompat)throw new Ro("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new Fw(this,jg(this._delegate,t))}catch(e){throw Nw(e,"collection()","Firestore.collection()")}}doc(t){try{return new xw(this,Gg(this._delegate,t))}catch(e){throw Nw(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new Mw(this,Kg(this._delegate,t))}catch(e){throw Nw(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return cw(this._delegate,(e=>t(new Dw(this,e))))}batch(){return _p(this._delegate),new Aw(new iw(this._delegate,(t=>nw(this._delegate,t))))}loadBundle(t){return Rp(this._delegate,t)}namedQuery(t){return Op(this._delegate,t).then((t=>t?new Mw(this,t):null))}}class Tw extends Ly{constructor(t){super(),this.firestore=t}convertBytes(t){return new vw(new Mp(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return xw.forKey(e,this.firestore,null)}}function Sw(t){Eo(t)}class Dw{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Tw(t)}get(t){const e=Bw(t);return this._delegate.get(e).then((t=>new Ow(this._firestore,new Fy(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const r=Bw(t);return n?(pw("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Bw(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Bw(t);return this._delegate.delete(e),this}}class Aw{constructor(t){this._delegate=t}set(t,e,n){const r=Bw(t);return n?(pw("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Bw(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Bw(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class Cw{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new By(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new Lw(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=Cw.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let s=r.get(e);return s||(s=new Cw(t,new Tw(t),e),r.set(e,s)),s}}Cw.INSTANCES=new WeakMap;class xw{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Tw(t)}static forPath(t,e,n){if(t.length%2!==0)throw new Ro("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new xw(e,new Bg(e._delegate,n,new Zo(t)))}static forKey(t,e,n){return new xw(e,new Bg(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new Fw(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new Fw(this.firestore,jg(this._delegate,t))}catch(e){throw Nw(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=F(t),t instanceof Bg&&$g(this._delegate,t)}set(t,e){e=pw("DocumentReference.set",e);try{return e?Yy(this._delegate,t,e):Yy(this._delegate,t)}catch(n){throw Nw(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Xy(this._delegate,t):Xy(this._delegate,t,e,...n)}catch(r){throw Nw(r,"updateDoc()","DocumentReference.update()")}}delete(){return Jy(this._delegate)}onSnapshot(...t){const e=kw(t),n=Rw(t,(t=>new Ow(this.firestore,new Fy(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return tw(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?$y(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?zy(this._delegate):Ky(this._delegate),e.then((t=>new Ow(this.firestore,new Fy(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new xw(this.firestore,t?this._delegate.withConverter(Cw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Nw(t,e,n){return t.message=t.message.replace(e,n),t}function kw(t){for(const e of t)if("object"===typeof e&&!bw(e))return e;return{}}function Rw(t,e){var n,r;let s;return s=bw(t[0])?t[0]:bw(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{s.next&&s.next(e(t))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Ow{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new xw(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return jy(this._delegate,t._delegate)}}class Lw extends Ow{data(t){const e=this._delegate.data(t);return xo(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class Mw{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Tw(t)}where(t,e,n){try{return new Mw(this.firestore,py(this._delegate,wy(t,e,n)))}catch(r){throw Nw(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new Mw(this.firestore,py(this._delegate,by(t,e)))}catch(n){throw Nw(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new Mw(this.firestore,py(this._delegate,Ey(t)))}catch(e){throw Nw(e,"limit()","Query.limit()")}}limitToLast(t){try{return new Mw(this.firestore,py(this._delegate,_y(t)))}catch(e){throw Nw(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new Mw(this.firestore,py(this._delegate,Sy(...t)))}catch(e){throw Nw(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new Mw(this.firestore,py(this._delegate,Dy(...t)))}catch(e){throw Nw(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new Mw(this.firestore,py(this._delegate,Cy(...t)))}catch(e){throw Nw(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new Mw(this.firestore,py(this._delegate,xy(...t)))}catch(e){throw Nw(e,"endAt()","Query.endAt()")}}isEqual(t){return zg(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Hy(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Wy(this._delegate):Qy(this._delegate),e.then((t=>new Vw(this.firestore,new Uy(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=kw(t),n=Rw(t,(t=>new Vw(this.firestore,new Uy(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return tw(this._delegate,e,n)}withConverter(t){return new Mw(this.firestore,t?this._delegate.withConverter(Cw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class Pw{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new Lw(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Vw{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new Mw(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new Lw(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new Pw(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new Lw(this._firestore,n))}))}isEqual(t){return jy(this._delegate,t._delegate)}}class Fw extends Mw{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new xw(this.firestore,t):null}doc(t){try{return new xw(this.firestore,void 0===t?Gg(this._delegate):Gg(this._delegate,t))}catch(e){throw Nw(e,"doc()","CollectionReference.doc()")}}add(t){return Zy(this._delegate,t).then((t=>new xw(this.firestore,t)))}isEqual(t){return $g(this._delegate,t._delegate)}withConverter(t){return new Fw(this.firestore,t?this._delegate.withConverter(Cw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Bw(t){return Og(t,Bg)}
/**
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
 */class Uw{constructor(...t){this._delegate=new Pp(...t)}static documentId(){return new Uw(Jo.keyField().canonicalString())}isEqual(t){return t=F(t),t instanceof Pp&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
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
 */class qw{constructor(t){this._delegate=t}static serverTimestamp(){const t=hw();return t._methodName="FieldValue.serverTimestamp",new qw(t)}static delete(){const t=uw();return t._methodName="FieldValue.delete",new qw(t)}static arrayUnion(...t){const e=lw(...t);return e._methodName="FieldValue.arrayUnion",new qw(e)}static arrayRemove(...t){const e=dw(...t);return e._methodName="FieldValue.arrayRemove",new qw(e)}static increment(t){const e=fw(t);return e._methodName="FieldValue.increment",new qw(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
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
 */const jw={Firestore:_w,GeoPoint:Fp,Timestamp:Qo,Blob:vw,Transaction:Dw,WriteBatch:Aw,DocumentReference:xw,DocumentSnapshot:Ow,Query:Mw,QueryDocumentSnapshot:Lw,QuerySnapshot:Vw,CollectionReference:Fw,FieldPath:Uw,FieldValue:qw,setLogLevel:Sw,CACHE_SIZE_UNLIMITED:Ip};function Kw(t,e){t.INTERNAL.registerComponent(new B("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)}),"PUBLIC").setServiceProps(Object.assign({},jw)))}
/**
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
 */function Gw(t){Kw(t,((t,e)=>new _w(t,e,new Ew))),t.registerVersion(mw,gw)}Gw(ze);const $w={apiKey:"AIzaSyB77u7rQ02vGL6Il2IetPpUVnY6byyNBak",authDomain:"subscriptions-888d1.firebaseapp.com",projectId:"subscriptions-888d1",storageBucket:"subscriptions-888d1.appspot.com",messagingSenderId:"759401588096",appId:"1:759401588096:web:0e64d767125b3f425f4d65"},zw=ze.initializeApp($w);var Qw=zw.firestore()}}]);
//# sourceMappingURL=28.7b53dd08.js.map