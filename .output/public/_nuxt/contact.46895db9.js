import{M as Qo,o as Cn,a as Dn,I as A,b as De,W as Wo,X as Nn,Y as _n,Z as zs,z as zo,R as Xo,S as Yo}from"./entry.4ba409ed.js";/**
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
 */const $i=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Jo=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,l=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|h>>6,b=h&63;c||(b=64,o||(p=64)),s.push(n[l],n[d],n[p],n[b])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jo(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||h==null||d==null)throw Error();const p=r<<2|a>>4;if(s.push(p),h!==64){const b=a<<4&240|h>>2;if(s.push(b),d!==64){const I=h<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ta=function(e){const t=$i(e);return Zo.encodeByteArray(t,!0)},ji=function(e){return ta(e).replace(/\./g,"")};function ea(){try{return typeof indexedDB=="object"}catch{return!1}}function na(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const sa="FirebaseError";class de extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=sa,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?ia(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new de(i,a,s)}}function ia(e,t){return e.replace(ra,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const ra=/\{\$([^}]+)}/g;class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const oa={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},aa=S.INFO,ca={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},ha=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ca[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=aa,this._logHandler=ha,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const la=(e,t)=>t.some(n=>e instanceof n);let Xs,Ys;function ua(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fa(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ki=new WeakMap,qn=new WeakMap,Gi=new WeakMap,Rn=new WeakMap,hs=new WeakMap;function da(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ut(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ki.set(n,e)}).catch(()=>{}),hs.set(t,e),t}function pa(e){if(qn.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});qn.set(e,t)}let Kn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ga(e){Kn=e(Kn)}function ma(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(kn(this),t,...n);return Gi.set(s,t.sort?t.sort():[t]),ut(s)}:fa().includes(e)?function(...t){return e.apply(kn(this),t),ut(Ki.get(this))}:function(...t){return ut(e.apply(kn(this),t))}}function ya(e){return typeof e=="function"?ma(e):(e instanceof IDBTransaction&&pa(e),la(e,ua())?new Proxy(e,Kn):e)}function ut(e){if(e instanceof IDBRequest)return da(e);if(Rn.has(e))return Rn.get(e);const t=ya(e);return t!==e&&(Rn.set(e,t),hs.set(t,e)),t}const kn=e=>hs.get(e);function va(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=ut(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wa=["get","getKey","getAll","getAllKeys","count"],Ea=["put","add","delete","clear"],xn=new Map;function Js(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xn.get(t))return xn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Ea.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wa.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&c.done]))[0]};return xn.set(t,r),r}ga(e=>({...e,get:(t,n,s)=>Js(t,n)||e.get(t,n,s),has:(t,n)=>!!Js(t,n)||e.has(t,n)}));/**
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
 */class Ta{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ia(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ia(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gn="@firebase/app",Zs="0.9.0";/**
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
 */const bt=new qi("@firebase/app"),ba="@firebase/app-compat",Sa="@firebase/analytics-compat",Aa="@firebase/analytics",Ca="@firebase/app-check-compat",Da="@firebase/app-check",Na="@firebase/auth",_a="@firebase/auth-compat",Ra="@firebase/database",ka="@firebase/database-compat",xa="@firebase/functions",Oa="@firebase/functions-compat",Ma="@firebase/installations",La="@firebase/installations-compat",Pa="@firebase/messaging",Fa="@firebase/messaging-compat",Va="@firebase/performance",Ba="@firebase/performance-compat",Ua="@firebase/remote-config",$a="@firebase/remote-config-compat",ja="@firebase/storage",Ha="@firebase/storage-compat",qa="@firebase/firestore",Ka="@firebase/firestore-compat",Ga="firebase",Qa="9.15.0",Wa={[Gn]:"fire-core",[ba]:"fire-core-compat",[Aa]:"fire-analytics",[Sa]:"fire-analytics-compat",[Da]:"fire-app-check",[Ca]:"fire-app-check-compat",[Na]:"fire-auth",[_a]:"fire-auth-compat",[Ra]:"fire-rtdb",[ka]:"fire-rtdb-compat",[xa]:"fire-fn",[Oa]:"fire-fn-compat",[Ma]:"fire-iid",[La]:"fire-iid-compat",[Pa]:"fire-fcm",[Fa]:"fire-fcm-compat",[Va]:"fire-perf",[Ba]:"fire-perf-compat",[Ua]:"fire-rc",[$a]:"fire-rc-compat",[ja]:"fire-gcs",[Ha]:"fire-gcs-compat",[qa]:"fire-fst",[Ka]:"fire-fst-compat","fire-js":"fire-js",[Ga]:"fire-js-all"};/**
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
 */const za=new Map,ti=new Map;function Xa(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fe(e){const t=e.name;if(ti.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;ti.set(t,e);for(const n of za.values())Xa(n,e);return!0}/**
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
 */const Ya={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ls=new Hi("app","Firebase",Ya);/**
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
 */const Ja=Qa;function Wt(e,t,n){var s;let i=(s=Wa[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}Fe(new Hn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Za="firebase-heartbeat-database",tc=1,te="firebase-heartbeat-store";let On=null;function Qi(){return On||(On=va(Za,tc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(te)}}}).catch(e=>{throw ls.create("idb-open",{originalErrorMessage:e.message})})),On}async function ec(e){try{return(await Qi()).transaction(te).objectStore(te).get(Wi(e))}catch(t){if(t instanceof de)bt.warn(t.message);else{const n=ls.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}async function ei(e,t){try{const s=(await Qi()).transaction(te,"readwrite");return await s.objectStore(te).put(t,Wi(e)),s.done}catch(n){if(n instanceof de)bt.warn(n.message);else{const s=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(s.message)}}}function Wi(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nc=1024,sc=30*24*60*60*1e3;class ic{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ni();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=sc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ni(),{heartbeatsToSend:n,unsentEntries:s}=rc(this._heartbeatsCache.heartbeats),i=ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ni(){return new Date().toISOString().substring(0,10)}function rc(e,t=nc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),si(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),si(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ea()?na().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ec(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function si(e){return ji(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ac(e){Fe(new Hn("platform-logger",t=>new Ta(t),"PRIVATE")),Fe(new Hn("heartbeat",t=>new ic(t),"PRIVATE")),Wt(Gn,Zs,e),Wt(Gn,Zs,"esm2017"),Wt("fire-js","")}ac("");/**
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
 */const cc="FirebaseError";class tn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=cc,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hc.prototype.create)}}class hc{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?lc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,s)}}function lc(e,t){return e.replace(uc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const uc=/\{\$([^}]+)}/g;/**
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
 */function ee(e){return e&&e._delegate?e._delegate:e}class fc{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,us=us||{},y=dc||self;function Ve(){}function en(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function pe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function pc(e){return Object.prototype.hasOwnProperty.call(e,Mn)&&e[Mn]||(e[Mn]=++gc)}var Mn="closure_uid_"+(1e9*Math.random()>>>0),gc=0;function mc(e,t,n){return e.call.apply(e.bind,arguments)}function yc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function K(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=mc:K=yc,K.apply(null,arguments)}function Ne(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function j(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function mt(){this.s=this.s,this.o=this.o}var vc=0;mt.prototype.s=!1;mt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vc!=0)&&pc(this)};mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function fs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ii(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(en(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function G(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var wc=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",Ve,t),y.removeEventListener("test",Ve,t)}catch{}return e}();function Be(e){return/^[\s\xa0]*$/.test(e)}var ri=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ln(e,t){return e<t?-1:e>t?1:0}function nn(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function st(e){return nn().indexOf(e)!=-1}function ds(e){return ds[" "](e),e}ds[" "]=Ve;function Ec(e){var t=bc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Tc=st("Opera"),Mt=st("Trident")||st("MSIE"),Xi=st("Edge"),Qn=Xi||Mt,Yi=st("Gecko")&&!(nn().toLowerCase().indexOf("webkit")!=-1&&!st("Edge"))&&!(st("Trident")||st("MSIE"))&&!st("Edge"),Ic=nn().toLowerCase().indexOf("webkit")!=-1&&!st("Edge");function Ji(){var e=y.document;return e?e.documentMode:void 0}var Ue;t:{var Pn="",Fn=function(){var e=nn();if(Yi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xi)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ic)return/WebKit\/(\S+)/.exec(e);if(Tc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fn&&(Pn=Fn?Fn[1]:""),Mt){var Vn=Ji();if(Vn!=null&&Vn>parseFloat(Pn)){Ue=String(Vn);break t}}Ue=Pn}var bc={};function Sc(){return Ec(function(){let e=0;const t=ri(String(Ue)).split("."),n=ri("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Ln(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ln(i[2].length==0,r[2].length==0)||Ln(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Wn;if(y.document&&Mt){var oi=Ji();Wn=oi||parseInt(Ue,10)||void 0}else Wn=void 0;var Ac=Wn;function ne(e,t){if(G.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yi){t:{try{ds(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Cc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ne.X.h.call(this)}}j(ne,G);var Cc={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ge="closure_listenable_"+(1e6*Math.random()|0),Dc=0;function Nc(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Dc,this.ba=this.ea=!1}function sn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ps(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Zi(e){const t={};for(const n in e)t[n]=e[n];return t}const ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ai.length;r++)n=ai[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function rn(e){this.src=e,this.g={},this.h=0}rn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Xn(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Nc(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function zn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=zi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(sn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var gs="closure_lm_"+(1e6*Math.random()|0),Bn={};function er(e,t,n,s,i){if(s&&s.once)return sr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)er(e,t[r],n,s,i);return null}return n=vs(n),e&&e[ge]?e.N(t,n,pe(s)?!!s.capture:!!s,i):nr(e,t,n,!1,s,i)}function nr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=pe(i)?!!i.capture:!!i,a=ys(e);if(a||(e[gs]=a=new rn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=_c(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)wc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(rr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _c(){function e(n){return t.call(e.src,e.listener,n)}const t=Rc;return e}function sr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)sr(e,t[r],n,s,i);return null}return n=vs(n),e&&e[ge]?e.O(t,n,pe(s)?!!s.capture:!!s,i):nr(e,t,n,!0,s,i)}function ir(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)ir(e,t[r],n,s,i);else s=pe(s)?!!s.capture:!!s,n=vs(n),e&&e[ge]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Xn(r,n,s,i),-1<n&&(sn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xn(t,n,s,i)),(n=-1<e?t[e]:null)&&ms(n))}function ms(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ge])zn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(rr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ys(t))?(zn(n,e),n.h==0&&(n.src=null,t[gs]=null)):sn(e)}}}function rr(e){return e in Bn?Bn[e]:Bn[e]="on"+e}function Rc(e,t){if(e.ba)e=!0;else{t=new ne(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ms(e),e=n.call(s,t)}return e}function ys(e){return e=e[gs],e instanceof rn?e:null}var Un="__closure_events_fn_"+(1e9*Math.random()>>>0);function vs(e){return typeof e=="function"?e:(e[Un]||(e[Un]=function(t){return e.handleEvent(t)}),e[Un])}function V(){mt.call(this),this.i=new rn(this),this.P=this,this.I=null}j(V,mt);V.prototype[ge]=!0;V.prototype.removeEventListener=function(e,t,n,s){ir(this,e,t,n,s)};function $(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new G(t,e);else if(t instanceof G)t.target=t.target||e;else{var i=t;t=new G(s,e),tr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=_e(o,s,!0,t)&&i}if(o=t.g=e,i=_e(o,s,!0,t)&&i,i=_e(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=_e(o,s,!1,t)&&i}V.prototype.M=function(){if(V.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)sn(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function _e(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&zn(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ws=y.JSON.stringify;function kc(){var e=cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xc{constructor(){this.h=this.g=null}add(t,n){const s=or.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var or=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Oc,e=>e.reset());class Oc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mc(e){y.setTimeout(()=>{throw e},0)}function ar(e,t){Yn||Lc(),Jn||(Yn(),Jn=!0),cr.add(e,t)}var Yn;function Lc(){var e=y.Promise.resolve(void 0);Yn=function(){e.then(Pc)}}var Jn=!1,cr=new xc;function Pc(){for(var e;e=kc();){try{e.h.call(e.g)}catch(n){Mc(n)}var t=or;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Jn=!1}function on(e,t){V.call(this),this.h=e||1,this.g=t||y,this.j=K(this.lb,this),this.l=Date.now()}j(on,V);g=on.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$(this,"tick"),this.ca&&(Es(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Es(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}g.M=function(){on.X.M.call(this),Es(this),delete this.g};function Ts(e,t,n){if(typeof e=="function")n&&(e=K(e,n));else if(e&&typeof e.handleEvent=="function")e=K(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function hr(e){e.g=Ts(()=>{e.g=null,e.i&&(e.i=!1,hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Fc extends mt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:hr(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(e){mt.call(this),this.h=e,this.g={}}j(se,mt);var ci=[];function lr(e,t,n,s){Array.isArray(n)||(n&&(ci[0]=n.toString()),n=ci);for(var i=0;i<n.length;i++){var r=er(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function ur(e){ps(e.g,function(t,n){this.g.hasOwnProperty(n)&&ms(t)},e),e.g={}}se.prototype.M=function(){se.X.M.call(this),ur(this)};se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function an(){this.g=!0}an.prototype.Aa=function(){this.g=!1};function Vc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var l=h[0];h=h[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Bc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function kt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$c(e,n)+(s?" "+s:"")})}function Uc(e,t){e.info(function(){return"TIMEOUT: "+t})}an.prototype.info=function(){};function $c(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ws(n)}catch{return t}}var Dt={},hi=null;function cn(){return hi=hi||new V}Dt.Pa="serverreachability";function fr(e){G.call(this,Dt.Pa,e)}j(fr,G);function ie(e){const t=cn();$(t,new fr(t))}Dt.STAT_EVENT="statevent";function dr(e,t){G.call(this,Dt.STAT_EVENT,e),this.stat=t}j(dr,G);function Q(e){const t=cn();$(t,new dr(t,e))}Dt.Qa="timingevent";function pr(e,t){G.call(this,Dt.Qa,e),this.size=t}j(pr,G);function me(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var hn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},gr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Is(){}Is.prototype.h=null;function li(e){return e.h||(e.h=e.i())}function mr(){}var ye={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bs(){G.call(this,"d")}j(bs,G);function Ss(){G.call(this,"c")}j(Ss,G);var Zn;function ln(){}j(ln,Is);ln.prototype.g=function(){return new XMLHttpRequest};ln.prototype.i=function(){return{}};Zn=new ln;function ve(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new se(this),this.O=jc,e=Qn?125:void 0,this.T=new on(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yr}function yr(){this.i=null,this.g="",this.h=!1}var jc=45e3,ts={},$e={};g=ve.prototype;g.setTimeout=function(e){this.O=e};function es(e,t,n){e.K=1,e.v=fn(ht(t)),e.s=n,e.P=!0,vr(e,null)}function vr(e,t){e.F=Date.now(),we(e),e.A=ht(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Cr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new yr,e.g=Qr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Fc(K(e.La,e,e.g),e.N)),lr(e.S,e.g,"readystatechange",e.ib),t=e.H?Zi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ie(),Vc(e.j,e.u,e.A,e.m,e.U,e.s)}g.ib=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.La(e)};g.La=function(e){try{if(e==this.g)t:{const l=ot(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(l!=3||Qn||this.g&&(this.h.h||this.g.fa()||pi(this.g)))){this.I||l!=4||t==7||(t==8||0>=d?ie(3):ie(2)),un(this);var n=this.g.aa();this.Y=n;e:if(wr(this)){var s=pi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vt(this),zt(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Bc(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var h=a;break e}}h=null}if(n=h)kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ns(this,n);else{this.i=!1,this.o=3,Q(12),vt(this),zt(this);break t}}this.P?(Er(this,l,o),Qn&&this.i&&l==3&&(lr(this.S,this.T,"tick",this.hb),this.T.start())):(kt(this.j,this.m,o,null),ns(this,o)),l==4&&vt(this),this.i&&!this.I&&(l==4?Hr(this.l,this):(this.i=!1,we(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),vt(this),zt(this)}}}catch{}finally{}};function wr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Er(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Hc(e,n),i==$e){t==4&&(e.o=4,Q(14),s=!1),kt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ts){e.o=4,Q(15),kt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else kt(e.j,e.m,i,null),ns(e,i);wr(e)&&i!=$e&&i!=ts&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ks(t),t.K=!0,Q(11))):(kt(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),zt(e))}g.hb=function(){if(this.g){var e=ot(this.g),t=this.g.fa();this.C<t.length&&(un(this),Er(this,e,t),this.i&&e!=4&&we(this))}};function Hc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?$e:(n=Number(t.substring(n,s)),isNaN(n)?ts:(s+=1,s+n>t.length?$e:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,vt(this)};function we(e){e.V=Date.now()+e.O,Tr(e,e.O)}function Tr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=me(K(e.gb,e),t)}function un(e){e.B&&(y.clearTimeout(e.B),e.B=null)}g.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Uc(this.j,this.A),this.K!=2&&(ie(),Q(17)),vt(this),this.o=2,zt(this)):Tr(this,this.V-e)};function zt(e){e.l.G==0||e.I||Hr(e.l,e)}function vt(e){un(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Es(e.T),ur(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ns(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ss(n.h,e))){if(!e.J&&ss(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)qe(n),gn(n);else break t;Rs(n),Q(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=me(K(n.cb,n),6e3));if(1>=_r(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else wt(n,11)}else if((e.J||n.g==e)&&qe(n),!Be(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const l=h[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const d=h[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const b=e.g;if(b){const I=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.h;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(As(r,r.h),r.h=null))}if(s.D){const _=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,N(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Gr(s,s.H?s.ka:null,s.V),o.J){Rr(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(un(a),we(a)),s.g=o}else $r(s);0<n.i.length&&mn(n)}else h[0]!="stop"&&h[0]!="close"||wt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?wt(n,7):_s(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}ie(4)}catch{}}function qc(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(en(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Kc(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(en(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ir(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(en(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Kc(e),s=qc(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tt){this.h=t!==void 0?t:e.h,je(this,e.j),this.s=e.s,this.g=e.g,He(this,e.m),this.l=e.l,t=e.i;var n=new re;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ui(this,n),this.o=e.o}else e&&(n=String(e).match(br))?(this.h=!!t,je(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),He(this,n[4]),this.l=Gt(n[5]||"",!0),ui(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new re(null,this.h))}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,fi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Qt(t,fi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Qt(n,n.charAt(0)=="/"?zc:Wc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,Yc)),e.join("")};function ht(e){return new Tt(e)}function je(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function He(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ui(e,t,n){t instanceof re?(e.i=t,Jc(e.i,e.h)):(n||(t=Qt(t,Xc)),e.i=new re(t,e.h))}function N(e,t,n){e.i.set(t,n)}function fn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Qc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var fi=/[#\/\?@]/g,Wc=/[#\?:]/g,zc=/[#\?]/g,Xc=/[#\?@]/g,Yc=/#/g;function re(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function yt(e){e.g||(e.g=new Map,e.h=0,e.i&&Gc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=re.prototype;g.add=function(e,t){yt(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Sr(e,t){yt(e),t=$t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ar(e,t){return yt(e),t=$t(e,t),e.g.has(t)}g.forEach=function(e,t){yt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};g.oa=function(){yt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};g.W=function(e){yt(this);let t=[];if(typeof e=="string")Ar(this,e)&&(t=t.concat(this.g.get($t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return yt(this),this.i=null,e=$t(this,e),Ar(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Cr(e,t,n){Sr(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),fs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jc(e,t){t&&!e.j&&(yt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Sr(this,s),Cr(this,i,n))},e)),e.j=t}var Zc=class{constructor(e,t){this.h=e,this.g=t}};function Dr(e){this.l=e||th,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var th=10;function Nr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function _r(e){return e.h?1:e.g?e.g.size:0}function ss(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function As(e,t){e.g?e.g.add(t):e.h=t}function Rr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Dr.prototype.cancel=function(){if(this.i=kr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function kr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return fs(e.i)}function Cs(){}Cs.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)};Cs.prototype.parse=function(e){return y.JSON.parse(e,void 0)};function eh(){this.g=new Cs}function nh(e,t,n){const s=n||"";try{Ir(e,function(i,r){let o=i;pe(i)&&(o=ws(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function sh(e,t){const n=new an;if(y.Image){const s=new Image;s.onload=Ne(Re,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ne(Re,n,s,"TestLoadImage: error",!1,t),s.onabort=Ne(Re,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ne(Re,n,s,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Re(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ee(e){this.l=e.ac||null,this.j=e.jb||!1}j(Ee,Is);Ee.prototype.g=function(){return new dn(this.l,this.j)};Ee.prototype.i=function(e){return function(){return e}}({});function dn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ds,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(dn,V);var Ds=0;g=dn.prototype;g.open=function(e,t){if(this.readyState!=Ds)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,oe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Te(this)),this.readyState=Ds};g.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,oe(this)),this.g&&(this.readyState=3,oe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function xr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}g.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Te(this):oe(this),this.readyState==3&&xr(this)}};g.Va=function(e){this.g&&(this.response=this.responseText=e,Te(this))};g.Ua=function(e){this.g&&(this.response=e,Te(this))};g.ga=function(){this.g&&Te(this)};function Te(e){e.readyState=4,e.l=null,e.j=null,e.A=null,oe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function oe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ih=y.JSON.parse;function x(e){V.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Or,this.K=this.L=!1}j(x,V);var Or="",rh=/^https?$/i,oh=["POST","PUT"];g=x.prototype;g.Ka=function(e){this.L=e};g.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zn.g(),this.C=this.u?li(this.u):li(Zn),this.g.onreadystatechange=K(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){di(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=zi(oh,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pr(this),0<this.B&&((this.K=ah(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.qa,this)):this.A=Ts(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){di(this,r)}};function ah(e){return Mt&&Sc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.qa=function(){typeof us<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$(this,"timeout"),this.abort(8))};function di(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mr(e),pn(e)}function Mr(e){e.D||(e.D=!0,$(e,"complete"),$(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,$(this,"complete"),$(this,"abort"),pn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pn(this,!0)),x.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?Lr(this):this.fb())};g.fb=function(){Lr(this)};function Lr(e){if(e.h&&typeof us<"u"&&(!e.C[1]||ot(e)!=4||e.aa()!=2)){if(e.v&&ot(e)==4)Ts(e.Ha,0,e);else if($(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(br)[1]||null;if(!i&&y.self&&y.self.location){var r=y.self.location.protocol;i=r.substr(0,r.length-1)}s=!rh.test(i?i.toLowerCase():"")}n=s}if(n)$(e,"complete"),$(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Mr(e)}}finally{pn(e)}}}}function pn(e,t){if(e.g){Pr(e);const n=e.g,s=e.C[0]?Ve:null;e.g=null,e.C=null,t||$(e,"ready");try{n.onreadystatechange=s}catch{}}}function Pr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.aa=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ih(t)}};function pi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Or:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fr(e){let t="";return ps(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ns(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Fr(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Kt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vr(e){this.Ca=0,this.i=[],this.j=new an,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kt("baseRetryDelayMs",5e3,e),this.bb=Kt("retryDelaySeedMs",1e4,e),this.$a=Kt("forwardChannelMaxRetries",2,e),this.ta=Kt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Dr(e&&e.concurrentRequestLimit),this.Fa=new eh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=Vr.prototype;g.ma=8;g.G=1;function _s(e){if(Br(e),e.G==3){var t=e.U++,n=ht(e.F);N(n,"SID",e.I),N(n,"RID",t),N(n,"TYPE","terminate"),Ie(e,n),t=new ve(e,e.j,t,void 0),t.K=2,t.v=fn(ht(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=Qr(t.l,null),t.g.da(t.v)),t.F=Date.now(),we(t)}Kr(e)}function gn(e){e.g&&(ks(e),e.g.cancel(),e.g=null)}function Br(e){gn(e),e.u&&(y.clearTimeout(e.u),e.u=null),qe(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function mn(e){Nr(e.h)||e.m||(e.m=!0,ar(e.Ja,e),e.C=0)}function ch(e,t){return _r(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=me(K(e.Ja,e,t),qr(e,e.C)),e.C++,!0)}g.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ve(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Zi(r),tr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ur(this,i,t),n=ht(this.F),N(n,"RID",e),N(n,"CVER",22),this.D&&N(n,"X-HTTP-Session-Id",this.D),Ie(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Fr(r)))+"&"+t:this.o&&Ns(n,this.o,r)),As(this.h,i),this.Ya&&N(n,"TYPE","init"),this.O?(N(n,"$req",t),N(n,"SID","null"),i.Z=!0,es(i,n,null)):es(i,n,t),this.G=2}}else this.G==3&&(e?gi(this,e):this.i.length==0||Nr(this.h)||gi(this))};function gi(e,t){var n;t?n=t.m:n=e.U++;const s=ht(e.F);N(s,"SID",e.I),N(s,"RID",n),N(s,"AID",e.T),Ie(e,s),e.o&&e.s&&Ns(s,e.o,e.s),n=new ve(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ur(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),As(e.h,n),es(n,s,t)}function Ie(e,t){e.ia&&ps(e.ia,function(n,s){N(t,s,n)}),e.l&&Ir({},function(n,s){N(t,s,n)})}function Ur(e,t,n){n=Math.min(e.i.length,n);var s=e.l?K(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const l=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{nh(l,o,"req"+h+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function $r(e){e.g||e.u||(e.Z=1,ar(e.Ia,e),e.A=0)}function Rs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=me(K(e.Ia,e),qr(e,e.A)),e.A++,!0)}g.Ia=function(){if(this.u=null,jr(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=me(K(this.eb,this),e)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Q(10),gn(this),jr(this))};function ks(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function jr(e){e.g=new ve(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=ht(e.sa);N(t,"RID","rpc"),N(t,"SID",e.I),N(t,"CI",e.L?"0":"1"),N(t,"AID",e.T),N(t,"TYPE","xmlhttp"),Ie(e,t),e.o&&e.s&&Ns(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=fn(ht(t)),n.s=null,n.P=!0,vr(n,e)}g.cb=function(){this.v!=null&&(this.v=null,gn(this),Rs(this),Q(19))};function qe(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function Hr(e,t){var n=null;if(e.g==t){qe(e),ks(e),e.g=null;var s=2}else if(ss(e.h,t))n=t.D,Rr(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=cn(),$(s,new pr(s,n)),mn(e)}else $r(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&ch(e,t)||s==2&&Rs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:wt(e,5);break;case 4:wt(e,10);break;case 3:wt(e,6);break;default:wt(e,2)}}}function qr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function wt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=K(e.kb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||je(n,"https"),fn(n)),sh(n.toString(),s)}else Q(2);e.G=0,e.l&&e.l.va(t),Kr(e),Br(e)}g.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function Kr(e){if(e.G=0,e.la=[],e.l){const t=kr(e.h);(t.length!=0||e.i.length!=0)&&(ii(e.la,t),ii(e.la,e.i),e.h.i.length=0,fs(e.i),e.i.length=0),e.l.ua()}}function Gr(e,t,n){var s=n instanceof Tt?ht(n):new Tt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),He(s,s.m);else{var i=y.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Tt(null,void 0);s&&je(r,s),t&&(r.g=t),i&&He(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&N(s,n,t),N(s,"VER",e.ma),Ie(e,s),s}function Qr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new x(new Ee({jb:!0})):new x(e.ra),t.Ka(e.H),t}function Wr(){}g=Wr.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function Ke(){if(Mt&&!(10<=Number(Ac)))throw Error("Environmental error: no available transport.")}Ke.prototype.g=function(e,t){return new J(e,t)};function J(e,t){V.call(this),this.g=new Vr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new jt(this)}j(J,V);J.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Q(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Gr(e,null,e.V),mn(e)};J.prototype.close=function(){_s(this.g)};J.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ws(e),e=n);t.i.push(new Zc(t.ab++,e)),t.G==3&&mn(t)};J.prototype.M=function(){this.g.l=null,delete this.j,_s(this.g),delete this.g,J.X.M.call(this)};function zr(e){bs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(zr,bs);function Xr(){Ss.call(this),this.status=1}j(Xr,Ss);function jt(e){this.g=e}j(jt,Wr);jt.prototype.xa=function(){$(this.g,"a")};jt.prototype.wa=function(e){$(this.g,new zr(e))};jt.prototype.va=function(e){$(this.g,new Xr)};jt.prototype.ua=function(){$(this.g,"b")};Ke.prototype.createWebChannel=Ke.prototype.g;J.prototype.send=J.prototype.u;J.prototype.open=J.prototype.m;J.prototype.close=J.prototype.close;hn.NO_ERROR=0;hn.TIMEOUT=8;hn.HTTP_ERROR=6;gr.COMPLETE="complete";mr.EventType=ye;ye.OPEN="a";ye.CLOSE="b";ye.ERROR="c";ye.MESSAGE="d";V.prototype.listen=V.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.Oa;x.prototype.getLastErrorCode=x.prototype.Ea;x.prototype.getStatus=x.prototype.aa;x.prototype.getResponseJson=x.prototype.Sa;x.prototype.getResponseText=x.prototype.fa;x.prototype.send=x.prototype.da;x.prototype.setWithCredentials=x.prototype.Ka;var hh=function(){return new Ke},lh=function(){return cn()},$n=hn,uh=gr,fh=Dt,mi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},dh=Ee,ke=mr,ph=x;const yi="@firebase/firestore";/**
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
 */class z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let Ht="9.15.0";/**
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
 */const St=new qi("@firebase/firestore");function vi(){return St.logLevel}function m(e,...t){if(St.logLevel<=S.DEBUG){const n=t.map(xs);St.debug(`Firestore (${Ht}): ${e}`,...n)}}function At(e,...t){if(St.logLevel<=S.ERROR){const n=t.map(xs);St.error(`Firestore (${Ht}): ${e}`,...n)}}function wi(e,...t){if(St.logLevel<=S.WARN){const n=t.map(xs);St.warn(`Firestore (${Ht}): ${e}`,...n)}}function xs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function E(e="Unexpected state"){const t=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+e;throw At(t),new Error(t)}function M(e,t){e||E()}function D(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends tn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class It{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class gh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class yh{constructor(t){this.t=t,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new It;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new It,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new It)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new gh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new z(t)}}class vh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(M(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new vh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Th{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.A=n.token,new Eh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ih(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ih(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function C(e,t){return e<t?-1:e>t?1:0}function Lt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class F{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new F(0,0))}static max(){return new R(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ae{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ae.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ae?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends ae{construct(t,n,s){return new k(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new k(n)}static emptyPath(){return new k([])}}const bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends ae{construct(t,n,s){return new q(t,n,s)}static isValidIdentifier(t){return bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(n)}static emptyPath(){return new q([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(k.fromString(t))}static fromName(t){return new w(k.fromString(t).popFirst(5))}static empty(){return new w(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new k(t.slice()))}}function Sh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=R.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new dt(i,w.empty(),t)}function Ah(e){return new dt(e.readTime,e.key,-1)}class dt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new dt(R.min(),w.empty(),-1)}static max(){return new dt(R.max(),w.empty(),-1)}}function Ch(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
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
 */const Dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Jr(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Dh)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class u{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new u((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof u?n:u.resolve(n)}catch(n){return u.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):u.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):u.reject(n)}static resolve(t){return new u((n,s)=>{n(t)})}static reject(t){return new u((n,s)=>{s(t)})}static waitFor(t){return new u((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=u.resolve(!1);for(const s of t)n=n.next(i=>i?u.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new u((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const h=c;n(t[h]).next(l=>{o[h]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new u((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function yn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Zr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Zr.at=-1;/**
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
 */class _h{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ge{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ge&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Ei(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function be(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function to(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function Os(e){return e==null}function Qe(e){return e===0&&1/e==-1/0}function Rh(e){return typeof e=="number"&&Number.isInteger(e)&&!Qe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new lt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new lt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(e){if(M(!!e),typeof e=="string"){let t=0;const n=kh.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:B(e.seconds),nanos:B(e.nanos)}}function B(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ce(e){return typeof e=="string"?lt.fromBase64String(e):lt.fromUint8Array(e)}/**
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
 */function xh(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function We(e){const t=Ct(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
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
 */const xe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xh(e)?4:Oh(e)?9007199254740991:10:E()}function rt(e,t){if(e===t)return!0;const n=Pt(e);if(n!==Pt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return We(e).isEqual(We(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ct(s.timestampValue),o=Ct(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ce(s.bytesValue).isEqual(ce(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return B(s.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return B(s.integerValue)===B(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=B(s.doubleValue),o=B(i.doubleValue);return r===o?Qe(r)===Qe(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Lt(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ei(r)!==Ei(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return E()}}function he(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function Ft(e,t){if(e===t)return 0;const n=Pt(e),s=Pt(t);if(n!==s)return C(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=B(i.integerValue||i.doubleValue),a=B(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ti(e.timestampValue,t.timestampValue);case 4:return Ti(We(e),We(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ce(i),a=ce(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=C(o[c],a[c]);if(h!==0)return h}return C(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=C(B(i.latitude),B(r.latitude));return o!==0?o:C(B(i.longitude),B(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Ft(o[c],a[c]);if(h)return h}return C(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===xe.mapValue&&r===xe.mapValue)return 0;if(i===xe.mapValue)return 1;if(r===xe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let l=0;l<a.length&&l<h.length;++l){const d=C(a[l],h[l]);if(d!==0)return d;const p=Ft(o[a[l]],c[h[l]]);if(p!==0)return p}return C(a.length,h.length)}(e.mapValue,t.mapValue);default:throw E()}}function Ti(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=Ct(e),s=Ct(t),i=C(n.seconds,s.seconds);return i!==0?i:C(n.nanos,s.nanos)}function Vt(e){return is(e)}function is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Ct(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ce(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=is(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${is(s.fields[a])}`;return r+"}"}(e.mapValue):E();var t,n}function rs(e){return!!e&&"integerValue"in e}function Ms(e){return!!e&&"arrayValue"in e}function Le(e){return!!e&&"mapValue"in e}function Xt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return be(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Xt(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Oh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ze{constructor(t,n){this.position=t,this.inclusive=n}}function Ii(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Ft(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function bi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class eo{}class P extends eo{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Ph(t,n,s):n==="array-contains"?new Bh(t,s):n==="in"?new Uh(t,s):n==="not-in"?new $h(t,s):n==="array-contains-any"?new jh(t,s):new P(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Fh(t,s):new Vh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ft(n,this.value)):n!==null&&Pt(this.value)===Pt(n)&&this.matchesComparison(Ft(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pt extends eo{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new pt(t,n)}matches(t){return no(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function no(e){return e.op==="and"}function Mh(e){return Lh(e)&&no(e)}function Lh(e){for(const t of e.filters)if(t instanceof pt)return!1;return!0}function so(e){if(e instanceof P)return e.field.canonicalString()+e.op.toString()+Vt(e.value);{const t=e.filters.map(n=>so(n)).join(",");return`${e.op}(${t})`}}function io(e,t){return e instanceof P?function(n,s){return s instanceof P&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(e,t):e instanceof pt?function(n,s){return s instanceof pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&io(r,s.filters[o]),!0):!1}(e,t):void E()}function ro(e){return e instanceof P?function(t){return`${t.field.canonicalString()} ${t.op} ${Vt(t.value)}`}(e):e instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(ro).join(" ,")+"}"}(e):"Filter"}class Ph extends P{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Fh extends P{constructor(t,n){super(t,"in",n),this.keys=oo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Vh extends P{constructor(t,n){super(t,"not-in",n),this.keys=oo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function oo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Bh extends P{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ms(n)&&he(n.arrayValue,this.value)}}class Uh extends P{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&he(this.value.arrayValue,n)}}class $h extends P{constructor(t,n){super(t,"not-in",n)}matches(t){if(he(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!he(this.value.arrayValue,n)}}class jh extends P{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ms(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>he(this.value.arrayValue,s))}}/**
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
 */class Yt{constructor(t,n="asc"){this.field=t,this.dir=n}}function Hh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class X{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new X(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Oe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Oe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Oe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Oe(this.root,t,this.comparator,!0)}}class Oe{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:U.RED,this.left=i!=null?i:U.EMPTY,this.right=r!=null?r:U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Si(this.data.getIterator())}getIteratorFrom(t){return new Si(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class Si{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(t){this.fields=t,t.sort(q.comparator)}static empty(){return new it([])}unionWith(t){let n=new W(q.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Lt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Le(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xt(n)}setAll(t){let n=q.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Xt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Le(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Le(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){be(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new et(Xt(this.value))}}function ao(e){const t=[];return be(e.fields,(n,s)=>{const i=new q([n]);if(Le(s)){const r=ao(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new it(t)}/**
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
 */class tt{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,R.min(),R.min(),R.min(),et.empty(),0)}static newFoundDocument(t,n,s,i){return new tt(t,1,n,R.min(),s,i,0)}static newNoDocument(t,n){return new tt(t,2,n,R.min(),R.min(),et.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,R.min(),R.min(),et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Ai(e,t=null,n=[],s=[],i=null,r=null,o=null){return new qh(e,t,n,s,i,r,o)}function Ls(e){const t=D(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>so(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Os(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Vt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Vt(s)).join(",")),t.ft=n}return t.ft}function Ps(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!io(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!bi(e.startAt,t.startAt)&&bi(e.endAt,t.endAt)}/**
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
 */class vn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Kh(e,t,n,s,i,r,o,a){return new vn(e,t,n,s,i,r,o,a)}function Gh(e){return new vn(e)}function Ci(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Qh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Wh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function zh(e){return e.collectionGroup!==null}function xt(e){const t=D(e);if(t.dt===null){t.dt=[];const n=Wh(t),s=Qh(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Yt(n)),t.dt.push(new Yt(q.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Yt(q.keyField(),r))}}}return t.dt}function Bt(e){const t=D(e);if(!t._t)if(t.limitType==="F")t._t=Ai(t.path,t.collectionGroup,xt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of xt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Yt(r.field,o))}const s=t.endAt?new ze(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ze(t.startAt.position,t.startAt.inclusive):null;t._t=Ai(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function os(e,t,n){return new vn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function co(e,t){return Ps(Bt(e),Bt(t))&&e.limitType===t.limitType}function ho(e){return`${Ls(Bt(e))}|lt:${e.limitType}`}function Di(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ro(s)).join(", ")}]`),Os(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Vt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Vt(s)).join(",")),`Target(${n})`}(Bt(e))}; limitType=${e.limitType})`}function lo(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of xt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ii(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,xt(n),s)||n.endAt&&!function(i,r,o){const a=Ii(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,xt(n),s))}(e,t)}function Xh(e){return(t,n)=>{let s=!1;for(const i of xt(e)){const r=Yh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Yh(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ft(a,c):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
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
 */function uo(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qe(t)?"-0":t}}function fo(e){return{integerValue:""+e}}function Jh(e,t){return Rh(t)?fo(t):uo(e,t)}/**
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
 */class wn{constructor(){this._=void 0}}function Zh(e,t,n){return e instanceof Xe?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof le?go(e,t):e instanceof ue?mo(e,t):function(s,i){const r=po(s,i),o=Ni(r)+Ni(s.gt);return rs(r)&&rs(s.gt)?fo(o):uo(s.yt,o)}(e,t)}function tl(e,t,n){return e instanceof le?go(e,t):e instanceof ue?mo(e,t):n}function po(e,t){return e instanceof Ye?rs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Xe extends wn{}class le extends wn{constructor(t){super(),this.elements=t}}function go(e,t){const n=yo(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class ue extends wn{constructor(t){super(),this.elements=t}}function mo(e,t){let n=yo(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class Ye extends wn{constructor(t,n){super(),this.yt=t,this.gt=n}}function Ni(e){return B(e.integerValue||e.doubleValue)}function yo(e){return Ms(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function el(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof le&&s instanceof le||n instanceof ue&&s instanceof ue?Lt(n.elements,s.elements,rt):n instanceof Ye&&s instanceof Ye?rt(n.gt,s.gt):n instanceof Xe&&s instanceof Xe}(e.transform,t.transform)}class nl{constructor(t,n){this.version=t,this.transformResults=n}}class at{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pe(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class En{}function vo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Eo(e.key,at.none()):new Se(e.key,e.data,at.none());{const n=e.data,s=et.empty();let i=new W(q.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Nt(e.key,s,new it(i.toArray()),at.none())}}function sl(e,t,n){e instanceof Se?function(s,i,r){const o=s.value.clone(),a=Ri(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Nt?function(s,i,r){if(!Pe(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ri(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(wo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Jt(e,t,n,s){return e instanceof Se?function(i,r,o,a){if(!Pe(i.precondition,r))return o;const c=i.value.clone(),h=ki(i.fieldTransforms,a,r);return c.setAll(h),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Nt?function(i,r,o,a){if(!Pe(i.precondition,r))return o;const c=ki(i.fieldTransforms,a,r),h=r.data;return h.setAll(wo(i)),h.setAll(c),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return Pe(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function il(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=po(s.transform,i||null);r!=null&&(n===null&&(n=et.empty()),n.set(s.field,r))}return n||null}function _i(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Lt(n,s,(i,r)=>el(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Se extends En{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends En{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ri(e,t,n){const s=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,tl(o,a,n[i]))}return s}function ki(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Zh(r,o,t))}return s}class Eo extends En{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rl extends En{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var O,T;function ol(e){switch(e){default:return E();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function al(e){if(e===void 0)return At("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return E()}}(T=O||(O={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){be(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return to(this.inner)}size(){return this.innerSize}}/**
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
 */const cl=new X(w.comparator);function Je(){return cl}const To=new X(w.comparator);function Me(...e){let t=To;for(const n of e)t=t.insert(n.key,n);return t}function Io(e){let t=To;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Et(){return Zt()}function bo(){return Zt()}function Zt(){return new qt(e=>e.toString(),(e,t)=>e.isEqual(t))}const hl=new X(w.comparator),ll=new W(w.comparator);function H(...e){let t=ll;for(const n of e)t=t.add(n);return t}const ul=new W(C);function fl(){return ul}class dl{constructor(t,n){this.databaseId=t,this.wt=n}}function as(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pl(e,t){return e.wt?t.toBase64():t.toUint8Array()}function gl(e,t){return as(e,t.toTimestamp())}function Ot(e){return M(!!e),R.fromTimestamp(function(t){const n=Ct(t);return new F(n.seconds,n.nanos)}(e))}function So(e,t){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ml(e){const t=k.fromString(e);return M(Sl(t)),t}function cs(e,t){return So(e.databaseId,t.path)}function yl(e){const t=ml(e);return t.length===4?k.emptyPath():wl(t)}function vl(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wl(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function xi(e,t,n){return{name:cs(e,t),fields:n.value.mapValue.fields}}function El(e,t){let n;if(t instanceof Se)n={update:xi(e,t.key,t.value)};else if(t instanceof Eo)n={delete:cs(e,t.key)};else if(t instanceof Nt)n={update:xi(e,t.key,t.data),updateMask:bl(t.fieldMask)};else{if(!(t instanceof rl))return E();n={verify:cs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Xe)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof le)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ue)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ye)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(e,t.precondition)),n}function Tl(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Ot(s.updateTime):Ot(i);return r.isEqual(R.min())&&(r=Ot(i)),new nl(r,s.transformResults||[])}(n,t))):[]}function Il(e){let t=yl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const d=Ao(l);return d instanceof pt&&Mh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new Yt(Rt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,Os(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,p=l.values||[];return new ze(p,d)}(n.startAt));let h=null;return n.endAt&&(h=function(l){const d=!l.before,p=l.values||[];return new ze(p,d)}(n.endAt)),Kh(t,i,o,r,a,"F",c,h)}function Ao(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Rt(t.unaryFilter.field);return P.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Rt(t.unaryFilter.field);return P.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rt(t.unaryFilter.field);return P.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rt(t.unaryFilter.field);return P.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return P.create(Rt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(n=>Ao(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function Rt(e){return q.fromServerFormat(e.fieldPath)}function bl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Sl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Al{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&sl(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Jt(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Jt(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=bo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=vo(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),H())}isEqual(t){return this.batchId===t.batchId&&Lt(this.mutations,t.mutations,(n,s)=>_i(n,s))&&Lt(this.baseMutations,t.baseMutations,(n,s)=>_i(n,s))}}class Fs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){M(t.mutations.length===s.length);let i=hl;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fs(t,n,s,i)}}/**
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
 */class Cl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Dl{constructor(t){this.ie=t}}function Nl(e){const t=Il({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?os(t,t.limit,"L"):t}/**
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
 */class _l{constructor(){this.Je=new Rl}addToCollectionParentIndex(t,n){return this.Je.add(n),u.resolve()}getCollectionParents(t,n){return u.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return u.resolve()}deleteFieldIndex(t,n){return u.resolve()}getDocumentsMatchingTarget(t,n){return u.resolve(null)}getIndexType(t,n){return u.resolve(0)}getFieldIndexes(t,n){return u.resolve([])}getNextCollectionGroupToUpdate(t){return u.resolve(null)}getMinOffset(t,n){return u.resolve(dt.min())}getMinOffsetFromCollectionGroup(t,n){return u.resolve(dt.min())}updateCollectionGroup(t,n,s){return u.resolve()}updateIndexEntries(t,n){return u.resolve()}}class Rl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new W(k.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new W(k.comparator)).toArray()}}/**
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
 */class Ut{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ut(0)}static vn(){return new Ut(-1)}}/**
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
 */class kl{constructor(){this.changes=new qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?u.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class xl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Ol{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&Jt(s.mutation,i,it.empty(),F.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,H()).next(()=>s))}getLocalViewOfDocuments(t,n,s=H()){const i=Et();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Me();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Et();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,H()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Je();const o=Zt(),a=Zt();return n.forEach((c,h)=>{const l=s.get(h.key);i.has(h.key)&&(l===void 0||l.mutation instanceof Nt)?r=r.insert(h.key,h):l!==void 0&&(o.set(h.key,l.mutation.getFieldMask()),Jt(l.mutation,h,l.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((h,l)=>o.set(h,l)),n.forEach((h,l)=>{var d;return a.set(h,new xl(l,(d=o.get(h))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Zt();let i=new X((o,a)=>o-a),r=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let l=s.get(c)||it.empty();l=a.applyToLocalView(h,l),s.set(c,l);const d=(i.get(a.batchId)||H()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,l=c.value,d=bo();l.forEach(p=>{if(!r.has(p)){const b=vo(n.get(p),s.get(p));b!==null&&d.set(p,b),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,d))}return u.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):zh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):u.resolve(Et());let a=-1,c=r;return o.next(h=>u.forEach(h,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(l)?u.resolve():this.remoteDocumentCache.getEntry(t,l).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,c,h,H())).next(l=>({batchId:a,changes:Io(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=Me();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Me();return this.indexManager.getCollectionParents(t,i).next(o=>u.forEach(o,a=>{const c=function(h,l){return new vn(l,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(h=>{h.forEach((l,d)=>{r=r.insert(l,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const h=c.getKey();i.get(h)===null&&(i=i.insert(h,tt.newInvalidDocument(h)))});let o=Me();return i.forEach((a,c)=>{const h=r.get(a);h!==void 0&&Jt(h.mutation,c,it.empty(),F.now()),lo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Ml{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return u.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ot(s.createTime)}),u.resolve()}getNamedQuery(t,n){return u.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Nl(s.bundledQuery),readTime:Ot(s.readTime)}}(n)),u.resolve()}}/**
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
 */class Ll{constructor(){this.overlays=new X(w.comparator),this.es=new Map}getOverlay(t,n){return u.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Et();return u.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),u.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),u.resolve()}getOverlaysForCollection(t,n,s){const i=Et(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return u.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new X((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let l=r.get(h.largestBatchId);l===null&&(l=Et(),r=r.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=Et(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=i)););return u.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Cl(n,s));let r=this.es.get(n);r===void 0&&(r=H(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Vs{constructor(){this.ns=new W(L.ss),this.rs=new W(L.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new L(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new L(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new w(new k([])),s=new L(n,t),i=new L(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new w(new k([])),s=new L(n,t),i=new L(n,t+1);let r=H();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new L(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class L{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return w.comparator(t.key,n.key)||C(t._s,n._s)}static os(t,n){return C(t._s,n._s)||w.comparator(t.key,n.key)}}/**
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
 */class Pl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new W(L.ss)}checkEmpty(t){return u.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Al(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new L(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return u.resolve(o)}lookupMutationBatch(t,n){return u.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return u.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return u.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return u.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new L(n,0),i=new L(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),u.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new W(C);return n.forEach(i=>{const r=new L(i,0),o=new L(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),u.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new L(new w(r),0);let a=new W(C);return this.gs.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c._s)),!0)},o),u.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return u.forEach(n.mutations,i=>{const r=new L(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new L(n,0),i=this.gs.firstAfterOrEqual(s);return u.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,u.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Fl{constructor(t){this.Es=t,this.docs=new X(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return u.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=Je();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),u.resolve(s)}getAllFromCollection(t,n,s){let i=Je();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ch(Ah(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return u.resolve(i)}getAllFromCollectionGroup(t,n,s,i){E()}As(t,n){return u.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Vl(this)}getSize(t){return u.resolve(this.size)}}class Vl extends kl{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),u.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Bl{constructor(t){this.persistence=t,this.Rs=new qt(n=>Ls(n),Ps),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vs,this.targetCount=0,this.vs=Ut.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),u.resolve()}getLastRemoteSnapshotVersion(t){return u.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return u.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),u.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),u.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Ut(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,u.resolve()}updateTargetData(t,n){return this.Dn(n),u.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,u.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),u.waitFor(r).next(()=>i)}getTargetCount(t){return u.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return u.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),u.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),u.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),u.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return u.resolve(s)}containsKey(t,n){return u.resolve(this.Ps.containsKey(n))}}/**
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
 */class Ul{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Zr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Bl(this),this.indexManager=new _l,this.remoteDocumentCache=function(s){return new Fl(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Dl(n),this.Ns=new Ml(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ll,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Pl(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new $l(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return u.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class $l extends Nh{constructor(t){super(),this.currentSequenceNumber=t}}class Bs{constructor(t){this.persistence=t,this.Fs=new Vs,this.$s=null}static Bs(t){return new Bs(t)}get Ls(){if(this.$s)return this.$s;throw E()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),u.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),u.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),u.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return u.forEach(this.Ls,s=>{const i=w.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,R.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return u.or([()=>u.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class Us{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=H(),i=H();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Us(t,n.fromCache,s,i)}}/**
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
 */class jl{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(Ci(n))return u.resolve(null);let s=Bt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=os(n,null,"F"),s=Bt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=H(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const h=this.Fi(n,a);return this.$i(n,h,o,c.readTime)?this.ki(t,os(n,null,"F")):this.Bi(t,h,n,c)}))})))}Oi(t,n,s,i){return Ci(n)||i.isEqual(R.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(vi()<=S.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Di(n)),this.Bi(t,o,n,Sh(i,-1)))})}Fi(t,n){let s=new W(Xh(t));return n.forEach((i,r)=>{lo(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return vi()<=S.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Di(n)),this.Ni.getDocumentsMatchingQuery(t,n,dt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Hl{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new X(C),this.Ui=new qt(r=>Ls(r),Ps),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ol(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function ql(e,t,n,s){return new Hl(e,t,n,s)}async function Co(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=H();for(const h of i){o.push(h.batchId);for(const l of h.mutations)c=c.add(l.key)}for(const h of r){a.push(h.batchId);for(const l of h.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(h=>({ji:h,removedBatchIds:o,addedBatchIds:a}))})})}function Kl(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const l=c.batch,d=l.keys();let p=u.resolve();return d.forEach(b=>{p=p.next(()=>h.getEntry(a,b)).next(I=>{const _=c.docVersions.get(b);M(_!==null),I.version.compareTo(_)<0&&(l.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=H();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Gl(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Ql(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class Oi{constructor(){this.activeTargetIds=fl()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wl{constructor(){this.Lr=new Oi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Oi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class zl{Ur(t){}shutdown(){}}/**
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
 */class Mi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Yl{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class Jl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw wi("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ht,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=Xl[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new ph;a.setWithCredentials(!0),a.listenOnce(uh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $n.NO_ERROR:const h=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(h)),r(h);break;case $n.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case $n.HTTP_ERROR:const l=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const b=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(_)>=0?_:f.UNKNOWN}(p.status);o(new v(b,p.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=hh(),o=lh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new dh({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let l=!1,d=!1;const p=new Yl({Hr:I=>{d?m("Connection","Not sending because WebChannel is closed:",I):(l||(m("Connection","Opening WebChannel transport."),h.open(),l=!0),m("Connection","WebChannel sending:",I),h.send(I))},Jr:()=>h.close()}),b=(I,_,Y)=>{I.listen(_,nt=>{try{Y(nt)}catch(Z){setTimeout(()=>{throw Z},0)}})};return b(h,ke.EventType.OPEN,()=>{d||m("Connection","WebChannel transport opened.")}),b(h,ke.EventType.CLOSE,()=>{d||(d=!0,m("Connection","WebChannel transport closed"),p.io())}),b(h,ke.EventType.ERROR,I=>{d||(d=!0,wi("Connection","WebChannel transport errored:",I),p.io(new v(f.UNAVAILABLE,"The operation could not be completed")))}),b(h,ke.EventType.MESSAGE,I=>{var _;if(!d){const Y=I.data[0];M(!!Y);const nt=Y,Z=nt.error||((_=nt[0])===null||_===void 0?void 0:_.error);if(Z){m("Connection","WebChannel received error:",Z);const Gs=Z.status;let An=function(Go){const Ws=O[Go];if(Ws!==void 0)return al(Ws)}(Gs),Qs=Z.message;An===void 0&&(An=f.INTERNAL,Qs="Unknown error status: "+Gs+" with message "+Z.message),d=!0,p.io(new v(An,Qs)),h.close()}else m("Connection","WebChannel received:",Y),p.ro(Y)}}),b(o,fh.STAT_EVENT,I=>{I.stat===mi.PROXY?m("Connection","Detected buffering proxy"):I.stat===mi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function jn(){return typeof document<"u"?document:null}/**
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
 */function Tn(e){return new dl(e,!0)}class Do{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Zl{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Do(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tu extends Zl{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Tl(t.writeResults,t.commitTime),s=Ot(t.commitTime);return this.listener.Zo(s,n)}return M(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=vl(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>El(this.yt,s))};this.Bo(n)}}/**
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
 */class eu extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class nu{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(At(n),this.ou=!1):m("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class su{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ce(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c._u.add(4),await Ae(c),c.gu.set("Unknown"),c._u.delete(4),await In(c)}(this))})}),this.gu=new nu(s,i)}}async function In(e){if(Ce(e))for(const t of e.wu)await t(!0)}async function Ae(e){for(const t of e.wu)await t(!1)}function Ce(e){return D(e)._u.size===0}async function No(e,t,n){if(!yn(t))throw t;e._u.add(1),await Ae(e),e.gu.set("Offline"),n||(n=()=>Gl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await In(e)})}function _o(e,t){return t().catch(n=>No(e,n,t))}async function bn(e){const t=D(e),n=gt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;iu(t);)try{const i=await Ql(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,ru(t,i)}catch(i){await No(t,i)}Ro(t)&&ko(t)}function iu(e){return Ce(e)&&e.fu.length<10}function ru(e,t){e.fu.push(t);const n=gt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ro(e){return Ce(e)&&!gt(e).No()&&e.fu.length>0}function ko(e){gt(e).start()}async function ou(e){gt(e).eu()}async function au(e){const t=gt(e);for(const n of e.fu)t.Xo(n.mutations)}async function cu(e,t,n){const s=e.fu.shift(),i=Fs.from(s,t,n);await _o(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await bn(e)}async function hu(e,t){t&&gt(e).Yo&&await async function(n,s){if(i=s.code,ol(i)&&i!==f.ABORTED){const r=n.fu.shift();gt(n).Mo(),await _o(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await bn(n)}var i}(e,t),Ro(e)&&ko(e)}async function Li(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=Ce(n);n._u.add(3),await Ae(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await In(n)}async function lu(e,t){const n=D(e);t?(n._u.delete(2),await In(n)):t||(n._u.add(2),await Ae(n),n.gu.set("Unknown"))}function gt(e){return e.Iu||(e.Iu=function(t,n,s){const i=D(t);return i.su(),new tu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:ou.bind(null,e),Zr:hu.bind(null,e),tu:au.bind(null,e),Zo:cu.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await bn(e)):(await e.Iu.stop(),e.fu.length>0&&(m("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class $s{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new $s(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xo(e,t){if(At("AsyncQueue",`${t}: ${e}`),yn(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}class uu{constructor(){this.queries=new qt(t=>ho(t),co),this.onlineState="Unknown",this.Ru=new Set}}function fu(e){e.Ru.forEach(t=>{t.next()})}class du{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new qt(a=>ho(a),co),this.rc=new Map,this.oc=new Set,this.uc=new X(w.comparator),this.cc=new Map,this.ac=new Vs,this.hc={},this.lc=new Map,this.fc=Ut.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function pu(e,t,n){const s=vu(e);try{const i=await function(r,o){const a=D(r),c=F.now(),h=o.reduce((p,b)=>p.add(b.key),H());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let b=Je(),I=H();return a.Gi.getEntries(p,h).next(_=>{b=_,b.forEach((Y,nt)=>{nt.isValidDocument()||(I=I.add(Y))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,b)).next(_=>{l=_;const Y=[];for(const nt of o){const Z=il(nt,l.get(nt.key).overlayedDocument);Z!=null&&Y.push(new Nt(nt.key,Z,ao(Z.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,Y,o)}).next(_=>{d=_;const Y=_.applyToLocalDocumentSet(l,I);return a.documentOverlayCache.saveOverlays(p,_.batchId,Y)})}).then(()=>({batchId:d.batchId,changes:Io(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new X(C)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Sn(s,i.changes),await bn(s.remoteStore)}catch(i){const r=xo(i,"Failed to persist write");n.reject(r)}}function Pi(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((h,l)=>{for(const d of l.listeners)d.bu(o)&&(c=!0)}),c&&fu(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function gu(e,t){const n=D(e),s=t.batch.batchId;try{const i=await Kl(n.localStore,t);Mo(n,s,null),Oo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sn(n,i)}catch(i){await Jr(i)}}async function mu(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(M(l!==null),h=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>a.localDocuments.getDocuments(c,h))})}(s.localStore,t);Mo(s,t,n),Oo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Sn(s,i)}catch(i){await Jr(i)}}function Oo(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Mo(e,t,n){const s=D(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}async function Sn(e,t,n){const s=D(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(h=>{if((h||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const l=Us.Ci(c.targetId,h);r.push(l)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const h=D(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>u.forEach(c,d=>u.forEach(d.Si,p=>h.persistence.referenceDelegate.addReference(l,d.targetId,p)).next(()=>u.forEach(d.Di,p=>h.persistence.referenceDelegate.removeReference(l,d.targetId,p)))))}catch(l){if(!yn(l))throw l;m("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const p=h.qi.get(d),b=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(b);h.qi=h.qi.insert(d,I)}}}(s.localStore,r))}async function yu(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await Co(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Sn(n,s.ji)}}function vu(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mu.bind(null,t),t}class wu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Tn(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return ql(this.persistence,new jl,t.initialUser,this.yt)}yc(t){return new Ul(Bs.Bs,this.yt)}gc(t){return new Wl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eu{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yu.bind(null,this.syncEngine),await lu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new uu}createDatastore(t){const n=Tn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Jl(i));var i;return function(r,o,a,c){return new eu(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Pi(this.syncEngine,a,0),o=Mi.C()?new Mi:new zl,new su(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const l=new du(s,i,r,o,a,c);return h&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);m("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ae(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Lo(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tu(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fi(e){if(!w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vi(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function js(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function Iu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=js(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Bi=new Map;class Ui{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Hs{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ui({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ui(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mh;switch(n.type){case"gapi":const s=n.client;return new wh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Bi.get(t);n&&(m("ComponentProvider","Removing Datastore"),Bi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class qs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qs(this.firestore,t,this._query)}}class ft extends qs{constructor(t,n,s){super(t,n,Gh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new w(t))}withConverter(t){return new ft(this.firestore,t,this._path)}}function bu(e,t,...n){if(e=ee(e),Lo("collection","path",t),e instanceof Hs){const s=k.fromString(t,...n);return Vi(s),new ft(e,null,s)}{if(!(e instanceof ct||e instanceof ft))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return Vi(s),new ft(e.firestore,null,s)}}function Su(e,t,...n){if(e=ee(e),arguments.length===1&&(t=Yr.R()),Lo("doc","path",t),e instanceof Hs){const s=k.fromString(t,...n);return Fi(s),new ct(e,null,new w(s))}{if(!(e instanceof ct||e instanceof ft))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return Fi(s),new ct(e.firestore,e instanceof ft?e.converter:null,new w(s))}}/**
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
 */class Au{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=z.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=xo(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Cu(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Co(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Du(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Nu(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Li(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Li(t.remoteStore,r)),e.onlineComponents=t}async function Nu(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Cu(e,new wu)),e.offlineComponents}async function _u(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Du(e,new Eu)),e.onlineComponents}function Ru(e){return _u(e).then(t=>t.syncEngine)}class ku{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Do(this,"async_queue_retry"),this.Wc=()=>{const n=jn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=jn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=jn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new It;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!yn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=$s.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&E()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Po extends Hs{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new ku,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fo(this),this._firestoreClient.terminate()}}function xu(e){return e._firestoreClient||Fo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fo(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new _h(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Au(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 *//**
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
 */class fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fe(lt.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new fe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Bo{constructor(t){this._methodName=t}}/**
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
 */class Uo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
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
 */const Ou=/^__.*__$/;class Mu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Nt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Se(t,this.data,n,this.fieldTransforms)}}function $o(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Ks{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Ze(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if($o(this.sa)&&Ou.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Lu{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Tn(t)}da(t,n,s,i=!1){return new Ks({sa:t,methodName:n,fa:s,path:q.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Pu(e){const t=e._freezeSettings(),n=Tn(e._databaseId);return new Lu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Fu(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);Ko("Data must be an object, but it was:",o,s);const a=Ho(s,o);let c,h;if(r.merge)c=new it(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const d of r.mergeFields){const p=Vu(t,d,n);if(!o.contains(p))throw new v(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);$u(l,p)||l.push(p)}c=new it(l),h=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,h=o.fieldTransforms;return new Mu(new et(a),c,h)}function jo(e,t){if(qo(e=ee(e)))return Ko("Unsupported field value:",t,e),Ho(e,t);if(e instanceof Bo)return function(n,s){if(!$o(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=jo(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Jh(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=F.fromDate(n);return{timestampValue:as(s.yt,i)}}if(n instanceof F){const i=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:as(s.yt,i)}}if(n instanceof Uo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fe)return{bytesValue:pl(s.yt,n._byteString)};if(n instanceof ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:So(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${js(n)}`)}(e,t)}function Ho(e,t){const n={};return to(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(e,(s,i)=>{const r=jo(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function qo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F||e instanceof Uo||e instanceof fe||e instanceof ct||e instanceof Bo)}function Ko(e,t,n){if(!qo(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=js(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Vu(e,t,n){if((t=ee(t))instanceof Vo)return t._internalPath;if(typeof t=="string")return Uu(e,t);throw Ze("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bu=new RegExp("[~\\*/\\[\\]]");function Uu(e,t,n){if(t.search(Bu)>=0)throw Ze(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vo(...t.split("."))._internalPath}catch{throw Ze(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ze(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function $u(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function ju(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function Hu(e,t){const n=Iu(e.firestore,Po),s=Su(e),i=ju(e.converter,t);return qu(n,[Fu(Pu(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then(()=>s)}function qu(e,t){return function(n,s){const i=new It;return n.asyncQueue.enqueueAndForget(async()=>pu(await Ru(n),s,i)),i.promise}(xu(e),t)}(function(e,t=!0){(function(n){Ht=n})(Ja),Fe(new fc("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Po(new yh(n.getProvider("auth-internal")),new Th(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ge(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt(yi,"3.8.0",e),Wt(yi,"3.8.0","esm2017")})();const Ku={data(){return{name:"",email:"",message:"",success:!1}},methods:{handleSubmit(){let e=document.querySelector(".needs-validation");e.classList.add("was-validated");const t={name:this.name,email:this.email,message:this.message},{firestore:n}=useFirebase(),s=bu(n,"messages");Hu(s,t),this.success=!0,this.name="",this.email="",this.message="",e.classList.remove("was-validated")}}},_t=e=>(Xo("data-v-e6b62652"),e=e(),Yo(),e),Gu=_t(()=>A("h1",{class:"text-center display-4 mt-2 mb-3"},"Contact",-1)),Qu={class:"d-flex justify-content-center mb-3"},Wu={class:"list-group list-group-horizontal"},zu={class:"list-group-item border-0"},Xu={href:"https://medium.com/@mateomd_dev",class:"icon"},Yu={class:"list-group-item border-0"},Ju={href:"https://twitter.com/mateomd_dev",class:"icon"},Zu={class:"list-group-item border-0"},tf={href:"https://www.instagram.com/mateomd_dev/",class:"icon"},ef={class:"list-group-item border-0"},nf={href:"https://github.com/mateomd-dev",class:"icon"},sf={class:"row justify-content-center"},rf={class:"form-group has-validation mb-3"},of=_t(()=>A("label",{for:"name",class:"form-label"},"Name:",-1)),af=_t(()=>A("div",{class:"invalid-feedback"}," Invalid name! ",-1)),cf={class:"form-group mb-3"},hf=_t(()=>A("label",{for:"email",class:"form-label"},"Email:",-1)),lf=_t(()=>A("div",{class:"invalid-feedback"}," Invalid email! ",-1)),uf={class:"form-group mb-3"},ff=_t(()=>A("label",{for:"message",class:"form-label"},"Message:",-1)),df=_t(()=>A("div",{class:"invalid-feedback"}," Invalid message! ",-1)),pf={class:"d-flex justify-content-end"},gf={key:0,type:"submit",class:"btn"},mf={key:1,class:"alert-success"};function yf(e,t,n,s,i,r){const o=zo("font-awesome-icon");return Cn(),Dn("div",null,[Gu,A("div",Qu,[A("ul",Wu,[A("li",zu,[A("a",Xu,[De(o,{icon:["fab","medium"]})])]),A("li",Yu,[A("a",Ju,[De(o,{icon:["fab","twitter"]})])]),A("li",Zu,[A("a",tf,[De(o,{icon:["fab","instagram"]})])]),A("li",ef,[A("a",nf,[De(o,{icon:["fab","github"]})])])])]),A("div",sf,[A("form",{onSubmit:t[3]||(t[3]=Wo((...a)=>r.handleSubmit&&r.handleSubmit(...a),["prevent"])),class:"col-7 needs-validation"},[A("div",rf,[of,Nn(A("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>i.name=a),type:"text",id:"name",class:"form-control",required:""},null,512),[[_n,i.name]]),af]),A("div",cf,[hf,Nn(A("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>i.email=a),type:"text",id:"email",class:"form-control",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:""},null,512),[[_n,i.email]]),lf]),A("div",uf,[ff,Nn(A("textarea",{"onUpdate:modelValue":t[2]||(t[2]=a=>i.message=a),id:"message",rows:"5",class:"form-control",required:""},null,512),[[_n,i.message]]),df]),A("div",pf,[i.success?zs("",!0):(Cn(),Dn("button",gf,"Submit")),i.success?(Cn(),Dn("div",mf,"Sent!")):zs("",!0)])],32)])])}const wf=Qo(Ku,[["render",yf],["__scopeId","data-v-e6b62652"]]);export{wf as default};
