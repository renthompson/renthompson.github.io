import{a as t,b as n,c as s,d as r,i as a,s as o,e,S as f,f as c,t as i,h as u,j as l,k as h,l as v,o as p,q as g,r as m,D as d,g as b,F as j,m as E,n as x,M as q}from"./index.40a0ab30.js";import{_ as y}from"./slicedToArray.f13a096f.js";function A(t,n,s){var r=t.slice();return r[1]=n[s],r}function L(t){var n,s,r,a,o=t[1].title+"";return{c:function(){n=c("li"),s=c("a"),r=i(o),this.h()},l:function(t){n=u(t,"LI",{});var a=l(n);s=u(a,"A",{rel:!0,href:!0});var e=l(s);r=h(e,o),e.forEach(v),a.forEach(v),this.h()},h:function(){p(s,"rel","prefetch"),p(s,"href",a="blog/"+t[1].slug)},m:function(t,a){g(t,n,a),m(n,s),m(s,r)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&d(r,o),1&n&&a!==(a="blog/"+t[1].slug)&&p(s,"href",a)},d:function(t){t&&v(n)}}}function R(t){for(var n,s,r,a,o,e=t[0],f=[],d=0;d<e.length;d+=1)f[d]=L(A(t,e,d));return{c:function(){n=b(),s=c("h1"),r=i("Recent posts"),a=b(),o=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){j('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=E(t),s=u(t,"H1",{});var e=l(s);r=h(e,"Recent posts"),e.forEach(v),a=E(t),o=u(t,"UL",{class:!0});for(var c=l(o),i=0;i<f.length;i+=1)f[i].l(c);c.forEach(v),this.h()},h:function(){document.title="Blog",p(o,"class","svelte-1frg2tf")},m:function(t,e){g(t,n,e),g(t,s,e),m(s,r),g(t,a,e),g(t,o,e);for(var c=0;c<f.length;c+=1)f[c].m(o,null)},p:function(t,n){var s=y(n,1)[0];if(1&s){var r;for(e=t[0],r=0;r<e.length;r+=1){var a=A(t,e,r);f[r]?f[r].p(a,s):(f[r]=L(a),f[r].c(),f[r].m(o,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=e.length}},i:x,o:x,d:function(t){t&&v(n),t&&v(s),t&&v(a),t&&v(o),q(f,t)}}}function k(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function B(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}var D=function(c){function i(t){var f;return n(this,i),f=s(this,r(i).call(this)),a(e(f),t,B,R,o,{posts:0}),f}return t(i,f),i}();export default D;export{k as preload};
