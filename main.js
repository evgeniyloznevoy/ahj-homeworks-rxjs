!function(){"use strict";var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function r(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function i(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}function s(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(t){o[t]&&(n[t]=function(e){return new Promise((function(r,n){i.push([t,e,r,n])>1||c(t,e)}))})}function c(t,e){try{(r=o[t](e)).value instanceof u?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function a(t){c("next",t)}function l(t){c("throw",t)}function f(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}}function c(t){return"function"==typeof t}Object.create,Object.create;var a,l=((a=function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),a.prototype.constructor=a,a);function f(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var h=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,r,u,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var f=n(a),h=f.next();!h.done;h=f.next())h.value.remove(this)}catch(e){t={error:e}}finally{try{h&&!h.done&&(e=f.return)&&e.call(f)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if(c(p))try{p()}catch(t){s=t instanceof l?t.errors:[t]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=n(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{d(m)}catch(t){s=null!=s?s:[],t instanceof l?s=i(i([],o(s)),o(t.errors)):s.push(t)}}}catch(t){r={error:t}}finally{try{b&&!b.done&&(u=y.return)&&u.call(y)}finally{if(r)throw r.error}}}if(s)throw new l(s)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)d(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&f(e,t)},t.prototype.remove=function(e){var r=this._finalizers;r&&f(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function p(t){return t instanceof h||t&&"closed"in t&&c(t.remove)&&c(t.add)&&c(t.unsubscribe)}function d(t){c(t)?t():t.unsubscribe()}h.EMPTY;var v=function(t){function r(e,r){return t.call(this)||this}return e(r,t),r.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},r}(h),y={setInterval:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var u=y.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,i([t,e],o(r))):setInterval.apply(void 0,i([t,e],o(r)))},clearInterval:function(t){var e=y.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},b=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return e(r,t),r.prototype.schedule=function(t,e){var r;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,e),this},r.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),y.setInterval(t.flush.bind(t,this),r)},r.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&y.clearInterval(e)},r.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,e){var r,n=!1;try{this.work(t)}catch(t){n=!0,r=t||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(n,this),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(v),m={now:function(){return(m.delegate||Date).now()},delegate:void 0},w=function(){function t(e,r){void 0===r&&(r=t.now),this.schedulerActionCtor=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(r,e)},t.now=m.now,t}(),g=new(function(t){function r(e,r){void 0===r&&(r=w.now);var n=t.call(this,e,r)||this;return n.actions=[],n._active=!1,n}return e(r,t),r.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},r}(w))(b),_=g,x=null,S=null,I=void 0,T=!1,A=!1,P={setTimeout:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var u=P.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([t,e],o(r))):setTimeout.apply(void 0,i([t,e],o(r)))},clearTimeout:function(t){var e=P.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function E(t){P.setTimeout((function(){if(!x)throw t;x(t)}))}function O(){}var j=k("C",void 0,void 0);function k(t,e,r){return{kind:t,value:e,error:r}}var M=null,z=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,p(e)&&e.add(r)):r.destination=U,r}return e(r,t),r.create=function(t,e,r){return new C(t,e,r)},r.prototype.next=function(t){this.isStopped?N(function(t){return k("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?N(k("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?N(j,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(h),$=Function.prototype.bind;function D(t,e){return $.call(t,e)}var q=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){F(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){F(t)}else F(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){F(t)}},t}(),C=function(t){function r(e,r,n){var o,i,u=t.call(this)||this;return c(e)||!e?o={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:u&&A?((i=Object.create(e)).unsubscribe=function(){return u.unsubscribe()},o={next:e.next&&D(e.next,i),error:e.error&&D(e.error,i),complete:e.complete&&D(e.complete,i)}):o=e,u.destination=new q(o),u}return e(r,t),r}(z);function F(t){var e;T?(e=t,T&&M&&(M.errorThrown=!0,M.error=e)):E(t)}function N(t,e){var r=S;r&&P.setTimeout((function(){return r(t,e)}))}var U={closed:!0,next:O,error:function(t){throw t},complete:O},Y="function"==typeof Symbol&&Symbol.observable||"@@observable";function J(t){return t}function L(t){return 0===t.length?J:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var R=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof z||function(t){return t&&c(t.next)&&c(t.error)&&c(t.complete)}(n)&&p(n)?t:new C(t,e,r);return function(t){if(T){var e=!M;if(e&&(M={errorThrown:!1,error:null}),t(),e){var r=M,n=r.errorThrown,o=r.error;if(M=null,n)throw o}}else t()}((function(){var t=o,e=t.operator,r=t.source;i.add(e?e.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=H(e))((function(e,n){var o=new C({next:function(e){try{t(e)}catch(t){n(t),o.unsubscribe()}},error:n,complete:e});r.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[Y]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return L(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=H(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function H(t){var e;return null!==(e=null!=t?t:I)&&void 0!==e?e:Promise}var G=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function B(t){return c(null==t?void 0:t.then)}function K(t){return c(t[Y])}function Q(t){return Symbol.asyncIterator&&c(null==t?void 0:t[Symbol.asyncIterator])}function V(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var W="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function X(t){return c(null==t?void 0:t[W])}function Z(t){return s(this,arguments,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,u(e.read())];case 3:return n=r.sent(),o=n.value,n.done?[4,u(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,u(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function tt(t){return c(null==t?void 0:t.getReader)}function et(t){if(t instanceof R)return t;if(null!=t){if(K(t))return i=t,new R((function(t){var e=i[Y]();if(c(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(G(t))return o=t,new R((function(t){for(var e=0;e<o.length&&!t.closed;e++)t.next(o[e]);t.complete()}));if(B(t))return r=t,new R((function(t){r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,E)}));if(Q(t))return rt(t);if(X(t))return e=t,new R((function(t){var r,o;try{for(var i=n(e),u=i.next();!u.done;u=i.next()){var s=u.value;if(t.next(s),t.closed)return}}catch(t){r={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}t.complete()}));if(tt(t))return rt(Z(t))}var e,r,o,i;throw V(t)}function rt(t){return new R((function(e){(function(t,e){var o,i,u,s,c,a,l,f;return c=this,a=void 0,f=function(){var c,a;return r(this,(function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=n(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(r){e[r]=t[r]&&function(e){return new Promise((function(n,o){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,o,(e=t[r](e)).done,e.value)}))}}}(t),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(c=i.value,e.next(c),e.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=r.sent(),u={error:a},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(s=o.return)?[4,s.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,e){function r(t){try{o(f.next(t))}catch(t){e(t)}}function n(t){try{o(f.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(r,n)}o((f=f.apply(c,a||[])).next())}))})(t,e).catch((function(t){return e.error(t)}))}))}!function(t){function r(e,r,n,o,i,u){var s=t.call(this,e)||this;return s.onFinalize=i,s.shouldUnsubscribe=u,s._next=r?function(t){try{r(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}e(r,t),r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}(z);new class{constructor(t){this.el=t,this.field=t.querySelector(".messenger_field"),this.url="https://evgeniy-loznevoy-rxjs.herokuapp.com/messages/unread"}init(){var t,e;(void 0===(t=1e3)&&(t=0),void 0===e&&(e=g),t<0&&(t=0),function(t,e,r){void 0===t&&(t=0),void 0===r&&(r=_);var n,o=-1;return null!=e&&((n=e)&&c(n.schedule)?r=e:o=e),new R((function(e){var n=function(t){return t instanceof Date&&!isNaN(t)}(t)?+t-r.now():t;n<0&&(n=0);var i=0;return r.schedule((function(){e.closed||(e.next(i++),0<=o?this.schedule(void 0,o):e.complete())}),n)}))}(t,t,e)).subscribe((()=>{var t;(t=fetch(this.url),et(t)).subscribe((t=>{Promise.resolve(t.json()).then((t=>{const{messages:e}=t;for(const t of e)this.drawMessage(t)}))}))}))}drawMessage(t){const e=document.createElement("div");var r;e.classList.add("message"),e.innerHTML=`\n      <p class="from">${t.from}</p>\n      <p class="subject">${r=t.subject.toString(),r.substring(0,Math.min(r.length,15))}...</p>\n      <p class="date">${function(t){const e=new Date(1e3*t),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];return`${e.getDate()} ${r} ${e.getHours()}:${e.getMinutes()}`}(t.received)}</p>\n    `,this.field.prepend(e)}}(document.querySelector(".messenger")).init()}();