(this.webpackJsonptreflo_project=this.webpackJsonptreflo_project||[]).push([[0],{42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"populateMenu",(function(){return E})),n.d(c,"addToCart",(function(){return B})),n.d(c,"removeFromCart",(function(){return _})),n.d(c,"updateCartItem",(function(){return U})),n.d(c,"updateSorting",(function(){return V})),n.d(c,"updateFilter",(function(){return G}));var a=n(1),r=n(0),s=n.n(r),i=n(14),o=n.n(i),l=(n(52),n(53),n(10)),u=n(70),j=function(){return Object(a.jsxs)(u.a,{className:"banner-style header-style",children:[Object(a.jsx)("h1",{children:"Mishras' Pizza Place"}),Object(a.jsx)("p",{children:"Shop from our selection of hand-tossed freshly baked pizzas"})]})},d=n(74),b=n(46),f=n(39),O=n.n(f),h=n(43),x=n(72),m=n(71),p=n(78),g=n(73),v=n(31),y=n(11),C=n(29),N=n(8),T="POPULATE_MENU",S="ADDTO_CART",k="REMOVE_FROM_CART",z="UPDATE_CART_ITEM",F="UPDATE_FILTER",M="UPDATE_SORTING",w={data:null,cart:[],sortby:null,filterby:null,totalCost:0,totalItems:0},I=function(e){var t=0;for(var n in e)t+=e[n].price*e[n].count;return t},P=function(e){var t=0;for(var n in e)t+=e[n].count;return t},A=function(e,t,n){var c=n.findIndex((function(t){return t.id===e}));return 0===t.count?n.splice(c,1):n[c]=t,n},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload});case S:var n=t.payload.count;if(n>0){var c=e.cart.concat(t.payload),a=I(c),r=P(c);return Object(N.a)(Object(N.a)({},e),{},{cart:c,totalCost:a,totalItems:r})}return e;case k:var s=e.cart.filter((function(e){return e.id!==t.payload})),i=I(s),o=P(s);return Object(N.a)(Object(N.a)({},e),{},{cart:s,totalCost:i,totalItems:o});case z:var l=A(t.payload.id,t.payload.data,e.cart),u=I(e.cart),j=P(e.cart);return Object(N.a)(Object(N.a)({},e),{},{data:Object(N.a)({},l),totalCost:u,totalItems:j});case F:return Object(N.a)(Object(N.a)({},e),{},{filterby:t.payload});case M:return Object(N.a)(Object(N.a)({},e),{},{sortby:t.payload});default:return e}},R=Object(C.b)(D),E=function(e){return{type:T,payload:e}},B=function(e){return{type:S,payload:e}},_=function(e){return{type:k,payload:e}},U=function(e,t){return{type:z,payload:{id:e,data:Object(N.a)({},t)}}},V=function(e){return{type:M,payload:e}},G=function(e){return{type:F,payload:e}},L=n(77),q=n(45),H=function(e){var t=e.isRadio,n=e.data,c=e.onSelection;return n.length<=0?Object(a.jsx)("div",{}):t?Object(a.jsx)(L.a,{name:"single-select",type:"radio",vertical:!0,onChange:function(e){return c([].concat(e))},children:n.map((function(e,t){return Object(a.jsx)(q.a,{variant:"info",value:e.size?e.size:e.name,children:e.size?e.size:e.name},"121"+t)}))}):Object(a.jsx)(L.a,{vertical:!0,type:"checkbox",name:"multiple-select",onChange:function(e){return c(e)},style:{marginBottom:"40px"},children:n.map((function(e,t){return Object(a.jsx)(q.a,{size:"sm",variant:"info",value:e.size?e.size:e.name,children:e.size?e.size:e.name},"1221"+t)}))})},J=n(76),W=Object(y.b)((function(e){return{data:e.data,cart:e.cart}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))},addToCart:function(t){return e(c.addToCart(t))},removeFromCart:function(t){return e(c.removeFromCart(t))}}}))((function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(r.useState)(!1),b=Object(l.a)(d,2),f=b[0],O=b[1],h=function(){O(!1),s(null),j([]),e.hideModal()};return Object(a.jsxs)(J.a,{show:e.isOpen,size:"sm",onHide:function(){h()},children:[Object(a.jsx)(J.a.Header,{style:{textAlign:"center"},children:Object(a.jsx)("h2",{children:"Customize"})}),Object(a.jsx)(J.a.Body,{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(x.a,{className:"justify-content-center",children:Object(a.jsx)("h4",{children:"Select Size:"})}),Object(a.jsx)(x.a,{className:"justify-content-center",children:Object(a.jsx)(H,{isRadio:e.baseData.size[0].isRadio,data:e.baseData.size[0].items,onSelection:function(e){return s(e)}})}),Object(a.jsx)(x.a,{children:f?Object(a.jsx)("p",{style:{color:"red"},children:"Please select size"}):Object(a.jsx)("p",{children:"\xa0"})}),Object(a.jsx)(x.a,{className:"pt-4 justify-content-center",children:Object(a.jsx)("h4",{children:"Select Toppings:"})}),Object(a.jsx)(x.a,{className:"justify-content-center",children:Object(a.jsx)(H,{isRadio:e.baseData.toppings[0].isRadio,data:e.baseData.toppings[0].items,onSelection:function(e){return j(e)}})})]})}),Object(a.jsx)(J.a.Footer,{children:Object(a.jsxs)(v.a,{onClick:function(){c?(O(!1),e.addToCart(Object(N.a)(Object(N.a)({},e.baseData),{},{size:c,toppings:u})),h()):O(!0)},variant:"danger",children:[Object(a.jsx)("i",{className:"fa fa-plus"}),"\xa0\xa0Add To Cart"]})})]})})),Y=Object(y.b)((function(e){return{data:e.data,cart:e.cart}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))},addToCart:function(t){return e(c.addToCart(t))},removeFromCart:function(t){return e(c.removeFromCart(t))}}}))((function(e){var t=e.onInc,n=e.onDec,c=e.currValue;return Object(a.jsxs)(x.a,{className:"align-items-center justify-content-start m-0",children:[Object(a.jsx)("i",{onClick:function(){return t()},className:"fa fa-plus counter-icon"}),"\xa0",Object(a.jsx)("h4",{className:"counter-disp",children:c}),"\xa0",Object(a.jsx)("i",{onClick:function(){return n()},className:"fa fa-minus counter-icon"}),"\xa0\xa0"]})})),K=Object(y.b)((function(e){return{data:e.data,cart:e.cart}}),(function(e){return{loadMenu:function(t){return e(E(t))},addToCart:function(t){return e(B(t))},removeFromCart:function(t){return e(_(t))}}}))((function(e){var t,n=e.pza,c=Object(r.useState)(1),s=Object(l.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(!1),j=Object(l.a)(u,2),d=j[0],b=j[1],f=Object(a.jsxs)(x.a,{className:"align-items-center m-0",children:[Object(a.jsx)("div",{className:"quant-menu-container",children:Object(a.jsx)(Y,{currValue:i,onInc:function(){return o(i+1)},onDec:function(){return i>0?o(i-1):null}})}),Object(a.jsx)("div",{onClick:function(){return b(!0)},className:"fa fa-cart-plus fa-2x counter-add-icon"})]}),O=Object(a.jsx)(v.a,{size:"sm",onClick:function(){return e.removeFromCart(n.id)},variant:"danger",className:"quant-menu-container",children:"Remove"});return Object(a.jsxs)("div",{className:"menu-card",children:[Object(a.jsx)(W,{hideModal:function(){return b(!1)},baseData:Object(N.a)(Object(N.a)({},n),{},{count:i}),isOpen:d}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(p.a.Img,{style:{minHeight:"220px",minWidth:"189px"},src:n.img_url}),Object(a.jsx)(p.a.ImgOverlay,{children:n.isVeg?Object(a.jsx)("div",{className:"veg-mark"}):Object(a.jsx)("div",{className:"non-veg-mark"})}),Object(a.jsxs)(p.a.Body,{children:[Object(a.jsx)(p.a.Title,{style:{fontSize:n.name.length>10?"15px":"20px"},children:n.name}),(t=n.rating,t=t<0?-t:t,Object(a.jsxs)("div",{children:[Array.apply(null,Array(Math.floor(t))).map((function(e,t){return Object(a.jsx)("i",{className:"fa fa-star",style:{color:"#7e685a"},children:"\xa0"},"11232"+t)})),t-Math.floor(t)>0?Object(a.jsx)("i",{className:"fa fa-star-half",style:{color:"#7e685a"}}):null]})),Object(a.jsxs)(p.a.Text,{style:{fontSize:"14px"},children:[" ",n.description," "]}),Object(a.jsxs)(x.a,{className:"justify-content-between",children:[Object(a.jsxs)("h5",{className:"price-tag",children:["\u20b9\xa0",n.price]}),Object(a.jsx)("div",{style:{float:"right"},children:e.cart.some((function(e){return e.id===n.id}))?O:f})]})]})]})]})})),Q=function(e){return e.data.length>0?Object(a.jsx)(x.a,{children:e.data.map((function(e){return Object(a.jsx)(m.a,{xs:12,sm:6,lg:4,xl:3,children:Object(a.jsx)(K,{pza:e})},e.id)}))}):Object(a.jsx)("h2",{style:{textAlign:"center",paddingTop:"20vh",paddingBottom:"20vh"},children:"Something went wrong, please try reloading."})},X=n(75),Z=(n(60),function(e){return Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{id:"meat-toggle",onClick:function(){return function(){var t,n=null===(t=document.getElementById("meat-toggle"))||void 0===t?void 0:t.checked;e.onToggle&&e.onToggle(n)}()},type:"checkbox"}),Object(a.jsx)("span",{className:"slider round"})]})})}),$=(n(61),["Price","Rating"]),ee=Object(y.b)((function(e){return{data:e.data}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))},setSort:function(t){return e(c.updateSorting(t))},setNonVeg:function(t){return e(c.updateFilter(t))}}}))((function(e){var t=Object(r.useState)("Select"),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(a.jsx)(r.Fragment,{children:Object(a.jsxs)(x.a,{style:{height:"130px"},className:"justify-content-between px-4 align-items-center",children:[Object(a.jsx)(m.a,{children:Object(a.jsxs)(x.a,{className:"align-items-center",children:[Object(a.jsx)("h5",{children:"Sort by: \xa0"}),Object(a.jsxs)(X.a,{children:[Object(a.jsx)(X.a.Toggle,{className:"sort-dropdown",children:c}),Object(a.jsx)(X.a.Menu,{children:$.map((function(t,n){return Object(a.jsx)(X.a.Item,{onClick:function(){e.onSort(t),s(t)},children:t},"123"+n)}))})]})]})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(x.a,{className:"justify-content-end align-items-center",children:Object(a.jsx)("div",{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h4",{className:"meat-text",children:"Showing"})," \xa0 \xa0",Object(a.jsx)(Z,{onToggle:function(t){return e.onFilter(t)}})," ","\xa0\xa0",Object(a.jsx)("h4",{className:"meat-text",children:"Pizzas"})]})})})})]})})})),te=Object(y.b)((function(e){return{data:e.data,numItems:e.totalItems}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))}}}))((function(e){var t=Object(r.useState)(!0),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(r.useState)(null),f=Object(l.a)(d,2),y=f[0],C=f[1],N=function(){var t=Object(h.a)(O.a.mark((function t(){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,e.loadMenu(c),j(c),T(!1,c),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:s(!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){N()}),[]);var T=function(e,t){var n=t.filter((function(t){return t.isVeg!==e}));S(y,n)},S=function(e,t){C(e);var n=t;"Price"===e?n.sort((function(e,t){return e.price-t.price})):"Rating"===e&&n.sort((function(e,t){return t.rating-e.rating})),j(Object(b.a)(n))};if(c)return Object(a.jsx)(x.a,{children:Array.apply(null,Array(4)).map((function(e,t){return Object(a.jsx)(m.a,{xs:12,sm:6,lg:4,xl:3,children:Object(a.jsx)("div",{className:"menu-card",children:Object(a.jsxs)(p.a,{style:{height:"300px",paddingTop:"30%"},children:[Object(a.jsx)(g.a,{style:{placeSelf:"center",color:"#7e685a"},animation:"border"}),Object(a.jsx)("p",{style:{placeSelf:"center",color:"#7e6851"},children:"Loading"})]})})},"423"+t)}))});return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(ee,{onFilter:function(t){T(t,e.data)},onSort:function(e){return S(e,u)},onSearch:function(t){return function(t){var n=e.data.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}));console.log(n),j(n)}(t)}}),Object(a.jsx)(Q,{data:u}),Object(a.jsxs)("div",{className:"next-btn",children:[Object(a.jsxs)(v.a,{onClick:function(){return e.nextPage()},style:{backgroundColor:"#afd275",borderColor:"#afd275"},children:["Go To Cart ",Object(a.jsx)("i",{className:"fa fa-chevron-right"})]}),Object(a.jsx)("div",{className:"count-badge",children:Object(a.jsxs)("div",{className:"badge-count",children:[e.numItems," "]})})]})]})})),ne=(n(42),Object(y.b)((function(e){return{data:e.data,cart:e.cart}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))},updateCart:function(t,n){return e(c.updateCartItem(t,n))}}}))((function(e){var t=e.item;return Object(a.jsxs)(x.a,{className:"mb-4 cart-item-container pt-4 pb-4",children:[Object(a.jsx)(m.a,{xs:12,lg:2,children:Object(a.jsx)("img",{style:{height:"145px",width:"145px"},className:"mx-auto",src:t.img_url})}),Object(a.jsxs)(m.a,{xs:12,lg:8,children:[Object(a.jsx)(x.a,{className:"justify-content-between",children:Object(a.jsx)(m.a,{xs:12,lg:5,children:Object(a.jsxs)("h5",{className:"cart-item-title",children:[t.name," "]})})}),Object(a.jsx)("p",{style:{color:"GrayText"},children:Object(a.jsx)("div",{className:"quant-cart-container",children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(x.a,{className:"align-items-center",children:[Object(a.jsx)(Y,{currValue:t.count,onInc:function(){return function(t){var n=e.cart.findIndex((function(e){return e.id===t}));if(-1!==n){var c=e.cart[n];c.count++,e.updateCart(t,c)}}(t.id)},onDec:function(){return function(t){var n=e.cart.findIndex((function(e){return e.id===t}));if(-1!==n){var c=e.cart[n];return c.count>0?(c.count--,void e.updateCart(t,c)):void 0}}(t.id)}}),Object(a.jsxs)("h5",{children:[Object(a.jsx)("i",{className:"fa fa-times"})," ",t.size[0]]})]})})})}),t.toppings.length>0?Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("strong",{children:"Toppings:"}),t.toppings.map((function(e){return Object(a.jsx)("p",{className:"p-0 m-0",children:e})}))]}):null]}),Object(a.jsx)(m.a,{xs:12,lg:2,children:Object(a.jsxs)("h4",{style:{float:"right"},children:["\u20b9 ",t.price*t.count]})})]})}))),ce=Object(y.b)((function(e){return{data:e.data,cart:e.cart,totalCost:e.totalCost}}),(function(e){return{loadMenu:function(t){return e(c.populateMenu(t))},addToCart:function(t){return e(c.addToCart(t))},removeFromCart:function(t){return e(c.removeFromCart(t))}}}))((function(e){return e.cart.length>0?Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)("h2",{children:"Shopping Cart:"})})}),Object(a.jsx)(x.a,{className:"justify-content-between",children:Object(a.jsx)(m.a,{children:Object(a.jsx)("h3",{style:{float:"right"},children:"Total"})})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(m.a,{children:e.cart.map((function(e){return Object(a.jsx)(ne,{item:e})}))})}),Object(a.jsx)(x.a,{className:"checkout-row pt-4",children:Object(a.jsxs)(m.a,{children:[Object(a.jsxs)("h5",{children:["Total: \u20b9 ",e.totalCost+.18*e.totalCost," ","(including 18% GST)"]}),Object(a.jsxs)(v.a,{onClick:function(){return e.onForward()},style:{backgroundColor:"#afd275",borderColor:"#afd275",float:"right"},children:["Checkout ",Object(a.jsx)("i",{className:"fa fa-usd"})]})]})}),Object(a.jsx)("div",{className:"prev-btn",children:Object(a.jsxs)(v.a,{onClick:function(){return e.onBack()},style:{backgroundColor:"#afd275",borderColor:"#afd275"},children:[Object(a.jsx)("i",{className:"fa fa-chevron-left"}),"\xa0Back To Menu"]})})]}):Object(a.jsxs)(x.a,{className:"justify-content-center pt-5 pb-5",children:[Object(a.jsx)("h4",{children:"Such Empty :(. Please Add A Pizza to Checkout."}),Object(a.jsx)("div",{className:"prev-btn",children:Object(a.jsxs)(v.a,{onClick:function(){return e.onBack()},style:{backgroundColor:"#afd275",borderColor:"#afd275"},children:[Object(a.jsx)("i",{className:"fa fa-chevron-left"}),"\xa0Back To Menu"]})})]})})),ae=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(d.a,{children:0===n?Object(a.jsx)(te,{nextPage:function(){return c(n+1)}}):1===n?Object(a.jsx)(ce,{onBack:function(){return c(n-1)},onForward:function(){return c(n+1)}}):Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"final-screen-body",children:[Object(a.jsx)("h2",{children:"Order Placed! Thank you for shopping with us."}),Object(a.jsx)("h4",{style:{color:"GrayText"},children:"You may close this window now"})]})})})},re=(n(63),function(){return Object(a.jsx)(u.a,{className:"banner-style footer-style",children:Object(a.jsxs)(x.a,{className:"align-items-center justify-content-center",children:[Object(a.jsx)("p",{children:"Created with \xa0"}),Object(a.jsx)("div",{className:"beating-heart-container",children:Object(a.jsx)("div",{className:"fa fa-heart human-heart"})}),Object(a.jsx)("p",{children:"\xa0 by Amartya Mishra"})]})})}),se=(n(64),function(e){return Object(a.jsxs)("div",{className:"splash-background",children:[Object(a.jsx)("h2",{className:"splash-text",children:"Order A Fresh Pizza with Mishras' Pizza"}),Object(a.jsx)(v.a,{onClick:function(){return e.onForward()},children:"Get Started"})]})}),ie=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1];return n?Object(a.jsx)(se,{onForward:function(){return c(!1)}}):Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(ae,{}),Object(a.jsx)(re,{})]})};var oe=function(){return Object(a.jsx)(ie,{})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y.a,{store:R,children:Object(a.jsx)(oe,{})})}),document.getElementById("root")),le()}},[[65,1,2]]]);
//# sourceMappingURL=main.0f30a4b2.chunk.js.map