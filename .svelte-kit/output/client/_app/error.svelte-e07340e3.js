import{S as $,i as y,a as z,b as m,f as N,s as B,e as h,t as k,c as E,d,k as v,g as _,I as R,l as P,m as S,n as A,o as j,p as q}from"./chunks/vendor-070d5b17.js";function H(f){let e,a=f[1].frame+"",l;return{c(){e=h("pre"),l=k(a)},l(s){e=E(s,"PRE",{});var r=d(e);l=v(r,a),r.forEach(_)},m(s,r){m(s,e,r),R(e,l)},p(s,r){r&2&&a!==(a=s[1].frame+"")&&P(l,a)},d(s){s&&_(e)}}}function I(f){let e,a=f[1].stack+"",l;return{c(){e=h("pre"),l=k(a)},l(s){e=E(s,"PRE",{});var r=d(e);l=v(r,a),r.forEach(_)},m(s,r){m(s,e,r),R(e,l)},p(s,r){r&2&&a!==(a=s[1].stack+"")&&P(l,a)},d(s){s&&_(e)}}}function C(f){let e,a,l,s,r=f[1].message+"",p,b,n,c,i=f[1].frame&&H(f),u=f[1].stack&&I(f);return{c(){e=h("h1"),a=k(f[0]),l=S(),s=h("pre"),p=k(r),b=S(),i&&i.c(),n=S(),u&&u.c(),c=A(),this.c=j},l(t){e=E(t,"H1",{});var o=d(e);a=v(o,f[0]),o.forEach(_),l=q(t),s=E(t,"PRE",{});var w=d(s);p=v(w,r),w.forEach(_),b=q(t),i&&i.l(t),n=q(t),u&&u.l(t),c=A()},m(t,o){m(t,e,o),R(e,a),m(t,l,o),m(t,s,o),R(s,p),m(t,b,o),i&&i.m(t,o),m(t,n,o),u&&u.m(t,o),m(t,c,o)},p(t,[o]){o&1&&P(a,t[0]),o&2&&r!==(r=t[1].message+"")&&P(p,r),t[1].frame?i?i.p(t,o):(i=H(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),t[1].stack?u?u.p(t,o):(u=I(t),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},i:j,o:j,d(t){t&&_(e),t&&_(l),t&&_(s),t&&_(b),i&&i.d(t),t&&_(n),u&&u.d(t),t&&_(c)}}}function G({error:f,status:e}){return{props:{error:f,status:e}}}function D(f,e,a){let{status:l}=e,{error:s}=e;return f.$$set=r=>{"status"in r&&a(0,l=r.status),"error"in r&&a(1,s=r.error)},[l,s]}class J extends ${constructor(e){super();y(this,{target:this.shadowRoot,props:z(this.attributes),customElement:!0},D,C,B,{status:0,error:1},null),e&&(e.target&&m(e.target,this,e.anchor),e.props&&(this.$set(e.props),N()))}static get observedAttributes(){return["status","error"]}get status(){return this.$$.ctx[0]}set status(e){this.$$set({status:e}),N()}get error(){return this.$$.ctx[1]}set error(e){this.$$set({error:e}),N()}}export{J as default,G as load};
