(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/lon.2ae17a3f.svg"},22:function(e,a,t){e.exports=t.p+"static/media/gill.c29f6417.svg"},23:function(e,a,t){e.exports=t(41)},28:function(e,a,t){},29:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),i=t.n(r),c=(t(28),t(10)),s=t(5),o=(t(29),t(3)),m=t(4),h=t(8),u=t(7),d=t(9),p=t(18),y=function(e){var a=e.selected;return l.a.createElement("header",{className:"app-header bg-blue",style:{zIndex:999,textAlign:"center"}},l.a.createElement(p.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Allison Kosy \ud83e\udd81| ",a),l.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),l.a.createElement("div",{className:"container middle flex"},l.a.createElement("div",{className:"fixed  primary"},l.a.createElement("a",{target:"blank",href:"https://twitter.com/kosisoali",className:"social-link"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{target:"blank",href:"https://instagram.com/allisonkosy",className:"social-link"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{target:"blank",href:"https://github.com/kosiken",className:"social-link"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{className:"social-link"},l.a.createElement("i",{className:"fab fa-message"}))),l.a.createElement("div",{className:"logo-div",style:{flex:1}},l.a.createElement("span",{id:"logo"},"AKR")),l.a.createElement("nav",{className:"nav",style:{flex:2}},l.a.createElement("ul",{className:"unstyled"},l.a.createElement("li",{className:"inline"},l.a.createElement(c.b,{className:"link "+("home"===a?"active":""),to:"/"},"Home")),l.a.createElement("li",{className:"inline"},l.a.createElement(c.b,{className:"link "+("about"===a?"active":""),to:"/about_me"},"About Me"))))))};var f=function(){function e(a,t,n,l){Object(o.a)(this,e),this.x=a,this.y=t,this.radius=n,this.velocity=8,this.color="#ccdcf5",this.ctx=l}return Object(m.a)(e,[{key:"draw",value:function(){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}},{key:"update",value:function(e){this.draw(),this.y+this.radius+this.velocity>e.height+15&&(this.y=15),this.y+=this.velocity}}]),e}(),E=(n.Component,t(21)),b=t.n(E),g=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content bg-blue"},l.a.createElement(y,{selected:"home"}),l.a.createElement("div",{className:"grid-flex"},l.a.createElement("div",{className:"flex",id:"bigger"},l.a.createElement("p",{className:"large-text primary"},"Hi, My name is ",l.a.createElement("span",{className:"bold white"}," Allison Kosy"),". I am a javascript developer and lowkey UI designer")),l.a.createElement("div",{id:"smaller",className:"bg-white flex"},l.a.createElement("img",{style:{width:"80%"},src:b.a}))),l.a.createElement("div",{className:"projects bg-blue"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"top"},l.a.createElement("div",{className:"project-info haf card"},l.a.createElement("p",{className:"primary large-text"},"10"),l.a.createElement("p",{className:"white"},"Web projects")),l.a.createElement("div",{className:"project-info haf card"},l.a.createElement("p",{className:"primary large-text"},"2"),l.a.createElement("p",{className:"white"},"Mobile projects"))),l.a.createElement("div",{id:"bottom"},l.a.createElement("div",{className:"project-info haf"},l.a.createElement("p",{className:"primary large-text"},"2"),l.a.createElement("p",{className:"white"},"Native Desktop projects")),l.a.createElement("div",{className:"project-info haf"},l.a.createElement("p",{className:"primary large-text"},"1"),l.a.createElement("p",{className:"white"},"AI projects"))))))}}]),a}(n.Component),v=t(22),N=t.n(v),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content bg-blue"},l.a.createElement(y,{selected:"about"}),l.a.createElement("div",{className:"container ",style:{margin:"10vh auto"}},l.a.createElement("p",{className:"about-me white"},"About Me, okay here we go now this is the about mne page. What to write okay lemme  figure it out. Well I am a guy, a good guy, an amazing guy, a sexy guy, a funny guy, some say I'm perfect but I just tell them I'm working towards it. Okay on a more serious note now I am a developer with about a year and a half of experience building web, mobile and desktop applications with javascript and a litte bit of python."),l.a.createElement("p",{className:"primary"},"Please this site is still in development"),l.a.createElement("div",{style:{textAlign:"center",margin:"20vh 0"}},l.a.createElement("img",{src:N.a,id:"think"})),l.a.createElement("div",{className:"Outside white"},l.a.createElement("p",{className:"about-me lowkey-scrolled"},"Hey congratulations, you've scrolled to the other end of the page, this must mean you're really intrested in knowing me or you didn't know when you did it, either way I'm proud of you"),l.a.createElement("p",{className:"about-me money"},"Hey now that you are here, look I know you may not really know who I am and I may not know who you are but if you are feeling like you want anything from me like a website, or a kidney or maybe the answer to life's pertinent questions feel free to ",l.a.createElement("span",{className:"tooltip"},"contact me "),l.a.createElement("span",{className:"primary"},"PS if you are my seceret admirer you should call me lets know each other my number is +234808..")))))}}]),a}(n.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",render:function(){return l.a.createElement(g,null)}}),l.a.createElement(s.a,{path:"/about_me",render:function(){return l.a.createElement(w,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.40ae5e6a.chunk.js.map