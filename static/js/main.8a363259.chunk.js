(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var c=e(5),o=e.n(c),s=e(4),r=(e(10),e(11),e(1)),i=e(2),a=e.n(i),l=e(0),u=function(t){var n=t.good;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{"data-cy":"Good",children:n})})},b=function(t){var n=t.goods;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(l.jsx)(u,{good:t})}))})})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d="alphabetically",h="length";var g=function(){var t=Object(r.useState)(""),n=Object(s.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),u=i[0],g=i[1],O=function(t,n){var e=[].concat(j);return t===d?e.sort():t===h&&e.sort((function(t,n){return t.length-n.length})),n&&e.reverse(),e}(e,u);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:function(){return c(d)},type:"button",className:"button is-info ".concat(a()({"is-light":e!==d})),children:"Sort alphabetically"}),Object(l.jsx)("button",{onClick:function(){return c(h)},type:"button",className:"button is-success ".concat(a()({"is-light":e!==h})),children:"Sort by length"}),Object(l.jsx)("button",{onClick:function(){return g(!u)},type:"button",className:"button is-warning ".concat(a()({"is-light":!u})),children:"Reverse"}),(""!==e||!0===u)&&Object(l.jsx)("button",{onClick:function(){c(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(l.jsx)(b,{goods:O})]})};o.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8a363259.chunk.js.map