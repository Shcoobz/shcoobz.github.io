/*! For license information please see component---src-pages-project-showcase-page-js-f3d0f1285d5f99a5f1ca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3mwt":function(e,t,a){},"7vrA":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),i=a.n(o),l=a("vUet"),u=["bsPrefix","fluid","as","className"],p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,o=e.as,p=void 0===o?"div":o,m=e.className,f=Object(n.a)(e,u),d=Object(l.a)(a,"container"),v="string"==typeof c?"-"+c:"-fluid";return i.a.createElement(p,Object(r.a)({ref:t},f,{className:s()(m,c?""+d+v:d)}))}));p.displayName="Container",p.defaultProps={fluid:!1},t.a=p},CSiX:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=e=>{let{text:t}=e;return n.a.createElement("div",{className:"title-pages"},n.a.createElement("div",{className:"title-text-wrapper",style:{flexGrow:1}},n.a.createElement("h1",{className:"title-pages-text"},t)),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("a",{href:"#",onClick:()=>{window.history.back()},className:"cta-btn cta-btn--back"},"Back")))}},J9yo:function(e,t,a){},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=s(e,c(a)))}return e}function c(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},q4sD:function(e,t,a){},sQ9v:function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("q1tI"),c=a.n(n),s=(a("q4sD"),a("J9yo"),a("Wbzz")),o=a("/eHF"),i=a.n(o),l=a("c+OE"),u=a.n(l),p=a("7vrA"),m=a("3Z9Z"),f=a("JI6e"),d=a("cT+2");a("uv10");var v=e=>{let{projects:t}=e;const{0:a,1:r}=Object(n.useState)(!1),{0:o,1:l}=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.innerWidth>769?(r(!0),l(!1)):(l(!0),r(!1))},[]),c.a.createElement("section",{className:"showcase-projects"},c.a.createElement(p.a,{fluid:!0},c.a.createElement("div",{className:"showcase-project-wrapper"},c.a.createElement(m.a,{className:"showcase-row"},t.map(e=>{const{title:t,info:a,info2:r,url:n,repo:o,img:l,id:p}=e;return c.a.createElement(f.a,{lg:4,sm:12,key:p,className:"showcase-col"},c.a.createElement(i.a,{bottom:!0,duration:1e3,delay:500,distance:"30px"},c.a.createElement("div",{className:"showcase-project-container"},c.a.createElement("div",{className:"showcase-project-wrapper__image showcase-project-wrapper__multi"},c.a.createElement("a",{href:n||o||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},c.a.createElement(u.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},c.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},c.a.createElement(d.a,{alt:t,filename:l}))))),c.a.createElement("div",{className:"showcase-project-wrapper__text"},c.a.createElement("h3",{id:"showcase-project-title",className:"showcase-project-wrapper__text-title"},t||"Project Title"),c.a.createElement("div",null,c.a.createElement("p",{className:"showcase-projects-info"},a||"Project description here..."),c.a.createElement("p",{className:"showcase-projects-info2"},r||"")),c.a.createElement("div",{className:"showcase-button-container"},n&&c.a.createElement(s.Link,{to:n,className:"cta-btn cta-btn--hero",target:"_blank",rel:"noopener noreferrer"},"See Live"),o&&c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:o},"Source Code"),n&&c.a.createElement(s.Link,{to:n,className:"cta-btn cta-btn--hero",target:"_blank",rel:"noopener noreferrer"},"See Live"))))))})))))},b=a("RQEK"),w=a("CSiX"),E=a("uUQr");t.default=e=>{let{pageTitle:t,pageDescription:a,projectData:s}=e;const{0:o,1:i}=Object(n.useState)([]);return Object(n.useEffect)(()=>{i(Object(r.a)(s))},[s]),c.a.createElement(b.a,{value:{projects:o}},c.a.createElement(w.a,{text:t}),a&&c.a.createElement("p",{className:"page-description"},a),c.a.createElement(v,{projects:o}),c.a.createElement(E.a,null))}},uUQr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("3mwt");t.a=()=>n.a.createElement("footer",{className:"footer-pages"},n.a.createElement("span",{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})))},uv10:function(e,t,a){},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("wx14");var r=a("q1tI"),n=a.n(r),c=n.a.createContext({});c.Consumer,c.Provider;function s(e,t){var a=Object(r.useContext)(c);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-project-showcase-page-js-f3d0f1285d5f99a5f1ca.js.map