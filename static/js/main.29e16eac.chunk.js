(this["webpackJsonpmovie-proj"]=this["webpackJsonpmovie-proj"]||[]).push([[0],{113:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(87),a(20)),i=a(21),s=a(25),m=a(24),u=(a(88),a(42)),d=a(9),p=a(125),h=a(28),f=function(e){return{type:"ADD_TO_CART",id:e}},E=a(123),v=a(124),y=a(76),g=(a(93),function(e){var t=e.item;return r.a.createElement(E.a,{className:"card-cart"},r.a.createElement(y.a,{className:"remove-btn",onClick:function(){return e.removeProduct(t.imdbID)}},"x"),r.a.createElement(v.a,{lg:4,className:"card-image"},r.a.createElement("img",{src:t.Poster,alt:t.Poster})),r.a.createElement(v.a,{lg:8,className:"card-info"},r.a.createElement("div",{className:"card-title"},t.Title),r.a.createElement("ul",{className:"card-meta"},r.a.createElement("li",null,"Type : ",t.Type)," ",r.a.createElement("li",null,"QTY : ",t.quantity)),r.a.createElement(E.a,{className:"qi-wrapper"},r.a.createElement(v.a,{lg:7},r.a.createElement("div",{className:"quantity"},"Quantity",r.a.createElement(y.a,{onClick:function(){return e.decreaseQuantity(t.imdbID)}},"-"),t.quantity,r.a.createElement(y.a,{onClick:function(){return e.addToCart(t.imdbID)}},"+"))),r.a.createElement(v.a,{lg:5,className:"price"},"INR: ",r.a.createElement("span",null,t.price*t.quantity)))))}),T=(a(94),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"handleAddToCart",value:function(e){console.log("handling",e),this.props.addToCart(e)}},{key:"render",value:function(){var e=this;return console.log(this.props.items),r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,{lg:6},this.props.items.map((function(t){return r.a.createElement(g,{key:t.imdbID,item:t,addToCart:function(t){return e.handleAddToCart(t)},decreaseQuantity:function(t){return e.props.decreaseQuantity(t)},removeProduct:function(t){return e.props.removeProduct(t)}})}))),r.a.createElement(v.a,{lg:6,className:"order-summary"},r.a.createElement("div",{className:"title"},r.a.createElement("div",null,"Order"),r.a.createElement("div",null,"Summary")),r.a.createElement("div",{className:"total"},"Total: \xa0",this.props.total," INR"))))}}]),a}(n.Component)),b=Object(h.b)((function(e){return{items:e.addedItems,cartLength:e.addedItems.length,total:e.total}}),(function(e){return{removeProduct:function(t){e(function(e){return{type:"REMOVE_PRODUCT",id:e}}(t))},decreaseQuantity:function(t){e(function(e){return{type:"DECREASE_QUANTITY",id:e}}(t))},addToCart:function(t){e(f(t))}}}))(T),j=a(131),M=a(129),O=a(43),N=a.n(O),k=a(60),I=a(126),w=a(77),D=a.n(w),C=(a(113),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"handleClose",value:function(){this.props.hide()}},{key:"handleAxiosCall",value:function(){var e=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("http://omdbapi.com/?apikey=f5efb081&i="+this.props.id);case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{err:!0});case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=this;""!==this.props.id&&void 0!==this.props.id&&Object(k.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleAxiosCall();case 2:(a=t.sent).err||e.setState({movieInfo:a});case 4:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.state.movieInfo;return void 0===t?r.a.createElement("div",null,"Loading"):r.a.createElement(I.a,{show:this.props.show,onHide:function(){return e.handleClose()},size:"lg",centered:!0},r.a.createElement(y.a,{className:"remove-btn",onClick:function(){return e.handleClose()}},"x"),r.a.createElement(I.a.Body,{className:"movie-card"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:t.Poster,alt:"cover",className:"cover"}),r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"title1"},t.Title," ",r.a.createElement("span",null,t.Rated)),r.a.createElement("div",{className:"title2"},t.Actors))),r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"column1"},r.a.createElement("span",{className:"tag"},t.Year),r.a.createElement("span",{className:"tag"},t.imdbRating),r.a.createElement("span",{className:"tag"},t.Metascore),r.a.createElement("span",{className:"tag"},t.Released),r.a.createElement("span",{className:"tag"},t.Runtime),r.a.createElement("span",{className:"tag"},t.Genre)),r.a.createElement("div",{className:"column2"},r.a.createElement("p",null,t.Plot))))),r.a.createElement(I.a.Footer,null,r.a.createElement(y.a,{variant:"primary",onClick:function(){return e.props.handleAdd(t.imdbID)}},"Add To Cart")))}}]),a}(n.Component)),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"setAlert",value:function(e){this.setState({showAlert:e})}},{key:"handleAdd",value:function(e){this.props.addToCart(e),this.setAlert(!0)}},{key:"showProductModal",value:function(e,t){this.setState({id:e,showModal:t})}},{key:"showProduct",value:function(e){this.showProductModal(e,!0)}},{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return r.a.createElement(v.a,{md:4,xs:12,sm:6,lg:3,key:t.imdbID,id:t.imdbID},r.a.createElement(j.a,{style:{margin:10}},r.a.createElement(j.a.Img,{style:{height:250},variant:"top",src:t.Poster}),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,t.Title),r.a.createElement(j.a.Text,{style:{textTransform:"capitalize"}},t.Type,r.a.createElement("br",null),t.Year),r.a.createElement(y.a,{variant:"primary",onClick:function(){return e.handleAdd(t.imdbID)}},"Add To Cart"),r.a.createElement(y.a,{style:{marginLeft:10},variant:"info",onClick:function(){return e.showProduct(t.imdbID)}},"View"))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{style:{position:"absolute",top:70,right:20,background:"lightgreen"},variant:"info",onClose:function(){return e.setAlert(!1)},show:!0===this.state.showAlert,delay:2e3,autohide:!0},r.a.createElement(M.a.Header,null,"Added to Cart!")),r.a.createElement(E.a,null,t),this.state.showModal?r.a.createElement(C,{show:this.state.showModal,id:this.state.id,handleAdd:function(t){return e.handleAdd(t)},hide:function(){return e.showProductModal("",!1)}}):"")}}]),a}(n.Component),S=Object(h.b)((function(e){return"all"===e.categorySelected?{items:e.items}:{items:e.items.filter((function(t){return t.Type===e.categorySelected}))}}),(function(e){return{addToCart:function(t){e(f(t))}}}))(_),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(S,null)))}}]),a}(r.a.Component),z=a(127),Y=a(128),B=a(130);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("circle",{cx:9,cy:21,r:1}),Q=r.a.createElement("circle",{cx:20,cy:21,r:1}),x=r.a.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}),R=function(e){var t=e.svgRef,a=e.title,n=X(e,["svgRef","title"]);return r.a.createElement("svg",V({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-shopping-cart",ref:t},n),a?r.a.createElement("title",null,a):null,P,Q,x)},F=r.a.forwardRef((function(e,t){return r.a.createElement(R,V({svgRef:t},e))})),L=(a.p,Object(h.b)((function(e){return{items:e.items,cartLength:e.addedItems.length}}),(function(e){return{filterCats:function(t){e(function(e){return{type:"FILTER_CATEGORY",cat:e}}(t))}}}))((function(e){var t=function(t){e.filterCats(t)},a=[],n=new Map;return e.items.map((function(e){return n.has(e.Type)||(n.set(e.Type),a.push(r.a.createElement(z.a.Item,{key:e.Type,style:{textTransform:"capitalize"},onClick:function(){return t(e.Type)}},e.Type))),a})),r.a.createElement(Y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(u.b,{to:"/"},r.a.createElement(Y.a.Brand,null,"Movies")),r.a.createElement(Y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(B.a,{className:"mr-auto"}),r.a.createElement(B.a,null,r.a.createElement(z.a,{title:"Categories",id:"collasible-nav-dropdown"},r.a.createElement(z.a.Item,{onClick:function(){return t("all")}},"All"),a),r.a.createElement(u.b,{to:"/cart"},r.a.createElement(Y.a.Brand,{style:{position:"relative"}},r.a.createElement(F,null),r.a.createElement("span",{className:"cart-logo"},e.cartLength))))))}))),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(L,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{path:"/cart",component:b}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(80),G=a(11),U=[{Title:"Sherlock",Year:"2010",imdbID:"tt1475582",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg"},{Title:"Sherlock Holmes",Year:"2009",imdbID:"tt0988045",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg"},{Title:"Sherlock Holmes: A Game of Shadows",Year:"2011",imdbID:"tt1515091",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"},{Title:"Sherlock Jr.",Year:"1924",imdbID:"tt0015324",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"},{Title:"The Adventures of Sherlock Holmes",Year:"1984\u20131985",imdbID:"tt0086661",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMTI2MzM1Njk4OV5BMl5BanBnXkFtZTcwMzA0ODQyMQ@@._V1_SX300.jpg"},{Title:"Young Sherlock Holmes",Year:"1985",imdbID:"tt0090357",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNmE0NTQ5ZjItN2MzNC00NjBhLTg0ZjYtYzFiMzFlMjhjNmNiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{Title:"The Private Life of Sherlock Holmes",Year:"1970",imdbID:"tt0066249",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNTg2ODQyOGQtNWVhMi00MDI2LTg3OTktZjA4MTJmYzQwYTFjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{Title:"Sherlock Gnomes",Year:"2018",imdbID:"tt2296777",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTc2NjUzODMxMF5BMl5BanBnXkFtZTgwMzMwMDIzNDM@._V1_SX300.jpg"},{Title:"The Return of Sherlock Holmes",Year:"1986\u20131988",imdbID:"tt0090509",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMjM1OTc0MjMtZjFmOS00ZmQ0LTk1ZWItM2U1YTc5ODZjZjI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{Title:"The Adventure of Sherlock Holmes' Smarter Brother",Year:"1975",imdbID:"tt0072608",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTgzMDkyMDE3NF5BMl5BanBnXkFtZTcwMzAyNzIzMQ@@._V1_SX300.jpg"}],W={items:U=U.map((function(e){return Object(G.a)(Object(G.a)({},e),{},{price:150})})),addedItems:[],total:0,categorySelected:"all"},H=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"ADD_TO_CART":return e=n.items.find((function(e){return e.imdbID===r.id})),(t=n.addedItems.find((function(e){return e.imdbID===r.id})))?(e.quantity+=1,Object(G.a)(Object(G.a)({},n),{},{total:n.total+e.price})):(e.quantity=1,Object(G.a)(Object(G.a)({},n),{},{addedItems:[].concat(Object(q.a)(n.addedItems),[e]),total:n.total+e.price}));case"FILTER_CATEGORY":return Object(G.a)(Object(G.a)({},n),{},{categorySelected:r.cat});case"REMOVE_PRODUCT":return t=n.addedItems.find((function(e){return e.imdbID===r.id})),a=n.addedItems.filter((function(e){return e.imdbID!==r.id})),Object(G.a)(Object(G.a)({},n),{},{addedItems:a,total:n.total-t.quantity*t.price});case"DECREASE_QUANTITY":return t=n.addedItems.find((function(e){return e.imdbID===r.id})),console.log(t),1===t.quantity?(a=n.addedItems.filter((function(e){return e.imdbID!==r.id})),Object(G.a)(Object(G.a)({},n),{},{addedItems:a,total:n.total-t.price})):(t.quantity-=1,Object(G.a)(Object(G.a)({},n),{},{total:n.total-t.price}));default:return n}},J=a(45),$=Object(J.b)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(h.a,{store:$},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a(118)},87:function(e,t,a){},88:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.29e16eac.chunk.js.map