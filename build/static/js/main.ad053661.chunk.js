(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),o=t(15),a=t.n(o),u=(t(20),t(3)),i=t(0),s=function(e){var n=e.handleFilterChange;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:n})]})})},l=function(e){var n=e.newName,t=e.newNumber,c=e.onSubmit,r=e.handleNameChange,o=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:c,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:t,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[n.name," ",n.number,Object(i.jsx)("button",{type:"Button",onClick:function(){return t(n)},children:"Delete"})]})})},j=function(e){var n=e.personsToShow,t=e.deletePerson;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsx)(d,{person:e,deletePerson:t},e.name)}))})},h=t(6),b=t(4),f=t.n(b),m="api/persons",O=function(){return f.a.get(m).then((function(e){return e.data}))},g=function(e){return f.a.post(m,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(m,"/").concat(e.id)).then((function(e){return e.data}))},v=function(e,n){console.log(e);var t=Object(h.a)(Object(h.a)({},e),{},{number:n});return f.a.put("".concat(m,"/").concat(e.id),t).then((function(e){return e.data}))},x=(t(40),function(e){var n=e.notification;return null===n?null:n.error?Object(i.jsx)("div",{className:"error",children:n.message}):Object(i.jsx)("div",{className:"success",children:n.message})}),w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),d=a[0],h=a[1],b=Object(c.useState)(""),f=Object(u.a)(b,2),m=f[0],w=f[1],C=Object(c.useState)(""),S=Object(u.a)(C,2),N=S[0],T=S[1],P=Object(c.useState)(null),k=Object(u.a)(P,2),F=k[0],y=k[1];Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var D=t.filter((function(e){return e.name.toLowerCase().includes("".concat(N).toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(x,{notification:F}),Object(i.jsx)(s,{handleFilterChange:function(e){T(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(l,{newName:d,newNumber:m,onSubmit:function(e){e.preventDefault();var n={name:d,number:m};d.replace(/\s/g,"").length?t.filter((function(e){return e.name===d})).length>0?(n=t.filter((function(e){return e.name===d}))[0],window.confirm("".concat(d," is already added to phonebook, replace the old number with a new?"))&&v(n,m).then((function(e){r(t.map((function(n){return n.name!==d?n:e}))),h(""),w(""),y({message:"Changed ".concat(n.number," into ").concat(e.number),error:!1}),setTimeout((function(){y(null)}),5e3)})).catch((function(e){console.log(e),y({message:"".concat(n.name," was already removed from server"),error:!0}),setTimeout((function(){y(null)}),5e3),r(t.filter((function(e){return e.name!==d}))),h(""),w("")}))):g(n).then((function(e){console.log(e),r(t.concat(e)),h(""),w(""),y({message:"Added ".concat(e.name," to phonebook"),er:!1}),setTimeout((function(){y(null)}),5e3)})).catch((function(e){y({message:e.response.data.error,error:!0}),setTimeout((function(){y(null)}),5e3)})):alert("Please enter a name")},handleNumberChange:function(e){w(e.target.value)},handleNameChange:function(e){h(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(j,{personsToShow:D,deletePerson:function(e){window.confirm("Delete ".concat(e.name))&&p(e).then((function(n){r(t.filter((function(n){return n!==e}))),y({message:"Removed ".concat(e.name),error:!1}),setTimeout((function(){y(null)}),5e3)}))}})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.ad053661.chunk.js.map