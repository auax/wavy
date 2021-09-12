(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(50),a=n.n(r),o=(n(59),n(60),n(23)),i=n(2),l=n(28),m=n(15),d=n(16),u=n(18),p=n(17),j=n(0),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"bot-card mb-2 tr-f",children:Object(j.jsx)("a",{href:this.props.link,children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:[Object(j.jsxs)("h3",{className:"card-title",children:[this.props.title,this.props.is_private&&Object(j.jsx)("i",{className:"fas fa-lock","data-mdb-toggle":"tooltip",title:"Private room"})]}),this.props.subtitles&&this.props.subtitles.map((function(e){return Object(j.jsx)("p",{className:"card-subtitle",children:e},e)}))]})})})},this.props.key)}}]),n}(c.a.Component),h=Object(i.f)(b),f=Object(i.f)((function(){var e=Object(s.useState)([{}]),t=Object(l.a)(e,2),n=t[0],c=t[1];try{Object(s.useEffect)((function(){fetch("/api/rooms").then((function(e){return e.json()})).then((function(e){c(e),console.log("API endpoint data retrieved.")}))}),[])}catch(r){console.log("No rooms retrieved from API endpoint.")}return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsxs)("div",{className:"container header text-center mt-5",children:[Object(j.jsx)("h1",{className:"title",children:"Find Rooms"}),Object(j.jsx)("p",{className:"subtitle",children:"Private rooms need a password."}),Object(j.jsx)("a",{className:"btn button-md",href:"create",children:"Create Room"})]}),Object(j.jsx)("div",{className:"container mt-4",children:"undefined"===typeof n.rooms?Object(j.jsx)("p",{className:"text-center subtitle",children:"No rooms available..."}):n.rooms.map((function(e,t){return Object(j.jsx)(h,{link:"room/".concat(e.id),title:e.name,subtitles:[e.description],is_private:e.private},t)}))})]})})),x=!1,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Sample error.";if(!x){console.warn("showing error");var t=document.getElementById("error-top");t.classList.remove("d-none");var n=document.getElementById("error-top-text");n.innerText=e,x=!x}},O=function(){if(x){var e=document.getElementById("error-top");e&&(e.classList.add("d-none"),x=!x)}},g=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"error-top text-center d-none",id:"error-top",children:Object(j.jsx)("p",{id:"error-top-text",children:this.props.text})})}}]),n}(c.a.Component),N=function(){var e=document.getElementById("room-password"),t=document.getElementById("private-room-ch");e.disabled=!t.checked,e.checked?e.setAttribute("disabled","false"):e.setAttribute("required","true")},y=function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=document.getElementById(e),r="form-text",a=s?c.value.length>t:c.value.length<t;if(a){var o=document.createElement("div");o.setAttribute("class",r),o.innerHTML=n;var i=c.nextSibling;i?i.className!==o.className&&c.parentNode.insertBefore(o,i):c.parentNode.appendChild(o)}else{var l=c.nextSibling;l&&l.className===r&&l.remove()}};var w,k=Object(i.f)((function(){return Object(j.jsxs)("div",{className:"create-room",id:"create-room",children:[Object(j.jsx)(g,{text:""}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row d-flex justify-content-center",children:Object(j.jsxs)("div",{className:"col-md-7",children:[Object(j.jsx)("div",{className:"header text-center mt-5",children:Object(j.jsx)("h1",{className:"title",children:"Create Room"})}),Object(j.jsxs)("form",{className:"form-create-room mt-5 tr-f",onSubmit:function(e){e.preventDefault();var t=document.getElementById("room-name").value,n=document.getElementById("room-description").value,s=document.getElementById("private-room-ch").checked,c=document.getElementById("room-password").value;fetch("/api/create/post",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({name:t,description:n,is_private:s,password:c})}).then((function(e){return e.json()})).then((function(e){e[200]?window.location.replace("room/".concat(e[200])):v(e[400])}))},autoComplete:"off",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"room-name",className:"form-label",children:"Room Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"room-name",name:"room-name","aria-describedby":"roomName",onKeyUp:function(){return y("room-name",30,"The name must be under 30 characters.",!0)},tabIndex:"0",required:!0})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"room-description",className:"form-label",children:"Room description"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"room-description",name:"room-description","aria-describedby":"roomDescripton",onKeyUp:function(){return y("room-description",150,"The description must be under 150 characters.",!0)},tabIndex:"0",required:!0})]}),Object(j.jsxs)("div",{className:"mb-3 form-check",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input",id:"private-room-ch",name:"is-private",onChange:N}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"private-room-ch",children:"Make room private"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"room-password",className:"form-label",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"room-password",name:"password",onKeyUp:function(){return y("room-password",5,"The password must be at least 4 characters.")},tabIndex:"0",disabled:!0})]}),Object(j.jsx)("button",{type:"submit",className:"btn button-md",children:"Submit"}),Object(j.jsx)("div",{id:"password-help",className:"form-text",children:"You can't change the password once the room is created."})]})]})})})]})})),I=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-dark",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("a",{className:"navbar-brand tr-f",href:"/wavy",children:"Home"})})})})},E=n(54),C=n(53),S=n.n(C),B=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;Object(m.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){if(e.preventDefault(),"input"===s.props.type.type){var t=document.getElementById("popup-input").value;if(t){if(t.length>50)return void v("Username must be under 50 characters.");fetch("/api/create/username",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({username:t,room:s.props.room})}).then((function(e){return e.json()})).then((function(e){e[200]?(O(),document.getElementById("popup-container").classList.add("d-none"),s.props.func(t)):v(e[400])}))}else v("Please input a valid username!")}};try{"input"===e.type.type&&(s.content=Object(j.jsx)("div",{className:"input-group mb-3",children:Object(j.jsx)("input",{type:"text",id:"popup-input",className:"popup-input form-control",placeholder:e.type.placeholder})}))}catch(c){console.error("Error in popup component. Error while reading 'type'"),v("There was an error while creating the popup content!")}return s}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"popup-container",children:[Object(j.jsx)(g,{text:""}),Object(j.jsx)("form",{autoComplete:"off",onSubmit:this.onSubmit,children:Object(j.jsxs)("div",{className:"popup form-control p-5",id:"popup",children:[Object(j.jsx)("h3",{className:"title-md mt-5 pt-3",children:this.props.title}),Object(j.jsx)("p",{className:"subtitle",children:this.props.subtitle}),this.content,Object(j.jsx)("button",{type:"submit",className:"btn button-sm w-100",children:"Submit"})]})})]})}}]),n}(c.a.Component),T=[];console.log(T);var F=function(){console.log("Function reload."),console.log(w);var e=S.a.connect("".concat("https://wavy-chat.herokuapp.com")),t=window.location.pathname.split("/")[2],n=Object(s.useState)(T),c=Object(l.a)(n,2),r=c[0],a=c[1];e.on("message",(function(e,t){console.log("Username ".concat(e[1]," incoming message: ").concat(e[0]));var n={msg:e[0],user:e[1]};a([].concat(Object(E.a)(r),[n])),T.push(n);var s=document.getElementById("messages");s.scrollTop=s.scrollHeight}));var o=function(n){try{n.preventDefault()}catch(r){console.warn("Event undefined. -- 'event.preventDefault()'")}var s=document.getElementById("message-input"),c=s.value;""!==c&&c.length<=5e3?(O(),e.emit("message",{message:c,channel:t,username:w}),s.value=""):(console.log("Invalid blank message"),v("Invalid message. Message cannot be blank or contain more than 5000 characters."))};return window.onbeforeunload=function(){e.emit("disconnect_client",{room:t,username:w})},Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"room",children:[Object(j.jsx)(g,{text:""}),Object(j.jsx)(B,{title:"Create a temporal username.",subtitle:"Other users in this room will identify you with this user.",type:{type:"input",placeholder:"Input your username!"},room:t,func:function(n){console.log("Connected with: "+n),w=n,e.emit("join",{channel:t,username:n})}}),Object(j.jsx)("form",{onSubmit:o,children:Object(j.jsxs)("div",{className:"input-group mb-3 chat-input-container",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Message","aria-label":"Message to send",id:"message-input",name:"message"}),Object(j.jsx)("button",{className:"input-group-text send-button tr-f",id:"send-button",onClick:o,children:Object(j.jsx)("i",{className:"fa-solid fa-paper-plane tr-f"})})]})}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title mb-3",children:"Chat"}),Object(j.jsxs)("div",{className:"messages",id:"messages",children:[!r.length>0&&Object(j.jsx)("p",{className:"subtitle",children:"Nothing here..."}),function(e,t){var n=[];if(t.length>0)return t.map((function(e,t){return n.push(Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"message-sender me-2",children:e.user}),Object(j.jsx)("div",{className:"mb-1",children:Object(j.jsx)("div",{className:e.user===w?"message message-from-me d-inline-block":"message message-from-user d-inline-block",children:Object(j.jsx)("p",{className:(e.user,"message-text m-0 d-inline"),children:e.msg})})})]},t))})),n}(0,r)]})]})]})})};var P=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(I,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/wavy",exact:!0,component:function(){return Object(j.jsx)(f,{})}}),Object(j.jsx)(i.a,{path:"/wavy/create",exact:!0,component:function(){return Object(j.jsx)(k,{})}}),Object(j.jsx)(i.a,{path:"/wavy/room/:id",exact:!0,component:function(){return Object(j.jsx)(F,{})}})]})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),U()}},[[96,1,2]]]);
//# sourceMappingURL=main.3cf7324b.chunk.js.map