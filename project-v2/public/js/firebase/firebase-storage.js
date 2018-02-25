/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
try{webpackJsonpFirebase([2],{118:function(t,e,n){n(119)},119:function(t,e,n){"use strict";function r(t){return"storage/"+t}function o(){return new te(ee.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function i(t){return new te(ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a(t){return new te(ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function s(){return new te(ee.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function u(t){return new te(ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function c(){return new te(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function l(){return new te(ee.CANCELED,"User canceled the upload/download.")}function h(t){return new te(ee.INVALID_URL,"Invalid URL '"+t+"'.")}function p(t){return new te(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f(){return new te(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function d(){return new te(ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function _(){return new te(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function v(t,e,n){return new te(ee.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function b(t,e,n,r){var o,i;return t===e?(o=t,i=1===t?"argument":"arguments"):(o="between "+t+" and "+e,i="arguments"),new te(ee.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+o+" "+i+", received "+r+".")}function m(){return new te(ee.APP_DELETED,"The Firebase app was deleted.")}function g(t){return new te(ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function y(t,e){return new te(ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function R(t){throw new te(ee.INTERNAL_ERROR,"Internal error: "+t)}function E(t){switch(t){case ne.RAW:case ne.BASE64:case ne.BASE64URL:case ne.DATA_URL:return;default:throw"Expected one of the event types: ["+ne.RAW+", "+ne.BASE64+", "+ne.BASE64URL+", "+ne.DATA_URL+"]."}}function w(t,e){switch(t){case ne.RAW:return new re(U(e));case ne.BASE64:case ne.BASE64URL:return new re(A(t,e));case ne.DATA_URL:return new re(N(e),O(e))}throw o()}function U(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){var o=n<t.length-1&&56320==(64512&t.charCodeAt(n+1));if(o){var i=r,a=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&a,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function T(t){var e;try{e=decodeURIComponent(t)}catch(t){throw y(ne.DATA_URL,"Malformed data URL.")}return U(e)}function A(t,e){switch(t){case ne.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){var o=n?"-":"_";throw y(t,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case ne.BASE64URL:var i=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(i||a){var o=i?"+":"/";throw y(t,"Invalid character '"+o+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/")}var s;try{s=atob(e)}catch(e){throw y(t,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}function N(t){var e=new oe(t);return e.base64?A(ne.BASE64,e.rest):T(e.rest)}function O(t){return new oe(t).contentType}function C(t,e){return!!(t.length>=e.length)&&t.substring(t.length-e.length)===e}function S(t){switch(t){case ae.RUNNING:case ae.PAUSING:case ae.CANCELING:return se.RUNNING;case ae.PAUSED:return se.PAUSED;case ae.SUCCESS:return se.SUCCESS;case ae.CANCELED:return se.CANCELED;case ae.ERROR:default:return se.ERROR}}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I(t,e){for(var n in t)k(t,n)&&e(n,t[n])}function L(t){if(null==t)return{};var e={};return I(t,function(t,n){e[t]=n}),e}function P(t){return new Promise(t)}function x(t){return Promise.resolve(t)}function D(t){return Promise.reject(t)}function M(t){return null!=t}function W(t){return void 0!==t}function B(t){return"function"==typeof t}function G(t){return"object"==typeof t}function j(t){return G(t)&&null!==t}function q(t){return G(t)&&!Array.isArray(t)}function F(t){return"string"==typeof t||t instanceof String}function H(t){return"number"==typeof t||t instanceof Number}function z(t){return X()&&t instanceof Blob}function X(){return"undefined"!=typeof Blob}function V(t){var e;try{e=JSON.parse(t)}catch(t){return null}return q(e)?e:null}function K(t){if(0==t.length)return null;var e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}function Z(t,e){var n=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?n:t+"/"+n}function J(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}function Q(t){return Vt+Zt+t}function Y(t){return Kt+Zt+t}function $(t){return Vt+Jt+t}function tt(t){var e=encodeURIComponent,n="?";return I(t,function(t,r){var o=e(t)+"="+e(r);n=n+o+"&"}),n=n.slice(0,-1)}function et(t,e){return e}function nt(t){return!F(t)||t.length<2?t:(t=t,J(t))}function rt(){function t(t,e){return nt(e)}function e(t,e){return M(e)?+e:e}function n(t,e){if(!(F(e)&&e.length>0))return[];var n=encodeURIComponent;return e.split(",").map(function(e){var r=t.bucket,o=t.fullPath;return Y("/b/"+n(r)+"/o/"+n(o))+tt({alt:"media",token:e})})}if(pe)return pe;var r=[];r.push(new he("bucket")),r.push(new he("generation")),r.push(new he("metageneration")),r.push(new he("name","fullPath",!0));var o=new he("name");o.xform=t,r.push(o);var i=new he("size");return i.xform=e,r.push(i),r.push(new he("timeCreated")),r.push(new he("updated")),r.push(new he("md5Hash",null,!0)),r.push(new he("cacheControl",null,!0)),r.push(new he("contentDisposition",null,!0)),r.push(new he("contentEncoding",null,!0)),r.push(new he("contentLanguage",null,!0)),r.push(new he("contentType",null,!0)),r.push(new he("metadata","customMetadata",!0)),r.push(new he("downloadTokens","downloadURLs",!1,n)),pe=r}function ot(t,e){function n(){var n=t.bucket,r=t.fullPath,o=new le(n,r);return e.makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){var r={};r.type="file";for(var o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,e[a.server])}return ot(r,t),r}function at(t,e,n){var r=V(e);return null===r?null:it(t,r,n)}function st(t,e){for(var n={},r=e.length,o=0;o<r;o++){var i=e[o];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}function ut(t){if(!t||!G(t))throw"Expected Metadata object.";for(var e in t){var n=t[e];if("customMetadata"===e){if(!G(n))throw"Expected object for 'customMetadata' mapping."}else if(j(n))throw"Mapping for '"+e+"' cannot be an object."}}function ct(t,e,n){for(var r=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){r=i;break}if(!(r<=n.length&&n.length<=o))throw b(r,o,t,n.length);for(var i=0;i<n.length;i++)try{e[i].validator(n[i])}catch(e){throw e instanceof Error?v(i,t,e.message):v(i,t,e)}}function lt(t,e){return function(n){t(n),e(n)}}function ht(t,e){function n(t){if(!F(t))throw"Expected string."}var r;return r=t?lt(n,t):n,new fe(r,e)}function pt(){function t(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||X()&&t instanceof Blob))throw"Expected Blob or File."}return new fe(t)}function ft(t){return new fe(ut,t)}function dt(){function t(t){if(!(H(t)&&t>=0))throw"Expected a number 0 or greater."}return new fe(t)}function _t(t,e){function n(e){if(!(null===e||M(e)&&e instanceof Object))throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new fe(n,e)}function vt(t){function e(t){if(null!==t&&!B(t))throw"Expected a Function."}return new fe(e,t)}function bt(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function mt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=bt();if(void 0!==n){for(var r=new n,o=0;o<t.length;o++)r.append(t[o]);return r.getBlob()}if(X())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function gt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function yt(t,e){return-1!==t.indexOf(e)}function Rt(t){return Array.prototype.slice.call(t)}function Et(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function wt(t){if(!t)throw o()}function Ut(t,e){function n(n,r){var o=at(t,r,e);return wt(null!==o),o}return n}function Tt(t){function e(e,n){var r;return r=401===e.getStatus()?s():402===e.getStatus()?a(t.bucket):403===e.getStatus()?u(t.path):n,r.setServerResponseProp(n.serverResponseProp()),r}return e}function At(t){function e(e,r){var o=n(e,r);return 404===e.getStatus()&&(o=i(t.path)),o.setServerResponseProp(r.serverResponseProp()),o}var n=Tt(t);return e}function Nt(t,e,n){var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new _e(o,"GET",Ut(t,n),i);return a.errorHandler=At(e),a}function Ot(t,e,n,r){var o=e.fullServerUrl(),i=Q(o),a=st(n,r),s={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime(),c=new _e(i,"PATCH",Ut(t,r),u);return c.headers=s,c.body=a,c.errorHandler=At(e),c}function Ct(t,e){function n(t,e){}var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new _e(o,"DELETE",n,i);return a.successCodes=[200,204],a.errorHandler=At(e),a}function St(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kt(t,e,n){var r=L(n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=St(null,e)),r}function It(t,e,n,r,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var t="",e=0;e<2;e++)t+=(""+Math.random()).slice(2);return t}();a["Content-Type"]="multipart/related; boundary="+s;var u=kt(e,r,o),c=st(u,n),l="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",h="\r\n--"+s+"--",p=de.getBlob(l,r,h);if(null===p)throw f();var d={name:u.fullPath},_=$(i),v=t.maxUploadRetryTime(),b=new _e(_,"POST",Ut(t,n),v);return b.urlParams=d,b.headers=a,b.body=p.uploadData(),b.errorHandler=Tt(e),b}function Lt(t,e){var n;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){wt(!1)}return wt(yt(e||["active"],n)),n}function Pt(t,e,n,r,o){function i(t,e){Lt(t);var n;try{n=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){wt(!1)}return wt(F(n)),n}var a=e.bucketOnlyServerUrl(),s=kt(e,r,o),u={name:s.fullPath},c=$(a),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},h=st(s,n),p=t.maxUploadRetryTime(),f=new _e(c,"POST",i,p);return f.urlParams=u,f.headers=l,f.body=h,f.errorHandler=Tt(e),f}function xt(t,e,n,r){function o(t,e){var n,o=Lt(t,["active","final"]);try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){wt(!1)}var i=parseInt(n,10);return wt(!isNaN(i)),new ve(i,r.size(),"final"===o)}var i={"X-Goog-Upload-Command":"query"},a=t.maxUploadRetryTime(),s=new _e(n,"POST",o,a);return s.headers=i,s.errorHandler=Tt(e),s}function Dt(t,e,n,r,o,i,a,s){function u(t,n){var o,a=Lt(t,["active","final"]),s=c.current+h,u=r.size();return o="final"===a?Ut(e,i)(t,n):null,new ve(s,u,"final"===a,o)}var c=new ve(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw d();var l=c.total-c.current,h=l;o>0&&(h=Math.min(h,o));var p=c.current,_=p+h,v=h===l?"upload, finalize":"upload",b={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":c.current},m=r.slice(p,_);if(null===m)throw f();var g=e.maxUploadRetryTime(),y=new _e(n,"POST",u,g);return y.headers=b,y.body=m.uploadData(),y.progressCallback=s||null,y.errorHandler=Tt(t),y}function Mt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];x(!0).then(function(){t.apply(null,e)})}}function Wt(t,e,n){function r(){return 2===h}function o(){p||(p=!0,e.apply(null,arguments))}function i(e){c=setTimeout(function(){c=null,t(a,r())},e)}function a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!p){if(t)return void o.apply(null,arguments);if(r()||l)return void o.apply(null,arguments);u<64&&(u*=2);var a;1===h?(h=2,a=0):a=1e3*(u+Math.random()),i(a)}}function s(t){f||(f=!0,p||(null!==c?(t||(h=2),clearTimeout(c),i(0)):t||(h=1)))}var u=1,c=null,l=!1,h=0,p=!1,f=!1;return i(0),setTimeout(function(){l=!0,s(!0)},n),s}function Bt(t){t(!1)}function Gt(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}function jt(t){var e=void 0!==Xt.default?Xt.default.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function qt(t,e,n){var r=tt(t.urlParams),o=t.url+r,i=L(t.headers);return Gt(i,e),jt(i),new Ue(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}function Ft(t,e,n){return new Ae(t,new ce,n)}function Ht(t){var e={TaskState:se,TaskEvent:ie,StringFormat:ne,Storage:Ae,Reference:ye};t.INTERNAL.registerService(Oe,Ft,e,void 0,!0)}Object.defineProperty(e,"__esModule",{value:!0});var zt,Xt=n(6),Vt="https://firebasestorage.googleapis.com",Kt="https://firebasestorage.googleapis.com",Zt="/v0",Jt="/v0",Qt=12e4,Yt=6e4,$t=-9007199254740991,te=function(){function t(t,e){this.t=r(t),this.e="Firebase Storage: "+e,this.n=null,this.r="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return r(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.n},t.prototype.setServerResponseProp=function(t){this.n=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.n},enumerable:!0,configurable:!0}),t}(),ee={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"},ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},re=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}(),oe=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw y(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=e[1]||null;null!=n&&(this.base64=C(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}return t}(),ie={STATE_CHANGED:"state_changed"},ae={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},se={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(zt||(zt={}));var ue=function(){function t(){var t=this;this.o=!1,this.i=new XMLHttpRequest,this.a=zt.NO_ERROR,this.s=P(function(e,n){t.i.addEventListener("abort",function(n){t.a=zt.ABORT,e(t)}),t.i.addEventListener("error",function(n){t.a=zt.NETWORK_ERROR,e(t)}),t.i.addEventListener("load",function(n){e(t)})})}return t.prototype.send=function(t,e,n,r){var o=this;if(this.o)throw R("cannot .send() more than once");return this.o=!0,this.i.open(e,t,!0),M(r)&&I(r,function(t,e){o.i.setRequestHeader(t,""+e)}),M(n)?this.i.send(n):this.i.send(),this.s},t.prototype.getErrorCode=function(){if(!this.o)throw R("cannot .getErrorCode() before sending");return this.a},t.prototype.getStatus=function(){if(!this.o)throw R("cannot .getStatus() before sending");try{return this.i.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.o)throw R("cannot .getResponseText() before sending");return this.i.responseText},t.prototype.abort=function(){this.i.abort()},t.prototype.getResponseHeader=function(t){return this.i.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.removeEventListener("progress",t)},t}(),ce=function(){function t(){}return t.prototype.createXhrIo=function(){return new ue},t}(),le=function(){function t(t,e){this.bucket=t,this.u=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.u},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n;try{n=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===n.path)return n;throw p(e)},t.makeFromUrl=function(e){function n(t){"/"===t.path.charAt(t.path.length-1)&&(t.u=t.u.slice(0,-1))}function r(t){t.u=decodeURIComponent(t.path)}for(var o=null,i=RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$","i"),a={bucket:1,path:3},s=RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$","i"),u={bucket:1,path:3},c=[{regex:i,indices:a,postModify:n},{regex:s,indices:u,postModify:r}],l=0;l<c.length;l++){var p=c[l],f=p.regex.exec(e);if(f){var d=f[p.indices.bucket],_=f[p.indices.path];_||(_=""),o=new t(d,_),p.postModify(o);break}}if(null==o)throw h(e);return o},t}(),he=function(){function t(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||et}return t}(),pe=null,fe=function(){function t(t,e){var n=this;this.validator=function(e){n.optional&&!W(e)||t(e)},this.optional=!!e}return t}(),de=function(){function t(t,e){var n=0,r="";z(t)?(this.c=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.c=new Uint8Array(t):(this.c=new Uint8Array(t.byteLength),this.c.set(new Uint8Array(t))),n=this.c.length):t instanceof Uint8Array&&(e?this.c=t:(this.c=new Uint8Array(t.length),this.c.set(t)),n=t.length),this.l=n,this.h=r}return t.prototype.size=function(){return this.l},t.prototype.type=function(){return this.h},t.prototype.slice=function(e,n){if(z(this.c)){var r=this.c,o=gt(r,e,n);return null===o?null:new t(o)}return new t(new Uint8Array(this.c.buffer,e,n-e),!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(X()){var r=e.map(function(e){return e instanceof t?e.c:e});return new t(mt.apply(null,r))}var o=e.map(function(t){return F(t)?w(ne.RAW,t).data:t.c}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),s=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.c},t}(),_e=function(){function t(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}(),ve=function(){function t(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}return t}(),be=function(){function t(t,e,n){if(B(t)||M(e)||M(n))this.next=t,this.error=e||null,this.complete=n||null;else{var r=t;this.next=r.next||null,this.error=r.error||null,this.complete=r.complete||null}}return t}(),me=function(){function t(t,e,n,r,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=o,this.ref=i}return Object.defineProperty(t.prototype,"downloadURL",{get:function(){if(null!==this.metadata){var t=this.metadata.downloadURLs;return null!=t&&null!=t[0]?t[0]:null}return null},enumerable:!0,configurable:!0}),t}(),ge=function(){function t(t,e,n,r,o,i){void 0===i&&(i=null);var a=this;this.p=0,this.f=!1,this.d=!1,this._=[],this.v=null,this.b=null,this.m=null,this.g=1,this.y=null,this.R=null,this.w=t,this.U=e,this.T=n,this.A=o,this.N=i,this.O=r,this.C=this.S(this.A),this.k=ae.RUNNING,this.I=function(t){a.m=null,a.g=1,t.codeEquals(ee.CANCELED)?(a.f=!0,a.L()):(a.v=t,a.P(ae.ERROR))},this.x=function(t){a.m=null,t.codeEquals(ee.CANCELED)?a.L():(a.v=t,a.P(ae.ERROR))},this.D=P(function(t,e){a.y=t,a.R=e,a.M()}),this.D.then(null,function(){})}return t.prototype.W=function(){var t=this,e=this.p;return function(n,r){t.B(e+n)}},t.prototype.S=function(t){return t.size()>262144},t.prototype.M=function(){this.k===ae.RUNNING&&null===this.m&&(this.C?null===this.b?this.G():this.f?this.j():this.d?this.q():this.F():this.H())},t.prototype.z=function(t){var e=this;this.U.getAuthToken().then(function(n){switch(e.k){case ae.RUNNING:t(n);break;case ae.CANCELING:e.P(ae.CANCELED);break;case ae.PAUSING:e.P(ae.PAUSED)}})},t.prototype.G=function(){var t=this;this.z(function(e){var n=Pt(t.U,t.T,t.O,t.A,t.N),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.b=e,t.f=!1,t.L()},t.I)})},t.prototype.j=function(){var t=this,e=this.b;this.z(function(n){var r=xt(t.U,t.T,e,t.A),o=t.U.makeRequest(r,n);t.m=o,o.getPromise().then(function(e){e=e,t.m=null,t.B(e.current),t.f=!1,e.finalized&&(t.d=!0),t.L()},t.I)})},t.prototype.F=function(){var t=this,e=262144*this.g,n=new ve(this.p,this.A.size()),r=this.b;this.z(function(o){var i;try{i=Dt(t.T,t.U,r,t.A,e,t.O,n,t.W())}catch(e){return t.v=e,void t.P(ae.ERROR)}var a=t.U.makeRequest(i,o);t.m=a,a.getPromise().then(function(e){t.X(),t.m=null,t.B(e.current),e.finalized?(t.N=e.metadata,t.P(ae.SUCCESS)):t.L()},t.I)})},t.prototype.X=function(){262144*this.g<33554432&&(this.g*=2)},t.prototype.q=function(){var t=this;this.z(function(e){var n=Nt(t.U,t.T,t.O),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.N=e,t.P(ae.SUCCESS)},t.x)})},t.prototype.H=function(){var t=this;this.z(function(e){var n=It(t.U,t.T,t.O,t.A,t.N),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.N=e,t.B(t.A.size()),t.P(ae.SUCCESS)},t.I)})},t.prototype.B=function(t){var e=this.p;this.p=t,this.p!==e&&this.V()},t.prototype.P=function(t){if(this.k!==t)switch(t){case ae.CANCELING:case ae.PAUSING:this.k=t,null!==this.m&&this.m.cancel();break;case ae.RUNNING:var e=this.k===ae.PAUSED;this.k=t,e&&(this.V(),this.M());break;case ae.PAUSED:this.k=t,this.V();break;case ae.CANCELED:this.v=l(),this.k=t,this.V();break;case ae.ERROR:case ae.SUCCESS:this.k=t,this.V()}},t.prototype.L=function(){switch(this.k){case ae.PAUSING:this.P(ae.PAUSED);break;case ae.CANCELING:this.P(ae.CANCELED);break;case ae.RUNNING:this.M()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=S(this.k);return new me(this.p,this.A.size(),t,this.N,this,this.w)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){function o(e){if(t!==ie.STATE_CHANGED)throw"Expected one of the event types: ["+ie.STATE_CHANGED+"]."}function i(t){try{return void c(t)}catch(t){}try{if(l(t),!(W(t.next)||W(t.error)||W(t.complete)))throw"";return}catch(t){throw u}}function a(t){function e(e,n,o){null!==t&&ct("on",t,arguments);var i=new be(e,n,r);return h.K(i),function(){h.Z(i)}}return e}function s(t){if(null===t)throw u;i(t)}void 0===e&&(e=void 0),void 0===n&&(n=void 0),void 0===r&&(r=void 0);var u="Expected a function or an Object with one of `next`, `error`, `complete` properties.",c=vt(!0).validator,l=_t(null,!0).validator;ct("on",[ht(o),_t(i,!0),vt(!0),vt(!0)],arguments);var h=this,p=[_t(s),vt(!0),vt(!0)];return W(e)||W(n)||W(r)?a(null)(e,n,r):a(p)},t.prototype.then=function(t,e){return this.D.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.K=function(t){this._.push(t),this.J(t)},t.prototype.Z=function(t){Et(this._,t)},t.prototype.V=function(){var t=this;this.Q(),Rt(this._).forEach(function(e){t.J(e)})},t.prototype.Q=function(){if(null!==this.y){var t=!0;switch(S(this.k)){case se.SUCCESS:Mt(this.y.bind(null,this.snapshot))();break;case se.CANCELED:case se.ERROR:Mt(this.R.bind(null,this.v))();break;default:t=!1}t&&(this.y=null,this.R=null)}},t.prototype.J=function(t){switch(S(this.k)){case se.RUNNING:case se.PAUSED:null!==t.next&&Mt(t.next.bind(t,this.snapshot))();break;case se.SUCCESS:null!==t.complete&&Mt(t.complete.bind(t))();break;case se.CANCELED:case se.ERROR:null!==t.error&&Mt(t.error.bind(t,this.v))();break;default:null!==t.error&&Mt(t.error.bind(t,this.v))()}},t.prototype.resume=function(){ct("resume",[],arguments);var t=this.k===ae.PAUSED||this.k===ae.PAUSING;return t&&this.P(ae.RUNNING),t},t.prototype.pause=function(){ct("pause",[],arguments);var t=this.k===ae.RUNNING;return t&&this.P(ae.PAUSING),t},t.prototype.cancel=function(){ct("cancel",[],arguments);var t=this.k===ae.RUNNING||this.k===ae.PAUSING;return t&&this.P(ae.CANCELING),t},t}(),ye=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof le?e:le.makeFromUrl(e)}return t.prototype.toString=function(){return ct("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return rt()},t.prototype.child=function(t){ct("child",[ht()],arguments);var e=Z(this.location.path,t),n=new le(this.location.bucket,e);return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=K(this.location.path);if(null===t)return null;var e=new le(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new le(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return J(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),ct("put",[pt(),ft(!0)],arguments),this.Y("put"),new ge(this,this.authWrapper,this.location,this.mappings(),new de(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=ne.RAW),ct("putString",[ht(),ht(E,!0),ft(!0)],arguments),this.Y("putString");var r=w(e,t),o=L(n);return!M(o.contentType)&&M(r.contentType)&&(o.contentType=r.contentType),new ge(this,this.authWrapper,this.location,this.mappings(),new de(r.data,!0),o)},t.prototype.delete=function(){ct("delete",[],arguments),this.Y("delete");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Ct(t.authWrapper,t.location);return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.getMetadata=function(){ct("getMetadata",[],arguments),this.Y("getMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Nt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.updateMetadata=function(t){ct("updateMetadata",[ft()],arguments),this.Y("updateMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(n){var r=Ot(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(r,n).getPromise()})},t.prototype.getDownloadURL=function(){return ct("getDownloadURL",[],arguments),this.Y("getDownloadURL"),this.getMetadata().then(function(t){var e=t.downloadURLs[0];if(M(e))return e;throw _()})},t.prototype.Y=function(t){if(""===this.location.path)throw g(t)},t}(),Re=function(){function t(t){this.D=D(t)}return t.prototype.getPromise=function(){return this.D},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),Ee=function(){function t(){this.$={},this.tt=$t}return t.prototype.addRequest=function(t){function e(){delete r.$[n]}var n=this.tt;this.tt++,this.$[n]=t;var r=this;t.getPromise().then(e,e)},t.prototype.clear=function(){I(this.$,function(t,e){e&&e.cancel(!0)}),this.$={}},t}(),we=function(){function t(e,n,r,o,i){if(this.et=null,this.nt=!1,this.rt=e,null!==this.rt){var a=this.rt.options;M(a)&&(this.et=t.ot(a))}this.it=n,this.at=r,this.st=i,this.ut=o,this.ct=Qt,this.lt=Yt,this.ht=new Ee}return t.ot=function(t){var e=t.storageBucket||null;return null==e?null:le.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.rt&&M(this.rt.INTERNAL)&&M(this.rt.INTERNAL.getToken)?this.rt.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(t){return null}):x(null)},t.prototype.bucket=function(){if(this.nt)throw m();return this.et},t.prototype.service=function(){return this.ut},t.prototype.makeStorageReference=function(t){return this.it(this,t)},t.prototype.makeRequest=function(t,e){if(this.nt)return new Re(m());var n=this.at(t,e,this.st);return this.ht.addRequest(n),n},t.prototype.deleteApp=function(){this.nt=!0,this.rt=null,this.ht.clear()},t.prototype.maxUploadRetryTime=function(){return this.lt},t.prototype.setMaxUploadRetryTime=function(t){this.lt=t},t.prototype.maxOperationRetryTime=function(){return this.ct},t.prototype.setMaxOperationRetryTime=function(t){this.ct=t},t}(),Ue=function(){function t(t,e,n,r,o,i,a,s,u,c,l){this.pt=null,this.ft=null,this.y=null,this.R=null,this.dt=!1,this._t=!1,this.vt=t,this.bt=e,this.mt=n,this.gt=r,this.yt=o.slice(),this.Rt=i.slice(),this.Et=a,this.wt=s,this.Ut=c,this.Tt=u,this.st=l;var h=this;this.D=P(function(t,e){h.y=t,h.R=e,h.M()})}return t.prototype.M=function(){function t(t,e){function r(t){var e=t.loaded,r=t.lengthComputable?t.total:-1;null!==n.Ut&&n.Ut(e,r)}if(e)return void t(!1,new Te(!1,null,!0));var o=n.st.createXhrIo();n.pt=o,null!==n.Ut&&o.addUploadProgressListener(r),o.send(n.vt,n.bt,n.gt,n.mt).then(function(e){null!==n.Ut&&e.removeUploadProgressListener(r),n.pt=null,e=e;var o=e.getErrorCode()===zt.NO_ERROR,i=e.getStatus();if(!o||n.At(i)){var a=e.getErrorCode()===zt.ABORT;return void t(!1,new Te(!1,null,a))}var s=yt(n.yt,i);t(!0,new Te(s,e))})}function e(t,e){var r=n.y,i=n.R,a=e.xhr;if(e.wasSuccessCode)try{var s=n.Et(a,a.getResponseText());W(s)?r(s):r()}catch(t){i(t)}else if(null!==a){var u=o();u.setServerResponseProp(a.getResponseText()),i(n.wt?n.wt(a,u):u)}else if(e.canceled){var u=n._t?m():l();i(u)}else{var u=c();i(u)}}var n=this;this.dt?e(!1,new Te(!1,null,!0)):this.ft=Wt(t,e,this.Tt)},t.prototype.getPromise=function(){return this.D},t.prototype.cancel=function(t){this.dt=!0,this._t=t||!1,null!==this.ft&&Bt(this.ft),null!==this.pt&&this.pt.abort()},t.prototype.At=function(t){var e=t>=500&&t<600,n=[408,429],r=yt(n,t),o=yt(this.Rt,t);return e||r||o},t}(),Te=function(){function t(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}return t}(),Ae=function(){function t(t,e,n){function r(t,e){return new ye(t,e)}if(this.et=null,this.U=new we(t,r,qt,this,e),this.rt=t,null!=n)this.et=le.makeFromBucketSpec(n);else{var o=this.U.bucket();null!=o&&(this.et=new le(o,""))}this.Nt=new Ne(this)}return t.prototype.ref=function(t){function e(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(ct("ref",[ht(e,!0)],arguments),null==this.et)throw Error("No Storage Bucket defined in Firebase Options.");var n=new ye(this.U,this.et);return null!=t?n.child(t):n},t.prototype.refFromURL=function(t){function e(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{le.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}}return ct("refFromURL",[ht(e,!1)],arguments),new ye(this.U,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.U.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){ct("setMaxUploadRetryTime",[dt()],arguments),this.U.setMaxUploadRetryTime(t)},Object.defineProperty(t.prototype,"maxOperationRetryTime",{get:function(){return this.U.maxOperationRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxOperationRetryTime=function(t){ct("setMaxOperationRetryTime",[dt()],arguments),this.U.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.rt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.Nt},enumerable:!0,configurable:!0}),t}(),Ne=function(){function t(t){this.ut=t}return t.prototype.delete=function(){return this.ut.U.deleteApp(),x(void 0)},t}();e.registerStorage=Ht;var Oe="storage";Ht(Xt.default)}},[118])}catch(t){throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}
//# sourceMappingURL=firebase-storage.js.map