(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(3),o=c(4),i=(c(13),c(0)),s=function(){var t=Object(n.useState)(" "),e=Object(o.a)(t,2),c=e[0],r=e[1],s=["#fcba03","#30fc03","#03cafc","#a103fc"],a=Object(n.useRef)(),j=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){var e=Math.floor(Math.random()*t.length);r(t[e])}))};return Object(n.useEffect)((function(){j()}),[]),Object(n.useEffect)((function(){a.current.style.color=s[Math.floor(Math.random()*s.length)]}),[c]),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{id:"quote-box",children:Object(i.jsxs)("div",{id:"text",children:[Object(i.jsx)("p",{ref:a,children:c.text}),Object(i.jsx)("div",{id:"author",children:Object(i.jsx)("p",{children:c.author})}),Object(i.jsxs)("div",{className:"button",children:[Object(i.jsx)("button",{onClick:j,id:"new-quote",children:"Get Quote"}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",id:"tweet-quote",href:encodeURI("http://www.twitter.com/intent/tweet?text=".concat(c.text)),children:"tweet"})]})]})})})},a=document.getElementById("root");Object(r.createRoot)(a).render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(s,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1d8e4277.chunk.js.map