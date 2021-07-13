(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(16),o=n.n(s),a=(n(32),n(24)),l=n(17),r=n(18),j=n(25),d=n(23),h=(n(33),n(34),n(35),n(2)),b=n.n(h),m=n(0),g=function(e){var t=e.getComponentHeight;return Object(c.useEffect)((function(){setTimeout((function(){var e=document.querySelector("#header").offsetHeight;t("home",e-250)}),1e3)}),[]),Object(m.jsx)("header",{id:"header",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.Fade,{left:!0,children:Object(m.jsx)("img",{src:"img/my-photo.jpg",alt:"my profile"})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)(h.Fade,{right:!0,children:[Object(m.jsx)("p",{children:"Hi, I'm"}),Object(m.jsx)("h2",{children:"Albert Salang"}),Object(m.jsx)("h3",{children:"Full-Stack Web Developer"}),Object(m.jsx)("p",{children:"I'm here to help individual and organization to address their problem through interactive and functional web solution."})]}),Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("a",{href:"documents/cv.pdf",target:"_blank",children:Object(m.jsx)("button",{children:"Get my CV"})})})]})]})})},p=n(3),u=(n(48),function(e){var t=e.active,n=Object(c.useState)(!1),i=Object(p.a)(n,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){document.querySelectorAll(".nav-button").forEach((function(e){e.classList.remove("active")})),"home"===t?document.querySelector("#btn-home").classList.add("active"):"aboutme"===t?document.querySelector("#btn-aboutme").classList.add("active"):"skills"===t?document.querySelector("#btn-skills").classList.add("active"):"projects"===t?document.querySelector("#btn-projects").classList.add("active"):"contact"===t&&document.querySelector("#btn-contact").classList.add("active")}),[t]),Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){!0===s&&o(!1)}))}),[s]),Object(m.jsx)("nav",{id:"nav",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{className:"img-mylogo",src:"img/my-logo.png",alt:"my logo"}),Object(m.jsx)("button",{className:s?"sm-display-none lg-display-none":"sm-diplay-block lg-display-none",onClick:function(){o(!0)},children:Object(m.jsx)("span",{class:"material-icons",children:"menu"})}),Object(m.jsx)("button",{className:s?"sm-diplay-block lg-display-none":"sm-display-none lg-diplay-none",onClick:function(){o(!1)},children:Object(m.jsx)("span",{class:"material-icons",children:"close"})}),Object(m.jsxs)("div",{id:"nav-menu",className:s?"sm-diplay-flex lg-display-flex":"sm-display-none lg-display-flex",children:[Object(m.jsx)("a",{href:"#header",children:Object(m.jsxs)("button",{id:"btn-home",className:"nav-button active",onClick:function(){o(!1)},children:["Home",Object(m.jsx)("hr",{})]})}),Object(m.jsx)("a",{href:"#section-aboutme",children:Object(m.jsxs)("button",{id:"btn-aboutme",className:"nav-button",onClick:function(){o(!1)},children:["About\xa0Me",Object(m.jsx)("hr",{})]})}),Object(m.jsx)("a",{href:"#section-skills",children:Object(m.jsxs)("button",{id:"btn-skills",className:"nav-button",onClick:function(){o(!1)},children:["Skills",Object(m.jsx)("hr",{})]})}),Object(m.jsx)("a",{href:"#section-projects",children:Object(m.jsxs)("button",{id:"btn-projects",className:"nav-button",onClick:function(){o(!1)},children:["Projects",Object(m.jsx)("hr",{})]})}),Object(m.jsx)("a",{href:"#section-contact",children:Object(m.jsxs)("button",{id:"btn-contact",className:"nav-button",onClick:function(){o(!1)},children:["Contact",Object(m.jsx)("hr",{})]})})]})]})})}),O=(n(49),function(e){var t=e.getComponentHeight;return Object(c.useEffect)((function(){setTimeout((function(){var e=document.querySelector("#section-aboutme").offsetTop;t("aboutme",e)}),1e3)}),[]),Object(m.jsx)("section",{id:"section-aboutme",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(b.a,{up:!0,children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Know About Me"}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["I\u2019m Albert Salang a",Object(m.jsx)("span",{children:" Full-Stack Web Developer"})," living in Quezon City. I have finished a Bachelor Degree in Information Technology and currently enrolled in a coding bootcamp."]}),Object(m.jsxs)("p",{children:["Creating interactive and functional website is my"," ",Object(m.jsx)("span",{children:"passion"}),". I enjoy challenging myself with solving complex problem and making code logic and structure that comes with it. I am also a good web and graphic designer too."]})]})]})})})})}),x=(n(50),function(e){var t=e.getComponentHeight,n=Object(c.useState)([{name:"HTML",img:"img/html.png"},{name:"CSS",img:"img/css.png"},{name:"Javascript",img:"img/javascript.png"},{name:"JQuery",img:"img/jquery.png"},{name:"Bootstrap",img:"img/bootstrap.png"},{name:"React",img:"img/react.png"},{name:"Adobe Photoshop",img:"img/adobephotoshop.png"}]),i=Object(p.a)(n,1)[0],s=Object(c.useState)([{name:"Php",img:"img/php.png"},{name:"Node JS",img:"img/nodejs.png"},{name:"Express JS",img:"img/expressjs.png"},{name:" Mysql",img:"img/mysql.png"},{name:"MongoDB",img:"img/mongodb.png"},{name:"Git",img:"img/git.png"}]),o=Object(p.a)(s,1)[0],a=function(){setTimeout((function(){var e=document.querySelector("#section-skills").offsetHeight;t("skills",e)}),1e3)};return Object(c.useEffect)((function(){a()}),[]),Object(m.jsx)("section",{id:"section-skills",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.Fade,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Professional Skills"}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("h4",{children:"Front End"})}),Object(m.jsx)("div",{className:"skills-container",children:Object(m.jsx)(h.Zoom,{onReveal:a,children:i.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:e.img,alt:e.name}),Object(m.jsx)("p",{children:e.name})]})}))})}),Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("h4",{children:"Back End"})}),Object(m.jsx)("div",{className:"skills-container",children:Object(m.jsx)(h.Zoom,{onReveal:a,children:o.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:e.img,alt:e.name}),Object(m.jsx)("p",{children:e.name})]})}))})})]})})}),f=(n(51),function(e){var t=e.project;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:t.img,alt:t.title}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:t.title})}),Object(m.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:"View live"})]})]})}),v=n(19),k=n.n(v),y=function(e){var t=e.getComponentHeight,n=Object(c.useState)([{img:"img/static-website.png",title:"Responsive Static Website",link:"https://albertsalang.github.io/static-website/"},{img:"img/higher-and-lower-card-game.png",title:"JS Game",link:"https://albertsalang.github.io/lower-and-higher-cardgame/"},{img:"img/pokedex.png",title:"Pokedex",link:"https://albertsalang.github.io/pokedex/"},{img:"img/todo-app.png",title:"Todo App",link:"https://albertsalang.github.io/todo-app/"},{img:"img/resto-app.png",title:"Resto App",link:"https://albertsalang.github.io/resto-app/"},{img:"img/calculator.png",title:"Calculator",link:"https://albertsalang.github.io/calculator/"},{img:"img/blog-app.png",title:"Blog App",link:"https://albertsalang.github.io/blog-app/"},{img:"img/digital-clock.png",title:"Digital Clock",link:"https://albertsalang.github.io/digital-clock/"}]),i=Object(p.a)(n,1)[0],s=Object(c.useState)(["img/photo1.jpeg","img/photo6.jpg","img/photo2.jpeg","img/photo3.jpeg","img/photo4.jpeg","img/photo5.jpeg"]),o=Object(p.a)(s,1)[0],a=Object(c.useState)(!1),l=Object(p.a)(a,2),r=l[0],j=l[1],d=Object(c.useState)(!1),b=Object(p.a)(d,2),g=b[0],u=b[1],O=Object(c.useState)(0),x=Object(p.a)(O,2),v=x[0],y=x[1],w=Object(c.useState)(!1),S=Object(p.a)(w,2),C=S[0],H=S[1],N=Object(c.useCallback)((function(e){y(e),H(!0)}),[]),E=function(){setTimeout((function(){var e=document.querySelector("#section-projects").offsetHeight;t("projects",e)}),1e3)};return Object(c.useEffect)((function(){E()}),[]),Object(c.useEffect)((function(){document.querySelector("body").style.overflow=C?"hidden":"auto"}),[C]),Object(m.jsxs)("section",{id:"section-projects",children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.Fade,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"My Projects"}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("h4",{children:"Websites"})}),Object(m.jsxs)("div",{id:"websites-container",children:[Object(m.jsx)(h.Zoom,{children:i.slice(0,3).map((function(e){return Object(m.jsx)(f,{project:e})}))}),r?i.slice(3).map((function(e){return Object(m.jsx)(h.Zoom,{onReveal:E,children:Object(m.jsx)(f,{project:e})})})):null]}),r?Object(m.jsxs)("button",{onClick:function(){j(!1),E()},children:["See Less",Object(m.jsx)("span",{class:"material-icons",children:"expand_less"})]}):Object(m.jsxs)("button",{onClick:function(){j(!0),E()},children:["See More",Object(m.jsx)("span",{class:"material-icons",children:"expand_more"})]}),Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("h4",{children:"Gallery"})}),Object(m.jsxs)("div",{id:"gallery-container",children:[Object(m.jsx)(h.Zoom,{children:o.slice(0,3).map((function(e,t){return Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:e,onClick:function(){return N(t)},width:"100%",style:{borderRadius:"5px"},alt:"gallery image "+t},t)})}))}),g?o.slice(3).map((function(e,t){return Object(m.jsx)(h.Zoom,{children:Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:e,onClick:function(){return N(t)},width:"100%",style:{borderRadius:"5px"},alt:"gallery image "+t},t)})})})):null]}),g?Object(m.jsxs)("button",{onClick:function(){u(!1),E()},children:["See Less",Object(m.jsx)("span",{class:"material-icons",children:"expand_less"})]}):Object(m.jsxs)("button",{onClick:function(){u(!0),E()},children:["See More",Object(m.jsx)("span",{class:"material-icons",children:"expand_more"})]})]}),Object(m.jsx)("div",{className:"image-viewer",children:C&&Object(m.jsx)(k.a,{src:o,currentIndex:v,onClose:function(){y(0),H(!1)},backgroundStyle:{position:"fixed",height:"100vh",backgroundColor:"rgba(0,0,0,0.8)",zIndex:"10"}})})]})},w=(n(67),function(){return Object(m.jsx)("section",{id:"section-contact",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.Fade,{up:!0,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Contact Me"}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)("div",{id:"contacts-container",children:Object(m.jsxs)(h.Fade,{up:!0,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{class:"material-icons",children:"place"}),Object(m.jsx)("p",{children:"Quezon City, Philippines"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{class:"material-icons",children:"email"}),Object(m.jsx)("p",{children:"albertsalang15@gmail.com"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{class:"material-icons",children:"call"}),Object(m.jsx)("p",{children:"+63 927 047 3879"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{class:"material-icons",children:"contact_page"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/albert-salang-b94b2b212",target:"_blank",children:"linkedin.com/in/albert-salang-b94b2b212"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"img/github.png"}),Object(m.jsx)("a",{href:"https://www.github.com/albertsalang",target:"_blank",children:"github.com/albertsalang"})]})]})})]})})}),S=n(22),C=n.n(S),H=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={componentsHeight:[{name:"home",height:0},{name:"aboutme",height:0},{name:"skills",height:0},{name:"projects",height:0}],active:""},e.getComponentHeight=function(t,n){var c=Object(a.a)(e.state.componentsHeight);c.forEach((function(i){i.name===t&&(i.height=n,e.setState({componentsHeight:c}))}))},e.responsiveNav=function(){var t=[{name:"home",offset:0},{name:"aboutme",offset:e.state.componentsHeight[0].height+e.state.componentsHeight[1].height},{name:"skills",offset:e.state.componentsHeight[0].height+e.state.componentsHeight[1].height+e.state.componentsHeight[2].height},{name:"projects",offset:e.state.componentsHeight[0].height+e.state.componentsHeight[1].height+e.state.componentsHeight[2].height+e.state.componentsHeight[3].height}];window.pageYOffset>t[3].offset?e.setState({active:"contact"}):window.pageYOffset>t[2].offset&&window.pageYOffset<t[3].offset?e.setState({active:t[3].name}):window.pageYOffset>t[1].offset&&window.pageYOffset<t[2].offset?e.setState({active:t[2].name}):window.pageYOffset>t[0].offset&&window.pageYOffset<t[1].offset?e.setState({active:t[1].name}):window.pageYOffset<t[0].offset&&e.setState({active:t[0].name})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.responsiveNav),setTimeout((function(){e.responsiveNav()}),1100)}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"div-app",children:[Object(m.jsx)(g,{id:"header-component",getComponentHeight:this.getComponentHeight}),Object(m.jsx)(C.a,{className:"nav-sticky",children:Object(m.jsx)(u,{active:this.state.active})}),Object(m.jsx)(O,{id:"aboutme-component",getComponentHeight:this.getComponentHeight}),Object(m.jsx)(x,{id:"skills-component",getComponentHeight:this.getComponentHeight}),Object(m.jsx)(y,{id:"projects-component",getComponentHeight:this.getComponentHeight}),Object(m.jsx)(w,{id:"contact-component"})]})}}]),n}(i.a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),N()}},[[73,1,2]]]);
//# sourceMappingURL=main.96d2b4d3.chunk.js.map