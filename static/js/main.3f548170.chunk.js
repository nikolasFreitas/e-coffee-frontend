(this["webpackJsonpe-coffee-frontend"]=this["webpackJsonpe-coffee-frontend"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"recomendations":{"title":"Clients also enjoyed:"},"shops":{"title":"Searching for a shop near you?","subtitle":"Here are some"}}')},21:function(e){e.exports=JSON.parse('{"recomendations":{"title":"Clientes tamb\xe9m gostaram"},"shops":{"title":"Buscando lojas pr\xf3ximas de voc\xea?","subtitle":"Aqui est\xe3o algumas"}}')},34:function(e,n,t){e.exports=t(49)},41:function(e,n,t){var a={"./en.json":20,"./pt-br.json":21};function r(e){return Promise.resolve().then((function(){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=a[e];return t.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=41,e.exports=r},42:function(e,n,t){var a={"./en.json":20,"./pt-br.json":21};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=42},45:function(e,n,t){e.exports=t.p+"static/media/coffee.95a76351.svg"},49:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),c=t(22),i=t.n(c),l=t(32),s=t(1),u=t(13),f=t.n(u),m=t(23),d=t(24),g=t(25),h=t(26),v=t.n(h);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(a||(a={}));var p=function(e){return{type:a.SET_LANGUAGE,payload:{language:e}}},E=t(27),b={language:"pt-br"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SET_LANGUAGE:return Object.assign({},e,{language:n.payload.language});default:return e}},y=Object(E.a)(w),k=["en","pt-br"],N=function(){function e(){Object(d.a)(this,e),this.i18n=v.a,console.log(this.loadLocalLang()),this.selectLangSync(this.loadLocalLang())}return Object(g.a)(e,[{key:"loadLocalLang",value:function(){var e=this.storedCurrentLang;return e&&""!==e.trim()?e:this.i18n.currentLocale()}},{key:"selectLang",value:function(){var e=Object(m.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.includes(n)){e.next=2;break}throw new Error("Couldn't find this language.");case 2:if(this.i18n.translations[n]){e.next=7;break}return e.next=5,t(41)("./".concat(n,".json"));case 5:a=e.sent,this.i18n.translations[n]=a;case 7:this.i18n.locale=n,this.currentLang=n,y.dispatch(p(n));case 10:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"selectLangSync",value:function(e){if(!k.includes(e))throw new Error("Couldn't find this language.");if(!this.i18n.translations[e]){var n=t(42)("./".concat(e,".json"));this.i18n.translations[e]=n}return this.i18n.locale=e,this.currentLang=e,e}},{key:"currentLang",set:function(e){window.localStorage.setItem("eCoffee.language",e)}},{key:"storedCurrentLang",get:function(){return window.localStorage.getItem("eCoffee.language")}}]),e}();N.instance=new N;var L=N.instance,j=function(){return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h2",{className:"text-center"},L.i18n.translate("shops.title")),o.a.createElement("h3",{className:"text-center"},o.a.createElement("small",null,L.i18n.translate("shops.subtitle"))))),o.a.createElement("div",{className:"row"}))},O=t(7),x=t(8);function S(){var e=Object(O.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n  }\n\n  body {\n    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;\n  }\n"]);return S=function(){return e},e}var A=Object(x.a)(S()),C={"coffee-logo":t(45)},U=function(){return o.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"/e-coffee-frontend"},o.a.createElement("img",{src:C["coffee-logo"],className:"d-inline-block align-top",width:"30",height:"30",alt:"E-coffee logo",loading:"lazy"}),"E-coffee")))};function W(){var e=Object(O.a)(["\n  min-height: 150px;\n"]);return W=function(){return e},e}var _=x.b.footer.attrs({className:"bg-light"})(W()),G=function(){return o.a.createElement(_,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"item"}))),o.a.createElement("div",{className:"text-center"},o.a.createElement("small",null,"Icons made by "," ",o.a.createElement("a",{href:"https://www.flaticon.com/free-icon/coffee_1569602",title:"Kiranshastry"},"Kiranshastry")," ","from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))))},T=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(U,null),o.a.createElement("div",{"data-language":e.lang,className:"container"},null===e||void 0===e?void 0:e.children),o.a.createElement(G,null),o.a.createElement(A,null))},R=t(33),I=function(){var e=function(){var e=Object(r.useState)("en"),n=Object(R.a)(e,2),t=n[0],a=n[1];Object(r.useEffect)((function(){var e=y.subscribe((function(){var e=y.getState().language;e!==t&&a(e)}));return function(){e()}}),[t]);var o=Object(r.useCallback)((function(e){var n=e.target.value;L.selectLang(n)}),[]);return{lang:t,changeLanguage:o}}(),n=e.lang,t=e.changeLanguage;return o.a.createElement(T,{lang:n},o.a.createElement(j,null),o.a.createElement("select",{onChange:t},o.a.createElement("option",{value:"en"},"en"),o.a.createElement("option",{value:"pt-br"},"pt-BR")))};function B(){var e=Object(O.a)(["\n  width: 100%;\n  height: 25vh;\n  background-repeat: no-repeat;\n  background-image: ",";\n  background-position: center;\n  background-size: cover;\n\n  @media only screen and (max-width: 1200px) {\n    height: calc(35vh - 10vw);\n  }\n"]);return B=function(){return e},e}var D=x.b.div(B(),(function(e){return"url(".concat(e.image,")")})),F=function(e){var n=e.card,t=n.title,a=n.subtitle;return o.a.createElement("div",{className:"p-2"},o.a.createElement(D,{image:"https://via.placeholder.com/300x300"}),o.a.createElement("div",{className:"p-2"},o.a.createElement("h3",null,o.a.createElement("small",null,t)),o.a.createElement("p",null,a)))},J=function(){return o.a.createElement(T,null,o.a.createElement(F,{card:{title:"Searching for coffee?",subtitle:"We got every types of coffee and stores near you!"}}))},z=function(){return o.a.createElement(T,null)},M=function(){return o.a.createElement(l.a,{basename:"e-coffee-frontend"},o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:I}),o.a.createElement(s.a,{path:"/shop/:shopId",component:J}),o.a.createElement(s.a,{path:"/cart",component:z})))},P=function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/e-coffee-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/e-coffee-frontend","/service-worker.js");H?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(n,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.3f548170.chunk.js.map