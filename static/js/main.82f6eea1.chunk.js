(this.webpackJsonpsolution_swap=this.webpackJsonpsolution_swap||[]).push([[0],{10:function(e,a,t){e.exports={formTextArea:"CreateTask_formTextArea__38Iku",formSelect:"CreateTask_formSelect__1JJwP",formFile:"CreateTask_formFile__3kngV",modalBody:"CreateTask_modalBody__3pX9n",modal:"CreateTask_modal__1Lzbg",modalDialog:"CreateTask_modalDialog__3U82-",modalFooter:"CreateTask_modalFooter__DAgRx",btn:"CreateTask_btn__2-eer",formLabel:"CreateTask_formLabel__1_mwo"}},18:function(e,a,t){e.exports={jumbotron:"Header_jumbotron__2Xo46",nav:"Header_nav__3BHXx",navbar:"Header_navbar__1NyLI",a:"Header_a__2HOTQ"}},28:function(e,a,t){e.exports={footer:"Footer_footer__3PBf_",a:"Footer_a__1EkaI"}},43:function(e,a,t){e.exports={card:"PostCard_card__2J0Yb",cardImg:"PostCard_cardImg__1OIup"}},54:function(e,a,t){e.exports={home:"Home_home__1CsI4"}},55:function(e,a,t){e.exports=t(71)},61:function(e,a,t){},62:function(e,a,t){},66:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCBACKhhe6296AAACVElEQVRIx72VTUhUcRTFz3/KB4OugqlBKqGFGFl+ZJFSLcJNBYIuWrQyHQohgiL62gUl0a7AaKH7mKIocjE5ZWgpopVkFgQttCkHgujFTIQ6/lo4zcyb5p/0eVf3nXPuuY97L/ylPwyTTWmRzM107qhBtQpqpVBccY1qxKSW8CJMWJLYxR0SwHtG6aWXp8wAH7lGw5IG1DMMPOQg6zxcOUcYAvqp/5nBc+bos/ehkcfMc5blhelJFhgnTJgWq4WPM8xxPYvkenWpSZ+XmPmCOulX8BdX9U8jcwc4aledYuox03Y5a9Wu1RpTt5nzEg7DJIgwhUu1tbwGlykiJBmiyEt1kKRSws8gUavBAwbwS2wkySEv1UMknYVwrQYu7ensHt2LmS/NxVSBX5JUq7fWEbxTrSThV4ViecPBZZAQV0jRZv2DECm6CPGIT6zJJ6uJ4jJpL5cwhJjEJUqV/laY9G7LtSwHjeu2uZ/XvVFNnhNO6bV6zLSPGk2oVY5HvVVRTnrKT6tPWzwaR62aoDqz27x+p5hlVeYryCwnftAs3gwJWguMqwTYnfnaA5QUUB0g4VOxkgVGk5CULSlOI/mRULHopKzQdHNxyjhfUGPB/2/kvgvb9NWM26Xs0GEZSUV6Ys59R305imaNcAxjd5AkBbRXx22KDr4Qoc7qEOAi87zkmb3Jem6R4i77WOHBi9jJZZK8YT8XGMsyeU+EeaVmNuioLinAuGKa0awCKtVmORpWm26YFJssQ/R0NKpSg4IqlaMPiuuFBkz64NiuSnP1t1ZWKL4BDzlSXG5VRIIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMTZUMDI6NDI6MjQrMDA6MDCzEOxKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTE2VDAyOjQyOjI0KzAwOjAwwk1U9gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},70:function(e,a,t){e.exports=t.p+"static/media/Xcode-fragment.5ab99182.png"},71:function(e,a,t){"use strict";t.r(a),t.d(a,"rerenderEntireTree",(function(){return j}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(0),l=t.n(n),r=t(22),s=t.n(r),o=(t(60),t(61),t(62),t(77)),c=t(74),i=t(50),m=t(81),u=t(80),d=t(76),A=t(18),E=t.n(A),h=t(17),p=t(73),k=t(78),f=t(79),T=t(75),b=t(10),w=t.n(b),g=function(e,a){switch(a.type){case"ADD-TASK":var t={id:5,title:e.newTaskTitle,description:e.newTaskDescription};return e.AllTasks.push(t),e.newTaskDescription="",e.newTaskTitle="",e;case"UPDATE-NEW-POST-TITLE":return e.newTaskTitle=a.newText,e;case"UPDATE-NEW-POST-DESCRIPTION":return e.newTaskDescription=a.newText,e;case"CHANGE-SHOW-MODAL":return e.showModal=!e.showModal,e;default:return e}},_=function(e){var a=e.showModal,t=l.a.createRef(),n=l.a.createRef(),r=function(){return e.dispatch({type:"CHANGE-SHOW-MODAL"})};return l.a.createElement("div",null,l.a.createElement(p.a,{variant:"primary",className:w.a.btn,onClick:r},"Pomogite ya obosrals'a"),l.a.createElement(k.a,{className:w.a.modal,dialogClassName:w.a.modalDialog,size:"lg",show:a},l.a.createElement(k.a.Body,{className:"".concat(w.a.modalBody)},l.a.createElement(f.a,null,l.a.createElement(f.a.Group,{as:c.a},l.a.createElement(f.a.Label,{className:"".concat(w.a.formLabel),column:!0,sm:2},"Task type"),l.a.createElement(i.a,{sm:3},l.a.createElement(f.a.Control,{className:"".concat(w.a.formSelect),as:"select"},l.a.createElement("option",{value:"0"},"Choose"),l.a.createElement("option",{value:"1"},"PB"),l.a.createElement("option",{value:"2"},"MathStat"),l.a.createElement("option",{value:"3"},"MathLog")))),l.a.createElement(f.a.Group,{as:c.a},l.a.createElement(f.a.Label,{className:"".concat(w.a.formLabel),column:!0,sm:2},"Task name"),l.a.createElement(i.a,{sm:10},l.a.createElement(f.a.Control,{className:"".concat(w.a.formTextArea),as:"textarea",ref:t,rows:"1",placeholder:"Name your problem",value:e.newTaskTitle,onChange:function(){return e.dispatch({type:"UPDATE-NEW-POST-TITLE",newText:t.current.value})}}))),l.a.createElement(f.a.Group,{as:c.a},l.a.createElement(f.a.Label,{className:"".concat(w.a.formLabel),column:!0,sm:2},"Description"),l.a.createElement(i.a,{sm:10},l.a.createElement(f.a.Control,{className:"".concat(w.a.formTextArea),as:"textarea",ref:n,rows:"3",placeholder:"Write about your problem...",value:e.newTaskDescription,onChange:function(){return e.dispatch({type:"UPDATE-NEW-POST-DESCRIPTION",newText:n.current.value})}}))),l.a.createElement(f.a.Group,{as:c.a,className:"mb-0"},l.a.createElement(f.a.Label,{className:"".concat(w.a.formLabel),column:!0,sm:2},"Attachment"),l.a.createElement(i.a,{sm:5},l.a.createElement(f.a.File,null))))),l.a.createElement(k.a.Footer,{className:w.a.modalFooter},l.a.createElement(T.a,null,l.a.createElement(p.a,{className:"".concat(w.a.btn),variant:"secondary",onClick:r},"Close"),l.a.createElement(p.a,{className:"".concat(w.a.btn),variant:"primary",onClick:function(){e.dispatch({type:"ADD-TASK"}),e.dispatch({type:"CHANGE-SHOW-MODAL"})}},"Post")))))},v=function(){return l.a.createElement(m.a,{sticky:"top",className:E.a.navbar,collapseOnSelect:!0,expand:"sm",variant:"dark"},l.a.createElement(m.a.Brand,null,l.a.createElement("img",{src:t(66),width:"30",height:"30",alt:"solution swap logo"})),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(u.a,null,l.a.createElement(u.a.Link,{className:E.a.a,eventKey:1,as:h.b,to:"/Home"},"Home"),l.a.createElement(u.a.Link,{className:E.a.a,eventKey:2,as:h.b,to:"/AllTasks"},"All tasks"),l.a.createElement(u.a.Link,{className:E.a.a,eventKey:3,as:h.b,to:"/PB"},"PB"),l.a.createElement(u.a.Link,{className:E.a.a,eventKey:4,as:h.b,to:"/MathStat"},"Math stat"),l.a.createElement(u.a.Link,{className:E.a.a,eventKey:5,as:h.b,to:"/MathLog"},"Math log"))))},N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(d.a,{className:E.a.jumbotron},l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement(i.a,{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Solution Swap"),l.a.createElement("p",null,"Exchange your solutions with others"),l.a.createElement("p",null,l.a.createElement(_,{dispatch:e.dispatch,showModal:e.showModal,newTaskTitle:e.newTaskTitle,newTaskDescription:e.newTaskDescription})))))))},C=t(82),y=t(43),L=t.n(y),S=function(e){var a=e.title,n=e.description;return l.a.createElement(C.a,{border:"light",width:"100%",className:"".concat(L.a.card)},l.a.createElement(C.a.Img,{src:t(70),className:"".concat(L.a.cardImg)}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,a),l.a.createElement(C.a.Text,null,n)))},M=function(e){var a=e.tasks.map((function(e){return l.a.createElement(S,{title:e.title,description:e.description,id:e.id})}));return l.a.createElement("div",null,a.reverse())},B=function(e){return l.a.createElement("div",null,l.a.createElement(M,{tasks:e.tasks}))},D=function(e){return l.a.createElement("div",null,l.a.createElement(M,{tasks:e.tasks}))},P=t(6),x=function(e){return l.a.createElement("div",null,l.a.createElement(M,{tasks:e.tasks}))},I=function(e){return l.a.createElement("div",null,l.a.createElement(M,{tasks:e.tasks}))},H=t(54),O=t.n(H),U=function(e){return l.a.createElement("div",{className:"".concat(O.a.home," mt-4 mb-4")},l.a.createElement("h4",null,"There is still nothing here =("))},V=t(28),J=t.n(V),R=function(e){return console.log(e),l.a.createElement("footer",{className:J.a.footer},l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,{variant:"light",className:"justify-content-center"},l.a.createElement(u.a,null,l.a.createElement(u.a.Link,{className:J.a.a,href:"https://t.me/sdraste"},"telegram"),l.a.createElement(u.a.Link,{className:J.a.a,href:"https://instagram.com/ssdraste"},"instagram"),l.a.createElement(u.a.Link,{className:J.a.a,href:"https://www.linkedin.com/in/mykyta-oksak-8b90b91b4/"},"linkedIn")))))))},G=function(e){return l.a.createElement("div",null,l.a.createElement(N,{dispatch:e.dispatch,showModal:e.state.tasks.showModal,newPostValue:e.state.tasks.newPostValue}),l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(P.b,{path:"/Home",render:function(){return l.a.createElement(U,{tasks:e.state})}}),l.a.createElement(P.b,{path:"/AllTasks",render:function(){return l.a.createElement(B,{tasks:e.state.tasks.AllTasks})}}),l.a.createElement(P.b,{path:"/PB",render:function(){return l.a.createElement(D,{tasks:e.state.tasks.PB})}}),l.a.createElement(P.b,{path:"/MathStat",render:function(){return l.a.createElement(x,{tasks:e.state.tasks.MathStat})}}),l.a.createElement(P.b,{path:"/MathLog",render:function(){return l.a.createElement(I,{tasks:e.state.tasks.MathLog})}}),l.a.createElement(P.a,{to:"/AllTasks"})))),l.a.createElement(R,null))},W={_state:{tasks:{PB:[{id:1,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."},{id:2,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}],MathStat:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}],MathLog:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."}],AllTasks:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."},{id:3,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}],showModal:!1,newTaskTitle:"",newTaskDescription:""}},dispatch:function(e){this._state.tasks=g(this._state.tasks,e),this._callSubscriber(this._state)},getState:function(){return this._state},_callSubscriber:function(){},subscribe:function(e){this._callSubscriber=e,this._callSubscriber(this._state)}},j=function(e){s.a.render(l.a.createElement(h.a,null,l.a.createElement(G,{state:e,dispatch:W.dispatch.bind(W)})),document.getElementById("root"))};j(W.getState()),W.subscribe(j),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.82f6eea1.chunk.js.map