(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))_(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function _(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var O,p,me,P,te,he,j,X,z,J,S={},pe=[],Ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function C(r,e){for(var t in e)r[t]=e[t];return r}function ve(r){var e=r.parentNode;e&&e.removeChild(r)}function Pe(r,e,t){var _,n,a,s={};for(a in e)a=="key"?_=e[a]:a=="ref"?n=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?O.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(a in r.defaultProps)s[a]===void 0&&(s[a]=r.defaultProps[a]);return L(r,s,_,n,null)}function L(r,e,t,_,n){var a={type:r,props:e,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++me,__i:-1,__u:0};return n==null&&p.vnode!=null&&p.vnode(a),a}function V(r){return r.children}function T(r,e){this.props=r,this.context=e}function F(r,e){if(e==null)return r.__?F(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?F(r):null}function ye(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return ye(r)}}function _e(r){(!r.__d&&(r.__d=!0)&&P.push(r)&&!D.__r++||te!==p.debounceRendering)&&((te=p.debounceRendering)||he)(D)}function D(){var r,e,t,_,n,a,s,i;for(P.sort(j);r=P.shift();)r.__d&&(e=P.length,_=void 0,a=(n=(t=r).__v).__e,s=[],i=[],t.__P&&((_=C({},n)).__v=n.__v+1,p.vnode&&p.vnode(_),Z(t.__P,_,n,t.__n,t.__P.namespaceURI,32&n.__u?[a]:null,s,a??F(n),!!(32&n.__u),i),_.__v=n.__v,_.__.__k[_.__i]=_,ge(s,_,i),_.__e!=a&&ye(_)),P.length>e&&P.sort(j));D.__r=0}function be(r,e,t,_,n,a,s,i,c,l,u){var o,m,f,b,k,N=_&&_.__k||pe,h=e.length;for(t.__d=c,Fe(t,e,N),c=t.__d,o=0;o<h;o++)(f=t.__k[o])!=null&&typeof f!="boolean"&&typeof f!="function"&&(m=f.__i===-1?S:N[f.__i]||S,f.__i=o,Z(r,f,m,n,a,s,i,c,l,u),b=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&ee(m.ref,null,f),u.push(f.ref,f.__c||b,f)),k==null&&b!=null&&(k=b),65536&f.__u||m.__k===f.__k?(c&&!c.isConnected&&(c=F(m)),c=Ne(f,c,r)):typeof f.type=="function"&&f.__d!==void 0?c=f.__d:b&&(c=b.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=c,t.__e=k}function Fe(r,e,t){var _,n,a,s,i,c=e.length,l=t.length,u=l,o=0;for(r.__k=[],_=0;_<c;_++)s=_+o,(n=r.__k[_]=(n=e[_])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?L(null,n,null,null,null):Y(n)?L(V,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?L(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=r,n.__b=r.__b+1,i=$e(n,t,s,u),n.__i=i,a=null,i!==-1&&(u--,(a=t[i])&&(a.__u|=131072)),a==null||a.__v===null?(i==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):i!==s&&(i===s+1?o++:i>s?u>c-s?o+=i-s:o--:i<s?i==s-1&&(o=i-s):o=0,i!==_+o&&(n.__u|=65536))):(a=t[s])&&a.key==null&&a.__e&&!(131072&a.__u)&&(a.__e==r.__d&&(r.__d=F(a)),G(a,a,!1),t[s]=null,u--);if(u)for(_=0;_<l;_++)(a=t[_])!=null&&!(131072&a.__u)&&(a.__e==r.__d&&(r.__d=F(a)),G(a,a))}function Ne(r,e,t){var _,n;if(typeof r.type=="function"){for(_=r.__k,n=0;_&&n<_.length;n++)_[n]&&(_[n].__=r,e=Ne(_[n],e,t));return e}r.__e!=e&&(t.insertBefore(r.__e,e||null),e=r.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function $e(r,e,t,_){var n=r.key,a=r.type,s=t-1,i=t+1,c=e[t];if(c===null||c&&n==c.key&&a===c.type&&!(131072&c.__u))return t;if(_>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||i<e.length;){if(s>=0){if((c=e[s])&&!(131072&c.__u)&&n==c.key&&a===c.type)return s;s--}if(i<e.length){if((c=e[i])&&!(131072&c.__u)&&n==c.key&&a===c.type)return i;i++}}return-1}function ne(r,e,t){e[0]==="-"?r.setProperty(e,t??""):r[e]=t==null?"":typeof t!="number"||Ce.test(e)?t:t+"px"}function A(r,e,t,_,n){var a;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof _=="string"&&(r.style.cssText=_=""),_)for(e in _)t&&e in t||ne(r.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||ne(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in r||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+a]=t,t?_?t.u=_.u:(t.u=X,r.addEventListener(e,a?J:z,a)):r.removeEventListener(e,a?J:z,a);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?r.removeAttribute(e):r.setAttribute(e,t))}}function oe(r){return function(e){if(this.l){var t=this.l[e.type+r];if(e.t==null)e.t=X++;else if(e.t<t.u)return;return t(p.event?p.event(e):e)}}}function Z(r,e,t,_,n,a,s,i,c,l){var u,o,m,f,b,k,N,h,g,x,E,$,re,H,W,w=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),a=[i=e.__e=t.__e]),(u=p.__b)&&u(e);e:if(typeof w=="function")try{if(h=e.props,g=(u=w.contextType)&&_[u.__c],x=u?g?g.props.value:u.__:_,t.__c?N=(o=e.__c=t.__c).__=o.__E:("prototype"in w&&w.prototype.render?e.__c=o=new w(h,x):(e.__c=o=new T(h,x),o.constructor=w,o.render=Ee),g&&g.sub(o),o.props=h,o.state||(o.state={}),o.context=x,o.__n=_,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),w.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,w.getDerivedStateFromProps(h,o.__s))),f=o.props,b=o.state,o.__v=e,m)w.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(w.getDerivedStateFromProps==null&&h!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(h,x),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(h,o.__s,x)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=h,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),E=0;E<o._sb.length;E++)o.__h.push(o._sb[E]);o._sb=[],o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(h,o.__s,x),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,b,k)})}if(o.context=x,o.props=h,o.__P=r,o.__e=!1,$=p.__r,re=0,"prototype"in w&&w.prototype.render){for(o.state=o.__s,o.__d=!1,$&&$(e),u=o.render(o.props,o.state,o.context),H=0;H<o._sb.length;H++)o.__h.push(o._sb[H]);o._sb=[]}else do o.__d=!1,$&&$(e),u=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++re<25);o.state=o.__s,o.getChildContext!=null&&(_=C(C({},_),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(k=o.getSnapshotBeforeUpdate(f,b)),be(r,Y(W=u!=null&&u.type===V&&u.key==null?u.props.children:u)?W:[W],e,t,_,n,a,s,i,c,l),o.base=e.__e,e.__u&=-161,o.__h.length&&s.push(o),N&&(o.__E=o.__=null)}catch(U){e.__v=null,c||a!=null?(e.__e=i,e.__u|=c?160:32,a[a.indexOf(i)]=null):(e.__e=t.__e,e.__k=t.__k),p.__e(U,e,t)}else a==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Se(t.__e,e,t,_,n,a,s,c,l);(u=p.diffed)&&u(e)}function ge(r,e,t){e.__d=void 0;for(var _=0;_<t.length;_++)ee(t[_],t[++_],t[++_]);p.__c&&p.__c(e,r),r.some(function(n){try{r=n.__h,n.__h=[],r.some(function(a){a.call(n)})}catch(a){p.__e(a,n.__v)}})}function Se(r,e,t,_,n,a,s,i,c){var l,u,o,m,f,b,k,N=t.props,h=e.props,g=e.type;if(g==="svg"?n="http://www.w3.org/2000/svg":g==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),a!=null){for(l=0;l<a.length;l++)if((f=a[l])&&"setAttribute"in f==!!g&&(g?f.localName===g:f.nodeType===3)){r=f,a[l]=null;break}}if(r==null){if(g===null)return document.createTextNode(h);r=document.createElementNS(n,g,h.is&&h),a=null,i=!1}if(g===null)N===h||i&&r.data===h||(r.data=h);else{if(a=a&&O.call(r.childNodes),N=t.props||S,!i&&a!=null)for(N={},l=0;l<r.attributes.length;l++)N[(f=r.attributes[l]).name]=f.value;for(l in N)if(f=N[l],l!="children"){if(l=="dangerouslySetInnerHTML")o=f;else if(l!=="key"&&!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;A(r,l,null,f,n)}}for(l in h)f=h[l],l=="children"?m=f:l=="dangerouslySetInnerHTML"?u=f:l=="value"?b=f:l=="checked"?k=f:l==="key"||i&&typeof f!="function"||N[l]===f||A(r,l,f,N[l],n);if(u)i||o&&(u.__html===o.__html||u.__html===r.innerHTML)||(r.innerHTML=u.__html),e.__k=[];else if(o&&(r.innerHTML=""),be(r,Y(m)?m:[m],e,t,_,g==="foreignObject"?"http://www.w3.org/1999/xhtml":n,a,s,a?a[0]:t.__k&&F(t,0),i,c),a!=null)for(l=a.length;l--;)a[l]!=null&&ve(a[l]);i||(l="value",b!==void 0&&(b!==r[l]||g==="progress"&&!b||g==="option"&&b!==N[l])&&A(r,l,b,N[l],n),l="checked",k!==void 0&&k!==r[l]&&A(r,l,k,N[l],n))}return r}function ee(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(_){p.__e(_,t)}}function G(r,e,t){var _,n;if(p.unmount&&p.unmount(r),(_=r.ref)&&(_.current&&_.current!==r.__e||ee(_,null,e)),(_=r.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(a){p.__e(a,e)}_.base=_.__P=null}if(_=r.__k)for(n=0;n<_.length;n++)_[n]&&G(_[n],e,t||typeof r.type!="function");t||r.__e==null||ve(r.__e),r.__c=r.__=r.__e=r.__d=void 0}function Ee(r,e,t){return this.constructor(r,t)}function He(r,e,t){var _,n,a,s;p.__&&p.__(r,e),n=(_=typeof t=="function")?null:e.__k,a=[],s=[],Z(e,r=(!_&&t||e).__k=Pe(V,null,[r]),n||S,S,e.namespaceURI,!_&&t?[t]:n?null:e.firstChild?O.call(e.childNodes):null,a,!_&&t?t:n?n.__e:e.firstChild,_,s),ge(a,r,s)}O=pe.slice,p={__e:function(r,e,t,_){for(var n,a,s;e=e.__;)if((n=e.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(r)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(r,_||{}),s=n.__d),s)return n.__E=n}catch(i){r=i}throw r}},me=0,T.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof r=="function"&&(r=r(C({},t),this.props)),r&&C(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),_e(this))},T.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),_e(this))},T.prototype.render=V,P=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(r,e){return r.__v.__b-e.__v.__b},D.__r=0,X=0,z=oe(!1),J=oe(!0);var I,v,R,ae,K=0,we=[],M=[],y=p,ie=y.__b,le=y.__r,se=y.diffed,ce=y.__c,ue=y.unmount,de=y.__;function ke(r,e){y.__h&&y.__h(v,r,K||e),K=0;var t=v.__H||(v.__H={__:[],__h:[]});return r>=t.__.length&&t.__.push({__V:M}),t.__[r]}function B(r){return K=1,Ue(xe,r)}function Ue(r,e,t){var _=ke(I++,2);if(_.t=r,!_.__c&&(_.__=[xe(void 0,e),function(i){var c=_.__N?_.__N[0]:_.__[0],l=_.t(c,i);c!==l&&(_.__N=[l,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var n=function(i,c,l){if(!_.__c.__H)return!0;var u=_.__c.__H.__.filter(function(m){return!!m.__c});if(u.every(function(m){return!m.__N}))return!a||a.call(this,i,c,l);var o=!1;return u.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(o=!0)}}),!(!o&&_.__c.props===i)&&(!a||a.call(this,i,c,l))};v.u=!0;var a=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(i,c,l){if(this.__e){var u=a;a=void 0,n(i,c,l),a=u}s&&s.call(this,i,c,l)},v.shouldComponentUpdate=n}return _.__N||_.__}function Ae(r,e){var t=ke(I++,3);!y.__s&&Me(t.__H,e)&&(t.__=r,t.i=e,v.__H.__h.push(t))}function Le(){for(var r;r=we.shift();)if(r.__P&&r.__H)try{r.__H.__h.forEach(q),r.__H.__h.forEach(Q),r.__H.__h=[]}catch(e){r.__H.__h=[],y.__e(e,r.__v)}}y.__b=function(r){v=null,ie&&ie(r)},y.__=function(r,e){r&&e.__k&&e.__k.__m&&(r.__m=e.__k.__m),de&&de(r,e)},y.__r=function(r){le&&le(r),I=0;var e=(v=r.__c).__H;e&&(R===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=M,t.__N=t.i=void 0})):(e.__h.forEach(q),e.__h.forEach(Q),e.__h=[],I=0)),R=v},y.diffed=function(r){se&&se(r);var e=r.__c;e&&e.__H&&(e.__H.__h.length&&(we.push(e)!==1&&ae===y.requestAnimationFrame||((ae=y.requestAnimationFrame)||Te)(Le)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==M&&(t.__=t.__V),t.i=void 0,t.__V=M})),R=v=null},y.__c=function(r,e){e.some(function(t){try{t.__h.forEach(q),t.__h=t.__h.filter(function(_){return!_.__||Q(_)})}catch(_){e.some(function(n){n.__h&&(n.__h=[])}),e=[],y.__e(_,t.__v)}}),ce&&ce(r,e)},y.unmount=function(r){ue&&ue(r);var e,t=r.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{q(_)}catch(n){e=n}}),t.__H=void 0,e&&y.__e(e,t.__v))};var fe=typeof requestAnimationFrame=="function";function Te(r){var e,t=function(){clearTimeout(_),fe&&cancelAnimationFrame(e),setTimeout(r)},_=setTimeout(t,100);fe&&(e=requestAnimationFrame(t))}function q(r){var e=v,t=r.__c;typeof t=="function"&&(r.__c=void 0,t()),v=e}function Q(r){var e=v;r.__c=r.__(),v=e}function Me(r,e){return!r||r.length!==e.length||e.some(function(t,_){return t!==r[_]})}function xe(r,e){return typeof e=="function"?e(r):e}var qe=0;function d(r,e,t,_,n,a){e||(e={});var s,i,c=e;if("ref"in c)for(i in c={},e)i=="ref"?s=e[i]:c[i]=e[i];var l={type:r,props:c,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--qe,__i:-1,__u:0,__source:n,__self:a};if(typeof r=="function"&&(s=r.defaultProps))for(i in s)c[i]===void 0&&(c[i]=s[i]);return p.vnode&&p.vnode(l),l}function De(){const r={firstName:"",lastName:"",username:"",email:"",password:"",phone:"",country:"",city:"",pan:"",aadhar:""},[e,t]=B(r),[_,n]=B({}),[a,s]=B(!1),i=u=>{const{name:o,value:m}=u.target;t({...e,[o]:m})},c=u=>{u.preventDefault(),n(l(e)),s(!0)};Ae(()=>{Object.keys(_).length===0&&a&&(console.log("Form submitted successfully",e),s(!1))},[_,a]);const l=u=>{const o={},m=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return u.username||(o.username="Username is required!"),u.firstName||(o.firstName="First Name is required!"),u.lastName||(o.lastName="Last Name is required!"),u.email?m.test(u.email)||(o.email="Email format is invalid!"):o.email="Email is required!",u.password?u.password.length<6&&(o.password="Password must be at least 6 characters long!"):o.password="Password is required!",u.phone||(o.phone="Phone Number is required!"),u.pan||(o.pan="PAN number is required!"),u.aadhar||(o.aadhar="Aadhar Number is required!"),u.country||(o.country="Please select a country!"),u.city||(o.city="Please select a city!"),o};return d("div",{className:"container mt-5",children:[d("h2",{children:"Registration Form"}),d("form",{onSubmit:c,noValidate:!0,children:[d("div",{className:"mb-3",children:[d("label",{htmlFor:"firstName",className:"form-label",children:"First Name"}),d("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",placeholder:"First Name",value:e.firstName,onChange:i,"aria-invalid":!!_.firstName,"aria-describedby":_.firstName?"firstName-error":void 0}),_.firstName&&d("small",{id:"firstName-error",className:"text-danger",children:_.firstName})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"lastName",className:"form-label",children:"Last Name"}),d("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",placeholder:"Last Name",value:e.lastName,onChange:i,"aria-invalid":!!_.lastName,"aria-describedby":_.lastName?"lastName-error":void 0}),_.lastName&&d("small",{id:"lastName-error",className:"text-danger",children:_.lastName})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"username",className:"form-label",children:"Username"}),d("input",{type:"text",className:"form-control",id:"username",name:"username",placeholder:"Username",value:e.username,onChange:i,"aria-invalid":!!_.username,"aria-describedby":_.username?"username-error":void 0}),_.username&&d("small",{id:"username-error",className:"text-danger",children:_.username})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"email",className:"form-label",children:"E-mail"}),d("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Email",value:e.email,onChange:i,"aria-invalid":!!_.email,"aria-describedby":_.email?"email-error":void 0}),_.email&&d("small",{id:"email-error",className:"text-danger",children:_.email})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"password",className:"form-label",children:"Password"}),d("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",value:e.password,onChange:i,"aria-invalid":!!_.password,"aria-describedby":_.password?"password-error":void 0}),_.password&&d("small",{id:"password-error",className:"text-danger",children:_.password})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"phone",className:"form-label",children:"Phone Number"}),d("input",{type:"text",className:"form-control",id:"phone",name:"phone",placeholder:"Phone Number",value:e.phone,onChange:i,"aria-invalid":!!_.phone,"aria-describedby":_.phone?"phone-error":void 0}),_.phone&&d("small",{id:"phone-error",className:"text-danger",children:_.phone})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"country",className:"form-label",children:"Country"}),d("select",{className:"form-select",id:"country",name:"country",value:e.country,onChange:i,"aria-invalid":!!_.country,"aria-describedby":_.country?"country-error":void 0,children:[d("option",{value:"",children:"Select Country"}),d("option",{value:"India",children:"India"}),d("option",{value:"USA",children:"USA"})]}),_.country&&d("small",{id:"country-error",className:"text-danger",children:_.country})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"city",className:"form-label",children:"City"}),d("select",{className:"form-select",id:"city",name:"city",value:e.city,onChange:i,"aria-invalid":!!_.city,"aria-describedby":_.city?"city-error":void 0,children:[d("option",{value:"",children:"Select City"}),d("option",{value:"Jaipur",children:"Jaipur"}),d("option",{value:"ChittorGarh",children:"Chittorgarh"}),d("option",{value:"Udaipur",children:"Udaipur"})]}),_.city&&d("small",{id:"city-error",className:"text-danger",children:_.city})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"pan",className:"form-label",children:"PAN Number"}),d("input",{type:"text",className:"form-control",id:"pan",name:"pan",placeholder:"PAN Number",value:e.pan,onChange:i,"aria-invalid":!!_.pan,"aria-describedby":_.pan?"pan-error":void 0}),_.pan&&d("small",{id:"pan-error",className:"text-danger",children:_.pan})]}),d("div",{className:"mb-3",children:[d("label",{htmlFor:"aadhar",className:"form-label",children:"Aadhar Number"}),d("input",{type:"text",className:"form-control",id:"aadhar",name:"aadhar",placeholder:"Aadhar Number",value:e.aadhar,onChange:i,"aria-invalid":!!_.aadhar,"aria-describedby":_.aadhar?"aadhar-error":void 0}),_.aadhar&&d("small",{id:"aadhar-error",className:"text-danger",children:_.aadhar})]}),d("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit"})]})]})}He(d(De,{}),document.getElementById("app"));
//# sourceMappingURL=index-B1v1gOCP.js.map