"use strict";var r=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var I=(t,e)=>{for(var s in e)r(t,s,{get:e[s],enumerable:!0})},P=(t,e,s,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of u(e))!y.call(t,a)&&a!==s&&r(t,a,{get:()=>e[a],enumerable:!(o=n(e,a))||o.enumerable});return t};var d=t=>P(r({},"__esModule",{value:!0}),t);var q={};I(q,{handler:()=>x});module.exports=d(q);async function x(t,e){let s=e.awsRequestId,o=t.requestContext.requestId;return console.log(`API Gateway requestID: ${o} | Lambda requestID: ${s}`),{statusCode:200,body:JSON.stringify({message:"GET products OK"})}}0&&(module.exports={handler});
