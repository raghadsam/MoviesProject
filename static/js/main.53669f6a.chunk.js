(this.webpackJsonpmoviesproject=this.webpackJsonpmoviesproject||[]).push([[0],{18:function(e,t,n){},38:function(e,t){},55:function(e,t,n){"use strict";n.r(t);n(37);var c=n(0),r=n.n(c),a=n(15),i=n.n(a),s=n(13),o=(n(18),n(61)),j=n(63),u=n(62),d=n(40),b=n(41),h=n(39),l=n(3);function f(){return Object(l.jsx)(h.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",variant:"primary"})}n(38);function O(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),j=o[0],h=o[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{children:j&&Object(l.jsx)(f,{})}),Object(l.jsxs)(u.a,{inline:!0,onSubmit:function(t){t.preventDefault(),e.function(r,"search/movie"),h(!1)},children:[Object(l.jsx)(d.a,{type:"text",placeholder:"Search for movies here",className:"mr-sm-2 Cursor",onChange:function(e){a(e.target.value),h(!0)}}),Object(l.jsx)(b.a,{variant:"outline-info",type:"submit",children:"GO!"})]})]})}var m=n(44),x=n(60);function v(e){var t=N("","genre/movie/list"),n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){Boolean(e.genres)&&i([{id:0,name:"All"}].concat(Object(m.a)(e.genres))),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(x.a,{style:{marginRight:"5px"},children:[Object(l.jsx)(x.a.Toggle,{variant:"info",id:"dropdown-basic"}),Object(l.jsx)(x.a.Menu,{children:a.length>0&&a.map((function(t){return Object(l.jsx)(x.a.Item,{href:"#",onClick:function(){e.setCategory(t.id),e.renderCategories(t.id)},children:t.name},t.id)}))})]})})}function g(e){var t=Object(c.useState)({}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(l.jsxs)(o.a,{bg:"dark",variant:"dark",sticky:"top",expand:"true",children:[Object(l.jsx)(o.a.Brand,{href:"/",children:"Movies Night"}),Object(l.jsx)(j.a,{className:"mr-auto",children:Object(l.jsx)(j.a.Link,{href:"/",children:"Home"})}),Object(l.jsx)(v,{category:r,setCategory:function(e){a(e)},renderCategories:e.renderCategories}),Object(l.jsx)(O,{function:e.function})]})}var p=n(45);var k=function(e){var t=e.title,n=e.poster_path,c=e.overview,r=e.vote_average;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg",alt:t}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("span",{children:r})]}),Object(l.jsxs)("div",{className:"movie-over",children:[Object(l.jsx)("h2",{children:"Overview:"}),Object(l.jsx)("p",{children:c})]})]})};function y(e){return Object(l.jsx)("div",{className:"movie-container",children:e.movies.map((function(e){return Object(l.jsx)(k,Object(p.a)({},e),e.id)}))})}function S(e){return Object(l.jsx)("div",{children:Object(l.jsx)(y,{movies:e.movies})})}var C=n(23);function _(){return Object(l.jsx)("div",{className:"Footer",children:Object(l.jsxs)(C.a,{sticky:"buttom",bg:"dark",text:"info",bsPrefix:"card-footer",children:[Object(l.jsx)(C.a.Header,{children:"\xa9 2021 Recoded Team"}),Object(l.jsxs)(C.a.Body,{children:[Object(l.jsx)(C.a.Title,{children:" Credits to: Wadad, Raghad, Sukaina"}),Object(l.jsx)(C.a.Text,{children:"Find our GitHub accounts below:"}),Object(l.jsx)("a",{href:"https://github.com/wadadzein",target:"_blank",rel:"noreferrer",children:"Wadad"})," ",Object(l.jsx)("a",{href:"https://github.com/raghadsam",target:"_blank",rel:"noreferrer",children:"Raghad"})," ",Object(l.jsx)("a",{href:"https://github.com/sukaina-charaf-eddine",target:"_blank",rel:"noreferrer",children:"Sukaina"})]})]})})}var w="80028c9c6bbc4592fab0a17f612e8b3a",N=function(e,t){return"".concat("https://api.themoviedb.org/3","/").concat(t,"?api_key=").concat(w,"&query=").concat(e)};var F=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{function:function(e,t){fetch(N(e,t)).then((function(e){return e.json()})).then((function(e){r(e.results)})).catch((function(e){console.log(e)}))},renderCategories:function(e){fetch(function(e){return"https://api.themoviedb.org/3/discover/movie?api_key=".concat(w,"&language=en-US&with_genres=").concat(e)}(e)).then((function(e){return e.json()})).then((function(e){r(e.results)})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(S,{movies:n}),Object(l.jsx)(_,{})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.53669f6a.chunk.js.map