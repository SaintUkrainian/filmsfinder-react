(this["webpackJsonpfilmsfinder-react"]=this["webpackJsonpfilmsfinder-react"]||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n.n(c),o=n(7),s=n.n(o),a=(n(33),n(11)),l=n(2),u=(n(39),n(10)),f=n(8),d=n.n(f),j=(n(57),Object(l.b)((function(e){return{id:e.selectedMovie.id,close:e.selectedMovie.close}}),(function(e){return{clearSelection:function(){return e({type:"clear_selected_movie"})}}}))((function(e){return Object(i.jsx)(u.a,{in:e.show||!e.close,timeout:{enter:500,exit:400},unmountOnExit:!0,mountOnEnter:!0,classNames:"slide",children:Object(i.jsx)("div",{className:"Backdrop",onClick:e.close?e.closeModal:e.clearSelection})})}))),h=(n(58),function(){return Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7ZjPaxNREMdn3r5drUpR9OihCAkieOjJHgOeFA9exR/Z5FBPil70ZvGgFy8VRUGhTQ/ePLSYq9T4F/SgtDSpsaeqKEmJYNl9u+O80EhZk23SbPMD9gOPffsyb/huZt/MsEgMDAPDIFRrFDAkxEKjJhYaNUMjVAYXOBOM8SUFnVFFxPkufXxlHx9a/hrMo3ybos4pB3zY1DmLYRoltCa3Pdphs8X6NI956M5HnTChOhQF6I6lCHzUiU991MRCoyYWGjVh6SnVZk9dCKkol7er1G4ssI+lUIsIKtNUE5+dVqb0rhpDhE7BHtkhNA0RoB3FhylqYqFREwttB7v8Z2zn/SSRaZfpaDPbsIS/r6RL6ga4NG4X3SoCrgGB5xTVOb5Wsivux5nT5uJACEWiU7mkeVfPM0X3vQ+0MZe0rnHSRLukHvDyYAgFQZX0Gp03fPcsl5zjBuARu+jcwVX1ibN7LWiOOutznUXoEVd/0ahZdTPgiQkE+sFlET3lvxImkCDxnOvQF34KJKT1XMJ8qPf0pTKZFf8mON5CLimvsIRLoLxnUhrvBGGePP82EE7MJmUWlJyzV9z7jX29P/XoOY0p/5ubUuCIntQHWDVAMPXMkO4xfj22/m3rdeg19rJjCwEXfBA/EekMGXISxJaLSr7gmH/nVukkgcjnksbT+gNpjf0QqsmU3Htg+nl0rHEgdctHsBD8xxKsZZfURc4ITxq2fe2e+KSP/K5ZpZkEvuFwbwgf1mcTB96+TuBnfgtGg/b9S08KCocs9Si76pxgYdMexzpbUi/Bh4MeQP4/+2Dj3Euuf6PDwbVUk89MTTv8QSTu8PcDHIbQa/4CyoYGw4CcTusAAAAASUVORK5CYII=",alt:"logo",style:{margin:10}})}),m=(n(59),function(){return Object(i.jsx)("div",{className:"loader",children:"Loading..."})}),g=(n(60),function(e){return{type:"set_genre",id:e.id,name:e.name}}),b=function(e){return{type:"set_movies",movies:e}},O=function(e){return{type:"set_error",error:e,fetching:!1}},v=function(){return{type:"start_fetching"}},x=function(){return function(e){e({type:"start_fetching"}),e(g({id:0,name:"Most Popular"})),d.a.get("https://api.themoviedb.org/3/movie/popular?api_key=58af3dc3b19432c261816f7a48688477&language=en-US&page=1").then((function(t){e(b(t.data.results))})).catch((function(t){e(O(t))}))}},p=Object(l.b)((function(e){return{genres:e.genres.genres}}),(function(e){return{setGenre:function(t){return e(function(e){return function(t){t({type:"start_fetching"}),t(g(e)),d.a.get("https://api.themoviedb.org/3/discover/movie?api_key=58af3dc3b19432c261816f7a48688477&with_genres="+e.id).then((function(e){t(b(e.data.results))})).catch((function(e){t(O(e))}))}}(t))}}}))((function(e){var t;return t=e.genres?e.genres.map((function(t){return Object(i.jsx)("button",{className:"Genre",onClick:function(){e.setGenre(t),e.closeSideDrawer()},children:t.name},t.id)})):Object(i.jsx)(m,{}),Object(i.jsxs)("div",{className:"Genres",children:[Object(i.jsx)("h3",{style:{textDecoration:"underline",color:"white",margin:0},children:"Search by genres:"}),t]})})),w=function(e){return Object(i.jsx)(u.a,{in:e.show,classNames:"slider",unmountOnExit:!0,mountOnEnter:!0,timeout:{enter:500,exit:400},children:Object(i.jsxs)("div",{className:"SideDrawer",children:[Object(i.jsx)(h,{}),Object(i.jsx)("h1",{children:"Good old FilmsFinder, but made with React.js"}),Object(i.jsx)("hr",{}),Object(i.jsx)(p,{closeSideDrawer:e.closeSideDrawer})]})})},A=(n(61),n(62),function(e){return Object(i.jsxs)("div",{className:"Rect1",onClick:e.showModal,children:[Object(i.jsx)("div",{className:"Rect3"}),Object(i.jsx)("div",{className:"Rect3"}),Object(i.jsx)("div",{className:"Rect3"})]})}),S=(n(63),n(64),Object(l.b)(null,(function(e){return{findMovie:function(t){return e(function(e){return function(t){t(v);var n=e.trim().split(" ").join("+");t(g({id:0,name:e.trim()})),d.a.get("https://api.themoviedb.org/3/search/movie?api_key=58af3dc3b19432c261816f7a48688477&query=".concat(n)).then((function(e){t(b(e.data.results))})).catch((function(e){t(O(e))}))}}(t))},fetchDefaultMovies:function(){return e(x())}}}))((function(e){return""===e.inputFilm.trim()&&e.fetchDefaultMovies(),Object(i.jsx)("div",{className:"SearchIcon",onClick:function(){return e.findMovie(e.inputFilm)},children:Object(i.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("circle",{cx:"13.125",cy:"11.625",r:"5.125",stroke:"white"}),Object(i.jsx)("line",{x1:"16.137",y1:"15.4334",x2:"22.887",y2:"23.6834",stroke:"white"}),Object(i.jsx)("circle",{cx:"15",cy:"15",r:"14.5",stroke:"white"})]})})}))),y=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1];return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("input",{className:"Search",type:"text",placeholder:"Find a movie...",value:o,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)(S,{inputFilm:o})]})},M=Object(l.b)((function(e){return{genre:e.selectedGenre.name}}))((function(e){return Object(i.jsxs)("div",{className:"AppBar",children:[Object(i.jsxs)("div",{className:"MenuSearch",children:[Object(i.jsx)(A,{showModal:e.showSideDrawer}),Object(i.jsx)(y,{})]}),Object(i.jsx)("h1",{className:"genre",children:e.genre}),Object(i.jsx)("h2",{className:"neon",children:"FilmsFinder React version"}),Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)(h,{})})]})})),k=function(e){return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(w,{show:e.show,closeSideDrawer:e.closeSideDrawer}),Object(i.jsx)(j,{closeModal:e.closeSideDrawer,show:e.show}),Object(i.jsx)(M,{showSideDrawer:e.showSideDrawer})]})},N=(n(65),n.p+"static/media/get-image.82952555.jfif"),_=function(e){return Object(i.jsx)("div",{className:"Film",onClick:e.select,children:Object(i.jsx)("img",{src:e.imageUrl?"https://image.tmdb.org/t/p/w500/"+e.imageUrl:N,alt:"film-logo"})})},E=(n(66),Object(l.b)((function(e){return{movies:e.movies.list,fetching:e.movies.fetching,genre:e.selectedGenre.name,error:e.movies.error}}),(function(e){return{fetchMovies:function(){return e(x())},setSelectedMovie:function(t,n){return e(function(e,t){return function(n){n({type:"fetch_movie"}),d.a.get("https://api.themoviedb.org/3/movie/"+e+"?api_key=58af3dc3b19432c261816f7a48688477&language=en-US").then((function(i){n(function(e,t,n){return{type:"set_selected_movie",id:e,title:t,info:n}}(e,t,i.data))}))}}(t,n))}}}))((function(e){var t,n=e.fetchMovies;return Object(c.useEffect)((function(){n()}),[n]),t=e.fetching?Object(i.jsx)(m,{}):e.error?Object(i.jsx)("h1",{style:{color:"white",textDecoration:"underline"},children:"An Error occurred!"}):e.movies.length>0?e.movies.map((function(t){return Object(i.jsx)(_,{imageUrl:t.poster_path,title:t.title,select:function(){return e.setSelectedMovie(t.id,t.title)}},t.id)})):Object(i.jsxs)("h1",{style:{color:"white"},children:["Sorry, nothing was found by"," ",Object(i.jsx)("strong",{children:e.genre})]}),Object(i.jsx)("div",{className:"Films",children:t})}))),D=(n(67),Object(l.b)((function(e){return{id:e.selectedMovie.id,filmInfo:e.selectedMovie.info}}),(function(e){return{clearSelection:function(){return e({type:"clear_selected_movie"})}}}))((function(e){var t;return t=e.filmInfo?Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("img",{src:e.filmInfo.poster_path?"https://image.tmdb.org/t/p/w500/"+e.filmInfo.poster_path:N,alt:"poster"}),Object(i.jsxs)("div",{className:"description",children:[Object(i.jsx)("h1",{children:e.filmInfo.title}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Release date: "}),e.filmInfo.release_date]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Budget: "}),"$",0===e.filmInfo.budget?"ecret":e.filmInfo.budget]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Minutes long: "}),e.filmInfo.runtime]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Genres: "}),e.filmInfo.genres.map((function(e){return e.name})).join(", ")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Description:"})," ",e.filmInfo.overview]}),e.filmInfo.homepage?Object(i.jsx)("a",{href:e.filmInfo.homepage,style:{color:"white",marginBottom:3,marginLeft:2},children:"Visit its official homepage!"}):null]})]}):Object(i.jsx)(m,{}),Object(i.jsx)(u.a,{in:null!==e.id,unmountOnExit:!0,mountOnEnter:!0,classNames:"film",timeout:300,children:Object(i.jsx)("div",{className:"SelectedFilm",onClick:e.clearSelection,children:Object(i.jsx)("div",{className:"container",children:t})})})}))),I=Object(l.b)(null,(function(e){return{fetchGenres:function(){return e((function(e){d.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=58af3dc3b19432c261816f7a48688477&language=en-US").then((function(t){e(function(e){return{type:"set_genres",genres:e}}(t.data.genres))}))}))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1],s=e.fetchGenres;Object(c.useEffect)((function(){s()}),[s]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(k,{show:r,showSideDrawer:function(){o(!0)},closeSideDrawer:function(){o(!1)}}),Object(i.jsx)(D,{}),Object(i.jsx)(E,{})]})})),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=n(9),R=n(6),B={id:null,title:null,info:null,fetching:!1,close:!0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_selected_movie":return{id:t.id,title:t.title,info:t.info,fetchin:!1,close:!1};case"clear_selected_movie":return Object(R.a)(Object(R.a)({},e),{},{id:null,title:null,info:null,close:!0});case"fetch_movie":return Object(R.a)(Object(R.a)({},e),{},{fetching:!0});default:return e}},P={genres:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_genres":return{genres:t.genres};default:return e}},V=n(26),X={id:null,name:"Most Popular"},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_genre":return{id:t.id,name:t.name};default:return e}},Z={list:null,fetching:!0,error:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_movies":return{list:t.movies,fetching:!1};case"start_fetching":return Object(R.a)(Object(R.a)({},e),{},{fetching:!0});case"set_error":return Object(R.a)(Object(R.a)({},e),{},{error:t.error,fetching:!1});default:return e}},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.d,Q=Object(C.c)({movies:L,selectedMovie:G,genres:T,selectedGenre:Y}),J=Object(C.e)(Q,H(Object(C.a)(V.a))),K=Object(i.jsx)(l.a,{store:J,children:Object(i.jsx)(I,{})});s.a.render(K,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/filmsfinder-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/filmsfinder-react","/service-worker.js");F?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):U(e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.30d7b7a1.chunk.js.map