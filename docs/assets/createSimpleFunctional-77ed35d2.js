import{m as u}from"./VResponsive-3eaa87ff.js";import{l as s,ak as g,al as i,am as c}from"./index-dac2f3da.js";function d(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",m=arguments.length>2?arguments[2]:void 0;return s()({name:m??g(i(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...u()},setup(e,l){let{slots:t}=l;return()=>{var n;return c(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}export{d as c};