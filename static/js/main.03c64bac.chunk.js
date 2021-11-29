(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(62),c=n.n(o),r=(n(73),n(74),n(13)),i=n(2),l=n(67),d=n(18),m=n.n(d),u=n(14),p=n(15),h=n(17),j=n(16),b=n(0),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"bot-card mb-2 tr-f",children:Object(b.jsx)(r.b,{to:this.props.link,children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("h3",{className:"card-title",children:[this.props.title,this.props.is_private&&Object(b.jsx)("i",{className:"fas fa-lock","data-mdb-toggle":"tooltip",title:"Private room"})]}),this.props.subtitles&&this.props.subtitles.map((function(e){return Object(b.jsx)("p",{className:"card-subtitle",children:e},e)}))]})})})},this.props.key)}}]),n}(a.a.Component),v=Object(i.f)(f),x=Object(i.f)((function(){var e="https://wavy-chat.herokuapp.com",t=Object(s.useState)([{}]),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(s.useEffect)((function(){m.a.get(e+"/api/rooms").then((function(e){console.log("API endpoint data retrieved."),200===e.status&&o(e.data)})).catch((function(e){console.error(e.message),console.log("No rooms retrieved from API endpoint.")}))}),[e]),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsxs)("div",{className:"container header text-center mt-5",children:[Object(b.jsx)("h1",{className:"title",children:"Find Rooms"}),Object(b.jsx)("p",{className:"subtitle",children:"Get started by creating a room!"}),Object(b.jsx)(r.b,{to:"/create",className:"btn button-md",children:"Create Room"})]}),Object(b.jsx)("div",{className:"container mt-5",children:"undefined"===typeof a.rooms?Object(b.jsx)("p",{className:"text-center subtitle",children:"No rooms available..."}):a.rooms.map((function(e,t){return Object(b.jsx)(v,{link:"/room/".concat(e.id),title:e.name,subtitles:[e.description],is_private:e.private},t)}))})]})})),O=!1,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Sample error.";if(!O){console.warn("Showing error [".concat(e,"]"));var t=document.getElementById("error-top");if(null===t)return console.error("Couldn't display error!"),void console.error(e);t.classList.remove("d-none");var n=document.getElementById("error-top-text");n.innerText=e,O=!O}},N=function(){if(O){var e=document.getElementById("error-top");null!==e&&(e.classList.add("d-none"),O=!O)}},y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"error-top text-center d-none",id:"error-top",children:Object(b.jsx)("p",{id:"error-top-text",children:this.props.text})})}}]),n}(a.a.Component),w=function(){var e=document.getElementById("room-password"),t=document.getElementById("private-room-ch");e.disabled=!t.checked,e.checked?e.setAttribute("disabled","false"):e.setAttribute("required","true")},k=function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=document.getElementById(e),o="form-text",c=s?a.value.length>t:a.value.length<t;if(c){var r=document.createElement("div");r.setAttribute("class",o),r.innerHTML=n;var i=a.nextSibling;i?i.className!==r.className&&a.parentNode.insertBefore(r,i):a.parentNode.appendChild(r)}else{var l=a.nextSibling;l&&l.className===o&&l.remove()}};var I=Object(i.f)((function(){return Object(b.jsxs)("div",{className:"create-room",id:"create-room",children:[Object(b.jsx)(y,{text:""}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsx)("div",{className:"header text-center mt-5",children:Object(b.jsx)("h1",{className:"title",children:"Create Room"})}),Object(b.jsxs)("form",{className:"form-create-room mt-5 tr-f",onSubmit:function(e){e.preventDefault(),window.grecaptcha.ready((function(){window.grecaptcha.execute("6Lf0A2kcAAAAAL0vjtKP48OV4tdBGFStIryPOtnN",{action:"submit"}).then((function(e){var t=document.getElementById("room-name").value,n=document.getElementById("room-description").value,s=document.getElementById("private-room-ch").checked,a=document.getElementById("room-password").value;fetch("https://wavy-chat.herokuapp.com/api/create/post",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({name:t,description:n,is_private:s,password:a,captcha_token:e})}).then((function(e){return e.json()})).then((function(e){console.log("[CreateRoom request]: ".concat(JSON.stringify(e))),e[200]?window.location.replace("#/room/".concat(e[200])):g(e[400])}))}))}))},autoComplete:"off",children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("input",{type:"text",placeholder:"Room name",className:"form-control",id:"room-name",name:"room-name","aria-describedby":"roomName",onKeyUp:function(){return k("room-name",30,"The name must be under 30 characters.",!0)},tabIndex:"0",required:!0})}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("input",{type:"text",placeholder:"Description",className:"form-control",id:"room-description",name:"room-description","aria-describedby":"roomDescripton",onKeyUp:function(){return k("room-description",150,"The description must be under 150 characters.",!0)},tabIndex:"0",required:!0})}),Object(b.jsxs)("div",{className:"mb-3 form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"private-room-ch",name:"is-private",onChange:w}),Object(b.jsx)("label",{className:"form-check-label small",htmlFor:"private-room-ch",children:"Make room private"})]}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",id:"room-password",name:"password",onKeyUp:function(){return k("room-password",5,"The password must be at least 4 characters.")},tabIndex:"0",disabled:!0})}),Object(b.jsx)("div",{id:"password-help",className:"form-text",children:"You can't change the password once the room is created."}),Object(b.jsx)("button",{type:"submit",className:"btn button-md mt-3 g-recaptcha","data-sitekey":"reCAPTCHA_site_key",children:"Submit"})]})]})})})]})})),C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand ms-2",to:"/",children:"Wavy"}),Object(b.jsx)(r.b,{className:"navbar-element tr-f me-2",to:"/",children:"Home"})]})})})},S=n(68),E=n(65),B=n.n(E),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(u.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t=document.getElementById("popup-name").value,n=null;if(s.props.private&&(n=document.getElementById("popup-password").value),t){if(t.length>50)return void g("Username must be under 50 characters.");m.a.post(s.endpoint+"/api/validate/",{username:t,password:n,room:s.props.room}).then((function(e){console.log("User Validated"),"Success"===e.data[200]?(N(),document.getElementById("popup-container").classList.add("d-none"),s.props.func(t,n)):(e=e.data)[403]?g("Invalid Password!"):g("".concat(Object.keys(e),": ").concat(Object.values(e)))}))}else g("Please input a valid username!")},s.endpoint="https://wavy-chat.herokuapp.com";try{s.content=Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("input",{type:"text",id:"popup-name",className:"popup-input form-control",placeholder:e.placeholder}),!0===e.private&&Object(b.jsx)("input",{type:"password",id:"popup-password",className:"popup-input form-control",placeholder:e.placeholder_password})]})}catch(a){g("There was an error while running the 'CreateUsername.jsx' component!")}return s}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"popup-container",children:[Object(b.jsx)(y,{text:""}),Object(b.jsx)("form",{autoComplete:"off",onSubmit:this.onSubmit,children:Object(b.jsxs)("div",{className:"popup form-control p-5",id:"popup",children:[Object(b.jsx)("h3",{className:"title-md mt-5 pt-3",children:this.props.title}),Object(b.jsx)("p",{className:"subtitle",children:this.props.subtitle}),this.content,Object(b.jsx)("button",{type:"submit",className:"btn button-sm w-100",children:"Submit"})]})})]})}}]),n}(a.a.Component),P=n(66),T=n.n(P),D=function(e,t){var n=e.user,s=e.user===t?"message message-from-me d-inline-block":"message message-from-user d-inline-block",a=L(e.msg);return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"message-sender me-2",children:n}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)("div",{className:s,children:a})})]})},L=function(e){return Object(b.jsx)(T.a,{tagName:"p",className:"message-text m-0 d-inline",children:e})},M="https://wavy-chat.herokuapp.com",U=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).processInitialData=function(){m.a.get(M+"/api/room/"+s.roomId).then((function(e){200===e.status?(e=e.data[200],s.setState({isLoading:!1,id:e.id,private:e.private}),console.log("Premount data: "+JSON.stringify(e))):g("Room doesn't exist!")})).catch((function(e){g("Error getting the data"),console.error(e)}))},s.connect=function(e,t){s.socket?(s.setState({username:e}),s.socket.emit("join",{channel:s.roomId,username:e,password:t}),console.log("Connected with: "+e)):g("Error connecting to socket!")},s.join=function(e,t){m.a.post(M+"/api/join",{id:s.roomId,password:t}).then((function(n){n.data[200]?(console.log("Connected to room!"),s.socket=B.a.connect("".concat(M)),s.socket.on("message",(function(e){console.log("Username ".concat(e[1]," incoming message: ").concat(e[0]));var t={msg:e[0],user:e[1]};s.setState({messages:[].concat(Object(S.a)(s.state.messages),[t])});var n=document.getElementById("messages");n.scrollTop=n.scrollHeight})),s.connect(e,t)):g(JSON.stringify(n.data))})).catch((function(e){console.error(e.message)}))},s.sendMessage=function(e){try{e.preventDefault()}catch(a){console.warn("Event undefined: 'event.preventDefault()'")}var t=document.getElementById("message-input"),n=t.value;""!==n&&n.length<=5e3?(N(),s.socket.emit("message",{message:n,channel:s.roomId,username:s.state.username}),t.value=""):(console.log("Invalid blank message"),g("Invalid message. Message cannot be blank or contain more than 5000 characters."))},s.chatContent=function(e,t){var n=[];if(s.state.messages.length>0)return s.state.messages.map((function(e,t){return n.push(Object(b.jsx)("div",{children:D(e,s.state.username)},t))})),n},s.state={isLoading:!0,id:null,private:null,username:null,messages:[]},s.messagesArray=[],s.socket=null,s.roomId=window.location.href.split("/").pop(),s}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.processInitialData()}},{key:"componentDidUpdate",value:function(){var e=this;window.onbeforeunload=function(){e.socket.emit("disconnect_client",{room:e.roomId,username:e.state.username})},window.onresize=function(){t()};var t=function(){var e=document.getElementById("messages"),t=window.innerHeight;t-=253,e.style.height="".concat(t,"px")};t()}},{key:"render",value:function(){return!this.state.isLoading&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"room",children:[Object(b.jsx)(y,{text:""}),Object(b.jsx)(A,{title:"Create a temporal username",subtitle:"Other users in this room will identify you with this user.",placeholder:"Input your username!",room:this.roomId,private:this.state.private,placeholder_password:"Room password",func:this.join}),Object(b.jsx)("form",{onSubmit:this.sendMessage,children:Object(b.jsxs)("div",{className:"input-group mb-3 chat-input-container",children:[Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Message","aria-label":"Message to send",id:"message-input",name:"message"}),Object(b.jsx)("button",{className:"input-group-text send-button tr-f",id:"send-button",onClick:this.sendMessage,children:Object(b.jsx)("i",{className:"fa-solid fa-paper-plane tr-f"})})]})}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title mb-3 mt-5",children:"Chat"}),Object(b.jsxs)("div",{className:"messages",id:"messages",children:[!this.state.messages.length>0&&Object(b.jsx)("p",{className:"subtitle",children:"Nothing here..."}),this.chatContent(this.state.username,this.state.messages)]})]})]})})}}]),n}(a.a.Component);var _=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",exact:!0,component:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(i.a,{path:"/create",exact:!0,component:function(){return Object(b.jsx)(I,{})}}),Object(b.jsx)(i.a,{path:"/room/:id",exact:!0,component:function(){return Object(b.jsx)(U,{})}})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),F()},73:function(e,t,n){},74:function(e,t,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.03c64bac.chunk.js.map