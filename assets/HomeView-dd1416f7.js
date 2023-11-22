import{r as S,o as Y,a as v,c as _,b as c,t as C,F as U,d as F,w as A,v as Z,e as N,n as $,f as ee,g as te}from"./index-f701d5ab.js";function ne(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const s=document.implementation.createHTMLDocument(),n=s.createElement("base"),r=s.createElement("a");return s.head.appendChild(n),s.body.appendChild(r),t&&(n.href=t),r.href=e,r.href}const se=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function y(e){const t=[];for(let s=0,n=e.length;s<n;s++)t.push(e[s]);return t}function R(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function re(e){const t=R(e,"border-left-width"),s=R(e,"border-right-width");return e.clientWidth+t+s}function ie(e){const t=R(e,"border-top-width"),s=R(e,"border-bottom-width");return e.clientHeight+t+s}function W(e,t={}){const s=t.width||re(e),n=t.height||ie(e);return{width:s,height:n}}function le(){let e,t;try{t=process}catch{}const s=t&&t.env?t.env.devicePixelRatio:null;return s&&(e=parseInt(s,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const m=16384;function ce(e){(e.width>m||e.height>m)&&(e.width>m&&e.height>m?e.width>e.height?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m):e.width>m?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m))}function oe(e,t={}){return e.toBlob?new Promise(s=>{e.toBlob(s,t.type?t.type:"image/png",t.quality?t.quality:1)}):new Promise(s=>{const n=window.atob(e.toDataURL(t.type?t.type:void 0,t.quality?t.quality:void 0).split(",")[1]),r=n.length,i=new Uint8Array(r);for(let l=0;l<r;l+=1)i[l]=n.charCodeAt(l);s(new Blob([i],{type:t.type?t.type:"image/png"}))})}function x(e){return new Promise((t,s)=>{const n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=s,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function ae(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function ue(e,t,s){const n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return r.setAttribute("width",`${t}`),r.setAttribute("height",`${s}`),r.setAttribute("viewBox",`0 0 ${t} ${s}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),r.appendChild(i),i.appendChild(e),ae(r)}const p=(e,t)=>{if(e instanceof t)return!0;const s=Object.getPrototypeOf(e);return s===null?!1:s.constructor.name===t.name||p(s,t)};function de(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function he(e){return y(e).map(t=>{const s=e.getPropertyValue(t),n=e.getPropertyPriority(t);return`${t}: ${s}${n?" !important":""};`}).join(" ")}function fe(e,t,s){const n=`.${e}:${t}`,r=s.cssText?de(s):he(s);return document.createTextNode(`${n}{${r}}`)}function I(e,t,s){const n=window.getComputedStyle(e,s),r=n.getPropertyValue("content");if(r===""||r==="none")return;const i=se();try{t.className=`${t.className} ${i}`}catch{return}const l=document.createElement("style");l.appendChild(fe(i,s,n)),t.appendChild(l)}function ge(e,t){I(e,t,":before"),I(e,t,":after")}const O="application/font-woff",j="image/jpeg",pe={woff:O,woff2:O,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:j,jpeg:j,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function me(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function T(e){const t=me(e).toLowerCase();return pe[t]||""}function we(e){return e.split(/,/)[1]}function P(e){return e.search(/^(data:)/)!==-1}function q(e,t){return`data:${t};base64,${e}`}async function z(e,t,s){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const r=await n.blob();return new Promise((i,l)=>{const o=new FileReader;o.onerror=l,o.onloadend=()=>{try{i(s({res:n,result:o.result}))}catch(a){l(a)}},o.readAsDataURL(r)})}const L={};function be(e,t,s){let n=e.replace(/\?.*/,"");return s&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function D(e,t,s){const n=be(e,t,s.includeQueryParams);if(L[n]!=null)return L[n];s.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let r;try{const i=await z(e,s.fetchRequestInit,({res:l,result:o})=>(t||(t=l.headers.get("Content-Type")||""),we(o)));r=q(i,t)}catch(i){r=s.imagePlaceholder||"";let l=`Failed to fetch resource: ${e}`;i&&(l=typeof i=="string"?i:i.message),l&&console.warn(l)}return L[n]=r,r}async function ye(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):x(t)}async function ve(e,t){if(e.currentSrc){const i=document.createElement("canvas"),l=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,l==null||l.drawImage(e,0,0,i.width,i.height);const o=i.toDataURL();return x(o)}const s=e.poster,n=T(s),r=await D(s,n,t);return x(r)}async function _e(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await k(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function Se(e,t){return p(e,HTMLCanvasElement)?ye(e):p(e,HTMLVideoElement)?ve(e,t):p(e,HTMLIFrameElement)?_e(e):e.cloneNode(!1)}const Ce=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Ee(e,t,s){var n,r;let i=[];return Ce(e)&&e.assignedNodes?i=y(e.assignedNodes()):p(e,HTMLIFrameElement)&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?i=y(e.contentDocument.body.childNodes):i=y(((r=e.shadowRoot)!==null&&r!==void 0?r:e).childNodes),i.length===0||p(e,HTMLVideoElement)||await i.reduce((l,o)=>l.then(()=>k(o,s)).then(a=>{a&&t.appendChild(a)}),Promise.resolve()),t}function Re(e,t){const s=t.style;if(!s)return;const n=window.getComputedStyle(e);n.cssText?(s.cssText=n.cssText,s.transformOrigin=n.transformOrigin):y(n).forEach(r=>{let i=n.getPropertyValue(r);r==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),p(e,HTMLIFrameElement)&&r==="display"&&i==="inline"&&(i="block"),r==="d"&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),s.setProperty(r,i,n.getPropertyPriority(r))})}function xe(e,t){p(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),p(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function ke(e,t){if(p(e,HTMLSelectElement)){const s=t,n=Array.from(s.children).find(r=>e.value===r.getAttribute("value"));n&&n.setAttribute("selected","")}}function $e(e,t){return p(t,Element)&&(Re(e,t),ge(e,t),xe(e,t),ke(e,t)),t}async function Le(e,t){const s=e.querySelectorAll?e.querySelectorAll("use"):[];if(s.length===0)return e;const n={};for(let i=0;i<s.length;i++){const o=s[i].getAttribute("xlink:href");if(o){const a=e.querySelector(o),b=document.querySelector(o);!a&&b&&!n[o]&&(n[o]=await k(b,t,!0))}}const r=Object.values(n);if(r.length){const i="http://www.w3.org/1999/xhtml",l=document.createElementNS(i,"svg");l.setAttribute("xmlns",i),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const o=document.createElementNS(i,"defs");l.appendChild(o);for(let a=0;a<r.length;a++)o.appendChild(r[a]);e.appendChild(l)}return e}async function k(e,t,s){return!s&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>Se(n,t)).then(n=>Ee(e,n,t)).then(n=>$e(e,n)).then(n=>Le(n,t))}const G=/url\((['"]?)([^'"]+?)\1\)/g,Pe=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Te=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function De(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Ue(e){const t=[];return e.replace(G,(s,n,r)=>(t.push(r),s)),t.filter(s=>!P(s))}async function Fe(e,t,s,n,r){try{const i=s?ne(t,s):t,l=T(t);let o;if(r){const a=await r(i);o=q(a,l)}else o=await D(i,l,n);return e.replace(De(t),`$1${o}$3`)}catch{}return e}function Ae(e,{preferredFontFormat:t}){return t?e.replace(Te,s=>{for(;;){const[n,,r]=Pe.exec(s)||[];if(!r)return"";if(r===t)return`src: ${n};`}}):e}function X(e){return e.search(G)!==-1}async function J(e,t,s){if(!X(e))return e;const n=Ae(e,s);return Ue(n).reduce((i,l)=>i.then(o=>Fe(o,l,t,s)),Promise.resolve(n))}async function E(e,t,s){var n;const r=(n=t.style)===null||n===void 0?void 0:n.getPropertyValue(e);if(r){const i=await J(r,null,s);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function Ie(e,t){await E("background",e,t)||await E("background-image",e,t),await E("mask",e,t)||await E("mask-image",e,t)}async function Oe(e,t){const s=p(e,HTMLImageElement);if(!(s&&!P(e.src))&&!(p(e,SVGImageElement)&&!P(e.href.baseVal)))return;const n=s?e.src:e.href.baseVal,r=await D(n,T(n),t);await new Promise((i,l)=>{e.onload=i,e.onerror=l;const o=e;o.decode&&(o.decode=i),o.loading==="lazy"&&(o.loading="eager"),s?(e.srcset="",e.src=r):e.href.baseVal=r})}async function je(e,t){const n=y(e.childNodes).map(r=>K(r,t));await Promise.all(n).then(()=>e)}async function K(e,t){p(e,Element)&&(await Ie(e,t),await Oe(e,t),await je(e,t))}function Ve(e,t){const{style:s}=e;t.backgroundColor&&(s.backgroundColor=t.backgroundColor),t.width&&(s.width=`${t.width}px`),t.height&&(s.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(r=>{s[r]=n[r]}),e}const V={};async function B(e){let t=V[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},V[e]=t,t}async function M(e,t){let s=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(s.match(/url\([^)]+\)/g)||[]).map(async l=>{let o=l.replace(n,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),z(o,t.fetchRequestInit,({result:a})=>(s=s.replace(l,`url(${a})`),[l,a]))});return Promise.all(i).then(()=>s)}function H(e){if(e==null)return[];const t=[],s=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(s,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const a=r.exec(n);if(a===null)break;t.push(a[0])}n=n.replace(r,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,l="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(l,"gi");for(;;){let a=i.exec(n);if(a===null){if(a=o.exec(n),a===null)break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;t.push(a[0])}return t}async function Be(e,t){const s=[],n=[];return e.forEach(r=>{if("cssRules"in r)try{y(r.cssRules||[]).forEach((i,l)=>{if(i.type===CSSRule.IMPORT_RULE){let o=l+1;const a=i.href,b=B(a).then(w=>M(w,t)).then(w=>H(w).forEach(f=>{try{r.insertRule(f,f.startsWith("@import")?o+=1:r.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:f,error:h})}})).catch(w=>{console.error("Error loading remote css",w.toString())});n.push(b)}})}catch(i){const l=e.find(o=>o.href==null)||document.styleSheets[0];r.href!=null&&n.push(B(r.href).then(o=>M(o,t)).then(o=>H(o).forEach(a=>{l.insertRule(a,r.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(e.forEach(r=>{if("cssRules"in r)try{y(r.cssRules||[]).forEach(i=>{s.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${r.href}`,i)}}),s))}function Me(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>X(t.style.getPropertyValue("src")))}async function He(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const s=y(e.ownerDocument.styleSheets),n=await Be(s,t);return Me(n)}async function We(e,t){const s=await He(e,t);return(await Promise.all(s.map(r=>{const i=r.parentStyleSheet?r.parentStyleSheet.href:null;return J(r.cssText,i,t)}))).join(`
`)}async function qe(e,t){const s=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await We(e,t);if(s){const n=document.createElement("style"),r=document.createTextNode(s);n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function ze(e,t={}){const{width:s,height:n}=W(e,t),r=await k(e,t,!0);return await qe(r,t),await K(r,t),Ve(r,t),await ue(r,s,n)}async function Ge(e,t={}){const{width:s,height:n}=W(e,t),r=await ze(e,t),i=await x(r),l=document.createElement("canvas"),o=l.getContext("2d"),a=t.pixelRatio||le(),b=t.canvasWidth||s,w=t.canvasHeight||n;return l.width=b*a,l.height=w*a,t.skipAutoScale||ce(l),l.style.width=`${b}`,l.style.height=`${w}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,l.width,l.height)),o.drawImage(i,0,0,l.width,l.height),l}async function Xe(e,t={}){const s=await Ge(e,t);return await oe(s)}const Je={class:"grid-cols:2 gap:32 p:32"},Ke={class:"flex flex:col jc:space-between ai:center"},Qe={class:"w:600 mx:auto"},Ye={class:"bg:linear-gradient(135deg,rgba(255,255,255,1),rgba(0,0,0,0.3)) t:center p:16"},Ze=N('<p class="fg:white bg:red f:32 f:bold inline-block p:4|16 ls:1.0">台灣村 BA</p><div class="flex jc:center ai:center mb:6"><p class="f:48"><strong>POWER</strong> RANKINGS</p><div class="w:16"></div><div><div class="w:32 h:12 bg:#68BE8D clip-path:polygon(0%|100%,50%|0%,100%|100%)"></div><div class="h:4"></div><div class="w:32 h:12 bg:#68BE8D clip-path:polygon(0%|100%,50%|0%,100%|100%)"></div><div class="h:4"></div><div class="w:32 h:12 bg:#68BE8D clip-path:polygon(0%|100%,50%|0%,100%|100%)"></div></div></div>',2),Ne={class:"fg:white bg:black f:20 f:bold inline-block p:4|32 ls:1.0"},et={class:"p:16 grid-cols:1 gap:16"},tt={class:"f:28 f:bold"},nt={class:"f:40 ml:16 white-space:nowrap overflow:hidden text-overflow:ellipsis"},st={class:"w:100 h:60 overflow:hidden"},rt=["src"],it={class:"f:24 f:bold"},lt={class:"w:56 flex jc:center ai:center"},ct=["innerHTML"],ot={class:"flex jc:center ai:center {inline-block;p:8|16;r:4;fg:gray;bg:white;b:1|solid|gray;transition:400ms;}>button {fg:white;bg:gray;}>button:hover"},at=c("div",{class:"w:16"},null,-1),ut=c("div",{class:"w:16"},null,-1),dt={class:"grid-cols:2 gap:64|32"},ht={class:"flex jc:start ai:start"},ft=c("p",{class:"f:20"},"Week",-1),gt=c("div",{class:"w:16"},null,-1),pt=c("p",{class:"f:20"},"名稱",-1),mt=c("div",{class:"w:16"},null,-1),wt=["value","onChange"],bt=c("p",{class:"f:20"},"戰績",-1),yt=c("div",{class:"w:16"},null,-1),vt=["value","onChange"],_t=c("div",{class:"w:8"},null,-1),St=["value","onChange"],Ct=c("div",{class:"w:8"},null,-1),Et=["value","onChange"],Rt=c("p",{class:"f:20"},"顏色",-1),xt=c("div",{class:"w:16"},null,-1),kt=["value","onChange"],$t=c("div",{class:"w:8"},null,-1),Lt=["value","onChange"],Pt=c("p",{class:"f:20"},"狀態",-1),Tt=c("div",{class:"w:16"},null,-1),Dt=["onUpdate:modelValue"],Ut=c("option",{value:"1"},"上",-1),Ft=c("option",{value:"2"},"下",-1),At=c("option",{value:"3"},"平",-1),It=[Ut,Ft,At],Ot=c("p",{class:"f:20"},"圖片",-1),jt=c("div",{class:"w:16"},null,-1),Vt=["onChange"],Mt={__name:"HomeView",setup(e){const t=S(1),s=S([]),n=(f,h,d)=>{if(h==="imgUrl"){const u=d.files[0];if(u){const g=new FileReader;g.onload=Q=>{s.value[f].imgUrl=Q.target.result},g.readAsDataURL(u)}}else s.value[f][h]=d.value},r=f=>{let h;switch(f){case"1":h=`<div>
                                    <div class="w:32 h:12 bg:#68BE8D clip-path:polygon(0%|100%,50%|0%,100%|100%)"></div>
                                    <div class="h:4"></div>
                                    <div class="w:32 h:12 bg:#68BE8D clip-path:polygon(0%|100%,50%|0%,100%|100%)"></div>
                                  </div>`;break;case"2":h=`<div>
                                    <div class="w:32 h:12 bg:#FF2D2D clip-path:polygon(0%|0%,50%|100%,100%|0%)"></div>
                                    <div class="h:4"></div>
                                    <div class="w:32 h:12 bg:#FF2D2D clip-path:polygon(0%|0%,50%|100%,100%|0%)"></div>
                                  </div>`;break;case"3":h=`<div class="flex">
                                    <div class="w:12 h:32 bg:#6C6C6C clip-path:polygon(0%|50%,100%|100%,100%|0%)"></div>
                                    <div class="w:4"></div>
                                    <div class="w:12 h:32 bg:#6C6C6C clip-path:polygon(0%|0%,0%|100%,100%|50%)"></div>
                                  </div>`;break}return h};Y(()=>{for(let f=0;f<5;f++)s.value.push({name:`team${f+1}`,standings1:"0",standings2:"0",standings3:"0",color1:"#000000",color2:"#000079",imgUrl:"",status:"1"})});const i=S(null),l=async()=>{try{const f=await Xe(i.value),h=document.createElement("a");h.download="power rankings.jpg",h.href=URL.createObjectURL(f),h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(h.href)}catch(f){console.error(f)}},o=S(null),a=()=>{o.value.click()},b=f=>{const h=f.target.files[0];if(h){const d=new FileReader;d.onload=()=>{try{const u=JSON.parse(d.result);t.value=Number(u.week),s.value=u.teams}catch(u){console.error(u)}},d.readAsText(h)}},w=()=>{const f={week:t.value,teams:s.value},h=JSON.stringify(f,null,2),d=new Blob([h],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(d),u.style.display="none",u.download="data.json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(u.href)};return(f,h)=>(v(),_("section",null,[c("div",Je,[c("div",Ke,[c("div",{ref_key:"container",ref:i,class:"bg:white"},[c("div",Qe,[c("div",Ye,[Ze,c("p",Ne,C(`week ${t.value}`),1)]),c("div",et,[(v(!0),_(U,null,F(s.value,(d,u)=>(v(),_("div",{class:"flex ai:center",key:d.name},[c("div",{class:$(["w:50 h:60 flex jc:center ai:center fg:white",`bg:${d.color1}`])},[c("span",tt,C(u+1),1)],2),c("div",{class:$(["w:360 fg:white flex jc:space-between",`bg:${d.color2}`])},[c("div",nt,C(d.name),1),c("div",st,[d.imgUrl.length!==0?(v(),_("img",{key:0,src:d.imgUrl,class:"h:60 mx:auto"},null,8,rt)):ee("",!0)])],2),c("div",{class:$(["w:102 h:60 flex jc:center ai:center fg:white",`bg:${d.color1}`])},[c("span",it,C(`${d.standings1}-${d.standings2}-${d.standings3}`),1)],2),c("div",lt,[c("div",{innerHTML:r(d.status)},null,8,ct)])]))),128))])])],512),c("div",ot,[c("button",{onClick:a},"開啟"),c("input",{ref_key:"fileOpenInput",ref:o,type:"file",class:"hide w:1 h:1",accept:".json",onChange:b},null,544),at,c("button",{onClick:w},"儲存"),ut,c("button",{onClick:l},"圖片")])]),c("div",null,[c("div",dt,[c("div",ht,[ft,gt,A(c("input",{type:"number",class:"inline-block p:4|16 b:1|solid|black r:4","onUpdate:modelValue":h[0]||(h[0]=d=>t.value=d)},null,512),[[Z,t.value]])]),(v(!0),_(U,null,F(s.value,(d,u)=>(v(),_("div",{key:d.name,class:"grid-cols:1 gap:16 {flex;ai:center;}>div"},[c("div",null,[pt,mt,c("input",{type:"text",class:"w:200 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].name,onChange:g=>n(u,"name",g.target)},null,40,wt)]),c("div",null,[bt,yt,c("input",{type:"text",class:"w:61 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].standings1,onChange:g=>n(u,"standings1",g.target)},null,40,vt),_t,c("input",{type:"text",class:"w:61 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].standings2,onChange:g=>n(u,"standings2",g.target)},null,40,St),Ct,c("input",{type:"text",class:"w:61 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].standings3,onChange:g=>n(u,"standings3",g.target)},null,40,Et)]),c("div",null,[Rt,xt,c("input",{type:"color",class:"w:96 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].color1,onChange:g=>n(u,"color1",g.target)},null,40,kt),$t,c("input",{type:"color",class:"w:96 inline-block p:4|16 b:1|solid|black r:4",value:s.value[u].color2,onChange:g=>n(u,"color2",g.target)},null,40,Lt)]),c("div",null,[Pt,Tt,A(c("select",{"onUpdate:modelValue":g=>d.status=g,class:"w:200 inline-block p:4|16 b:1|solid|black r:4"},It,8,Dt),[[te,d.status]])]),c("div",null,[Ot,jt,c("input",{type:"file",class:"w:200 inline-block p:4|16 b:1|solid|black r:4",accept:"image/*",onChange:g=>n(u,"imgUrl",g.target)},null,40,Vt)])]))),128))])])])]))}};export{Mt as default};
