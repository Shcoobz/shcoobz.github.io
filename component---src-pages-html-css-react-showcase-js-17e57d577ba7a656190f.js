(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3mwt":function(e,t,a){},Bj0W:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o),n=a("qhky");t.a=e=>{let{title:t,description:a,imageUrl:o,pageUrl:c,lang:i}=e;return r.a.createElement(n.a,null,r.a.createElement("html",{lang:i||"en"}),r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"author",content:"Agata Boeckmann"}),r.a.createElement("link",{rel:"icon",href:"/icons/hand-peace-regular.svg",type:"image/svg+xml"}),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"og:url",content:c}))}},CSiX:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o);t.a=e=>{let{text:t}=e;return r.a.createElement("div",{className:"title-pages"},r.a.createElement("div",{className:"title-text-wrapper",style:{flexGrow:1}},r.a.createElement("h1",{className:"title-pages-text"},t)),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("a",{href:"#",onClick:()=>{window.history.back()},className:"cta-btn cta-btn--back"},"Back")))}},Nhc3:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),r=a.n(o),n=a("Bj0W"),c=a("SsQ1"),i=a("sQ9v");t.default=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{title:"AB || HTML, CSS, JavaScript, React Projects",description:"Collection of my HTML, CSS, JavaScript and React projects.",imageUrl:"https://i.imgur.com/fnrZxXc.png",pageUrl:"https://shcoobz.github.io/html-css-react-showcase-page/",lang:"en"}),r.a.createElement(i.default,{pageTitle:"let title = [ 'HTML', 'CSS', 'JavaScript', 'React' ]",projectData:c.a}))},SsQ1:function(e,t,a){"use strict";var o=a("4b23");const r=[{id:Object(o.a)(),img:"react_country-fetching-app.png",title:"Country fetching App",info:"The Country Fetching App is a versatile web application that provides users with easy access to comprehensive information about countries worldwide. With features like dynamic search, sorting, and favoriting countries, it offers a seamless user experience for exploring diverse international data.",info2:"",url:"https://shcoobz.github.io/Country-fetching-App/",repo:"https://github.com/Shcoobz/Country-fetching-App"},{id:Object(o.a)(),img:"react_country-fetching-app.png",title:"Country fetching App with Database",info:"This project is an extension of the Country fetching App where favorites are saved in a Mongo database instead.",info2:"Please note that this project includes a backend component that requires server-side processing, which Github Pages does not offer",url:"",repo:"https://github.com/Shcoobz/Country-fetching-App-with-Database"},{id:Object(o.a)(),img:"react_pokemon-battle.png",title:"Pokemon Battle",info:"This application allows you to embark on exciting Pokémon battles. Choose your location, select a starter Pokémon, and engage in battles. Win to catch the defeated Pokémon or try again if you lose.",info2:"",url:"https://shcoobz.github.io/pokemon-battle/ ",repo:"https://github.com/Shcoobz/pokemon-battle"},{id:Object(o.a)(),img:"react_pizzeria-menu.png",title:"Pizzeria App",info:"The Pizza Order system is a streamlined solution for placing pizza orders, offering a user-friendly interface to select and customize pizzas with ease.",info2:"Please note that this project includes a backend component that requires server-side processing, which Github Pages does not offer.",url:"",repo:"https://github.com/CodecoolGlobal/pizza-order-prototype-javascript-ElinaVestere"},{id:Object(o.a)(),img:"react_tic-tac-toe.png",title:"Tic Tac Toe",info:"This application allows you to embark on exciting Pokémon battles. Choose your location, select a starter Pokémon, and engage in battles. Win to catch the defeated Pokémon or try again if you lose.",info2:"",url:"https://shcoobz.github.io/tic-tac-toe/",repo:"https://github.com/Shcoobz/tic-tac-toe"}];t.a=r},sQ9v:function(e,t,a){"use strict";a.r(t);var o=a("KQm4"),r=a("q1tI"),n=a.n(r),c=(a("q4sD"),a("J9yo"),a("Wbzz")),i=a("/eHF"),s=a.n(i),l=a("c+OE"),p=a.n(l),m=a("7vrA"),h=a("3Z9Z"),u=a("JI6e"),g=a("cT+2");a("uv10");var d=e=>{let{projects:t}=e;const{0:a,1:o}=Object(r.useState)(!1),{0:i,1:l}=Object(r.useState)(!1);return Object(r.useEffect)(()=>{window.innerWidth>769?(o(!0),l(!1)):(l(!0),o(!1))},[]),n.a.createElement("section",{className:"showcase-projects"},n.a.createElement(m.a,{fluid:!0},n.a.createElement("div",{className:"showcase-project-wrapper"},n.a.createElement(h.a,{className:"showcase-row"},t.map(e=>{const{title:t,info:a,info2:o,url:r,repo:i,img:l,id:m}=e,h=r||i;return n.a.createElement(u.a,{lg:4,sm:12,key:m,className:"showcase-col"},n.a.createElement(s.a,{bottom:!0,duration:1e3,delay:500,distance:"30px"},n.a.createElement("div",{className:"showcase-project-container"},n.a.createElement("div",{className:"showcase-project-wrapper__image showcase-project-wrapper__multi"},n.a.createElement("a",{href:h||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},n.a.createElement(p.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},n.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},n.a.createElement(g.a,{alt:t,filename:l}))))),n.a.createElement("div",{className:"showcase-project-wrapper__text"},n.a.createElement("h3",{id:"showcase-project-title",className:"showcase-project-wrapper__text-title"},t||"Project Title"),n.a.createElement("div",null,n.a.createElement("p",{className:"showcase-projects-info"},a||"Project description here..."),n.a.createElement("p",{className:"showcase-projects-info2"},o||"")),n.a.createElement("div",{className:"showcase-button-container"},r&&n.a.createElement(c.Link,{to:r,className:"cta-btn cta-btn--hero",target:"_blank",rel:"noopener noreferrer"},"See Live"),i&&n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:i},"Source Code"))))))})))))},f=a("RQEK"),b=a("CSiX"),E=a("uUQr");t.default=e=>{let{pageTitle:t,pageDescription:a,projectData:c}=e;const{0:i,1:s}=Object(r.useState)([]);return Object(r.useEffect)(()=>{s(Object(o.a)(c))},[c]),n.a.createElement(f.a,{value:{projects:i}},n.a.createElement(b.a,{text:t}),a&&n.a.createElement("p",{className:"page-description"},a),n.a.createElement(d,{projects:i}),n.a.createElement(E.a,null))}},uUQr:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o);a("3mwt");t.a=()=>r.a.createElement("footer",{className:"footer-pages"},r.a.createElement("span",{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})))},uv10:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-html-css-react-showcase-js-17e57d577ba7a656190f.js.map