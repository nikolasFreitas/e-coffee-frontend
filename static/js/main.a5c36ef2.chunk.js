(this["webpackJsonpe-coffee-frontend"]=this["webpackJsonpe-coffee-frontend"]||[]).push([[1],{26:function(e){e.exports=JSON.parse('{"product":{"title":"See %{title}","cover":"%{name}\'s cover image","buyform":{"addToCart":"Add to cart ({{price}})","quantity":"Quantity"}},"recomendations":{"title":"Clients also enjoyed:"},"shops":{"title":"Stores near you","buttonSeeStore":"See store","seeMore":"See all shops","products":{"title":"Store Products","seeMore":"See more coffees"}},"banners":[{"title":"Your business can be here","subtitle":"Get a space reserved for all your products"}],"cart":{"pageTitle":"Cart items","openCart":"Open cart"}}')},27:function(e){e.exports=JSON.parse('{"product":{"title":"Ver %{title}","cover":"Imagem de capa %{name}","buyform":{"addToCart":"Adicionar ao carrinho ({{price}})","quantity":"Quantidade"}},"recomendations":{"title":"Clientes tamb\xe9m gostaram"},"shops":{"title":"Lojas pr\xf3ximas de voc\xea","buttonSeeStore":"Ver loja","seeMore":"Ver todas as lojas","products":{"title":"Produtos da loja","seeMore":"Veja mais caf\xe9s"}},"banners":[{"title":"Seu neg\xf3cio pode estar aqui","subtitle":"Tenha um espa\xe7o reservado para todos seus destaques e produtos"}],"cart":{"pageTitle":"Items no carrinho","openCart":"Abrir carrinho"}}')},33:function(e,t,n){e.exports=n(54)},40:function(e,t,n){e.exports=n.p+"static/media/coffee.95a76351.svg"},41:function(e,t,n){e.exports=n.p+"static/media/down-rating-coffee.063d5b24.svg"},42:function(e,t,n){e.exports=n.p+"static/media/up-rating-coffee.5696dd50.svg"},43:function(e,t,n){e.exports=n.p+"static/media/left-chevron.c5b73bfd.svg"},44:function(e,t,n){e.exports=n.p+"static/media/right-chevron.6cea9b53.svg"},45:function(e,t,n){e.exports=n.p+"static/media/cart.38dae47f.svg"},46:function(e,t,n){e.exports=n.p+"static/media/undraw_empty_xct9.cfb49f55.svg"},48:function(e,t,n){var a={"./en.json":26,"./pt-br.json":27};function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=a[e];return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=48,e.exports=r},49:function(e,t,n){var a={"./en.json":26,"./pt-br.json":27};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=49},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=n(12),u=n(6),l=n(2),s=n(3);function m(){var e=Object(l.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n"]);return m=function(){return e},e}function d(){var e=Object(l.a)(["\n  width: 100%;\n  min-height: 150px;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media only screen and (max-width: 1200px) {\n    min-height: 100px;\n  }\n\n  @media only screen and (max-width: 766px) {\n    min-height: calc(200px + 5vw);\n  }\n"]);return d=function(){return e},e}var f=s.b.div(d(),(function(e){return"url(".concat(e.src,")")})),p=s.b.div.attrs({className:"col-12 col-sm-12 col-md-4 d-flex"})(m()),h={"coffee-logo":n(40),"down-rating-coffee":n(41),"up-rating-coffee":n(42),"left-chevron":n(43),"right-chevron":n(44),cart:n(45)},v=(n(46),"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=72"),g="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&h=300&q=72";function b(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return b=function(){return e},e}function E(){var e=Object(l.a)(["\n  min-height: 25px;\n  min-width: 25px;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n"]);return E=function(){return e},e}var j=h["down-rating-coffee"],w=h["up-rating-coffee"],y=s.b.div(E(),(function(e){return e.active?w:j})),O=s.b.div(b()),x=function(e){var t=e.popularity;return r.a.createElement(O,null,r.a.createElement(y,{active:t>=.5}),r.a.createElement(y,{active:t>=1.5}),r.a.createElement(y,{active:t>=2.5}),r.a.createElement(y,{active:t>=3.5}),r.a.createElement(y,{active:t>=4.5}))},k=n(1),N=n.n(k),C=n(5),S=n(17),L=n(18),M=n(32),q=n.n(M),_=function(){function e(){Object(S.a)(this,e),this.events={}}return Object(L.a)(e,[{key:"emit",value:function(e){for(var t,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];null===(t=this.events[e])||void 0===t||t.forEach((function(e){return e.apply(void 0,a)}))}},{key:"on",value:function(e,t){var n;return this.events[e]||(this.events[e]=[]),{name:e,index:(null===(n=this.events[e])||void 0===n?void 0:n.push(t))-1}}},{key:"off",value:function(e){var t;null===(t=this.events[e.name])||void 0===t||t.splice(e.index,1)}}]),e}();_.instance=new _;var I=_.instance,T=["en","pt-br"],z={en:"USD","pt-br":"BRL"},A=function(){function e(){Object(S.a)(this,e),this.i18n=q.a,this.selectLangSync(this.currentLanguage())}return Object(L.a)(e,[{key:"nativeToCurrency",value:function(e){return e.toLocaleString(this.currentLanguage(),{currency:z[this.currentLanguage()],style:"currency",minimumFractionDigits:2})}},{key:"currentLanguage",value:function(){var e=this.getStoredLanguage;return e&&""!==e.trim()?e:this.i18n.currentLocale()}},{key:"selectLangAsync",value:function(){var e=Object(C.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.includes(t)){e.next=2;break}throw new Error("Couldn't find this language.");case 2:if(this.i18n.translations[t]){e.next=7;break}return e.next=5,n(48)("./".concat(t,".json"));case 5:a=e.sent,this.i18n.translations[t]=a;case 7:this.i18n.locale=t,this.setStoredLanguage=t,I.emit("languageChange",t);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectLangSync",value:function(e){if(!T.includes(e))throw new Error("Couldn't find this language.");if(!this.i18n.translations[e]){var t=n(49)("./".concat(e,".json"));this.i18n.translations[e]=t}return this.i18n.locale=e,this.setStoredLanguage=e,e}},{key:"setStoredLanguage",set:function(e){window.localStorage.setItem("eCoffee.language",e)}},{key:"getStoredLanguage",get:function(){return window.localStorage.getItem("eCoffee.language")}}]),e}();A.instance=new A;var P=A.instance,B=n(4),D=function(e){return t=e.label,n=e.value,{label:t,value:n};var t,n},F=[{value:"",label:"Carregando..."}],J=function(){var e=Object(a.useState)(P.currentLanguage()),t=Object(B.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(F),i=Object(B.a)(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){var e=I.on("languageChange",(function(e){console.log(e),c(e)}));return function(){I.off(e)}}),[r]),Object(a.useEffect)((function(){(function(){var e={},t=n.e(0).then(n.t.bind(null,55,3));return e.getLanguages=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.config.languages.map(D));case 3:case"end":return e.stop()}}),e)}))),e})().getLanguages().then(l).catch(console.error)}),[]),{lang:r,changeLanguage:Object(a.useCallback)((function(e){var t=e.target.value;P.selectLangAsync(t)}),[]),options:u}};function Q(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n\n  &:visited {\n    color: ",";\n  }\n"]);return Q=function(){return e},e}var R=Object(s.b)(i.b).attrs({onClick:function(){return window.scrollTo({top:0})}})(Q(),(function(e){return e.color||"#000"}),(function(e){return e.color||"#000"}),(function(e){return e.color||"#000"})),U=function(e){return r.a.createElement("div",{className:"col-12 my-3"},r.a.createElement(R,{to:"/shop/".concat(e.store.id),title:P.i18n.translate("shops.buttonSeeStore")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-3"},r.a.createElement(f,{src:e.store.thumb})),r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-8"},r.a.createElement("h3",null,r.a.createElement("small",null,e.store.name))),r.a.createElement(p,null,r.a.createElement(x,{popularity:e.store.rating})))))))},W=Object(a.createContext)({lang:"",changeLanguage:function(e){},options:[]}),H=function(e){return r.a.createElement("button",{onClick:e.onClick,className:"btn btn-light w-100",type:"button",disabled:e.loading},r.a.createElement("span",{hidden:!e.loading,className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"})," ",e.loading?"":e.children)},V=function(e){var t=e.asList,n=function(e){var t=Object(a.useContext)(W).lang,n=Object(a.useMemo)((function(){return e.map((function(e,n){return r.a.createElement(U,{key:n,"data-language":t,store:e})}))}),[e,t]);return{shops:e,lang:t,renderList:n}}(e.stores).renderList;return r.a.createElement("div",{className:"content py-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement("h2",null,P.i18n.translate("shops.title")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},n,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{hidden:t},r.a.createElement(H,{loading:!1,onClick:function(){}},"Load More")),r.a.createElement("div",{hidden:!t},r.a.createElement(R,{className:"btn btn-light p-3 w-100 text-uppercase",to:"/shops"},P.i18n.t("shops.seeMore"))))))))};function G(){var e=Object(l.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n  }\n\n  body {\n    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;\n    height: 100vh;\n  }\n\n  .screen-relative-h-75 {\n    max-height: 75vh;\n    min-height: 75vh;\n    overflow: auto;\n  }\n\n  .clicable {\n    cursor: pointer;\n  }\n"]);return G=function(){return e},e}var K=Object(s.a)(G()),Y=function(){var e=Object(a.useContext)(W),t=e.changeLanguage,n=e.lang,c=e.options;return r.a.createElement("select",{onChange:t,className:"form-select ml-3",value:n},c.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))},$=function(e,t){return{code:e.code,product:e,quantity:t}},X=function(e){e.createObjectStore("cart",{keyPath:"code"}).createIndex("product","product",{unique:!0})};function Z(){return ee.apply(this,arguments)}function ee(){return(ee=Object(C.a)(N.a.mark((function e(){var t,n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=indexedDB.open("store"),e.next=3,new Promise((function(e,n){var a;t.onsuccess=function(){a=t.result,e(t.result)},t.onupgradeneeded=function(){a=this.result,X(a)},t.onerror=function(){return n(t.error)}}));case 3:return n=e.sent,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"readonly";return n.transaction(e,t).objectStore(e)},e.abrupt("return",{useStore:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return t=e.sent,n=t.useStore("cart","readwrite"),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n.put($(e,t)).addEventListener("success",(function(){I.emit("cartItemsChange",e)}))},r=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var a=n.getAll();a.onsuccess=function(){e(a.result)},a.onerror=function(){t(a.error)}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){return new Promise((function(e,t){var a=n.count();a.onsuccess=function(){e(this.result)},a.onerror=function(){t(this.error)}}))},e.abrupt("return",{addItem:a,countItems:c,getAll:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ne(){var e=Object(l.a)(["\n  background-color: brown;\n  position: absolute;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  padding-top: .40rem;\n  top: -0.5rem;\n  right: -0.6rem;\n  display: ",";\n  min-height: 1.3rem;\n  min-width: 1.3rem;\n  line-height: .6rem;\n  font-size: .6rem;\n  border-radius: 50%;\n"]);return ne=function(){return e},e}function ae(){var e=Object(l.a)(["\n  position: relative;\n"]);return ae=function(){return e},e}var re=s.b.div(ae()),ce=s.b.div(ne(),(function(e){return e.show?"block":"none"}));var oe=function(){return r.a.createElement("div",{className:"spinner-border text-secondary",role:"status"},r.a.createElement("span",{className:"sr-only"}))};function ie(){var e=Object(l.a)(["\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ie=function(){return e},e}function ue(){var e=Object(l.a)(["\n  font-size: 1rem;\n  color: #4D4D51;\n  line-height: 1.5rem;\n"]);return ue=function(){return e},e}var le=s.b.s(ue()),se=s.b.div(ie(),(function(e){return e.height?e.height:"633px"}));function me(){var e=Object(l.a)(["\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: ",";\n  height: ",";\n  padding: 5px;\n"]);return me=function(){return e},e}var de=s.b.img(me(),(function(e){return e.width?e.width:"100%"}),(function(e){return e.height?e.height:"auto"}));function fe(){var e=Object(l.a)(["\n  color: green;\n  ","\n  ","\n"]);return fe=function(){return e},e}var pe=s.b.span(fe(),(function(e){return e.size?"font-size: ".concat(e.size,";"):""}),(function(e){return e.bold?"font-weight: ".concat(e.bold):""})),he=function(e){var t=Object(a.useContext)(W).lang;return r.a.createElement(pe,Object.assign({"data-language":t},e),P.nativeToCurrency(e.price))},ve=function(e){var t=e.item,n=t.product,c=t.quantity,o=Object(a.useMemo)((function(){var e=n.price;return(e-e*n.discount)*c}),[n,c]),i=Object(a.useCallback)((function(){var e;null===(e=document.getElementById("link_"+n.code))||void 0===e||e.click()}),[n]);return r.a.createElement("div",{className:"row"},r.a.createElement(R,{to:"product/".concat(n.code),title:n.name,className:"hide",id:"link_"+n.code}),r.a.createElement("div",{onClick:i,className:"col-12 col-sm-3 col-md-2 clicable"},r.a.createElement(de,{className:"card-img-top",src:n.thumb,alt:n.name})),r.a.createElement("div",{className:"col-12 col-sm-9 col-md-10"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{onClick:i,className:"col-12 col-sm-12 col-md-8 clicable"},r.a.createElement("h3",null,n.name)),r.a.createElement("div",{className:"col-12 col-sm-12 col-md-4"},r.a.createElement("label",{htmlFor:"quantity_".concat(n.code)},P.i18n.t("product.buyform.quantity"),":"),r.a.createElement("input",{type:"number",id:"quantity_".concat(n.code),name:"quantity_".concat(n.code),onChange:function(){},className:"form-control pl-3",min:"0",value:c}))),r.a.createElement("div",{onClick:i,className:"row clicable"},r.a.createElement("div",{className:"text-right"},r.a.createElement(he,{size:"1.5rem",bold:"700",price:o})))))},ge=function(){var e=function(){var e=Object(a.useState)(0),t=Object(B.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:return t=e.sent,e.next=5,t.countItems();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=I.on("cartItemsChange",c);return c(),function(){I.off(e)}}),[n]),{itemsCount:n}}().itemsCount;return r.a.createElement(R,{className:"px-4",title:P.i18n.t("cart.openCart"),to:"/cart"},r.a.createElement(re,null,r.a.createElement(ce,{show:e>0},e),r.a.createElement("img",{src:h.cart,alt:"Carrinho",height:"28",width:"28"})))},be=function(e){var t=e.items,n=e.loading,c=Object(a.useMemo)((function(){return t.map((function(e,t){return r.a.createElement(ve,{item:e,key:t})}))}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{height:"100%",hidden:!n},r.a.createElement(oe,null)),r.a.createElement("div",{hidden:n},c))},Ee=function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/e-coffee-frontend"},r.a.createElement("img",{src:h["coffee-logo"],className:"d-inline-block align-top",width:"30",height:"30",alt:"E-coffee logo",loading:"lazy"}),"E-coffee"),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(ge,null),r.a.createElement(Y,null))))};function je(){var e=Object(l.a)(["\n  min-height: 150px;\n"]);return je=function(){return e},e}var we=s.b.footer.attrs({className:"bg-light"})(je()),ye=function(){return r.a.createElement(we,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center p-5"},r.a.createElement("small",null,"Icons made by "," ",r.a.createElement("a",{href:"https://smashicons.com/",className:"link-dark",title:"Smashicons"},"Smashicons"),", ",r.a.createElement("a",{href:"https://www.flaticon.com/free-icon/coffee_1569602",className:"link-dark",title:"Kiranshastry"},"Kiranshastry"),", ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",className:"link-dark",title:"Freepik"},"Freepik")," and ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/google",className:"link-dark",title:"Google"},"Google")," ","from ",r.a.createElement("a",{href:"https://www.flaticon.com/",className:"link-dark",title:"Flaticon"}," www.flaticon.com")))))},Oe=function(e){return r.a.createElement("div",{className:"container py-3"},r.a.createElement("div",{className:"content"},e.children))},xe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(Oe,null,e.children),r.a.createElement(ye,null),r.a.createElement(K,null))},ke=function(e){return t=e.code,n=e.name,a=e.price,r=e.discount,{code:t,name:n,price:a,thumb:c||v,discount:r};var t,n,a,r,c},Ne=function(){var e={},t=n.e(0).then(n.t.bind(null,55,3));return e.getByCode=function(){var e=Object(C.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.products.filter((function(e){return e.code===n})).map(ke).shift());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getRecommendations=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.products.slice(0,4).map(ke));case 3:case"end":return e.stop()}}),e)}))),e.getPaged=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.products.map(ke));case 3:case"end":return e.stop()}}),e)}))),e},Ce=function(e){var t=e.product,n=t.name,a=t.price,c=t.thumb,o=t.code;return r.a.createElement(R,{to:"/product/".concat(o),title:P.i18n.t("product.title",{title:n})},r.a.createElement("div",{className:"p-2"},r.a.createElement(de,{title:P.i18n.t("product.cover",{name:n}),alt:"cover-".concat(n.toLowerCase().replace(/[\s]/gi,"-")),loading:"lazy",src:c}),r.a.createElement("div",{className:"p-2"},r.a.createElement("h3",null,r.a.createElement("small",null,n)),r.a.createElement("div",{className:"row"},r.a.createElement(he,{price:a})))))},Se=function(){var e=function(){var e=Object(a.useState)([]),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(W).lang;return Object(a.useEffect)((function(){Ne().getRecommendations().then(r).catch(console.error)}),[]),{products:n,lang:c}}(),t=e.products,n=e.lang,c=Object(a.useMemo)((function(){return t.map((function(e,t){return r.a.createElement("div",{key:t,"data-language":n,className:"col-12 col-sm-6 col-md-3"},r.a.createElement(Ce,{product:e}))}))}),[t,n]);return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,P.i18n.translate("recomendations.title")),r.a.createElement("div",{className:"row"},c))};function Le(){var e=Object(l.a)(["\n  position: absolute;\n  z-index: 9;\n  height: 100%;\n  cursor: pointer;\n  min-width: 50px;\n  background-image: linear-gradient(\n    ",",\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0)\n  );\n\n  ","\n\n  &:hover {\n    background-image: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  &:active {\n    background-image: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  &::before {\n    position: absolute;\n    content: '';\n    width: 50px;\n    min-height: 30px;\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    top: calc(50% - 15px);\n  }\n"]);return Le=function(){return e},e}function Me(){var e=Object(l.a)(["\n"]);return Me=function(){return e},e}function qe(){var e=Object(l.a)(["\n  max-width: 400px;\n  overflow: hidden;\n"]);return qe=function(){return e},e}function _e(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: linear-gradient(\n    to top right, \n    rgba(87, 59, 8, 1),\n    rgba(87, 59, 8, 0.7),\n    rgba(87, 59, 8, 0)\n  );\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-left: 2rem;\n  padding-bottom: .5rem;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 20vw;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media screen and (max-width: 1200px) {\n    height: calc(300px + 5vw);\n  }\n"]);return Ie=function(){return e},e}var Te=s.b.div(Ie(),(function(e){return"url(".concat(e.src,")")})),ze=s.b.div(_e()),Ae=s.b.h1.attrs({className:"text-uppercase"})(qe()),Pe=s.b.h2(Me()),Be=(s.b.div(Le(),(function(e){return e.left?"to right":"to left"}),(function(e){return e.left?"left: 0;":"right: 0;"}),(function(e){return e.left?"to right":"to left"}),(function(e){return e.left?"to right":"to left"}),(function(e){return e.left?"url(".concat(h["left-chevron"],")"):"url(".concat(h["right-chevron"],")")})),function(){return r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-9"},r.a.createElement(Te,{src:"https://images.unsplash.com/photo-1599054228863-88e0b902a32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"},r.a.createElement(ze,null,r.a.createElement(Ae,null,P.i18n.t("banners.0.title")),r.a.createElement(Pe,{title:P.i18n.t("banners.0.subtitle")},P.i18n.t("banners.0.subtitle"))))))}),De=function(e,t){return t.rating-e.rating},Fe=function(e){return t=e.name,n=e.rating,{id:e.id||0,name:t,rating:n,thumb:a||g};var t,n,a},Je=function(){var e={},t=n.e(0).then(n.t.bind(null,55,3));return e.getMostRated=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.stores.sort(De).slice(0,4).map(Fe));case 3:case"end":return e.stop()}}),e)}))),e.getById=function(){var e=Object(C.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.stores.filter((function(e){return e.id===n})).map(Fe).shift());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e},Qe=function(){var e=function(){var e=Object(a.useState)([]),t=Object(B.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Je().getMostRated().then(r).catch(console.error)}),[]),{stores:n}}().stores;return r.a.createElement(xe,null,r.a.createElement(Be,null),r.a.createElement(V,{stores:e}),r.a.createElement(Se,null))},Re=n(23),Ue=function(e){var t=function(e){var t=Object(a.useState)([]),n=Object(B.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(!1),u=Object(B.a)(i,2),l=u[0],s=u[1],m=Object(a.useState)(!0),d=Object(B.a)(m,2),f=d[0],p=d[1],h=Object(a.useContext)(W).lang,v=Object(a.useMemo)((function(){return c.map((function(e,t){return r.a.createElement("div",{key:t,"data-language":h,className:"col-12 col-sm-6 col-md-3"},r.a.createElement(Ce,{product:e}))}))}),[c,h]),g=Object(a.useCallback)((function(){s(!0),Ne().getPaged().then((function(e){return o([].concat(Object(Re.a)(c),Object(Re.a)(e)))})).catch(console.error).finally((function(){return s(!1)}))}),[c]);return Object(a.useEffect)((function(){Ne().getPaged().then(o).catch(console.error).finally((function(){return p(!1)}))}),[e]),{renderList:v,loadMore:g,loading:l,pageLaoding:f}}(e.shop_id),n=t.renderList,c=t.loading,o=t.pageLaoding,i=t.loadMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{hidden:!o},r.a.createElement(oe,null)),r.a.createElement("div",{hidden:o,className:"content"},r.a.createElement("h2",null,P.i18n.t("shops.products.title")),r.a.createElement("div",{className:"row"},n),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col p-3"},r.a.createElement(H,{onClick:i,loading:c},P.i18n.t("shops.products.seeMore"))))))},We=function(){var e=function(e){var t=Object(a.useState)(!0),n=Object(B.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)({}),i=Object(B.a)(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){Je().getById(parseInt(e)).then(function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t||{});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(l).catch(console.error).finally((function(){return c(!1)}))}),[e]),{shop_id:parseInt(e),shop:u,loading:r}}(Object(u.f)().params.shop_id),t=e.shop_id,n=e.shop;return r.a.createElement(xe,null,r.a.createElement("div",{className:"pt-5"},r.a.createElement(de,{src:n.thumb,height:"calc(20vh + 10vw)"})),r.a.createElement("div",{className:"py-4"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"text-uppercase"},n.name),r.a.createElement("hr",null),r.a.createElement(x,{popularity:n.rating}))),r.a.createElement(Ue,{shop_id:t}))};function He(){var e=Object(l.a)(["\n  padding: 20px;\n  background-color: ",";\n  padding: 20px;\n  color: #fff;\n  width: 100%;\n  border: none;\n\n  &:hover {\n    filter: brightness(0.8);\n  }\n\n  &:active {\n    filter: brightness(0.6);\n  }\n"]);return He=function(){return e},e}var Ve=s.b.button(He(),(function(e){return e.color||"#198754"})),Ge=function(){var e=function(){var e=Object(a.useState)([]),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(B.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(!1),s=Object(B.a)(l,2),m=s[0],d=s[1],f=Object(a.useCallback)((function(e){d(!0)}),[]);Object(a.useEffect)((function(){u(!0),te().then(function(){var e=Object(C.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAll();case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){return u(!1)})).catch(f)}),[f]);var p=Object(a.useMemo)((function(){return n.map((function(e){var t=e.product.price*e.product.discount;return(e.product.price-t)*e.quantity})).reduce((function(e,t){return t+e}),0)}),[n]);return{loading:i,items:n,hasError:m,total:p}}(),t=e.items,n=e.loading,c=e.total;return r.a.createElement(xe,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body screen-relative-h-75"},r.a.createElement("h3",null,P.i18n.t("cart.pageTitle")),r.a.createElement(be,{items:t,loading:n}))),r.a.createElement("div",{className:"p-3 row"},r.a.createElement("div",{className:"col-12 col-sm-6 text-right d-flex align-items-md-end justify-content-end"},r.a.createElement("h4",null,"Total: ",r.a.createElement(he,{price:c}))),r.a.createElement("div",{className:"col-12 col-sm-6 text-right"},r.a.createElement(Ve,{title:"Concluir compra",about:"Click here to proceed to check-out"},"Concluir compra"))))},Ke=function(e){var t=e.product,n=t.name,c=t.thumb,o=function(e){var t=Object(a.useState)(1),n=Object(B.a)(t,2),r=n[0],c=n[1],o=Object(a.useCallback)((function(){te().then((function(t){t.addItem(e,r)}))}),[e,r]),i=Object(a.useCallback)((function(e){isNaN(e.target.valueAsNumber)?c(1):c(e.target.valueAsNumber)}),[]),u=Object(a.useMemo)((function(){var t=e.price;return(t-t*e.discount)*r}),[e,r]);return{buttonAddToCart:o,changeQuantity:i,quantity:r,currentPrice:u}}(e.product),i=o.buttonAddToCart,u=o.changeQuantity,l=o.quantity,s=o.currentPrice,m=P.i18n.t("product.buyform.addToCart",{price:P.nativeToCurrency(s)});return r.a.createElement("div",{className:"row"},r.a.createElement(se,{hidden:!e.hidden},r.a.createElement(oe,null)),r.a.createElement("div",{hidden:e.hidden,className:"form-group"},r.a.createElement(de,{alt:"cover-".concat(n),title:P.i18n.t("product.cover",{name:n}),height:"400px",src:c}),r.a.createElement("div",{className:"pt-5"},r.a.createElement("h3",null,n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col pb-5 text-right"},r.a.createElement(le,null,P.nativeToCurrency(e.product.price||0)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"quantity"},P.i18n.t("product.buyform.quantity"),":"),r.a.createElement("input",{min:"1",type:"number",id:"quantity",name:"quantity",className:"border-aqua form-control h-100",value:l,onChange:u}))),r.a.createElement("div",{className:"col-8"},"\xd7",r.a.createElement(he,{bold:"700",size:"2.3rem",price:s}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(Ve,{onClick:i}," ",m," ")))))},Ye=function(){var e=function(e){var t=Object(a.useState)({}),n=Object(B.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!0),i=Object(B.a)(o,2),u=i[0],l=i[1],s=Object(a.useState)(""),m=Object(B.a)(s,2),d=m[0],f=m[1];return Object(a.useEffect)((function(){Ne().getByCode(e).then(function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return f("Not found"),e.abrupt("return",{});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(c).catch(console.error).finally((function(){return l(!1)}))}),[e]),{product:r,loading:u,error:d}}(Object(u.f)().params.code),t=e.product,n=e.loading;return r.a.createElement(xe,null,r.a.createElement("div",{className:"row py-5"},r.a.createElement("div",{className:"d-none d-sm-none d-md-block col-md-8 "}),r.a.createElement("div",{className:"col-12 col-md-4 border-left"},r.a.createElement(Ke,{hidden:n,product:t}))),r.a.createElement("hr",null),r.a.createElement(Se,null))},$e=function(){var e=function(){var e=Object(a.useState)([]);return{stores:Object(B.a)(e,1)[0]}}().stores;return r.a.createElement(xe,null,r.a.createElement(V,{asList:!0,stores:e}))},Xe=function(){var e=J();return r.a.createElement(W.Provider,{value:e},r.a.createElement(i.a,{basename:"e-coffee-frontend"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Qe}),r.a.createElement(u.a,{path:"/product/:code",component:Ye}),r.a.createElement(u.a,{path:"/shop/:shop_id/product/:code",component:Ye}),r.a.createElement(u.a,{path:"/shop/:shop_id",component:We}),r.a.createElement(u.a,{path:"/shops",component:$e}),r.a.createElement(u.a,{path:"/cart",component:Ge}))))},Ze=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(Xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,2,3]]]);
//# sourceMappingURL=main.a5c36ef2.chunk.js.map