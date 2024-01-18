(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3mwt":function(e,t,a){},Bj0W:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("qhky");t.a=e=>{let{title:t,description:a,imageUrl:r,pageUrl:o,lang:i}=e;return n.a.createElement(c.a,null,n.a.createElement("html",{lang:i||"en"}),n.a.createElement("title",null,t),n.a.createElement("meta",{name:"description",content:a}),n.a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>✌undefined</text></svg>"}),n.a.createElement("meta",{property:"og:title",content:t}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:image",content:r}),n.a.createElement("meta",{property:"og:url",content:o}))}},CSiX:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=e=>{let{text:t}=e;return n.a.createElement("div",{className:"title-pages"},n.a.createElement("div",{className:"title-text-wrapper",style:{flexGrow:1}},n.a.createElement("h1",{className:"title-pages-text"},t)),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("a",{href:"#",onClick:()=>{window.history.back()},className:"cta-btn cta-btn--back"},"Back")))}},Vx3G:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),c=a("Bj0W"),o=a("XqgC"),i=a("sQ9v");t.default=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"AB || OOP, Java, Spring Projects",description:"Collection of my Java Spring projects.",imageUrl:"https://i.imgur.com/Rd9C7QG.png",pageUrl:"https://shcoobz.github.io//java-spring-showcase-page/",lang:"en"}),n.a.createElement(i.default,{pageTitle:"let title = [ 'OOP', 'Java', 'Spring' ]",pageDescription:"Collection of my Java Spring projects.",projectData:o.a}))},XqgC:function(e,t,a){"use strict";var r=a("4b23");const n=[{id:Object(r.a)(),img:"quote-generator.png",title:"Quote Generator",info:"This was one of my first projects. It is a single-page web application that retrieves random quotes from an API and allows users to share them on Twitter.",info2:"",url:"https://shcoobz.github.io/quote-generator/",repo:"https://github.com/Shcoobz/quote-generator"},{id:Object(r.a)(),img:"infinity-scroll.png",title:"Infinity Scroll",info:"This web application uses the Unsplash API to provide an infinite scroll of random images. As the user scrolls down, it continuously loads more images for an endless visual experience.",info2:"",url:"https://shcoobz.github.io/infinite-scroll/",repo:"https://github.com/Shcoobz/infinite-scroll"},{id:Object(r.a)(),img:"picture-in-picture.png",title:"Picture in picture",info:"This web application is an interactive tool designed to create a user-friendly interface where users can play a video in Picture in Picture mode, allowing them to watch video content while interacting with other applications or websites.",info2:"",url:"https://shcoobz.github.io/picture-in-picture/",repo:"https://github.com/Shcoobz/picture-in-picture"}];t.a=n},sQ9v:function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("q1tI"),c=a.n(n),o=(a("q4sD"),a("J9yo"),a("Wbzz")),i=a("/eHF"),s=a.n(i),l=a("c+OE"),p=a.n(l),m=a("7vrA"),u=a("3Z9Z"),g=a("JI6e"),h=a("cT+2");a("uv10");var d=e=>{let{projects:t}=e;const{0:a,1:r}=Object(n.useState)(!1),{0:i,1:l}=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.innerWidth>769?(r(!0),l(!1)):(l(!0),r(!1))},[]),c.a.createElement("section",{className:"showcase-projects"},c.a.createElement(m.a,{fluid:!0},c.a.createElement("div",{className:"showcase-project-wrapper"},c.a.createElement(u.a,{className:"showcase-row"},t.map(e=>{const{title:t,info:a,info2:r,url:n,repo:i,img:l,id:m}=e;return c.a.createElement(g.a,{lg:4,sm:12,key:m,className:"showcase-col"},c.a.createElement(s.a,{bottom:!0,duration:1e3,delay:500,distance:"30px"},c.a.createElement("div",{className:"showcase-project-container"},c.a.createElement("div",{className:"showcase-project-wrapper__image showcase-project-wrapper__multi"},c.a.createElement("a",{href:n||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},c.a.createElement(p.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},c.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},c.a.createElement(h.a,{alt:t,filename:l}))))),c.a.createElement("div",{className:"showcase-project-wrapper__text"},c.a.createElement("h3",{id:"showcase-project-title",className:"showcase-project-wrapper__text-title"},t||"Project Title"),c.a.createElement("div",null,c.a.createElement("p",{className:"showcase-projects-info"},a||"Project description here..."),c.a.createElement("p",{className:"showcase-projects-info2"},r||"")),c.a.createElement("div",{className:"showcase-button-container"},n&&c.a.createElement(o.Link,{to:n,className:"cta-btn cta-btn--hero",target:"_blank",rel:"noopener noreferrer"},"See Live"),i&&c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:i},"Source Code"))))))})))))},f=a("RQEK"),w=a("CSiX"),b=a("uUQr");t.default=e=>{let{pageTitle:t,pageDescription:a,projectData:o}=e;const{0:i,1:s}=Object(n.useState)([]);return Object(n.useEffect)(()=>{s(Object(r.a)(o))},[o]),c.a.createElement(f.a,{value:{projects:i}},c.a.createElement(w.a,{text:t}),a&&c.a.createElement("p",{className:"page-description"},a),c.a.createElement(d,{projects:i}),c.a.createElement(b.a,null))}},uUQr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("3mwt");t.a=()=>n.a.createElement("footer",{className:"footer-pages"},n.a.createElement("span",{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})))},uv10:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-java-spring-showcase-page-js-db65d080b54eb95f0203.js.map