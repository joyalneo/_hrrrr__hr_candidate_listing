"use strict";(self.webpackChunkcandidate_listing=self.webpackChunkcandidate_listing||[]).push([[378],{378:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(2950);const r=new Set;new Set;const d=new Map,o=(e,t,a,o)=>{const c=`${e}-${t}-${a}`,[i,l]=o.useState(null),{ready:s,errorLoading:u}=((e,t)=>{const[n,a]=t.useState(!1),[d,o]=t.useState(!1);return t.useEffect((()=>{if(!e)return;if(r.has(e))return a(!0),void o(!1);a(!1),o(!1);const t=document.createElement("script");return t.src=e,t.type="text/javascript",t.async=!0,t.onload=()=>{r.add(e),a(!0)},t.onerror=()=>{a(!1),o(!0)},document.head.appendChild(t),()=>{r.delete(e),document.head.removeChild(t)}}),[e]),{errorLoading:d,ready:n}})(e,o);return o.useEffect((()=>{i&&l(null)}),[c]),o.useEffect((()=>{if(s&&!i){const e=o.lazy(function(e,t){return async()=>{await n.I("default");const a=window[e];return await a.init(n.S.default),(await window[e].get(t))()}}(t,a));d.set(c,e),l(e)}}),[i,s,c]),{errorLoading:u,Component:i}},c=(new Map,e=>{const{candidateNewModal:t,current:n,handleCandidateNewModal:r}=e,{Component:d,errorLoading:c}=o("http://localhost:3003/remoteEntry.js","editmodal","./editmodal",a);return a.createElement(a.Suspense,{fallback:""},c?`Error loading module "${module}"`:d&&e&&a.createElement(d,{candidateNewModal:t,current:n,handleCandidateNewModal:r}))})}}]);