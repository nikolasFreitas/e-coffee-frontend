(this["webpackJsonpe-coffee-frontend"]=this["webpackJsonpe-coffee-frontend"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"recomendations":{"title":"Clients also enjoyed:"},"shops":{"title":"Stores near you"}}')},22:function(e){e.exports=JSON.parse('{"recomendations":{"title":"Clientes tamb\xe9m gostaram"},"shops":{"title":"Lojas pr\xf3ximas de voc\xea"}}')},34:function(e,t,n){e.exports=n(51)},41:function(e,t,n){e.exports=n.p+"static/media/coffee.95a76351.svg"},42:function(e,t,n){e.exports=n.p+"static/media/down-rating-coffee.063d5b24.svg"},43:function(e,t,n){e.exports=n.p+"static/media/up-rating-coffee.5696dd50.svg"},46:function(e,t,n){var a={"./en.json":21,"./pt-br.json":22};function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=a[e];return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=46,e.exports=r},47:function(e,t,n){var a={"./en.json":21,"./pt-br.json":22};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=47},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),l=n(33),i=n(1),s=n(6),u=n(7);function m(){var e=Object(s.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\n  width: 100%;\n  min-height: 15vh;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return f=function(){return e},e}var d,g=u.b.div(f(),(function(e){return"url(".concat(e.src,")")})),v=u.b.div.attrs({className:"col-12 col-sm-12 col-md-4 d-flex"})(m()),h=n(8),p={"coffee-logo":n(41),"down-rating-coffee":n(42),"up-rating-coffee":n(43)},E=function(e){var t=function(e){var t=Object(a.useState)(e);return{rating:Object(h.a)(t,1)[0],downRating:Object(a.useMemo)((function(){return r.a.createElement("img",{src:p["down-rating-coffee"],width:25,height:25,alt:"down rating coffee"})}),[]),upRating:Object(a.useMemo)((function(){return r.a.createElement("img",{src:p["up-rating-coffee"],width:25,height:25,alt:"up rating coffee"})}),[])}}(e.popularity),n=t.downRating,c=t.upRating;return r.a.createElement("div",null,r.a.createElement("span",null,c),r.a.createElement("span",null,c),r.a.createElement("span",null,n),r.a.createElement("span",null,n),r.a.createElement("span",null,n))},b=function(e){return r.a.createElement("div",{className:"col-12 my-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-3"},r.a.createElement(g,{src:e.cover_image_url||""})),r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-8"},r.a.createElement("h4",null,r.a.createElement("small",null,e.name))),r.a.createElement(v,null,r.a.createElement(E,{popularity:e.popularity}),r.a.createElement("button",{type:"button",className:"btn btn-dark mt-2 mt-md-0"},"Ver loja"))))))},w=n(14),y=n.n(w),k=n(27),N=n(28),j=n(29),O=n(30),x=n.n(O);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(d||(d={}));var L=n(31),S={language:"pt-br"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_LANGUAGE:return Object.assign({},e,{language:t.payload.language});default:return e}},C=Object(L.a)(A),_=["en","pt-br"],R=function(){function e(){Object(N.a)(this,e),this.i18n=x.a,this.selectLangSync(this.currentLanguage())}return Object(j.a)(e,[{key:"currentLanguage",value:function(){var e=this.getStoredLanguage;return e&&""!==e.trim()?e:this.i18n.currentLocale()}},{key:"selectLangAsync",value:function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.includes(t)){e.next=2;break}throw new Error("Couldn't find this language.");case 2:if(this.i18n.translations[t]){e.next=7;break}return e.next=5,n(46)("./".concat(t,".json"));case 5:a=e.sent,this.i18n.translations[t]=a;case 7:this.i18n.locale=t,this.setStoredLanguage=t,C.dispatch((r=t,{type:d.SET_LANGUAGE,payload:{language:r}}));case 10:case"end":return e.stop()}var r}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectLangSync",value:function(e){if(!_.includes(e))throw new Error("Couldn't find this language.");if(!this.i18n.translations[e]){var t=n(47)("./".concat(e,".json"));this.i18n.translations[e]=t}return this.i18n.locale=e,this.setStoredLanguage=e,e}},{key:"setStoredLanguage",set:function(e){window.localStorage.setItem("eCoffee.language",e)}},{key:"getStoredLanguage",get:function(){return window.localStorage.getItem("eCoffee.language")}}]),e}();R.instance=new R;var U=R.instance,W=Object(a.createContext)({lang:"",changeLanguage:function(e){}}),G={name:"Lorem ipsum dolor sit amet",popularity:3.2,id:1,cover_image_url:"https://via.placeholder.com/300x500?text=Lorem%20Ipsum",stock:[]},T=function(){var e=function(){var e=Object(a.useState)([G,G,G,G]);return{shops:Object(h.a)(e,1)[0]}}().shops,t=Object(a.useMemo)((function(){return e.map((function(e,t){return r.a.createElement(b,Object.assign({key:t},e))}))}),[e]);return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("h2",null,r.a.createElement("small",null,U.i18n.translate("shops.title"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},t)))};function F(){var e=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n  }\n\n  body {\n    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;\n  }\n"]);return F=function(){return e},e}var I=Object(u.a)(F()),M=function(){var e=Object(a.useContext)(W),t=e.changeLanguage,n=e.lang;return r.a.createElement("select",{onChange:t,value:n},r.a.createElement("option",{value:"en"},"en"),r.a.createElement("option",{value:"pt-br"},"pt-BR"))},z=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/e-coffee-frontend"},r.a.createElement("img",{src:p["coffee-logo"],className:"d-inline-block align-top",width:"30",height:"30",alt:"E-coffee logo",loading:"lazy"}),"E-coffee"),r.a.createElement(M,null)))};function P(){var e=Object(s.a)(["\n  min-height: 150px;\n"]);return P=function(){return e},e}var D=u.b.footer.attrs({className:"bg-light"})(P()),J=function(){return r.a.createElement(D,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"item"}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"Icons made by "," ",r.a.createElement("a",{href:"https://www.flaticon.com/free-icon/coffee_1569602",title:"Kiranshastry"},"Kiranshastry")," ","from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ",r.a.createElement("br",null),"Icons made by "," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," "," ","from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com")))))},B=function(e){return r.a.createElement("div",{className:"container"},e.children)},K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(B,null,e.children),r.a.createElement(J,null),r.a.createElement(I,null))},V=function(){var e=Object(a.useState)(U.currentLanguage()),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=C.subscribe((function(){var e=C.getState().language;e!==n&&r(e)}));return function(){e()}}),[n]);var c=Object(a.useCallback)((function(e){var t=e.target.value;U.selectLangAsync(t)}),[]);return{lang:n,changeLanguage:c}},H={title:"Latte",subtitle:"Store: local://storeName City: Porto Alegre"};function $(){var e=Object(s.a)(["\n  width: 100%;\n  height: 25vh;\n  background-repeat: no-repeat;\n  background-image: ",";\n  background-position: center;\n  background-size: cover;\n\n  @media only screen and (max-width: 1200px) {\n    height: calc(35vh - 10vw);\n  }\n"]);return $=function(){return e},e}var q=u.b.div($(),(function(e){return"url(".concat(e.image,")")})),Q=function(e){var t=e.title,n=e.subtitle;return r.a.createElement("div",{className:"p-2"},r.a.createElement(q,{image:"https://via.placeholder.com/300x300"}),r.a.createElement("div",{className:"p-2"},r.a.createElement("h3",null,r.a.createElement("small",null,t)),r.a.createElement("p",null,n)))},X=function(){var e=function(){var e=Object(a.useState)([H,H,H,H]);return{products:Object(h.a)(e,1)[0]}}().products,t=Object(a.useMemo)((function(){return e.map((function(e,t){return r.a.createElement("div",{key:t,className:"col-12 col-sm-6 col-md-3"},r.a.createElement(Q,e))}))}),[e]);return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,U.i18n.translate("recomendations.title")),r.a.createElement("div",{className:"row"},t))};function Y(){var e=Object(s.a)(["\n  width: 100%;\n  height: calc(30vmax - 5vh);\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return Y=function(){return e},e}var Z=u.b.div(Y(),(function(e){return"url(".concat(e.src,")")})),ee=function(){return r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement(Z,{src:"https://via.placeholder.com/900x400?text=COVER"})))},te=function(){var e=V().lang;return r.a.createElement(K,{"data-language":e},r.a.createElement(ee,null),r.a.createElement(T,null),r.a.createElement(X,null))},ne=function(){var e={title:"Searching for coffee?",subtitle:"We got every types of coffee and stores near you!"};return r.a.createElement(K,null,r.a.createElement(Q,e))},ae=function(){return r.a.createElement(K,null)},re=function(){var e=V();return r.a.createElement(W.Provider,{value:e},r.a.createElement(l.a,{basename:"e-coffee-frontend"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:te}),r.a.createElement(i.a,{path:"/shop/:shopId",component:ne}),r.a.createElement(i.a,{path:"/cart",component:ae}))))},ce=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/e-coffee-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/e-coffee-frontend","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.18762924.chunk.js.map