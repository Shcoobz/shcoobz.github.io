(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3Jn5":function(e,t,a){"use strict";var r=a("4b23");const n=[{id:Object(r.a)(),img:"sql_basic-db.png",title:"Basic SQL DB",info:"Using a very short database I solve very basic SQL queries.",info2:"",url:"",repo:"https://github.com/Shcoobz/basic-sql"},{id:Object(r.a)(),img:"sql_basic-queries.png",title:"Northwind DB: Simple SQL Queries",info:"This project involves solving a series of SQL queries to extract specific information from the Northwind database.",info2:"",url:"",repo:"https://github.com/CodecoolGlobal/northwind-traders-select-sql-Shcoobz"},{id:Object(r.a)(),img:"sql_advanced-queries.png",title:"Northwind DB: Advanced SQL Queries",info:"Using the same database as before I write advanced SQL queries.",info2:"",url:"",repo:"https://github.com/CodecoolGlobal/northwind-traders-join-sql-Shcoobz"}];t.a=n},"3mwt":function(e,t,a){},Bj0W:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("qhky");t.a=e=>{let{title:t,description:a,imageUrl:r,pageUrl:s,lang:o}=e;return n.a.createElement(c.a,null,n.a.createElement("html",{lang:o||"en"}),n.a.createElement("title",null,t),n.a.createElement("meta",{name:"description",content:a}),n.a.createElement("meta",{name:"author",content:"Agata Boeckmann"}),n.a.createElement("link",{rel:"icon",href:"src/images/favicon.png",type:"image/png"}),n.a.createElement("meta",{property:"og:title",content:t}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:image",content:r}),n.a.createElement("meta",{property:"og:url",content:s}))}},CSiX:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=e=>{let{text:t}=e;return n.a.createElement("div",{className:"title-pages"},n.a.createElement("div",{className:"title-text-wrapper",style:{flexGrow:1}},n.a.createElement("h1",{className:"title-pages-text"},t)),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("a",{href:"#",onClick:()=>{window.history.back()},className:"cta-btn cta-btn--back"},"Back")))}},"ab+u":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),c=a("Bj0W"),s=a("3Jn5"),o=a("sQ9v");t.default=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"AB || SQL Projects",description:"Collection of my basic SQL queries.",imageUrl:"https://i.imgur.com/5Di9Qm3.png",pageUrl:"https://shcoobz.github.io/sql-showcase-page/",lang:"en"}),n.a.createElement(o.default,{pageTitle:"let title = [ SQL ]",projectData:s.a}))},sQ9v:function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("q1tI"),c=a.n(n),s=(a("q4sD"),a("J9yo"),a("Wbzz")),o=a("/eHF"),l=a.n(o),i=a("c+OE"),m=a.n(i),p=a("7vrA"),u=a("3Z9Z"),d=a("JI6e"),b=a("cT+2");a("uv10");var h=e=>{let{projects:t}=e;const{0:a,1:r}=Object(n.useState)(!1),{0:o,1:i}=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.innerWidth>769?(r(!0),i(!1)):(i(!0),r(!1))},[]),c.a.createElement("section",{className:"showcase-projects"},c.a.createElement(p.a,{fluid:!0},c.a.createElement("div",{className:"showcase-project-wrapper"},c.a.createElement(u.a,{className:"showcase-row"},t.map(e=>{const{title:t,info:a,info2:r,url:n,repo:o,img:i,id:p}=e,u=n||o;return c.a.createElement(d.a,{lg:4,sm:12,key:p,className:"showcase-col"},c.a.createElement(l.a,{bottom:!0,duration:1e3,delay:500,distance:"30px"},c.a.createElement("div",{className:"showcase-project-container"},c.a.createElement("div",{className:"showcase-project-wrapper__image showcase-project-wrapper__multi"},c.a.createElement("a",{href:u||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},c.a.createElement(m.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},c.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},c.a.createElement(b.a,{alt:t,filename:i}))))),c.a.createElement("div",{className:"showcase-project-wrapper__text"},c.a.createElement("h3",{id:"showcase-project-title",className:"showcase-project-wrapper__text-title"},t||"Project Title"),c.a.createElement("div",null,c.a.createElement("p",{className:"showcase-projects-info"},a||"Project description here..."),c.a.createElement("p",{className:"showcase-projects-info2"},r||"")),c.a.createElement("div",{className:"showcase-button-container"},n&&c.a.createElement(s.Link,{to:n,className:"cta-btn cta-btn--hero",target:"_blank",rel:"noopener noreferrer"},"See Live"),o&&c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:o},"Source Code"))))))})))))},E=a("RQEK"),g=a("CSiX"),f=a("uUQr");t.default=e=>{let{pageTitle:t,pageDescription:a,projectData:s}=e;const{0:o,1:l}=Object(n.useState)([]);return Object(n.useEffect)(()=>{l(Object(r.a)(s))},[s]),c.a.createElement(E.a,{value:{projects:o}},c.a.createElement(g.a,{text:t}),a&&c.a.createElement("p",{className:"page-description"},a),c.a.createElement(h,{projects:o}),c.a.createElement(f.a,null))}},uUQr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("3mwt");t.a=()=>n.a.createElement("footer",{className:"footer-pages"},n.a.createElement("span",{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})))},uv10:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-sql-showcase-js-156d3374ddddb87a4e94.js.map