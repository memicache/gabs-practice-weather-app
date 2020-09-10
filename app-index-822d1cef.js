/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${i}`);class s{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,d=-1,p=0;const{strings:u,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)o(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=u[p],n=h.exec(t)[2],i=n.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const o=s.split(r);this.parts.push({type:"attribute",index:d,name:n,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,s=t.split(r),a=s.length-1;for(let t=0;t<a;t++){let i,r=s[t];if(""===r)i=l();else{const e=h.exec(r);null!==e&&o(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}n.insertBefore(i,e),this.parts.push({type:"node",index:++d})}""===s[a]?(n.insertBefore(l(),e),i.push(e)):e.data=s[a],p+=a}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&d!==c||(d++,t.insertBefore(l(),e)),c=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(i.push(e),d--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const o=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},a=e=>-1!==e.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,133,null,!1);let s=p(i),o=i[s],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(h.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,s=p(i,s),o=i[s]}h.forEach(e=>e.parentNode.removeChild(e))}const d=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},p=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(a(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=e=>"function"==typeof e&&u.has(e),f={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,o=0,l=0,h=r.nextNode();for(;o<i.length;)if(s=i[o],a(s)){for(;l<s.index;)l++,"TEMPLATE"===h.nodeName&&(n.push(h),r.currentNode=h.content),null===(h=r.nextNode())&&(r.currentNode=n.pop(),h=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(h.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${n} `;class v{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let s=0;s<e;s++){const e=this.strings[s],o=e.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===e.indexOf("--\x3e",o+1);const a=h.exec(e);t+=null===a?e+(r?y:i):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(w(e)||!b(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||w(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===g?(this.value=g,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new C(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class E extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends S{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(n);return i=t.keyString.get(r),void 0===i&&(i=new s(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const R=new Map,$=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,i){const r=t[0];if("."===r){return new E(e,t.slice(1),n).parts}return"@"===r?[new A(e,t.slice(1),i.eventContext)]:"?"===r?[new P(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(e,...t)=>new v(e,t,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,j=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const M=e=>t=>{const i=j(t.type,e);let r=R.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},R.set(i,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(n);if(o=r.keyString.get(a),void 0===o){const n=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(n,e),o=new s(t,n),r.keyString.set(a,o)}return r.stringsArray.set(t.strings,o),o},I=["html","svg"],L=new Set,z=(e,t,n)=>{L.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{I.forEach(t=>{const n=R.get(j(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),c(e,n)})})})(e);const a=i.content;n?function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const s=document.createTreeWalker(i,133,null,!1);let o=p(r),a=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===n&&(a=d(t),n.parentNode.insertBefore(t,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),c(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:D};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=D){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||F,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||F.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=q){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}H.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function K(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):J(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Z{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof Z)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new Z(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class ee extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==X&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return X}}ee.finalized=!0,ee.render=(e,n,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=$.has(n),o=B&&11===n.nodeType&&!!n.host,a=o&&!L.has(r),l=a?document.createDocumentFragment():n;if(((e,n,i)=>{let r=$.get(n);void 0===r&&(t(n,n.firstChild),$.set(n,r=new C(Object.assign({templateFactory:O},i))),r.appendInto(n)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:M(r)},i)),a){const e=$.get(l);$.delete(l);const i=e.value instanceof _?e.value.template:void 0;z(r,l,i),t(n,n.firstChild),n.appendChild(l),$.set(n,e)}!s&&o&&window.ShadyCSS.styleElement(n.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const te="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ne=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},ie=`{{lit-${String(Math.random()).slice(2)}}}`,re=`\x3c!--${ie}--\x3e`,se=new RegExp(`${ie}|${re}`);class oe{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let s=0,o=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=r.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)ae(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[a],n=ce.exec(t)[2],i=n.toLowerCase()+"$lit$",r=e.getAttribute(i);e.removeAttribute(i);const s=r.split(se);this.parts.push({type:"attribute",index:o,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(ie)>=0){const i=e.parentNode,r=t.split(se),s=r.length-1;for(let t=0;t<s;t++){let n,s=r[t];if(""===s)n=he();else{const e=ce.exec(s);null!==e&&ae(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}i.insertBefore(n,e),this.parts.push({type:"node",index:++o})}""===r[s]?(i.insertBefore(he(),e),n.push(e)):e.data=r[s],a+=s}}else if(8===e.nodeType)if(e.data===ie){const t=e.parentNode;null!==e.previousSibling&&o!==s||(o++,t.insertBefore(he(),e)),s=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(n.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(ie,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const ae=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},le=e=>-1!==e.index,he=()=>document.createComment(""),ce=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function de(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,133,null,!1);let s=ue(i),o=i[s],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(h.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,s=ue(i,s),o=i[s]}h.forEach(e=>e.parentNode.removeChild(e))}const pe=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},ue=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(le(t))return n}return-1},me=new WeakMap,fe=e=>"function"==typeof e&&me.has(e),ge={},_e={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ye{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=te?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,s=0,o=0,a=i.nextNode();for(;s<n.length;)if(r=n[s],le(r)){for(;o<r.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return te&&(document.adoptNode(e),customElements.upgrade(e)),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const ve=` ${ie} `;class we{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const s=ce.exec(e);t+=null===s?e+(n?ve:re):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+ie}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const be=e=>null===e||!("object"==typeof e||"function"==typeof e),xe=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Se{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ce(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(be(e)||!xe(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ce{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ge||be(e)&&e===this.value||(this.value=e,fe(e)||(this.committer.dirty=!0))}commit(){for(;fe(this.value);){const e=this.value;this.value=ge,e(this)}this.value!==ge&&this.committer.commit()}}class Pe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(he()),this.endNode=e.appendChild(he())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=he()),e.__insert(this.endNode=he())}insertAfterPart(e){e.__insert(this.startNode=he()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;fe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ge,e(this)}const e=this.__pendingValue;e!==ge&&(be(e)?e!==this.value&&this.__commitText(e):e instanceof we?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):xe(e)?this.__commitIterable(e):e===_e?(this.value=_e,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ye&&this.value.template===t)this.value.update(e.values);else{const n=new ye(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new Pe(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){ne(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ee{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;fe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ge,e(this)}if(this.__pendingValue===ge)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=ge}}class ke extends Se{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ne extends Ce{}let Ae=!1;(()=>{try{const e={get capture(){return Ae=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Te{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;fe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ge,e(this)}if(this.__pendingValue===ge)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=ge}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Oe=e=>e&&(Ae?{capture:e.capture,passive:e.passive,once:e.once}:e.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function Re(e){let t=$e.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$e.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(ie);return n=t.keyString.get(i),void 0===n&&(n=new oe(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const $e=new Map,Ue=new WeakMap,Ve=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,i){const r=t[0];return"."===r?new ke(e,t.slice(1),n).parts:"@"===r?[new Te(e,t.slice(1),i.eventContext)]:"?"===r?[new Ee(e,t.slice(1),n)]:new Se(e,t,n).parts}handleTextExpression(e){return new Pe(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const je=(e,...t)=>new we(e,t,"html",Ve)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Be=(e,t)=>`${e}--${t}`;let Me=!0;void 0===window.ShadyCSS?Me=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Me=!1);const Ie=e=>t=>{const n=Be(t.type,e);let i=$e.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$e.set(n,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(ie);if(r=i.keyString.get(s),void 0===r){const n=t.getTemplateElement();Me&&window.ShadyCSS.prepareTemplateDom(n,e),r=new oe(t,n),i.keyString.set(s,r)}return i.stringsArray.set(t.strings,r),r},Le=["html","svg"],ze=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const Fe={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},De=(e,t)=>t!==e&&(t==t||e==e),qe={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:De};class He extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=qe){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||qe}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=De){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||Fe,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||Fe.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=qe){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}He.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const We=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Je(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):We(e,t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const Ke="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol();class Qe{constructor(e,t){if(t!==Ye)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ke?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ze=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof Qe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new Qe(n,Ye)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Ge={};class Xe extends He{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ke?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Ge&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Ge}}Xe.finalized=!0,Xe.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=Ue.has(t),s=Me&&11===t.nodeType&&!!t.host,o=s&&!ze.has(i),a=o?document.createDocumentFragment():t;if(((e,t,n)=>{let i=Ue.get(t);void 0===i&&(ne(t,t.firstChild),Ue.set(t,i=new Pe(Object.assign({templateFactory:Re},n))),i.appendInto(t)),i.setValue(e),i.commit()})(e,a,Object.assign({templateFactory:Ie(i)},n)),o){const e=Ue.get(a);Ue.delete(a),((e,t,n)=>{ze.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{Le.forEach(t=>{const n=$e.get(Be(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),de(e,n)})})})(e);const a=i.content;n?function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const s=document.createTreeWalker(i,133,null,!1);let o=ue(r),a=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===n&&(a=pe(t),n.parentNode.insertBefore(t,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=ue(r,o);return}o=ue(r,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),de(n,e)}})(i,a,e.value instanceof ye?e.value.template:void 0),ne(t,t.firstChild),t.appendChild(a),Ue.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)};var et=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let tt=class extends Xe{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{"Escape"===e.key&&this.cancel()})}static get styles(){return Ze`:host{--install-focus-color:#919c9c;--install-button-color:#1FC2C8;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index)}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media(max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media(max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media(max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(e){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch(e){return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let n=new CustomEvent("hide");this.dispatchEvent(n),e()})}render(){return je`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?je`<button part=openButton id=openButton @click=${()=>this.openPrompt()}><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?je`<div id=installModalWrapper>${this.openmodal?je`<div id=background @click=${()=>this.cancel()}></div>`:null}<div id=installModal part=installModal><div id=headerContainer><div id=logoContainer><img src=${this.iconpath?this.iconpath:this.manifestdata.icons[0].src} alt="App Logo"><div id=installTitle><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id=desc>${this.explainer}</p></div></div><button id=closeButton @click=${()=>this.cancel()}><svg width=23 height=22 viewBox="0 0 23 22" fill=none xmlns=http://www.w3.org/2000/svg><path opacity=0.33 fill-rule=evenodd clip-rule=evenodd d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill=#60656D /></svg></button></div><div id=contentContainer><div id=featuresScreenDiv>${this.manifestdata.features?je`<div id=keyFeatures><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>je`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?je`<div id=screenshotsContainer><button @click=${()=>this.scrollToLeft()}><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id=screenshots>${this.manifestdata.screenshots.map(e=>je`<div><img alt="App Screenshot" src=${e.src}></div>`)}</section><button @click=${()=>this.scrollToRight()}><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id=descriptionWrapper><h3>${this.descriptionheader}</h3><p id=manifest-description>${this.manifestdata.description}</p></div></div>${this.isIOS?je`<p id=iosText>${this.iosinstallinfotext}</p>`:je`<div id=buttonsContainer>${this.deferredprompt?je`<button id=installButton @click=${()=>this.install()}>${this.installbuttontext} ${this.manifestdata.short_name}</button>`:je`<button @click=${()=>this.cancel()} id=installCancelButton>${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};et([Je({type:String})],tt.prototype,"manifestpath",void 0),et([Je({type:String})],tt.prototype,"iconpath",void 0),et([Je({type:Object})],tt.prototype,"manifestdata",void 0),et([Je({type:Boolean})],tt.prototype,"openmodal",void 0),et([Je({type:Boolean})],tt.prototype,"showopen",void 0),et([Je({type:Boolean})],tt.prototype,"isSupportingBrowser",void 0),et([Je({type:Boolean})],tt.prototype,"isIOS",void 0),et([Je({type:Boolean})],tt.prototype,"installed",void 0),et([Je({type:Boolean})],tt.prototype,"hasprompt",void 0),et([Je({type:Boolean})],tt.prototype,"usecustom",void 0),et([Je({type:Array})],tt.prototype,"relatedApps",void 0),et([Je({type:String})],tt.prototype,"explainer",void 0),et([Je({type:String})],tt.prototype,"featuresheader",void 0),et([Je({type:String})],tt.prototype,"descriptionheader",void 0),et([Je({type:String})],tt.prototype,"installbuttontext",void 0),et([Je({type:String})],tt.prototype,"cancelbuttontext",void 0),et([Je({type:String})],tt.prototype,"iosinstallinfotext",void 0),et([Je()],tt.prototype,"deferredprompt",void 0),tt=et([("pwa-install",e=>"function"==typeof e?((e,t)=>(window.customElements.define("pwa-install",t),t))(0,e):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(e){window.customElements.define("pwa-install",e)}}})(0,e))],tt);var nt=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let it=class extends ee{constructor(){super(),this.headerMessage="",this.temPrature="",this.humiDity="",this.cloudCover="",this.setWeatherFromLocalStorage()}static get styles(){return G`
    .weather-info {
        display: -ms-flexbox;
        position: relative;
        -ms-flex-direction: column;
            flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-clip: border-box;
        display: flex;
        color:#fff;
        margin: 3px;
        width: 100%;
        height: 500px;
        padding:0;
        border: 0;
         
      }
      .weather-info-body {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.25rem; 
        background: linear-gradient(rgb(80, 130, 177), white) no-repeat;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 2.1875rem;
        text-align:center;
          
      }
      .weather-info-title {
        margin: auto;
        margin-bottom: 0.9375rem; }

        .weather-info-line {
          margin: 30px; }

     @media (min-width: 768px) {
          .weather-info {
            margin:auto !important; 
            width: 70%; !important;}
        
          

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `}setWeatherFromLocalStorage(){localStorage.getItem("headerMessage")&&(this.headerMessage=`${localStorage.getItem("headerMessage")}`,this.temPrature=`${localStorage.getItem("temPrature")} `,this.humiDity=`${localStorage.getItem("humiDity")} `,this.cloudCover=`${localStorage.getItem("cloudCover")} `)}getWeatherData(){let e=this.inputEl.value,t=new URL(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=224ead2d1edb502893b3de2a7fe0d0e8`);(async()=>{const e=await fetch(t.toString()),n=await e.json();let i=n.main;window.localStorage.setItem("data",n.main),this.headerMessage=`Current weather in ${n.name}`,this.temPrature=`Temprature:  ${i.temp} `,this.humiDity=`Humidity:  ${i.humidity} `,this.cloudCover=`Cloud Cover:  ${n.weather[0].description} `,localStorage.setItem("headerMessage",this.headerMessage),localStorage.setItem("temPrature",this.temPrature),localStorage.setItem("humiDity",this.humiDity),localStorage.setItem("cloudCover",this.cloudCover)})()}get inputEl(){return this.shadowRoot.getElementById("weathersearchid")}render(){return V`
      
     <div class="weather-info" >
         <div class="weather-info-title" > <input id='weathersearchid' name='weatherseach' placeholder="Enter city name"
                    class='input-search-box'></span> <button @click="${this.getWeatherData}"> Search</button>
                   
          </div>
          <div class="weather-info-title" > 
                    <h1>${this.headerMessage}</h1> 
          </div>
        
          <div class="weather-info-body">
            
             <div class="weather-info-line">${this.temPrature} <span>&#8451;</span></div>
             <div  class="weather-info-line">${this.humiDity}</div>
             <div  class="weather-info-line">${this.cloudCover}</div>

          </div>
      
      </div>
    `}};function rt(e){return e=e||[],Array.isArray(e)?e:[e]}function st(e){return`[Vaadin.Router] ${e}`}nt([K()],it.prototype,"headerMessage",void 0),nt([K()],it.prototype,"temPrature",void 0),nt([K()],it.prototype,"humiDity",void 0),nt([K()],it.prototype,"cloudCover",void 0),it=nt([W("app-home")],it);const ot=["module","nomodule"];function at(e){if(!e.match(/.+\.[m]?js$/))throw new Error(st(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function lt(e){if(!e||!mt(e.path))throw new Error(st('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(ut(e.action)||Array.isArray(e.children)||ut(e.children)||pt(t)||n.some(t=>mt(e[t]))))throw new Error(st(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(mt(t))at(t);else{if(!ot.some(e=>e in t))throw new Error(st('Expected route bundle to include either "nomodule" or "module" keys, or both'));ot.forEach(e=>e in t&&at(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(st(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function ht(e){rt(e).forEach(e=>lt(e))}function ct(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function dt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function pt(e){return"object"==typeof e&&!!e}function ut(e){return"function"==typeof e}function mt(e){return"string"==typeof e}function ft(e){const t=new Error(st(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const gt=new class{};function _t(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const i=n[e];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){t=i;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:i,search:r,hash:s}=t;dt("go",{pathname:i,search:r,hash:s})&&e.preventDefault()}const yt={activate(){window.document.addEventListener("click",_t)},inactivate(){window.document.removeEventListener("click",_t)}};function vt(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:i}=window.location;dt("go",{pathname:t,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!ut(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const wt={activate(){window.addEventListener("popstate",vt)},inactivate(){window.removeEventListener("popstate",vt)}};var bt=$t,xt=kt,St=function(e,t){return Nt(kt(e,t))},Ct=Nt,Pt=Rt,Et=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function kt(e,t){for(var n,i=[],r=0,s=0,o="",a=t&&t.delimiter||"/",l=t&&t.delimiters||"./",h=!1;null!==(n=Et.exec(e));){var c=n[0],d=n[1],p=n.index;if(o+=e.slice(s,p),s=p+c.length,d)o+=d[1],h=!0;else{var u="",m=e[s],f=n[2],g=n[3],_=n[4],y=n[5];if(!h&&o.length){var v=o.length-1;l.indexOf(o[v])>-1&&(u=o[v],o=o.slice(0,v))}o&&(i.push(o),o="",h=!1);var w=""!==u&&void 0!==m&&m!==u,b="+"===y||"*"===y,x="?"===y||"*"===y,S=u||a,C=g||_;i.push({name:f||r++,prefix:u,delimiter:S,optional:x,repeat:b,partial:w,pattern:C?Tt(C):"[^"+At(S)+"]+?"})}}return(o||s<e.length)&&i.push(o+e.substr(s)),i}function Nt(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var r="",s=i&&i.encode||encodeURIComponent,o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var l,h=n?n[a.name]:void 0;if(Array.isArray(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<h.length;c++){if(l=s(h[c],a),!t[o].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===c?a.prefix:a.delimiter)+l}}else if("string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(l=s(String(h),a),!t[o].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');r+=a.prefix+l}}else r+=a}return r}}function At(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tt(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Ot(e){return e&&e.sensitive?"":"i"}function Rt(e,t,n){for(var i=(n=n||{}).strict,r=!1!==n.start,s=!1!==n.end,o=At(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(At).concat("$").join("|"),h=r?"^":"",c=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)h+=At(p),c=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+At(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?h+=At(p.prefix)+"("+u+")?":h+="(?:"+At(p.prefix)+"("+u+"))?":h+=At(p.prefix)+"("+u+")"}}return s?(i||(h+="(?:"+o+")?"),h+="$"===l?"$":"(?="+l+")"):(i||(h+="(?:"+o+"(?="+l+"))?"),c||(h+="(?="+o+"|"+l+")")),new RegExp(h,Ot(n))}function $t(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push($t(e[r],t,n).source);return new RegExp("(?:"+i.join("|")+")",Ot(n))}(e,t,n):function(e,t,n){return Rt(kt(e,n),t,n)}(e,t,n)}bt.parse=xt,bt.compile=St,bt.tokensToFunction=Ct,bt.tokensToRegExp=Pt;const{hasOwnProperty:Ut}=Object.prototype,Vt=new Map;function jt(e){try{return decodeURIComponent(e)}catch(t){return e}}function Bt(e,t,n,i,r){let s,o,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(h){if(e===h)return{done:!0};const c=e.__children=e.__children||e.children;if(!s&&(s=function(e,t,n,i,r){const s=`${e}|${n=!!n}`;let o=Vt.get(s);if(!o){const t=[];o={keys:t,pattern:bt(e,t,{end:n,strict:""===e})},Vt.set(s,o)}const a=o.pattern.exec(t);if(!a)return null;const l=Object.assign({},r);for(let e=1;e<a.length;e++){const t=o.keys[e-1],n=t.name,i=a[e];void 0===i&&Ut.call(l,n)||(t.repeat?l[n]=i?i.split(t.delimiter).map(jt):[]:l[n]=i?jt(i):i)}return{path:a[0],keys:(i||[]).concat(o.keys),params:l}}(l,t,!c,i,r),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&c)for(;a<c.length;){if(!o){const i=c[a];i.parent=e;let r=s.path.length;r>0&&"/"===t.charAt(r)&&(r+=1),o=Bt(i,t.substr(r),n,s.keys,s.params)}const i=o.next(h);if(!i.done)return{done:!1,value:i.value};o=null,a++}return{done:!0}}}}function Mt(e){if(ut(e.route.action))return e.route.action(e)}Vt.set("|false",{keys:[],pattern:/(?:)/});class It{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Mt,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ht(e);const t=[...rt(e)];this.root.__children=t}addRoutes(e){return ht(e),this.root.__children.push(...rt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,mt(e)?{pathname:e}:e),n=Bt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let r=null,s=null,o=t;function a(e,l=r.value.route,h){const c=null===h&&r.value.route;return r=s||n.next(c),s=null,e||!r.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,r.value.route)?r.done?Promise.reject(ft(t)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},t,r.value),function(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const t={path:i,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(o,r.value),Promise.resolve(i(o)).then(t=>null!=t&&t!==gt?(o.result=t.result||t,o):a(e,l,t))):(s=r,Promise.resolve(gt))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(o);if(e?console.warn(t):e=new Error(t),e.context=e.context||o,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return o.result=this.errorHandler(e),o;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}It.pathToRegexp=bt;const{pathToRegexp:Lt}=It,zt=new Map;function Ft(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function Dt(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function qt(e,t={}){if(!(e instanceof It))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let s=Ft(n,i);if(!s&&(n.clear(),function e(t,n,i){const r=n.name||n.component;if(r&&(t.has(r)?t.get(r).push(n):t.set(r,[n])),Array.isArray(i))for(let r=0;r<i.length;r++){const s=i[r];s.parent=n,e(t,s,s.__children||s.children)}}(n,e.root,e.root.__children),s=Ft(n,i),!s))throw new Error(`Route "${i}" not found`);let o=zt.get(s.fullPath);if(!o){let e=Dt(s),t=s.parent;for(;t;){const n=Dt(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Lt.parse(e),i=Lt.tokensToFunction(n),r=Object.create(null);for(let e=0;e<n.length;e++)mt(n[e])||(r[n[e].name]=!0);o={toPath:i,keys:r},zt.set(e,o),s.fullPath=e}let a=o.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const e={},n=Object.keys(r);for(let t=0;t<n.length;t++){const i=n[t];o.keys[i]||(e[i]=r[i])}const i=t.stringifyQueryParams(e);i&&(a+="?"===i.charAt(0)?i:`?${i}`)}return a}}let Ht=[];function Wt(e){Ht.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),Ht=e}function Jt(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const i=e.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${r}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function Kt(e){return null!=e}function Yt({pathname:e="",search:t="",hash:n="",chain:i=[],params:r={},redirectFrom:s,resolver:o},a){const l=i.map(e=>e.route);return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:r,redirectFrom:s,getUrl:(e={})=>en(nn.pathToRegexp.compile(tn(l))(Object.assign({},r,e)),o)}}function Qt(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Zt(e,t,n){if(ut(e))return e.apply(n,t)}function Gt(e,t,n){return i=>i&&(i.cancel||i.redirect)?i:n?Zt(n[e],t,n):void 0}function Xt(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function en(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function tn(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class nn extends It{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&It.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=nn.NavigationTrigger;nn.setTriggers.apply(nn,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Yt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();ut(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{Kt(e)||ut(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!pt(e))throw new Error(st(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=rt(e);for(let e=0;e<n.length;e++)lt(n[e]),t.__children.push(n[e])}(e,t)}));const i={redirect:t=>Qt(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return Zt(t.action,[e,i],t)}).then(e=>{return Kt(e)&&(e instanceof HTMLElement||e.redirect||e===gt)?e:mt(t.redirect)?i.redirect(t.redirect):t.bundle?(n=t.bundle,mt(n)?ct(n):Promise.race(ot.filter(e=>e in n).map(e=>ct(n[e],e)))).then(()=>{},()=>{throw new Error(st(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>Kt(e)?e:mt(t.component)?i.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},mt(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const i=this.__previousContext;if(e===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=Yt(e),t&&this.__updateBrowserHistory(e,1===n),dt("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,i),this.__previousContext=e,this.location;this.__addAppearingContent(e,i);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,i),r.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),Xt(this.__outlet&&this.__outlet.children),this.location=Yt(Object.assign(i,{resolver:this})),dt("error",Object.assign({router:this,error:e},i)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const i=n!==t?n:e,r=en(tn(n.chain),n.resolver)===n.pathname,s=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===gt?r?e:null!==t.parent?s(e,t.parent,n):n:n);return s(n).then(e=>{if(null===e||e===gt)throw ft(i);return e&&e!==gt&&e!==n?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Yt(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(st(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let r=Promise.resolve();const s=()=>({cancel:!0}),o=t=>Qt(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,i.length)&&(n[t].route===i[t].route&&(n[t].path===i[t].path||n[t].element===i[t].element)&&this.__isReusableElement(n[t].element,i[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let o=i.length-1;o>=0;o--)n[o].path===i[o].path&&e.search===t.search||(r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[o]));for(let a=0;a<i.length;a++)n[a].path===i[a].path&&e.search===t.search||(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:o},i[a])),n[a].element.location=Yt(e,n[a].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[t])}if(!e.__skipAttach)for(let t=0;t<i.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Yt(e,n[t].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:o},i[t]),i[t].element&&(i[t].element.location=Yt(e,i[t].route)));return r.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const r=Yt(t);return e.then(e=>{if(this.__isLatestRender(t)){return Gt("onBeforeLeave",[r,n,this],i.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,i){const r=Yt(t,i.route);return e.then(e=>{if(this.__isLatestRender(t)){return Gt("onBeforeEnter",[r,n,this],i.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(st(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(st(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const r=i?"replaceState":"pushState";window.history[r](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const r=t&&t.chain[i].element;if(r){if(r.parentNode!==n)break;e.chain[i].element=r,n=r}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let i=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const r=e.chain[t].element;r&&(i.appendChild(r),this.__addedByRouter.set(r,!0),i===n&&this.__appearingContent.push(r),i=r)}}__removeDisappearingContent(){this.__disappearingContent&&Xt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Xt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const n=Yt(e);Zt(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Xt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=Yt(e,e.chain[t].route);Zt(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],r=e.chain;let s;for(let e=r.length;e>0;e--)if(r[e-1].route.animate){s=r[e-1].route.animate;break}if(t&&n&&s){const e=pt(s)&&s.leave||"leaving",r=pt(s)&&s.enter||"entering";i.push(Jt(t,e)),i.push(Jt(n,r))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;mt(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Wt(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=qt(this)),en(this.__urlForName(e,t),this)}urlForPath(e,t){return en(nn.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=mt(e)?this.__createUrl(e,"http://a"):e;return dt("go",{pathname:t,search:n,hash:i})}}const rn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,sn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function on(e,t){if("function"!=typeof e)return;const n=rn.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){}return e(t)}window.Vaadin=window.Vaadin||{};const an=function(e,t){if(window.Vaadin.developmentMode)return on(e,t)};function ln(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(sn?!function(){if(sn){if(Object.keys(sn).map(e=>sn[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!on((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.1"}),an(ln),nn.NavigationTrigger={POPSTATE:wt,CLICK:yt};var hn=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let cn=class extends ee{constructor(){super(),this.title="mash It"}static get styles(){return G`


  
    
      header {
       
        text-align:left
        background: rgba(0,0,0,0.5)
        color: white;
        border:0
        height: 10em;
        box-sizing: border-box;
        
      }
      .logo {
        float: left;
        font-size: 24px;
        width:50%;
        font-weight: normal;
        text-align:center;
        margin-top:50px;
        width: 50%;
        box-sizing: border-box;
      
      }

      .search {
        float: left;
        text-align:center;
        font-size: 24px;
        font-weight: normal;
        
        margin-top:50px;
        
        width: 50%;
        box-sizing: border-box;
       
      }

      .input-search-box {
    
        margin-top:50px;
        margin-bottom:0px;
        width:35%;
        background-color: #ffffffab;
        border: 0px solid;
        height: 30px;
       
      }

      #logo-text {
    
       
        font-size: 30px;
        font-weight: normal;
        color:#fff;
        font-style: italic; 
        --font-family: sans-serif;
      }
      #logo-letter  {
       
        font-size: 70px;
        font-weight: normal;
        color:#fff;
        padding:0;
        margin:0;
        --font-family: sans-serif;
      }
   
      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }

    `}render(){return V`
      <header>
        <div class="logo">
        <span id="logo-letter">S<span id="logo-text">${this.title}</span></span>
       
        
        </div>
        <div class="search"> 
        
          
        </div>
      
      </header>
    `}};hn([K({type:String})],cn.prototype,"title",void 0),cn=hn([W("app-header")],cn);let dn=class extends ee{static get styles(){return G`
    
      .content {
        
        margin: 16px;
        padding: 16px;
      }

     
      

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }
    
      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }
    
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
    
        to {
          opacity: 0;
        }
      }
    
      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }
    
        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var e;new nn(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/about",component:"app-about",action:async()=>{await import("./app-about-6e45ce34.js")}}]}])}render(){return V`
      <div>
        <app-header></app-header>
        <div class="content">
           <div id="routerOutlet"></div>
        </div>
          
        
        
      </div>
    `}};dn=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}([W("app-index")],dn);export{dn as A,ee as L,W as a,G as c,V as h};
