"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8312],{65597:function(e,n,i){i.d(n,{c:function(){return u},f:function(){return s}});var r=i(46313),t=i(23831),o=i(49125),c=i(73942),l=i(37391),u=r.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],l.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),s=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||t.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||t.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,i){var r=i(82394),t=i(12757),o=i(12691),c=i.n(o),l=i(34376),u=i.n(l),s=i(82684),a=i(83455),d=i(60328),p=i(47999),f=i(93461),h=i(67971),x=i(10919),j=i(47409),m=i(86673),g=i(54283),b=i(17903),Z=i(19711),_=i(41374),C=i(73942),O=i(10503),v=i(65597),k=i(49125),w=i(19395),I=i(96510),E=i(28598);function y(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function D(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?y(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function P(e){var n=e.onCancel,i=e.onSuccess,r=e.pipelineRun,o=r.status,c=(0,a.Db)(_.ZP.pipeline_runs.pipeline_schedules.useCreate(null===r||void 0===r?void 0:r.pipeline_schedule_id),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(){i()},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),l=(0,t.Z)(c,1)[0],u=(0,s.useState)(),f=u[0],x=u[1],b=(0,s.useCallback)((function(){x(!1),l({pipeline_run:{execution_date:null===r||void 0===r?void 0:r.execution_date,pipeline_schedule_id:null===r||void 0===r?void 0:r.pipeline_schedule_id,pipeline_uuid:null===r||void 0===r?void 0:r.pipeline_uuid,variables:null===r||void 0===r?void 0:r.variables}})}),[r]),w=(0,s.useCallback)((function(){x(!1),n(D(D({},r),{},{status:j.V.CANCELLED}))}),[r]);return(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(d.Z,{beforeIcon:j.V.INITIAL!==o&&(0,E.jsxs)(E.Fragment,{children:[j.V.COMPLETED===o&&(0,E.jsx)(O.Jr,{size:2*k.iI}),[j.V.FAILED,j.V.CANCELLED].includes(o)&&(0,E.jsx)(O.Py,{size:2*k.iI,inverted:j.V.CANCELLED===o}),[j.V.RUNNING].includes(o)&&(0,E.jsx)(g.Z,{color:"white",small:!0})]}),borderRadius:C.D7,danger:j.V.FAILED===o,default:j.V.INITIAL===o,notClickable:j.V.COMPLETED===o,onClick:function(){return x(j.V.COMPLETED!==o)},padding:"6px",primary:j.V.RUNNING===o,warning:j.V.CANCELLED===o,children:j.D[o]}),(0,E.jsx)(p.Z,{onClickOutside:function(){return x(!1)},open:f,children:(0,E.jsxs)(v.f,{children:[[j.V.RUNNING,j.V.INITIAL].includes(o)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,E.jsx)(m.Z,{mb:1}),(0,E.jsxs)(Z.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,E.jsx)("br",{}),"the current pipeline run."]}),(0,E.jsx)(Z.ZP,{}),(0,E.jsx)(m.Z,{mt:1,children:(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(d.Z,{onClick:function(){w(),b()},children:"Retry run"}),(0,E.jsx)(m.Z,{ml:1}),(0,E.jsx)(d.Z,{onClick:w,children:"Cancel run"})]})})]}),[j.V.CANCELLED,j.V.FAILED].includes(o)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Z.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",o]}),(0,E.jsx)(m.Z,{mb:1}),(0,E.jsx)(Z.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,E.jsx)(m.Z,{mb:1}),(0,E.jsx)(d.Z,{onClick:b,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.fetchPipelineRuns,i=e.onClickRow,r=e.pipelineRuns,o=e.selectedRun,l=(0,a.Db)((function(e){return _.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),s=(0,t.Z)(l,1)[0],p=[null,1,2,1,1,null],g=[{uuid:"Status"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return i&&(p.push(null),g.push({label:function(){return""},uuid:"action"})),(0,E.jsx)(v.c,{minHeight:30*k.iI,children:0===r.length?(0,E.jsx)(m.Z,{px:3,py:1,children:(0,E.jsx)(Z.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No runs available"})}):(0,E.jsx)(b.Z,{columnFlex:p,columns:g,isSelectedRow:function(e){return r[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:i,rows:r.map((function(e,t){var o=e.block_runs_count,l=e.completed_at,a=e.execution_date,p=e.id,g=e.pipeline_schedule_id,b=e.pipeline_schedule_name,_=e.pipeline_uuid,v=e.status,I=[];return I=t>0&&r[t-1].execution_date==e.execution_date&&r[t-1].id==e.id?[(0,E.jsx)(m.Z,{ml:1,children:(0,E.jsxs)(h.Z,{alignItems:"center",children:[(0,E.jsx)(O.TT,{size:2*k.iI,useStroke:!0}),(0,E.jsx)(d.Z,{borderRadius:C.D7,notClickable:!0,padding:"6px",children:(0,E.jsx)(Z.ZP,{muted:!0,children:j.D[v]})})]})},"row_item_1"),(0,E.jsx)(Z.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_2"),(0,E.jsx)(Z.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_3"),(0,E.jsx)(c(),{as:"/pipelines/".concat(_,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,E.jsx)(x.Z,{bold:!0,muted:!0,children:"See block runs (".concat(o,")")})},"row_item_4"),(0,E.jsx)(Z.ZP,{monospace:!0,muted:!0,children:l&&(0,w.eI)(l).toISOString().split(".")[0]||"-"},"row_item_5"),(0,E.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(_,"/logs?pipeline_run_id[]=").concat(p))},children:(0,E.jsx)(O.B4,{default:!0,size:2*k.iI})},"row_item_6")]:[(0,E.jsx)(P,{onCancel:s,onSuccess:n,pipelineRun:e},"row_item_7"),(0,E.jsx)(Z.ZP,{default:!0,monospace:!0,children:a&&(0,w.eI)(a).toISOString().split(".")[0]||"-"},"row_item_8"),(0,E.jsx)(c(),{as:"/pipelines/".concat(_,"/triggers/").concat(g),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,E.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:b})},"row_item_9"),(0,E.jsx)(c(),{as:"/pipelines/".concat(_,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,E.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(o,")")})},"row_item_10"),(0,E.jsx)(Z.ZP,{default:!0,monospace:!0,children:l&&(0,w.eI)(l).toISOString().split(".")[0]||"-"},"row_item_11"),(0,E.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(_,"/logs?pipeline_run_id[]=").concat(p))},children:(0,E.jsx)(O.B4,{default:!0,size:2*k.iI})},"row_item_12")],i&&I.push((0,E.jsx)(f.Z,{flex:1,justifyContent:"flex-end",children:(0,E.jsx)(O._Q,{default:!0,size:2*k.iI})})),I})),uuid:"pipeline-runs"})})}},19395:function(e,n,i){i.d(n,{IJ:function(){return a},eI:function(){return d},gU:function(){return f},tL:function(){return p},vJ:function(){return h}});var r,t,o=i(82394),c=i(92083),l=i.n(c);function u(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?u(Object(i),!0).forEach((function(n){(0,o.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var i=n.block_uuid,r=n.completed_at,t=n.started_at,c=n.status,u=null;t&&r&&(u=l()(r).valueOf()-l()(t).valueOf());return s(s({},e),{},(0,o.Z)({},i,{runtime:u,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(l()(e).valueOf()),i=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(i)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(t||(t={}));var p=(r={},(0,o.Z)(r,t.DAY,86400),(0,o.Z)(r,t.HOUR,3600),(0,o.Z)(r,t.MINUTE,60),(0,o.Z)(r,t.SECOND,1),r);function f(e){var n=t.SECOND,i=e;return e%86400===0?(i/=86400,n=t.DAY):e%3600===0?(i/=3600,n=t.HOUR):e%60===0&&(i/=60,n=t.MINUTE),{time:i,unit:n}}function h(e,n){return e*p[n]}},51099:function(e,n,i){i(82684);var r=i(60328),t=i(67971),o=i(86673),c=i(10503),l=i(73899),u=i(49125),s=i(28598);n.Z=function(e){var n=e.page,i=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=i;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),x=n-h;n+h>=d?(x=d-f+2,f-=2):n-h<=0?(x=0,f-=2):(f-=4,x=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+x}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(t.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},47409:function(e,n,i){i.d(n,{D:function(){return c},V:function(){return o}});var r,t=i(82394),o=i(66050).V,c=(r={},(0,t.Z)(r,o.COMPLETED,"Done"),(0,t.Z)(r,o.CANCELLED,"Cancelled"),(0,t.Z)(r,o.FAILED,"Failed"),(0,t.Z)(r,o.RUNNING,"Running"),(0,t.Z)(r,o.INITIAL,"Ready"),r)}}]);