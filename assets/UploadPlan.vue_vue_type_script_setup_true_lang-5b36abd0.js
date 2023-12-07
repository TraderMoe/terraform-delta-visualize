import{u as $e,a as Le}from"./index-d40ba34b.js";import{M as D,U as ge,V as he,v as be,i as De,f as T,k as h,J as pe,w as oe,a as ze,T as re,y as Oe,a4 as ye,aq as Ce,ar as Ee,N as Y,O as ue,P as q,Q as ce,a5 as Te,R as Q,H as a,Y as N,a0 as H,as as Ie,Z as te,a2 as Ge,_ as de,F as U,a3 as J,ac as Me,r as G,at as We,S as je,au as Ne,av as Ue,aw as qe,ax as He,ay as Je,az as fe,n as Ye,aA as Qe,p as Xe,z as Ze,K as Ke}from"./vuetify-fe795b0f.js";import{f as Ve,m as el,b as ll,c as tl,d as ke,e as nl,s as al,R as il,h as sl,i as ol,j as rl,k as ul,l as Se,t as cl,g as dl,n as fl,A as Pe,p as K,V as ee,o as ve,B as vl,C as ml,M as gl,D as hl,w as bl,E as pl,y as yl,F as _e,G as Cl,q as Il,u as Vl,L as kl,H as Sl,I as me}from"./VInput-6e3153ed.js";import{m as xe}from"./VResponsive-f6449ead.js";const Pl=D({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),_l=D({value:null,disabled:Boolean,selectedClass:String},"group-item");function xl(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=ge("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const l=he();be(Symbol.for(`${r.description}:id`),l);const t=De(r,null);if(!t){if(!i)return t;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const s=T(e,"value"),c=h(()=>!!(t.disabled.value||e.disabled));t.register({id:l,value:s,disabled:c},n),pe(()=>{t.unregister(l)});const g=h(()=>t.isSelected(l)),b=h(()=>g.value&&[t.selectedClass.value,e.selectedClass]);return oe(g,y=>{n.emit("group:selected",{value:y})}),{id:l,isSelected:g,toggle:()=>t.select(l,!g.value),select:y=>t.select(l,y),selectedClass:b,value:s,disabled:c,group:t}}function Bl(e,r){let i=!1;const n=ze([]),l=re(e,"modelValue",[],u=>u==null?[]:Be(n,Ce(u)),u=>{const f=Rl(n,u);return e.multiple?f:f[0]}),t=ge("useGroup");function s(u,f){const p=u,v=Symbol.for(`${r.description}:id`),d=Ee(v,t==null?void 0:t.vnode).indexOf(f);d>-1?n.splice(d,0,p):n.push(p)}function c(u){if(i)return;g();const f=n.findIndex(p=>p.id===u);n.splice(f,1)}function g(){const u=n.find(f=>!f.disabled);u&&e.mandatory==="force"&&!l.value.length&&(l.value=[u.id])}Oe(()=>{g()}),pe(()=>{i=!0});function b(u,f){const p=n.find(v=>v.id===u);if(!(f&&(p!=null&&p.disabled)))if(e.multiple){const v=l.value.slice(),o=v.findIndex(z=>z===u),d=~o;if(f=f??!d,d&&e.mandatory&&v.length<=1||!d&&e.max!=null&&v.length+1>e.max)return;o<0&&f?v.push(u):o>=0&&!f&&v.splice(o,1),l.value=v}else{const v=l.value.includes(u);if(e.mandatory&&v)return;l.value=f??!v?[u]:[]}}function y(u){if(e.multiple,l.value.length){const f=l.value[0],p=n.findIndex(d=>d.id===f);let v=(p+u)%n.length,o=n[v];for(;o.disabled&&v!==p;)v=(v+u)%n.length,o=n[v];if(o.disabled)return;l.value=[n[v].id]}else{const f=n.find(p=>!p.disabled);f&&(l.value=[f.id])}}const V={register:s,unregister:c,selected:l,select:b,disabled:T(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:u=>l.value.includes(u),selectedClass:h(()=>e.selectedClass),items:h(()=>n),getItemIndex:u=>wl(n,u)};return be(r,V),V}function wl(e,r){const i=Be(e,[r]);return i.length?e.findIndex(n=>n.id===i[0]):-1}function Be(e,r){const i=[];return r.forEach(n=>{const l=e.find(s=>ye(n,s.value)),t=e[n];(l==null?void 0:l.value)!=null?i.push(l.id):t!=null&&i.push(t.id)}),i}function Rl(e,r){const i=[];return r.forEach(n=>{const l=e.findIndex(t=>t.id===n);if(~l){const t=e[l];i.push(t.value!=null?t.value:l)}}),i}const we=Symbol.for("vuetify:v-chip-group"),Al=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ye},...Y(),...Pl({selectedClass:"v-chip--selected"}),...xe(),...ue(),...Ve({variant:"tonal"})},"VChipGroup");q()({name:"VChipGroup",props:Al(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:i}=r;const{themeClasses:n}=ce(e),{isSelected:l,select:t,next:s,prev:c,selected:g}=Bl(e,we);return Te({VChip:{color:T(e,"color"),disabled:T(e,"disabled"),filter:T(e,"filter"),variant:T(e,"variant")}}),Q(()=>a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,{isSelected:l,select:t,next:s,prev:c,selected:g.value})]}})),{}}});const Fl=D({activeClass:String,appendAvatar:String,appendIcon:N,closable:Boolean,closeIcon:{type:N,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:H(),onClickOnce:H(),...el(),...Y(),...ll(),...tl(),..._l(),...ke(),...nl(),...al(),...xe({tag:"span"}),...ue(),...Ve({variant:"tonal"})},"VChip"),$l=q()({name:"VChip",directives:{Ripple:il},props:Fl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:i,emit:n,slots:l}=r;const{t}=Ie(),{borderClasses:s}=sl(e),{colorClasses:c,colorStyles:g,variantClasses:b}=ol(e),{densityClasses:y}=rl(e),{elevationClasses:V}=ul(e),{roundedClasses:u}=Se(e),{sizeClasses:f}=cl(e),{themeClasses:p}=ce(e),v=re(e,"modelValue"),o=xl(e,we,!1),d=dl(e,i),z=h(()=>e.link!==!1&&d.isLink.value),x=h(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||d.isClickable.value)),w=h(()=>({"aria-label":t(e.closeLabel),onClick(I){I.stopPropagation(),v.value=!1,n("click:close",I)}}));function O(I){var F;n("click",I),x.value&&((F=d.navigate)==null||F.call(d,I),o==null||o.toggle())}function M(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),O(I))}return()=>{const I=d.isLink.value?"a":e.tag,F=!!(e.appendIcon||e.appendAvatar),m=!!(F||l.append),C=!!(l.close||e.closable),S=!!(l.filter||e.filter)&&o,W=!!(e.prependIcon||e.prependAvatar),$=!!(W||l.prepend),P=!o||o.isSelected.value;return v.value&&te(a(I,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":x.value,"v-chip--filter":S,"v-chip--pill":e.pill},p.value,s.value,P?c.value:void 0,y.value,V.value,u.value,f.value,b.value,o==null?void 0:o.selectedClass.value,e.class],style:[P?g.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:d.href.value,tabindex:x.value?0:void 0,onClick:O,onKeydown:x.value&&!z.value&&M},{default:()=>{var B;return[fl(x.value,"v-chip"),S&&a(Pe,{key:"filter"},{default:()=>[te(a("div",{class:"v-chip__filter"},[l.filter?a(ee,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):a(K,{key:"filter-icon",icon:e.filterIcon},null)]),[[de,o.isSelected.value]])]}),$&&a("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?a(ee,{key:"prepend-defaults",disabled:!W,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):a(U,null,[e.prependIcon&&a(K,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(ve,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),a("div",{class:"v-chip__content"},[((B=l.default)==null?void 0:B.call(l,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),m&&a("div",{key:"append",class:"v-chip__append"},[l.append?a(ee,{key:"append-defaults",disabled:!F,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):a(U,null,[e.appendIcon&&a(K,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(ve,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),C&&a("div",J({key:"close",class:"v-chip__close"},w.value),[l.close?a(ee,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):a(K,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ge("ripple"),x.value&&e.ripple,null]])}}});const Ll=D({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...vl({transition:{component:ml}})},"VCounter"),Dl=q()({name:"VCounter",functional:!0,props:Ll(),setup(e,r){let{slots:i}=r;const n=h(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return Q(()=>a(gl,{transition:e.transition},{default:()=>[te(a("div",{class:["v-counter",e.class],style:e.style},[i.default?i.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[de,e.active]])]})),{}}});const zl=D({floating:Boolean,...Y()},"VFieldLabel"),le=q()({name:"VFieldLabel",props:zl(),setup(e,r){let{slots:i}=r;return Q(()=>a(hl,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Ol=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Re=D({appendInnerIcon:N,bgColor:String,clearable:Boolean,clearIcon:{type:N,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:N,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ol.includes(e)},"onClick:clear":H(),"onClick:appendInner":H(),"onClick:prependInner":H(),...Y(),...bl(),...ke(),...ue()},"VField"),Ae=q()({name:"VField",inheritAttrs:!1,props:{id:String,...pl(),...Re()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:i,emit:n,slots:l}=r;const{themeClasses:t}=ce(e),{loaderClasses:s}=yl(e),{focusClasses:c,isFocused:g,focus:b,blur:y}=_e(e),{InputIcon:V}=Cl(e),{roundedClasses:u}=Se(e),{rtlClasses:f}=Me(),p=h(()=>e.dirty||e.active),v=h(()=>!e.singleLine&&!!(e.label||l.label)),o=he(),d=h(()=>e.id||`input-${o}`),z=h(()=>`${d.value}-messages`),x=G(),w=G(),O=G(),M=h(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:I,backgroundColorStyles:F}=Il(T(e,"bgColor")),{textColorClasses:m,textColorStyles:C}=Vl(h(()=>e.error||e.disabled?void 0:p.value&&g.value?e.color:e.baseColor));oe(p,$=>{if(v.value){const P=x.value.$el,B=w.value.$el;requestAnimationFrame(()=>{const _=We(P),k=B.getBoundingClientRect(),R=k.x-_.x,E=k.y-_.y-(_.height/2-k.height/2),L=k.width/.75,j=Math.abs(L-_.width)>1?{maxWidth:je(L)}:void 0,ne=getComputedStyle(P),X=getComputedStyle(B),ae=parseFloat(ne.transitionDuration)*1e3||150,Z=parseFloat(X.getPropertyValue("--v-field-label-scale")),A=X.getPropertyValue("color");P.style.visibility="visible",B.style.visibility="hidden",Ne(P,{transform:`translate(${R}px, ${E}px) scale(${Z})`,color:A,...j},{duration:ae,easing:He,direction:$?"normal":"reverse"}).finished.then(()=>{P.style.removeProperty("visibility"),B.style.removeProperty("visibility")})})}},{flush:"post"});const S=h(()=>({isActive:p,isFocused:g,controlRef:O,blur:y,focus:b}));function W($){$.target!==document.activeElement&&$.preventDefault()}return Q(()=>{var R,E,L;const $=e.variant==="outlined",P=l["prepend-inner"]||e.prependInnerIcon,B=!!(e.clearable||l.clear),_=!!(l["append-inner"]||e.appendInnerIcon||B),k=()=>l.label?l.label({...S.value,label:e.label,props:{for:d.value}}):e.label;return a("div",J({class:["v-field",{"v-field--active":p.value,"v-field--appended":_,"v-field--center-affix":e.centerAffix??!M.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":P,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!k(),[`v-field--variant-${e.variant}`]:!0},t.value,I.value,c.value,s.value,u.value,f.value,e.class],style:[F.value,e.style],onClick:W},i),[a("div",{class:"v-field__overlay"},null),a(kl,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),P&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(V,{key:"prepend-icon",name:"prependInner"},null),(R=l["prepend-inner"])==null?void 0:R.call(l,S.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&v.value&&a(le,{key:"floating-label",ref:w,class:[m.value],floating:!0,for:d.value,style:C.value},{default:()=>[k()]}),a(le,{ref:x,for:d.value},{default:()=>[k()]}),(E=l.default)==null?void 0:E.call(l,{...S.value,props:{id:d.value,class:"v-field__input","aria-describedby":z.value},focus:b,blur:y})]),B&&a(Pe,{key:"clear"},{default:()=>[te(a("div",{class:"v-field__clearable",onMousedown:j=>{j.preventDefault(),j.stopPropagation()}},[l.clear?l.clear():a(V,{name:"clear"},null)]),[[de,e.dirty]])]}),_&&a("div",{key:"append",class:"v-field__append-inner"},[(L=l["append-inner"])==null?void 0:L.call(l,S.value),e.appendInnerIcon&&a(V,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",m.value],style:C.value},[$&&a(U,null,[a("div",{class:"v-field__outline__start"},null),v.value&&a("div",{class:"v-field__outline__notch"},[a(le,{ref:w,floating:!0,for:d.value},{default:()=>[k()]})]),a("div",{class:"v-field__outline__end"},null)]),M.value&&v.value&&a(le,{ref:w,floating:!0,for:d.value},{default:()=>[k()]})])])}),{controlRef:O}}});function El(e){const r=Object.keys(Ae.props).filter(i=>!Ue(i)&&i!=="class"&&i!=="style");return qe(e,r)}const ie=Symbol("Forwarded refs");function se(e,r){let i=e;for(;i;){const n=Reflect.getOwnPropertyDescriptor(i,r);if(n)return n;i=Object.getPrototypeOf(i)}}function Tl(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];return e[ie]=i,new Proxy(e,{get(l,t){if(Reflect.has(l,t))return Reflect.get(l,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const s of i)if(s.value&&Reflect.has(s.value,t)){const c=Reflect.get(s.value,t);return typeof c=="function"?c.bind(s.value):c}}},has(l,t){if(Reflect.has(l,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const s of i)if(s.value&&Reflect.has(s.value,t))return!0;return!1},set(l,t,s){if(Reflect.has(l,t))return Reflect.set(l,t,s);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const c of i)if(c.value&&Reflect.has(c.value,t))return Reflect.set(c.value,t,s);return!1},getOwnPropertyDescriptor(l,t){var c;const s=Reflect.getOwnPropertyDescriptor(l,t);if(s)return s;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const g of i){if(!g.value)continue;const b=se(g.value,t)??("_"in g.value?se((c=g.value._)==null?void 0:c.setupState,t):void 0);if(b)return b}for(const g of i){const b=g.value&&g.value[ie];if(!b)continue;const y=b.slice();for(;y.length;){const V=y.shift(),u=se(V.value,t);if(u)return u;const f=V.value&&V.value[ie];f&&y.push(...f)}}}}})}const Gl=D({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Sl({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Ce(e).every(r=>r!=null&&typeof r=="object")},...Re({clearable:!0})},"VFileInput"),Ml=q()({name:"VFileInput",inheritAttrs:!1,props:Gl(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:i,emit:n,slots:l}=r;const{t}=Ie(),s=re(e,"modelValue"),{isFocused:c,focus:g,blur:b}=_e(e),y=h(()=>typeof e.showSize!="boolean"?e.showSize:void 0),V=h(()=>(s.value??[]).reduce((m,C)=>{let{size:S=0}=C;return m+S},0)),u=h(()=>fe(V.value,y.value)),f=h(()=>(s.value??[]).map(m=>{const{name:C="",size:S=0}=m;return e.showSize?`${C} (${fe(S,y.value)})`:C})),p=h(()=>{var C;const m=((C=s.value)==null?void 0:C.length)??0;return e.showSize?t(e.counterSizeString,m,u.value):t(e.counterString,m)}),v=G(),o=G(),d=G(),z=h(()=>c.value||e.active),x=h(()=>["plain","underlined"].includes(e.variant));function w(){var m;d.value!==document.activeElement&&((m=d.value)==null||m.focus()),c.value||g()}function O(m){I(m)}function M(m){n("mousedown:control",m)}function I(m){var C;(C=d.value)==null||C.click(),n("click:control",m)}function F(m){m.stopPropagation(),w(),Ye(()=>{s.value=[],Qe(e["onClick:clear"],m)})}return oe(s,m=>{(!Array.isArray(m)||!m.length)&&d.value&&(d.value.value="")}),Q(()=>{const m=!!(l.counter||e.counter),C=!!(m||l.details),[S,W]=Je(i),{modelValue:$,...P}=me.filterProps(e),B=El(e);return a(me,J({ref:v,modelValue:s.value,"onUpdate:modelValue":_=>s.value=_,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":x.value},e.class],style:e.style,"onClick:prepend":O},S,P,{centerAffix:!x.value,focused:c.value}),{...l,default:_=>{let{id:k,isDisabled:R,isDirty:E,isReadonly:L,isValid:j}=_;return a(Ae,J({ref:o,"prepend-icon":e.prependIcon,onMousedown:M,onClick:I,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},B,{id:k.value,active:z.value||E.value,dirty:E.value,disabled:R.value,focused:c.value,error:j.value===!1}),{...l,default:ne=>{var Z;let{props:{class:X,...ae}}=ne;return a(U,null,[a("input",J({ref:d,type:"file",readonly:L.value,disabled:R.value,multiple:e.multiple,name:e.name,onClick:A=>{A.stopPropagation(),L.value&&A.preventDefault(),w()},onChange:A=>{if(!A.target)return;const Fe=A.target;s.value=[...Fe.files??[]]},onFocus:w,onBlur:b},ae,W),null),a("div",{class:X},[!!((Z=s.value)!=null&&Z.length)&&(l.selection?l.selection({fileNames:f.value,totalBytes:V.value,totalBytesReadable:u.value}):e.chips?f.value.map(A=>a($l,{key:A,size:"small",color:e.color},{default:()=>[A]})):f.value.join(", "))])])}})},details:C?_=>{var k,R;return a(U,null,[(k=l.details)==null?void 0:k.call(l,_),m&&a(U,null,[a("span",null,null),a(Dl,{active:!!((R=s.value)!=null&&R.length),value:p.value},l.counter)])])}:void 0})}),Tl({},v,o,d)}}),ql=Xe({__name:"UploadPlan",setup(e){const r=$e(),i=Le(),n=G(!1);function l(s){n.value=!0;let c=s.target.files||s.dataTransfer.files;c.length&&t(c[0])}function t(s){let c=new FileReader;c.onload=g=>{let b={format_version:"",terraform_version:"",resource_changes:[],timestamp:""};g.target&&typeof g.target.result=="string"&&(b=JSON.parse(g.target.result)),r.setRootPlan(b),n.value=!1,i.push("/changes")},c.readAsText(s)}return(s,c)=>(Ze(),Ke(Ml,{clearable:"",variant:"outlined",class:"full-width",label:"plan.json",accept:".json",onChange:l,loading:n.value},null,8,["loading"]))}});export{ql as _,_l as a,xl as b,Pl as m,Bl as u};
