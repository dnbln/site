import{S as j,i as z,s as F,l as y,u as V,a as L,e as $,m as D,p as N,v as H,h as f,c as S,q as I,b as E,J as _,n as J,K as G,L as M}from"../chunks/index-78cca222.js";function C(d,e,s){const r=d.slice();return r[3]=e[s].name,r[4]=e[s].desc,r[5]=e[s].href,r}function K(d){let e,s,r,m;return{c(){e=y("span"),s=V("here")},l(t){e=D(t,"SPAN",{});var u=N(e);s=H(u,"here"),u.forEach(f)},m(t,u){E(t,e,u),_(e,s),r||(m=G(e,"click",d[2]),r=!0)},p:J,d(t){t&&f(e),r=!1,m()}}}function R(d){let e;return{c(){e=V("here")},l(s){e=H(s,"here")},m(s,r){E(s,e,r)},d(s){s&&f(e)}}}function T(d){let e,s,r,m,t,u,P,k,b,v,a,o,n,c=d[1],i=[];for(let l=0;l<c.length;l+=1)i[l]=W(C(d,c,l));return{c(){e=y("div"),s=y("p"),r=V("Or maybe..."),m=L(),t=y("div"),u=y("p"),P=V("Just maybe..."),k=L(),b=y("div"),v=y("p"),a=V("Here are some links:"),o=L();for(let l=0;l<i.length;l+=1)i[l].c();n=$(),this.h()},l(l){e=D(l,"DIV",{class:!0});var h=N(e);s=D(h,"P",{class:!0});var p=N(s);r=H(p,"Or maybe..."),p.forEach(f),h.forEach(f),m=S(l),t=D(l,"DIV",{class:!0});var B=N(t);u=D(B,"P",{class:!0});var A=N(u);P=H(A,"Just maybe..."),A.forEach(f),B.forEach(f),k=S(l),b=D(l,"DIV",{class:!0});var O=N(b);v=D(O,"P",{class:!0});var w=N(v);a=H(w,"Here are some links:"),w.forEach(f),O.forEach(f),o=S(l);for(let q=0;q<i.length;q+=1)i[q].l(l);n=$(),this.h()},h(){I(s,"class","desc svelte-1ulc2fi"),I(e,"class","container svelte-1ulc2fi"),I(u,"class","desc svelte-1ulc2fi"),I(t,"class","container svelte-1ulc2fi"),I(v,"class","desc svelte-1ulc2fi"),I(b,"class","container svelte-1ulc2fi")},m(l,h){E(l,e,h),_(e,s),_(s,r),E(l,m,h),E(l,t,h),_(t,u),_(u,P),E(l,k,h),E(l,b,h),_(b,v),_(v,a),E(l,o,h);for(let p=0;p<i.length;p+=1)i[p].m(l,h);E(l,n,h)},p(l,h){if(h&2){c=l[1];let p;for(p=0;p<c.length;p+=1){const B=C(l,c,p);i[p]?i[p].p(B,h):(i[p]=W(B),i[p].c(),i[p].m(n.parentNode,n))}for(;p<i.length;p+=1)i[p].d(1);i.length=c.length}},d(l){l&&f(e),l&&f(m),l&&f(t),l&&f(k),l&&f(b),l&&f(o),M(i,l),l&&f(n)}}}function W(d){let e,s,r=d[3]+"",m,t,u,P=d[4]+"",k,b;return{c(){e=y("div"),s=y("a"),m=V(r),t=L(),u=y("p"),k=V(P),b=L(),this.h()},l(v){e=D(v,"DIV",{class:!0});var a=N(e);s=D(a,"A",{class:!0,href:!0});var o=N(s);m=H(o,r),o.forEach(f),t=S(a),u=D(a,"P",{class:!0});var n=N(u);k=H(n,P),n.forEach(f),b=S(a),a.forEach(f),this.h()},h(){I(s,"class","net-link svelte-1ulc2fi"),I(s,"href",d[5]),I(u,"class","net-link-desc svelte-1ulc2fi"),I(e,"class","container svelte-1ulc2fi")},m(v,a){E(v,e,a),_(e,s),_(s,m),_(e,t),_(e,u),_(u,k),_(e,b)},p:J,d(v){v&&f(e)}}}function Q(d){let e,s,r,m,t,u,P,k,b,v,a=d[0]&&K(d),o=!d[0]&&R(),n=!d[0]&&T(d);return{c(){e=y("div"),s=y("h1"),r=V("Dinu Blanovschi"),m=L(),t=y("p"),u=V(`Nothing to see

        `),a&&a.c(),P=$(),o&&o.c(),k=V(", really."),b=L(),n&&n.c(),v=$(),this.h()},l(c){e=D(c,"DIV",{class:!0});var i=N(e);s=D(i,"H1",{class:!0});var l=N(s);r=H(l,"Dinu Blanovschi"),l.forEach(f),m=S(i),t=D(i,"P",{class:!0});var h=N(t);u=H(h,`Nothing to see

        `),a&&a.l(h),P=$(),o&&o.l(h),k=H(h,", really."),h.forEach(f),i.forEach(f),b=S(c),n&&n.l(c),v=$(),this.h()},h(){I(s,"class","name svelte-1ulc2fi"),I(t,"class","desc svelte-1ulc2fi"),I(e,"class","container svelte-1ulc2fi")},m(c,i){E(c,e,i),_(e,s),_(s,r),_(e,m),_(e,t),_(t,u),a&&a.m(t,null),_(t,P),o&&o.m(t,null),_(t,k),E(c,b,i),n&&n.m(c,i),E(c,v,i)},p(c,[i]){c[0]?a?a.p(c,i):(a=K(c),a.c(),a.m(t,P)):a&&(a.d(1),a=null),c[0]?o&&(o.d(1),o=null):o||(o=R(),o.c(),o.m(t,k)),c[0]?n&&(n.d(1),n=null):n?n.p(c,i):(n=T(c),n.c(),n.m(v.parentNode,v))},i:J,o:J,d(c){c&&f(e),a&&a.d(),o&&o.d(),c&&f(b),n&&n.d(c),c&&f(v)}}}function U(d,e,s){let r=!0;return[r,[{name:"Home",desc:"This very site",href:"https://dnbln.dev"},{name:"Blog",desc:"Where I write some thoughts of mine.",href:"https://blog.dnbln.dev"},{name:"Lectrarium",desc:"Some lecture notes.",href:"https://lectrarium.dnbln.dev"}],()=>{s(0,r=!1)}]}class Y extends j{constructor(e){super(),z(this,e,U,Q,F,{})}}export{Y as default};
