(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[3],{88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(16),o=t(11),c=t(0),s=t.n(c),r=t(13),i=t.n(r),l=(t(88),t(85)),b=t(86),u=t(87),d=t(2),p=t(5),m=t(1),g=t.n(m),f=t(6),v=t.n(f),h=t(3),j={tag:h.c,inverse:g.a.bool,color:g.a.string,body:g.a.bool,outline:g.a.bool,className:g.a.string,cssModule:g.a.object,innerRef:g.a.oneOfType([g.a.object,g.a.string,g.a.func])},O=function(e){var a=e.className,t=e.cssModule,n=e.color,o=e.body,c=e.inverse,r=e.outline,i=e.tag,l=e.innerRef,b=Object(p.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),u=Object(h.b)(v()(a,"card",!!c&&"text-white",!!o&&"card-body",!!n&&(r?"border":"bg")+"-"+n),t);return s.a.createElement(i,Object(d.a)({},b,{className:u,ref:l}))};O.propTypes=j,O.defaultProps={tag:"div"};var E=O,C={tag:h.c,top:g.a.bool,bottom:g.a.bool,className:g.a.string,cssModule:g.a.object},N=function(e){var a=e.className,t=e.cssModule,n=e.top,o=e.bottom,c=e.tag,r=Object(p.a)(e,["className","cssModule","top","bottom","tag"]),i="card-img";n&&(i="card-img-top"),o&&(i="card-img-bottom");var l=Object(h.b)(v()(a,i),t);return s.a.createElement(c,Object(d.a)({},r,{className:l}))};N.propTypes=C,N.defaultProps={tag:"img"};var k=N,y={tag:h.c,className:g.a.string,cssModule:g.a.object,innerRef:g.a.oneOfType([g.a.object,g.a.string,g.a.func])},P=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,o=e.tag,c=Object(p.a)(e,["className","cssModule","innerRef","tag"]),r=Object(h.b)(v()(a,"card-body"),t);return s.a.createElement(o,Object(d.a)({},c,{className:r,ref:n}))};P.propTypes=y,P.defaultProps={tag:"div"};var M=P;var w=t(8),R={active:g.a.bool,"aria-label":g.a.string,block:g.a.bool,color:g.a.string,disabled:g.a.bool,outline:g.a.bool,tag:h.c,innerRef:g.a.oneOfType([g.a.object,g.a.func,g.a.string]),onClick:g.a.func,size:g.a.string,children:g.a.node,className:g.a.string,cssModule:g.a.object,close:g.a.bool},T=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(w.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,o=e.className,c=e.close,r=e.cssModule,i=e.color,l=e.outline,b=e.size,u=e.tag,m=e.innerRef,g=Object(p.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(l?"-outline":"")+"-"+i,j=Object(h.b)(v()(o,{close:c},c||"btn",c||f,!!b&&"btn-"+b,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),r);g.href&&"button"===u&&(u="a");var O=c?"Close":null;return s.a.createElement(u,Object(d.a)({type:"button"===u&&g.onClick?"button":void 0},g,{className:j,ref:m,onClick:this.onClick,"aria-label":t||O}))},a}(s.a.Component);T.propTypes=R,T.defaultProps={color:"secondary",tag:"button"};var x=T,S=t(30),z=t(12);function _(e){var a=Object(c.useContext)(z.a),t=a.movieInfor,n=a.setMovieInfor,o=e.movies;return s.a.createElement(l.a,{className:"movie"},s.a.createElement(b.a,{md:"4",sm:"3",xs:"2"},o.map((function(e){return s.a.createElement(u.a,{className:"col-movie"},s.a.createElement(E,{key:e.id},null==e.poster_path?s.a.createElement(k,{top:!0,width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"Card image cap"}):s.a.createElement(k,{top:!0,width:"100%",src:"http://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Card image cap"}),s.a.createElement(M,null,s.a.createElement(S.b,{to:"/movie-infor"},s.a.createElement(x,{onClick:function(){return n(t.concat(e))},color:"success"},"View Details")))))}))))}_.defaultProps={movies:[]};var D=_;t(89);function I(e){var a=e.pagination,t=e.onPageChange,n=a.page,o=a.totalPages;function c(e){t&&t(e)}return s.a.createElement("div",{className:"pagination"},s.a.createElement("button",{className:"btn-prev",disabled:1===n,onClick:function(){return c(n-1)}},"< Prev"),s.a.createElement("button",{className:"btn-next",disabled:n>=o,onClick:function(){return c(n+1)}},"Next >"))}I.defaultProps={onPageChange:null};var J=I;a.default=function(e){var a=Object(c.useContext)(z.a),t=a.searchMovie,r=a.paginationSearch,l=a.handeChangePageSearch,b=Object(c.useState)([]),u=Object(o.a)(b,2),d=u[0],p=u[1],m=Object(c.useState)({page:1,totalPages:1,id:1}),g=Object(o.a)(m,2),f=g[0],v=g[1],h=Object(c.useState)({page:1,totalPages:1}),j=Object(o.a)(h,2),O=j[0],E=j[1],C="https://api.themoviedb.org/4/list/1?api_key=".concat("5dd50dcd383eb11b1fa40f4e563891b1","&page=").concat(O.page);return Object(c.useEffect)((function(){i.a.get(C).then((function(e){var a=e.data;p(a.results),v({page:a.page,totalPages:a.total_pages})}))}),[O]),s.a.createElement("div",{className:"home"},t.length?s.a.createElement(D,{movies:t}):s.a.createElement(D,{movies:d}),t.length?s.a.createElement(J,{onPageChange:l,pagination:r}):s.a.createElement(J,{onPageChange:function(e){E(Object(n.a)(Object(n.a)({},O),{},{page:e}))},pagination:f}))}}}]);
//# sourceMappingURL=3.d5f86917.chunk.js.map