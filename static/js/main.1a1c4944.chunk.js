(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){var c={"./1.png":14,"./10.png":15,"./2.png":16,"./3.png":17,"./4.png":18,"./5.png":19,"./6.png":20,"./7.png":21,"./8.png":22,"./9.png":23};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}r.keys=function(){return Object.keys(c)},r.resolve=i,t.exports=r,r.id=13},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/1.ea9288f6.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/10.2d41f61f.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/2.24fc0723.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/3.944314d3.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/4.d88db37f.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/5.73520233.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/6.1a170362.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/7.81cb31d9.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/8.7a01c343.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/9.c5224d41.png"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(6),i=n.n(r),a=n(7),u=n(2),s=n(0);var o,d=(o=n(13)).keys().map(o),f=function(t){var e=Object(c.useState)([]),n=Object(u.a)(e,2),r=n[0],i=n[1],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;void 0!==e&&t.updatePlayerChoices(e);for(var n=[],c=10,r=0;n.length<c;r+=1){var a=Math.floor(Math.random()*c);n.includes(a)||n.push(a)}i(n)},o=function(t){t.stopPropagation();var e=t.target.id;a(e)};return Object(c.useEffect)((function(){a()}),[]),Object(s.jsx)("div",{id:"cards-container",children:r.map((function(t){return Object(s.jsx)("button",{id:t,className:"card",type:"button",onClick:o,children:Object(s.jsx)("img",{className:"card-image",src:d[t].default,alt:t})})}))})},p=function(t){return Object(s.jsxs)("div",{id:"scoreboard",children:[Object(s.jsx)("div",{id:"current",children:"Current Score: ".concat(t.currentScore)}),Object(s.jsx)("div",{id:"high",children:"Highscore: ".concat(t.maxScore)})]})},j=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=(e[0],e[1]),r=Object(c.useState)(0),i=Object(u.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)(0),b=Object(u.a)(j,2),l=b[0],g=b[1];Object(c.useEffect)((function(){o>l&&g(o)}),[o]);return Object(s.jsxs)("div",{id:"game",children:[Object(s.jsx)(f,{updatePlayerChoices:function(t){var e=Number(t);n((function(t){return t.includes(e)?(d(0),n([]),!1):(d((function(t){return Number(t)+1})),[].concat(Object(a.a)(t),[e]))}))}}),Object(s.jsx)(p,{currentScore:o,maxScore:l})]})},b=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(j,{})})};n(24);i.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1a1c4944.chunk.js.map