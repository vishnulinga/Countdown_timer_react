(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(12),n(1)),l=n(2),s=n(4),u=n(3),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("audio",{autoPlay:!0},r.a.createElement("source",{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",type:"audio/mpeg"})))}}]),n}(r.a.Component),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={timer:10},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({timer:e.state.timer-1})}),1e3)}},{key:"componentDidUpdate",value:function(){0===this.state.timer&&clearInterval(this.interval)}},{key:"render",value:function(){return 0!==this.state.timer?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{color:"red"}},this.state.timer)):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{color:"red"}},"Music!"),r.a.createElement(m,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9714ded5.chunk.js.map