(this.webpackJsonpweb_paint=this.webpackJsonpweb_paint||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(7),r=n.n(i),l=n(15),c=n(16),s=n(18),d=n(17),m=n(19),u=(n(25),n(37)),g=n(38),h=n(39),f=n(43),v=n(40),p=n(41),E=n(42),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isopenNav:!1,strokeSize:5},n.componentDidMount=function(){document.getElementById("formControlRange").value=5;var e=!1,t=document.getElementById("draw"),a=document.getElementById("editorPannel"),o=t.getContext("2d");t.width=.93*a.getBoundingClientRect().width,t.height=.95*a.getBoundingClientRect().height,t.addEventListener("mousemove",(function(n){!0===e&&(o.lineTo(n.pageX-t.getBoundingClientRect().left,n.pageY-t.getBoundingClientRect().top),o.stroke())})),t.addEventListener("mousedown",(function(a){e=!0,o.strokeStyle="white",o.lineWidth=n.state.strokeSize,o.lineCap="round",o.beginPath(),o.moveTo(a.pageX-t.getBoundingClientRect().left,a.pageY-t.getBoundingClientRect().top)})),t.addEventListener("mouseup",(function(){e=!1})),window.onresize=function(){t.width=.93*a.getBoundingClientRect().width,t.height=.95*a.getBoundingClientRect().height}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"Root"},o.a.createElement(u.a,{id:"NavBar",light:!0,expand:"md",style:{background:"RGBA(0,0,0,1)",color:"RGBA(255,255,255,1)"}},o.a.createElement(g.a,{style:{color:"RGBA(255,255,255,1)"}},"Paint"),o.a.createElement(h.a,{onClick:function(){e.setState({isopenNav:!e.state.isopenNav})}}),o.a.createElement(f.a,{isOpen:this.state.isopenNav,navbar:!0},o.a.createElement(v.a,{className:"mr-auto",navbar:!0},o.a.createElement(p.a,null,o.a.createElement(E.a,{href:"#",style:{color:"RGBA(255,255,255,1)"}},"Home")),o.a.createElement(p.a,null,o.a.createElement(E.a,{href:"https://xo28122000.github.io/portfolio/",style:{color:"RGBA(255,255,255,1)"}},"Portfolio"))))),o.a.createElement("div",{id:"body"},o.a.createElement("div",{id:"editorWindow",className:"container-fluid"},o.a.createElement("div",{className:"row",style:{height:"100%"}},o.a.createElement("div",{id:"optionPannel",className:"col-2",style:{color:"black"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"formControlRange"},"Stroke width:"),o.a.createElement("br",null),o.a.createElement("input",{type:"range",className:"form-control-range custRange",id:"formControlRange",min:"1",max:"35",step:"1",onChange:function(){e.setState({strokeSize:document.getElementById("formControlRange").value})}})))),o.a.createElement("div",{id:"editorPannel",className:"col-10",style:{justifyContent:"center",alignContent:"center"}},o.a.createElement("div",{className:"row",style:{justifyContent:"center",alignContent:"center",margin:"12px"}},o.a.createElement("div",{className:"col-12"},o.a.createElement("canvas",{id:"draw",style:{border:"1px solid",borderColor:"#fffff",background:"black"}}))))))),o.a.createElement("div",{id:"footer"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e392fadc.chunk.js.map