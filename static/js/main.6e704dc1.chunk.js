(this.webpackJsonpsolution_swap=this.webpackJsonpsolution_swap||[]).push([[0],{11:function(e,a,t){e.exports={formTextArea:"CreateTask_formTextArea__38Iku",formSelect:"CreateTask_formSelect__1JJwP",modalBody:"CreateTask_modalBody__3pX9n",modal:"CreateTask_modal__1Lzbg",modalDialog:"CreateTask_modalDialog__3U82-",btn:"CreateTask_btn__2-eer",formLabel:"CreateTask_formLabel__1_mwo",modalFooter:"CreateTask_modalFooter__DAgRx"}},23:function(e,a,t){e.exports={jumbotron:"Header_jumbotron__2Xo46",nav:"Header_nav__3BHXx",navbar:"Header_navbar__1NyLI",a:"Header_a__2HOTQ"}},28:function(e,a,t){e.exports={footer:"Footer_footer__3PBf_",a:"Footer_a__1EkaI"}},43:function(e,a,t){e.exports={card:"PostCard_card__2J0Yb",cardImg:"PostCard_cardImg__1OIup"}},57:function(e,a,t){e.exports={home:"Home_home__1CsI4"}},59:function(e,a,t){e.exports=t(75)},65:function(e,a,t){},66:function(e,a,t){},70:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCBACKhhe6296AAACVElEQVRIx72VTUhUcRTFz3/KB4OugqlBKqGFGFl+ZJFSLcJNBYIuWrQyHQohgiL62gUl0a7AaKH7mKIocjE5ZWgpopVkFgQttCkHgujFTIQ6/lo4zcyb5p/0eVf3nXPuuY97L/ylPwyTTWmRzM107qhBtQpqpVBccY1qxKSW8CJMWJLYxR0SwHtG6aWXp8wAH7lGw5IG1DMMPOQg6zxcOUcYAvqp/5nBc+bos/ehkcfMc5blhelJFhgnTJgWq4WPM8xxPYvkenWpSZ+XmPmCOulX8BdX9U8jcwc4aledYuox03Y5a9Wu1RpTt5nzEg7DJIgwhUu1tbwGlykiJBmiyEt1kKRSws8gUavBAwbwS2wkySEv1UMknYVwrQYu7ensHt2LmS/NxVSBX5JUq7fWEbxTrSThV4ViecPBZZAQV0jRZv2DECm6CPGIT6zJJ6uJ4jJpL5cwhJjEJUqV/laY9G7LtSwHjeu2uZ/XvVFNnhNO6bV6zLSPGk2oVY5HvVVRTnrKT6tPWzwaR62aoDqz27x+p5hlVeYryCwnftAs3gwJWguMqwTYnfnaA5QUUB0g4VOxkgVGk5CULSlOI/mRULHopKzQdHNxyjhfUGPB/2/kvgvb9NWM26Xs0GEZSUV6Ys59R305imaNcAxjd5AkBbRXx22KDr4Qoc7qEOAi87zkmb3Jem6R4i77WOHBi9jJZZK8YT8XGMsyeU+EeaVmNuioLinAuGKa0awCKtVmORpWm26YFJssQ/R0NKpSg4IqlaMPiuuFBkz64NiuSnP1t1ZWKL4BDzlSXG5VRIIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMTZUMDI6NDI6MjQrMDA6MDCzEOxKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTE2VDAyOjQyOjI0KzAwOjAwwk1U9gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},73:function(e,a,t){e.exports=t.p+"static/media/Xcode-fragment.5ab99182.png"},75:function(e,a,t){"use strict";t.r(a),t.d(a,"rerenderEntireTree",(function(){return me}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(0),r=t.n(n),o=t(21),l=t.n(o),s=(t(64),t(65),t(66),t(78)),c=t(79),i=t(53),m=t(84),u=t(83),d=t(80),p=t(23),h=t.n(p),A=t(17),T="UPDATE-NEW-TASK-TITLE",E="UPDATE-NEW-TASK-DESCRIPTION",k="SHOW-MODAL",w="CLOSE-MODAL",f="ADD-TASK",g="CHANGE-TYPE",b="ADD-PB-TASK",v="ADD-MATH_STAT-TASK",y="ADD-MATH_LOG-TASK",N=t(77),S=t(81),_=t(82),L=t(11),M=t.n(L),C=function(e){var a=e.show;return r.a.createElement("div",null,r.a.createElement(N.a,{variant:"primary",className:M.a.btn,onClick:function(){return e.showModal()}},"Add task"),r.a.createElement(S.a,{className:M.a.modal,dialogClassName:M.a.modalDialog,size:"lg",show:a,onHide:function(){return e.closeModal()}},r.a.createElement(s.a,null,r.a.createElement(S.a.Body,{className:"".concat(M.a.modalBody)},r.a.createElement(_.a,null,r.a.createElement(_.a.Group,{as:c.a,className:"mb-4"},r.a.createElement(_.a.Label,{className:"".concat(M.a.formLabel)},"Task type"),r.a.createElement(_.a.Control,{className:"".concat(M.a.formSelect),as:"select",value:e.newTaskType,onChange:function(a){return e.updateType(a.target.value)}},r.a.createElement("option",{value:""},"Choose"),r.a.createElement("option",{value:"PB"},"PB"),r.a.createElement("option",{value:"MathStat"},"MathStat"),r.a.createElement("option",{value:"MathLog"},"MathLog"))),r.a.createElement(_.a.Group,{as:c.a,className:"mb-4"},r.a.createElement(_.a.Label,{className:"".concat(M.a.formLabel)},"Task name"),r.a.createElement(_.a.Control,{className:"".concat(M.a.formTextArea),as:"textarea",rows:"1",placeholder:"Name your problem",value:e.newTaskTitle,onChange:function(a){return e.updateNewTaskTitle(a.target.value)}})),r.a.createElement(_.a.Group,{as:c.a,className:"mb-4"},r.a.createElement(_.a.Label,{className:"".concat(M.a.formLabel)},"Description"),r.a.createElement(_.a.Control,{className:"".concat(M.a.formTextArea),as:"textarea",rows:"3",placeholder:"Write about your problem...",value:e.newTaskDescription,onChange:function(a){return e.updateNewTaskDescription(a.target.value)}})),r.a.createElement(_.a.Group,{as:c.a,className:"mb-4"},r.a.createElement(_.a.Label,{className:"".concat(M.a.formLabel)},"Attachment"),r.a.createElement(_.a.Control,{name:"images[]",type:"file",multiple:!0}))))),r.a.createElement(S.a.Footer,{as:N.a,onClick:function(){e.addTask(e.newTaskTitle,e.newTaskDescription,e.newTaskType),e.closeModal()},variant:"primary",className:M.a.modalFooter},r.a.createElement("p",{className:"mr-auto ml-auto"},"ADD TASK"))))},B=function(e){var a=e.store.getState().createTask.newTaskTitle,t=e.store.getState().createTask.newTaskDescription,n=e.store.getState().createTask.showModal,o=e.store.getState().createTask.newTaskType;return r.a.createElement(C,{showModal:function(){return e.store.dispatch({type:k})},closeModal:function(){return e.store.dispatch({type:w})},updateNewTaskTitle:function(a){return e.store.dispatch({type:T,newText:a})},updateNewTaskDescription:function(a){return e.store.dispatch({type:E,newText:a})},addTask:function(a,t,n){switch(e.store.dispatch({type:f,newTask:{id:4,title:a,description:t}}),n){case"PB":e.store.dispatch(function(e,a){return{type:b,newTask:{id:4,title:e,description:a}}}(a,t));break;case"MathStat":e.store.dispatch(function(e,a){return{type:v,newTask:{id:4,title:e,description:a}}}(a,t));break;case"MathLog":e.store.dispatch(function(e,a){return{type:y,newTask:{id:4,title:e,description:a}}}(a,t))}},updateType:function(a){return e.store.dispatch(function(e){return{type:g,newType:e}}(a))},newTaskTitle:a,newTaskDescription:t,show:n,newTaskType:o})},D=function(){return r.a.createElement(m.a,{sticky:"top",className:h.a.navbar,collapseOnSelect:!0,expand:"sm",variant:"dark"},r.a.createElement(m.a.Brand,null,r.a.createElement("img",{src:t(70),width:"30",height:"30",alt:"solution swap logo"})),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,null,r.a.createElement(u.a.Link,{className:h.a.a,eventKey:1,as:A.b,to:"/Home"},"Home"),r.a.createElement(u.a.Link,{className:h.a.a,eventKey:2,as:A.b,to:"/AllTasks"},"All tasks"),r.a.createElement(u.a.Link,{className:h.a.a,eventKey:3,as:A.b,to:"/PB"},"PB"),r.a.createElement(u.a.Link,{className:h.a.a,eventKey:4,as:A.b,to:"/MathStat"},"Math stat"),r.a.createElement(u.a.Link,{className:h.a.a,eventKey:5,as:A.b,to:"/MathLog"},"Math log"))))},x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(d.a,{className:h.a.jumbotron},r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("h1",null,"Solution Swap"),r.a.createElement("h5",{className:"mb-3"},"Exchange your solutions with others"),r.a.createElement(B,{store:e.store}))))))},H=t(85),I=t(43),P=t.n(I),K=function(e){var a=e.title,n=e.description;return r.a.createElement(H.a,{border:"light",className:"".concat(P.a.card)},r.a.createElement(H.a.Img,{src:t(73),className:"".concat(P.a.cardImg)}),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Title,null,a),r.a.createElement(H.a.Text,null,n)))},J=function(e){var a=e.tasks.map((function(e){return r.a.createElement(K,{title:e.title,description:e.description,id:e.id})}));return r.a.createElement("div",null,a.reverse())},U=function(e){var a=e.store.getState().allTasks;return r.a.createElement(J,{tasks:a.AllTasks})},j=function(e){var a=e.store.getState().pb;return r.a.createElement(J,{tasks:a.PB})},O=t(6),V=function(e){var a=e.store.getState().mathStat;return r.a.createElement(J,{tasks:a.MathStat})},R=function(e){var a=e.store.getState().mathLog;return r.a.createElement(J,{tasks:a.MathLog})},G=t(57),Y=t.n(G),W=function(e){return r.a.createElement("div",{className:"".concat(Y.a.home," mt-4 mb-4")},r.a.createElement("h4",null,"There is still nothing here =("))},Q=t(28),F=t.n(Q),X=function(e){return console.log(e),r.a.createElement(s.a,null,r.a.createElement("footer",{className:F.a.footer},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,{variant:"light",className:"justify-content-center"},r.a.createElement(u.a,null,r.a.createElement(u.a.Link,{className:F.a.a,href:"https://t.me/sdraste"},"telegram"),r.a.createElement(u.a.Link,{className:F.a.a,href:"https://instagram.com/ssdraste"},"instagram"),r.a.createElement(u.a.Link,{className:F.a.a,href:"https://www.linkedin.com/in/mykyta-oksak-8b90b91b4/"},"linkedIn")))))))},z=function(e){return r.a.createElement("div",null,r.a.createElement(x,{store:e.store}),r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(O.b,{path:"/Home",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(O.b,{path:"/AllTasks",render:function(){return r.a.createElement(U,{store:e.store})}}),r.a.createElement(O.b,{path:"/PB",render:function(){return r.a.createElement(j,{store:e.store})}}),r.a.createElement(O.b,{path:"/MathStat",render:function(){return r.a.createElement(V,{store:e.store})}}),r.a.createElement(O.b,{path:"/MathLog",render:function(){return r.a.createElement(R,{store:e.store})}}),r.a.createElement(O.a,{to:"/AllTasks"})))),r.a.createElement(X,null))},Z=t(44),q={showModal:!1,newTaskTitle:"",newTaskDescription:"",newTaskType:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:return e.newTaskTitle=a.newText,e;case E:return e.newTaskDescription=a.newText,e;case w:return e.showModal=!1,e.newTaskTitle="",e.newTaskDescription="",e.newTaskType="",e;case k:return e.showModal=!0,e;case g:return e.newTaskType=a.newType,e;default:return e}},ee={AllTasks:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."},{id:3,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f:return e.AllTasks.push(a.newTask),e;default:return e}},te={MathStat:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return e.MathStat.push(a.newTask),e;default:return e}},re={MathLog:[{id:1,title:"activeClassName attribute refuses to work",description:"The attribute has no impact on how the NavLink looks"},{id:2,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."}]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:return e.MathLog.push(a.newTask),e;default:return e}},le={PB:[{id:1,title:"Mathematical judgments",description:"Help to proof my mathematical judgments ..."},{id:2,title:"Calculation of ...",description:"Help me to calculate the probability of ..."}]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return e.PB.push(a.newTask),e;default:return e}},ce=Object(Z.a)({createTask:$,allTasks:ae,mathStat:ne,mathLog:oe,pb:se}),ie=Object(Z.b)(ce),me=function(e){l.a.render(r.a.createElement(A.a,null,r.a.createElement(z,{state:e,dispatch:ie.dispatch.bind(ie),store:ie})),document.getElementById("root"))};me(ie.getState()),ie.subscribe((function(){var e=ie.getState();me(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.6e704dc1.chunk.js.map