import{r as z,a3 as Oe,e as ue,A as le,a4 as me,w as De,p as D,a as pe,g as be,b as Ce,i as Le,t as G,d as y,f as Ee,v as ce,j as We,G as Ie,a5 as Ve,k as Ge,m as de,l as q,n as fe,H as Te,q as i,I as N,E as H,a6 as ke,y as ne,C as Me,z as ve,F as U,D as J,O as je,h as Ne,a7 as Ue,a8 as qe,a9 as He,aa as he,S as Je,ab as Xe,U as Ye,ac as Qe,ad as Ze,V as Ke,W as et}from"./index-77bf90b2.js";import{m as X,a as Se,u as Y}from"./VResponsive-708cb8b5.js";import{f as xe,m as tt,b as nt,c as lt,d as Pe,e as at,s as it,R as st,h as ot,i as rt,j as ut,k as ct,l as _e,v as dt,g as ft,n as vt,B as Re,p as K,V as ee,o as ge,C as mt,D as ht,M as gt,E as yt,x as pt,F as bt,z as Ct,G as we,H as It,q as Vt,u as kt,L as St,I as xt,J as ye}from"./VInput-05e92cf2.js";class se{constructor(o){let{x:a,y:l,width:t,height:n}=o;this.x=a,this.y=l,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Pt(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform;if(l){let t,n,s,u,f;if(l.startsWith("matrix3d("))t=l.slice(9,-1).split(/, /),n=+t[0],s=+t[5],u=+t[12],f=+t[13];else if(l.startsWith("matrix("))t=l.slice(7,-1).split(/, /),n=+t[0],s=+t[3],u=+t[4],f=+t[5];else return new se(o);const g=a.transformOrigin,b=o.x-u-(1-n)*parseFloat(g),I=o.y-f-(1-s)*parseFloat(g.slice(g.indexOf(" ")+1)),c=n?o.width/n:e.offsetWidth+1,d=s?o.height/s:e.offsetHeight+1;return new se({x:b,y:I,width:c,height:d})}else return new se(o)}function _t(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let l;try{l=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof l.finished>"u"&&(l.finished=new Promise(t=>{l.onfinish=()=>{t(l)}})),l}const Rt="cubic-bezier(0.4, 0, 0.2, 1)";function Xt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=z(),l=z();if(Oe){const t=new ResizeObserver(n=>{e==null||e(n,t),n.length&&(o==="content"?l.value=n[0].contentRect:l.value=n[0].target.getBoundingClientRect())});ue(()=>{t.disconnect()}),le(a,(n,s)=>{s&&(t.unobserve(me(s)),l.value=void 0),n&&t.observe(me(n))},{flush:"post"})}return{resizeRef:a,contentRect:De(l)}}const wt=D({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Bt=D({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ft(e,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const l=pe("useGroupItem");if(!l)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=be();Ce(Symbol.for(`${o.description}:id`),t);const n=Le(o,null);if(!n){if(!a)return n;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const s=G(e,"value"),u=y(()=>!!(n.disabled.value||e.disabled));n.register({id:t,value:s,disabled:u},l),ue(()=>{n.unregister(t)});const f=y(()=>n.isSelected(t)),g=y(()=>f.value&&[n.selectedClass.value,e.selectedClass]);return le(f,b=>{l.emit("group:selected",{value:b})}),{id:t,isSelected:f,toggle:()=>n.select(t,!f.value),select:b=>n.select(t,b),selectedClass:g,value:s,disabled:u,group:n}}function At(e,o){let a=!1;const l=Ee([]),t=ce(e,"modelValue",[],c=>c==null?[]:Be(l,Ve(c)),c=>{const d=zt(l,c);return e.multiple?d:d[0]}),n=pe("useGroup");function s(c,d){const p=c,m=Symbol.for(`${o.description}:id`),v=Ge(m,n==null?void 0:n.vnode).indexOf(d);v>-1?l.splice(v,0,p):l.push(p)}function u(c){if(a)return;f();const d=l.findIndex(p=>p.id===c);l.splice(d,1)}function f(){const c=l.find(d=>!d.disabled);c&&e.mandatory==="force"&&!t.value.length&&(t.value=[c.id])}We(()=>{f()}),ue(()=>{a=!0});function g(c,d){const p=l.find(m=>m.id===c);if(!(d&&(p!=null&&p.disabled)))if(e.multiple){const m=t.value.slice(),r=m.findIndex(L=>L===c),v=~r;if(d=d??!v,v&&e.mandatory&&m.length<=1||!v&&e.max!=null&&m.length+1>e.max)return;r<0&&d?m.push(c):r>=0&&!d&&m.splice(r,1),t.value=m}else{const m=t.value.includes(c);if(e.mandatory&&m)return;t.value=d??!m?[c]:[]}}function b(c){if(e.multiple,t.value.length){const d=t.value[0],p=l.findIndex(v=>v.id===d);let m=(p+c)%l.length,r=l[m];for(;r.disabled&&m!==p;)m=(m+c)%l.length,r=l[m];if(r.disabled)return;t.value=[l[m].id]}else{const d=l.find(p=>!p.disabled);d&&(t.value=[d.id])}}const I={register:s,unregister:u,selected:t,select:g,disabled:G(e,"disabled"),prev:()=>b(l.length-1),next:()=>b(1),isSelected:c=>t.value.includes(c),selectedClass:y(()=>e.selectedClass),items:y(()=>l),getItemIndex:c=>$t(l,c)};return Ce(o,I),I}function $t(e,o){const a=Be(e,[o]);return a.length?e.findIndex(l=>l.id===a[0]):-1}function Be(e,o){const a=[];return o.forEach(l=>{const t=e.find(s=>Ie(l,s.value)),n=e[l];(t==null?void 0:t.value)!=null?a.push(t.id):n!=null&&a.push(n.id)}),a}function zt(e,o){const a=[];return o.forEach(l=>{const t=e.findIndex(n=>n.id===l);if(~t){const n=e[t];a.push(n.value!=null?n.value:t)}}),a}const Fe=Symbol.for("vuetify:v-chip-group"),Ot=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ie},...X(),...wt({selectedClass:"v-chip--selected"}),...Se(),...de(),...xe({variant:"tonal"})},"VChipGroup");q()({name:"VChipGroup",props:Ot(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const{themeClasses:l}=fe(e),{isSelected:t,select:n,next:s,prev:u,selected:f}=At(e,Fe);return Te({VChip:{color:G(e,"color"),disabled:G(e,"disabled"),filter:G(e,"filter"),variant:G(e,"variant")}}),Y(()=>i(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},l.value,e.class],style:e.style},{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:t,select:n,next:s,prev:u,selected:f.value})]}})),{}}});const Dt=D({activeClass:String,appendAvatar:String,appendIcon:N,closable:Boolean,closeIcon:{type:N,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:H(),onClickOnce:H(),...tt(),...X(),...nt(),...lt(),...Bt(),...Pe(),...at(),...it(),...Se({tag:"span"}),...de(),...xe({variant:"tonal"})},"VChip"),Lt=q()({name:"VChip",directives:{Ripple:st},props:Dt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,o){let{attrs:a,emit:l,slots:t}=o;const{t:n}=ke(),{borderClasses:s}=ot(e),{colorClasses:u,colorStyles:f,variantClasses:g}=rt(e),{densityClasses:b}=ut(e),{elevationClasses:I}=ct(e),{roundedClasses:c}=_e(e),{sizeClasses:d}=dt(e),{themeClasses:p}=fe(e),m=ce(e,"modelValue"),r=Ft(e,Fe,!1),v=ft(e,a),L=y(()=>e.link!==!1&&v.isLink.value),_=y(()=>!e.disabled&&e.link!==!1&&(!!r||e.link||v.isClickable.value)),w=y(()=>({"aria-label":n(e.closeLabel),onClick(V){V.stopPropagation(),m.value=!1,l("click:close",V)}}));function E(V){var A;l("click",V),_.value&&((A=v.navigate)==null||A.call(v,V),r==null||r.toggle())}function T(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),E(V))}return()=>{const V=v.isLink.value?"a":e.tag,A=!!(e.appendIcon||e.appendAvatar),h=!!(A||t.append),C=!!(t.close||e.closable),S=!!(t.filter||e.filter)&&r,M=!!(e.prependIcon||e.prependAvatar),$=!!(M||t.prepend),x=!r||r.isSelected.value;return m.value&&ne(i(V,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":_.value,"v-chip--filter":S,"v-chip--pill":e.pill},p.value,s.value,x?u.value:void 0,b.value,I.value,c.value,d.value,g.value,r==null?void 0:r.selectedClass.value,e.class],style:[x?f.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:v.href.value,tabindex:_.value?0:void 0,onClick:E,onKeydown:_.value&&!L.value&&T},{default:()=>{var R;return[vt(_.value,"v-chip"),S&&i(Re,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[t.filter?i(ee,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):i(K,{key:"filter-icon",icon:e.filterIcon},null)]),[[ve,r.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?i(ee,{key:"prepend-defaults",disabled:!M,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):i(U,null,[e.prependIcon&&i(K,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ge,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content"},[((R=t.default)==null?void 0:R.call(t,{isSelected:r==null?void 0:r.isSelected.value,selectedClass:r==null?void 0:r.selectedClass.value,select:r==null?void 0:r.select,toggle:r==null?void 0:r.toggle,value:r==null?void 0:r.value.value,disabled:e.disabled}))??e.text]),h&&i("div",{key:"append",class:"v-chip__append"},[t.append?i(ee,{key:"append-defaults",disabled:!A,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):i(U,null,[e.appendIcon&&i(K,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ge,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),C&&i("div",J({key:"close",class:"v-chip__close"},w.value),[t.close?i(ee,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):i(K,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Me("ripple"),_.value&&e.ripple,null]])}}});const Et=D({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...X(),...mt({transition:{component:ht}})},"VCounter"),Wt=q()({name:"VCounter",functional:!0,props:Et(),setup(e,o){let{slots:a}=o;const l=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return Y(()=>i(gt,{transition:e.transition},{default:()=>[ne(i("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:l.value,max:e.max,value:e.value}):l.value]),[[ve,e.active]])]})),{}}});const Gt=D({floating:Boolean,...X()},"VFieldLabel"),te=q()({name:"VFieldLabel",props:Gt(),setup(e,o){let{slots:a}=o;return Y(()=>i(yt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Tt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Ae=D({appendInnerIcon:N,bgColor:String,clearable:Boolean,clearIcon:{type:N,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:N,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Tt.includes(e)},"onClick:clear":H(),"onClick:appendInner":H(),"onClick:prependInner":H(),...X(),...pt(),...Pe(),...de()},"VField"),$e=q()({name:"VField",inheritAttrs:!1,props:{id:String,...bt(),...Ae()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:l,slots:t}=o;const{themeClasses:n}=fe(e),{loaderClasses:s}=Ct(e),{focusClasses:u,isFocused:f,focus:g,blur:b}=we(e),{InputIcon:I}=It(e),{roundedClasses:c}=_e(e),{rtlClasses:d}=je(),p=y(()=>e.dirty||e.active),m=y(()=>!e.singleLine&&!!(e.label||t.label)),r=be(),v=y(()=>e.id||`input-${r}`),L=y(()=>`${v.value}-messages`),_=z(),w=z(),E=z(),T=y(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:V,backgroundColorStyles:A}=Vt(G(e,"bgColor")),{textColorClasses:h,textColorStyles:C}=kt(y(()=>e.error||e.disabled?void 0:p.value&&f.value?e.color:e.baseColor));le(p,$=>{if(m.value){const x=_.value.$el,R=w.value.$el;requestAnimationFrame(()=>{const P=Pt(x),k=R.getBoundingClientRect(),B=k.x-P.x,W=k.y-P.y-(P.height/2-k.height/2),O=k.width/.75,j=Math.abs(O-P.width)>1?{maxWidth:Ne(O)}:void 0,ae=getComputedStyle(x),Q=getComputedStyle(R),ie=parseFloat(ae.transitionDuration)*1e3||150,Z=parseFloat(Q.getPropertyValue("--v-field-label-scale")),F=Q.getPropertyValue("color");x.style.visibility="visible",R.style.visibility="hidden",_t(x,{transform:`translate(${B}px, ${W}px) scale(${Z})`,color:F,...j},{duration:ie,easing:Rt,direction:$?"normal":"reverse"}).finished.then(()=>{x.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const S=y(()=>({isActive:p,isFocused:f,controlRef:E,blur:b,focus:g}));function M($){$.target!==document.activeElement&&$.preventDefault()}return Y(()=>{var B,W,O;const $=e.variant==="outlined",x=t["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||t.clear),P=!!(t["append-inner"]||e.appendInnerIcon||R),k=()=>t.label?t.label({...S.value,label:e.label,props:{for:v.value}}):e.label;return i("div",J({class:["v-field",{"v-field--active":p.value,"v-field--appended":P,"v-field--center-affix":e.centerAffix??!T.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!k(),[`v-field--variant-${e.variant}`]:!0},n.value,V.value,u.value,s.value,c.value,d.value,e.class],style:[A.value,e.style],onClick:M},a),[i("div",{class:"v-field__overlay"},null),i(St,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),x&&i("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&i(I,{key:"prepend-icon",name:"prependInner"},null),(B=t["prepend-inner"])==null?void 0:B.call(t,S.value)]),i("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&m.value&&i(te,{key:"floating-label",ref:w,class:[h.value],floating:!0,for:v.value,style:C.value},{default:()=>[k()]}),i(te,{ref:_,for:v.value},{default:()=>[k()]}),(W=t.default)==null?void 0:W.call(t,{...S.value,props:{id:v.value,class:"v-field__input","aria-describedby":L.value},focus:g,blur:b})]),R&&i(Re,{key:"clear"},{default:()=>[ne(i("div",{class:"v-field__clearable",onMousedown:j=>{j.preventDefault(),j.stopPropagation()}},[t.clear?t.clear():i(I,{name:"clear"},null)]),[[ve,e.dirty]])]}),P&&i("div",{key:"append",class:"v-field__append-inner"},[(O=t["append-inner"])==null?void 0:O.call(t,S.value),e.appendInnerIcon&&i(I,{key:"append-icon",name:"appendInner"},null)]),i("div",{class:["v-field__outline",h.value],style:C.value},[$&&i(U,null,[i("div",{class:"v-field__outline__start"},null),m.value&&i("div",{class:"v-field__outline__notch"},[i(te,{ref:w,floating:!0,for:v.value},{default:()=>[k()]})]),i("div",{class:"v-field__outline__end"},null)]),T.value&&m.value&&i(te,{ref:w,floating:!0,for:v.value},{default:()=>[k()]})])])}),{controlRef:E}}});function Mt(e){const o=Object.keys($e.props).filter(a=>!Ue(a)&&a!=="class"&&a!=="style");return qe(e,o)}const oe=Symbol("Forwarded refs");function re(e,o){let a=e;for(;a;){const l=Reflect.getOwnPropertyDescriptor(a,o);if(l)return l;a=Object.getPrototypeOf(a)}}function jt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),l=1;l<o;l++)a[l-1]=arguments[l];return e[oe]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,n)){const u=Reflect.get(s.value,n);return typeof u=="function"?u.bind(s.value):u}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,n))return!0;return!1},set(t,n,s){if(Reflect.has(t,n))return Reflect.set(t,n,s);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const u of a)if(u.value&&Reflect.has(u.value,n))return Reflect.set(u.value,n,s);return!1},getOwnPropertyDescriptor(t,n){var u;const s=Reflect.getOwnPropertyDescriptor(t,n);if(s)return s;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const f of a){if(!f.value)continue;const g=re(f.value,n)??("_"in f.value?re((u=f.value._)==null?void 0:u.setupState,n):void 0);if(g)return g}for(const f of a){const g=f.value&&f.value[oe];if(!g)continue;const b=g.slice();for(;b.length;){const I=b.shift(),c=re(I.value,n);if(c)return c;const d=I.value&&I.value[oe];d&&b.push(...d)}}}}})}const Nt=D({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...xt({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Ve(e).every(o=>o!=null&&typeof o=="object")},...Ae({clearable:!0})},"VFileInput"),Ut=q()({name:"VFileInput",inheritAttrs:!1,props:Nt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:l,slots:t}=o;const{t:n}=ke(),s=ce(e,"modelValue"),{isFocused:u,focus:f,blur:g}=we(e),b=y(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=y(()=>(s.value??[]).reduce((h,C)=>{let{size:S=0}=C;return h+S},0)),c=y(()=>he(I.value,b.value)),d=y(()=>(s.value??[]).map(h=>{const{name:C="",size:S=0}=h;return e.showSize?`${C} (${he(S,b.value)})`:C})),p=y(()=>{var C;const h=((C=s.value)==null?void 0:C.length)??0;return e.showSize?n(e.counterSizeString,h,c.value):n(e.counterString,h)}),m=z(),r=z(),v=z(),L=y(()=>u.value||e.active),_=y(()=>["plain","underlined"].includes(e.variant));function w(){var h;v.value!==document.activeElement&&((h=v.value)==null||h.focus()),u.value||f()}function E(h){V(h)}function T(h){l("mousedown:control",h)}function V(h){var C;(C=v.value)==null||C.click(),l("click:control",h)}function A(h){h.stopPropagation(),w(),Je(()=>{s.value=[],Xe(e["onClick:clear"],h)})}return le(s,h=>{(!Array.isArray(h)||!h.length)&&v.value&&(v.value.value="")}),Y(()=>{const h=!!(t.counter||e.counter),C=!!(h||t.details),[S,M]=He(a),{modelValue:$,...x}=ye.filterProps(e),R=Mt(e);return i(ye,J({ref:m,modelValue:s.value,"onUpdate:modelValue":P=>s.value=P,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":_.value},e.class],style:e.style,"onClick:prepend":E},S,x,{centerAffix:!_.value,focused:u.value}),{...t,default:P=>{let{id:k,isDisabled:B,isDirty:W,isReadonly:O,isValid:j}=P;return i($e,J({ref:r,"prepend-icon":e.prependIcon,onMousedown:T,onClick:V,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{id:k.value,active:L.value||W.value,dirty:W.value,disabled:B.value,focused:u.value,error:j.value===!1}),{...t,default:ae=>{var Z;let{props:{class:Q,...ie}}=ae;return i(U,null,[i("input",J({ref:v,type:"file",readonly:O.value,disabled:B.value,multiple:e.multiple,name:e.name,onClick:F=>{F.stopPropagation(),O.value&&F.preventDefault(),w()},onChange:F=>{if(!F.target)return;const ze=F.target;s.value=[...ze.files??[]]},onFocus:w,onBlur:g},ie,M),null),i("div",{class:Q},[!!((Z=s.value)!=null&&Z.length)&&(t.selection?t.selection({fileNames:d.value,totalBytes:I.value,totalBytesReadable:c.value}):e.chips?d.value.map(F=>i(Lt,{key:F,size:"small",color:e.color},{default:()=>[F]})):d.value.join(", "))])])}})},details:C?P=>{var k,B;return i(U,null,[(k=t.details)==null?void 0:k.call(t,P),h&&i(U,null,[i("span",null,null),i(Wt,{active:!!((B=s.value)!=null&&B.length),value:p.value},t.counter)])])}:void 0})}),jt({},m,r,v)}}),Yt=Ye({__name:"UploadPlan",setup(e){const o=Qe(),a=Ze(),l=z(!1);function t(s){l.value=!0;let u=s.target.files||s.dataTransfer.files;u.length&&n(u[0])}function n(s){let u=new FileReader;u.onload=f=>{let g={format_version:"",terraform_version:"",resource_changes:[],timestamp:""};f.target&&typeof f.target.result=="string"&&(g=JSON.parse(f.target.result)),o.setRootPlan(g),l.value=!1,a.push("/changes")},u.readAsText(s)}return(s,u)=>(Ke(),et(Ut,{clearable:"",variant:"outlined",class:"full-width",label:"plan.json",accept:".json",onChange:t,loading:l.value},null,8,["loading"]))}});export{Yt as _,At as a,Bt as b,Ft as c,wt as m,Xt as u};
