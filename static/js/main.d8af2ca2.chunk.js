(this.webpackJsonpdoggydaycare=this.webpackJsonpdoggydaycare||[]).push([[0],{15:function(e,c,t){},22:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(16),a=t.n(i),j=(t(22),t(7)),r=(t(23),t(24),t.p+"static/media/banner.f9041a4b.jpg"),l=t(8),A=t(0),b=function(){return Object(A.jsxs)("div",{className:"welcomepage",children:[Object(A.jsx)("img",{className:"welcomeimag",src:r,alt:"b"}),Object(A.jsxs)("div",{className:"info",children:[Object(A.jsx)("h2",{children:"V\xe4lkommen till Doggy day care !"}),Object(A.jsx)("p",{children:"Visa Information om Registererade hunder?"}),Object(A.jsx)(l.b,{to:"/home",children:Object(A.jsx)("button",{className:"box",children:" Ja! "})})]})]})},d=(t(34),t(15),function(e){return Object(A.jsxs)("section",{children:[Object(A.jsxs)("section",{className:"dogsec",children:[Object(A.jsx)("div",{className:"theimg",children:Object(A.jsx)("img",{src:e.dog.img})}),Object(A.jsxs)("div",{className:"dogmoreinfo",children:[Object(A.jsx)("h2",{children:e.dog.name}),Object(A.jsx)("p",{children:"Owner:"}),Object(A.jsxs)("p",{children:[e.dog.owner.name," ",e.dog.owner.lastName]}),Object(A.jsx)("p",{children:"Telefon number:"}),Object(A.jsx)("p",{children:e.dog.owner.phoneNumber})]})]}),Object(A.jsx)("div",{children:Object(A.jsx)(l.b,{to:"/",children:Object(A.jsx)("button",{className:"vertical",children:"B\xf6rja om"})})})]})}),o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQ0NDk4N0ZCNDI5MTFFOThEMDNBODI1MTNERkNDQkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQ0NDk4ODBCNDI5MTFFOThEMDNBODI1MTNERkNDQkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDQ0OTg3REI0MjkxMUU5OEQwM0E4MjUxM0RGQ0NCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDQ0OTg3RUI0MjkxMUU5OEQwM0E4MjUxM0RGQ0NCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqSxgOkAAAAaSURBVHjaYvw+RZaBEGBiIAKMKqK3IoAAAwDzlAHARUSIeAAAAABJRU5ErkJggg==",O=t(2),g=function(e){e.nextScreen;var c=Object(n.useState)(!1),t=Object(j.a)(c,2),s=t[0],i=(t[1],Object(n.useState)(null)),a=Object(j.a)(i,2),r=a[0],l=a[1],b=Object(n.useState)(null),g=Object(j.a)(b,2),u=(g[0],g[1],Object(O.f)());Object(n.useEffect)((function(){console.log("useEffect k\xf6rs"),document.title="Running useEffects..."})),Object(n.useEffect)((function(){console.log("useEffect []");fetch("https://api.jsonbin.io/b/607ed5a21cf7d45e26cf06e3").then((function(e){return e.json()})).then((function(e){l(e.map((function(e){return Object(A.jsxs)("div",{className:"enhund",children:[Object(A.jsx)("img",{src:e.img,onClick:function(){u.push("/dog/"+e.chipNumber)},alt:"a"}),Object(A.jsxs)("div",{className:"hundinfosec",children:[Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.name})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:[e.age," years old"]})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.sex})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:!1===e.present?"absent":"attending"})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.breed})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:["Chip N: ",e.chipNumber]})]}),Object(A.jsx)("button",{className:"readmorebuttons",onClick:function(){l(Object(A.jsx)(d,{dog:e}))},children:"Read More"})]})]})})))})).catch((function(e){console.log(e)}))}),[]);Object(n.useEffect)((function(){console.log(" useEffects k\xf6rs - hasData har \xe4ndrats",s)}),[s]),console.log("Home function k\xf6rs");var x=Object(n.useState)(1),m=Object(j.a)(x,2),p=m[0],h=(m[1],"gallery");return 1===p?h+=" one-column":2===p?h+=" two-columns":3===p&&(h+=" three-columns"),Object(A.jsx)("div",{children:Object(A.jsx)("div",{id:"dogs",className:h,children:r})})},u=function(){var e=Object(O.g)();console.log("currenthundenteredchipnumber",e.id.toString().toUpperCase());var c=Object(n.useState)(null),t=Object(j.a)(c,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){console.log("useEffect []");fetch("https://api.jsonbin.io/b/607ed5a21cf7d45e26cf06e3").then((function(e){return e.json()})).then((function(c){var t=c.filter((function(c){return c.chipNumber===e.id.toString().toUpperCase()}));i(t.map((function(e){return Object(A.jsxs)("div",{className:"enhund",children:[Object(A.jsx)("img",{src:e.img,alt:"a"}),Object(A.jsxs)("div",{className:"hundinfosec",children:[Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.name})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:[e.age," years old"]})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.sex})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:!1===e.present?"absent":"attending"})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsx)("span",{class:"pet_text",children:e.breed})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:["Chip N: ",e.chipNumber]})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:["Owner 1st name: ",e.owner.name]})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:["Owner L name: ",e.owner.lastName]})]}),Object(A.jsxs)("div",{class:"image-icon",children:[Object(A.jsx)("img",{src:o,alt:"c"}),Object(A.jsxs)("span",{class:"pet_text",children:["Telefon number: ",e.owner.phoneNumber]})]})]})]})})))})).catch((function(e){console.log(e)}))}),[]),Object(A.jsx)("div",{children:s})};var x=function(){var e="welcome",c="Home",t="HundInfo",s=Object(n.useState)(e),i=Object(j.a)(s,2),a=i[0],r=i[1],o=Object(n.useState)("flex"),x=Object(j.a)(o,2),m=x[0],p=x[1];switch(a){case e:Object(A.jsx)(b,{nextScreen:function(){return r(c)},dogname:m});break;case c:Object(A.jsx)(g,{nextScreen:function(e){return function(){console.log("here we go: ",e),p(e),r(t)}},dog:m});break;default:Object(A.jsx)(d,{nextScreen:function(c){return function(){p(c),r(e)}},dog:m})}return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("header",{className:"App-header",children:Object(A.jsx)("img",{src:"data:image/png;base64,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"})}),Object(A.jsx)("main",{children:Object(A.jsx)(l.a,{children:Object(A.jsxs)(O.c,{children:[Object(A.jsx)(O.a,{exact:!0,path:"/",children:Object(A.jsx)(b,{})}),Object(A.jsx)(O.a,{path:"/home",children:Object(A.jsx)(g,{nextScreen:function(e){return function(){p(e),r(t)}}})}),Object(A.jsxs)(O.a,{path:"/hundinfo",children:[Object(A.jsx)(d,{nextScreen:function(c){return function(){p(c),r(e)}},dog:m}),";"]}),Object(A.jsxs)(O.a,{path:"/dog/:id",children:[Object(A.jsx)(u,{nextScreen:function(c){return function(){p(c),r(e)}},dog:m}),";"]})]})})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(x,{})}),document.getElementById("root")),m()}},[[35,1,2]]]);
//# sourceMappingURL=main.d8af2ca2.chunk.js.map