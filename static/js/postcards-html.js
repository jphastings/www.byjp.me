function v(){}function V(t,n){for(let r in n)t[r]=n[r];return t}function Jt(t){return t&&"object"==typeof t&&"function"==typeof t.then}function ut(t){return t()}function yt(){return Object.create(null)}function W(t){t.forEach(ut)}function Dt(t){return"function"==typeof t}function dt(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let G;function Zt(t,n){return G||(G=document.createElement("a")),G.href=n,t===G.href}function Ht(t){return 0===Object.keys(t).length}function et(t){let n={};for(let r in t)"$"!==r[0]&&(n[r]=t[r]);return n}let rt=!1;function Qt(){rt=!0}function te(){rt=!1}function ee(t,n,r,o){for(;t<n;){let i=t+(n-t>>1);r(i)<=o?t=i+1:n=i}return t}function ne(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){let r=[];for(let o=0;o<n.length;o++){let i=n[o];void 0!==i.claim_order&&r.push(i)}n=r}let l=new Int32Array(n.length+1),a=new Int32Array(n.length);l[0]=-1;let s=0;for(let c=0;c<n.length;c++){let d=n[c].claim_order,f=(s>0&&n[l[s]].claim_order<=d?s+1:ee(1,s,t=>n[l[t]].claim_order,d))-1;a[c]=l[f]+1;let u=f+1;l[u]=c,s=Math.max(u,s)}let p=[],$=[],b=n.length-1;for(let y=l[s]+1;0!=y;y=a[y-1]){for(p.push(n[y-1]);b>=y;b--)$.push(n[b]);b--}for(;b>=0;b--)$.push(n[b]);p.reverse(),$.sort((t,n)=>t.claim_order-n.claim_order);for(let w=0,R=0;w<$.length;w++){for(;R<p.length&&$[w].claim_order>=p[R].claim_order;)R++;let L=R<p.length?p[R]:null;t.insertBefore($[w],L)}}function k(t,n){t.appendChild(n)}function B(t,n){if(rt){for(ne(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(void 0!==n.claim_order||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||null!==n.nextSibling)&&t.appendChild(n)}function g(t,n,r){t.insertBefore(n,r||null)}function re(t,n,r){rt&&!r?B(t,n):(n.parentNode!==t||n.nextSibling!=r)&&t.insertBefore(n,r||null)}function _(t){t.parentNode.removeChild(t)}function jt(t,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(n)}function E(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function O(){return P(" ")}function it(){return P("")}function ie(t,n,r,o){return t.addEventListener(n,r,o),()=>t.removeEventListener(n,r,o)}function h(t,n,r){null==r?t.removeAttribute(n):t.getAttribute(n)!==r&&t.setAttribute(n,r)}function kt(t,n){for(let r in n)h(t,r,n[r])}function A(t){return Array.from(t.childNodes)}function oe(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function se(t,n,r,o,i=!1){oe(t);let l=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){let a=t[l];if(n(a)){let s=r(a);return void 0===s?t.splice(l,1):t[l]=s,i||(t.claim_info.last_index=l),a}}for(let c=t.claim_info.last_index-1;c>=0;c--){let d=t[c];if(n(d)){let f=r(d);return void 0===f?t.splice(c,1):t[c]=f,i?void 0===f&&t.claim_info.last_index--:t.claim_info.last_index=c,d}}return o()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function le(t,n,r,o){return se(t,t=>t.nodeName===n,t=>{let n=[];for(let o=0;o<t.attributes.length;o++){let i=t.attributes[o];r[i.name]||n.push(i.name)}n.forEach(n=>t.removeAttribute(n))},()=>o(n))}function N(t,n,r){return le(t,n,r,x)}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,r,o){null===r?t.style.removeProperty(n):t.style.setProperty(n,r,o?"important":"")}function wt(t,n,r){t.classList[r?"add":"remove"](n)}function ce(t,n,{bubbles:r=!1,cancelable:o=!1}={}){let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r,o,n),i}function Ft(t){let n={};for(let r of t)n[r.name]=r.value;return n}let X;function C(t){X=t}function ht(){if(!X)throw Error("Function called outside component initialization");return X}function ae(){let t=ht();return(n,r,{cancelable:o=!1}={})=>{let i=t.$$.callbacks[n];if(i){let l=ce(n,r,{cancelable:o});return i.slice().forEach(n=>{n.call(t,l)}),!l.defaultPrevented}return!0}}const I=[],vt=[],Q=[],$t=[],fe=Promise.resolve();let lt=!1;function ue(){lt||(lt=!0,fe.then(S))}function ct(t){Q.push(t)}const st=new Set;let J=0;function S(){let t=X;do{for(;J<I.length;){let n=I[J];J++,C(n),de(n.$$)}for(C(null),I.length=0,J=0;vt.length;)vt.pop()();for(let r=0;r<Q.length;r+=1){let o=Q[r];st.has(o)||(st.add(o),o())}Q.length=0}while(I.length);for(;$t.length;)$t.pop()();lt=!1,st.clear(),C(t)}function de(t){if(null!==t.fragment){t.update(),W(t.before_update);let n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(ct)}}const tt=new Set;let M;function Ut(){M={r:0,c:[],p:M}}function Wt(){M.r||W(M.c),M=M.p}function T(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function D(t,n,r,o){t&&t.o?tt.has(t)||(tt.add(t),M.c.push(()=>{tt.delete(t),o&&(r&&t.d(1),o())}),t.o(n)):o&&o()}function zt(t,n){let r=n.token={};function o(t,o,i,l){if(n.token!==r)return;n.resolved=l;let a=n.ctx;void 0!==i&&((a=a.slice())[i]=l);let s=t&&(n.current=t)(a),c=!1;n.block&&(n.blocks?n.blocks.forEach((t,r)=>{r!==o&&t&&(Ut(),D(t,1,1,()=>{n.blocks[r]===t&&(n.blocks[r]=null)}),Wt())}):n.block.d(1),s.c(),T(s,1),s.m(n.mount(),n.anchor),c=!0),n.block=s,n.blocks&&(n.blocks[o]=s),c&&S()}if(Jt(t)){let i=ht();if(t.then(t=>{C(i),o(n.then,1,n.value,t),C(null)},t=>{if(C(i),o(n.catch,2,n.error,t),C(null),!n.hasCatch)throw t}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}}function qt(t,n,r){let o=n.slice(),{resolved:i}=t;t.current===t.then&&(o[t.value]=i),t.current===t.catch&&(o[t.error]=i),t.block.p(o,r)}function he(t,n){let r={},o={},i={$$scope:1},l=t.length;for(;l--;){let a=t[l],s=n[l];if(s){for(let c in a)c in s||(o[c]=1);for(let d in s)i[d]||(r[d]=s[d],i[d]=1);t[l]=s}else for(let f in a)i[f]=1}for(let u in o)u in r||(r[u]=void 0);return r}function It(t){t&&t.c()}function pt(t,n,r,o){let{fragment:i,on_mount:l,on_destroy:a,after_update:s}=t.$$;i&&i.m(n,r),o||ct(()=>{let n=l.map(ut).filter(Dt);a?a.push(...n):W(n),t.$$.on_mount=[]}),s.forEach(ct)}function ot(t,n){let r=t.$$;null!==r.fragment&&(W(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function pe(t,n){-1===t.$$.dirty[0]&&(I.push(t),ue(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function mt(t,n,r,o,i,l,a,s=[-1]){let c=X;C(t);let d=t.$$={fragment:null,ctx:null,props:l,update:v,not_equal:i,bound:yt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:yt(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};a&&a(d.root);let f=!1;if(d.ctx=r?r(t,n.props||{},(n,r,...o)=>{let l=o.length?o[0]:r;return d.ctx&&i(d.ctx[n],d.ctx[n]=l)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](l),f&&pe(t,n)),r}):[],d.update(),f=!0,W(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){Qt();let u=A(n.target);d.fragment&&d.fragment.l(u),u.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&T(t.$$.fragment),pt(t,n.target,n.anchor,n.customElement),te(),S()}C(c)}let _t;"function"==typeof HTMLElement&&(_t=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;for(let n in this.$$.on_disconnect=t.map(ut).filter(Dt),this.$$.slotted)this.appendChild(this.$$.slotted[n])}attributeChangedCallback(t,n,r){this[t]=r}disconnectedCallback(){W(this.$$.on_disconnect)}$destroy(){ot(this,1),this.$destroy=v}$on(t,n){let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){this.$$set&&!Ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class me{$destroy(){ot(this,1),this.$destroy=v}$on(t,n){let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){this.$$set&&!Ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}!function(t){t.Book="book",t.LeftHand="left-hand",t.Calendar="calendar",t.RightHand="right-hand"}(nt||(nt={}));const _e=t=>t==nt.LeftHand||t==nt.RightHand;class q{constructor(t){this.originalLocale=t.original,this.originalText=this.originalLocale&&t[this.originalLocale],this._innerMap=new Map(Object.entries(t))}pickBest(t=[],n=!0){if((0===t.length||n)&&this.originalLocale&&this.originalText)return[this.originalText,this.originalLocale];if(0===t.length){let r=this._innerMap.entries(),{value:[o,i]}=r.next();return[i,o]}let l=[];for(let a of t){if(this._innerMap.has(a))return[this._innerMap.get(a),a];l.push(a.split("-")[0])}for(let[s,c]of this._innerMap.entries())if(l.includes(s.split("-")[0]))return[c,s];return null}}class ge{constructor(t){this.reader=t.getReader(),this.buffer=new Uint8Array(0)}async read(t){for(;this.buffer.byteLength<t;)await this.addToBuffer();let n=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),n}async readSized(){let t=await this.read(4),n=new DataView(t.buffer).getUint32(0,!1);return this.read(n)}async addToBuffer(){let t=(await this.reader.read()).value;if(!t)throw"Unexpected end of data";let n=new Uint8Array(this.buffer.byteLength+t.byteLength);n.set(this.buffer,0),n.set(t,this.buffer.byteLength),this.buffer=n}}class be{constructor(t,n){var r;if("object"!=typeof t||"number"!=typeof t.pxW||"number"!=typeof t.pxH)throw"Missing size attribute";this.isHeteroriented=(r=n)==nt.LeftHand||r==nt.RightHand,this.pxW=t.pxW,this.pxH=t.pxH,this.frontAspectRatio=[this.pxW,this.pxH],t.cmW&&t.cmH&&(this.cmW=Et(t.cmW),this.cmH=Et(t.cmH),this.physical=`${xt(this.cmW)}cm x ${xt(this.cmH)}cm`,this.frontAspectRatio=[this.cmW[0]*this.cmH[1],this.cmW[1]*this.cmH[0]]);let o=Kt(this.frontAspectRatio[0],this.frontAspectRatio[1]);this.frontAspectRatio=[this.frontAspectRatio[0]/o,this.frontAspectRatio[1]/o]}aspectRatio(t){return!this.isHeteroriented||t?this.frontAspectRatio:[this.frontAspectRatio[1],this.frontAspectRatio[0]]}css(t){if(!this.isHeteroriented)return{width:"100%",height:"100%",margin:"0 0"};let[n,r]=this.aspectRatio(t);if(n>r){let o=r/n;return{width:"100%",height:`${100*o}%`,margin:`${50*(1-o)}% 0`}}{let i=n/r;return{width:`${100*i}%`,height:"100%",margin:`0 ${50*(1-i)}%`}}}}const Kt=(t,n)=>n?Kt(n,t%n):t,ye=/^(\d+)\/(\d+)$/,Et=t=>{let n=t.match(ye);if(!n)throw`invalid rational length: ${t}`;return[parseInt(n[1]),parseInt(n[2])]},xt=t=>(t[0]/t[1]).toFixed(1),ke=t=>{if(200!==t.status)throw"Unable to load file";return t},we=async t=>{let n=await fetch(t).then(t=>ke(t).body);if(null===n)throw"Unable to retrieve postcard";let r=new ge(n),o={},i=await r.read(8);if("postcard"!==new TextDecoder().decode(i))throw"Not a postcard file";let l=await r.read(3),a=new DataView(l.buffer),s=a.getUint8(0),c=a.getUint8(1),d=a.getUint8(2);o.version=`${s}.${c}.${d}`;let f=await r.readSized(),u=new TextDecoder("utf-8");return o.metadata=ve(JSON.parse(u.decode(f))),o.frontData=r.readSized(),o.backData=o.frontData.then(()=>r.readSized()),o},ve=t=>{let{flip:n,frontSize:r,sentOn:o,front:i,back:l,context:a,...s}=t;return{...s,flip:n,sentOn:o&&new Date(o),size:new be(r,n),front:i&&{description:i.description&&new q(i.description),transcription:i.transcription&&new q(i.transcription),secrets:i.secrets},back:l&&{description:l.description&&new q(l.description),transcription:l.transcription&&new q(l.transcription),secrets:l.secrets},context:a&&{author:a.author,description:a.description&&new q(a.description)}}};function $e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e,nt,at={exports:{}},Vt={},H={},gt={};!function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function t(n,r){let o=RegExp(n,"g");return t=>{if("string"!=typeof t)throw TypeError("expected an argument of type string, but got ".concat(typeof styleObj));return t.match(o)?t.replace(o,r):t}};t.default=n}(gt),Object.defineProperty(H,"__esModule",{value:!0}),H.snakeToKebab=H.camelToKebab=void 0;var Xt=Ee(gt);function Ee(t){return t&&t.__esModule?t:{default:t}}const xe=(0,Xt.default)(/[A-Z]/,t=>"-".concat(t.toLowerCase()));H.camelToKebab=xe;const Oe=(0,Xt.default)(/_/,()=>"-");H.snakeToKebab=Oe,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=H,r=function t(r,o=n.camelToKebab){if(!r||"object"!=typeof r||Array.isArray(r))throw TypeError("expected an argument of type object, but got ".concat(typeof r));return Object.keys(r).map(t=>"".concat(o(t),": ").concat(r[t],";")).join(`
`)};t.default=r}(Vt),function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"createParser",{enumerable:!0,get:function(){return o.default}}),n.parsers=n.default=void 0;var r=l(Vt),o=l(gt),i=function t(n){if(n&&n.__esModule)return n;var r={};if(null!=n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(n,o):{};i.get||i.set?Object.defineProperty(r,o,i):r[o]=n[o]}}return r.default=n,r}(H);function l(t){return t&&t.__esModule?t:{default:t}}function a(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}n.parsers=i;var s=r.default;n.default=s,t.exports=r.default,t.exports.createParser=o.default,t.exports.parsers=function t(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),i.forEach(function(t){a(n,t,o[t])})}return n}({},i)}(at,at.exports);const Pe=$e(at.exports);var ft=((e=ft||{}).FrontOnly="front",e.BackOnly="back",e.BothFrontFirst="front back",e.BothBackFirst="back front",e);const K=(t,n=!0)=>t.pickBest(Navigator.languages,n),Re=t=>{let n="",r;if(t.description){let[o,i]=K(t.description,!1);n+=o,r=i}if(t.transcription){let[l,a]=K(t.transcription,!0);n.length>0&&(n+=`
`),n+=l,r||(r=a)}return[n,r]},Z=t=>t.toISOString().replace(/T.*$/,""),Ae=t=>{let n=[];for(let r of t)n.push(`${r[0]},${r[1]}`);return n.join(" ")};function Ce(t){let n,r,o,i,l,a,s,c,d=[{width:"128"},{viewBox:"0 0 150.3 107.3"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],f={};for(let u=0;u<d.length;u+=1)f=V(f,d[u]);return{c(){n=x("svg"),r=x("g"),o=x("rect"),i=x("rect"),l=x("path"),a=x("path"),s=x("path"),c=x("path"),this.h()},l(t){var d=A(n=N(t,"svg",{width:!0,viewBox:!0,xmlns:!0}));r=N(d,"g",{transform:!0,style:!0});var f=A(r);o=N(f,"rect",{style:!0,width:!0,height:!0,x:!0,y:!0,rx:!0,ry:!0}),A(o).forEach(_),i=N(f,"rect",{style:!0,width:!0,height:!0,x:!0,y:!0,rx:!0,ry:!0}),A(i).forEach(_),f.forEach(_),l=N(d,"path",{style:!0,d:!0,transform:!0}),A(l).forEach(_),a=N(d,"path",{style:!0,d:!0,transform:!0}),A(a).forEach(_),s=N(d,"path",{style:!0,d:!0,transform:!0}),A(s).forEach(_),c=N(d,"path",{style:!0,d:!0,transform:!0}),A(c).forEach(_),d.forEach(_),this.h()},h(){m(o,"fill","#fff"),m(o,"stroke-width","2.3"),m(o,"stroke-linecap","round"),m(o,"stroke-linejoin","round"),m(o,"stroke-dasharray","none"),m(o,"stroke-opacity","1"),h(o,"width","148"),h(o,"height","105"),h(o,"x","51.15"),h(o,"y","51.15"),h(o,"rx","1"),h(o,"ry","1"),m(i,"fill","#fff"),m(i,"stroke-width","2.5"),m(i,"stroke-linecap","round"),m(i,"stroke-linejoin","round"),m(i,"stroke-dasharray","none"),m(i,"stroke-opacity","1"),h(i,"width","21"),h(i,"height","24"),h(i,"x","168.15"),h(i,"y","61.15"),h(i,"rx","1"),h(i,"ry","1"),h(r,"transform","translate(-50 -50)"),m(r,"fill","#fff"),m(l,"fill","none"),m(l,"stroke-width","2.5"),m(l,"stroke-linecap","round"),m(l,"stroke-linejoin","round"),m(l,"stroke-dasharray","none"),m(l,"stroke-opacity","1"),h(l,"d","m86.883 93.636 7.5 7.5m0-7.5-7.5 7.5"),h(l,"transform","translate(3.267 -32.486)"),m(a,"fill","none"),m(a,"stroke-width","2.5"),m(a,"stroke-linecap","round"),m(a,"stroke-linejoin","round"),m(a,"stroke-dasharray","none"),m(a,"stroke-opacity","1"),h(a,"d","m86.883 93.636 7.5 7.5m0-7.5-7.5 7.5"),h(a,"transform","translate(-34.233 -32.486)"),m(s,"fill","none"),m(s,"stroke-width","2.5"),m(s,"stroke-linecap","round"),m(s,"stroke-linejoin","round"),m(s,"stroke-dasharray","none"),m(s,"stroke-opacity","1"),h(s,"d","M90.633 109.317h30v3.75s0 3.75-3.75 3.75-3.75-3.75-3.75-3.75v-3.75"),h(s,"transform","translate(-30.483 -33.167)"),m(c,"fill","none"),m(c,"stroke-width","2.5"),m(c,"stroke-linecap","round"),m(c,"stroke-linejoin","round"),m(c,"stroke-dasharray","none"),m(c,"stroke-opacity","1"),h(c,"d","M125.5 67.679s3.75-3.75 7.5-3.75 7.5 3.75 7.5 3.75 3.75 3.75 7.5 3.75 7.5-3.75 7.5-3.75m-30 7.5s3.75-3.75 7.5-3.75 7.5 3.75 7.5 3.75 3.75 3.75 7.5 3.75 7.5-3.75 7.5-3.75"),h(c,"transform","translate(-29.85 -48.279)"),kt(n,f)},m(t,d){re(t,n,d),B(n,r),B(r,o),B(r,i),B(n,l),B(n,a),B(n,s),B(n,c)},p(t,[r]){kt(n,f=he(d,[{width:"128"},{viewBox:"0 0 150.3 107.3"},{xmlns:"http://www.w3.org/2000/svg"},1&r&&t[0]]))},i:v,o:v,d(t){t&&_(n)}}}function Se(t,n,r){return t.$$set=t=>{r(0,n=V(V({},n),et(t)))},[n=et(n)]}class Yt extends me{constructor(t){super(),mt(this,t,Se,Ce,dt,{})}}function Ot(t,n,r){let o=t.slice();return o[21]=n[r],o[23]=r,o}function Pt(t,n,r){let o=t.slice();return o[25]=n[r],o}function Te(t){let n,r,o,i;return o=new Yt({}),{c(){n=E("div"),r=E("div"),It(o.$$.fragment),h(r,"class","error"),h(n,"class","postcard error")},m(t,l){g(t,n,l),k(n,r),pt(o,r,null),i=!0},p:v,i(t){i||(T(o.$$.fragment,t),i=!0)},o(t){D(o.$$.fragment,t),i=!1},d(t){t&&_(n),ot(o)}}}function Le(t){let n,r,o=t[2],i=[];for(let l=0;l<o.length;l+=1)i[l]=At(Ot(t,o,l));let a=t=>D(i[t],1,1,()=>{i[t]=null});return{c(){n=E("div");for(let r=0;r<i.length;r+=1)i[r].c();h(n,"class","postcard flip-"+t[20].flip),wt(n,"flipped",t[0])},m(t,o){g(t,n,o);for(let l=0;l<i.length;l+=1)i[l].m(n,null);r=!0},p(t,l){if(62&l){o=t[2];let s;for(s=0;s<o.length;s+=1){let c=Ot(t,o,s);i[s]?(i[s].p(c,l),T(i[s],1)):(i[s]=At(c),i[s].c(),T(i[s],1),i[s].m(n,null))}for(Ut(),s=o.length;s<i.length;s+=1)a(s);Wt()}(!r||1&l)&&wt(n,"flipped",t[0])},i(t){if(!r){for(let n=0;n<o.length;n+=1)T(i[n]);r=!0}},o(t){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)D(i[n]);r=!1},d(t){t&&_(n),jt(i,t)}}}function Ne(t){let n,r,o;return r=new Yt({}),{c(){n=E("div"),It(r.$$.fragment),h(n,"class","error")},m(t,i){g(t,n,i),pt(r,n,null),o=!0},p:v,i(t){o||(T(r.$$.fragment,t),o=!0)},o(t){D(r.$$.fragment,t),o=!1},d(t){t&&_(n),ot(r)}}}function Be(t){let n,r,o,i,l=t[24].secrets.length>0&&Me(t);return{c(){n=E("img"),o=O(),l&&l.c(),i=it(),Zt(n.src,r=t[24].src)||h(n,"src",r),h(n,"alt",t[24].description[0]),h(n,"lang",t[24].description[1])},m(t,r){g(t,n,r),g(t,o,r),l&&l.m(t,r),g(t,i,r)},p(t,n){t[24].secrets.length>0&&l.p(t,n)},i:v,o:v,d(t){t&&_(n),t&&_(o),l&&l.d(t),t&&_(i)}}}function Me(t){let n,r,o,i,l,a,s,c=t[24].secrets,d=[];for(let f=0;f<c.length;f+=1)d[f]=Rt(Pt(t,c,f));return{c(){n=x("svg"),r=x("defs"),o=x("linearGradient"),i=x("stop"),l=x("stop"),a=x("animate"),s=x("animate");for(let t=0;t<d.length;t+=1)d[t].c();h(i,"offset","0%"),h(i,"stop-color","rgba(255,255,255,0.2)"),h(l,"offset","100%"),h(l,"stop-color","rgba(200,200,200,0.4)"),h(a,"attributeName","x1"),h(a,"dur","700ms"),h(a,"from","0"),h(a,"to","0.04"),h(a,"repeatCount","indefinite"),h(s,"attributeName","x2"),h(s,"dur","700ms"),h(s,"from","0.01"),h(s,"to","0.05"),h(s,"repeatCount","indefinite"),h(o,"id","secret"),h(o,"x1","0"),h(o,"x2","0.01"),h(o,"y1","0.01"),h(o,"y2","0"),h(o,"gradientUnits","userSpaceOnUse"),h(o,"spreadMethod","reflect"),h(o,"vector-effect","non-scaling-size"),h(n,"class","secrets"),h(n,"viewBox","0 0 1 1")},m(t,c){g(t,n,c),k(n,r),k(r,o),k(o,i),k(o,l),k(o,a),k(o,s);for(let f=0;f<d.length;f+=1)d[f].m(n,null)},p(t,r){if(4&r){c=t[24].secrets;let o;for(o=0;o<c.length;o+=1){let i=Pt(t,c,o);d[o]?d[o].p(i,r):(d[o]=Rt(i),d[o].c(),d[o].m(n,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=c.length}},d(t){t&&_(n),jt(d,t)}}}function Rt(t){let n;return{c(){h(n=x("polygon"),"points",Ae(t[25])),m(n,"fill","url(#secret)"),m(n,"vector-effect","non-scaling-size")},m(t,r){g(t,n,r)},p:v,d(t){t&&_(n)}}}function De(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function At(t){let n,r,o,i,l,a={ctx:t,current:null,token:null,hasCatch:!0,pending:De,then:Be,catch:Ne,value:24,error:28,blocks:[,,,]};return zt(t[21],a),{c(){n=E("div"),a.block.c(),r=O(),h(n,"class","side"+(t[4]?" flippable":"")),h(n,"style",!t[3](t[23])&&Pe(t[20].size.css(!1)))},m(s,c){g(s,n,c),a.block.m(n,a.anchor=null),a.mount=()=>n,a.anchor=r,k(n,r),o=!0,i||(l=ie(n,"click",t[5]),i=!0)},p(n,r){qt(a,t=n,r)},i(t){o||(T(a.block),o=!0)},o(t){for(let n=0;n<3;n+=1){let r=a.blocks[n];D(r)}o=!1},d(t){t&&_(n),a.block.d(),a.token=null,a=null,i=!1,l()}}}function He(t){let n;return{c(){h(n=E("div"),"class","postcard loading")},m(t,r){g(t,n,r)},p:v,i:v,o:v,d(t){t&&_(n)}}}function je(t){let n,r,o={ctx:t,current:null,token:null,hasCatch:!0,pending:He,then:Le,catch:Te,value:20,error:28,blocks:[,,,]};return zt(t[1],o),{c(){n=it(),o.block.c(),this.c=v},m(t,i){g(t,n,i),o.block.m(t,o.anchor=i),o.mount=()=>n.parentNode,o.anchor=n,r=!0},p(n,[r]){qt(o,t=n,r)},i(t){r||(T(o.block),r=!0)},o(t){for(let n=0;n<3;n+=1){let i=o.blocks[n];D(i)}r=!1},d(t){t&&_(n),o.block.d(t),o.token=null,o=null}}}function Fe(t,n,r){let{src:o}=n,{name:i}=n,{show:l=ft.BothFrontFirst}=n,a=i&&document.querySelectorAll(`postcard-display[name="${i}"`).length;a&&a>1&&console.warn(`There are ${a} postcards with name="${i}". Any <postcard-info for="${i}"> elements will be attached to the first one only.`);let s=l.split(" "),c=!1,d=ht(),f=ae(),u=(t,n)=>{f(t,n),d.dispatchEvent&&d.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))},p=t=>URL.createObjectURL(new Blob([t])),$=t=>{throw console.error(t),t},b=t=>{let[n,r]=t.size.aspectRatio(!0);d.style.setProperty("--frontAR",`${n}/${r}`),d.style.setProperty("--backAR",t.size.isHeteroriented?"1/1":`${n}/${r}`),y()},y=()=>d.style.aspectRatio=U()?"var(--frontAR)":"var(--backAR)",w=we(o),R=w.then(({metadata:t})=>t).catch($);R.then(t=>{b(t),u("postcard-loaded",{name:i,metadata:t,showingSide:z()})});let L=s.map(t=>w.then(n=>n[`${t}Data`].then(t=>({metadata:n.metadata,bytes:t}))).then(({metadata:n,bytes:r})=>({src:p(r),secrets:n[t].secrets||[],description:Re(n[t])})).catch($)),z=(t=c?1:0)=>s[t],U=(t=c?1:0)=>z(t)===ft.FrontOnly,F=2===s.length,Y=F&&(()=>{r(0,c=!c),y(),u("postcard-flipped",{name:i,showingSide:z()})});return t.$$set=t=>{"src"in t&&r(6,o=t.src),"name"in t&&r(7,i=t.name),"show"in t&&r(8,l=t.show)},[c,R,L,U,F,Y,o,i,l]}class Ue extends _t{constructor(t){super(),this.shadowRoot.innerHTML="<style>:host{display:block;width:100%;height:100%;transition:aspect-ratio 1s ease-out}.postcard{position:relative;perspective:1000px;display:inline-block;width:100%;height:100%}.side{width:100%;height:100%;position:absolute;backface-visibility:hidden;transition:transform 1s ease-out;transform-style:preserve-3d;filter:drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.45))}.side.flippable{cursor:pointer}.side>*{width:100%;height:100%}.side .secrets{position:absolute;top:0;left:0}.side .secrets polygon{opacity:0;transition:opacity 0.2s ease-in-out}.side .secrets polygon:hover{opacity:1}.side .error{box-sizing:border-box;width:100%;height:100%;border-radius:2%;border:2px dashed rgb(213, 161, 161);background-color:#f8f7f6;padding:2% 4%;display:flex;align-items:center;justify-content:center;flex-direction:column}.side .error svg{max-width:128px;stroke:rgb(213, 161, 161)}.postcard.flipped.flip-book .side:first-child{transform:rotateY(180deg)}.postcard:not(.flipped).flip-book .side:nth-child(2){transform:rotateY(180deg)}.postcard.flipped.flip-book .side:nth-child(2){transform:rotateY(360deg)}.postcard.flipped.flip-left-hand .side:first-child{transform:rotate3d(1, -1, 0, 180deg)}.postcard:not(.flipped).flip-left-hand .side:nth-child(2){transform:rotate3d(1, -1, 0, -180deg)}.postcard.flipped.flip-left-hand .side:nth-child(2){transform:rotate3d(1, -1, 0, 0deg)}.postcard.flipped.flip-calendar .side:first-child{transform:rotateX(180deg)}.postcard:not(.flipped).flip-calendar .side:nth-child(2){transform:rotateX(180deg)}.postcard.flipped.flip-calendar .side:nth-child(2){transform:rotateX(360deg)}.postcard.flipped.flip-right-hand .side:first-child{transform:rotate3d(1, 1, 0, 180deg)}.postcard:not(.flipped).flip-right-hand .side:nth-child(2){transform:rotate3d(1, 1, 0, -180deg)}.postcard.flipped.flip-right-hand .side:nth-child(2){transform:rotate3d(1, 1, 0, 0deg)}</style>",mt(this,{target:this.shadowRoot,props:Ft(this.attributes),customElement:!0},Fe,je,dt,{src:6,name:7,show:8},null),t&&(t.target&&g(t.target,this,t.anchor),t.props&&(this.$set(t.props),S()))}static get observedAttributes(){return["src","name","show"]}get src(){return this.$$.ctx[6]}set src(t){this.$$set({src:t}),S()}get name(){return this.$$.ctx[7]}set name(t){this.$$set({name:t}),S()}get show(){return this.$$.ctx[8]}set show(t){this.$$set({show:t}),S()}}function Ct(t){let n,r,o,i=t[5][0]+"",l,a;return{c(){n=E("p"),(r=E("strong")).textContent="Context:",o=O(),l=P(i),h(n,"lang",a=t[5][1])},m(t,i){g(t,n,i),k(n,r),k(n,o),k(n,l)},p(t,r){32&r&&i!==(i=t[5][0]+"")&&j(l,i),32&r&&a!==(a=t[5][1])&&h(n,"lang",a)},d(t){t&&_(n)}}}function St(t){let n,r,o,i;return{c(){n=E("p"),(r=E("strong")).textContent="Physical size (front):",o=O(),i=P(t[4])},m(t,l){g(t,n,l),k(n,r),k(n,o),k(n,i)},p(t,n){16&n&&j(i,t[4])},d(t){t&&_(n)}}}function Tt(t){var n;let r,o,i,l,a=Z(null==(n=t[0])?void 0:n.sentOn)+"",s,c;return{c(){var n;r=E("p"),(o=E("strong")).textContent="Date:",i=O(),l=E("time"),s=P(a),h(l,"datetime",c=Z(null==(n=t[0])?void 0:n.sentOn))},m(t,n){g(t,r,n),k(r,o),k(r,i),k(r,l),k(l,s)},p(t,n){var r,o;1&n&&a!==(a=Z(null==(r=t[0])?void 0:r.sentOn)+"")&&j(s,a),1&n&&c!==(c=Z(null==(o=t[0])?void 0:o.sentOn))&&h(l,"datetime",c)},d(t){t&&_(r)}}}function Lt(t){let n,r,o,i=t[0].location.name+"",l;return{c(){n=E("p"),(r=E("strong")).textContent="Location:",o=O(),l=P(i)},m(t,i){g(t,n,i),k(n,r),k(n,o),k(n,l)},p(t,n){1&n&&i!==(i=t[0].location.name+"")&&j(l,i)},d(t){t&&_(n)}}}function Nt(t){let n,r,o,i,l,a=t[3]&&Bt(t),s=t[2]&&Mt(t);return{c(){n=P("On the "),r=P(t[1]),o=P(`:

  `),a&&a.c(),i=O(),s&&s.c(),l=it()},m(t,c){g(t,n,c),g(t,r,c),g(t,o,c),a&&a.m(t,c),g(t,i,c),s&&s.m(t,c),g(t,l,c)},p(t,n){2&n&&j(r,t[1]),t[3]?a?a.p(t,n):((a=Bt(t)).c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),t[2]?s?s.p(t,n):((s=Mt(t)).c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(t){t&&_(n),t&&_(r),t&&_(o),a&&a.d(t),t&&_(i),s&&s.d(t),t&&_(l)}}}function Bt(t){let n,r,o,i=t[3][0]+"",l,a;return{c(){n=E("p"),(r=E("strong")).textContent="Description:",o=O(),l=P(i),h(n,"lang",a=t[3][1])},m(t,i){g(t,n,i),k(n,r),k(n,o),k(n,l)},p(t,r){8&r&&i!==(i=t[3][0]+"")&&j(l,i),8&r&&a!==(a=t[3][1])&&h(n,"lang",a)},d(t){t&&_(n)}}}function Mt(t){let n,r,o,i=t[2][0]+"",l,a;return{c(){n=E("p"),(r=E("strong")).textContent="Transcription:",o=O(),l=P(i),h(n,"lang",a=t[2][1])},m(t,i){g(t,n,i),k(n,r),k(n,o),k(n,l)},p(t,r){4&r&&i!==(i=t[2][0]+"")&&j(l,i),4&r&&a!==(a=t[2][1])&&h(n,"lang",a)},d(t){t&&_(n)}}}function We(t){let n,r;return{c(){n=E("a"),r=P("Download postcard"),h(n,"href",t[7].src)},m(t,o){g(t,n,o),k(n,r)},p:v,d(t){t&&_(n)}}}function ze(t){var n,r,o;let i,l,a,s,c,d,f=t[5]&&Ct(t),u=t[4]&&St(t),p=(null==(n=t[0])?void 0:n.sentOn)&&Tt(t),$=(null==(o=null==(r=t[0])?void 0:r.location)?void 0:o.name)&&Lt(t),b=(t[3]||t[2])&&Nt(t),y=t[6]&&We(t);return{c(){f&&f.c(),i=O(),u&&u.c(),l=O(),p&&p.c(),a=O(),$&&$.c(),s=O(),b&&b.c(),c=O(),y&&y.c(),d=it(),this.c=v},m(t,n){f&&f.m(t,n),g(t,i,n),u&&u.m(t,n),g(t,l,n),p&&p.m(t,n),g(t,a,n),$&&$.m(t,n),g(t,s,n),b&&b.m(t,n),g(t,c,n),y&&y.m(t,n),g(t,d,n)},p(t,[n]){var r,o,d;t[5]?f?f.p(t,n):((f=Ct(t)).c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),t[4]?u?u.p(t,n):((u=St(t)).c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null),null!=(r=t[0])&&r.sentOn?p?p.p(t,n):((p=Tt(t)).c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null),null!=(d=null==(o=t[0])?void 0:o.location)&&d.name?$?$.p(t,n):(($=Lt(t)).c(),$.m(s.parentNode,s)):$&&($.d(1),$=null),t[3]||t[2]?b?b.p(t,n):((b=Nt(t)).c(),b.m(c.parentNode,c)):b&&(b.d(1),b=null),t[6]&&y.p(t,n)},i:v,o:v,d(t){f&&f.d(t),t&&_(i),u&&u.d(t),t&&_(l),p&&p.d(t),t&&_(a),$&&$.d(t),t&&_(s),b&&b.d(t),t&&_(c),y&&y.d(t),t&&_(d)}}}function qe(t,n,r){let o,i,l,a,s,{downloadable:c=!1}=n,{for:d}=n,f="boolean"!=typeof c||c,u=document.querySelector(`postcard-display[name="${d}"`);u||console.error(`No element <postcard-display name="${d}"> found to attach to from <postcard-info for="${d}">.`);let p,$;return null==u||u.addEventListener("postcard-loaded",t=>{r(0,p=t.detail.metadata),r(1,$=t.detail.showingSide)}),null==u||u.addEventListener("postcard-flipped",t=>r(1,$=t.detail.showingSide)),t.$$set=t=>{r(11,n=V(V({},n),et(t))),"downloadable"in t&&r(8,c=t.downloadable)},t.$$.update=()=>{var n,c;1&t.$$.dirty&&r(5,o=(null==(n=null==p?void 0:p.context)?void 0:n.description)&&K(p.context.description)),1&t.$$.dirty&&r(4,i=null==(c=null==p?void 0:p.size)?void 0:c.physical),3&t.$$.dirty&&r(9,l=p&&p[$]),512&t.$$.dirty&&r(3,a=(null==l?void 0:l.description)&&K(l.description,!1)),512&t.$$.dirty&&r(2,s=(null==l?void 0:l.transcription)&&K(l.transcription,!0))},n=et(n),[p,$,s,a,i,o,f,u,c,l]}customElements.define("postcard-display",Ue);class Ie extends _t{constructor(t){super(),mt(this,{target:this.shadowRoot,props:Ft(this.attributes),customElement:!0},qe,ze,dt,{downloadable:8},null),t&&(t.target&&g(t.target,this,t.anchor),t.props&&(this.$set(t.props),S()))}static get observedAttributes(){return["downloadable"]}get downloadable(){return this.$$.ctx[8]}set downloadable(t){this.$$set({downloadable:t}),S()}}customElements.define("postcard-info",Ie);