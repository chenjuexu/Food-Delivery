(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[2,12],{133:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return u}));var a,r,c=t(3),i=t(2),o=t(0),s=i.b.select(a||(a=Object(c.a)(["\n    color: rgb(0 0 0 / 50%);\n    padding: 7px;\n    border-radius: 5px;\n    outline: none;\n    cursor: pointer;\n    font-size: 14px;\n    margin: 0;\n    border: none;\n    margin-bottom: 20px;\n    background: #fff;\nbox-shadow:  1px 1px 6px 0px #ccc;\n    text-transform: capitalize;\n    margin: 0 20px 20px auto;\n\n"]))),d=i.b.option(r||(r=Object(c.a)(["\n&:checked{\n   background: #fcba1c;\n}\n"])));function u(n){var e=n.setSortPreferece,t=n.defaultValue;return Object(o.jsxs)(s,{name:"sortProductBy",value:t,onChange:function(n){return e(n.target.value)},children:[Object(o.jsx)(d,{value:"-createdAt",children:"M\xe1s recientes"}),Object(o.jsx)(d,{value:"createdAt",children:"M\xe1s antiguos"}),Object(o.jsx)(d,{value:"price",children:"Menor precio"}),Object(o.jsx)(d,{value:"-price",children:"Mayor precio"}),Object(o.jsx)(d,{value:"-sold",children:"Populares"})]})}},136:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a,r=t(3),c=t(2),i=t(0),o=c.b.div(a||(a=Object(r.a)(["\ndisplay:flex;\njustify-content:center;\nwidth:100%;\ngap:15px;\n&> button{\n  padding: 5px 10px 6px;\n  cursor:pointer;\n  background:",";\n    color:",";\nbox-shadow:",";\n    border:transparent;\n    outline:transparent;\n    fornt-size:20px;\n    font-family:oswald;\n    lettter-spacing: 1px;\n    border-radius: 10px;\n}\n@media screen and (min-width:500px){\n  &> button{\n    transform:scale(1.1);\n  }\n}\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.darckYellow}),(function(n){return n.theme.lightBoxShadow}));function s(n){var e=n.page,t=n.maxPage,a=n.setPage;return Object(i.jsxs)(o,{children:[e>1?Object(i.jsxs)("button",{onClick:function(n){return a(e-1)},children:["<< ","Prev"]}):null,e<t?Object(i.jsxs)("button",{onClick:function(n){return a(e+1)},children:["Next"," >>"]}):null]})}},138:function(n,e,t){"use strict";t.r(e),t.d(e,"SectionTitle",(function(){return T})),t.d(e,"ProductsSection",(function(){return N})),t.d(e,"NotFaundMessage",(function(){return M}));var a=t(3),r=t(2),c=t(56),i=t(33),o=t(142),s=t(5),d=t.n(s),u=t(7),l=t(6),b=t(1),p=t(8),x=t(10);var j,f,g,h,O,m,v,w,y,k=t(141),S=t(133),P=t(145),C=t(136),z=t(140),L=t(0),A=r.b.main(j||(j=Object(a.a)(["\nmin-height:100vh;\nwidth:100vw;\npadding: 65px 0 20px;\nmargin:0;\nmargin-bottom:20px;\ntext-aling:center;\n\n"]))),T=r.b.h2(f||(f=Object(a.a)(["\ntext-align:center;\ntext-transform: uppercase;\n    margin-bottom: 40px;\ncolor:",";\n text-shadow: ",";\n"])),(function(n){return n.light?"#fff":"#fcba1c"}),(function(n){return n.theme.darckTextShadow})),E=r.b.section(g||(g=Object(a.a)(["\ndisplay:flex;\nflex-direction: column;\nflex-wrap: wrap;\npadding-bottom: 20px ;\nwidth:100%;\n    & >"," {\n  position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 500;\n    margin: -60px 0  0 -60px ;\n\n}\n"])),i.a),R=r.b.h4(h||(h=Object(a.a)(["\n    text-align: center;\n    line-height: 15px;\n    color: #fcba1c;\nfont-size: 25px;\n    margin: 10px 5px;\n text-shadow: ",';\n    text-transform: capitalize;\n&:before {\n  content:".";\n}\n'])),(function(n){return n.theme.darckTextShadow})),V=r.b.div(O||(O=Object(a.a)(["\nwidth:100vw;\n    margin: 30px auto 40px\n"]))),F=r.b.section(m||(m=Object(a.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    background: ",";\n    justify-content: center;\n    margin: -10px 0 20px;\n    padding:  20px 15px;\n    box-shadow: inset 0 0 20px 0 #1111118c;\n\n"])),(function(n){return n.theme.darckRed})),N=r.b.div(v||(v=Object(a.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),M=r.b.h4(w||(w=Object(a.a)(["\nmargin-top: 20px;\ndisplay:block;\nwidth:100%;\n"]))),B=r.b.div(y||(y=Object(a.a)(["\n    flex-wrap: wrap;\n    margin: 0 15px 20px;\n    display: flex;\n    align-items: center;\n    max-width: max-content;\n    & > select {\n      margin: 0 10px 10px 0;\n\n}\n\n"])));e.default=Object(c.a)((function(){var n=function(){var n,e=Object(p.g)(),t=Object(p.h)(),a=Object(x.a)().categories,r=null===a||void 0===a?void 0:a.filter((function(n){return(null===n||void 0===n?void 0:n.quantity)>0})),c=Object(b.useState)(new URLSearchParams(t.search)),i=Object(l.a)(c,2),o=i[0],s=(i[1],Object(b.useState)(!1)),j=Object(l.a)(s,2),f=j[0],g=j[1],h=Object(b.useState)(o.get("page")||1),O=Object(l.a)(h,2),m=O[0],v=O[1],w=Object(b.useState)(1),y=Object(l.a)(w,2),k=y[0],S=y[1],P=Object(b.useState)([]),C=Object(l.a)(P,2),z=C[0],L=C[1],A=Object(b.useState)(o.get("category")||"all"),T=Object(l.a)(A,2),E=T[0],R=T[1],V=Object(b.useState)(o.get("sort")||"-createdAt"),F=Object(l.a)(V,2),N=F[0],M=F[1],B=Object(b.useState)(o.get("title")||""),_=Object(l.a)(B,2),D=_[0],I=_[1],U=Object(b.useState)(!0),q=Object(l.a)(U,2),J=q[0],Y=q[1];return J?n=new URLSearchParams(o.toString()):((n=new URLSearchParams).append("active",!0),n.append("sort",N),n.append("page",m),n.append("limit",6)),Object(b.useEffect)((function(){"all"!==E&&n.append("category",E),""!==D&&(n.append("title",D),M("-createdAt"),R("all")),v(1)}),[N,E,D]),Object(b.useEffect)((function(){var t=new AbortController,a=t.signal;return g(!0),function(){var t=Object(u.a)(d.a.mark((function t(){var r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/products?".concat(n),{signal:a});case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,L(c.data),i=parseInt(c.total),S(Math.ceil(i/6)),document.querySelector("body").scrollTo(0,100),g(!1),Y(!1),t.abrupt("return",e.push("/menu?".concat(n)));case 16:t.prev=16,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("Fetch Canseled: caught abort"):console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}()(),function(){t.abort()}}),[D,N,m,E]),{isLoading:f,maxPage:k,products:z,populatedCategories:r,page:m,setPage:v,setCategory:R,setSorting:M,setTitle:I,isFirstRender:J,sorting:N,category:E,title:D}}(),e=n.isLoading,t=n.maxPage,a=n.products,r=n.populatedCategories,c=n.sorting,s=n.page,j=n.setPage,f=n.setCategory,g=n.setSorting,h=n.setTitle,O=n.isFirstRender,m=n.category,v=n.title;return Object(L.jsxs)(A,{children:[Object(L.jsx)(T,{children:"Men\xfa"}),Object(L.jsx)(V,{children:Object(L.jsx)(k.a,{setSearch:h,defaultValue:v})}),Object(L.jsxs)(E,{children:[Object(L.jsx)(F,{children:null===r||void 0===r?void 0:r.map((function(n,e){return Object(L.jsx)(R,{children:n.name},e)}))}),Object(L.jsxs)(B,{children:[Object(L.jsx)(P.a,{defaultValue:m,categories:r,setCategoryPreferece:f}),Object(L.jsx)(S.c,{defaultValue:c,setSortPreferece:g,sortPreference:c})]}),e&&Object(L.jsx)(i.a,{}),e&&O?Object(L.jsx)(o.b,{}):Object(L.jsx)(z.c,{isLoading:e,products:a})]}),Object(L.jsx)(C.a,{setPage:j,page:s,maxPage:t})]})}))},140:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return b}));var a,r,c=t(3),i=t(2),o=t(143),s=t(58),d=t(0),u=i.b.div(a||(a=Object(c.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),l=i.b.h4(r||(r=Object(c.a)(["\ndisplay:block;\nwidth:100%;\nmargin 20px 0;\ntext-align:center;\npadding: 0 10px;\n"])));function b(n){var e=n.isLoading,t=n.products;return Object(d.jsx)(u,{children:e||0!==(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(n){return Object(d.jsx)(o.a,{"data-testid":"productItem",item:n,children:Object(d.jsx)(s.c,{thisProductInfo:n})},n._id)})):Object(d.jsx)(l,{children:"No se han encontrado coincidencias, intenta de nuevo!!"})})}},141:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var a,r,c,i,o=t(3),s=t(2),d=t.p+"static/media/loupe.21575f61.svg",u=t(0),l=s.b.form(a||(a=Object(o.a)(["\nwidth:max-content;\nmargin:0 auto;\nposition:relative;\n"]))),b=s.b.input(r||(r=Object(o.a)(["\nposition:relative;\nwidth:200px;\npadding: 8px;\npadding-left: 15px;\nborder-radius: 15px;\noutline: none;\nbox-shadow: ",";\ntransition: all 0.5s ease;\nborder:none;\nmargin-left: -6px;\nposition: relative;\n&:focus{\n  width:250px;\nbox-shadow: 0 0 10px rgba(0,0,0,0.2);\n\n}\n&::placeholder {\n    font-size: 14px;\n\n}\n&:focus + div{\n  margin-left: 210px;\n\n}\n&::-webkit-search-cancel-button{\n  display:none;\n}\n"])),(function(n){return n.theme.lightBoxShadow})),p=s.b.div(c||(c=Object(o.a)(["\nwidth:30px;\nheight:30px;\nposition:absolute;\nmargin-top:-34px;\nmargin-left: 160px;\ntransition: all 0.5s ease;\ntransform:scale(0.7);\n"]))),x=s.b.img(i||(i=Object(o.a)(["\nheight: 100%;\n"])));function j(n){var e=n.setSearch,t=n.placeholder,a=n.defaultValue;return Object(u.jsxs)(l,{onSubmit:function(n){var t,a;n.preventDefault();var r=null===(t=n.target)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.value;e(r)},children:[Object(u.jsx)(b,{name:"search",defaultValue:a||"",placeholder:t||"Buscar...",type:"search",onChange:function(n){""===n.target.value&&e("")}}),Object(u.jsx)(p,{children:Object(u.jsx)(x,{src:d,alt:"search"})})]})}},142:function(n,e,t){"use strict";t.d(e,"a",(function(){return x})),t.d(e,"b",(function(){return j}));var a,r,c,i,o=t(3),s=t(2),d=t(0),u=s.b.section(a||(a=Object(o.a)(["\n width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 10px 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n"]))),l=s.b.figure(r||(r=Object(o.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\nbackground:#f3f3f3;\n"]))),b=s.b.div(c||(c=Object(o.a)(["\nheight:150px;\nwidth:100%;\npositon:relative;\ndisplay:flex;\nbackground:#fff;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n\n"]))),p=s.b.div(i||(i=Object(o.a)(["\nheight:20px;\nwidth:100%;\nbackground:#fff;\nmargin: 10px auto;\nbox-shadow: 0 1px 3px #ccc;\n"])));function x(){return Object(d.jsxs)(l,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{}),Object(d.jsx)(p,{})]})}function j(){return Object(d.jsxs)(u,{"data-testid":"products-skeketom",children:[Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{})]})}},143:function(n,e,t){"use strict";var a,r,c,i,o,s,d,u=t(6),l=t(3),b=t(2),p=t(1),x=t(8),j=t(61),f=t(0),g=b.b.article(a||(a=Object(l.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\n\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\n"]))),h=b.b.div(r||(r=Object(l.a)(["\ndisplay:flex;\nalign-items:center;\npadding-bottom:5px;\n"]))),O=b.b.h3(c||(c=Object(l.a)(['\ntext-decoration:none;\nmargin-bottom:2px;\n  color: #272727;\nletter-spasing:0;\ncursor:pointer;\nline-height:35px;\ntext-transform:capitalize ;\ntransition: all 0.5s;\n  font-family: "Oswald", sans-serif;\n  font-size: 25px;\n&:hover {\n      color: color: rgb(0 0 0 / 50%);\n\n}\n']))),m=b.b.small(i||(i=Object(l.a)(["\nalign-self: flex-start;\n    color: rgba(0,0,0,0.8);\n    font-weight: 600;\n    margin: 10px;\n    margin-top: 8px;\n"]))),v=b.b.h4(o||(o=Object(l.a)(['\n    align-self: end;\n    color: #fcba1c;\n    margin:0;\n&:before{\n  content:"$";\n}\n']))),w=b.b.div(s||(s=Object(l.a)(["\nheight:150px;\nwidth:100%;\noverflow:hidden;\npositon:relative;\ndisplay:flex;\njustify-content:center;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    backface-visibility: hidden;\n    background-position: center;\n"])),(function(n){return n.isLoaded?"none":"url(".concat(j.a,")")})),y=b.b.img(d||(d=Object(l.a)(["\ntransition:all 0.5s ease;\nheight:100%;\n&:hover{\n  transform:scale(0.8);\n}\n\n"])));e.a=function(n){var e=Object(x.g)(),t=Object(x.h)(),a=n.item,r=Object(p.useState)(!1),c=Object(u.a)(r,2),i=c[0],o=c[1];return Object(f.jsxs)(g,{"data-testid":"productItem",children:[Object(f.jsx)(w,{isLoaded:i,children:Object(f.jsx)(y,{src:null===a||void 0===a?void 0:a.img,onLoad:function(){return o(!0)},alt:a.name})}),Object(f.jsx)(O,{onClick:function(){return n=a._id,e.push({pathname:"/menu/"+n,search:"?from="+t.pathname});var n},children:a.name}),Object(f.jsxs)(h,{children:[Object(f.jsx)(v,{children:a.price})," ",Object(f.jsxs)(m,{children:[a.size,"  "]}),"  "]}),n.children]},a._id)}},145:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(133),r=t(0);function c(n){var e=n.categories,t=n.setCategoryPreferece,c=n.defaultValue;return Object(r.jsxs)(a.b,{value:c,name:"filterProductsByCategory",onChange:function(n){return function(n){n.preventDefault(),t(n.target.value)}(n)},children:[Object(r.jsx)(a.a,{value:"all",children:"Todas las categor\xedas"}),null===e||void 0===e?void 0:e.map((function(n){return Object(r.jsx)(a.a,{value:n.name,children:n.name},n._id)}))]})}},151:function(n,e,t){"use strict";t.d(e,"a",(function(){return y}));var a,r,c,i,o=t(6),s=t(3),d=t(2),u=t(1),l=t(11),b=t.p+"static/media/dashboard.b7777ba1.svg",p=t.p+"static/media/products.b4b63cee.svg",x=t.p+"static/media/categories.bb39c9dc.svg",j=t.p+"static/media/orders.1d7f225d.svg",f=t.p+"static/media/users.93b18c33.svg",g=t.p+"static/media/newProduct.bd3165c0.svg",h=t(0),O=Object(d.c)(a||(a=Object(s.a)(["\n\n  0% { transform: scale(1.1); }\n  50% { transform:  scale(1.2); }\n  100% { transform: scale(1.1); }\n"]))),m=d.b.img(r||(r=Object(s.a)([' \n    transition: all 0.3s ease;\n    width: 20px;\n    cursor: pointer;\n    &:hover{\n      transform: scale(1.1);\n    }\n    &:before{\n          content: " ";\n    background: rgb(0 0 0 / 20%);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    box-sizing: content-box;\n    padding: 20px;\n    }\n  ']))),v=d.b.aside(c||(c=Object(s.a)(["\nposition:fixed;\n   z-index:900;\n  left:5px;\n top: 60px;\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\n   background: ",";\ngap:5px;\n    border-radius: 5px;\n    padding: 10px;\n   box-shadow: ",";\n    transition: all 0.5s ;\n& > img:first-child{\n\n  animation: "," 1s linear infinite;\n}\n  "])),(function(n){return!0===n.isNavOpen?"#ffffff":"transparent"}),(function(n){return!0===n.isNavOpen?" 0 0 5px 0 rgb(0 0 0 / 50%)":"none"}),O),w=d.b.div(i||(i=Object(s.a)(["\n\n    transition: all 1s ;\nmargin-left: ",";\ngap:5px;\ndisplay: ",";\nflex-direction:column;\n  "])),(function(n){return!0===n.isNavOpen?"0":"-150px"}),(function(n){return!0===n.isNavOpen?"flex":"none"}));function y(){var n=Object(u.useState)(!1),e=Object(o.a)(n,2),t=e[0],a=e[1];return Object(h.jsxs)(v,{isNavOpen:t,children:[Object(h.jsx)(m,{onClick:function(n){a(!t)},src:b,title:"Dashboard Menu"}),Object(h.jsxs)(w,{isNavOpen:t,children:[Object(h.jsx)(l.b,{to:"/dashboard/myProducts",children:Object(h.jsx)(m,{src:p,title:"Productos"})}),Object(h.jsx)(l.b,{to:"/dashboard/newProduct",children:Object(h.jsx)(m,{src:g,title:"Crear nuevo producto"})}),Object(h.jsx)(l.b,{to:"/dashboard/users",children:Object(h.jsx)(m,{src:f,title:"usuarios"})}),Object(h.jsx)(l.b,{to:"/dashboard/categories",children:Object(h.jsx)(m,{src:x,title:"Categorias"})}),Object(h.jsx)(l.b,{to:"/dashboard/orders",children:Object(h.jsx)(m,{src:j,title:"Pedidos"})})]})]})}},163:function(n,e,t){"use strict";t.r(e),t.d(e,"FiltersBoard",(function(){return I}));var a=t(3),r=t(2),c=t(63),i=t(5),o=t.n(i),s=t(7),d=t(6),u=t(8),l=t(1),b=t(10),p=t(32);function x(){return(x=Object(s.a)(o.a.mark((function n(e,t,a){var r,c,i,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("El producto ser\xe1 eliminado de la base de datos \xbfEsta seguro? ")){n.next=22;break}return n.prev=2,n.next=5,Object(p.a)("/api/products/".concat(t),e);case 5:if(r=n.sent,204!==(c=r.response).status){n.next=13;break}return n.next=10,Object(p.b)("/api/products?page=1&limit=6",e);case 10:i=n.sent,s=i.json,a(s.data);case 13:if(403!==c.status){n.next=15;break}return n.abrupt("return",alert("Se require rol de Administrador"));case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(2),console.log(n.t0);case 20:n.next=23;break;case 22:return n.abrupt("return");case 23:case"end":return n.stop()}}),n,null,[[2,17]])})))).apply(this,arguments)}var j=function(n,e,t){return x.apply(this,arguments)};var f=t(142),g=t(141),h=t(33),O=t(140),m=t(151),v=t(133),w=t(0);function y(n){var e=n.setStatePreferece,t=n.defaultValue;return Object(w.jsxs)(v.b,{name:"filterProductsByState",value:t,onChange:function(n){return function(n){n.preventDefault(),e(n.target.value)}(n)},children:[Object(w.jsx)(v.a,{value:"all",children:"Todos"}),Object(w.jsx)(v.a,{value:"active",children:"Activos"}),Object(w.jsx)(v.a,{value:"inactive",children:"Inactivos"})]})}var k,S,P,C,z,L,A,T=t(145),E=t(138),R=t(143),V=t(58),F=t(136),N=t.p+"static/media/pencil-alt-solid.40dde303.svg",M=t(82),B=t(56),_=Object(r.b)(E.SectionTitle)(k||(k=Object(a.a)(["\nmargin-bottom:40px;\n"]))),D=r.b.section(S||(S=Object(a.a)(["\nmin-height:100vh;\nwidth:100vw;\npadding:60px 0;\n  &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n       & >'," {\n  position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 500;\n    margin: -60px 0  0 -60px ;\n\n}\n\n"])),(function(n){return n.isLoading?"block":"none"}),h.a),I=r.b.div(P||(P=Object(a.a)(["\nmargin: 30px 15px 0;\n    display: flex;\n    width: fit-content;\n    align-items: center;\n justify-content: flex-start;\nflex-wrap: wrap;\n& > select {\n      margin: 0 10px 10px 0;\n\n}\n"]))),U=Object(r.b)(V.a)(C||(C=Object(a.a)(["\n    height: 50px;\nbackground:  #3f51b5 ;\ntransform: scale(0.7);\n"]))),q=Object(r.b)(U)(z||(z=Object(a.a)(["\nmargin:0;\nbackground: #e83c2e;\nmargin-top:-50px;\n    background: #e83c2e;\n    margin-top: -50px;\n    margin-left: auto;\n    margin-right: 50px;\n"]))),J=Object(r.b)(V.b)(L||(L=Object(a.a)(["\ntransform:scale(1.2);\n"]))),Y=Object(r.b)(O.b)(A||(A=Object(a.a)(["\nmargin: 20px auto;\n"])));e.default=Object(B.a)((function(){var n=function(){var n,e,t=Object(u.g)(),a=Object(u.h)(),r=Object(b.a)(),i=r.categories,p=r.token,x=r.setProductToEdit,f=null===i||void 0===i?void 0:i.filter((function(n){return(null===n||void 0===n?void 0:n.quantity)>0})),g=Object(l.useState)(new URLSearchParams(a.search)),h=Object(d.a)(g,2),O=h[0],m=(h[1],Object(l.useState)(O.get("page")||1)),v=Object(d.a)(m,2),w=v[0],y=v[1],k=Object(l.useState)(O.get("category")||"all"),S=Object(d.a)(k,2),P=S[0],C=S[1],z=Object(l.useState)(O.get("sort")||"-createdAt"),L=Object(d.a)(z,2),A=L[0],T=(L[1],Object(l.useState)(O.get("title")||"")),E=Object(d.a)(T,2),R=E[0],V=E[1],F=Object(l.useState)(!1),N=Object(d.a)(F,2),M=N[0],B=N[1],_=Object(l.useState)(1),D=Object(d.a)(_,2),I=D[0],U=D[1],q=Object(l.useState)(null),J=Object(d.a)(q,2),Y=J[0],$=J[1],G=Object(l.useState)(O.get("active")||"all"),H=Object(d.a)(G,2),K=H[0],Q=H[1],W=Object(l.useState)(!0),X=Object(d.a)(W,2),Z=X[0],nn=X[1];return Z?e=new URLSearchParams(O.toString()):((e=new URLSearchParams).append("sort",A),e.append("page",w),e.append("limit",6)),Object(l.useEffect)((function(){""!==R&&(e.append("title",R),Q("all"),C("all")),"all"!==P&&e.append("category",P),"all"!==K&&e.append("active",K),y(1)}),[R,P,K,A]),Object(l.useEffect)((function(){var n=new AbortController,a=n.signal;return function(){var n=Object(s.a)(o.a.mark((function n(){var r,c,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return B(!0),n.prev=1,n.next=4,fetch("/api/products?".concat(e),{signal:a});case 4:return r=n.sent,n.next=7,r.json();case 7:c=n.sent,$(c.data),i=parseInt(c.total),U(Math.ceil(i/6)),t.push("/dashboard/myProducts?".concat(e)),document.querySelector("body").scrollTo(0,100),nn(!1),B(!1),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),"AbortError"===n.t0.name?console.log("Fetch Canseled: caught abort"):console.log(n.t0);case 20:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(){return n.apply(this,arguments)}}()(),function(){n.abort()}}),[R,K,w,P,6]),n={populatedCategories:f,isLoading:M,page:w,maxPage:I,products:Y,setCategory:C,setTitle:V,handleEdit:function(n){return console.log(n),x(n),t.push("/dashboard/editProduct")},handleDelete:function(){var n=Object(s.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(p,e,$);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),setPage:y,setActiveProducts:Q,setProducts:$,isFirstRender:Z,sorting:A,category:P,activeProducts:K,title:R},Object(c.a)(n,"title",R),Object(c.a)(n,"category",P),Object(c.a)(n,"activeProducts",K),n}(),e=n.populatedCategories,t=n.isLoading,a=n.page,r=n.maxPage,i=n.products,p=n.setCategory,x=n.setTitle,v=n.handleEdit,k=n.handleDelete,S=n.setPage,P=n.setActiveProducts,C=n.isFirstRender,z=(n.sorting,n.category),L=n.activeProducts,A=n.title;return Object(w.jsxs)(D,{children:[Object(w.jsx)(m.a,{}),Object(w.jsx)(_,{children:"mis productos"}),Object(w.jsx)(g.a,{defaultValue:A,setSearch:x}),Object(w.jsxs)(I,{children:[Object(w.jsx)(T.a,{defaultValue:z,categories:e,setCategoryPreferece:p}),Object(w.jsx)(y,{defaultValue:L,setStatePreferece:P})]}),t&&Object(w.jsx)(h.a,{}),t&&C?Object(w.jsx)(f.b,{}):null,t||0!==(null===i||void 0===i?void 0:i.length)?Object(w.jsx)(Y,{isLoading:t,children:null===i||void 0===i?void 0:i.map((function(n){return Object(w.jsx)(l.Fragment,{children:Object(w.jsx)(R.a,{item:n,children:Object(w.jsxs)(l.Fragment,{children:[Object(w.jsx)(U,{onClick:function(){return v(n)},children:Object(w.jsx)(J,{src:N,alt:"edit"})}),Object(w.jsx)(q,{onClick:function(){return k(n._id)},children:Object(w.jsx)(J,{src:M.a,alt:"delete"})})]})},n._id)},n._id+"abc")}))}):Object(w.jsx)(O.a,{children:"No se han encontrado coincidencias, intenta de nuevo!!"}),Object(w.jsx)(F.a,{setPage:S,page:a,maxPage:r})]})}))}}]);
//# sourceMappingURL=2.4dddbbb7.chunk.js.map