(this["webpackJsonpe-coffee-frontend"]=this["webpackJsonpe-coffee-frontend"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"product":{"title":"See %{title}"},"recomendations":{"title":"Clients also enjoyed:"},"shops":{"title":"Stores near you","buttonSeeStore":"See store"}}')},23:function(e){e.exports=JSON.parse('{"product":{"title":"Ver %{title}"},"recomendations":{"title":"Clientes tamb\xe9m gostaram"},"shops":{"title":"Lojas pr\xf3ximas de voc\xea","buttonSeeStore":"Ver loja"}}')},34:function(e,n,t){e.exports=t(51)},41:function(e,n,t){e.exports=t.p+"static/media/coffee.95a76351.svg"},42:function(e,n,t){e.exports=t.p+"static/media/down-rating-coffee.063d5b24.svg"},43:function(e,n,t){e.exports=t.p+"static/media/up-rating-coffee.5696dd50.svg"},46:function(e,n,t){var a={"./en.json":22,"./pt-br.json":23};function r(e){return Promise.resolve().then((function(){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=a[e];return t.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=46,e.exports=r},47:function(e,n,t){var a={"./en.json":22,"./pt-br.json":23};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=47},51:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(24),c=t.n(o),i=t(13),l=t(1),u=t(3),s=t(4);function m(){var e=Object(u.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n"]);return m=function(){return e},e}function f(){var e=Object(u.a)(["\n  width: 100%;\n  min-height: 150px;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media only screen and (max-width: 1200px) {\n    min-height: 100px;\n  }\n\n  @media only screen and (max-width: 766px) {\n    min-height: calc(200px + 5vw);\n  }\n"]);return f=function(){return e},e}var d,g=s.b.div(f(),(function(e){return"url(".concat(e.src,")")})),p=s.b.div.attrs({className:"col-12 col-sm-12 col-md-4 d-flex"})(m()),h=t(8),v={"coffee-logo":t(41),"down-rating-coffee":t(42),"up-rating-coffee":t(43)},b=function(e){var n=function(e){var n=Object(a.useState)(e);return{rating:Object(h.a)(n,1)[0],downRating:Object(a.useMemo)((function(){return r.a.createElement("img",{src:v["down-rating-coffee"],width:25,height:25,alt:"down rating coffee"})}),[]),upRating:Object(a.useMemo)((function(){return r.a.createElement("img",{src:v["up-rating-coffee"],width:25,height:25,alt:"up rating coffee"})}),[])}}(e.popularity),t=n.downRating,o=n.upRating;return r.a.createElement("div",null,r.a.createElement("span",null,o),r.a.createElement("span",null,o),r.a.createElement("span",null,t),r.a.createElement("span",null,t),r.a.createElement("span",null,t))},E=t(15),w=t.n(E),x=t(28),y=t(29),k=t(30),j=t(31),O=t.n(j);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(d||(d={}));var N=t(32),S={language:"pt-br"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d.SET_LANGUAGE:return Object.assign({},e,{language:n.payload.language});default:return e}},C=Object(N.a)(L),A=["en","pt-br"],_=function(){function e(){Object(y.a)(this,e),this.i18n=O.a,this.selectLangSync(this.currentLanguage())}return Object(k.a)(e,[{key:"currentLanguage",value:function(){var e=this.getStoredLanguage;return e&&""!==e.trim()?e:this.i18n.currentLocale()}},{key:"selectLangAsync",value:function(){var e=Object(x.a)(w.a.mark((function e(n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.includes(n)){e.next=2;break}throw new Error("Couldn't find this language.");case 2:if(this.i18n.translations[n]){e.next=7;break}return e.next=5,t(46)("./".concat(n,".json"));case 5:a=e.sent,this.i18n.translations[n]=a;case 7:this.i18n.locale=n,this.setStoredLanguage=n,C.dispatch((r=n,{type:d.SET_LANGUAGE,payload:{language:r}}));case 10:case"end":return e.stop()}var r}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"selectLangSync",value:function(e){if(!A.includes(e))throw new Error("Couldn't find this language.");if(!this.i18n.translations[e]){var n=t(47)("./".concat(e,".json"));this.i18n.translations[e]=n}return this.i18n.locale=e,this.setStoredLanguage=e,e}},{key:"setStoredLanguage",set:function(e){window.localStorage.setItem("eCoffee.language",e)}},{key:"getStoredLanguage",get:function(){return window.localStorage.getItem("eCoffee.language")}}]),e}();_.instance=new _;var U=_.instance,R=Object(a.createContext)({lang:"",changeLanguage:function(e){}}),W=function(){var e=Object(a.useState)(U.currentLanguage()),n=Object(h.a)(e,2),t=n[0],r=n[1];Object(a.useEffect)((function(){var e=C.subscribe((function(){var e=C.getState().language;e!==t&&r(e)}));return function(){e()}}),[t]);var o=Object(a.useCallback)((function(e){var n=e.target.value;U.selectLangAsync(n)}),[]);return{lang:t,changeLanguage:o}},G=function(e){return r.a.createElement("div",{className:"col-12 my-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-3"},r.a.createElement(g,{src:e.cover_image_url||""})),r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-8"},r.a.createElement("h3",null,r.a.createElement("small",null,e.name))),r.a.createElement(p,null,r.a.createElement(b,{popularity:e.popularity}),r.a.createElement("button",{type:"button",className:"btn btn-dark mt-2 mt-md-0"},U.i18n.translate("shops.buttonSeeStore")))))))},T={name:"Lorem ipsum dolor sit amet",popularity:3.2,id:1,cover_image_url:"https://via.placeholder.com/300x500?text=Lorem%20Ipsum",stock:[]},F=function(){var e=function(){var e=Object(a.useState)([T,T,T,T]);return{shops:Object(h.a)(e,1)[0],lang:Object(a.useContext)(R).lang}}(),n=e.shops,t=e.lang,o=Object(a.useMemo)((function(){return n.map((function(e,n){return r.a.createElement(G,Object.assign({key:n,"data-language":t},e))}))}),[n,t]);return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("h2",null,U.i18n.translate("shops.title")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},o)))};function I(){var e=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n  }\n\n  body {\n    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;\n  }\n"]);return I=function(){return e},e}var M=Object(s.a)(I()),z=function(){var e=Object(a.useContext)(R),n=e.changeLanguage,t=e.lang;return r.a.createElement("select",{onChange:n,value:t},r.a.createElement("option",{value:"en"},"en"),r.a.createElement("option",{value:"pt-br"},"pt-BR"))},P=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/e-coffee-frontend"},r.a.createElement("img",{src:v["coffee-logo"],className:"d-inline-block align-top",width:"30",height:"30",alt:"E-coffee logo",loading:"lazy"}),"E-coffee"),r.a.createElement(z,null)))};function D(){var e=Object(u.a)(["\n  min-height: 150px;\n"]);return D=function(){return e},e}var J=s.b.footer.attrs({className:"bg-light"})(D()),B=function(){return r.a.createElement(J,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"item"}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"Icons made by "," ",r.a.createElement("a",{href:"https://www.flaticon.com/free-icon/coffee_1569602",title:"Kiranshastry"},"Kiranshastry")," ","from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ",r.a.createElement("br",null),"Icons made by "," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," "," ","from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com")))))},V=function(e){return r.a.createElement("div",{className:"container"},e.children)},K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(V,null,e.children),r.a.createElement(B,null),r.a.createElement(M,null))},H={title:"Latte",subtitle:"Store: local://storeName City: Porto Alegre"};function $(){var e=Object(u.a)(["\n  width: 100%;\n  height: 25vh;\n  background-repeat: no-repeat;\n  background-image: ",";\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (max-width: 1200px) {\n    height: calc(35vh - 10vw);\n  }\n\n  @media screen and (min-width: 750px) and (max-width: 990px) {\n    height: 150px;\n  }\n"]);return $=function(){return e},e}var q=s.b.div($(),(function(e){return"url(".concat(e.image,")")}));function Q(){var e=Object(u.a)(["\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n\n  &:visited {\n    color: ",";\n  }\n"]);return Q=function(){return e},e}var X=Object(s.b)(i.b)(Q(),(function(e){return e.color||"#000"}),(function(e){return e.color||"#000"}),(function(e){return e.color||"#000"})),Y=function(e){var n=e.title,t=e.subtitle;return r.a.createElement(X,{to:"#",title:U.i18n.t("product.title",{title:n})},r.a.createElement("div",{className:"p-2"},r.a.createElement(q,{image:"https://via.placeholder.com/300x300"}),r.a.createElement("div",{className:"p-2"},r.a.createElement("h3",null,r.a.createElement("small",null,n)),r.a.createElement("p",null,t))))},Z=function(){var e=function(){var e=Object(a.useState)([H,H,H,H]);return{products:Object(h.a)(e,1)[0],lang:Object(a.useContext)(R).lang}}(),n=e.products,t=e.lang,o=Object(a.useMemo)((function(){return n.map((function(e,n){return r.a.createElement("div",{key:n,"data-language":t,className:"col-12 col-sm-6 col-md-3"},r.a.createElement(Y,e))}))}),[n,t]);return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,U.i18n.translate("recomendations.title")),r.a.createElement("div",{className:"row"},o))};function ee(){var e=Object(u.a)(["\n  position: absolute;\n  z-index: 9;\n  height: 100%;\n  cursor: pointer;\n  min-width: 50px;\n  background-image: linear-gradient(\n    ",",\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0)\n  );\n\n  ","\n\n  &:hover {\n    background-image: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  &:active {\n    background-image: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  &::before {\n    position: absolute;\n    content: '';\n    width: 50px;\n    min-height: 30px;\n    background-color: #fff;\n    top: calc(50% - 15px);\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: linear-gradient(\n    to top right, \n    rgba(0, 0, 0, 0.7),\n    rgba(0, 0, 0, 0.3)\n  );\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-left: 2rem;\n  padding-bottom: .5rem;\n"]);return ne=function(){return e},e}function te(){var e=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 20vw;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media screen and (max-width: 1200px) {\n    height: calc(300px + 5vw);\n  }\n"]);return te=function(){return e},e}var ae=s.b.div(te(),(function(e){return"url(".concat(e.src,")")})),re=s.b.div(ne()),oe=s.b.div(ee(),(function(e){return e.left?"to right":"to left"}),(function(e){return e.left?"left: 0;":"right: 0;"}),(function(e){return e.left?"to right":"to left"}),(function(e){return e.left?"to right":"to left"})),ce=function(){return r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement(ae,{src:"https://via.placeholder.com/900x400?text=COVER"},r.a.createElement(oe,{left:!0}),r.a.createElement(re,null,r.a.createElement("h2",null,"NULL"),r.a.createElement("h4",null,"Lorem ipsum dolor sit amet")),r.a.createElement(oe,null))))},ie=function(){var e=W().lang;return r.a.createElement(K,{"data-language":e},r.a.createElement(ce,null),r.a.createElement(F,null),r.a.createElement(Z,null))},le=function(){var e={title:"Searching for coffee?",subtitle:"We got every types of coffee and stores near you!"};return r.a.createElement(K,null,r.a.createElement(Y,e))},ue=function(){return r.a.createElement(K,null)},se=function(){var e=W();return r.a.createElement(R.Provider,{value:e},r.a.createElement(i.a,{basename:"e-coffee-frontend"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:ie}),r.a.createElement(l.a,{path:"/shop/:shopId",component:le}),r.a.createElement(l.a,{path:"/cart",component:ue}))))},me=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/e-coffee-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/e-coffee-frontend","/service-worker.js");fe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(n,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.f9426784.chunk.js.map