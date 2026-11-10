/* MINI-X 3D companion runtime for MUKRAMIN.DEV — source: mini-x-3d/runtime/src (three.js MIT license) */
var cp=Object.defineProperty;var hp=(a,e,t)=>e in a?cp(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var yu=(a,e,t)=>hp(a,typeof e!="symbol"?e+"":e,t);var hd=0,Nc=1,ud=2;var ta=1,dd=2,$s=3,Vi=0,Zt=1,Ut=2,os=0,Qs=1,kc=2,Uc=3,Oc=4,Ao=5;var gn=100,fd=101,pd=102,md=103,gd=104,Ro=200,ia=201,bd=202,xd=203,na=204,Bc=205,_d=206,vd=207,yd=208,Md=209,Sd=210,wd=211,Td=212,Ed=213,Ad=214,eo=0,to=1,io=2,ks=3,no=4,so=5,ro=6,ao=7,Co=0,Rd=1,Cd=2,Wi=0,zc=1,Hc=2,Gc=3,sa=4,Vc=5,Wc=6,qc=7,Ec="attached",Pd="detached",Xc=300,ls=301,er=302,Po=303,Io=304,Rn=1e3,Si=1001,Us=1002,It=1003,Lo=1004;var cs=1005;var Bt=1006,tr=1007;var Ti=1008;var pi=1009,jc=1010,Kc=1011,ir=1012,Fo=1013,Ni=1014,yi=1015,ki=1016,Do=1017,No=1018,hs=1020,Jc=35902,Yc=35899,Zc=1021,$c=1022,Ei=1023,on=1026,bn=1027,ko=1028,Uo=1029,Dn=1030,Oo=1031;var Bo=1033,ra=33776,aa=33777,oa=33778,la=33779,zo=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,qo=37492,Xo=37496,jo=37488,Ko=37489,ca=37490,Jo=37491,Yo=37808,Zo=37809,$o=37810,Qo=37811,el=37812,tl=37813,il=37814,nl=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ha=36285,ml=36286,ua=2200,Id=2201,Ld=2202,jn=2300,Kn=2301,$a=2302,Ac=2303,Wn=2400,qn=2401,Pr=2402,gl=2500,Fd=2501,Qc=0,da=1,nr=2,Dd=3200;var fa=0,Nd=1,xn="",Mt="srgb",oi="srgb-linear",Ir="linear",lt="srgb";var Qa=7680;var kd=519,Ud=512,Od=513,Bd=514,eh=515,zd=516,Hd=517,th=518,ih=519,nh=35044,us=35048;var sh="300 es",wi=2e3,Os=2001;function up(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function dp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Bs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Gd(){let a=Bs("canvas");return a.style.display="block",a}var Mu={},zs=null;function Lr(...a){let e="THREE."+a.shift();zs?zs("log",e,...a):console.log(e,...a)}function Vd(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Re(...a){a=Vd(a);let e="THREE."+a.shift();if(zs)zs("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Oe(...a){a=Vd(a);let e="THREE."+a.shift();if(zs)zs("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Xn(...a){let e=a.join(" ");e in Mu||(Mu[e]=!0,Re(...a))}function Wd(a,e,t){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var qd={[eo]:eo,[io]:ro,[no]:no,[ks]:so,[to]:to,[ro]:io,[ao]:ao,[so]:ks},Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,Rr=Math.PI/180,Jn=180/Math.PI;function qi(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function $e(a,e,t){return Math.max(e,Math.min(t,a))}function rh(a,e){return(a%e+e)%e}function fp(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function pp(a,e,t){return a!==e?(t-a)/(e-a):0}function Cr(a,e,t){return(1-t)*a+t*e}function mp(a,e,t,i){return Cr(a,e,1-Math.exp(-t*i))}function gp(a,e=1){return e-Math.abs(rh(a,e*2)-e)}function bp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function xp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function _p(a,e){return a+Math.floor(Math.random()*(e-a+1))}function vp(a,e){return a+Math.random()*(e-a)}function yp(a){return a*(.5-Math.random())}function Mp(a){a!==void 0&&(Su=a);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(a){return a*Rr}function wp(a){return a*Jn}function Tp(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Ep(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ah(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ap(a,e,t,i,n){let s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),f=s((i-e)/2),g=r((i-e)/2);switch(n){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*h,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bl(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oh(a,e){if(e.constructor===Float32Array)return a;let t=bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function lh(a,e){if(e.constructor===Float32Array)return a;let t=bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}var ci={DEG2RAD:Rr,RAD2DEG:Jn,generateUUID:qi,clamp:$e,euclideanModulo:rh,mapLinear:fp,inverseLerp:pp,lerp:Cr,damp:mp,pingpong:gp,smoothstep:bp,smootherstep:xp,randInt:_p,randFloat:vp,randFloatSpread:yp,seededRandom:Mp,degToRad:Sp,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ep,floorPowerOfTwo:ah,setQuaternionFromProperEuler:Ap,normalize:lh,denormalize:oh},fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;var Ae=fh,mt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],g=s[r+2],b=s[r+3];if(u!==b||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*b;p<0&&(d=-d,f=-f,g=-g,b=-b,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+b*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+b*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-s*n),u=2*(s*i-r*t);return this.x=t+l*c+r*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var A=ph,tc=new A,wu=new mt,mh=class mh{constructor(e,t,i,n,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c)}set(e,t,i,n,s,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=n[0],p=n[3],m=n[6],_=n[1],M=n[4],y=n[7],w=n[2],v=n[5],x=n[8];return s[0]=r*b+o*_+l*w,s[3]=r*p+o*M+l*v,s[6]=r*m+o*y+l*x,s[1]=c*b+h*_+u*w,s[4]=c*p+h*M+u*v,s[7]=c*m+h*y+u*x,s[2]=d*b+f*_+g*w,s[5]=d*p+f*M+g*v,s[8]=d*m+f*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,f=c*s-r*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(n*c-h*i)*b,e[2]=(o*i-n*r)*b,e[3]=d*b,e[4]=(h*t-n*l)*b,e[5]=(n*s-o*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(r*t-i*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(e,t)),this}rotate(e){return Xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return Xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var Be=mh,ic=new Be,Tu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){let a={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(n.r=an(n.r),n.g=an(n.g),n.b=an(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?Ir:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[oi]:{primaries:e,whitePoint:i,transfer:Ir,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),a}var Je=Rp();function an(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ns(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var bs,oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=Bs("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=an(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(an(t[i]/255)*255):t[i]=an(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cp=0,Hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(nc(n[r].image)):s.push(nc(n[r]))}else s=nc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function nc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?oo.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Pp=0,sc=new A,zt=class a extends Di{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,i=Si,n=Si,s=Bt,r=Ti,o=Ei,l=pi,c=a.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=qi(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Xc;zt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],b=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,w=(m+1)/2,v=(h+d)/4,x=(u+b)/4,S=(g+p)/4;return M>y&&M>w?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=v/i,s=x/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=v/n,s=S/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=x/s,n=S/s),this.set(i,n,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var ht=gh,lo=class extends Di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new zt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fr=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Eo=class Eo{constructor(e,t,i,n,s,r,o,l,c,h,u,d,f,g,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c,h,u,d,f,g,b,p)}set(e,t,i,n,s,r,o,l,c,h,u,d,f,g,b,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),r=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*h,f=r*u,g=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,b=c*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,b=c*u;t[0]=d-b*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=b-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*h,f=r*u,g=o*h,b=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,g=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=r*l,f=r*c,g=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Lp)}lookAt(e,t,i){let n=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Mn.crossVectors(i,bi),Mn.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Mn.crossVectors(i,bi)),Mn.normalize(),wa.crossVectors(bi,Mn),n[0]=Mn.x,n[4]=wa.x,n[8]=bi.x,n[1]=Mn.y,n[5]=wa.y,n[9]=bi.y,n[2]=Mn.z,n[6]=wa.z,n[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],p=i[10],m=i[14],_=i[3],M=i[7],y=i[11],w=i[15],v=n[0],x=n[4],S=n[8],P=n[12],C=n[1],D=n[5],k=n[9],V=n[13],L=n[2],q=n[6],O=n[10],G=n[14],ie=n[3],W=n[7],j=n[11],ee=n[15];return s[0]=r*v+o*C+l*L+c*ie,s[4]=r*x+o*D+l*q+c*W,s[8]=r*S+o*k+l*O+c*j,s[12]=r*P+o*V+l*G+c*ee,s[1]=h*v+u*C+d*L+f*ie,s[5]=h*x+u*D+d*q+f*W,s[9]=h*S+u*k+d*O+f*j,s[13]=h*P+u*V+d*G+f*ee,s[2]=g*v+b*C+p*L+m*ie,s[6]=g*x+b*D+p*q+m*W,s[10]=g*S+b*k+p*O+m*j,s[14]=g*P+b*V+p*G+m*ee,s[3]=_*v+M*C+y*L+w*ie,s[7]=_*x+M*D+y*q+w*W,s[11]=_*S+M*k+y*O+w*j,s[15]=_*P+M*V+y*G+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],p=e[11],m=e[15],_=l*f-c*d,M=o*f-c*u,y=o*d-l*u,w=r*f-c*h,v=r*d-l*h,x=r*u-o*h;return t*(b*_-p*M+m*y)-i*(g*_-p*w+m*v)+n*(g*M-b*w+m*x)-s*(g*y-b*v+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-i*(s*h-o*l)+n*(s*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],p=e[14],m=e[15],_=t*o-i*r,M=t*l-n*r,y=t*c-s*r,w=i*l-n*o,v=i*c-s*o,x=n*c-s*l,S=h*b-u*g,P=h*p-d*g,C=h*m-f*g,D=u*p-d*b,k=u*m-f*b,V=d*m-f*p,L=_*V-M*k+y*D+w*C-v*P+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/L;return e[0]=(o*V-l*k+c*D)*q,e[1]=(n*k-i*V-s*D)*q,e[2]=(b*x-p*v+m*w)*q,e[3]=(d*v-u*x-f*w)*q,e[4]=(l*C-r*V-c*P)*q,e[5]=(t*V-n*C+s*P)*q,e[6]=(p*y-g*x-m*M)*q,e[7]=(h*x-d*y+f*M)*q,e[8]=(r*k-o*C+c*S)*q,e[9]=(i*C-t*k-s*S)*q,e[10]=(g*v-b*y+m*_)*q,e[11]=(u*y-h*v-f*_)*q,e[12]=(o*P-r*D-l*S)*q,e[13]=(t*D-i*P+n*S)*q,e[14]=(b*M-g*w-p*_)*q,e[15]=(h*w-u*M+d*_)*q,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,f=s*h,g=s*u,b=r*h,p=r*u,m=o*u,_=l*c,M=l*h,y=l*u,w=i.x,v=i.y,x=i.z;return n[0]=(1-(b+m))*w,n[1]=(f+y)*w,n[2]=(g-M)*w,n[3]=0,n[4]=(f-y)*v,n[5]=(1-(d+m))*v,n[6]=(p+_)*v,n[7]=0,n[8]=(g+M)*x,n[9]=(p-_)*x,n[10]=(1-(d+b))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let r=xs.set(n[0],n[1],n[2]).length(),o=xs.set(n[4],n[5],n[6]).length(),l=xs.set(n[8],n[9],n[10]).length();s<0&&(r=-r),Pi.copy(this);let c=1/r,h=1/o,u=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=u,Pi.elements[9]*=u,Pi.elements[10]*=u,t.setFromRotationMatrix(Pi),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,r,o=wi,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,b;if(l)g=s/(r-s),b=r*s/(r-s);else if(o===wi)g=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===Os)g=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,r,o=wi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,b;if(l)g=1/(r-s),b=r/(r-s);else if(o===wi)g=-2/(r-s),b=-(r+s)/(r-s);else if(o===Os)g=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Eo.prototype.isMatrix4=!0;var Ge=Eo,xs=new A,Pi=new Ge,Ip=new A(0,0,0),Lp=new A(1,1,1),Mn=new A,wa=new A,bi=new A,Au=new Ge,Ru=new mt,Bi=class a{constructor(e=0,t=0,i=0,n=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fp=0,Cu=new A,_s=new mt,$i=new Ge,Ta=new A,gr=new A,Dp=new A,Np=new mt,Pu=new A(1,0,0),Iu=new A(0,1,0),Lu=new A(0,0,1),Fu={type:"added"},kp={type:"removed"},vs={type:"childadded",child:null},rc={type:"childremoved",child:null},gt=class a extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new A,t=new Bi,i=new mt,n=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Be}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(gr,Ta,this.up):$i.lookAt(Ta,gr,this.up),this.quaternion.setFromRotationMatrix($i),n&&($i.extractRotation(n.matrixWorld),_s.setFromRotationMatrix($i),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),vs.child=e,this.dispatchEvent(vs),vs.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),rc.child=e,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new A(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Up={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,i),m=this._getHandJoint(c,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Up)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function ac(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Je.workingColorSpace){if(e=rh(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=ac(r,s,e+1/3),this.g=ac(r,s,e),this.b=ac(r,s,e-1/3)}return Je.colorSpaceToWorking(this,n),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(ii.copy(this),e),Math.round($e(ii.r*255,0,255))*65536+Math.round($e(ii.g*255,0,255))*256+Math.round($e(ii.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(ii.copy(this),t);let i=ii.r,n=ii.g,s=ii.b,r=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=Mt){Je.workingToColorSpace(ii.copy(this),e);let t=ii.r,i=ii.g,n=ii.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ea);let i=Cr(Sn.h,Ea.h,t),n=Cr(Sn.s,Ea.s,t),s=Cr(Sn.l,Ea.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new Me;Me.NAMES=Xd;var Yn=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ii=new A,Qi=new A,oc=new A,en=new A,ys=new A,Ms=new A,Du=new A,lc=new A,cc=new A,hc=new A,uc=new ht,dc=new ht,fc=new ht,rn=class a{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ii.subVectors(e,t),n.cross(Ii);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ii.subVectors(n,t),Qi.subVectors(i,t),oc.subVectors(e,t);let r=Ii.dot(Ii),o=Ii.dot(Qi),l=Ii.dot(oc),c=Qi.dot(Qi),h=Qi.dot(oc),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(r,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,i),fc.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(uc,s.x),r.addScaledVector(dc,s.y),r.addScaledVector(fc,s.z),r}static isFrontFacing(e,t,i,n){return Ii.subVectors(i,t),Qi.subVectors(e,t),Ii.cross(Qi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ii.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return a.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,r,o;ys.subVectors(n,i),Ms.subVectors(s,i),lc.subVectors(e,i);let l=ys.dot(lc),c=Ms.dot(lc);if(l<=0&&c<=0)return t.copy(i);cc.subVectors(e,n);let h=ys.dot(cc),u=Ms.dot(cc);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(i).addScaledVector(ys,r);hc.subVectors(e,s);let f=ys.dot(hc),g=Ms.dot(hc);if(g>=0&&f<=g)return t.copy(s);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ms,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Du.subVectors(s,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Du,o);let m=1/(p+b+d);return r=b*m,o=d*m,t.copy(i).addScaledVector(ys,r).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Li):Li.fromBufferAttribute(s,r),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Ra.subVectors(this.max,br),Ss.subVectors(e.a,br),ws.subVectors(e.b,br),Ts.subVectors(e.c,br),wn.subVectors(ws,Ss),Tn.subVectors(Ts,ws),zn.subVectors(Ss,Ts);let t=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!pc(t,Ss,ws,Ts,Ra)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,Ss,ws,Ts,Ra))?!1:(Ca.crossVectors(wn,Tn),t=[Ca.x,Ca.y,Ca.z],pc(t,Ss,ws,Ts,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tn=[new A,new A,new A,new A,new A,new A,new A,new A],Li=new A,Aa=new vi,Ss=new A,ws=new A,Ts=new A,wn=new A,Tn=new A,zn=new A,br=new A,Ra=new A,Ca=new A,Hn=new A;function pc(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){Hn.fromArray(a,s);let o=n.x*Math.abs(Hn.x)+n.y*Math.abs(Hn.y)+n.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=i.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new A,Pa=new Ae,Op=0,wt=class extends Di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=e!==void 0?bl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lh(e,this.array)}};var Nr=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var kr=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bp=new vi,xr=new A,mc=new A,ui=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(xr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(mc)),this.expandByPoint(xr.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zp=0,Mi=new Ge,gc=new gt,Es=new A,xi=new vi,_r=new vi,Xt=new A,Lt=class a extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?kr:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(xi.min,_r.min),xi.expandByPoint(Xt),Xt.addVectors(xi.max,_r.max),xi.expandByPoint(Xt)):(xi.expandByPoint(_r.min),xi.expandByPoint(_r.max))}xi.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Xt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Xt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Xt.add(Es)),n=Math.max(n,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new A,l[P]=new A;let h=new A,u=new A,d=new A,f=new Ae,g=new Ae,b=new Ae,p=new A,m=new A;function _(P,C,D){c[P]=c[C]=c[D]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),f.fromBufferAttribute(s,P),g.fromBufferAttribute(s,C),b.fromBufferAttribute(s,D),u.sub(h),d.sub(h),g.sub(f),b.sub(f);let k=1/(g.x*b.y-b.x*g.y);isFinite(k)&&(p.copy(u).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(k),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-b.x).multiplyScalar(k),o[P].add(p),o[C].add(p),o[D].add(p),l[P].add(m),l[C].add(m),l[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,C=M.length;P<C;++P){let D=M[P],k=D.start,V=D.count;for(let L=k,q=k+V;L<q;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new A,w=new A,v=new A,x=new A;function S(P){v.fromBufferAttribute(n,P),x.copy(v);let C=o[P];y.copy(C),y.sub(v.multiplyScalar(v.dot(C))).normalize(),w.crossVectors(x,C);let k=w.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,k)}for(let P=0,C=i.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new A,s=new A,r=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,p),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Nu(a){return a.buffer._uuid===void 0&&(a.buffer._uuid=qi()),a.byteOffset===0&&a.byteLength===a.buffer.byteLength?a.buffer._uuid:a.buffer._uuid+":"+a.byteOffset+":"+a.byteLength}var ai=new A,Cn=class a{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?bl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lh(e,this.data.array)}},bc=new A,Hp=new A,Gp=new Be,Fi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=bc.subVectors(i,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(bc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gp.getNormalMatrix(e),n=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vp=0,ni=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Qs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=Bc,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,vr=new A,Rs=new A,Cs=new A,Ps=new Ae,yr=new Ae,jd=new Ge,Ia=new A,Mr=new A,La=new A,ku=new Ae,xc=new Ae,Uu=new Ae,$n=class extends gt{constructor(e=new Pn){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zn(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Cn(i,3,0,!1)),As.setAttribute("uv",new Cn(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let r=this.center;Fa(Ia.set(-.5,-.5,0),Cs,r,Rs,n,s),Fa(Mr.set(.5,-.5,0),Cs,r,Rs,n,s),Fa(La.set(.5,.5,0),Cs,r,Rs,n,s),ku.set(0,0),xc.set(1,0),Uu.set(1,1);let o=e.ray.intersectTriangle(Ia,Mr,La,!1,vr);if(o===null&&(Fa(Mr.set(-.5,.5,0),Cs,r,Rs,n,s),xc.set(0,1),o=e.ray.intersectTriangle(Ia,La,Mr,!1,vr),o===null))return;let l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:rn.getInterpolation(vr,Ia,Mr,La,ku,xc,Uu,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fa(a,e,t,i,n,s){Ps.subVectors(a,t).addScalar(.5).multiply(i),n!==void 0?(yr.x=s*Ps.x-n*Ps.y,yr.y=n*Ps.x+s*Ps.y):yr.copy(Ps),a.copy(e),a.x+=yr.x,a.y+=yr.y,a.applyMatrix4(jd)}var nn=new A,_c=new A,Da=new A,Na=new A,Qn=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_c.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(_c);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Da),o=Na.dot(this.direction),l=-Na.dot(Da),c=Na.lengthSq(),h=Math.abs(1-r*r),u,d,f,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(_c).addScaledVector(Da,d),f}intersectSphere(e,t){if(e.radius<0)return null;nn.subVectors(e.center,this.origin);let i=nn.dot(this.direction),n=nn.dot(nn)-i*i,s=e.radius*e.radius;if(n>s)return null;let r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,n,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,f=e.z-r.z,g=t.x-r.x,b=t.y-r.y,p=t.z-r.z,m=i.x-r.x,_=i.y-r.y,M=i.z-r.z,y=Math.abs(l),w=Math.abs(c),v=Math.abs(h),x,S,P,C,D,k,V,L,q,O,G,ie;if(y>=w&&y>=v?(P=l,k=u,q=g,ie=m,l>=0?(x=c,S=h,C=d,D=f,V=b,L=p,O=_,G=M):(x=h,S=c,C=f,D=d,V=p,L=b,O=M,G=_)):w>=v?(P=c,k=d,q=b,ie=_,c>=0?(x=h,S=l,C=f,D=u,V=p,L=g,O=M,G=m):(x=l,S=h,C=u,D=f,V=g,L=p,O=m,G=M)):(P=h,k=f,q=p,ie=M,h>=0?(x=l,S=c,C=u,D=d,V=g,L=b,O=m,G=_):(x=c,S=l,C=d,D=u,V=b,L=g,O=_,G=m)),P===0)return null;let W=x/P,j=S/P,ee=1/P,ce=C-W*k,ke=D-j*k,K=V-W*q,me=L-j*q,ye=O-W*ie,Ce=G-j*ie,ge=ye*me-Ce*K,Ue=ce*Ce-ke*ye,bt=K*ke-me*ce;if(n){if(ge<0||Ue<0||bt<0)return null}else if((ge<0||Ue<0||bt<0)&&(ge>0||Ue>0||bt>0))return null;let Fe=ge+Ue+bt;if(Fe===0)return null;let st=ee*(ge*k+Ue*q+bt*ie);return(Fe>0?st<0:st>0)?null:this.at(st/Fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ou=new Ge,Gn=new Qn,ka=new ui,Bu=new A,Ua=new A,Oa=new A,Ba=new A,vc=new A,za=new A,zu=new A,Ha=new A,Xe=class extends gt{constructor(e=new Lt,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(vc.fromBufferAttribute(u,e),r?za.addScaledVector(vc,h):za.addScaledVector(vc.sub(t),h))}t.add(za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(ka.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ka,Bu)===null||Gn.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,i){let n,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let p=d[g],m=r[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,w=M;y<w;y+=3){let v=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);n=Ga(this,m,e,i,c,h,u,v,x,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let _=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);n=Ga(this,r,e,i,c,h,u,_,M,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let p=d[g],m=r[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,w=M;y<w;y+=3){let v=y,x=y+1,S=y+2;n=Ga(this,m,e,i,c,h,u,v,x,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let _=p,M=p+1,y=p+2;n=Ga(this,r,e,i,c,h,u,_,M,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function Wp(a,e,t,i,n,s,r,o){let l;if(e.side===Zt?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side===Vi,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:a}}function Ga(a,e,t,i,n,s,r,o,l,c){a.getVertexPosition(o,Ua),a.getVertexPosition(l,Oa),a.getVertexPosition(c,Ba);let h=Wp(a,e,t,i,Ua,Oa,Ba,zu);if(h){let u=new A;rn.getBarycoord(zu,Ua,Oa,Ba,u),n&&(h.uv=rn.getInterpolatedAttribute(n,o,l,c,u,new Ae)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,l,c,u,new Ae)),r&&(h.normal=rn.getInterpolatedAttribute(r,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};rn.getNormal(Ua,Oa,Ba,d.normal),h.face=d,h.barycoord=u}return h}var Sr=new ht,Hu=new ht,Gu=new ht,qp=new ht,Vu=new Ge,Va=new A,yc=new ui,Wu=new Ge,Mc=new Qn,Ur=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ec,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Va),this.boundingBox.expandByPoint(Va)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Va),this.boundingSphere.expandByPoint(Va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yc.copy(this.boundingSphere),yc.applyMatrix4(n),e.ray.intersectsSphere(yc)!==!1&&(Wu.copy(n).invert(),Mc.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&Mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Hu.fromBufferAttribute(n.attributes.skinIndex,e),Gu.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Sr.copy(t),t.set(0,0,0,0)):(Sr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Sr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=Gu.getComponent(s);if(r!==0){let o=Hu.getComponent(s);Vu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(qp.copy(Sr).applyMatrix4(Vu),r)}}return t.isVector4&&(t.w=Sr.w),t.applyMatrix4(this.bindMatrixInverse)}},Vs=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ws=class extends zt{constructor(e=null,t=1,i=1,n,s,r,o,l,c=It,h=It,u,d){super(null,r,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qu=new Ge,Xp=new Ge,Or=class a{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:Xp;qu.multiplyMatrices(o,t[s]),qu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ws(t,e,e,Ei,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],r=t[s];r===void 0&&(Re("Skeleton: No bone found with UUID:",s),r=new Vs),this.bones.push(r),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let r=t[n];e.bones.push(r.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},ln=class extends wt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Ge,Xu=new Ge,Wa=[],ju=new vi,jp=new Ge,wr=new Xe,Tr=new ui,es=class extends Xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ln(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),ju.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),Tr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),e.ray.intersectsSphere(Tr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Is),Xu.multiplyMatrices(i,Is),wr.matrixWorld=Xu,wr.raycast(e,Wa);for(let r=0,o=Wa.length;r<o;r++){let l=Wa[r];l.instanceId=s,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ln(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(n*this.count),n,this.count,ko,yi));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vn=new ui,Kp=new Ae(.5,.5),qa=new A,In=class{constructor(e=new Fi,t=new Fi,i=new Fi,n=new Fi,s=new Fi,r=new Fi){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi,i=!1){let n=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],b=s[9],p=s[10],m=s[11],_=s[12],M=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-r,f-h,m-g,w-_).normalize(),n[1].setComponents(c+r,f+h,m+g,w+_).normalize(),n[2].setComponents(c+o,f+u,m+b,w+M).normalize(),n[3].setComponents(c-o,f-u,m-b,w-M).normalize(),i)n[4].setComponents(l,d,p,y).normalize(),n[5].setComponents(c-l,f-d,m-p,w-y).normalize();else if(n[4].setComponents(c-l,f-d,m-p,w-y).normalize(),t===wi)n[5].setComponents(c+l,f+d,m+p,w+y).normalize();else if(t===Os)n[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);let t=Kp.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(qa.x=n.normal.x>0?e.max.x:e.min.x,qa.y=n.normal.y>0?e.max.y:e.min.y,qa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ku=new Ge,ho=class a{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];Ku.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new In),i[n].setFromProjectionMatrix(Ku,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new In),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new a().copy(this)}};var qs=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new A,fo=new A,Ju=new Ge,Er=new Qn,Xa=new ui,Sc=new A,Yu=new A,ts=class extends gt{constructor(e=new Lt,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)uo.fromBufferAttribute(t,n-1),fo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new Tt(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(n),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Ju.copy(n).invert(),Er.copy(e.ray).applyMatrix4(Ju);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let b=f,p=g-1;b<p;b+=c){let m=h.getX(b),_=h.getX(b+1),M=ja(this,e,Er,l,m,_,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(g-1),p=h.getX(f),m=ja(this,e,Er,l,b,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let b=f,p=g-1;b<p;b+=c){let m=ja(this,e,Er,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=ja(this,e,Er,l,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ja(a,e,t,i,n,s,r){let o=a.geometry.attributes.position;if(uo.fromBufferAttribute(o,n),fo.fromBufferAttribute(o,s),t.distanceSqToSegment(uo,fo,Sc,Yu)>i)return;Sc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(Sc);if(!(c<e.near||c>e.far))return{distance:c,point:Yu.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var Zu=new A,$u=new A,Br=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Zu.fromBufferAttribute(t,n),$u.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Zu.distanceTo($u);e.setAttribute("lineDistance",new Tt(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},zr=class extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qu=new Ge,Rc=new Qn,Ka=new ui,Ja=new A,is=class extends gt{constructor(e=new Lt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(n),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;Qu.copy(n).invert(),Rc.copy(e.ray).applyMatrix4(Qu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,b=f;g<b;g++){let p=c.getX(g);Ja.fromBufferAttribute(u,p),ed(Ja,p,l,n,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,b=f;g<b;g++)Ja.fromBufferAttribute(u,g),ed(Ja,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ed(a,e,t,i,n,s,r){let o=Rc.distanceSqToPoint(a);if(o<t){let l=new A;Rc.closestPointToPoint(a,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Hr=class extends zt{constructor(e=[],t=ls,i,n,s,r,o,l,c,h){super(e,t,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},js=class extends zt{constructor(e,t,i,n,s,r,o,l,c){super(e,t,i,n,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cn=class extends zt{constructor(e,t,i=Ni,n,s,r,o=It,l=It,c,h=on,u=1){if(h!==on&&h!==bn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gr=class extends cn{constructor(e,t=Ni,i=ls,n,s,r=It,o=It,l,c=on){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vr=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ln=class a extends Lt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(b,p,m,_,M,y,w,v,x,S,P){let C=y/x,D=w/S,k=y/2,V=w/2,L=v/2,q=x+1,O=S+1,G=0,ie=0,W=new A;for(let j=0;j<O;j++){let ee=j*D-V;for(let ce=0;ce<q;ce++){let ke=ce*C-k;W[b]=ke*_,W[p]=ee*M,W[m]=L,c.push(W.x,W.y,W.z),W[b]=0,W[p]=0,W[m]=v>0?1:-1,h.push(W.x,W.y,W.z),u.push(ce/x),u.push(1-j/S),G+=1}}for(let j=0;j<S;j++)for(let ee=0;ee<x;ee++){let ce=d+ee+q*j,ke=d+ee+q*(j+1),K=d+(ee+1)+q*(j+1),me=d+(ee+1)+q*j;l.push(ce,ke,me),l.push(ke,K,me),ie+=6}o.addGroup(f,ie,P),f+=ie,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wr=class a extends Lt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,b=[],p=i/2,m=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function _(){let y=new A,w=new A,v=0,x=(t-e)/i;for(let S=0;S<=s;S++){let P=[],C=S/s,D=C*(t-e)+e;for(let k=0;k<=n;k++){let V=k/n,L=V*l+o,q=Math.sin(L),O=Math.cos(L);w.x=D*q,w.y=-C*i+p,w.z=D*O,u.push(w.x,w.y,w.z),y.set(q,x,O).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-C),P.push(g++)}b.push(P)}for(let S=0;S<n;S++)for(let P=0;P<s;P++){let C=b[P][S],D=b[P+1][S],k=b[P+1][S+1],V=b[P][S+1];(e>0||P!==0)&&(h.push(C,D,V),v+=3),(t>0||P!==s-1)&&(h.push(D,k,V),v+=3)}c.addGroup(m,v,0),m+=v}function M(y){let w=g,v=new Ae,x=new A,S=0,P=y===!0?e:t,C=y===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let k=0;k<=n;k++){let L=k/n*l+o,q=Math.cos(L),O=Math.sin(L);x.x=P*O,x.y=p*C,x.z=P*q,u.push(x.x,x.y,x.z),d.push(0,C,0),v.x=q*.5+.5,v.y=O*.5*C+.5,f.push(v.x,v.y),g++}for(let k=0;k<n;k++){let V=w+k,L=D+k;y===!0?h.push(L,L+1,V):h.push(L+1,L,V),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yt=class a extends Lt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],b=[],p=[];for(let m=0;m<h;m++){let _=m*d-r;for(let M=0;M<c;M++){let y=M*u-s;g.push(y,-_,0),b.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let M=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),v=_+1+c*m;f.push(M,y,v),f.push(y,w,v)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}};var qr=class a extends Lt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],b=[],p=[];for(let m=0;m<=i;m++){let _=[],M=m/i,y=r+M*o,w=e*Math.cos(y),v=Math.sqrt(e*e-w*w),x=0;m===0&&r===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let P=S/t,C=n+P*s;u.x=-v*Math.cos(C),u.y=w,u.z=v*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),p.push(P+x,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let M=h[m][_+1],y=h[m][_],w=h[m+1][_],v=h[m+1][_+1];(m!==0||r>0)&&f.push(M,y,v),(m!==i-1||l<Math.PI)&&f.push(y,w,v)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ks=class a extends Lt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new A,f=new A,g=new A;for(let b=0;b<=i;b++){let p=r+b/i*o;for(let m=0;m<=n;m++){let _=m/n*s;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/n),u.push(b/i)}}for(let b=1;b<=i;b++)for(let p=1;p<=n;p++){let m=(n+1)*b+p-1,_=(n+1)*(b-1)+p-1,M=(n+1)*(b-1)+p,y=(n+1)*b+p;l.push(m,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ds(a){let e={};for(let t in a){e[t]={};for(let i in a[t]){let n=a[t][i];if(td(n))n.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(td(n[0])){let s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function si(a){let e={};for(let t=0;t<a.length;t++){let i=ds(a[t]);for(let n in i)e[n]=i[n]}return e}function td(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Jp(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ch(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Kd={clone:ds,merge:si},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Me().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ge().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zi=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},li=class extends zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xr=class extends ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mo=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},go=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function An(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Ar(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function $p(a){function e(n,s){return a[n]-a[s]}let t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function id(a,e,t){let i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[r++]=a[o+l]}return n}function Qp(a,e,t,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=a[n++];while(s!==void 0)}var Hi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bo=class extends Hi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wn,endingEnd:Wn}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,r=e+1,o=n[s],l=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case qn:s=e,o=2*t-i;break;case Pr:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qn:r=e,l=2*i-t;break;case Pr:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),b=g*g,p=b*g,m=-d*p+2*d*b-d*g,_=(1+d)*p+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*b+.5*g,y=f*p-f*b;for(let w=0;w!==o;++w)s[w]=m*r[h+w]+_*r[c+w]+M*r[l+w]+y*r[u+w];return s}},jr=class extends Hi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}},xo=class extends Hi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends Hi{interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),b=1-g;for(let p=0;p!==o;++p)s[p]=r[c+p]*b+r[l+p]*g;return s}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let b=r[c+g],p=r[l+g],m=f*d+g*2,_=u[m],M=u[m+1],y=e*d+g*2,w=h[y],v=h[y+1],x=tm(i,t,_,w,n);s[g]=Jd(x,b,M,v,p)}return s}};function Jd(a,e,t,i,n){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*i+a*a*a*n}function em(a,e,t,i,n){let s=1-a;return 3*s*s*(t-e)+6*s*a*(i-t)+3*a*a*(n-i)}function tm(a,e,t,i,n){let s=(a-e)/(n-e);for(let r=0;r<8;r++){let o=Jd(s,e,t,i,n)-a;if(Math.abs(o)<1e-10)break;let l=em(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var fi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=An(t,this.TimeBufferType),this.values=An(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:An(e.times,Array),values:An(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Ar(e.settings)&&(i.settings={inTangents:An(e.settings.inTangents,Array),outTangents:An(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jn:t=this.InterpolantFactoryMethodDiscrete;break;case Kn:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case Ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jn;case this.InterpolantFactoryMethodLinear:return Kn;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Ar(this.settings)&&(nd(this.settings.inTangents,e),nd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Ar(this.settings)&&(sd(this.settings.inTangents,e),sd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(n!==void 0&&dp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$a,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let u=o*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Ar(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function nd(a,e){for(let t=0,i=a.length;t!==i;t+=2)a[t]+=e}function sd(a,e){for(let t=0,i=a.length;t!==i;t+=2)a[t]*=e}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Kn;var hn=class extends fi{constructor(e,t,i){super(e,t,i)}};hn.prototype.ValueTypeName="bool";hn.prototype.ValueBufferType=Array;hn.prototype.DefaultInterpolation=jn;hn.prototype.InterpolantFactoryMethodLinear=void 0;hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};Kr.prototype.ValueTypeName="color";var un=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};un.prototype.ValueTypeName="number";var vo=class extends Hi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(s,0,r,c-o,r,c,l);return s}},dn=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};dn.prototype.ValueTypeName="quaternion";dn.prototype.InterpolantFactoryMethodSmooth=void 0;var fn=class extends fi{constructor(e,t,i){super(e,t,i)}};fn.prototype.ValueTypeName="string";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=jn;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};Fn.prototype.ValueTypeName="vector";var ns=class{constructor(e="",t=-1,i=[],n=gl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(nm(i[r]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=i.length;s!==r;++s)t.push(fi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=$p(l);l=id(l,1,h),c=id(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new un(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let r=[];for(let o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return r}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function im(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return un;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return Kr;case"quaternion":return dn;case"bool":case"boolean":return hn;case"string":return fn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function nm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=im(a.type);if(a.times===void 0){let i=[],n=[];Qp(a.keys,i,n,"value"),a.times=i,a.values=n}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),Ar(a.settings)&&(t.settings={inTangents:An(a.settings.inTangents,Float32Array),outTangents:An(a.settings.outTangents,Float32Array)}),t}var Oi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(rd(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!rd(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function rd(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yo=class{constructor(e,t,i){let n=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new yo,Gi=class{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var sn={},Cc=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends Gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Oi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(sn[e]!==void 0){sn[e].push({onLoad:t,onProgress:i,onError:n});return}sn[e]=[],sn[e].push({onLoad:t,onProgress:i,onError:n});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=sn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,p=new ReadableStream({start(m){_();function _(){u.read().then(({done:M,value:y})=>{if(M)m.close();else{b+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let v=0,x=h.length;v<x;v++){let S=h[v];S.onProgress&&S.onProgress(w)}m.enqueue(y),_()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Cc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Oi.add(`file:${e}`,c);let h=sn[e];delete sn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=sn[e];if(h===void 0)throw this.manager.itemError(e),c;delete sn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=new WeakMap,Mo=class extends Gi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Oi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Ls.get(r);u===void 0&&(u=[],Ls.set(r,u)),u.push({onLoad:t,onError:n})}return r}let o=Bs("img");function l(){h(),t&&t(this);let u=Ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),Oi.remove(`image:${e}`);let d=Ls.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Jr=class extends Gi{constructor(e){super(e)}load(e,t,i,n){let s=new zt,r=new Mo(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},ss=class extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yr=class extends ss{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wc=new Ge,ad=new A,od=new A,Ys=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new In,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===Os||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new A,Za=new mt,Ui=new A,Zr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Za,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ya,Za,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},En=new A,ld=new Ae,cd=new Ae,Ot=class extends Zr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pc=class extends Ys{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Jn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},$r=class extends ss{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ic=class extends Ys{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends ss{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},as=class extends Zr{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lc=class extends Ys{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pn=class extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Lc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var mn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Tc=new WeakMap,Qr=class extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Oi.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{Tc.has(r)===!0?(n&&n(Tc.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Tc.set(l,c),Oi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fs=-90,Ds=1,Zs=class extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ot(Fs,Ds,e,t);n.layers=this.layers,this.add(n);let s=new Ot(Fs,Ds,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Fs,Ds,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Fs,Ds,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Fs,Ds,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Fs,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,o,l]=t;for(let c of t)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},So=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wo=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){mt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let r=this._workIndex*s;mt.multiplyQuaternionsFlat(e,r,e,t,e,i),mt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){let r=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*r+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[i+r]*n}}},hh="\\[\\]\\.:\\/",sm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",rm="[^"+hh.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",uh),om=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),hm=new RegExp("^"+am+om+lm+cm+"$"),um=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let n=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class a{constructor(e,t,i){this.path=t,this.parsedPath=i||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,i):new a(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(e){let t=hm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);um.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[n];if(r===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Fc;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var To=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,r=s.length,o=new Array(r),l={endingStart:Wn,endingEnd:Wn};for(let c=0;c!==r;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Id,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,s=e._clip.duration,r=s/n,o=n/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case gl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,r=i===Ld;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===ua){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=qn,n.endingEnd=qn):(e?n.endingStart=this.zeroSlopeAtStart?qn:Wn:n.endingStart=Pr,t?n.endingEnd=this.zeroSlopeAtEnd?qn:Wn:n.endingEnd=Pr)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},dm=new Float32Array(1),ea=class extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=n[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new wo(ft.create(i,f,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new jr(new Float32Array(2),new Float32Array(2),1,dm),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,r=typeof e=="string"?ns.findByName(n,e):e,o=r!==null?r.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=gl),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let h=new To(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?ns.findByName(i,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){let c=r[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let o=i[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var bh=class bh{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};bh.prototype.isMatrix2=!0;var Dc=bh;function dh(a,e,t,i){let n=fm(i);switch(t){case Zc:return a*e;case ko:return a*e/n.components*n.byteLength;case Uo:return a*e/n.components*n.byteLength;case Dn:return a*e*2/n.components*n.byteLength;case Oo:return a*e*2/n.components*n.byteLength;case $c:return a*e*3/n.components*n.byteLength;case Ei:return a*e*4/n.components*n.byteLength;case Bo:return a*e*4/n.components*n.byteLength;case ra:case aa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Vo:return Math.max(a,16)*Math.max(e,8)/4;case zo:case Go:return Math.max(a,8)*Math.max(e,8)/2;case Wo:case qo:case jo:case Ko:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xo:case ca:case Jo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ha:case ml:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fm(a){switch(a){case pi:case jc:return{byteLength:1,components:1};case ir:case Kc:case ki:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case Ni:case Fo:case yi:return{byteLength:4,components:1};case Jc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _f(){let a=null,e=!1,t=null,i=null;function n(s,r){i=a.requestAnimationFrame(n),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function mm(a){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];a.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:r}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:gm,alphahash_pars_fragment:bm,alphamap_fragment:xm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:ym,aomap_fragment:Mm,aomap_pars_fragment:Sm,batching_pars_vertex:wm,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:Am,bsdfs:Rm,iridescence_fragment:Cm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Dm,color_fragment:Nm,color_pars_fragment:km,color_pars_vertex:Um,color_vertex:Om,common:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Gm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Wm,colorspace_fragment:qm,colorspace_pars_fragment:Xm,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Jm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:o0,envmap_vertex:Zm,fog_vertex:$m,fog_pars_vertex:Qm,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:n0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:a0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:y0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:w0,map_particle_pars_fragment:T0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:A0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:F0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:k0,normal_vertex:U0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:G0,opaque_fragment:V0,packing:W0,premultiplied_alpha_fragment:q0,project_vertex:X0,dithering_fragment:j0,dithering_pars_fragment:K0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:$0,shadowmap_vertex:Q0,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ig,skinning_vertex:ng,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:ag,tonemapping_fragment:og,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:bg,backgroundCube_frag:xg,cube_vert:_g,cube_frag:vg,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:wg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Fg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:kg,meshphong_vert:Ug,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:Hg,meshtoon_frag:Gg,points_vert:Vg,points_frag:Wg,shadow_vert:qg,shadow_frag:Xg,sprite_vert:jg,sprite_frag:Kg},_e={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ji={basic:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:si([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:si([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:si([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Me(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:si([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:si([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:si([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:si([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:si([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:si([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:si([_e.common,_e.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:si([_e.lights,_e.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ji.physical={uniforms:si([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var xl={r:0,b:0,g:0},Jg=new Ge,vf=new Be;vf.set(-1,0,0,0,1,0,0,0,1);function Yg(a,e,t,i,n,s){let r=new Me(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1,y=f(_);y===null?p(r,o):y&&y.isColor&&(p(y,1),M=!0);let w=a.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(_,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Xe(new Ln(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ds(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,v,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vf),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==lt,(h!==y||u!==y.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=a.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xe(new Yt(2,2),new vt({name:"BackgroundMaterial",uniforms:ds(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=a.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(xl,ch(a)),t.buffers.color.setClear(xl.r,xl.g,xl.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(r,o)},render:g,addToRenderList:b,dispose:m}}function Zg(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,r=!1;function o(D,k,V,L,q){let O=!1,G=u(D,L,V,k);s!==G&&(s=G,c(s.object)),O=f(D,L,V,q),O&&g(D,L,V,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,y(D,k,V,L),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return a.createVertexArray()}function c(D){return a.bindVertexArray(D)}function h(D){return a.deleteVertexArray(D)}function u(D,k,V,L){let q=L.wireframe===!0,O=i[k.id];O===void 0&&(O={},i[k.id]=O);let G=D.isInstancedMesh===!0?D.id:0,ie=O[G];ie===void 0&&(ie={},O[G]=ie);let W=ie[V.id];W===void 0&&(W={},ie[V.id]=W);let j=W[q];return j===void 0&&(j=d(l()),W[q]=j),j}function d(D){let k=[],V=[],L=[];for(let q=0;q<t;q++)k[q]=0,V[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,k,V,L){let q=s.attributes,O=k.attributes,G=0,ie=V.getAttributes();for(let W in ie)if(ie[W].location>=0){let ee=q[W],ce=O[W];if(ce===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function g(D,k,V,L){let q={},O=k.attributes,G=0,ie=V.getAttributes();for(let W in ie)if(ie[W].location>=0){let ee=O[W];ee===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),q[W]=ce,G++}s.attributes=q,s.attributesNum=G,s.index=L}function b(){let D=s.newAttributes;for(let k=0,V=D.length;k<V;k++)D[k]=0}function p(D){m(D,0)}function m(D,k){let V=s.newAttributes,L=s.enabledAttributes,q=s.attributeDivisors;V[D]=1,L[D]===0&&(a.enableVertexAttribArray(D),L[D]=1),q[D]!==k&&(a.vertexAttribDivisor(D,k),q[D]=k)}function _(){let D=s.newAttributes,k=s.enabledAttributes;for(let V=0,L=k.length;V<L;V++)k[V]!==D[V]&&(a.disableVertexAttribArray(V),k[V]=0)}function M(D,k,V,L,q,O,G){G===!0?a.vertexAttribIPointer(D,k,V,q,O):a.vertexAttribPointer(D,k,V,L,q,O)}function y(D,k,V,L){b();let q=L.attributes,O=V.getAttributes(),G=k.defaultAttributeValues;for(let ie in O){let W=O[ie];if(W.location>=0){let j=q[ie];if(j===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let ee=j.normalized,ce=j.itemSize,ke=e.get(j);if(ke===void 0)continue;let K=ke.buffer,me=ke.type,ye=ke.bytesPerElement,Ce=me===a.INT||me===a.UNSIGNED_INT||j.gpuType===Fo;if(j.isInterleavedBufferAttribute){let ge=j.data,Ue=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,bt=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe,ge.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe);a.bindBuffer(a.ARRAY_BUFFER,K);for(let Fe=0;Fe<W.locationSize;Fe++)M(W.location+Fe,ce/W.locationSize,me,ee,Ue*ye,(bt+ce/W.locationSize*Fe)*ye,Ce)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<W.locationSize;ge++)m(W.location+ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<W.locationSize;ge++)p(W.location+ge);a.bindBuffer(a.ARRAY_BUFFER,K);for(let ge=0;ge<W.locationSize;ge++)M(W.location+ge,ce/W.locationSize,me,ee,ce*ye,ce/W.locationSize*ge*ye,Ce)}}else if(G!==void 0){let ee=G[ie];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(W.location,ee);break;case 3:a.vertexAttrib3fv(W.location,ee);break;case 4:a.vertexAttrib4fv(W.location,ee);break;default:a.vertexAttrib1fv(W.location,ee)}}}}_()}function w(){P();for(let D in i){let k=i[D];for(let V in k){let L=k[V];for(let q in L){let O=L[q];for(let G in O)h(O[G].object),delete O[G];delete L[q]}}delete i[D]}}function v(D){if(i[D.id]===void 0)return;let k=i[D.id];for(let V in k){let L=k[V];for(let q in L){let O=L[q];for(let G in O)h(O[G].object),delete O[G];delete L[q]}}delete i[D.id]}function x(D){for(let k in i){let V=i[k];for(let L in V){let q=V[L];if(q[D.id]===void 0)continue;let O=q[D.id];for(let G in O)h(O[G].object),delete O[G];delete q[D.id]}}}function S(D){for(let k in i){let V=i[k],L=D.isInstancedMesh===!0?D.id:0,q=V[L];if(q!==void 0){for(let O in q){let G=q[O];for(let ie in G)h(G[ie].object),delete G[ie];delete q[O]}delete V[L],Object.keys(V).length===0&&delete i[k]}}}function P(){C(),r=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:p,disableUnusedAttributes:_}}function $g(a,e,t){let i;function n(l){i=l}function s(l,c){a.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,h){h!==0&&(a.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Qg(a,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){return!(x!==Ei&&i.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==pi&&x!==yi&&!S&&i.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),_=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=a.getParameter(a.MAX_SAMPLES),v=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:v}}function eb(a){let e=this,t=null,i=0,n=!1,s=!1,r=new Fi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{let _=s?0:i,M=_*4,y=m.clippingState||null;l.value=y,y=h(g,d,M,f);for(let w=0;w!==M;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=l.value,g!==!0||p===null){let m=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,y=f;M!==b;++M,y+=4)r.copy(u[M]).applyMatrix4(_,o),r.normal.toArray(p,y),p[y+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}var ga=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Hr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ln(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:os});s.uniforms.tEquirect.value=t;let r=new Xe(n,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Bt),new Zs(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}},Zd=256,tb=3,ib=20,yf=256,Mf=16,nb=3,sb=new A,rb=new Me,rr=class a{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zs(1,10,null),this._boxMesh=new Xe(new Ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:r=256,position:o=sb}=s,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(rb));let p=new Zs(i,n,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Zd,ah(e))}_fromTexture(e,t){e.mapping===ls||e.mapping===er?this._setSize(e.image.length===0?Zd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=$d(e,!1,!1),i=Math.log2(e)-tb;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$d(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ls||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ab(),this._integrationMaterial=ob());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Mf);for(let r=0;r<=i;r++){let o=a.lodToRoughness(r,i);if(r>i-nb)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(yf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lb());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(s,0,i)}};function $d(a,e,t){return new ga(a,{minFilter:Ti,generateMipmaps:e,type:ki,colorSpace:oi,depthBuffer:t})}function ba(a,e,t){return new vt({name:a,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:Zt,blending:os,depthTest:!1,depthWrite:!1})}function ab(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ob(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lb(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ib}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qd(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ef(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cb(a){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Po||f===Io)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new ga(g.height);return b.fromEquirectangularTexture(a,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Po||f===Io,b=f===ls||f===er;if(g||b){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new rr(a)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||b&&_&&l(_)?(i===null&&(i=new rr(a)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Po?d.mapping=ls:f===Io&&(d.mapping=er),d}function l(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function hb(a){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=a.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Xn("WebGLRenderer: "+i+" extension not supported."),n}}}function ub(a,e,t,i){let n={},s=new WeakMap,r=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete n[g.id],r.unregister(g);let b=s.get(g);b&&(e.remove(b),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,b){return n[b.id]!==void 0||(b.addEventListener("dispose",o),n[b.id]=new WeakRef(b),r.register(b,b.id,b),t.memory.geometries++),b}function h(g){let b=g.attributes;for(let p in b)e.update(b[p],a.ARRAY_BUFFER)}function u(g){let b=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=b!==null?b.array.length:p.array.length/3-1,M=p.count>=65535?kr:Nr,y=new M(Math.ceil(_/3)*6,1),w=y.array;if(b!==null){let x=b.array;m=b.version;for(let S=0,P=0;S<_;S+=3){let C=x[S+0],D=x[S+1],k=x[S+2];w[P++]=C,w[P++]=D,w[P++]=D,w[P++]=k,w[P++]=k,w[P++]=C}}else{m=p.version;for(let x=0,S=0;x<_;x+=3){let P=x+0,C=x+1,D=x+2;w[S++]=P,w[S++]=C,w[S++]=C,w[S++]=D,w[S++]=D,w[S++]=P}}y.version=m;let v=s.get(g);v&&e.remove(v),s.set(g,y)}function d(g){let b=s.get(g);if(b){let p=g.index;p!==null&&b.version<p.version&&u(g)}else u(g);return s.get(g)}function f(){for(let g in n){let b=n[g].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function db(a,e,t){let i;function n(u){i=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,d){a.drawElements(i,d,s,u*r),t.update(d,i,1)}function c(u,d,f){f!==0&&(a.drawElementsInstanced(i,d,s,u*r,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let b=0;for(let p=0;p<f;p++)b+=d[p];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fb(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function pb(a,e,t){let i=new WeakMap,n=new ht;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let y=o.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let v=new Float32Array(y*w*4*u),x=new Fr(v,y,w,u);x.type=yi,x.needsUpdate=!0;let S=M*4;for(let C=0;C<u;C++){let D=p[C],k=m[C],V=_[C],L=y*w*4*C;for(let q=0;q<D.count;q++){let O=q*S;f===!0&&(n.fromBufferAttribute(D,q),v[L+O+0]=n.x,v[L+O+1]=n.y,v[L+O+2]=n.z,v[L+O+3]=0),g===!0&&(n.fromBufferAttribute(k,q),v[L+O+4]=n.x,v[L+O+5]=n.y,v[L+O+6]=n.z,v[L+O+7]=0),b===!0&&(n.fromBufferAttribute(V,q),v[L+O+8]=n.x,v[L+O+9]=n.y,v[L+O+10]=n.z,v[L+O+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:x,size:new Ae(y,w)},i.set(o,d),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function mb(a,e,t,i,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var gb={[zc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[sa]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function bb(a,e,t,i,n,s){let r=new _i(e,t,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Lt;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Xe(h,u),f=new as(-1,1,1,-1,0,1),g=null,b=null,p=!1,m,_=null,M=[],y=!1;this.setSize=function(w,v){r.setSize(w,v),o!==null&&o.setSize(w,v),l!==null&&l.setSize(w,v);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){M=w,y=M.length>0&&M[0].isRenderPass===!0;let v=r.width,x=r.height;M.length>0&&o===null&&(o=new _i(v,x,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new _i(v,x,{type:ki,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(P=>P.needsDepthTexture===!0);S!==(r.depthTexture!==null)&&(S===!0&&c===null&&(c=new cn(v,x),s===!0&&(c.format=bn,c.type=hs)),r.dispose(),r.depthTexture=S?c:null,r.resolveDepthBuffer=S,r.storeMultisampledDepthBuffer=S);for(let P=0;P<M.length;P++){let C=M[P];C.setSize&&C.setSize(v,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,v){if(p||w.toneMapping===Wi&&M.length===0)return!1;if(_=v,v!==null){let x=v.width,S=v.height;(r.width!==x||r.height!==S)&&this.setSize(x,S)}return y===!1&&w.setRenderTarget(r),m=w.toneMapping,w.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(w,v){w.toneMapping=m,p=!0;let x=r,S=o;for(let P=0;P<M.length;P++){let C=M[P];C.enabled!==!1&&(C.render(w,S,x,v),C.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==w.outputColorSpace||b!==w.toneMapping){g=w.outputColorSpace,b=w.toneMapping,u.defines={},Je.getTransfer(g)===lt&&(u.defines.SRGB_TRANSFER="");let P=gb[b];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(_),w.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Sf=new zt,wf=new cn(1,1),Tf=new Gr(1),Ef=new Fr,Af=new co,Rf=new Hr,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function ar(a,e,t){let i=a[0];if(i<=0||i>0)return a;let n=e*t,s=tf[n];if(s===void 0&&(s=new Float32Array(n),tf[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ht(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Gt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function yl(a,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function xb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function _b(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;a.uniform2fv(this.addr,e),Gt(t,e)}}function vb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;a.uniform3fv(this.addr,e),Gt(t,e)}}function yb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;a.uniform4fv(this.addr,e),Gt(t,e)}}function Mb(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;af.set(i),a.uniformMatrix2fv(this.addr,!1,af),Gt(t,i)}}function Sb(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;rf.set(i),a.uniformMatrix3fv(this.addr,!1,rf),Gt(t,i)}}function wb(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;sf.set(i),a.uniformMatrix4fv(this.addr,!1,sf),Gt(t,i)}}function Tb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Eb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;a.uniform2iv(this.addr,e),Gt(t,e)}}function Ab(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;a.uniform3iv(this.addr,e),Gt(t,e)}}function Rb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;a.uniform4iv(this.addr,e),Gt(t,e)}}function Cb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Pb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;a.uniform2uiv(this.addr,e),Gt(t,e)}}function Ib(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;a.uniform3uiv(this.addr,e),Gt(t,e)}}function Lb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;a.uniform4uiv(this.addr,e),Gt(t,e)}}function Ml(a){return a.version===0&&(a.compareFunction=ih,a.needsUpdate=!0),a}function Fb(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?s=Ml(wf):s=Sf,t.setTexture2D(e||s,n)}function Db(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Af,n)}function Nb(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_CUBE_SHADOW?s=Ml(Tf):s=Rf,t.setTextureCube(e||s,n)}function kb(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ef,n)}function Ub(a){switch(a){case 5126:return xb;case 35664:return _b;case 35665:return vb;case 35666:return yb;case 35674:return Mb;case 35675:return Sb;case 35676:return wb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return Pb;case 36295:return Ib;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return kb}}function Ob(a,e){a.uniform1fv(this.addr,e)}function Bb(a,e){let t=ar(e,this.size,2);a.uniform2fv(this.addr,t)}function zb(a,e){let t=ar(e,this.size,3);a.uniform3fv(this.addr,t)}function Hb(a,e){let t=ar(e,this.size,4);a.uniform4fv(this.addr,t)}function Gb(a,e){let t=ar(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Vb(a,e){let t=ar(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Wb(a,e){let t=ar(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function qb(a,e){a.uniform1iv(this.addr,e)}function Xb(a,e){a.uniform2iv(this.addr,e)}function jb(a,e){a.uniform3iv(this.addr,e)}function Kb(a,e){a.uniform4iv(this.addr,e)}function Jb(a,e){a.uniform1uiv(this.addr,e)}function Yb(a,e){a.uniform2uiv(this.addr,e)}function Zb(a,e){a.uniform3uiv(this.addr,e)}function $b(a,e){a.uniform4uiv(this.addr,e)}function Qb(a,e,t){let i=this.cache,n=e.length,s=yl(t,n);Ht(i,s)||(a.uniform1iv(this.addr,s),Gt(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=Ml(wf):r=Sf;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,s[o])}function ex(a,e,t){let i=this.cache,n=e.length,s=yl(t,n);Ht(i,s)||(a.uniform1iv(this.addr,s),Gt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Af,s[r])}function tx(a,e,t){let i=this.cache,n=e.length,s=yl(t,n);Ht(i,s)||(a.uniform1iv(this.addr,s),Gt(i,s));let r;this.type===a.SAMPLER_CUBE_SHADOW?r=Ml(Tf):r=Rf;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||r,s[o])}function ix(a,e,t){let i=this.cache,n=e.length,s=yl(t,n);Ht(i,s)||(a.uniform1iv(this.addr,s),Gt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ef,s[r])}function nx(a){switch(a){case 5126:return Ob;case 35664:return Bb;case 35665:return zb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Xb;case 35668:case 35672:return jb;case 35669:case 35673:return Kb;case 5125:return Jb;case 36294:return Yb;case 36295:return Zb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ix}}var vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}},yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function of(a,e){a.seq.push(e),a.map[e.id]=e}function sx(a,e,t){let i=a.name,n=i.length;for(xh.lastIndex=0;;){let s=xh.exec(i),r=xh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){of(t,c===void 0?new vh(o,a,e):new yh(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Mh(o),of(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);sx(o,l,this)}let n=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.id in t&&i.push(r)}return i}};function lf(a,e,t){let i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}var rx=37297,ax=0;function ox(a,e){let t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var cf=new Be;function lx(a){Je._getMatrix(cf,Je.workingColorSpace,a);let e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(a)){case Ir:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function hf(a,e,t){let i=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ox(a.getShaderSource(e),o)}else return s}function cx(a,e){let t=lx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var hx={[zc]:"Linear",[Hc]:"Reinhard",[Gc]:"Cineon",[sa]:"ACESFilmic",[Wc]:"AgX",[qc]:"Neutral",[Vc]:"Custom"};function ux(a,e){let t=hx[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new A;function dx(){Je.getLuminanceCoefficients(_l);let a=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function px(a){let e=[];for(let t in a){let i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mx(a,e){let t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=a.getActiveAttrib(e,n),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ma(a){return a!==""}function uf(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function df(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(a){return a.replace(gx,bx)}function bx(a,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(a){return a.replace(xx,_x)}function _x(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function pf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var vx={[ta]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function yx(a){return vx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mx={[er]:"ENVMAP_MODE_REFRACTION"};function Sx(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wx={[Co]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function Tx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":wx[a.combine]||"ENVMAP_BLENDING_NONE"}function Ex(a,e,t,i){let n=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,l=yx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Sx(t),u=Tx(t),d=fx(t),f=px(s),g=n.createProgram(),b,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(b=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?je.tonemapping_pars_fragment:"",t.toneMapping!==Wi?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),r=Sh(r),r=uf(r,t),r=df(r,t),o=Sh(o),o=uf(o,t),o=df(o,t),r=ff(r),o=ff(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+b+r,M=m+p+o,y=lf(n,n.VERTEX_SHADER,_),w=lf(n,n.FRAGMENT_SHADER,M);n.attachShader(g,y),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function v(C){if(a.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",k=n.getShaderInfoLog(y)||"",V=n.getShaderInfoLog(w)||"",L=D.trim(),q=k.trim(),O=V.trim(),G=!0,ie=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,y,w);else{let W=hf(n,y,"vertex"),j=hf(n,w,"fragment");Oe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+W+`
`+j)}else L!==""?Re("WebGLProgram: Program Info Log:",L):(q===""||O==="")&&(ie=!1);ie&&(C.diagnostics={runnable:G,programLog:L,vertexShader:{log:q,prefix:b},fragmentShader:{log:O,prefix:p}})}n.deleteShader(y),n.deleteShader(w),x=new sr(n,g),S=mx(n,g)}let x;this.getUniforms=function(){return x===void 0&&v(this),x};let S;this.getAttributes=function(){return S===void 0&&v(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(g,rx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}var Ax=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Th(e),t.set(e,i)),i}},Th=class{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}};function Rx(a){return a===Dn||a===ca||a===ha}function Cx(a,e,t,i,n,s){let r=new Dr,o=new wh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,P,C,D,k){let V=C.fog,L=D.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||q,O),ie=d[x.type],W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=j!==void 0?j.length:0,ce=0;L.morphAttributes.position!==void 0&&(ce=1),L.morphAttributes.normal!==void 0&&(ce=2),L.morphAttributes.color!==void 0&&(ce=3);let ke,K,me,ye;if(ie){let xe=ji[ie];ke=xe.vertexShader,K=xe.fragmentShader}else{ke=x.vertexShader,K=x.fragmentShader;let xe=o.getVertexShaderStage(x),ct=o.getFragmentShaderStage(x);o.update(x,xe,ct),me=xe.id,ye=ct.id}let Ce=a.getRenderTarget(),ge=a.state.buffers.depth.getReversed(),Ue=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,Fe=!!x.map,st=!!x.matcap,at=!!G,Ke=at&&G.isPMREMTexture===!0,Dt=!!x.aoMap,Rt=!!x.lightMap,Pt=!!x.bumpMap&&x.wireframe===!1,U=!!x.normalMap,te=!!x.displacementMap,De=!!x.emissiveMap,Ze=!!x.metalnessMap,ut=!!x.roughnessMap,Ct=x.anisotropy>0,N=x.clearcoat>0,Vt=x.diffuseRoughness>0,rt=x.dispersion>0,dt=x.retroreflectivity>0,ae=x.iridescence>0,xt=x.sheen>0,Ie=x.transmission>0,Ne=Ct&&!!x.anisotropyMap,R=N&&!!x.clearcoatMap,T=N&&!!x.clearcoatNormalMap,B=N&&!!x.clearcoatRoughnessMap,ne=Vt&&!!x.diffuseRoughnessMap,Q=ae&&!!x.iridescenceMap,oe=ae&&!!x.iridescenceThicknessMap,fe=xt&&!!x.sheenColorMap,Y=xt&&!!x.sheenRoughnessMap,Z=!!x.specularMap,he=!!x.specularColorMap,I=!!x.specularIntensityMap,$=Ie&&!!x.transmissionMap,J=Ie&&!!x.thicknessMap,ue=!!x.gradientMap,re=!!x.alphaMap,le=x.alphaTest>0,Pe=!!x.alphaHash,qe=!!x.extensions,se=Wi;x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(se=a.toneMapping);let Le=Ke?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,We={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:K,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,outputColorSpace:Ce===null?a.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:st,envMap:at,envMapMode:at&&G.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Le.length-1:null,envMapSize:Ke?Le[0].width:null,aoMap:Dt,lightMap:Rt,bumpMap:Pt,normalMap:U,displacementMap:te,emissiveMap:De,normalMapObjectSpace:U&&x.normalMapType===Nd,normalMapTangentSpace:U&&x.normalMapType===fa,packedNormalMap:U&&x.normalMapType===fa&&Rx(x.normalMap.format),metalnessMap:Ze,roughnessMap:ut,anisotropy:Ct,anisotropyMap:Ne,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:B,diffuseRoughness:Vt,diffuseRoughnessMap:ne,dispersion:rt,retroreflection:dt,iridescence:ae,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:xt,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:he,specularIntensityMap:I,transmission:Ie,transmissionMap:$,thicknessMap:J,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Qs&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Pe,combine:x.combine,mapUv:Fe&&f(x.map.channel),aoMapUv:Dt&&f(x.aoMap.channel),lightMapUv:Rt&&f(x.lightMap.channel),bumpMapUv:Pt&&f(x.bumpMap.channel),normalMapUv:U&&f(x.normalMap.channel),displacementMapUv:te&&f(x.displacementMap.channel),emissiveMapUv:De&&f(x.emissiveMap.channel),metalnessMapUv:Ze&&f(x.metalnessMap.channel),roughnessMapUv:ut&&f(x.roughnessMap.channel),anisotropyMapUv:Ne&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:he&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:re&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(U||Ct),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Fe||re),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&U===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:se,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function b(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(a.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.diffuseRoughness&&r.enable(25),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function _(x){let S=d[x.type],P;if(S){let C=ji[S];P=Kd.clone(C.uniforms)}else P=x.uniforms;return P}function M(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new Ex(a,S,x,n),c.push(P),h.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function v(){o.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:v}}function Px(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Ix(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function mf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function gf(){let a=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,b,p,m){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:p,group:m},a[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=r(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function l(d,f,g,b,p,m,_){_.reversedDepth===!0&&(p=-p);let M=o(d,f,g,b,p,m);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):t.push(M)}function c(d,f,g,b,p,m){let _=o(d,f,g,b,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?n.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Ix),i.length>1&&i.sort(f||mf),n.length>1&&n.sort(f||mf)}function u(){for(let d=e,f=a.length;d<f;d++){let g=a[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function Lx(){let a=new WeakMap;function e(i,n){let s=a.get(i),r;return s===void 0?(r=new gf,a.set(i,[r])):n>=s.length?(r=new gf,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Fx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new Me};break;case"SpotLight":t={position:new A,direction:new A,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new A,halfWidth:new A,halfHeight:new A};break}return a[e.id]=t,t}}}function Dx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Nx=0;function kx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Ux(a){let e=new Fx,t=Dx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let n=new A,s=new Ge,r=new Ge;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,b=0,p=0,m=0,_=0,M=0,y=0,w=0,v=0,x=0,S=0,P=0,C=0;c.sort(kx);for(let k=0,V=c.length;k<V;k++){let L=c[k],q=L.color,O=L.intensity,G=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Dn?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=q.r*O,u+=q.g*O,d+=q.b*O;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],O);C++}else if(L.isSunLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=ie;let ce=j.getViewportCount();for(let ke=0;ke<ce;ke++)i.sunShadowMatrix[b+ke]=j.getMatrix(ke),i.sunShadowCascade[b+ke]=j._cascadeData[ke];b+=ce,g++}i.sun[f]=W,f++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=L.shadow.matrix,w++}i.directional[p]=W,p++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(q).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;let j=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,j.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[_]=j.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=ie,x++}_++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(q).multiplyScalar(O),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=W,M++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=L.shadow.matrix,v++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(O),W.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[y]=W,y++}}M>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=C,i.version=Nx++)}function l(c,h){let u=0,d=0,f=0,g=0,b=0,p=0,m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let y=c[_];if(y.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),d++}else if(y.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function bf(a){let e=new Ux(a),t=[],i=[],n=[];function s(u){h.camera=u,t.length=0,i.length=0,n.length=0}function r(u){u.isLightProbeGrid?n.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Ox(a){let e=new WeakMap;function t(n,s=0){let r=e.get(n),o;return r===void 0?(o=new bf(a),e.set(n,[o])):s>=r.length?(o=new bf(a),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Gx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],xf=new Ge,pa=new A,_h=new A;function Vx(a,e,t){let i=new In,n=new Ae,s=new Ae,r=new ht,o=new mo,l=new go,c={},h=t.maxTextureSize,u={[Vi]:Zt,[Zt]:Vi,[Ut]:Ut},d=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Bx,fragmentShader:zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Xe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let m=this.type;this.render=function(v,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===dd&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let P=a.getRenderTarget(),C=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),k=a.state;k.setBlending(os),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=m!==this.type;V&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=v.length;L<q;L++){let O=v[L],G=O.shadow;if(G===void 0){Re("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let ie=G.getFrameExtents();n.multiply(ie),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ie.x),n.x=s.x*ie.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ie.y),n.y=s.y*ie.y,G.mapSize.y=s.y));let W=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$s){if(O.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new _i(n.x,n.y,{format:Dn,type:ki,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new cn(n.x,n.y,yi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=on,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It}else O.isPointLight?(G.map=new ga(n.x),G.map.depthTexture=new Gr(n.x,Ni)):(G.map=new _i(n.x,n.y),G.map.depthTexture=new cn(n.x,n.y,Ni)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=on,this.type===ta?(G.map.depthTexture.compareFunction=W?th:eh,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==n.x||G.map.height!==n.y)&&G.map.setSize(n.x,n.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();O.isPointLight!==!0&&G.updateMatrices(O,S);let ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let ce=0;ce<j;ce++){let ke=G.getCamera(ce);if(O.isPointLight){let K=G.camera,me=G.matrix,ye=O.distance||K.far;ye!==K.far&&(K.far=ye,K.updateProjectionMatrix()),pa.setFromMatrixPosition(O.matrixWorld),K.position.copy(pa),_h.copy(K.position),_h.add(Hx[ce]),K.up.copy(Gx[ce]),K.lookAt(_h),K.updateMatrixWorld(),me.makeTranslation(-pa.x,-pa.y,-pa.z),xf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xf,K.coordinateSystem,K.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,ce),a.clear();else{ce===0&&(a.setRenderTarget(G.map),a.clear());let K=G.getViewport(ce);r.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(r)}i=G.getFrustum(ce),y(x,S,ke,O,ee,this.type)}G.isPointLightShadow!==!0&&this.type===$s&&_(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(P,C,D)};function _(v,x){let S=e.update(b);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new _i(n.x,n.y,{format:Dn,type:ki}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(x,null,S,d,b,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(x,null,S,f,b,null)}function M(v,x,S,P){let C=null,D=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=C.uuid,V=x.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let q=L[V];q===void 0&&(q=C.clone(),L[V]=q,x.addEventListener("dispose",w)),C=q}if(C.visible=x.visible,C.wireframe=x.wireframe,P===$s?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=a.properties.get(C);k.light=S}return C}function y(v,x,S,P,C,D){if(v.visible===!1)return;if(v.layers.test(C)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===$s)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);let L=e.update(v),q=v.material;if(Array.isArray(q)){let O=L.groups;for(let G=0,ie=O.length;G<ie;G++){let W=O[G],j=q[W.materialIndex];if(j&&j.visible){let ee=M(v,j,P,D);v.onBeforeShadow(a,v,x,S,L,ee,W),a.renderBufferDirect(S,null,L,ee,v,W),v.onAfterShadow(a,v,x,S,L,ee,W)}}}else if(q.visible){let O=M(v,q,P,D);v.onBeforeShadow(a,v,x,S,L,O,null),a.renderBufferDirect(S,null,L,O,v,null),v.onAfterShadow(a,v,x,S,L,O,null)}}let V=v.children;for(let L=0,q=V.length;L<q;L++)y(V[L],x,S,P,C,D)}function w(v){v.target.removeEventListener("dispose",w);for(let S in c){let P=c[S],C=v.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Wx(a,e){function t(){let I=!1,$=new ht,J=null,ue=new ht(0,0,0,0);return{setMask:function(re){J!==re&&!I&&(a.colorMask(re,re,re,re),J=re)},setLocked:function(re){I=re},setClear:function(re,le,Pe,qe,se){se===!0&&(re*=qe,le*=qe,Pe*=qe),$.set(re,le,Pe,qe),ue.equals($)===!1&&(a.clearColor(re,le,Pe,qe),ue.copy($))},reset:function(){I=!1,J=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,$=!1,J=null,ue=null,re=null;return{setReversed:function(le){if($!==le){let Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),$=le;let qe=re;re=null,this.setClear(qe)}},getReversed:function(){return $},setTest:function(le){le?ge(a.DEPTH_TEST):Ue(a.DEPTH_TEST)},setMask:function(le){J!==le&&!I&&(a.depthMask(le),J=le)},setFunc:function(le){if($&&(le=qd[le]),ue!==le){switch(le){case eo:a.depthFunc(a.NEVER);break;case to:a.depthFunc(a.ALWAYS);break;case io:a.depthFunc(a.LESS);break;case ks:a.depthFunc(a.LEQUAL);break;case no:a.depthFunc(a.EQUAL);break;case so:a.depthFunc(a.GEQUAL);break;case ro:a.depthFunc(a.GREATER);break;case ao:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ue=le}},setLocked:function(le){I=le},setClear:function(le){re!==le&&(re=le,$&&(le=1-le),a.clearDepth(le))},reset:function(){I=!1,J=null,ue=null,re=null,$=!1}}}function n(){let I=!1,$=null,J=null,ue=null,re=null,le=null,Pe=null,qe=null,se=null;return{setTest:function(Le){I||(Le?ge(a.STENCIL_TEST):Ue(a.STENCIL_TEST))},setMask:function(Le){$!==Le&&!I&&(a.stencilMask(Le),$=Le)},setFunc:function(Le,We,xe){(J!==Le||ue!==We||re!==xe)&&(a.stencilFunc(Le,We,xe),J=Le,ue=We,re=xe)},setOp:function(Le,We,xe){(le!==Le||Pe!==We||qe!==xe)&&(a.stencilOp(Le,We,xe),le=Le,Pe=We,qe=xe)},setLocked:function(Le){I=Le},setClear:function(Le){se!==Le&&(a.clearStencil(Le),se=Le)},reset:function(){I=!1,$=null,J=null,ue=null,re=null,le=null,Pe=null,qe=null,se=null}}}let s=new t,r=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,p=!1,m=null,_=null,M=null,y=null,w=null,v=null,x=null,S=new Me(0,0,0),P=0,C=!1,D=null,k=null,V=null,L=null,q=null,O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ie=0,W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ie>=2);let j=null,ee={},ce=a.getParameter(a.SCISSOR_BOX),ke=a.getParameter(a.VIEWPORT),K=new ht().fromArray(ce),me=new ht().fromArray(ke);function ye(I,$,J,ue){let re=new Uint8Array(4),le=a.createTexture();a.bindTexture(I,le),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<J;Pe++)I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY?a.texImage3D($,0,a.RGBA,1,1,ue,0,a.RGBA,a.UNSIGNED_BYTE,re):a.texImage2D($+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,re);return le}let Ce={};Ce[a.TEXTURE_2D]=ye(a.TEXTURE_2D,a.TEXTURE_2D,1),Ce[a.TEXTURE_CUBE_MAP]=ye(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[a.TEXTURE_2D_ARRAY]=ye(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ce[a.TEXTURE_3D]=ye(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(a.DEPTH_TEST),r.setFunc(ks),Pt(!1),U(Nc),ge(a.CULL_FACE),Dt(os);function ge(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function Ue(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function bt(I,$){return d[I]!==$?(a.bindFramebuffer(I,$),d[I]=$,I===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=$),I===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=$),!0):!1}function Fe(I,$){let J=g,ue=!1;if(I){J=f.get($),J===void 0&&(J=[],f.set($,J));let re=I.textures;if(J.length!==re.length||J[0]!==a.COLOR_ATTACHMENT0){for(let le=0,Pe=re.length;le<Pe;le++)J[le]=a.COLOR_ATTACHMENT0+le;J.length=re.length,ue=!0}}else J[0]!==a.BACK&&(J[0]=a.BACK,ue=!0);ue&&a.drawBuffers(J)}function st(I){return b!==I?(a.useProgram(I),b=I,!0):!1}let at={[gn]:a.FUNC_ADD,[fd]:a.FUNC_SUBTRACT,[pd]:a.FUNC_REVERSE_SUBTRACT};at[md]=a.MIN,at[gd]=a.MAX;let Ke={[Ro]:a.ZERO,[ia]:a.ONE,[bd]:a.SRC_COLOR,[na]:a.SRC_ALPHA,[Sd]:a.SRC_ALPHA_SATURATE,[yd]:a.DST_COLOR,[_d]:a.DST_ALPHA,[xd]:a.ONE_MINUS_SRC_COLOR,[Bc]:a.ONE_MINUS_SRC_ALPHA,[Md]:a.ONE_MINUS_DST_COLOR,[vd]:a.ONE_MINUS_DST_ALPHA,[wd]:a.CONSTANT_COLOR,[Td]:a.ONE_MINUS_CONSTANT_COLOR,[Ed]:a.CONSTANT_ALPHA,[Ad]:a.ONE_MINUS_CONSTANT_ALPHA};function Dt(I,$,J,ue,re,le,Pe,qe,se,Le){if(I===os){p===!0&&(Ue(a.BLEND),p=!1);return}if(p===!1&&(ge(a.BLEND),p=!0),I!==Ao){if(I!==m||Le!==C){if((_!==gn||w!==gn)&&(a.blendEquation(a.FUNC_ADD),_=gn,w=gn),Le)switch(I){case Qs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case kc:a.blendFunc(a.ONE,a.ONE);break;case Uc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Oc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Oe("WebGLState: Invalid blending: ",I);break}else switch(I){case Qs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case kc:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Uc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",I);break}M=null,y=null,v=null,x=null,S.set(0,0,0),P=0,m=I,C=Le}return}re=re||$,le=le||J,Pe=Pe||ue,($!==_||re!==w)&&(a.blendEquationSeparate(at[$],at[re]),_=$,w=re),(J!==M||ue!==y||le!==v||Pe!==x)&&(a.blendFuncSeparate(Ke[J],Ke[ue],Ke[le],Ke[Pe]),M=J,y=ue,v=le,x=Pe),(qe.equals(S)===!1||se!==P)&&(a.blendColor(qe.r,qe.g,qe.b,se),S.copy(qe),P=se),m=I,C=!1}function Rt(I,$){I.side===Ut?Ue(a.CULL_FACE):ge(a.CULL_FACE);let J=I.side===Zt;$&&(J=!J),Pt(J),I.blending===Qs&&I.transparent===!1?Dt(os):Dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(a.SAMPLE_ALPHA_TO_COVERAGE):Ue(a.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){D!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),D=I)}function U(I){I!==hd?(ge(a.CULL_FACE),I!==k&&(I===Nc?a.cullFace(a.BACK):I===ud?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ue(a.CULL_FACE),k=I}function te(I){I!==V&&(G&&a.lineWidth(I),V=I)}function De(I,$,J){I?(ge(a.POLYGON_OFFSET_FILL),(L!==$||q!==J)&&(L=$,q=J,r.getReversed()&&($=-$,J=-J),a.polygonOffset($,J))):Ue(a.POLYGON_OFFSET_FILL)}function Ze(I){I?ge(a.SCISSOR_TEST):Ue(a.SCISSOR_TEST)}function ut(I){I===void 0&&(I=a.TEXTURE0+O-1),j!==I&&(a.activeTexture(I),j=I)}function Ct(I,$,J){J===void 0&&(j===null?J=a.TEXTURE0+O-1:J=j);let ue=ee[J];ue===void 0&&(ue={type:void 0,texture:void 0},ee[J]=ue),(ue.type!==I||ue.texture!==$)&&(j!==J&&(a.activeTexture(J),j=J),a.bindTexture(I,$||Ce[I]),ue.type=I,ue.texture=$)}function N(){let I=ee[j];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Vt(){try{a.compressedTexImage2D(...arguments)}catch(I){Oe("WebGLState:",I)}}function rt(){try{a.compressedTexImage3D(...arguments)}catch(I){Oe("WebGLState:",I)}}function dt(){try{a.texSubImage2D(...arguments)}catch(I){Oe("WebGLState:",I)}}function ae(){try{a.texSubImage3D(...arguments)}catch(I){Oe("WebGLState:",I)}}function xt(){try{a.compressedTexSubImage2D(...arguments)}catch(I){Oe("WebGLState:",I)}}function Ie(){try{a.compressedTexSubImage3D(...arguments)}catch(I){Oe("WebGLState:",I)}}function Ne(){try{a.texStorage2D(...arguments)}catch(I){Oe("WebGLState:",I)}}function R(){try{a.texStorage3D(...arguments)}catch(I){Oe("WebGLState:",I)}}function T(){try{a.texImage2D(...arguments)}catch(I){Oe("WebGLState:",I)}}function B(){try{a.texImage3D(...arguments)}catch(I){Oe("WebGLState:",I)}}function ne(I){return u[I]!==void 0?u[I]:a.getParameter(I)}function Q(I,$){u[I]!==$&&(a.pixelStorei(I,$),u[I]=$)}function oe(I){K.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function fe(I){me.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function Y(I,$){let J=c.get($);J===void 0&&(J=new WeakMap,c.set($,J));let ue=J.get(I);ue===void 0&&(ue=a.getUniformBlockIndex($,I.name),a.uniformBlockBinding($,ue,ue),J.set(I,ue))}function Z(I,$,J){let re=c.get($).get(I);l[re]!==J&&(a.bindBufferBase(a.UNIFORM_BUFFER,re,J),l[re]=J)}function he(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ee={},d={},l={},f=new WeakMap,g=[],b=null,p=!1,m=null,_=null,M=null,y=null,w=null,v=null,x=null,S=new Me(0,0,0),P=0,C=!1,D=null,k=null,V=null,L=null,q=null,K.set(0,0,a.canvas.width,a.canvas.height),me.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ge,disable:Ue,bindFramebuffer:bt,drawBuffers:Fe,useProgram:st,setBlending:Dt,setMaterial:Rt,setFlipSided:Pt,setCullFace:U,setLineWidth:te,setPolygonOffset:De,setScissorTest:Ze,activeTexture:ut,bindTexture:Ct,unbindTexture:N,compressedTexImage2D:Vt,compressedTexImage3D:rt,texImage2D:T,texImage3D:B,pixelStorei:Q,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Ne,texStorage3D:R,texSubImage2D:dt,texSubImage3D:ae,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ie,scissor:oe,viewport:fe,reset:he}}function qx(a,e,t,i,n,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,b=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return p?new OffscreenCanvas(R,T):Bs("canvas")}function _(R,T,B){let ne=1,Q=Ne(R);if((Q.width>B||Q.height>B)&&(ne=B/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let oe=Math.floor(ne*Q.width),fe=Math.floor(ne*Q.height);d===void 0&&(d=m(oe,fe));let Y=T?m(oe,fe):d;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(R,0,0,oe,fe),Re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in R&&Re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){a.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(R,T,B,ne,Q,oe=!1){if(R!==null){if(a[R]!==void 0)return a[R];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;ne&&(fe=e.get("EXT_texture_norm16"),fe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=T;if(T===a.RED&&(B===a.FLOAT&&(Y=a.R32F),B===a.HALF_FLOAT&&(Y=a.R16F),B===a.UNSIGNED_BYTE&&(Y=a.R8),B===a.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),B===a.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),T===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.R8UI),B===a.UNSIGNED_SHORT&&(Y=a.R16UI),B===a.UNSIGNED_INT&&(Y=a.R32UI),B===a.BYTE&&(Y=a.R8I),B===a.SHORT&&(Y=a.R16I),B===a.INT&&(Y=a.R32I)),T===a.RG&&(B===a.FLOAT&&(Y=a.RG32F),B===a.HALF_FLOAT&&(Y=a.RG16F),B===a.UNSIGNED_BYTE&&(Y=a.RG8),B===a.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),B===a.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),T===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RG8UI),B===a.UNSIGNED_SHORT&&(Y=a.RG16UI),B===a.UNSIGNED_INT&&(Y=a.RG32UI),B===a.BYTE&&(Y=a.RG8I),B===a.SHORT&&(Y=a.RG16I),B===a.INT&&(Y=a.RG32I)),T===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGB8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGB16UI),B===a.UNSIGNED_INT&&(Y=a.RGB32UI),B===a.BYTE&&(Y=a.RGB8I),B===a.SHORT&&(Y=a.RGB16I),B===a.INT&&(Y=a.RGB32I)),T===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGBA16UI),B===a.UNSIGNED_INT&&(Y=a.RGBA32UI),B===a.BYTE&&(Y=a.RGBA8I),B===a.SHORT&&(Y=a.RGBA16I),B===a.INT&&(Y=a.RGBA32I)),T===a.RGB&&(B===a.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),B===a.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),B===a.UNSIGNED_INT_5_9_9_9_REV&&(Y=a.RGB9_E5),B===a.UNSIGNED_INT_10F_11F_11F_REV&&(Y=a.R11F_G11F_B10F)),T===a.RGBA){let Z=oe?Ir:Je.getTransfer(Q);B===a.FLOAT&&(Y=a.RGBA32F),B===a.HALF_FLOAT&&(Y=a.RGBA16F),B===a.UNSIGNED_BYTE&&(Y=Z===lt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),B===a.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),B===a.UNSIGNED_SHORT_4_4_4_4&&(Y=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(Y=a.RGB5_A1)}return(Y===a.R16F||Y===a.R32F||Y===a.RG16F||Y===a.RG32F||Y===a.RGBA16F||Y===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,T){let B;return R?T===null||T===Ni||T===hs?B=a.DEPTH24_STENCIL8:T===yi?B=a.DEPTH32F_STENCIL8:T===ir&&(B=a.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ni||T===hs?B=a.DEPTH_COMPONENT24:T===yi?B=a.DEPTH_COMPONENT32F:T===ir&&(B=a.DEPTH_COMPONENT16),B}function S(R,T){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==Bt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=new WeakRef(R);i.get(R).__ref=T,g.add(T),b.register(R,T,T)}function C(R){let T=i.get(R).__ref;T!==void 0&&(g.delete(T),b.unregister(T))}function D(R){V(R.target)}function k(R){L(R.target)}function V(R){R.removeEventListener("dispose",D),C(R),O(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",k),C(R),ie(R)}function q(){for(let R of g){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):V(T))}g.clear(),u.clear()}function O(R){let T=i.get(R);if(T.__webglInit===void 0)return;let B=R.source,ne=f.get(B);if(ne){let Q=ne[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(R),Object.keys(ne).length===0&&f.delete(B)}i.remove(R)}function G(R){let T=i.get(R);a.deleteTexture(T.__webglTexture);let B=R.source,ne=f.get(B);delete ne[T.__cacheKey],r.memory.textures--}function ie(R){let T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&V(B),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let oe=0;oe<T.__webglFramebuffer[Q].length;oe++)a.deleteFramebuffer(T.__webglFramebuffer[Q][oe]);else a.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)a.deleteFramebuffer(T.__webglFramebuffer[Q]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ne=R.textures;for(let Q=0,oe=ne.length;Q<oe;Q++){let fe=i.get(ne[Q]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),r.memory.textures--),i.remove(ne[Q])}i.remove(R)}let W=0;function j(){W=0}function ee(){return W}function ce(R){W=R}function ke(){let R=W;return R>=n.maxTextures&&Re("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,R}function K(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function me(R,T){let B=i.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let ne=R.image;if(ne===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(B,R,T);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+T)}function ye(R,T){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Rt(B,R,T);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+T)}function Ce(R,T){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Rt(B,R,T);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+T)}function ge(R,T){let B=i.get(R);if(R.version>0&&B.__version!==R.version){Pt(B,R,T);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+T)}let Ue={[Rn]:a.REPEAT,[Si]:a.CLAMP_TO_EDGE,[Us]:a.MIRRORED_REPEAT},bt={[It]:a.NEAREST,[Lo]:a.NEAREST_MIPMAP_NEAREST,[cs]:a.NEAREST_MIPMAP_LINEAR,[Bt]:a.LINEAR,[tr]:a.LINEAR_MIPMAP_NEAREST,[Ti]:a.LINEAR_MIPMAP_LINEAR},Fe={[Ud]:a.NEVER,[ih]:a.ALWAYS,[Od]:a.LESS,[eh]:a.LEQUAL,[Bd]:a.EQUAL,[th]:a.GEQUAL,[zd]:a.GREATER,[Hd]:a.NOTEQUAL};function st(R,T){if(T.type===yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bt||T.magFilter===tr||T.magFilter===cs||T.magFilter===Ti||T.minFilter===Bt||T.minFilter===tr||T.minFilter===cs||T.minFilter===Ti)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,Ue[T.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,Ue[T.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,Ue[T.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,bt[T.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,Fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===It||T.minFilter!==cs&&T.minFilter!==Ti||T.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function at(R,T){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",D),P(T));let ne=T.source,Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));let oe=K(T);if(oe!==R.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Q[oe].usedTimes++;let fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&G(T)),R.__cacheKey=oe,R.__webglTexture=Q[oe].texture}return B}function Ke(R,T,B){return Math.floor(Math.floor(R/B)/T)}function Dt(R,T,B,ne){let oe=R.updateRanges;if(oe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,B,ne,T.data);else{oe.sort((I,$)=>I.start-$.start);let fe=0;for(let I=1;I<oe.length;I++){let $=oe[fe],J=oe[I],ue=$.start+$.count,re=Ke(J.start,T.width,4),le=Ke($.start,T.width,4);J.start<=ue+1&&re===le&&Ke(J.start+J.count-1,T.width,4)===re?$.count=Math.max($.count,J.start+J.count-$.start):(++fe,oe[fe]=J)}oe.length=fe+1;let Y=t.getParameter(a.UNPACK_ROW_LENGTH),Z=t.getParameter(a.UNPACK_SKIP_PIXELS),he=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let I=0,$=oe.length;I<$;I++){let J=oe[I],ue=Math.floor(J.start/4),re=Math.ceil(J.count/4),le=ue%T.width,Pe=Math.floor(ue/T.width),qe=re,se=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,le),t.pixelStorei(a.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(a.TEXTURE_2D,0,le,Pe,qe,se,B,ne,T.data)}R.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,Y),t.pixelStorei(a.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(a.UNPACK_SKIP_ROWS,he)}}function Rt(R,T,B){let ne=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=a.TEXTURE_3D);let Q=at(R,T),oe=T.source;t.bindTexture(ne,R.__webglTexture,a.TEXTURE0+B);let fe=i.get(oe);if(oe.version!==fe.__version||Q===!0){if(t.activeTexture(a.TEXTURE0+B),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),Le=T.colorSpace===xn?null:Je.getPrimaries(T.colorSpace),We=T.colorSpace===xn||se===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let Z=_(T.image,!1,n.maxTextureSize);Z=Ie(T,Z);let he=s.convert(T.format,T.colorSpace),I=s.convert(T.type),$=v(T.internalFormat,he,I,T.normalized,T.colorSpace,T.isVideoTexture);st(ne,T);let J,ue=T.mipmaps,re=T.isVideoTexture!==!0,le=fe.__version===void 0||Q===!0,Pe=oe.dataReady,qe=S(T,Z);if(T.isDepthTexture)$=x(T.format===bn,T.type),le&&(re?t.texStorage2D(a.TEXTURE_2D,1,$,Z.width,Z.height):t.texImage2D(a.TEXTURE_2D,0,$,Z.width,Z.height,0,he,I,null));else if(T.isDataTexture)if(ue.length>0){re&&le&&t.texStorage2D(a.TEXTURE_2D,qe,$,ue[0].width,ue[0].height);for(let se=0,Le=ue.length;se<Le;se++)J=ue[se],re?Pe&&t.texSubImage2D(a.TEXTURE_2D,se,0,0,J.width,J.height,he,I,J.data):t.texImage2D(a.TEXTURE_2D,se,$,J.width,J.height,0,he,I,J.data);T.generateMipmaps=!1}else re?(le&&t.texStorage2D(a.TEXTURE_2D,qe,$,Z.width,Z.height),Pe&&Dt(T,Z,he,I)):t.texImage2D(a.TEXTURE_2D,0,$,Z.width,Z.height,0,he,I,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&le&&t.texStorage3D(a.TEXTURE_2D_ARRAY,qe,$,ue[0].width,ue[0].height,Z.depth);for(let se=0,Le=ue.length;se<Le;se++)if(J=ue[se],T.format!==Ei)if(he!==null)if(re){if(Pe)if(T.layerUpdates.size>0){let We=dh(J.width,J.height,T.format,T.type);for(let xe of T.layerUpdates){let ct=J.data.subarray(xe*We/J.data.BYTES_PER_ELEMENT,(xe+1)*We/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,se,0,0,xe,J.width,J.height,1,he,ct)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,Z.depth,he,J.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,se,$,J.width,J.height,Z.depth,0,J.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Pe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,Z.depth,he,I,J.data):t.texImage3D(a.TEXTURE_2D_ARRAY,se,$,J.width,J.height,Z.depth,0,he,I,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{re&&le&&t.texStorage2D(a.TEXTURE_2D,qe,$,ue[0].width,ue[0].height);for(let se=0,Le=ue.length;se<Le;se++)J=ue[se],T.format!==Ei?he!==null?re?Pe&&t.compressedTexSubImage2D(a.TEXTURE_2D,se,0,0,J.width,J.height,he,J.data):t.compressedTexImage2D(a.TEXTURE_2D,se,$,J.width,J.height,0,J.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Pe&&t.texSubImage2D(a.TEXTURE_2D,se,0,0,J.width,J.height,he,I,J.data):t.texImage2D(a.TEXTURE_2D,se,$,J.width,J.height,0,he,I,J.data)}else if(T.isDataArrayTexture)if(re){if(le&&t.texStorage3D(a.TEXTURE_2D_ARRAY,qe,$,Z.width,Z.height,Z.depth),Pe)if(T.layerUpdates.size>0){let se=dh(Z.width,Z.height,T.format,T.type);for(let Le of T.layerUpdates){let We=Z.data.subarray(Le*se/Z.data.BYTES_PER_ELEMENT,(Le+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Le,Z.width,Z.height,1,he,I,We)}T.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,I,Z.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,he,I,Z.data);else if(T.isData3DTexture)re?(le&&t.texStorage3D(a.TEXTURE_3D,qe,$,Z.width,Z.height,Z.depth),Pe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,I,Z.data)):t.texImage3D(a.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,he,I,Z.data);else if(T.isFramebufferTexture){if(le)if(re)t.texStorage2D(a.TEXTURE_2D,qe,$,Z.width,Z.height);else{let se=Z.width,Le=Z.height;for(let We=0;We<qe;We++)t.texImage2D(a.TEXTURE_2D,We,$,se,Le,0,he,I,null),se>>=1,Le>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){let se=a.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),u.add(T),se.onpaint=Le=>{let We=Le.changedElements;for(let xe of u)We.includes(xe.image)&&(xe.needsUpdate=!0)},se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,Z);else{let We=a.RGBA,xe=a.RGBA,ct=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,We,xe,ct,Z)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ue.length>0){if(re&&le){let se=Ne(ue[0]);t.texStorage2D(a.TEXTURE_2D,qe,$,se.width,se.height)}for(let se=0,Le=ue.length;se<Le;se++)J=ue[se],re?Pe&&t.texSubImage2D(a.TEXTURE_2D,se,0,0,he,I,J):t.texImage2D(a.TEXTURE_2D,se,$,he,I,J);T.generateMipmaps=!1}else if(re){if(le){let se=Ne(Z);t.texStorage2D(a.TEXTURE_2D,qe,$,se.width,se.height)}Pe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,he,I,Z)}else t.texImage2D(a.TEXTURE_2D,0,$,he,I,Z);M(T)&&T.mipmapsAutoUpdate===!0&&y(ne),fe.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Pt(R,T,B){if(T.image.length!==6)return;let ne=at(R,T),Q=T.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+B);let oe=i.get(Q);if(Q.version!==oe.__version||ne===!0){t.activeTexture(a.TEXTURE0+B);let fe=Je.getPrimaries(Je.workingColorSpace),Y=T.colorSpace===xn?null:Je.getPrimaries(T.colorSpace),Z=T.colorSpace===xn||fe===Y?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,$=[];for(let xe=0;xe<6;xe++)!he&&!I?$[xe]=_(T.image[xe],!0,n.maxCubemapSize):$[xe]=I?T.image[xe].image:T.image[xe],$[xe]=Ie(T,$[xe]);let J=$[0],ue=s.convert(T.format,T.colorSpace),re=s.convert(T.type),le=v(T.internalFormat,ue,re,T.normalized,T.colorSpace),Pe=T.isVideoTexture!==!0,qe=oe.__version===void 0||ne===!0,se=Q.dataReady,Le=S(T,J);st(a.TEXTURE_CUBE_MAP,T);let We;if(T.isDepthTexture){if(le=x(T.format===bn,T.type),qe)if(Pe)t.texStorage2D(a.TEXTURE_CUBE_MAP,1,le,J.width,J.height);else for(let xe=0;xe<6;xe++)t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,J.width,J.height,0,ue,re,null)}else if(he){Pe&&qe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,le,J.width,J.height);for(let xe=0;xe<6;xe++){We=$[xe].mipmaps;for(let ct=0;ct<We.length;ct++){let Wt=We[ct];T.format!==Ei?ue!==null?Pe?se&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Wt.width,Wt.height,ue,Wt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,le,Wt.width,Wt.height,0,Wt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Wt.width,Wt.height,ue,re,Wt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,le,Wt.width,Wt.height,0,ue,re,Wt.data)}}}else{if(We=T.mipmaps,Pe&&qe){We.length>0&&Le++;let xe=Ne($[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(I){Pe?se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$[xe].width,$[xe].height,ue,re,$[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,$[xe].width,$[xe].height,0,ue,re,$[xe].data);for(let ct=0;ct<We.length;ct++){let vn=We[ct].image[xe].image;Pe?se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,vn.width,vn.height,ue,re,vn.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,le,vn.width,vn.height,0,ue,re,vn.data)}}else{Pe?se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ue,re,$[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,ue,re,$[xe]);for(let ct=0;ct<We.length;ct++){let Wt=We[ct];Pe?se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,ue,re,Wt.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,le,ue,re,Wt.image[xe])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(a.TEXTURE_CUBE_MAP),oe.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function U(R,T,B,ne,Q,oe){let fe=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),Z=v(B.internalFormat,fe,Y,B.normalized,B.colorSpace),he=i.get(T),I=i.get(B);if(I.__renderTarget=T,!he.__hasExternalTextures){let $=Math.max(1,T.width>>oe),J=Math.max(1,T.height>>oe);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,Z,$,J,T.depth,0,fe,Y,null):t.texImage2D(Q,oe,Z,$,J,0,fe,Y,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),ae(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,Q,I.__webglTexture,0,dt(T)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ne,Q,I.__webglTexture,oe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function te(R,T,B){if(a.bindRenderbuffer(a.RENDERBUFFER,R),T.depthBuffer){let ne=T.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,oe=x(T.stencilBuffer,Q),fe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ae(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,dt(T),oe,T.width,T.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,dt(T),oe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,oe,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,R)}else{let ne=T.textures;for(let Q=0;Q<ne.length;Q++){let oe=ne[Q],fe=s.convert(oe.format,oe.colorSpace),Y=s.convert(oe.type),Z=v(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);ae(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,dt(T),Z,T.width,T.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,dt(T),Z,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Z,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function De(R,T,B){let ne=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(T.depthTexture);Q.__renderTarget=T;let oe=ne?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||oe.width!==T.width||oe.height!==T.height)&&(oe.width=T.width,oe.height=T.height,T.depthTexture.needsUpdate=!0),ne?ge(T.depthTexture,0):me(T.depthTexture,0);let fe=Q.__webglTexture,Y=dt(T),Z=ne?a.TEXTURE_CUBE_MAP_POSITIVE_X+B:a.TEXTURE_2D,he=T.depthTexture.format===bn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===on)ae(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,Z,fe,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,he,Z,fe,0);else if(T.depthTexture.format===bn)ae(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,Z,fe,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,he,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(R){let T=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let ne=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ne}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)De(T.__webglFramebuffer[ne],R,ne);else R.texture.mipmaps.length>0?De(T.__webglFramebuffer[0],R,0):De(T.__webglFramebuffer,R,0);else if(B){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=a.createRenderbuffer(),te(T.__webglDepthbuffer[ne],R,!1);else{let Q=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[ne];a.bindRenderbuffer(a.RENDERBUFFER,oe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,oe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),te(T.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,oe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,oe)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ut(R,T,B){let ne=i.get(R);T!==void 0&&U(ne.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Ze(R)}function Ct(R){let T=R.texture,B=i.get(R),ne=i.get(T);R.addEventListener("dispose",k),P(R);let Q=R.textures,oe=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=T.version,r.memory.textures++),oe){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(T.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let Z=0;Z<T.mipmaps.length;Z++)B.__webglFramebuffer[Y][Z]=a.createFramebuffer()}else B.__webglFramebuffer[Y]=a.createFramebuffer()}else{if(T.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<T.mipmaps.length;Y++)B.__webglFramebuffer[Y]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(fe)for(let Y=0,Z=Q.length;Y<Z;Y++){let he=i.get(Q[Y]);he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture(),r.memory.textures++)}if(R.samples>0&&ae(R)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let Z=Q[Y];B.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let he=s.convert(Z.format,Z.colorSpace),I=s.convert(Z.type),$=v(Z.internalFormat,he,I,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),J=dt(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,J,$,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Y,a.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),te(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(oe){t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),st(a.TEXTURE_CUBE_MAP,T);for(let Y=0;Y<6;Y++)if(T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)U(B.__webglFramebuffer[Y][Z],R,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else U(B.__webglFramebuffer[Y],R,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);M(T)?y(a.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Y=0,Z=Q.length;Y<Z;Y++){let he=Q[Y],I=i.get(he),$=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture($,I.__webglTexture),st($,he),U(B.__webglFramebuffer,R,he,a.COLOR_ATTACHMENT0+Y,$,0),M(he)&&y($)}t.unbindTexture()}else{let Y=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Y,ne.__webglTexture),st(Y,T),T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)U(B.__webglFramebuffer[Z],R,T,a.COLOR_ATTACHMENT0,Y,Z);else U(B.__webglFramebuffer,R,T,a.COLOR_ATTACHMENT0,Y,0);M(T)?y(Y):T.mipmaps.length>0&&a.texParameteri(Y,a.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Ze(R)}function N(R){let T=R.textures;for(let B=0,ne=T.length;B<ne;B++){let Q=T[B];if(M(Q)&&Q.mipmapsAutoUpdate===!0){let oe=w(R),fe=i.get(Q).__webglTexture;t.bindTexture(oe,fe),y(oe),t.unbindTexture()}}}let Vt=[];function rt(R){if(R.samples>0){if(ae(R)===!1){let T=R.textures,B=R.width,ne=R.height,Q=a.COLOR_BUFFER_BIT,oe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=i.get(R),Y=T.length>1;if(Y)for(let he=0;he<T.length;he++)t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<T.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),Y){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let I=i.get(T[he]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,I,0)}a.blitFramebuffer(0,0,B,ne,0,0,B,ne,Q,a.NEAREST),l===!0&&(Vt.length=0,Vt.push(a.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Vt.push(oe),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<T.length;he++){t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let I=i.get(T[he]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.TEXTURE_2D,I,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function dt(R){return Math.min(n.maxSamples,R.samples)}function ae(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(R){let T=r.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Ie(R,T){let B=R.colorSpace,ne=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==oi&&B!==xn&&(Je.getTransfer(B)===lt?(ne!==Ei||Q!==pi)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",B)),T}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ke,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=ce,this.setTexture2D=me,this.setTexture2DArray=ye,this.setTexture3D=Ce,this.setTextureCube=ge,this.rebindTextures=ut,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=U,this.useMultisampledRTT=ae,this.dispose=q}function Xx(a,e){function t(i,n=xn){let s,r=Je.getTransfer(n);if(i===pi)return a.UNSIGNED_BYTE;if(i===Do)return a.UNSIGNED_SHORT_4_4_4_4;if(i===No)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Jc)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Yc)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===jc)return a.BYTE;if(i===Kc)return a.SHORT;if(i===ir)return a.UNSIGNED_SHORT;if(i===Fo)return a.INT;if(i===Ni)return a.UNSIGNED_INT;if(i===yi)return a.FLOAT;if(i===ki)return a.HALF_FLOAT;if(i===Zc)return a.ALPHA;if(i===$c)return a.RGB;if(i===Ei)return a.RGBA;if(i===on)return a.DEPTH_COMPONENT;if(i===bn)return a.DEPTH_STENCIL;if(i===ko)return a.RED;if(i===Uo)return a.RED_INTEGER;if(i===Dn)return a.RG;if(i===Oo)return a.RG_INTEGER;if(i===Bo)return a.RGBA_INTEGER;if(i===ra||i===aa||i===oa||i===la)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Ho||i===Go||i===Vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===qo||i===Xo||i===jo||i===Ko||i===ca||i===Jo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wo||i===qo)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jo)return s.COMPRESSED_R11_EAC;if(i===Ko)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ca)return s.COMPRESSED_RG11_EAC;if(i===Jo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yo||i===Zo||i===$o||i===Qo||i===el||i===tl||i===il||i===nl||i===sl||i===rl||i===al||i===ol||i===ll||i===cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$o)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hl)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===pl||i===ha||i===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:jx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Yt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Di{constructor(e,t){super();let i=this,n=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",p=new Eh,m={},_=t.getContextAttributes(),M=null,y=null,w=[],v=[],x=new Ae,S=null,P=null,C=new Ot;C.viewport=new ht;let D=new Ot;D.viewport=new ht;let k=[C,D],V=new So,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=w[K];return me===void 0&&(me=new Gs,w[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=w[K];return me===void 0&&(me=new Gs,w[K]=me),me.getGripSpace()},this.getHand=function(K){let me=w[K];return me===void 0&&(me=new Gs,w[K]=me),me.getHandSpace()};function O(K){let me=v.indexOf(K.inputSource);if(me===-1)return;let ye=w[me];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||r),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",ie);for(let K=0;K<w.length;K++){let me=v[K];me!==null&&(v[K]=null,w[K].disconnect(me))}L=null,q=null,p.reset();for(let K in m)delete m[K];if(e.setRenderTarget(M),f=null,d=null,u=null,n=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){let K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",G),n.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ce=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?bn:on,Ce=_.stencil?hs:Ni);let Ue={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ue),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _i(d.textureWidth,d.textureHeight,{format:Ei,type:pi,depthTexture:new cn(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _i(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),ke.setContext(n),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(K){for(let me=0;me<K.removed.length;me++){let ye=K.removed[me],Ce=v.indexOf(ye);Ce>=0&&(v[Ce]=null,w[Ce].disconnect(ye))}for(let me=0;me<K.added.length;me++){let ye=K.added[me],Ce=v.indexOf(ye);if(Ce===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=v.length){v.push(ye),Ce=Ue;break}else if(v[Ue]===null){v[Ue]=ye,Ce=Ue;break}if(Ce===-1)break}let ge=w[Ce];ge&&ge.connect(ye)}}function W(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let me=K.near,ye=K.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),V.near=D.near=C.near=me,V.far=D.far=C.far=ye,(L!==V.near||q!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,q=V.far),V.layers.mask=K.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Ce=K.parent,ge=V.cameras;W(V,Ce);for(let Ue=0;Ue<ge.length;Ue++)W(ge[Ue],Ce);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),j(K,V,Ce)};function j(K,me,ye){ye===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jn*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(K){return m[K]};let ee=null;function ce(K,me){if(h=me.getViewerPose(c||r),g=me,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ce=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Ce=!0);for(let Fe=0;Fe<ye.length;Fe++){let st=ye[Fe],at=null;if(f!==null)at=f.getViewport(st);else{let Dt=u.getViewSubImage(d,st);at=Dt.viewport,Fe===0&&(e.setRenderTargetTextures(y,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(y))}let Ke=k[Fe];Ke===void 0&&(Ke=new Ot,Ke.layers.enable(Fe),Ke.viewport=new ht,k[Fe]=Ke),Ke.matrix.fromArray(st.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(st.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(at.x,at.y,at.width,at.height),Fe===0&&(V.matrix.copy(Ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ce===!0&&V.cameras.push(Ke)}let ge=n.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let Fe=u.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,n.renderState)}if(ge&&ge.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let Fe=0;Fe<ye.length;Fe++){let st=ye[Fe].camera;if(st){let at=m[st];at||(at=new Vr,m[st]=at);let Ke=u.getCameraImage(st);at.sourceTexture=Ke}}}}for(let ye=0;ye<w.length;ye++){let Ce=v[ye],ge=w[ye];Ce!==null&&ge!==void 0&&ge.update(Ce,me,c||r)}ee&&ee(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}let ke=new _f;ke.setAnimationLoop(ce),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},Jx=new Ge,Cf=new Be;Cf.set(-1,0,0,0,1,0,0,0,1);function Yx(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ch(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,M,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),b(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),M=_.envMap,y=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Zx(a,e,t,i){let n={},s={};function r(_,M){let y=M.program;i.uniformBlockBinding(_,y,n[_.id])}function o(_,M){let y=n[_.id];y===void 0&&(g(_),y=l(_),n[_.id]=y,_.addEventListener("dispose",p));let w=M.program;i.updateUBOMapping(_,w);let v=e.render.frame;s[_.id]!==v&&(c(_),s[_.id]=v)}function l(_){let M=a.createBuffer(),y=_.__size,w=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,y,w),a.bindBuffer(a.UNIFORM_BUFFER,null),M}function c(_){let M=n[_.id],y=_.uniforms,w=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let v=0,x=y.length;v<x;v++){let S=y[v];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)h(S[P],v,P,w);else h(S,v,0,w)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function h(_,M,y,w){if(d(_,M,y,w)===!0){let v=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let C=x[P],D=b(C,!0);u(C,_.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,v,_.__data)}}function u(_,M,y){typeof _=="number"||typeof _=="boolean"?M[y]=_:_.isMatrix3?(M[y]=_.elements[0],M[y+1]=_.elements[1],M[y+2]=_.elements[2],M[y+3]=0,M[y+4]=_.elements[3],M[y+5]=_.elements[4],M[y+6]=_.elements[5],M[y+7]=0,M[y+8]=_.elements[6],M[y+9]=_.elements[7],M[y+10]=_.elements[8],M[y+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-y),y):_.toArray(M,y)}function d(_,M,y,w){let v=_.value,x=M+"_"+y;if(Array.isArray(v)){w[x]===void 0&&(w[x]=[]);let S=w[x],P=!1;for(let C=0;C<v.length;C++)f(v[C],S,C)===!0&&(P=!0);return P}return f(v,w,x)}function f(_,M,y){if(M[y]===void 0)return typeof _=="number"||typeof _=="boolean"?M[y]=_:ArrayBuffer.isView(_)?M[y]=_.slice():M[y]=_.clone(),!0;{let w=M[y];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return M[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function g(_){let M=_.uniforms,y=0,w=16;for(let x=0,S=M.length;x<S;x++){let P=Array.isArray(M[x])?M[x]:[M[x]];for(let C=0,D=P.length;C<D;C++){let k=P[C],V=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(M[x])||Array.isArray(k.value),q=y;for(let G=0,ie=V.length;G<ie;G++){let W=V[G],j=b(W,L),ee=y%w,ce=ee%j.boundary,ke=ee+ce;y+=ce,ke!==0&&w-ke<j.storage&&(y+=w-ke),G===0&&(q=y),y+=j.storage}let O=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new O((y-q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=q}}let v=y%w;return v>0&&(y+=w-v),_.__size=y,_.__cache={},this}function b(_,M){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(_){let M=_.target;M.removeEventListener("dispose",p),a.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function m(){for(let _ in n)a.deleteBuffer(n[_]);n={},s={}}return{bind:r,update:o,dispose:m}}var $x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function Qx(){return Xi===null&&(Xi=new Ws($x,16,16,Dn,ki),Xi.name="DFG_LUT",Xi.minFilter=Bt,Xi.magFilter=Bt,Xi.wrapS=Si,Xi.wrapT=Si,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var vl=class{constructor(e={}){let{canvas:t=Gd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let b=f,p=new Set([Bo,Oo,Uo]),m=new Set([pi,Ni,ir,hs,Do,No]),_=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,v=null,x=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,k=null,V=null,L=null,q=null;this._outputColorSpace=Mt;let O=0,G=0,ie=null,W=-1,j=null,ee=new ht,ce=new ht,ke=null,K=new Me(0),me=0,ye=t.width,Ce=t.height,ge=1,Ue=null,bt=null,Fe=new ht(0,0,ye,Ce),st=new ht(0,0,ye,Ce),at=!1,Ke=new In,Dt=new ho,Rt=!1,Pt=!1,U=new Ge,te=new A,De=new ht,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function Ct(){return ie===null?ge:1}let N=i;function Vt(E,F){return t.getContext(E,F)}let rt,dt,ae,xt,Ie,Ne,R,T,B,ne,Q,oe,fe,Y,Z,he,I,$,J,ue,re,le,Pe;try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",xe,!1),N===null){let F="webgl2";if(N=Vt(F,E),N===null)throw Vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(E){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Oe("WebGLRenderer: "+E.message),E}function qe(){rt=new hb(N),rt.init(),re=new Xx(N,rt),dt=new Qg(N,rt,e,re),ae=new Wx(N,rt),dt.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),V=N.createFramebuffer(),L=N.createFramebuffer(),q=N.createFramebuffer(),xt=new fb(N),Ie=new Px,Ne=new qx(N,rt,ae,Ie,dt,re,xt),R=new cb(C),T=new mm(N),le=new Zg(N,T),B=new ub(N,T,xt,le),ne=new mb(N,B,T,le,xt),$=new pb(N,dt,Ne),Z=new eb(Ie),Q=new Cx(C,R,rt,dt,le,Z),oe=new Yx(C,Ie),fe=new Lx,Y=new Ox(rt),I=new Yg(C,R,ae,ne,g,l),he=new Vx(C,ne,dt),Pe=new Zx(N,xt,dt,ae),J=new $g(N,rt,xt),ue=new db(N,rt,xt),xt.programs=Q.programs,C.capabilities=dt,C.extensions=rt,C.properties=Ie,C.renderLists=fe,C.shadowMap=he,C.state=ae,C.info=xt}b!==pi&&(P=new bb(b,t.width,t.height,o,n,s));let se=new Ah(C,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(E){E!==void 0&&(ge=E,this.setSize(ye,Ce,!1))},this.getSize=function(E){return E.set(ye,Ce)},this.setSize=function(E,F,X=!0){if(se.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=E,Ce=F,t.width=Math.floor(E*ge),t.height=Math.floor(F*ge),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ye*ge,Ce*ge).floor()},this.setDrawingBufferSize=function(E,F,X){ye=E,Ce=F,ge=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(b===pi){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(Fe)},this.setViewport=function(E,F,X,z){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,F,X,z),ae.viewport(ee.copy(Fe).multiplyScalar(Ct()).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,F,X,z){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,F,X,z),ae.scissor(ce.copy(st).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){ae.setScissorTest(at=E)},this.setOpaqueSort=function(E){Ue=E},this.setTransparentSort=function(E){bt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let z=0;if(E){let H=!1;if(ie!==null){let pe=ie.texture.format;H=p.has(pe)}if(H){let pe=ie.texture.type,Se=m.has(pe),de=I.getClearColor(),ve=I.getClearAlpha(),Ee=de.r,He=de.g,Qe=de.b;Se?(_[0]=Ee,_[1]=He,_[2]=Qe,_[3]=ve,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=Ee,M[1]=He,M[2]=Qe,M[3]=ve,N.clearBufferiv(N.COLOR,0,M))}else z|=N.COLOR_BUFFER_BIT}F&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),I.dispose(),fe.dispose(),Y.dispose(),Ne.dispose(),Ie.dispose(),R.dispose(),ne.dispose(),B.dispose(),le.dispose(),Pe.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",uu),se.removeEventListener("sessionend",du),Un.stop()};function Le(E){E.preventDefault(),Lr("WebGLRenderer: Context Lost."),D=!0}function We(){Lr("WebGLRenderer: Context Restored."),D=!1;let E=xt.autoReset,F=he.enabled,X=he.autoUpdate,z=he.needsUpdate,H=he.type;qe(),xt.autoReset=E,he.enabled=F,he.autoUpdate=X,he.needsUpdate=z,he.type=H}function xe(E){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){let F=E.target;F.removeEventListener("dispose",ct),Wt(F)}function Wt(E){vn(E),Ie.remove(E)}function vn(E){let F=Ie.get(E).programs;F!==void 0&&(F.forEach(function(X){Q.releaseProgram(X)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,z,H,pe){F===null&&(F=Ze);let Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=ap(E,F,X,z,H);ae.setMaterial(z,Se);let ve=X.index,Ee=1;if(z.wireframe===!0){if(ve=B.getWireframeAttribute(X),ve===void 0)return;Ee=2}let He=X.drawRange,Qe=X.attributes.position,we=He.start*Ee,et=(He.start+He.count)*Ee;pe!==null&&(we=Math.max(we,pe.start*Ee),et=Math.min(et,(pe.start+pe.count)*Ee)),ve!==null?(we=Math.max(we,0),et=Math.min(et,ve.count)):Qe!=null&&(we=Math.max(we,0),et=Math.min(et,Qe.count));let Nt=et-we;if(Nt<0||Nt===1/0)return;le.setup(H,z,de,X,ve);let _t,pt=J;if(ve!==null&&(_t=T.get(ve),pt=ue,pt.setIndex(_t)),H.isMesh)z.wireframe===!0?(ae.setLineWidth(z.wireframeLinewidth*Ct()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(H.isLine){let Qt=z.linewidth;Qt===void 0&&(Qt=1),ae.setLineWidth(Qt*Ct()),H.isLineSegments?pt.setMode(N.LINES):H.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else H.isPoints?pt.setMode(N.POINTS):H.isSprite&&pt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Qt=H._multiDrawStarts,Te=H._multiDrawCounts,ri=H._multiDrawCount,ot=ve?T.get(ve).bytesPerElement:1,On=Ie.get(z).currentProgram.getUniforms();for(let ei=0;ei<ri;ei++)On.setValue(N,"_gl_DrawID",ei),pt.render(Qt[ei]/ot,Te[ei])}else if(H.isInstancedMesh)pt.renderInstances(we,Nt,H.count);else if(X.isInstancedBufferGeometry){let Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,Qt);pt.renderInstances(we,Nt,Te)}else pt.render(we,Nt)};function hu(E,F,X,z){k!==null&&E.isNodeMaterial&&k.setObject(z,E),Rt===!0&&Z.setState(E,X,!1),E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,mr(E,F,z),E.side=Vi,E.needsUpdate=!0,mr(E,F,z),E.side=Ut):mr(E,F,z)}this.compile=function(E,F,X=null){X===null&&(X=E),k!==null&&k.renderStart(E,F,X),v=Y.get(X),v.init(F),S.push(v),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights(),k!==null&&k.updateLights(v.state.lightsArray),Pt=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,Pt),Rt===!0&&Z.setGlobalState(this.clippingPlanes,F),k!==null&&he.render(v.state.shadowsArray,X,F);let z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let de=pe[Se];hu(de,X,F,H),z.add(de)}else hu(pe,X,F,H),z.add(pe)}),v=S.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(E,F,X=null){let z=this.compile(E,F,X);return new Promise(H=>{function pe(){if(z.forEach(function(Se){let ve=Ie.get(Se).currentProgram;(ve===void 0||ve.isReady())&&z.delete(Se)}),z.size===0){H(E);return}setTimeout(pe,10)}rt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ql=null;function sp(E){Ql&&Ql(E)}function uu(){Un.stop()}function du(){Un.start()}let Un=new _f;Un.setAnimationLoop(sp),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(E){Ql=E,se.setAnimationLoop(E),E===null?Un.stop():Un.start()},se.addEventListener("sessionstart",uu),se.addEventListener("sessionend",du),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(E,F);let X=se.enabled===!0&&se.isPresenting===!0,z=P!==null&&(ie===null||X)&&P.begin(C,ie);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,F,ie),v=Y.get(E,S.length),v.init(F),v.state.textureUnits=Ne.getTextureUnits(),S.push(v),U.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Dt.setFromArrayCamera(F):Ke.setFromProjectionMatrix(U,wi,F.reversedDepth),Pt=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,Pt),w=fe.get(E,x.length),w.init(),x.push(w),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&ec(Se,F,-1/0,C.sortObjects)}ec(E,F,0,C.sortObjects),w.finish(),k!==null&&k.updateLights(v.state.lightsArray),C.sortObjects===!0&&w.sort(Ue,bt),ut=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ut&&I.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Z.beginShadows();let H=v.state.shadowsArray;if(he.render(H,E,F),Rt===!0&&Z.endShadows(),(z&&P.hasRenderPass())===!1){let Se=w.opaque,de=w.transmissive;if(v.setupLights(),F.isArrayCamera){let ve=F.cameras;if(de.length>0)for(let Ee=0,He=ve.length;Ee<He;Ee++){let Qe=ve[Ee];pu(Se,de,E,Qe)}ut&&I.render(E);for(let Ee=0,He=ve.length;Ee<He;Ee++){let Qe=ve[Ee];fu(w,E,Qe,Qe.viewport)}}else de.length>0&&pu(Se,de,E,F),ut&&I.render(E),fu(w,E,F)}ie!==null&&G===0&&(Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie)),z&&P.end(C),E.isScene===!0&&E.onAfterRender(C,E,F),le.resetDefaultState(),W=-1,j=null,S.pop(),S.length>0?(v=S[S.length-1],Ne.setTextureUnits(v.state.textureUnits),Rt===!0&&Z.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,k!==null&&k.renderEnd()};function ec(E,F,X,z){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){let Se=F.isArrayCamera?Dt:Ke;if(!E.frustumCulled||E.intersectsFrustum(Se)){z&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);let de=ne.update(E),ve=E.material;ve.visible&&w.push(E,de,ve,X,De.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Se=F.isArrayCamera?Dt:Ke;if(!E.frustumCulled||E.intersectsFrustum(Se)){let de=ne.update(E),ve=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(ve)){let Ee=de.groups;for(let He=0,Qe=Ee.length;He<Qe;He++){let we=Ee[He],et=ve[we.materialIndex];et&&et.visible&&w.push(E,de,et,X,De.z,we,F)}}else ve.visible&&w.push(E,de,ve,X,De.z,null,F)}}}let pe=E.children;for(let Se=0,de=pe.length;Se<de;Se++)ec(pe[Se],F,X,z)}function fu(E,F,X,z){let{opaque:H,transmissive:pe,transparent:Se}=E;v.setupLightsView(X),Rt===!0&&Z.setGlobalState(C.clippingPlanes,X),z&&ae.viewport(ee.copy(z)),H.length>0&&Ma(H,F,X),pe.length>0&&Ma(pe,F,X),Se.length>0&&Ma(Se,F,X),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function pu(E,F,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[z.id]===void 0){let we=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[z.id]=new _i(1,1,{generateMipmaps:!0,type:we?ki:pi,minFilter:Ti,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let pe=v.state.transmissionRenderTarget[z.id],Se=z.viewport||ee;pe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ve=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(K),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),ut&&I.render(X);let He=C.toneMapping;C.toneMapping=Wi;let Qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),v.setupLightsView(z),Rt===!0&&Z.setGlobalState(C.clippingPlanes,z),Ma(E,X,z),Ne.updateMultisampleRenderTarget(pe),Ne.updateRenderTargetMipmap(pe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let et=0,Nt=F.length;et<Nt;et++){let _t=F[et],{object:pt,geometry:Qt,material:Te,group:ri}=_t;if(Te.side===Ut&&pt.layers.test(z.layers)){let ot=Te.side;Te.side=Zt,Te.needsUpdate=!0,mu(pt,X,z,Qt,Te,ri),Te.side=ot,Te.needsUpdate=!0,we=!0}}we===!0&&(Ne.updateMultisampleRenderTarget(pe),Ne.updateRenderTargetMipmap(pe))}C.setRenderTarget(de,ve,Ee),C.setClearColor(K,me),Qe!==void 0&&(z.viewport=Qe),C.toneMapping=He}function Ma(E,F,X){let z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,pe=E.length;H<pe;H++){let Se=E[H],{object:de,geometry:ve,group:Ee}=Se,He=Se.material;He.allowOverride===!0&&z!==null&&(He=z),de.layers.test(X.layers)&&mu(de,F,X,ve,He,Ee)}}function mu(E,F,X,z,H,pe){k!==null&&H.isNodeMaterial&&k.setObject(E,H),E.onBeforeRender(C,F,X,z,H,pe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(C,F,X,z,E,pe),H.transparent===!0&&H.side===Ut&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,C.renderBufferDirect(X,F,z,H,E,pe),H.side=Vi,H.needsUpdate=!0,C.renderBufferDirect(X,F,z,H,E,pe),H.side=Ut):C.renderBufferDirect(X,F,z,H,E,pe),E.onAfterRender(C,F,X,z,H,pe)}function gu(E){let F=0;for(let X of E)X.texture!==null&&F++;return F}function mr(E,F,X){F.isScene!==!0&&(F=Ze);let z=Ie.get(E),H=v.state.lights,pe=v.state.shadowsArray,Se=H.state.version,de=Q.getParameters(E,H.state,pe,F,X,v.state.lightProbeGridArray),ve=Q.getProgramCacheKey(de),Ee=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=R.get(E.envMap||z.environment,He),z.envMapRotation=z.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",ct),Ee=new Map,z.programs=Ee,z.programVariants=new Map);let Qe=Ee.get(ve);if(Qe!==void 0){if(z.currentProgram===Qe&&z.lightsStateVersion===Se)return xu(E,de),Qe}else de.uniforms=Q.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,X,de),E.onBeforeCompile(de,C),Qe=Q.acquireProgram(de,ve),Ee.set(ve,Qe),z.uniforms=de.uniforms;let we=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=Z.uniform),xu(E,de),z.needsLights=lp(E),z.lightsStateVersion=Se,z.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),z.numLightProbeGrids=gu(v.state.lightProbeGridArray),z.currentProgram=Qe,z.uniformsList=null,Qe}function rp(E,F,X,z,H){let pe=Ie.get(E),Se=pe.currentProgram.id+","+z+","+H,de=pe.programVariants.get(Se);return de===void 0?(de=mr(E,F,X),pe.programVariants.set(Se,de)):(pe.currentProgram=de,pe.uniformsList=null,pe.outputColorSpace=z,pe.toneMapping=H),de}function bu(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=sr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function xu(E,F){let X=Ie.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ap(E,F,X,z,H){F.isScene!==!0&&(F=Ze),Ne.resetTextureUnits();let pe=F.fog,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,de=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=R.get(z.envMap||Se,ve),He=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,Nt=!!X.morphAttributes.color,_t=Wi;z.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(_t=C.toneMapping);let pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=pt!==void 0?pt.length:0,Te=Ie.get(z),ri=v.state.lights;if(Rt===!0&&(Pt===!0||E!==j)){let Et=E===j&&z.id===W;Z.setState(z,E,Et)}let ot=!1,On=!1;z.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==ri.state.version||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Ee||z.fog===!0&&Te.fog!==pe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Z.numPlanes||Te.numIntersection!==Z.numIntersection)||Te.vertexAlphas!==He||Te.vertexTangents!==Qe||Te.morphTargets!==we||Te.morphNormals!==et||Te.morphColors!==Nt||Te.morphTargetsCount!==Qt||Te.numLightProbeGrids!==gu(v.state.lightProbeGridArray)?ot=!0:(Te.outputColorSpace!==de||Te.toneMapping!==_t)&&(On=!0):(ot=!0,Te.__version=z.version);let ei=Te.currentProgram;(ot===!0||On===!0)&&(ei=On===!0?rp(z,F,H,de,_t):mr(z,F,H),k&&z.isNodeMaterial&&k.onUpdateProgram(z,ei,Te));let Sa=!1,yn=!1,Bn=!1,it=ei.getUniforms(),Jt=Te.uniforms;if(ae.useProgram(ei.program)&&(Sa=!0,yn=!0,Bn=!0),z.id!==W&&(W=z.id,yn=!0),Sa||j!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",E.projectionMatrix),it.setValue(N,"viewMatrix",E.matrixWorldInverse);let qt=it.map.cameraPosition;qt!==void 0&&qt.setValue(N,te.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,yn=!0,Bn=!0)}if(Te.needsLights&&(ri.state.sunShadowMap.length>0&&it.setValue(N,"sunShadowMap",ri.state.sunShadowMap,Ne),ri.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",ri.state.directionalShadowMap,Ne),ri.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",ri.state.spotShadowMap,Ne),ri.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",ri.state.pointShadowMap,Ne)),H.isSkinnedMesh){it.setOptional(N,H,"bindMatrix"),it.setOptional(N,H,"bindMatrixInverse");let Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),it.setValue(N,"boneTexture",Et.boneTexture,Ne))}H.isBatchedMesh&&(it.setOptional(N,H,"batchingTexture"),it.setValue(N,"batchingTexture",H._matricesTexture,Ne),it.setOptional(N,H,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",H._indirectTexture,Ne),it.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",H._colorsTexture,Ne));let Ci=X.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&$.update(H,X,ei),(yn||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,it.setValue(N,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Qx()),yn){if(it.setValue(N,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&op(Jt,Bn),pe&&z.fog===!0&&oe.refreshFogUniforms(Jt,pe),oe.refreshMaterialUniforms(Jt,z,ge,Ce,v.state.transmissionRenderTarget[E.id]),Te.needsLights&&Te.numLightProbeGrids>0){let Et=y,qt=0;for(let Zi of v.state.lightProbeGridArray)Zi.texture!==null&&(Et.textures[qt]=Zi.texture,Et.min[qt]=Zi.boundingBox.min,Et.max[qt]=Zi.boundingBox.max,Et.resolution[qt]=Zi.resolution,qt++);for(let Zi in Et)Et[Zi].length=qt;Jt.probesSH.value=Et.textures,Jt.probesMin.value=Et.min,Jt.probesMax.value=Et.max,Jt.probesResolution.value=Et.resolution}sr.upload(N,bu(Te),Jt,Ne)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(sr.upload(N,bu(Te),Jt,Ne),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(N,"center",H.center),it.setValue(N,"modelViewMatrix",H.modelViewMatrix),it.setValue(N,"normalMatrix",H.normalMatrix),it.setValue(N,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Et=z.uniformsGroups;for(let qt=0,Zi=Et.length;qt<Zi;qt++){let vu=Et[qt];Pe.update(vu,ei),Pe.bind(vu,ei)}}return ei}function op(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function lp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(E,F,X){let z=Ie.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ie.get(E.texture).__webglTexture=F,Ie.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let X=Ie.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){ie=E,O=F,G=X;let z=null,H=!1,pe=!1;if(E){let de=Ie.get(E);if(de.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(E.viewport),ce.copy(E.scissor),ke=E.scissorTest,ae.viewport(ee),ae.scissor(ce),ae.setScissorTest(ke),W=-1;return}else if(de.__webglFramebuffer===void 0)Ne.setupRenderTarget(E);else if(de.__hasExternalTextures)Ne.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(de.__boundDepthTexture!==He){if(He!==null&&Ie.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(pe=!0);let Ee=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?z=Ee[F][X]:z=Ee[F],H=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?z=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[X]:z=Ee,ee.copy(E.viewport),ce.copy(E.scissor),ke=E.scissorTest}else ee.copy(Fe).multiplyScalar(ge).floor(),ce.copy(st).multiplyScalar(ge).floor(),ke=at;if(X!==0&&(z=V),ae.bindFramebuffer(N.FRAMEBUFFER,z)&&ae.drawBuffers(E,z),ae.viewport(ee),ae.scissor(ce),ae.setScissorTest(ke),H){let de=Ie.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,X)}else if(pe){let de=F;for(let ve=0;ve<E.textures.length;ve++){let Ee=Ie.get(E.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,X,de)}}else if(E!==null&&X!==0){let de=Ie.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,X)}W=-1};function _u(E){let F=Ie.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=dt.textureFormatReadable(E.format),F.__typeReadable=dt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,X,z,H,pe,Se,de=0){if(!(E&&E.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve){ae.bindFramebuffer(N.FRAMEBUFFER,ve);try{let Ee=E.textures[de],He=Ee.format,Qe=Ee.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);let we=_u(Ee);if(we.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-z&&X>=0&&X<=E.height-H&&N.readPixels(F,X,z,H,re.convert(He),re.convert(Qe),pe)}finally{let Ee=ie!==null?Ie.get(ie).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,z,H,pe,Se,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve)if(F>=0&&F<=E.width-z&&X>=0&&X<=E.height-H){ae.bindFramebuffer(N.FRAMEBUFFER,ve);let Ee=E.textures[de],He=Ee.format,Qe=Ee.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);let we=_u(Ee);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(F,X,z,H,re.convert(He),re.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Nt=ie!==null?Ie.get(ie).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Nt);let _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wd(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){let z=Math.pow(2,-X),H=Math.floor(E.image.width*z),pe=Math.floor(E.image.height*z),Se=F!==null?F.x:0,de=F!==null?F.y:0;Ne.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Se,de,H,pe),ae.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,z=null,H=0,pe=0){let Se,de,ve,Ee,He,Qe,we,et,Nt,_t=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(X!==null)Se=X.max.x-X.min.x,de=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,He=X.min.y,Qe=X.isBox3?X.min.z:0;else{let it=Math.pow(2,-H);Se=Math.floor(_t.width*it),de=Math.floor(_t.height*it),E.isDataArrayTexture?ve=_t.depth:E.isData3DTexture?ve=Math.floor(_t.depth*it):ve=1,Ee=0,He=0,Qe=0}z!==null?(we=z.x,et=z.y,Nt=z.z):(we=0,et=0,Nt=0);let pt=re.convert(F.format),Qt=re.convert(F.type),Te;F.isData3DTexture?(Ne.setTexture3D(F,0),Te=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ne.setTexture2DArray(F,0),Te=N.TEXTURE_2D_ARRAY):(Ne.setTexture2D(F,0),Te=N.TEXTURE_2D),ae.activeTexture(N.TEXTURE0),ae.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),ae.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ae.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let ri=ae.getParameter(N.UNPACK_ROW_LENGTH),ot=ae.getParameter(N.UNPACK_IMAGE_HEIGHT),On=ae.getParameter(N.UNPACK_SKIP_PIXELS),ei=ae.getParameter(N.UNPACK_SKIP_ROWS),Sa=ae.getParameter(N.UNPACK_SKIP_IMAGES);ae.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),ae.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),ae.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),ae.pixelStorei(N.UNPACK_SKIP_ROWS,He),ae.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);let yn=E.isDataArrayTexture||E.isData3DTexture,Bn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let it=Ie.get(E),Jt=Ie.get(F),Ci=Ie.get(it.__renderTarget),Et=Ie.get(Jt.__renderTarget);ae.bindFramebuffer(N.READ_FRAMEBUFFER,Ci.__webglFramebuffer),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<ve;qt++)yn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(E).__webglTexture,H,Qe+qt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(F).__webglTexture,pe,Nt+qt)),N.blitFramebuffer(Ee,He,Ee+Se,He+de,we,et,we+Se,et+de,N.DEPTH_BUFFER_BIT,N.NEAREST);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Ie.has(E)){let it=Ie.get(E),Jt=Ie.get(F);ae.bindFramebuffer(N.READ_FRAMEBUFFER,L),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let Ci=0;Ci<ve;Ci++)yn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,it.__webglTexture,H,Qe+Ci):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,it.__webglTexture,H),Bn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,pe,Nt+Ci):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,pe),H!==0?N.blitFramebuffer(Ee,He,Ee+Se,He+de,we,et,we+Se,et+de,N.COLOR_BUFFER_BIT,N.NEAREST):Bn?N.copyTexSubImage3D(Te,pe,we,et,Nt+Ci,Ee,He,Se,de):N.copyTexSubImage2D(Te,pe,we,et,Ee,He,Se,de);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Te,pe,we,et,Nt,Se,de,ve,pt,Qt,_t.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,pe,we,et,Nt,Se,de,ve,pt,_t.data):N.texSubImage3D(Te,pe,we,et,Nt,Se,de,ve,pt,Qt,_t):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,we,et,Se,de,pt,Qt,_t.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,we,et,_t.width,_t.height,pt,_t.data):N.texSubImage2D(N.TEXTURE_2D,pe,we,et,Se,de,pt,Qt,_t);ae.pixelStorei(N.UNPACK_ROW_LENGTH,ri),ae.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),ae.pixelStorei(N.UNPACK_SKIP_PIXELS,On),ae.pixelStorei(N.UNPACK_SKIP_ROWS,ei),ae.pixelStorei(N.UNPACK_SKIP_IMAGES,Sa),pe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&N.generateMipmap(Te),ae.unbindTexture()},this.initRenderTarget=function(E){Ie.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){O=0,G=0,ie=null,ae.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function Rh(a,e){if(e===Qc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===nr||e===da){let t=a.getIndex();if(t===null){let s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let i=t.count-2,n=[];if(e===nr)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Pf(a){let e=new Map,t=new Map,i=a.clone();return If(a,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,r=e.get(n),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function If(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)If(a.children[i],e.children[i],t)}var Sl=class extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new wl(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wl(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jh(t)})}load(e,t,i,n){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=mn.extractUrlBase(e);r=mn.resolveURL(c,this.path)}else r=mn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Js(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s,r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kf){try{r[Ye.KHR_BINARY_GLTF]=new Yh(e)}catch(u){n&&n(u);return}s=JSON.parse(r[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:r[u]=new Fh;break;case Ye.KHR_DRACO_MESH_COMPRESSION:r[u]=new Zh(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:r[u]=new $h;break;case Ye.KHR_MESH_QUANTIZATION:r[u]=new Qh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function e_(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function At(a,e,t){let i=a.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lh=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],oi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=u;break;case"spot":c=new $r(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Fh=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,i){let n=[];e.color=new Me(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],oi),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(n)}},Dh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(s,s)}return Promise.all(n)}},kh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Uh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Oh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Bh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],oi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Mt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},zh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Hh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(s[0],s[1],s[2],oi),Promise.all(n)}},Gh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(s[0],s[1],s[2],oi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Mt)),Promise.all(n)}},Wh=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},qh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=At(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Xh=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},jh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=n.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},Kh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=n.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},wl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},Jh=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Ai.TRIANGLES&&c.mode!==Ai.TRIANGLE_STRIP&&c.mode!==Ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let b=new Ge,p=new A,m=new mt,_=new A(1,1,1),M=new es(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&_.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,b.compose(p,m,_));let y=null;for(let w in l)if(w==="_COLOR_0"){let v=l[w];M.instanceColor=new ln(v.array,v.itemSize,v.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let x=M.geometry;y=new Lt,y.name=x.name;for(let S in x.attributes)y.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)y.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)y.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),M.geometry=y}let v=l[w];y.setAttribute(w,new ln(v.array,v.itemSize,v.normalized))}gt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},kf="glTF",xa=12,Lf={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-xa,s=new DataView(e,xa),r=0;for(;r<n;){let o=s.getUint32(r,!0);r+=4;let l=s.getUint32(r,!0);if(r+=4,l===Lf.JSON){let c=new Uint8Array(e,xa+r,o);this.content=i.decode(c)}else if(l===Lf.BIN){let c=xa+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let u=tu[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=tu[h]||h.toLowerCase();if(r[h]!==void 0){let d=i.accessors[e.attributes[h]],f=lr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],p=l[g];p!==void 0&&(b.normalized=p)}u(f)},o,c,oi,d)})})}},$h=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qh=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Tl=class extends Hi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,b=g-c,p=-2*f+3*d,m=f-d,_=1-p,M=m-d+u;for(let y=0;y!==o;y++){let w=r[b+y+o],v=r[b+y+l]*h,x=r[g+y+o],S=r[g+y]*h;s[y]=_*w+M*v+p*x+m*S}return s}},t_=new mt,eu=class extends Tl{interpolate_(e,t,i,n){let s=super.interpolate_(e,t,i,n);return t_.fromArray(s).normalize().toArray(s),s}},Ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ff={9728:It,9729:Bt,9984:Lo,9985:tr,9986:cs,9987:Ti},Df={33071:Si,33648:Us,10497:Rn},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i_={CUBICSPLINE:void 0,LINEAR:Kn,STEP:jn},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function n_(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),a.DefaultMaterial}function fs(a,e,t){for(let i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ki(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function s_(a,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function r_(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a_(a){let e,t=a.extensions&&a.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=a.indices+":"+Ih(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+Ih(a.targets[i]);return e}function Ih(a){let e="",t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function iu(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function o_(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var l_=new Ge,nu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?(this.textureLoader=new Jr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Qr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return fs(s,o,n),Ki(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){let r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),s=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(mn.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let r=Ch[n.type],o=lr[n.componentType],l=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new wt(c,r,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],l=Ch[n.type],c=lr[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,b,p;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count,M=t.cache.get(_);M||(b=new c(o,m*f,n.count*f/h),M=new Zn(b,f/h),t.cache.add(_,M)),p=new Cn(M,l,d%f/h,g)}else o===null?b=new c(n.count*l):b=new c(o,d,n.count*l),p=new wt(b,l,g);if(n.sparse!==void 0){let m=Ch.SCALAR,_=lr[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,w=new _(r[1],M,n.sparse.count*m),v=new c(r[2],y,n.sparse.count*l);o!==null&&(p=new wt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,S=w.length;x<S;x++){let P=w[x];if(p.setX(P,v[x*l]),l>=2&&p.setY(P,v[x*l+1]),l>=3&&p.setZ(P,v[x*l+2]),l>=4&&p.setW(P,v[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){let n=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Ff[d.magFilter]||Bt,h.minFilter=Ff[d.minFilter]||Ti,h.wrapS=Df[d.wrapS]||Rn,h.wrapT=Df[d.wrapT]||Rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Bt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=n.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)h=i.getDependency("bufferView",r.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let b=f;t.isImageBitmapLoader===!0&&(b=function(p){let m=new zt(p);m.needsUpdate=!0,f(m)}),t.load(mn.resolveURL(d,s.path),b,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),Ki(d,r),d.userData.mimeType=r.mimeType||o_(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(r);r=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Xs,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new qs,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return zi}loadMaterial(e){let t=this,i=this.json,n=this.extensions,s=i.materials[e],r,o={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){let u=n[Ye.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],oi),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ut);let h=s.alphaMode||Ph.OPAQUE;if(h===Ph.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ph.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==di&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==di&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==di){let u=s.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],oi)}return s.emissiveTexture!==void 0&&r!==di&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(c).then(function(){let u=new r(o);return s.name&&(u.name=s.name),Ki(u,s),t.associations.set(u,{materials:e}),s.extensions&&fs(n,u,s),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nf(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=a_(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Nf(new Lt,c,t),c.mode===Ai.TRIANGLE_STRIP?d=d.then(f=>Rh(f,da)):c.mode===Ai.TRIANGLE_FAN&&(d=d.then(f=>Rh(f,nr))),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?n_(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],p=r[f],m,_=c[f];if(p.mode===Ai.TRIANGLES||p.mode===Ai.TRIANGLE_STRIP||p.mode===Ai.TRIANGLE_FAN||p.mode===void 0){let M=s.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&y?new Ur(b,_):new Xe(b,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Ai.LINES)m=new Br(b,_);else if(p.mode===Ai.LINE_STRIP)m=new ts(b,_);else if(p.mode===Ai.LINE_LOOP)m=new zr(b,_);else if(p.mode===Ai.POINTS)m=new is(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&r_(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ki(m,s),p.extensions&&fs(n,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&fs(n,u[0],s),u[0];let d=new St;s.extensions&&fs(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ot(ci.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new as(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ki(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),r=n,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u){o.push(u);let d=new Ge;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Or(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],b=f.target,p=b.node,m=n.parameters!==void 0?n.parameters[g.input]:g.input,_=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],p=u[4],m=[];for(let M=0,y=d.length;M<y;M++){let w=d[M],v=f[M],x=g[M],S=b[M],P=p[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=i._createAnimationTracks(w,v,x,S,P);if(C)for(let D=0;D<C.length;D++)m.push(C[D])}let _=new ns(s,void 0,m);return Ki(_,n),_})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,l_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new A().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Vs:c.length>1?h=new St:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Ki(h,s),s.extensions&&fs(i,h,s),s.matrix!==void 0){let u=new Ge;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,s=new St;i.name&&(s.name=n.createUniqueName(i.name)),Ki(s,i),i.extensions&&fs(t,s,i);let r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(n.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?s.add(Pf(d)):s.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof ni||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){let r=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Nn[s.path]===Nn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Nn[s.path]){case Nn.weights:h=un;break;case Nn.rotation:h=dn;break;case Nn.translation:case Nn.scale:h=Fn;break;default:switch(i.itemSize){case 1:h=un;break;case 2:case 3:default:h=Fn;break}break}let u=n.interpolation!==void 0?i_[n.interpolation]:Kn,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){let b=new h(l[f]+"."+Nn[s.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=iu(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof dn?eu:Tl;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function c_(a,e,t){let i=e.attributes,n=new vi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){let h=iu(lr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new A,l=new A;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=iu(lr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;let r=new ui;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function Nf(a,e,t){let i=e.attributes,n=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(let r in i){let o=tu[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(r)}return Je.workingColorSpace!==oi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Ki(a,e),c_(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?s_(a,e.targets,t):a})}var Uf=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(n,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var _=new Uint8Array(m.length),M=0;M<m.length;++M){var y=m.charCodeAt(M);_[M]=y>96?y-97:y>64?y-39:y+4}for(var w=0,M=0;M<m.length;++M)_[w++]=_[M]<60?i[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,w)}function l(m,_,M,y,w,v,x){var S=m.exports.sbrk,P=y+3&-4,C=S(P*w),D=S(v.length),k=new Uint8Array(m.exports.memory.buffer);k.set(v,D);var V=_(C,y,w,D,v.length);if(V==0&&x&&x(C,P,w),M.set(k.subarray(C,C+y*w)),S(C-S(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var _={object:new Worker(m),pending:0,requests:{}};return _.object.onmessage=function(M){var y=M.data;_.pending-=y.count,_.requests[y.id][y.action](y.value),delete _.requests[y.id]},_}function g(m){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+l.toString()+p.toString(),M=new Blob([_],{type:"text/javascript"}),y=URL.createObjectURL(M),w=u.length;w<m;++w)u[w]=f(y);for(var w=m;w<u.length;++w)u[w].object.postMessage({});u.length=m,URL.revokeObjectURL(y)}function b(m,_,M,y,w){for(var v=u[0],x=1;x<u.length;++x)u[x].pending<v.pending&&(v=u[x]);return new Promise(function(S,P){var C=new Uint8Array(M),D=++d;v.pending+=m,v.requests[D]={resolve:S,reject:P},v.object.postMessage({id:D,count:m,size:_,source:C,mode:y,filter:w},[C.buffer])})}function p(m){var _=m.data;self.ready.then(function(M){if(!_.id)return self.close();try{var y=new Uint8Array(_.count*_.size);l(M,M.exports[_.mode],y,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:y},[y.buffer])}catch(w){self.postMessage({id:_.id,count:_.count,action:"reject",value:w})}})}return{ready:r,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,_,M,y,w){l(s,s.exports.meshopt_decodeVertexBuffer,m,_,M,y,s.exports[c[w]])},decodeIndexBuffer:function(m,_,M,y){l(s,s.exports.meshopt_decodeIndexBuffer,m,_,M,y)},decodeIndexSequence:function(m,_,M,y){l(s,s.exports.meshopt_decodeIndexSequence,m,_,M,y)},decodeGltfBuffer:function(m,_,M,y,w,v){l(s,s.exports[h[w]],m,_,M,y,s.exports[c[v]])},decodeGltfBufferAsync:function(m,_,M,y,w){return u.length>0?b(m,_,M,h[y],c[w]):r.then(function(){var v=new Uint8Array(m*_);return l(s,s.exports[h[y]],v,m,_,M,s.exports[c[w]]),v})}}})();var nt=new Me("#00F0FA"),ze=new Me("#BFFCFF"),yt=new Me("#FF2452"),Ft=new Me("#FFC2CF");function Ri(a){return a.transparent=!0,a.depthWrite=!1,a.blending=Ao,a.blendEquation=gn,a.blendSrc=na,a.blendDst=ia,a.blendSrcAlpha=Ro,a.blendDstAlpha=ia,a}var _a=null;function Of(){if(_a)return _a;let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),_a=new js(a),_a.colorSpace=Mt,_a}function jt(a,e){let t=Ri(new Pn({map:Of(),color:a,opacity:1})),i=new $n(t);return i.scale.setScalar(e),i.renderOrder=20,i}var El=class{constructor(e,t=700){this.max=t,this.count=0;let i=new Lt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.alpha=new Float32Array(t),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.age=new Float32Array(t),this.drag=new Float32Array(t),this.size0=new Float32Array(t),this.grav=new Float32Array(t),this.alpha0=new Float32Array(t),i.setAttribute("position",new wt(this.pos,3).setUsage(us)),i.setAttribute("aColor",new wt(this.col,3).setUsage(us)),i.setAttribute("aAlpha",new wt(this.alpha,1).setUsage(us)),i.setAttribute("aSize",new wt(this.size,1).setUsage(us)),i.setDrawRange(0,0),this.uniforms={uScale:{value:1}};let n=Ri(new vt({uniforms:this.uniforms,vertexShader:`attribute vec3 aColor; attribute float aAlpha; attribute float aSize;
        varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize = aSize * uScale; gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vC; varying float vA;
        void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d); a*=a;
          gl_FragColor=vec4(vC, vA*a); }`}));this.points=new is(i,n),this.points.frustumCulled=!1,this.points.renderOrder=30,this.geo=i,e.add(this.points)}emit(e,t,i,{life:n=.5,size:s=8,alpha:r=1,drag:o=2,grav:l=0}={}){if(this.count>=this.max)return;let c=this.count++;this.pos[c*3]=e.x,this.pos[c*3+1]=e.y,this.pos[c*3+2]=e.z,this.vel[c*3]=t.x,this.vel[c*3+1]=t.y,this.vel[c*3+2]=t.z,this.col[c*3]=i.r,this.col[c*3+1]=i.g,this.col[c*3+2]=i.b,this.alpha[c]=r,this.alpha0[c]=r,this.size[c]=s,this.size0[c]=s,this.life[c]=n,this.age[c]=0,this.drag[c]=o,this.grav[c]=l}burst(e,t,i,n,s={}){let r=new A;for(let o=0;o<i;o++){let l=Math.random()*Math.PI*2,c=(Math.random()-.5)*.9,h=n*(.35+Math.random()*.75);r.set(Math.cos(l)*Math.cos(c)*h,Math.sin(l)*Math.cos(c)*h,Math.sin(c)*h*.4),this.emit(e,r,t,{...s,life:(s.life||.5)*(.6+Math.random()*.7),size:(s.size||8)*(.6+Math.random()*.8)})}}update(e){let t=0;for(;t<this.count;){if(this.age[t]+=e,this.age[t]>=this.life[t]){this._kill(t);continue}let i=Math.exp(-this.drag[t]*e);this.vel[t*3]*=i,this.vel[t*3+1]=this.vel[t*3+1]*i-this.grav[t]*e,this.vel[t*3+2]*=i,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e;let n=this.age[t]/this.life[t];this.alpha[t]=this.alpha0[t]*(1-n)*(1-n),this.size[t]=this.size0[t]*(1-.5*n),t++}this.geo.setDrawRange(0,this.count);for(let i of["position","aColor","aAlpha","aSize"])this.geo.attributes[i].needsUpdate=!0}_kill(e){let t=--this.count;if(e!==t){for(let[i,n]of[[this.pos,3],[this.vel,3],[this.col,3]])for(let s=0;s<n;s++)i[e*n+s]=i[t*n+s];for(let i of[this.alpha,this.alpha0,this.size,this.size0,this.life,this.age,this.drag,this.grav])i[e]=i[t]}}clear(){this.count=0,this.geo.setDrawRange(0,0)}},h_="varying float vV; void main(){ vV = uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",u_=`varying float vV; uniform float uI; uniform float uT; uniform vec3 uC;
  void main(){ float f = pow(vV, 1.6); float flick = 0.85 + 0.15*sin(uT*60.0 + vV*14.0);
    vec3 col = mix(uC, vec3(0.85,1.0,1.0), pow(vV, 5.0));
    gl_FragColor = vec4(col, f * uI * flick); }`,Al=class{constructor(e,{radius:t=.028,length:i=.16,color:n=nt}={}){this.group=new St;let s=new Wr(t,t*.15,i,18,1,!0);s.translate(0,-i/2,0),this.uniforms={uI:{value:0},uT:{value:0},uC:{value:n.clone()}};let r=Ri(new vt({uniforms:this.uniforms,vertexShader:h_,fragmentShader:u_,side:Ut}));this.flame=new Xe(s,r),this.flame.renderOrder=25,this.flame.frustumCulled=!1,this.glow=jt(n,t*4.5),this.group.add(this.flame,this.glow),this.length=i,this.intensity=0,e.add(this.group),this._a=new A,this._b=new A,this._q=new mt}place(e,t,i){this.group.position.copy(e),this._q.setFromUnitVectors(this._b.set(0,-1,0),t),this.group.quaternion.copy(this._q),this.group.scale.setScalar(i)}set(e,t){this.intensity=e,this.uniforms.uI.value=Math.min(1.4,e),this.uniforms.uT.value=t,this.flame.scale.set(1,.35+e*.9,1),this.glow.material.opacity=Math.min(1,.15+e*.9),this.glow.scale.setScalar(this.length*(.6+e*.9)),this.group.visible=e>.01}},ps=class{constructor(e,{color:t=nt,hot:i=ze,size:n=10,speed:s=1300,length:r=1.8}={}){this.group=new St;let o=new Xe(new qr(1,12,8),Ri(new di({color:i})));o.scale.set(n*.45,n*.45,n*r),this.core=o,this.glow=jt(t,n*4.2),this.group.add(o,this.glow),this.group.renderOrder=26,e.add(this.group),this.color=t,this.speed=s,this.radius=n*.45,this.alive=!0,this.age=0,this.vel=new A}fire(e,t){return this.group.position.copy(e),this.vel.copy(t).sub(e).normalize().multiplyScalar(this.speed),this.core.quaternion.setFromUnitVectors(new A(0,0,1),this.vel.clone().normalize()),this}update(e){this.age+=e,this.group.position.addScaledVector(this.vel,e)}passedWithin(e,t,i){let n=e.clone().sub(this.group.position),s=Math.max(-i,Math.min(0,n.dot(this.vel)/(this.vel.lengthSq()||1)));return n.addScaledVector(this.vel,-s).lengthSq()<t*t}dispose(e){e.remove(this.group),this.core.geometry.dispose(),this.core.material.dispose(),this.glow.material.dispose(),this.alive=!1}},Bf=`vec3 energy(float r) {
  vec3 white = vec3(0.97, 1.0, 1.0);
  vec3 cyan = vec3(0.12, 0.92, 1.0);
  vec3 blue = vec3(0.10, 0.29, 1.0);
  return mix(mix(white, cyan, smoothstep(0.30, 0.64, r)), blue, smoothstep(0.60, 0.89, r));
}`,Rl=class{constructor(e){this.uniforms={uPower:{value:0},uTime:{value:0}},this.mesh=new Xe(new Yt(2,2),new vt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec2 vUv;
        uniform float uPower, uTime;
        ${Bf}
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p), a = atan(p.y, p.x);
          float pulse = 1.0 + sin(uTime * 24.0) * 0.055;
          float orb = r / (0.51 * pulse);
          float spokes = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 4.0), 10.0);
          float halo = (1.0 - smoothstep(0.4, 1.0, r)) * (0.23 + 0.37 * spokes);
          float opacity = max(1.0 - smoothstep(0.85, 1.02, orb), halo);
          gl_FragColor = vec4(energy(orb), opacity * uPower);
        }`})),this.mesh.visible=!1,this.mesh.renderOrder=29,e.add(this.mesh)}show(e,t,i,n){this.mesh.position.copy(e),this.mesh.position.z+=4,this.mesh.scale.setScalar(t),this.uniforms.uPower.value=i,this.uniforms.uTime.value=n,this.mesh.visible=!0}},Cl=class{constructor(e){this.uniforms={uPower:{value:0},uTime:{value:0}},this.mesh=new Xe(new Yt(2,2),Ri(new vt({uniforms:this.uniforms,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uPower, uTime;
        float h(float n){ return fract(sin(n) * 43758.5453); }
        void main(){
          vec2 p = vUv * 2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
          float k = a * 7.0 / 3.14159265; float id = floor(k * 4.0); float f = fract(k * 4.0);
          float len = 0.35 + 0.65 * h(id + floor(uTime * 9.0) * 13.0);
          float ray = smoothstep(0.5, 0.0, abs(f - 0.5)) * smoothstep(len, 0.0, r) * (0.55 + 0.45 * h(id * 3.1));
          float rays2 = pow(0.5 + 0.5 * sin(a * 23.0 - uTime * 6.0), 18.0) * smoothstep(0.9, 0.1, r);
          float corona = exp(-r * 5.5);
          float core = exp(-r * 16.0);
          vec3 blue = vec3(0.08, 0.32, 1.0), cyan = vec3(0.15, 0.92, 1.0), white = vec3(1.0);
          vec3 col = blue * (ray * 1.2 + rays2 * 0.7) + cyan * corona * 1.4 + white * core * 2.2;
          float alpha = clamp((ray * 0.8 + rays2 * 0.5 + corona + core) * uPower, 0.0, 1.0) * smoothstep(1.0, 0.75, r);
          gl_FragColor = vec4(col, alpha);
        }`}))),this.mesh.visible=!1,this.mesh.renderOrder=27,this.mesh.frustumCulled=!1,e.add(this.mesh)}show(e,t,i,n){this.mesh.position.copy(e),this.mesh.position.z+=2,this.mesh.scale.setScalar(Math.max(.001,t)),this.mesh.rotation.z=n*.6,this.uniforms.uPower.value=i,this.uniforms.uTime.value=n,this.mesh.visible=i>.01}hide(){this.mesh.visible=!1}},Pl=class{constructor(e,t,i,n,s,{particles:r=null,hold:o=.65,fade:l=.32}={}){this.scene=e,this.shot=t,this.readPalms=n,this.alive=!0,this.age=0,this.afterImpact=0,this.hold=o,this.fade=l,this.particles=r,this.width=s,this.end=i.clone(),this.uniforms={uStart:{value:i.clone()},uEnd:{value:i.clone()},uWidth:{value:s},uTime:{value:0},uOpacity:{value:1}},this.mesh=new Xe(new Yt(1,2),new vt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,toneMapped:!1,side:Ut,vertexShader:`varying vec2 vUv;
        uniform vec3 uStart, uEnd;
        uniform float uWidth;
        void main() {
          vUv = uv;
          vec2 axis = uEnd.xy - uStart.xy;
          vec2 across = vec2(-axis.y, axis.x) / max(length(axis), 0.001);
          vec3 point = mix(uStart, uEnd, uv.x);
          point.xy += across * position.y * uWidth;
          gl_Position = projectionMatrix * viewMatrix * vec4(point, 1.0);
        }`,fragmentShader:`varying vec2 vUv;
        uniform float uTime, uOpacity;
        ${Bf}
        void main() {
          float x = vUv.x, y = vUv.y * 2.0 - 1.0;
          float wave = 0.035 * sin(x * 45.0 - uTime * 32.0);
          float cap = sqrt(max(0.025, 1.0 - pow(smoothstep(0.91, 1.0, x), 2.0)));
          float r = abs(y + wave) / (cap * (1.0 - 0.20 * x));
          float edge = 1.0 - smoothstep(0.82, 0.96, r);
          float glow = (1.0 - smoothstep(0.83, 1.12, r)) * 0.23;
          float streak = pow(0.5 + 0.5 * sin(x * 63.0 - uTime * 41.0 + y * 9.0), 8.0);
          vec3 color = mix(energy(r), vec3(0.73, 0.98, 1.0), 0.48 * streak * smoothstep(0.52, 0.9, r));
          gl_FragColor = vec4(color, (edge + (1.0 - edge) * glow) * uOpacity);
        }`})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=28,e.add(this.mesh),this.gu={uStart:this.uniforms.uStart,uEnd:this.uniforms.uEnd,uWidth:{value:s*2.6},uTime:this.uniforms.uTime,uOpacity:this.uniforms.uOpacity},this.glow=new Xe(new Yt(1,2,1,1),Ri(new vt({uniforms:this.gu,toneMapped:!1,side:Ut,vertexShader:this.mesh.material.vertexShader,fragmentShader:`varying vec2 vUv; uniform float uTime, uOpacity;
        void main(){ float x = vUv.x, y = abs(vUv.y * 2.0 - 1.0);
          float g = exp(-y * 3.2) * (0.85 + 0.15 * sin(x * 40.0 - uTime * 30.0));
          float ends = smoothstep(0.0, 0.03, x) * smoothstep(1.0, 0.94, x);
          vec3 col = mix(vec3(0.1, 0.35, 1.0), vec3(0.3, 0.95, 1.0), exp(-y * 5.0));
          gl_FragColor = vec4(col, g * ends * 0.9 * uOpacity); }`}))),this.glow.frustumCulled=!1,this.glow.renderOrder=27,e.add(this.glow),this.flare=jt(new Me("#BFFCFF"),s*3.2),e.add(this.flare)}update(e){if(!this.alive)return;this.age+=e,this.shot.alive?this.end.copy(this.shot.group.position):this.afterImpact+=e;let t=this.hold+this.fade;if(this.afterImpact>=t){this.dispose();return}!this.detached&&this.readPalms(this.uniforms.uStart.value)===!1&&(this.detached=!0,this.detachT=0,this.afterImpact=Math.max(this.afterImpact,this.hold)),this.detached&&(this.detachT+=e,this.uniforms.uStart.value.lerp(this.end,1-Math.exp(-e*7))),this.uniforms.uEnd.value.copy(this.end),this.uniforms.uTime.value=this.age;let i=this.afterImpact<=this.hold?1:1-(this.afterImpact-this.hold)/this.fade,n=i*i*(3-2*i);this.uniforms.uOpacity.value=n;let s=Math.min(1,this.age/.08);if(this.uniforms.uWidth.value=this.width*(.35+.65*s)*(1+.06*Math.sin(this.age*50))*(.55+.45*n),this.gu.uWidth.value=this.uniforms.uWidth.value*2.6,this.flare.position.copy(this.end),this.flare.material.opacity=n*(.75+.25*Math.sin(this.age*60)),this.flare.scale.setScalar(this.width*(2.6+.6*Math.sin(this.age*37))*(this.shot.alive?.7:1.15)),this.particles&&n>.2){let r=new A;for(let o=0;o<3;o++){let l=Math.random()*Math.PI*2,c=this.width*(6+Math.random()*10);r.set(Math.cos(l)*c,Math.sin(l)*c,0),this.particles.emit(this.end,r,Math.random()<.4?ze:nt,{life:.35,size:this.width*.22,drag:3})}}}dispose(){this.alive&&(this.scene.remove(this.mesh),this.scene.remove(this.glow),this.scene.remove(this.flare),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.glow.geometry.dispose(),this.glow.material.dispose(),this.flare.material.dispose(),this.alive=!1)}},d_=`varying vec2 vUv; uniform float uT; uniform float uA; uniform vec3 uC;
  void main(){ vec2 p = vUv - 0.5; float r = length(p)*2.0; float ang = atan(p.y,p.x);
    float band = smoothstep(0.62,0.80,r)*smoothstep(1.0,0.86,r);
    float swirl = 0.55 + 0.45*sin(ang*5.0 - uT*9.0 + r*10.0);
    float inner = smoothstep(0.75,0.0,r)*0.35*(0.6+0.4*sin(ang*3.0+uT*6.0));
    gl_FragColor = vec4(uC, (band*swirl + inner)*uA); }`,zf="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Il=class{constructor(e,t,i,n=yt){this.u={uT:{value:0},uA:{value:0},uC:{value:n.clone()}};let s=Ri(new vt({uniforms:this.u,vertexShader:zf,fragmentShader:d_,side:Ut}));this.mesh=new Xe(new Yt(2,2),s),this.mesh.position.copy(t),this.mesh.renderOrder=22,this.radius=i,this.age=0,this.alive=!0,this.open=0,this.mesh.scale.setScalar(.01),e.add(this.mesh),this.scene=e}update(e,t){this.age+=e;let i=this.age/t;this.open=i<.35?i/.35:i>.75?Math.max(0,1-(i-.75)/.25):1;let n=1-Math.pow(1-Math.min(1,this.open),3);this.mesh.scale.setScalar(Math.max(.01,this.radius*n)),this.u.uT.value=this.age,this.u.uA.value=Math.min(1,this.open*1.4),this.mesh.rotation.z+=e*2.5,i>=1&&this.dispose()}dispose(){this.alive&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.alive=!1)}},Kt=class{constructor(e,t,i,n=nt,s=1.1){this.u={uT:{value:0},uA:{value:1},uC:{value:n.clone()}};let r=`varying vec2 vUv; uniform float uA; uniform vec3 uC; uniform float uT;
      void main(){ float r=length(vUv-0.5)*2.0; float b=smoothstep(0.80,0.93,r)*smoothstep(1.0,0.95,r);
        float fill=smoothstep(1.0,0.0,r)*0.12; gl_FragColor=vec4(uC,(b+fill)*uA); }`,o=Ri(new vt({uniforms:this.u,vertexShader:zf,fragmentShader:r,side:Ut}));this.mesh=new Xe(new Yt(2,2),o),this.mesh.position.copy(t),this.mesh.rotation.x=-Math.PI*.42,this.mesh.renderOrder=21,e.add(this.mesh),this.scene=e,this.radius=i,this.life=s,this.age=0,this.alive=!0}update(e){this.age+=e;let t=this.age/this.life,i=1-Math.pow(1-Math.min(1,t),2.5);this.mesh.scale.setScalar(this.radius*(.3+.9*i)),this.u.uA.value=(1-t)*(1-t),t>=1&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.alive=!1)}},tt=class{constructor(e,t,i,n,s=.12){this.s=jt(i,n),this.s.position.copy(t),e.add(this.s),this.scene=e,this.life=s,this.age=0,this.alive=!0,this.size=n}update(e){this.age+=e;let t=this.age/this.life;this.s.material.opacity=Math.max(0,1-t),this.s.scale.setScalar(this.size*(.7+.6*t)),t>=1&&(this.scene.remove(this.s),this.s.material.dispose(),this.alive=!1)}},mi=class{constructor(e,t,i,{width:n=6,life:s=.45,segments:r=18,branches:o=3,jag:l=.18,color:c=nt,hot:h=ze,readFrom:u=null,readTo:d=null}={}){this.scene=e,this.from=t.clone(),this.to=i.clone(),this.width=n,this.life=s,this.age=0,this.alive=!0,this.jag=l,this.readFrom=u,this.readTo=d,this.segments=r,this.paths=1+o;let f=this.paths*(r+1)*2;this.geo=new Lt,this.pos=new Float32Array(f*3),this.uvy=new Float32Array(f);let g=[];for(let b=0;b<this.paths;b++){let p=b*(r+1)*2;for(let m=0;m<r;m++){let _=p+m*2;g.push(_,_+1,_+2,_+1,_+3,_+2)}for(let m=0;m<=r;m++)this.uvy[p+m*2]=-1,this.uvy[p+m*2+1]=1}this.geo.setIndex(g),this.geo.setAttribute("position",new wt(this.pos,3).setUsage(us)),this.geo.setAttribute("aY",new wt(this.uvy,1)),this.u={uA:{value:1},uC:{value:c.clone()},uH:{value:h.clone()}},this.mesh=new Xe(this.geo,Ri(new vt({uniforms:this.u,side:Ut,toneMapped:!1,vertexShader:"attribute float aY; varying float vY; void main(){ vY = aY; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying float vY; uniform float uA; uniform vec3 uC, uH;
        void main(){ float y = abs(vY); float core = smoothstep(0.35, 0.0, y); float glow = exp(-y * 2.6);
          gl_FragColor = vec4(mix(uC, uH, core), (core + glow * 0.75) * uA); }`}))),this.mesh.frustumCulled=!1,this.mesh.renderOrder=31,e.add(this.mesh),this.flareA=jt(c,n*9),this.flareB=jt(h,n*12),e.add(this.flareA,this.flareB),this._build()}_path(e,t,i,n,s,r){let o=this.segments,l=new A().subVectors(i,t),c=l.length(),h=new A(-l.y,l.x,0).normalize(),u=0,d=[];for(let f=0;f<=o;f++){let g=f/o;u+=(Math.random()-.5)*n*c*.35,u*=.82;let b=Math.sin(Math.PI*g);d.push(t.clone().lerp(i,g).addScaledVector(h,u*b+(Math.random()-.5)*n*c*.05*b))}for(let f=0;f<=o;f++){let g=d[f],b=d[Math.min(o,f+1)],p=d[Math.max(0,f-1)],m=new A().subVectors(b,p).normalize(),_=new A(-m.y,m.x,0).multiplyScalar(s*(1-.5*f/o)),M=(r+f*2)*3;this.pos[M]=g.x+_.x,this.pos[M+1]=g.y+_.y,this.pos[M+2]=g.z+3,this.pos[M+3]=g.x-_.x,this.pos[M+4]=g.y-_.y,this.pos[M+5]=g.z+3}return d}_build(){this.readFrom&&this.readFrom(this.from),this.readTo&&this.readTo(this.to);let e=this._path(0,this.from,this.to,this.jag,this.width,0);for(let t=1;t<this.paths;t++){let i=e[2+Math.floor(Math.random()*(this.segments-6))],n=new A().subVectors(this.to,this.from),s=(Math.random()-.5)*1.6,r=i.clone().add(new A(n.x*Math.cos(s)-n.y*Math.sin(s),n.x*Math.sin(s)+n.y*Math.cos(s),0).multiplyScalar(.18+Math.random()*.25));this._path(t,i,r,this.jag*1.4,this.width*.45,t*(this.segments+1)*2)}this.geo.attributes.position.needsUpdate=!0,this.flareA.position.copy(this.from),this.flareB.position.copy(this.to)}update(e){if(!this.alive)return;this.age+=e;let t=this.age/this.life;if(t>=1){this.dispose();return}Math.random()<.7&&this._build();let i=Math.random()<.18?.35:1;this.u.uA.value=(1-t*t)*i,this.flareA.material.opacity=this.flareB.material.opacity=(1-t)*i}dispose(){this.alive&&(this.alive=!1,this.scene.remove(this.mesh,this.flareA,this.flareB),this.geo.dispose(),this.mesh.material.dispose(),this.flareA.material.dispose(),this.flareB.material.dispose())}},ms=class{constructor(e,{width:t=30,core:i="#FFFFFF",mid:n="#00F0FA",outer:s="#1A4DFF"}={}){this.scene=e,this.alive=!0,this.age=0,this.opacity=0,this.width=t,this.a=new A,this.b=new A,this.u={uA:{value:this.a},uB:{value:this.b},uW:{value:t},uT:{value:0},uO:{value:0},uCore:{value:new Me(i)},uMid:{value:new Me(n)},uOut:{value:new Me(s)}};let r=`varying vec2 vUv; uniform vec3 uA, uB; uniform float uW;
      void main(){ vUv = uv; vec2 ax = uB.xy - uA.xy; vec2 n = vec2(-ax.y, ax.x) / max(length(ax), 0.001);
        vec3 p = mix(uA, uB, uv.x); p.xy += n * position.y * uW; p.z += 4.0;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`;this.mesh=new Xe(new Yt(1,2,24,1).translate(.5,0,0),Ri(new vt({uniforms:this.u,side:Ut,toneMapped:!1,vertexShader:r,fragmentShader:`varying vec2 vUv; uniform float uT, uO; uniform vec3 uCore, uMid, uOut;
        void main(){ float x = vUv.x; float y = abs(vUv.y * 2.0 - 1.0 + 0.06 * sin(x * 38.0 - uT * 35.0));
          float core = smoothstep(0.38, 0.0, y), mid = exp(-y * 3.0), outer = exp(-y * 1.4) * 0.6;
          float streak = 0.75 + 0.25 * sin(x * 70.0 - uT * 55.0 + y * 6.0);
          vec3 col = uOut * outer + uMid * mid * 1.2 + uCore * core * 1.6;
          float a = clamp(core + mid * 0.8 + outer * 0.6, 0.0, 1.0) * streak * smoothstep(0.0, 0.02, x);
          gl_FragColor = vec4(col, a * uO); }`}))),this.mesh.frustumCulled=!1,this.mesh.renderOrder=28,e.add(this.mesh)}set(e,t,i,n,s){this.a.copy(e),this.b.copy(t),this.u.uO.value=i,this.u.uT.value=s,n!=null&&(this.u.uW.value=n)}dispose(){this.alive&&(this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}},Ll=class{constructor(e){this.u={uK:{value:0},uT:{value:0}},this.mesh=new Xe(new Yt(1,1),new vt({uniforms:this.u,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uK, uT;
        float h(float n){ return fract(sin(n * 91.7) * 43758.5453); }
        void main(){
          float col = floor(vUv.x * 46.0); float r = h(col + floor(uT * 30.0) * 7.0);
          float len = mix(0.25, 1.0, h(col * 3.3)); float off = h(col * 1.7 + floor(uT * 24.0)) * (1.0 - len);
          float inBar = step(off, vUv.y) * step(vUv.y, off + len);
          float body = smoothstep(0.5, 0.18, abs(vUv.x - 0.5)) * smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
          float on = step(1.0 - uK * 1.15, r) * inBar * body;
          vec3 c = mix(vec3(0.13, 0.15, 0.18), vec3(0.2, 0.95, 1.0), step(0.62, h(col * 5.1)));
          c = mix(c, vec3(0.9, 1.0, 1.0), step(0.9, h(col * 9.7)));
          gl_FragColor = vec4(c, on * (0.55 + 0.45 * r)); }`})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=32,this.mesh.visible=!1,e.add(this.mesh)}show(e,t,i,n,s){this.mesh.visible=n>.01,this.mesh.position.set(e.x,e.y,e.z+30),this.mesh.scale.set(t,i,1),this.u.uK.value=n,this.u.uT.value=s}},Fl=class{constructor(e,t){this.scene=e,this.read=t,this.alive=!0,this.t=0,this.out=-1,this.group=new St,this.group.renderOrder=21,this.halo=jt(nt,1),this.core=jt(ze,1),this.halo.material.depthTest=!1,this.core.material.depthTest=!1,this.group.add(this.halo,this.core),this.rings=[];for(let i=0;i<6;i++){let n=new Ks(1,i<3?.045:.028,6,56),s=Ri(new di({color:i%2?ze:nt,transparent:!0,opacity:.85,depthTest:!1})),r=new Xe(n,s),o=new St;o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.add(r),this.group.add(o),this.rings.push({mesh:r,pivot:o,spin:(Math.random()<.5?-1:1)*(14+Math.random()*16),wob:1.5+Math.random()*3,s:.75+Math.random()*.35})}this.r=1,this.k=0,e.add(this.group)}update(e){this.t+=e;let t=new A,i=this.out<0?this.read(t):!1;i?(this.group.position.copy(t),this.r=i.r,this.k=i.k):this.out<0&&(this.out=0);let n=this.k,s=this.r;if(this.out>=0){this.out+=e;let o=this.out/.18;if(n*=Math.max(0,1-o),s*=1+o*.9,o>=1){this.dispose();return}}let r=1+.07*Math.sin(this.t*53)+.05*Math.sin(this.t*91);this.halo.scale.setScalar(s*5*r),this.halo.material.opacity=Math.min(1,.95*n),this.core.scale.setScalar(s*2.4*r),this.core.material.opacity=Math.min(1,1.2*n);for(let o of this.rings)o.mesh.rotation.z+=o.spin*e,o.pivot.rotation.x+=o.wob*e,o.pivot.rotation.y+=o.wob*.7*e,o.mesh.scale.setScalar(s*o.s*(.96+.08*Math.sin(this.t*30+o.wob))),o.mesh.material.opacity=.8*n}dispose(){if(this.alive){this.alive=!1,this.scene.remove(this.group),this.halo.material.dispose(),this.core.material.dispose();for(let e of this.rings)e.mesh.geometry.dispose(),e.mesh.material.dispose()}}},kn=new Me("#FF7A1A"),hr=new Me("#FFE2A0"),cr=new Me("#FF3A0C"),su=new Me("#8A0E2C");var ru=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y); }
float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }`,au="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Dl=class{constructor(e,t,i){this.scene=e,this.e=t,this.ctx=i,this.alive=!0,this.t=0,this.out=-1,this.u={uT:{value:Math.random()*50},uA:{value:0},uIgn:{value:0}},this.mesh=new Xe(new Yt(1,1),new vt({uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,vertexShader:au,fragmentShader:ru+`
        varying vec2 vUv; uniform float uT, uA, uIgn;
        void main(){
          float x = (vUv.x - 0.5) * 2.0, h = vUv.y;              // x: -1..1 across, h: 0 (base) .. 1 (top)
          float width = mix(1.05, 0.8, smoothstep(0.0, 0.9, h)) * (0.7 + 0.3 * uIgn);
          float base = smoothstep(0.0, 0.06 + 0.07 * vnoise(vec2(x * 8.0, uT)), h);   // ragged bottom edge
          float env = (1.0 - smoothstep(width * 0.55, width, abs(x))) * base * (1.0 - smoothstep(0.88, 1.0, h));
          // long vertical ink strokes streaming upward, broken up by a finer layer
          float n = fbm(vec2(x * 6.5, h * 1.0 - uT * 1.3));
          float n2 = vnoise(vec2(x * 16.0, h * 4.5 - uT * 2.8));
          float v = (n * 0.7 + n2 * 0.4) * env;
          float th = mix(0.44, 0.73, smoothstep(0.05, 0.85, h)) + 0.2 * (1.0 - uIgn);
          float ink = smoothstep(th, th + 0.012, v);
          // splattered drips flung upward above the flames (hard edged, like brush ink)
          float envw = 1.0 - smoothstep(width * 0.8, width * 1.25, abs(x));
          float dmask = smoothstep(0.22, 0.7, h) * envw * (1.0 - smoothstep(0.92, 1.0, h)) * uIgn;
          float dth = 0.78 + (1.0 - dmask) * 0.6;
          ink = max(ink, smoothstep(dth, dth + 0.01, vnoise(vec2(x * 22.0, h * 4.0 - uT * 4.0))));
          float edge = smoothstep(th - 0.055, th - 0.01, v) * (1.0 - ink);
          vec3 core = vec3(0.018, 0.012, 0.024) + vec3(0.07, 0.06, 0.08) * smoothstep(0.55, 0.9, n2) * ink;
          vec3 col = mix(vec3(0.42, 0.03, 0.11), core, ink);
          gl_FragColor = vec4(col, max(ink, edge * 0.9) * uA);
        }`})),this.mesh.renderOrder=28,this.mesh.frustumCulled=!1,e.add(this.mesh),this.emberT=0}update(e){this.t+=e;let t=this.e,i=t.radiusPx,n=this.ctx;this.out<0&&(t.dead||!t.alive)&&(this.out=0);let s=1;if(this.out>=0&&(this.out+=e,s=Math.max(0,1-this.out/.7),s<=0)){this.dispose();return}let r=Math.min(1,this.t/.35);this.u.uT.value+=e,this.u.uIgn.value=r,this.u.uA.value=s*Math.min(1,this.t/.12);let o=i*3.4,l=i*(t.boss?5.2:6.2)*(.7+.3*r),c=t.group.position;if(this.mesh.scale.set(o,l,1),this.mesh.position.set(c.x,c.y-i*1.15+l/2,c.z+i+2),this.emberT-=e,this.emberT<=0&&s>.3){this.emberT=.06;let h=new A(c.x+(Math.random()-.5)*i*1.4,c.y+i*(.5+Math.random()),c.z+i);n.particles.emit(h,new A((Math.random()-.5)*n.px(50),n.px(140+Math.random()*160),0),su,{life:.6,size:n.px(4),drag:1.2})}}dispose(){this.alive&&(this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}},Nl=class{constructor(e,t,i,n,{speed:s,radius:r}){this.scene=e,this.ctx=t,this.alive=!0,this.t=0,this.out=-1,this.pos=i.clone(),this.dir=n.clone().setZ(0).normalize(),this.speed=s,this.R=r,this.r=r*.2,this.group=new St,this.halo=jt(cr,1),this.halo.material.depthTest=!1,this.halo.renderOrder=24,this.u={uT:{value:Math.random()*20},uA:{value:1},uBurst:{value:0}},this.ball=new Xe(new Yt(1,1),new vt({uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,vertexShader:au,fragmentShader:ru+`
        varying vec2 vUv; uniform float uT, uA, uBurst;
        const float S = 1.9;                                   // quad half-size in ball radii (room for the streaks)
        void main(){
          vec2 p = (vUv - 0.5) * 2.0 * S;                       // +x = direction of travel
          float r = length(p), ang = atan(p.y, p.x);
          float edge = 1.0 + 0.05 * (vnoise(vec2(ang * 3.0, uT * 3.0)) - 0.5) + 0.25 * uBurst;
          // boiling surface
          vec2 q = p * (1.0 + 0.25 * r);
          float n = fbm(q * 1.8 + vec2(uT * 0.7, -uT * 0.5));
          float m = fbm(q * 3.6 - vec2(uT * 1.1, uT * 0.4) + n);
          float heat = clamp(n * 0.55 + m * 0.6 - 0.1 + 0.25 * (1.0 - r), 0.0, 1.0);
          vec3 col = mix(vec3(0.55, 0.07, 0.02), vec3(0.98, 0.38, 0.04), smoothstep(0.30, 0.52, heat));
          col = mix(col, vec3(1.0, 0.78, 0.22), smoothstep(0.55, 0.72, heat));
          col = mix(col, vec3(1.0, 0.95, 0.72), smoothstep(0.78, 0.92, heat) * 0.7);
          float inside = 1.0 - smoothstep(edge - 0.015, edge + 0.015, r);
          float limb = smoothstep(edge - 0.16, edge - 0.02, r) * inside;              // brighter orange toward the edge
          col = mix(col, vec3(1.0, 0.5, 0.08), limb * 0.65);
          float ring = exp(-pow((r - edge * 1.035) / 0.03, 2.0));                     // the orange outline
          col = mix(col, vec3(1.0, 0.62, 0.12), ring * (1.0 - inside));
          float a = max(inside, ring * 0.95);
          // wind streaks: three white ribbons wrapping the ball, sliding back along the flight path
          float w = 0.0;
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float tilt = -0.55 + 0.55 * fi + 0.12 * sin(uT * 0.7 + fi);
            vec2 s2 = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * p;
            vec2 e = vec2(1.55 + 0.1 * fi, 0.42 + 0.12 * fi);
            float d = abs(length(s2 / e) - 1.0) * e.y;
            float band = exp(-pow(d / (0.022 + 0.008 * fi), 2.0));
            float sa = atan(s2.y / e.y, s2.x / e.x);
            float run = fract(sa / 6.2832 + uT * (0.55 + 0.2 * fi) + fi * 0.37);
            float seg = smoothstep(0.0, 0.08, run) * (1.0 - smoothstep(0.38, 0.55, run));
            float behind = step(0.0, s2.y) * inside;                                  // the half that passes behind the ball is hidden
            w += band * seg * (1.0 - behind);
          }
          w = clamp(w, 0.0, 1.0) * (1.0 - uBurst);
          col = mix(col, vec3(1.0), w * 0.85);
          a = max(a, w * 0.75);
          gl_FragColor = vec4(col, a * uA);
        }`})),this.ball.renderOrder=25,this.ball.frustumCulled=!1,this.ball.rotation.z=Math.atan2(this.dir.y,this.dir.x),this.group.add(this.halo,this.ball),this.group.position.copy(this.pos),e.add(this.group)}update(e){this.t+=e,this.u.uT.value+=e;let t=this.ctx;if(this.out>=0){this.out+=e;let n=Math.min(1,this.out/.35);this.r=this.R*(1+.9*n),this.u.uBurst.value=n,this.u.uA.value=1-n*n,this.halo.material.opacity=.8*(1-n),this._place(),n>=1&&this.dispose();return}this.r+=(this.R-this.r)*(1-Math.exp(-e*6)),this.pos.addScaledVector(this.dir,this.speed*e),this.group.position.copy(this.pos),this._place();let i=this.dir.clone().multiplyScalar(-1);for(let n=0;n<2;n++){let s=Math.random()*Math.PI*2,r=this.pos.clone().add(new A(Math.cos(s)*this.r*.9,Math.sin(s)*this.r*.9,0)),o=i.clone().multiplyScalar(this.speed*(.2+.25*Math.random())).add(new A(0,t.px(60+80*Math.random()),0));t.particles.emit(r,o,n?kn:cr,{life:.4+.3*Math.random(),size:t.px(5+6*Math.random()),drag:2})}}_place(){this.ball.scale.setScalar(this.r*2*1.9),this.halo.scale.setScalar(this.r*4.2),this.out<0&&(this.halo.material.opacity=.55)}burst(){this.out<0&&(this.out=0)}dispose(){this.alive&&(this.alive=!1,this.scene.remove(this.group),this.halo.material.dispose(),this.ball.geometry.dispose(),this.ball.material.dispose())}},ur=new Me("#E6CFA3"),_n=new Me("#7A3CFF"),va=null;function f_(){if(va)return va;va=[];for(let a=0;a<3;a++){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=7+a,n=[];for(let o=0;o<i;o++){let l=o/i*Math.PI*2+Math.random()*.4,c=20+Math.random()*9;n.push([32+Math.cos(l)*c,32+Math.sin(l)*c])}let s=t.createLinearGradient(14,10,50,56);s.addColorStop(0,"#E7D2A6"),s.addColorStop(.55,"#B89772"),s.addColorStop(1,"#5E4459"),t.beginPath(),n.forEach(([o,l],c)=>c?t.lineTo(o,l):t.moveTo(o,l)),t.closePath(),t.fillStyle=s,t.fill(),t.lineWidth=3,t.strokeStyle="#3A2338",t.stroke(),t.lineWidth=1.5,t.beginPath(),t.moveTo(26,22),t.lineTo(33,34),t.lineTo(30,44),t.moveTo(33,34),t.lineTo(44,36),t.stroke();let r=new js(e);r.colorSpace=Mt,va.push(r)}return va}var kl=class{constructor(e){this.scene=e,this.alive=!0,this.t=0,this.group=new St,this.halo=jt(_n,1),this.halo.material.depthTest=!1,this.halo.renderOrder=29,this.dark=new $n(new Pn({map:Of(),color:"#020004",transparent:!0,depthWrite:!1,depthTest:!1})),this.dark.renderOrder=30,this.ring=new Xe(new Ks(1,.06,6,48),Ri(new di({color:"#C9B2FF",transparent:!0,depthTest:!1}))),this.ring.renderOrder=31,this.group.add(this.halo,this.dark,this.ring),e.add(this.group),this.r=1,this.k=1}set(e,t,i=1){this.group.position.copy(e),this.r=t,this.k=i}update(e){this.t+=e;let t=this.r,i=this.k,n=1+.08*Math.sin(this.t*19);this.halo.scale.setScalar(t*5.5*n),this.halo.material.opacity=.75*i,this.dark.scale.setScalar(t*2.6),this.dark.material.opacity=.95*i;let s=this.t*1.8%1;this.ring.scale.setScalar(t*(2.8-1.9*s)),this.ring.material.opacity=.7*i*s,this.ring.rotation.x=1.1,this.ring.rotation.z+=e*2}dispose(){this.alive&&(this.alive=!1,this.scene.remove(this.group),this.halo.material.dispose(),this.dark.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose())}},Ul=class{constructor(e,t,i,n){this.scene=e,this.ctx=t,this.alive=!0,this.t=0,this.out=-1,this.center=i.clone(),this.R=n,this.k=0,this.glow=0,this.shake=0,this.u={uK:{value:0},uRot:{value:Math.random()*6},uA:{value:1},uGlow:{value:0}},this.mesh=new Xe(new Yt(1,1),new vt({uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,vertexShader:au,fragmentShader:ru+`
        varying vec2 vUv; uniform float uK, uRot, uA, uGlow;
        vec3 hash33(vec3 p){ p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
        vec3 voro(vec3 x){
          vec3 i = floor(x), f = fract(x); float F1 = 8.0, F2 = 8.0, id = 0.0;
          for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++) {
            vec3 g = vec3(float(xx), float(y), float(z)); vec3 o = hash33(i + g); vec3 d = g + o - f; float dd = dot(d, d);
            if (dd < F1) { F2 = F1; F1 = dd; id = hash33(i + g + 7.0).x; } else if (dd < F2) F2 = dd;
          }
          return vec3(sqrt(F1), sqrt(F2), id);
        }
        void main(){
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          if (r > 1.0) discard;
          vec3 n = vec3(p, sqrt(max(0.0, 1.0 - r * r)));
          float c = cos(uRot), s = sin(uRot);
          vec3 q = vec3(c * n.x + s * n.z, n.y, -s * n.x + c * n.z);
          vec3 v = voro(q * 3.4);
          float gap = v.y - v.x;
          float crack = 1.0 - smoothstep(0.025, 0.075, gap);
          float present = step(v.z, uK * 1.08 - 0.04);               // plates land one by one as it assembles
          vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
          float dif = clamp(dot(n, L), 0.0, 1.0);
          float tone = 0.82 + 0.3 * fract(v.z * 7.13);
          vec3 col = mix(vec3(0.30, 0.19, 0.33), vec3(0.90, 0.76, 0.55) * tone, smoothstep(0.0, 1.0, dif * 0.95 + 0.08));
          col *= 1.0 - 0.32 * smoothstep(0.16, 0.0, gap);            // plates darken toward their edges
          col *= 0.9 + 0.12 * vnoise(p * 46.0 + v.z * 10.0);          // grainy, hand-drawn texture
          col = mix(col, vec3(0.17, 0.09, 0.19), crack);
          col = mix(col, vec3(1.0, 0.86, 0.55), crack * uGlow);      // light bursting through the cracks
          col = mix(col, vec3(0.16, 0.09, 0.18), smoothstep(0.94, 1.0, r));   // inked outline
          gl_FragColor = vec4(col, present * uA);
        }`})),this.mesh.renderOrder=27,this.mesh.frustumCulled=!1,e.add(this.mesh);let s=f_();this.rocks=[];for(let r=0;r<46;r++){let o=new $n(new Pn({map:s[r%3],transparent:!0,depthWrite:!1,depthTest:!1}));o.renderOrder=28,o.visible=!1,e.add(o);let l=Math.random()*Math.PI*2,c=n*(2.4+Math.random()*2.2);this.rocks.push({s:o,mode:"in",from:new A(i.x+Math.cos(l)*c,i.y+Math.sin(l)*c,i.z+n),to:new A(i.x+Math.cos(l)*n*.85,i.y+Math.sin(l)*n*.85,i.z+n),delay:Math.random()*.9,size:n*(.1+.12*Math.random()),spin:(Math.random()-.5)*8,v:new A,life:0})}this.dropT=0}update(e){this.t+=e;let t=this.R,i=this.center;if(this.out>=0){this.out+=e,this.u.uA.value=Math.max(0,1-this.out/.12),this.mesh.scale.setScalar(t*2*(1+.6*Math.min(1,this.out/.12)));let s=!1;for(let r of this.rocks)r.s.visible&&(r.v.y-=this.ctx.px(900)*e,r.v.multiplyScalar(Math.exp(-e*.6)),r.s.position.addScaledVector(r.v,e),r.s.material.rotation+=r.spin*e,r.s.material.opacity=Math.max(0,1-this.out/1.6),r.s.material.opacity>0&&(s=!0));!s&&this.out>.2&&this.dispose();return}this.u.uK.value=this.k,this.u.uGlow.value=this.glow,this.u.uRot.value+=e*.25;let n=this.shake*t*.025;this.mesh.position.set(i.x+(Math.random()-.5)*n,i.y+(Math.random()-.5)*n,i.z+t+3),this.mesh.scale.setScalar(t*2);for(let s of this.rocks)if(s.mode==="in"){let r=Math.min(1,Math.max(0,this.k*1.5-s.delay*.5));s.s.visible=r>0&&r<1;let o=r*r;s.s.position.lerpVectors(s.from,s.to,o),s.s.scale.setScalar(s.size*(1.3-.4*o)),s.s.material.rotation+=s.spin*e,s.s.material.opacity=1,r>=1&&(s.mode="shell",s.s.visible=!1)}else s.mode==="drop"&&(s.life-=e,s.v.y-=this.ctx.px(700)*e,s.s.position.addScaledVector(s.v,e),s.s.material.rotation+=s.spin*e,s.s.material.opacity=Math.max(0,Math.min(1,s.life/.4)),s.life<=0&&(s.mode="shell",s.s.visible=!1));if(this.k>=.95&&(this.dropT-=e,this.dropT<=0)){this.dropT=.09+Math.random()*.12;let s=this.rocks.find(r=>r.mode==="shell");if(s){let r=-Math.PI/2+(Math.random()-.5)*1.6;s.mode="drop",s.life=1.1,s.s.visible=!0,s.s.position.set(i.x+Math.cos(r)*t*.92,i.y+Math.sin(r)*t*.92,i.z+t+4),s.v.set((Math.random()-.5)*this.ctx.px(60),-this.ctx.px(20),0),s.s.scale.setScalar(s.size*(.5+.6*Math.random()))}}}explode(){if(this.out>=0)return;this.out=0;let e=this.center,t=this.R,i=this.ctx;for(let n of this.rocks){let s=Math.random()*Math.PI*2,r=i.px(500+Math.random()*900);n.mode="out",n.s.visible=!0,n.s.material.opacity=1,n.s.position.set(e.x+Math.cos(s)*t*.7*Math.random(),e.y+Math.sin(s)*t*.7*Math.random(),e.z+t+4),n.v.set(Math.cos(s)*r,Math.sin(s)*r+i.px(200),0),n.s.scale.setScalar(n.size*(.8+.9*Math.random()))}}dispose(){if(this.alive){this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose();for(let e of this.rocks)this.scene.remove(e.s),e.s.material.dispose()}}};var Ol=class extends Yn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ln;e.deleteAttribute("uv");let t=new zi({side:Zt}),i=new zi,n=new rs(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new Xe(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new es(e,i,6),o=new gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new Xe(e,dr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Xe(e,dr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Xe(e,dr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Xe(e,dr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Xe(e,dr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Xe(e,dr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function dr(a){return new Xr({color:0,emissive:16777215,emissiveIntensity:a})}function Hf(a,e){a.outputColorSpace=Mt,a.toneMapping=sa,a.toneMappingExposure=1;let t=new rr(a);e.environment=t.fromScene(new Ol,.04).texture,e.environmentIntensity=.55;let i=new pn(16777215,2.2);i.position.set(-.7,1,.9);let n=new pn(10481407,1.4);n.position.set(.8,.5,-1);let s=new pn(16777215,.8);s.position.set(.2,1,.1);let r=new Yr(12573183,460811,.25);return e.add(i,n,s,r),{key:i,rim:n,top:s,fill:r}}var p_={MX_Steel:{color:"#3B424C",roughness:.3,metalness:.92,env:1},MX_SteelLight:{color:"#4C545F",roughness:.26,metalness:.92,env:1},MX_ArmorShadow:{color:"#141920",roughness:.38,metalness:.8,env:.8},MX_Visor:{color:"#02070C",roughness:.1,metalness:.3,env:.4},MX_Groove:{color:"#05080C",roughness:.5,metalness:.5,env:.5},MX_JetInactive:{color:"#07141D",roughness:.35,metalness:.6,env:.6},VX_Shell:{color:"#3E434B",roughness:.3,metalness:.92,env:1}};function ya(a){a.traverse(e=>{if(e.material)for(let t of Array.isArray(e.material)?e.material:[e.material]){let i=p_[t.name];i&&(t.color.set(i.color),t.roughness=i.roughness,t.metalness=i.metalness,t.envMapIntensity=i.env,"anisotropy"in t&&(t.anisotropy=0)),/Cyan|Halo|VX_Glow/.test(t.name)&&(t.toneMapped=!1)}})}var m_=["Root","Pelvis","Spine_01","Spine_02","Chest","Neck","Head","BustBase","PelvisArmor","Clavicle_L","UpperArm_L","LowerArm_L","Hand_L","FingerCurl_L","Clavicle_R","UpperArm_R","LowerArm_R","Hand_R","FingerCurl_R","UpperLeg_L","LowerLeg_L","Foot_L","Toe_L","UpperLeg_R","LowerLeg_R","Foot_R","Toe_R"],g_=["neutral","happy","listening","thinking","curious","surprised","sleepy","fierce","injured","victory","charging"],Gf={victory:{happy:1},neutral:{}},b_=new Set(["BoostStart","Brake","DodgeLeft","DodgeRight","BarrelRoll","FrontFlip","BackFlip","EnemyHit","Victory","HeroLanding"]),Vf=1,x_=new Me("#FF0624"),gi=new A,Ji=new A,Bl=new A,gs=new mt,zl=new mt,Yi=new mt;function __(a,e){return a.tracks=a.tracks.filter(t=>{let[i,n]=t.name.split("."),s=e[i];if(!s)return!0;let r=n==="quaternion"?s.q.toArray():n==="position"?s.p.toArray():n==="scale"?s.s.toArray():null;if(!r)return!0;let o=r.length,l=t.values;for(let c=0;c<l.length;c+=o){let h=0;if(n==="quaternion"){if(h=1-Math.abs(l[c]*r[0]+l[c+1]*r[1]+l[c+2]*r[2]+l[c+3]*r[3]),h>2e-5)return!0}else{for(let u=0;u<o;u++)h=Math.max(h,Math.abs(l[c+u]-r[u]));if(h>4e-4)return!0}}return!1}),a}var Hl=class{constructor(e,t){this.scene=t,this.holder=new St,this.orient=new St,this.modelRoot=new St,this.holder.add(this.orient),this.orient.add(this.modelRoot),this.model=e.scene,this.modelRoot.add(this.model),t.add(this.holder),this.nodes={},this.model.traverse(i=>{i.name&&(this.nodes[i.name]=i),i.frustumCulled=!1}),this.bones={};for(let i of m_){if(!this.nodes[i])throw new Error("Mini-X GLB missing bone "+i);this.bones[i]=this.nodes[i]}if(this.rest={},this.model.traverse(i=>{i.isBone&&(this.rest[i.name]={q:i.quaternion.clone(),p:i.position.clone(),s:i.scale.clone()})}),this.skinned=[],this.morphMeshes=[],this.model.traverse(i=>{i.isSkinnedMesh&&this.skinned.push(i),i.morphTargetDictionary&&this.morphMeshes.push(i)}),!this.skinned.length)throw new Error("Mini-X GLB has no SkinnedMesh");this._tuneMaterials(),this.mixer=new ea(this.model),this.clips={};for(let i of e.animations)this.clips[i.name]=__(i,this.rest);this.actions={};for(let[i,n]of Object.entries(this.clips))this.actions[i]=this.mixer.clipAction(n);this.base={IdleFloat:1,Cruise:0};for(let i of Object.keys(this.base)){let n=this.actions[i];n.play(),n.setEffectiveWeight(this.base[i])}this.actions.Cruise.timeScale=1,this.deployAction=this.actions.DeployFullBody,this.deployAction.play(),this.deployAction.paused=!0,this.deployAction.setEffectiveWeight(1),this.deploy=0,this.deployTarget=0,this.hold=null,this.holdWeight=0,this.holdTarget=0,this.oneShots=[],this.mixer.addEventListener("finished",i=>this._finished(i)),this.face="neutral",this.faceW={},this.blink=0,this.nextBlink=1.5+Math.random()*3,this.blinkT=-1,this.lookTarget=null,this.lookWeight=0,this.aim={L:{target:null,w:0},R:{target:null,w:0}},this._headFwd=null,this._calibrate(),this.jets={};for(let i of["PalmJet_L","PalmJet_R","FootJet_L","FootJet_R"]){let n=this.nodes[i],s=this.nodes[i+"_Dir"];if(!n||!s)throw new Error("Mini-X GLB missing emitter "+i);this.jets[i]={node:n,dir:s,fx:new Al(t,i.startsWith("Palm")?{radius:.022,length:.13}:{radius:.03,length:.2}),level:0,boost:0,pos:new A,d:new A}}this.halo=this.nodes.HaloPivot||this.nodes.HoloHalo,this.eyeMats=[],this.eyeRed=0,this.eyeRedTarget=0,this.model.traverse(i=>{!i.isMesh||!/Eyes_LED/.test(i.name+" "+(i.parent?i.parent.name:""))||(i.material=i.material.clone(),this.eyeMats.push({m:i.material,c:i.material.color.clone(),e:i.material.emissive.clone(),ei:i.material.emissiveIntensity}))}),this.chargeGlow=new Rl(t),this.rays=new Cl(t),this.veil=new Ll(t),this.blastWeight=0,this.halo&&this.halo.traverse(i=>{i.material&&(i.material=i.material.clone(),i.material.transparent=!0)}),this._procBones=["Neck","Head","UpperArm_L","LowerArm_L","Hand_L","UpperArm_R","LowerArm_R","Hand_R","FingerCurl_L","FingerCurl_R","UpperLeg_L","LowerLeg_L","Foot_L","UpperLeg_R","LowerLeg_R","Foot_R","Spine_02","Pelvis","Spine_01","Chest"].map(i=>this.bones[i]),this.flex={vx:0,vy:0,ax:0,ay:0,sway:0},this._pre=new Map(this._procBones.map(i=>[i,i.quaternion.clone()])),this.sizePx=170,this.time=0,this.speedBlend=0}_tuneMaterials(){ya(this.model)}_calibrate(){this.model.updateMatrixWorld(!0);let e=this.bones.Head.getWorldQuaternion(new mt);this._headFwd=new A(0,0,1).applyQuaternion(e.invert());let t=this.bones.Neck.getWorldQuaternion(new mt);this._neckFwd=new A(0,0,1).applyQuaternion(t.invert())}play(e,{fade:t=.12,weight:i=6,timeScale:n=1,full:s=b_.has(e)}={}){let r=this.actions[e];return r?(r.reset(),r.setLoop(ua,1),r.clampWhenFinished=!1,r.timeScale=n,r.setEffectiveWeight(i),r.fadeIn(t),r.play(),this.oneShots=this.oneShots.filter(o=>o.name!==e),this.oneShots.push({name:e,action:r,full:s,weight:i}),r):null}isPlaying(e){return this.oneShots.some(t=>t.name===e)}busyFullBody(){return this.oneShots.some(e=>e.full)}holdPose(e,t=1){if(this.hold===e){this.holdTarget=t;return}if(this.hold&&this.actions[this.hold].fadeOut(.25),this.hold=e,!e)return;let i=this.actions[e];i.reset(),i.setLoop(ua,1),i.clampWhenFinished=!0,i.setEffectiveWeight(1),i.fadeIn(.25),i.play(),this.holdTarget=t}_finished(e){let t=this.oneShots.findIndex(i=>i.action===e.action);t>=0&&(this.oneShots[t].action.fadeOut(.18),this.oneShots.splice(t,1))}setFace(e){g_.includes(e)&&(this.face=e)}lookAt(e,t=1){this.lookTarget=e?(this.lookTarget||new A).copy(e):null,this.lookWeight=t}aimAt(e,t,i=1){let n=this.aim[e];t?(n.target=(n.target||new A).copy(t),n.goal=i):n.goal=0}emitterWorld(e,t,i){let n=this.jets[e];return n.node.getWorldPosition(t),i&&(n.dir.getWorldPosition(i),i.sub(t).normalize()),t}update(e,t){this.time+=e,this.deploy+=(this.deployTarget-this.deploy)*(1-Math.exp(-e*3.2)),Math.abs(this.deploy-this.deployTarget)<.002&&(this.deploy=this.deployTarget);let i=this.deploy,n=t.sizePx*(1.16-.16*i);this.modelRoot.scale.setScalar(n);let s=t.tele&&t.tele.phase!=="focus"?t.tele.k:0;s>0&&this.modelRoot.scale.set(n*(1-.85*s),n*(1+.3*s),n*(1-.85*s)),this.modelRoot.position.y=-n*(.7-.18*i),this.holder.position.copy(t.pos);let r=1-Math.exp(-e*6);this.orient.rotation.y+=((t.yaw||0)-this.orient.rotation.y)*r,this.orient.rotation.x+=((t.pitch||0)-this.orient.rotation.x)*r,this.orient.rotation.z+=((t.roll||0)-this.orient.rotation.z)*r;let o=Math.min(1,Math.max(0,((t.speed||0)-160)/360))*i;this.speedBlend+=(o-this.speedBlend)*(1-Math.exp(-e*4));let l=this.busyFullBody(),c=l?.12:1,h=this.hold?this.holdTarget:0;this.holdWeight+=(h-this.holdWeight)*(1-Math.exp(-e*6)),this.actions.IdleFloat.setEffectiveWeight(Math.max(.02,(1-this.speedBlend)*c*(1-.85*this.holdWeight))),this.actions.Cruise.setEffectiveWeight(Math.max(0,this.speedBlend*c*(1-.85*this.holdWeight))),this.hold&&this.actions[this.hold].setEffectiveWeight(Math.max(1e-4,this.holdWeight*(l?.15:1.4)));for(let d of this._procBones)d.quaternion.copy(this._pre.get(d));this.deployAction.time=i*this.deployAction.getClip().duration,this.mixer.update(e);for(let d of this._procBones)this._pre.get(d).copy(d.quaternion);this.model.updateMatrixWorld(!0),this._layerFlex(e,t),this._layerLook(e),this.teleW=(this.teleW||0)+((t.tele&&t.tele.phase!=="in"?1:0)-(this.teleW||0))*(1-Math.exp(-e*22)),this.teleW>.01&&this._fingersToForehead(this.teleW,n),this.blastWeight+=((t.blast?1:0)-this.blastWeight)*(1-Math.exp(-e*17)),t.blast&&t.blast.kind==="katon"?this._layerSeals(t.blast,n):t.blast?this._layerBlast(t.blast,n):(this._layerAim(e,"R"),this._layerAim(e,"L")),this._face(e),this._eyes(e),this._halo(e,i),this.model.updateMatrixWorld(!0),this._jets(e,t,n);let u=this.holder.getWorldPosition(new A);if(this.veil.show(u,n*.9,n*(1.25-.5*(1-i)),s,this.time),this.chargeGlow.mesh.visible=!!t.blast,t.blast){let d=this.joinedPalms(new A),f=t.blast.power,g=1+.08*Math.sin(this.time*47)+.05*Math.sin(this.time*83);if(t.blast.kind==="katon"){let b=t.blast.fired?0:Math.max(0,(t.blast.power-.75)/.25);this.chargeGlow.mesh.visible=b>.01,b>.01&&this.chargeGlow.show(this.mouthWorld(new A),n*(.03+.05*b),.5*b,this.time),this.rays.hide()}else if(t.blast.kind==="rasengan")this.chargeGlow.show(d,n*(.05+.06*f),.25+.35*f,this.time),this.rays.hide();else if(t.blast.kind==="bolt"){let b=Math.random()<.3?.4:1;this.chargeGlow.show(d,n*(.07+.12*f)*(.8+.4*Math.random()),(.3+.7*f)*b,this.time),this.rays.show(d,n*(.25+.6*f)*(.8+.4*Math.random()),Math.min(1,.2+.8*f)*b,this.time*3)}else{let b=t.full?1.7:1;this.chargeGlow.show(d,n*(.12+.3*f)*g*b,.25+.75*f,this.time),this.rays.show(d,n*(.35+1.25*f)*g*b,Math.min(1,.15+1*f),this.time)}}else this.rays.hide()}_layerSeals(e,t){let i=this.blastWeight;if(i<.01)return;let n=this.orient.getWorldQuaternion(new mt),s=new A(1,0,0).applyQuaternion(n),r=new A(0,1,0).applyQuaternion(n),o=new A(0,0,1).applyQuaternion(n),l=e.age||0,c=e.release||1,h=Math.min(c*.48,1.45),u=e.fired?0:ci.clamp((l-h)/Math.max(.2,c-h),0,1),d=e.fired?ci.clamp((l-c)/.12,0,1)*(1-ci.clamp((l-c-.55)/.3,0,1)):0,f=u*(1-d);this._turn(this.bones.Spine_02,s,(-.28*f+.34*d)*i),this._turn(this.bones.Chest,s,(-.12*f+.12*d)*i),this._turn(this.bones.Head,s,(-.32*f+.18*d)*i),this.model.updateMatrixWorld(!0);let b=this.bones.Chest.getWorldPosition(new A).clone().addScaledVector(o,t*.16).addScaledVector(r,t*(.02+.05*f)),p=[[[-.013,0,0],[.013,0,0],s,s.clone().negate()],[[-.016,-.012,.004],[.01,.016,0],r,r.clone().negate()],[[-.01,.006,.01],[.016,-.004,-.004],o.clone().add(s).normalize(),s.clone().negate()],[[-.018,-.004,0],[.006,.01,.012],s.clone().add(r).normalize(),o.clone().negate()],[[-.012,.014,0],[.014,.014,0],s,s.clone().negate()]],m=p[4],_=0;if(l<h){let C=Math.floor(l/.2),D=l%.2/.2;m=p[C%4],_=Math.max(0,1-D/.35)}let M=(P,C)=>b.clone().addScaledVector(s,P[0]*t+C*(Math.random()-.5)*t*.004).addScaledVector(r,P[1]*t+_*t*.006).addScaledVector(o,P[2]*t),y=m===p[4]?b.clone().addScaledVector(r,t*.04*f):null,w=M(m[0],1),v=M(m[1],1);y&&(w.addScaledVector(r,t*.03*f),v.addScaledVector(r,t*.03*f));let x=r.clone().multiplyScalar(-1);this._reach("L",w,x.clone().addScaledVector(s,-.8),i,m[2]),this._reach("R",v,x.clone().addScaledVector(s,.8),i,m[3]);let S=m===p[3]?.9:-.25;this._turn(this.bones.FingerCurl_L,s,S*i),this._turn(this.bones.FingerCurl_R,s,S*i),_>0&&this._turn(this.bones.Chest,o,(Math.random()-.5)*.05*_*i)}mouthWorld(e){let t=this.orient.getWorldQuaternion(gs),i=this.modelRoot.scale.x;return this.headWorld(e),e.add(gi.set(0,-.105*i,.17*i).applyQuaternion(t))}joinedPalms(e){return this.emitterWorld("PalmJet_L",e).add(this.emitterWorld("PalmJet_R",new A)).multiplyScalar(.5)}_layerBlast(e,t){let i=this.bones.UpperArm_L.getWorldPosition(new A),n=this.bones.UpperArm_R.getWorldPosition(new A),s=n.clone().sub(i).normalize(),r=i.add(n).multiplyScalar(.5),o=e.target.clone().sub(r).normalize(),l=r.clone().sub(e.target).setZ(0).normalize(),c=new A(0,0,1).applyQuaternion(this.orient.quaternion),h=e.extension*e.extension*(3-2*e.extension),u=(1-h)*e.power*t*.006,d=r.clone().addScaledVector(l,t*.2).addScaledVector(c,t*.03);d.y-=t*.17,d.x+=(Math.random()-.5)*u,d.y+=(Math.random()-.5)*u;let f=r.clone().addScaledVector(o,t*.32);f.y-=t*.02;let g=d.lerp(f,h);for(let[b,p]of[["L",-1],["R",1]]){let m=this.bones["UpperArm_"+b],_=this.bones["LowerArm_"+b],M=this.bones["Hand_"+b],y=m.getWorldPosition(new A),w=_.getWorldPosition(new A),v=M.getWorldPosition(new A),x=g.clone().addScaledVector(s,p*t*(.019+.012*(1-h)));x.y+=p*t*.03*(1-h);let S=x.clone().sub(y),P=y.distanceTo(w),C=w.distanceTo(v),D=ci.clamp(S.length(),Math.abs(P-C)+.01,P+C-.01);S.normalize();let k=(P**2+D**2-C**2)/(2*D),V=s.clone().multiplyScalar(p).add(new A(0,-.6,0));V.addScaledVector(S,-V.dot(S)).normalize();let L=S.clone().multiplyScalar(k).addScaledVector(V,Math.sqrt(Math.max(0,P**2-k**2)));this._rotateBoneToward(m,w.sub(y),L,this.blastWeight),_.getWorldPosition(w),M.getWorldPosition(v),this._rotateBoneToward(_,v.sub(w),x.sub(w),this.blastWeight);let q=new A;this.emitterWorld("PalmJet_"+b,v,q);let O=g.clone().sub(v).normalize().lerp(o,h).normalize();this._rotateBoneToward(M,q,O,this.blastWeight)}}_rotateBoneToward(e,t,i,n,s=Math.PI){let r=t.clone().normalize(),o=i.clone().normalize(),l=r.angleTo(o);l<1e-4||n<=0||(l>s&&o.copy(r).lerp(o,s/l).normalize(),gs.setFromUnitVectors(r,o),zl.identity().slerp(gs,n),e.getWorldQuaternion(Yi),Yi.premultiply(zl),e.parent.getWorldQuaternion(gs).invert(),e.quaternion.copy(gs.multiply(Yi)),e.updateMatrixWorld(!0))}_layerLook(e){let t=this.lookTarget?this.lookWeight:0;if(this._lookW=(this._lookW||0)+(t-(this._lookW||0))*(1-Math.exp(-e*5)),this._lookW<.01||!this.lookTarget)return;let i=this.bones.Head,n=this.bones.Neck;n.getWorldPosition(gi),n.getWorldQuaternion(Yi),Ji.copy(this._neckFwd).applyQuaternion(Yi),Bl.copy(this.lookTarget).sub(gi),this._rotateBoneToward(n,Ji,Bl,.35*this._lookW,.5),i.getWorldPosition(gi),i.getWorldQuaternion(Yi),Ji.copy(this._headFwd).applyQuaternion(Yi),Bl.copy(this.lookTarget).sub(gi),this._rotateBoneToward(i,Ji,Bl,.65*this._lookW,.75)}_layerFlex(e,t){let i=this.flex,n=this.deploy;if(n<.5)return;let s=t.vx||0,r=t.vy||0,o=1-Math.exp(-e*6);i.ax+=((s-i.vx)/Math.max(e,.001)-i.ax)*o*.5,i.ay+=((r-i.vy)/Math.max(e,.001)-i.ay)*o*.5,i.vx=s,i.vy=r;let l=this.time,c=Math.min(1,Math.hypot(s,r)/600),h=this.hold==="HeroLanding"&&!t.ragdoll?this.holdWeight:0,u=(1-h)*n,d=Math.max(t.ragdoll||0,t.limp||0),f=Math.max(this.blastWeight||0,this.aim.L.w||0,this.aim.R.w||0)*(1-d),g=this.orient.getWorldQuaternion(new mt),b=new A(0,0,1).applyQuaternion(g),p=new A(1,0,0).applyQuaternion(g),m=new A(0,1,0).applyQuaternion(g),_=ci.clamp,M=(j,ee,ce,ke)=>{let K=j+"V";return i[K]=(i[K]||0)+((ee-(i[j]||0))*ce-(i[K]||0)*ke)*e,i[j]=_((i[j]||0)+i[K]*e,-1.2,1.2)},y=(1-d)*(1-h)*n,w=M("lean",_(-s/1e3-i.ax/9e3,-.6,.6),70,8),v=M("bow",_(r/1300+i.ay/11e3,-.45,.45),70,8),x=M("turn",_(s/800,-.55,.55),55,9),S=t.combat?1:.6,P=Math.sin(l*1.9),C=Math.sin(l*1.15),D=Math.sin(l*.83+1.3),k=(w*.48+C*.07*S)*y,V=(x*.55+D*.1*S)*y,L=(v*.4-.1*c+(t.dive||0)*.35)*y;this._turn(this.bones.Pelvis,b,k),this._turn(this.bones.Pelvis,m,V),this._turn(this.bones.Pelvis,p,L),this._turn(this.bones.Spine_01,b,-k*.75),this._turn(this.bones.Spine_01,m,-V*.8),this._turn(this.bones.Spine_01,p,-L*.6+v*.12*y),this._turn(this.bones.Chest,b,(-w*.16+C*.03)*y),this._turn(this.bones.Chest,p,(v*.1+P*.02)*y);let q=_(s/480,-1,1)*(1-d)*(t.dash?1.25:1),O=_(-v*2.2,0,1),G=_(v*2.2,0,1),ie=ci.clamp(-s/900-i.ax/9e3,-.55,.55)*(1+.5*d),W=ci.clamp(r/1400+i.ay/12e3,-.4,.4);for(let[j,ee]of[["L",0],["R",Math.PI]]){let ce=n*(1-.85*(j==="L"?Math.max(f,this.aim.L.w||0):Math.max(f,this.aim.R.w||0))),ke=Math.sin(l*2.3+ee)*(.12+.18*c)*(1-.8*d)+(t.limp?.9*t.limp*(ee?1:-1):0);this._turn(this.bones["UpperArm_"+j],b,(ie*.9+Math.sin(l*1.3+ee)*.07)*ce),this._turn(this.bones["UpperArm_"+j],p,(ke-W*.6)*ce),this._turn(this.bones["LowerArm_"+j],p,(-.18*Math.max(0,Math.sin(l*2.3+ee+.6))-.25*c)*ce),this._turn(this.bones["Hand_"+j],b,Math.sin(l*3.1+ee+1.1)*.22*ce+ie*.4*ce),this._turn(this.bones["FingerCurl_"+j],p,(.25+.25*Math.sin(l*1.7+ee))*ce);let K=Math.sin(l*(2+5*c)+ee)*(.1+.32*c)*(1-.9*d);this._turn(this.bones["UpperLeg_"+j],p,(K+W*.5)*u),this._turn(this.bones["UpperLeg_"+j],b,(ie*.55+Math.sin(l*.9+ee)*.05)*u),this._turn(this.bones["LowerLeg_"+j],p,(.22*Math.max(0,-K)+.25*c)*u*-1),this._turn(this.bones["Foot_"+j],p,(.18*Math.sin(l*(2+5*c)+ee+1.2)+.15*c)*u);let me=Math.max(0,q*(j==="L"?1:-1)),ye=Math.max(0,q*(j==="L"?-1:1)),Ce=.1+.08*Math.sin(l*1.3+ee*.5+.4),ge=t.dive||0,Ue=-(me*.75+O*.35+Ce*.6)+ye*.4+G*.2+ge*.7,bt=me*1.05+O*.6+Ce+ye*.25+ge*.5;this._turn(this.bones["UpperLeg_"+j],p,Ue*u*(1-d)),this._turn(this.bones["UpperLeg_"+j],b,(j==="L"?1:-1)*(.05+.1*me+.06*O)*u*(1-d)),this._turn(this.bones["LowerLeg_"+j],p,bt*Vf*u*(1-d)),this._turn(this.bones["Foot_"+j],p,(ye*.35+G*.3+ge*.4)*Vf*u*(1-d))}this._turn(this.bones.Spine_02,b,-ie*.12*n)}_reach(e,t,i,n,s){let r=this.bones["UpperArm_"+e],o=this.bones["LowerArm_"+e],l=this.bones["Hand_"+e],c=r.getWorldPosition(new A),h=o.getWorldPosition(new A),u=l.getWorldPosition(new A),d=t.clone().sub(c),f=c.distanceTo(h),g=h.distanceTo(u),b=ci.clamp(d.length(),Math.abs(f-g)+.001,f+g-.001);d.normalize();let p=(f*f+b*b-g*g)/(2*b),m=i.clone();m.addScaledVector(d,-m.dot(d)).normalize();let _=d.clone().multiplyScalar(p).addScaledVector(m,Math.sqrt(Math.max(0,f*f-p*p)));if(this._rotateBoneToward(r,h.clone().sub(c),_,n),o.getWorldPosition(h),l.getWorldPosition(u),this._rotateBoneToward(o,u.clone().sub(h),t.clone().sub(h),n),s){let M=new A,y=new A;this.emitterWorld("PalmJet_"+e,y,M),this._rotateBoneToward(l,M,s,n)}}_fingersToForehead(e,t){let i=this.orient.getWorldQuaternion(new mt),n=new A(1,0,0).applyQuaternion(i);this._turn(this.bones.Spine_02,n,.16*e),this._turn(this.bones.Head,n,.5*e),this.model.updateMatrixWorld(!0);let s=(this.nodes.HeadAnchor||this.bones.Head).getWorldPosition(new A),r=new A(0,0,1).applyQuaternion(i),o=new A(-1,0,0).applyQuaternion(i),l=s.clone().addScaledVector(r,t*.15).addScaledVector(o,t*.04);l.y+=t*.02;let c=new A(0,-1,0).addScaledVector(o,.9);this._reach("R",l,c,e,s.clone().sub(l).normalize()),this._turn(this.bones.FingerCurl_R,n,-.45*e)}_turn(e,t,i){!e||Math.abs(i)<1e-4||(gs.setFromAxisAngle(t,i),e.getWorldQuaternion(Yi),Yi.premultiply(gs),e.parent.getWorldQuaternion(zl).invert(),e.quaternion.copy(zl.multiply(Yi)),e.updateMatrixWorld(!0))}_layerAim(e,t){let i=this.aim[t];if(i.w=(i.w||0)+((i.goal||0)-(i.w||0))*(1-Math.exp(-e*10)),i.w<.01||!i.target||this.deploy<.6)return;let n=this.bones["UpperArm_"+t],s=this.bones["Hand_"+t];n.getWorldPosition(gi),s.getWorldPosition(Ji);let r=Ji.clone().sub(gi),o=i.target.clone().sub(gi);this._rotateBoneToward(n,r,o,i.w,Math.PI);let l=this.bones["LowerArm_"+t];l.getWorldPosition(gi),s.getWorldPosition(Ji),this._rotateBoneToward(l,Ji.clone().sub(gi),i.target.clone().sub(gi),i.w*.8,Math.PI);let c=this.jets["PalmJet_"+t];c.node.getWorldPosition(gi),c.dir.getWorldPosition(Ji),this._rotateBoneToward(s,Ji.sub(gi),i.target.clone().sub(gi),i.w,Math.PI*.6)}_face(e){if(this.nextBlink-=e,this.nextBlink<=0&&this.blinkT<0&&(this.blinkT=0),this.blinkT>=0){this.blinkT+=e;let s=this.blinkT/.16;if(this.blink=s<.5?s*2:Math.max(0,2-s*2),s>=1){this.blinkT=-1,this.blink=0;let r=this.face==="fierce";this.nextBlink=(r?3.5:1.8)+Math.random()*(r?4:4.5),!r&&Math.random()<.18&&(this.nextBlink=.18)}}let t={},i=this.face;Gf[i]?Object.assign(t,Gf[i]):t[i]=1;let n=1-Math.exp(-e*9);for(let s of["happy","listening","thinking","curious","surprised","sleepy","fierce","injured","charging"])this.faceW[s]=(this.faceW[s]||0)+((t[s]||0)-(this.faceW[s]||0))*n;for(let s of this.morphMeshes){let r=s.morphTargetDictionary,o=s.morphTargetInfluences,l=/mouth/i.test(s.name)?"surprised":"fierce";for(let[c,h]of Object.entries(r))c==="blink"?o[h]=this.blink*(1-.6*(this.faceW.fierce||0)):c===l?o[h]=Math.max(this.faceW[c]||0,this.faceW.charging):o[h]=this.faceW[c]||0}}_eyes(e){let t=this.eyeRedTarget;if(this.eyeRed+=(t-this.eyeRed)*(1-Math.exp(-e*(t>this.eyeRed?14:3))),this.eyeRed<.002&&t===0){if(this._eyesTinted){for(let s of this.eyeMats)s.m.color.copy(s.c),s.m.emissive.copy(s.e),s.m.emissiveIntensity=s.ei;this._eyesTinted=!1}return}this._eyesTinted=!0;let i=x_,n=this.eyeRed;for(let s of this.eyeMats)s.m.color.copy(s.c).lerp(i,n),s.m.emissive.copy(s.e).lerp(i,n),s.m.emissiveIntensity=s.ei*(1+.6*n)}_halo(e,t){if(!this.halo)return;this.halo.rotation.y+=e*.6;let i=1-Math.min(1,t*1.6);this.halo.visible=i>.02,this.halo.scale.setScalar(.6+.4*i+.03*Math.sin(this.time*2.2)),this.halo.traverse(n=>{n.material&&(n.material.opacity=i*(.75+.25*Math.sin(this.time*3.1)))})}_jets(e,t,i){let n=this.deploy;for(let[s,r]of Object.entries(this.jets)){let l=s.startsWith("Palm")?(t.thrust||0)*.35+(t.palmBoost?.[s.slice(-1)]||0):.18+(t.thrust||0)*.9;t.jetScale!=null&&(l*=t.jetScale),l*=Math.max(0,(n-.55)/.45);let c=l>r.level?14:t.landed?.9:5;r.level+=(l-r.level)*(1-Math.exp(-e*c)),this.emitterWorld(s,r.pos,r.d),r.fx.place(r.pos,r.d,i),r.fx.set(r.level,this.time)}}chestWorld(e){return(this.nodes.ChestAnchor||this.bones.Chest).getWorldPosition(e)}headWorld(e){return(this.nodes.HeadAnchor||this.bones.Head).getWorldPosition(e)}setVisible(e){this.holder.visible=e;for(let t of Object.values(this.jets))t.fx.group.visible=e&&t.level>.01}};var hi=(a,e,t)=>Math.max(e,Math.min(t,a)),Gl=(a,e)=>Math.hypot(a,e),ou=(a,e,t)=>a+(e-a)*t,Vl=class{constructor({random:e=Math.random}={}){this.random=e,this.pos={x:0,y:0},this.vel={x:0,y:0},this.acc={x:0,y:0},this.goal={x:0,y:0},this.cursor={x:0,y:0,active:!1,lastMove:0},this.home=null,this.stiffness=14,this.damping=6.4,this.maxSpeed=460,this.started=!1,this.time=0,this.quiet=!1,this.wanderEnabled=!0,this.cues=[],this.lastCuriosity=0,this.scrollDistance=0,this.scrollDirection=0,this.lastScroll=-1/0,this.nextBoost=0,this.scrollFlight=null}idleHome(e){return{x:e.width*.84,y:e.height*.63}}flightBounds(e,t=e.pad??30){let i=Math.min(e.pad??30,e.width/2),n=Math.min(t,e.height/2),s=e.width-i;return{left:Math.min(s,(e.railRight||0)+i),right:s,top:n,bottom:e.height-n}}start(e,t){this.home=this.idleHome(e),this.pos={...t||this.home},this.goal={...this.home},this.started=!0}setTuning({stiffness:e,damping:t,maxSpeed:i}={}){e!=null&&(this.stiffness=e),t!=null&&(this.damping=t),i!=null&&(this.maxSpeed=i)}setGoal(e,t){this.goal.x=e,this.goal.y=t}impulse(e,t){this.vel.x+=e,this.vel.y+=t}pointerMove(e,t){this.cursor.x=e,this.cursor.y=t,this.cursor.active=!0,this.cursor.lastMove=this.time}scroll(e,t){if(!this.started||this.quiet||!e)return;let i=Math.sign(e);if((i!==this.scrollDirection||this.time-this.lastScroll>.25)&&this.cancelScrollFlight(),this.scrollDirection=i,this.lastScroll=this.time,this.scrollDistance=Math.min(200,this.scrollDistance+Math.min(Math.abs(e),90)),this.scrollFlight||(this.impulse(0,hi(e*1.6,-36,36)),this.scrollDistance<200||this.time<this.nextBoost))return;let{left:n,right:s,top:r,bottom:o}=this.flightBounds(t),l=t.height*(i>0?.83:.17),c=i*Math.max(0,(l-this.pos.y)*i),h=c*i>=t.height*.12?this.pos.x:t.width*(this.pos.x>t.width*.72?.59:.84),u={x:hi(h,n,s),y:hi(this.pos.y+c,r,o)},d=u.x-this.pos.x,f=u.y-this.pos.y,g=Gl(d,f);if(g<35)return;let b=Math.min(1050,g*5);this.impulse(d/g*b,f/g*b),this.scrollFlight={...u,until:this.time+.55},this.nextBoost=this.time+1.4,this.scrollDistance=0}cancelScrollFlight(){this.scrollFlight=null,this.scrollDistance=0}wander(e,t,i){if(this.home||(this.home=this.idleHome(t)),this.scrollFlight){this.setGoal(this.scrollFlight.x,this.scrollFlight.y);return}let n=t.width-(t.pad??30),s=Math.min(n,t.width*.58),r=this.time-this.cursor.lastMove,o=this.cursor.active&&r<3?.1:.16;if(this.random()<1-Math.exp(-o*e)){let u,d,f=this.random();this.cursor.active&&r<4&&f<.45?(u=ou(this.home.x,this.cursor.x,.35),d=ou(this.home.y,this.cursor.y,.3),this.cues.push("Curious")):f<.75?(u=this.home.x+(this.random()-.5)*t.width*.18,d=this.home.y+(this.random()-.5)*t.height*.18):(u=ou(s,n,this.random()),d=t.height*(.28+this.random()*.5),this.cues.push("Relocate")),this.home.x=hi(u,s,n),this.home.y=hi(d,100,t.height-90),this.random()<.3&&this.cues.push("LookAround")}let l=this.time,c=this.home.x+Math.sin(l*.63+1.3)*9+Math.sin(l*1.37)*4,h=this.home.y+Math.sin(l*.91)*7+Math.cos(l*1.71+.4)*3;if(i){for(let u of i)if(c>u.x-70&&c<u.x+u.width+70&&h>u.y-70&&h<u.y+u.height+70){let d=u.x-80,f=u.x+u.width+80;d>=s&&(f>n||c-d<f-c)?c=d:f<=n&&(c=f),this.home.x=hi(c,s,n)}}this.setGoal(hi(c,s,n),h)}update(e,t,i=t.pad??30){let n=hi(e||0,0,.05);this.time+=n,this.started||this.start(t),this.scrollFlight&&this.time>=this.scrollFlight.until&&(this.scrollFlight=null);let{left:s,right:r,top:o,bottom:l}=this.flightBounds(t,i);if(this.quiet)return this.vel.x*=.8,this.vel.y*=.8,this.pos.x=hi(this.pos.x,s,r),this.pos.y=hi(this.pos.y,o,l),this.snapshot(n);let c=this.scrollFlight?25:this.stiffness,h=this.scrollFlight?9:this.damping;this.acc.x=(hi(this.goal.x,s,r)-this.pos.x)*c-this.vel.x*h,this.acc.y=(hi(this.goal.y,o,l)-this.pos.y)*c-this.vel.y*h,this.vel.x+=this.acc.x*n,this.vel.y+=this.acc.y*n;let u=Gl(this.vel.x,this.vel.y),d=this.scrollFlight?1250:this.maxSpeed;u>d&&(this.vel.x*=d/u,this.vel.y*=d/u);let f=this.pos.x+this.vel.x*n,g=this.pos.y+this.vel.y*n;return this.pos.x=hi(f,s,r),this.pos.y=hi(g,o,l),f!==this.pos.x&&Math.sign(this.vel.x)===Math.sign(f-this.pos.x)&&(this.vel.x=0),g!==this.pos.y&&Math.sign(this.vel.y)===Math.sign(g-this.pos.y)&&(this.vel.y=0),this.snapshot(n)}snapshot(){let e=Gl(this.vel.x,this.vel.y);return{x:this.pos.x,y:this.pos.y,vx:this.vel.x,vy:this.vel.y,ax:this.acc.x,ay:this.acc.y,speed:e,thrust:hi(e/420+Gl(this.acc.x,this.acc.y)/6e3,.04,1.3),cues:this.cues.splice(0)}}};var $t=(a,e)=>a+Math.random()*(e-a),Wl=class{constructor(e,t,i,n){var r,o;this.kind=e,this.ctx=n,this.boss=e==="boss",this.root=t.clone(!0),this.root.traverse(l=>{l.frustumCulled=!1,l.material&&(l.material=l.material.clone(),l.material.emissive&&(l.material.userData.e0=l.material.emissiveIntensity))}),this.nodes={},this.root.traverse(l=>{l.name&&(this.nodes[l.name]=l)}),this.body=this.nodes.Body||this.root,this.group=new St,this.group.add(this.root),this.spawn=i.clone(),this.pos=i.clone(),this.vel=new A,this.scalePx=n.enemyScale(e),this.group.position.copy(this.pos),this.group.scale.setScalar(.001),n.scene.add(this.group),this.portal=new Il(n.scene,i,this.boss?n.px(150):n.px(62)),this.portalLife=this.boss?1.6:.9,this.state="portal",this.t=0,this.age=0,this.hp=this.boss?1:11,this.flash=0,this.flinch=new A,this.attackIn=this.boss?$t(.42,.65):$t(.34,.58),this.tell=0,this.attacking=null,this.alive=!0,this.dead=!1,this.seed=Math.random()*100,this.spikes=Object.keys(this.nodes).filter(l=>/^Spike_\d+$/.test(l)).map(l=>this.nodes[l]),this.shards=Object.keys(this.nodes).filter(l=>/^ShardPivot_\d+$/.test(l)).map(l=>this.nodes[l]),this.frags=Object.keys(this.nodes).filter(l=>/^Fragment_\d+$/.test(l)).map(l=>this.nodes[l]),this.chains=[];let s=this.boss?/^Claw_(\d+)_(\d+)$/:/^Tendril_(\d+)_(\d+)$/;for(let l of Object.keys(this.nodes)){let c=l.match(s);c&&(((r=this.chains)[o=+c[1]]||(r[o]=[]))[+c[2]]=this.nodes[l])}this.rest=new Map,this.root.traverse(l=>this.rest.set(l,{p:l.position.clone(),q:l.quaternion.clone(),s:l.scale.clone()})),this.facing=0}get radiusPx(){return this.boss?this.ctx.px(95):this.ctx.px(34)}hit(e,t){return this.state!=="active"?!1:(this.hp-=e,this.flash=1,this.flinch.copy(this.pos).sub(t).setZ(0).normalize().multiplyScalar(this.boss?10:18),this.vel.addScaledVector(this.flinch,this.boss?4:9),this.attacking&&this.attacking!=="orb"&&this.boss&&Math.random()<.35&&(this.attacking=null,this.fired=!1,this.tell=0,this.attackIn=$t(.38,.72)),this.hp<=0&&this.die(),!0)}die(){if(this.state==="dying")return;this.state="dying",this.t=0,this.dead=!0,this.endOrb(),this.hold=!1;let e=this.ctx.particles;e.burst(this.pos,yt,this.boss?90:36,this.boss?520:320,{life:.8,size:this.ctx.px(9),drag:2.4}),e.burst(this.pos,Ft,this.boss?30:12,this.boss?300:200,{life:.4,size:this.ctx.px(14),drag:3}),this.ctx.fx.push(new tt(this.ctx.scene,this.pos,Ft,this.ctx.px(this.boss?420:160),.25)),this.debris=[];for(let t of[...this.shards,...this.spikes,...this.frags,...this.chains.map(i=>i&&i[0]).filter(Boolean)]){let i=t.getWorldPosition(new A).sub(this.group.position).normalize();(!Number.isFinite(i.x)||i.lengthSq()<.1)&&i.set($t(-1,1),$t(-1,1),0).normalize(),this.debris.push({o:t,v:i.multiplyScalar($t(.6,1.4)*(this.boss?1.1:1.4)),w:new A($t(-8,8),$t(-8,8),$t(-8,8))})}}update(e,t,i,n){this.age+=e,this.t+=e;let s=this.ctx;if(this.portal.alive&&this.portal.update(e,this.portalLife),this.state==="portal"){if(Math.random()<.8){let r=Math.random()*Math.PI*2,o=this.boss?s.px(170):s.px(70),l=this.spawn.clone().add(new A(Math.cos(r)*o,Math.sin(r)*o,0)),c=this.spawn.clone().sub(l).multiplyScalar(2.6).add(new A(-Math.sin(r),Math.cos(r),0).multiplyScalar(o*2));s.particles.emit(l,c,yt,{life:.38,size:s.px(6),drag:1.5})}this.t>this.portalLife*.32&&(this.state="emerge",this.t=0)}if(this.state==="emerge"){let r=this.boss?1:.45,o=Math.min(1,this.t/r),l=1-Math.pow(1-o,3);if(this.group.scale.setScalar(Math.max(.001,this.scalePx*(this.boss?.2+.8*l:l))),this.boss){for(let c of this.shards){let h=this.rest.get(c);c.position.copy(h.p).multiplyScalar(l),c.scale.setScalar(Math.max(.01,l))}this.chains.forEach((c,h)=>c&&c[0]&&c[0].scale.setScalar(Math.max(.01,Math.min(1,(o-.25-h*.08)/.5))))}o>=1&&(this.state="active",this.t=0)}if((this.state==="active"||this.state==="emerge")&&this._live(e,t,i,n),this.state==="dying"){let r=this.boss?1.3:.75,o=this.t/r;for(let l of this.debris)l.o.position.addScaledVector(l.v,e*(this.boss?1.4:1.8)),l.o.rotation.x+=l.w.x*e,l.o.rotation.y+=l.w.y*e,l.o.rotation.z+=l.w.z*e,l.o.scale.multiplyScalar(Math.exp(-e*2.2));this.body.scale.setScalar(Math.max(.001,1-o*1.4)),this.group.position.y-=e*s.px(30),this._emissive(Math.max(0,1-o)*2.5),o>=1&&this.dispose()}}_live(e,t,i,n){let s=this.ctx,r=this.seed;if(this.stun>0){this.stun-=e,this.vel.multiplyScalar(Math.exp(-e*1.7)),this.pos.addScaledVector(this.vel,e);let{width:w,height:v}=s.viewport,x=this.radiusPx*.6;Math.abs(this.pos.x)>w/2-x&&(this.pos.x=Math.sign(this.pos.x)*(w/2-x),this.vel.x*=-.55,this.spin*=-.8,this.flash=1),Math.abs(this.pos.y)>v/2-x&&(this.pos.y=Math.sign(this.pos.y)*(v/2-x),this.vel.y*=-.55,this.spin*=-.8,this.flash=1),this.group.position.copy(this.pos),this.spinA=(this.spinA||0)+(this.spin||0)*e,this.root.rotation.set(Math.sin(this.spinA*.7)*.6,this.facing+this.spinA*.5,this.spinA),this.attacking=null,this.fired=!1,this.tell=0,this.beaming=!1,this.endOrb(),this.flash=Math.max(0,this.flash-e*4),this._emissive(.6+this.flash*3+.4*Math.random()),this.stun<=0&&(this.attackIn=Math.max(this.attackIn,$t(.6,1.2)));return}let o=t.clone().sub(this.pos).setZ(0),l=o.length();o.normalize();let c=s.px(this.boss?365:330),h=s.px(s.enemiesTaunt?this.boss?330:240:this.boss?150:96),u=Math.max(-c*.55,Math.min(c,(l-h)*3)),d=new A(-o.y,o.x,0).multiplyScalar(s.px(80)*Math.sin(i*1.2+r)),f=o.multiplyScalar(u).add(d);this.state==="emerge"&&f.multiplyScalar(.12),this.hold?this.vel.multiplyScalar(Math.exp(-e*10)):this.lunge?this.vel.copy(this.lunge.dir).multiplyScalar(this.lunge.speed):this.evadeT>0?(this.evadeT-=e,this.vel.multiplyScalar(Math.exp(-e*2.2))):this.vel.lerp(f,1-Math.exp(-e*3.6)),this.pos.addScaledVector(this.vel,e);let{width:g,height:b}=s.viewport;if(this.pos.x=Math.max(-g/2,Math.min(g/2,this.pos.x)),this.pos.y=Math.max(-b/2,Math.min(b/2,this.pos.y)),this.group.position.copy(this.pos),t){let w=Math.atan2(t.x-this.pos.x,s.px(600))*.9;this.facing+=(w-this.facing)*(1-Math.exp(-e*3))}this.root.rotation.y=this.facing+Math.sin(i*.8+r)*.12,this.spin=(this.spin||0)*Math.exp(-e*2.5),this.spinA=(this.spinA||0)+this.spin*e,this.root.rotation.z=Math.sin(i*.6+r)*.08-this.vel.x/s.px(2e3)+this.spinA,this.root.rotation.x=Math.sin(i*.7+r*3)*.08;let p=this.attacking==="beam"?.8:this.attacking==="orb"?this.boss?.85:.75:this.attacking==="barrage"?.55:this.boss?.5:.38,m=this.attacking==="beam"?.2:this.attacking==="orb"?.55:.28;if(this.beamCool=Math.max(0,(this.beamCool||0)-e),this.beaming&&this.vel.multiplyScalar(Math.exp(-e*8)),s.enemiesTaunt&&(this.attacking=null,this.fired=!1,this.tell=0,this.attackIn=Math.max(this.attackIn,.9),this.endOrb()),this.state==="active"&&!s.enemiesTaunt){if(this.attackIn-=e,!this.attacking&&!this.beaming&&this.attackIn<=0){let w=Math.random(),v=this.beamCool<=0&&s.enemyBeamFree&&s.enemyBeamFree()&&l>s.px(170),x=s.enemyOrbFree&&s.enemyOrbFree(this)&&l>s.px(150)&&l<s.px(620);this.boss&&l<s.px(245)&&w<.3?this.attacking="swipe":x&&Math.random()<(this.boss?.24:.22)?this.attacking="orb":v&&w<(this.boss?.55:.4)?this.attacking="beam":w<(this.boss?.8:.72)?this.attacking="barrage":this.attacking="volley",this.tell=0,this.attacking==="beam"&&(this.beamCool=this.boss?$t(4,6):$t(6,9),s.enemyBeamTell&&s.enemyBeamTell(this,.8)),this.attacking==="orb"&&(this._makeOrb(),s.enemyOrbTell&&s.enemyOrbTell(this,this.boss?.85:.75))}this.attacking&&(this.tell+=e,this.tell>=p&&!this.fired&&(this.fired=!0,this._strike(t,n)),this.attacking==="orb"&&this.hold&&(this.tell=Math.min(this.tell,p+.1)),this.tell>=p+m&&(this.endOrb(),this.attacking=null,this.fired=!1,this.tell=0,this.attackIn=this.boss?$t(.72,1.38):$t(.96,1.85)))}this.orb&&this._orbTick(e,t,Math.min(1,this.tell/p));let _=this.beaming?1:this.attacking?Math.min(1,this.tell/p):0,M=this.fired?Math.max(0,1-(this.tell-p)/m):0;this.spikes.forEach((w,v)=>{let x=this.rest.get(w);w.scale.setScalar(1+.25*_+.08*Math.sin(i*6+v)),w.position.copy(x.p).multiplyScalar(1+.12*_)}),this.chains.forEach((w,v)=>{w&&w.forEach((x,S)=>{if(!x||this.boss&&this.state==="emerge"&&S===0)return;let P=this.rest.get(x),C=Math.sin(i*(this.boss?2.2:4.5)+v*1.7+S*.9)*(this.boss?.16:.32),D=(_*.55-M*.9)*(S+1)*.35*(v%2?1:-1);x.quaternion.copy(P.q),x.rotateX(C+D*.6),x.rotateZ(C*.6+D)})}),this.frags.forEach((w,v)=>{let x=this.rest.get(w),S=i*(.6+v%3*.3)+v;w.position.set(x.p.x*Math.cos(S*.3)-x.p.z*Math.sin(S*.3),x.p.y+Math.sin(S)*.02,x.p.x*Math.sin(S*.3)+x.p.z*Math.cos(S*.3)),w.rotation.set(S,S*1.3,0)}),this.shards.forEach((w,v)=>{if(this.boss&&this.state==="emerge")return;let x=this.rest.get(w),S=1+.02*Math.sin(i*3+v)+.05*_;w.position.copy(x.p).multiplyScalar(S)}),this.flash=Math.max(0,this.flash-e*5),this._emissive(1+_*1.6+this.flash*3);let y=this.flash*(this.boss?.05:.12);this.body.rotation.set(Math.sin(i*70)*y,Math.cos(i*63)*y,0)}_emissive(e){this.root.traverse(t=>{let i=t.material;i&&i.userData.e0!=null&&(i.emissiveIntensity=i.userData.e0*e)})}eyeWorld(e){return e.copy(this.pos).add(new A(Math.sin(this.facing)*this.radiusPx*.4,this.radiusPx*.08,this.radiusPx*.6))}knockback(e,t,i,{car:n=!1}={}){if(this.state!=="active")return;let s=n?1.6:1;this.vel.copy(e).multiplyScalar(this.ctx.px((this.boss?800:1500)*s)),this.spin=(Math.random()<.5?-1:1)*(this.boss?5:13)*s,this.stun=(this.boss?.45:.75)*s,this.beaming=!1,this.endOrb(),this.hold=!1,this.evadeT=0,this.attacking==="orb"&&(this.attacking=null,this.fired=!1,this.tell=0),this.hit(t,i),this.vel.copy(e).multiplyScalar(this.ctx.px((this.boss?800:1500)*s))}pushed(e,t,i,n){this.state==="active"&&(this.attacking==="orb"&&!this.hold&&(this.endOrb(),this.attacking=null,this.fired=!1,this.tell=0),this.vel.addScaledVector(e,this.ctx.px(this.boss?900:1900)*t),this.attacking=null,this.fired=!1,this.beaming=!1,this.flash=Math.max(this.flash,.6),this.hp-=i*t,this.hp<=0&&this.die())}evade(e,t){return this.state!=="active"||this.hold||this.stun>0?!1:(this.vel.copy(e).multiplyScalar(this.ctx.px(t)),this.evadeT=.42,this.spin=(this.spin||0)+Math.sign(e.x||1)*(this.boss?2:6),this.attacking&&this.attacking!=="beam"&&this.attacking!=="orb"&&(this.attacking=null,this.fired=!1,this.tell=0,this.attackIn=Math.max(this.attackIn,.5)),!0)}get orbRadiusPx(){return this.ctx.px(this.boss?70:42)}_makeOrb(){this.endOrb();let e=this.ctx;this.orb={glow:jt(yt,1),core:jt(Ft,1),pos:this.pos.clone(),k:0,arcT:0},e.scene.add(this.orb.glow,this.orb.core)}endOrb(){this.orb&&(this.ctx.scene.remove(this.orb.glow,this.orb.core),this.orb.glow.material.dispose(),this.orb.core.material.dispose(),this.orb=null,this.lunge=null)}orbWorld(e){return e.copy(this.orb?this.orb.pos:this.pos)}_orbTick(e,t,i){let n=this.ctx,s=this.orb,r=this.lunge?this.lunge.dir.clone():t?t.clone().sub(this.pos).setZ(0).normalize():new A(1,0,0);s.pos.copy(this.pos).addScaledVector(r,this.radiusPx*.95),s.k=this.hold||this.lunge?1:i;let o=this.orbRadiusPx*(.25+.75*s.k)*(1+.12*Math.sin(this.age*41));if(s.glow.position.copy(s.pos),s.core.position.copy(s.pos),s.glow.scale.setScalar(o*3.2),s.core.scale.setScalar(o*1.25),s.glow.material.opacity=.75,s.core.material.opacity=.95,s.arcT-=e,s.arcT<=0){s.arcT=.05+Math.random()*.05;let l=Math.random()*Math.PI*2,c=l+$t(.7,2.2),h=o*1.3;n.fx.push(new mi(n.scene,s.pos.clone().add(new A(Math.cos(l)*h*.4,Math.sin(l)*h*.4,0)),s.pos.clone().add(new A(Math.cos(c)*h,Math.sin(c)*h,0)),{width:n.px(2.4),life:.07,segments:7,branches:1,jag:.5,color:yt,hot:Ft}))}Math.random()<.5&&n.particles.emit(s.pos,new A($t(-1,1),$t(-1,1),0).multiplyScalar(n.px(200)),Ft,{life:.2,size:n.px(5),drag:4})}_strike(e,t){let i=this.ctx;if(!e)return;if(this.attacking==="orb"){let c=e.clone().addScaledVector(t,.18);this.lunge={dir:c.sub(this.pos).setZ(0).normalize(),speed:i.px(this.boss?1150:1400)},i.sound("dash");return}if(this.attacking==="beam"){this.beaming=!0,i.enemyBeamFire&&i.enemyBeamFire(this);return}if(this.attacking==="barrage"){let c=this.boss?11:6,h=this.pos.clone(),u=i.px(this.boss?560:500),d=Math.atan2(e.y-h.y,e.x-h.x),f=this.boss?1.25:.8;i.sound("enemyFire");for(let g=0;g<c;g++){let b=d+(g/(c-1)-.5)*f+(Math.random()-.5)*.05,p=new ps(i.scene,{color:yt,hot:Ft,size:i.px(this.boss?10:8),speed:u*(.9+.2*Math.random())});p.hostile=!0,p.damage=1,p.fire(h,h.clone().add(new A(Math.cos(b),Math.sin(b),0).multiplyScalar(100))),i.projectiles.push(p)}i.fx.push(new tt(i.scene,h,yt,i.px(this.boss?180:100),.18));return}let n=this.attacking==="volley"&&this.boss?3:1,s=this.pos.clone(),r=i.px(this.boss?680:610);i.sound("enemyFire");let o=Math.min(.55,s.distanceTo(e)/r),l=e.clone().addScaledVector(t,o);for(let c=0;c<n;c++){let h=(c-(n-1)/2)*i.px(55),u=l.clone().add(new A(h*.6,h,0)),d=new ps(i.scene,{color:yt,hot:Ft,size:i.px(this.boss?13:9),speed:r});d.hostile=!0,d.damage=1,d.fire(s,u),i.projectiles.push(d)}this.attacking==="swipe"&&this.vel.addScaledVector(e.clone().sub(this.pos).setZ(0).normalize(),i.px(260)),i.fx.push(new tt(i.scene,s,yt,i.px(this.boss?140:70),.15))}dispose(){this.alive&&(this.alive=!1,this.endOrb(),this.ctx.scene.remove(this.group),this.portal.dispose(),this.root.traverse(e=>{e.material&&e.material.dispose()}))}};var be=(a,e)=>a+Math.random()*(e-a),Ve=(a,e,t)=>Math.max(e,Math.min(t,a)),jl=class{constructor(e){this.items=e,this.left=[],this.last=null}next(){return this.left.length||(this.left=this.items.slice().sort(()=>Math.random()-.5),this.left[0]===this.last&&this.left.length>1&&this.left.push(this.left.shift())),this.last=this.left.shift()}},v_=new jl(["Finally\u2026 now we can spread our malware!","Finally we can spread malwares!","Guardian offline. Begin the infection!","Heh. Who protects this site now?","Upload the payload!","Not so tough without your firewall.","Every file is ours now\u2026"]),y_=new jl([[["mini","Is that all you got?"],["foe","You should have stayed down!"],["mini","Then come and make me."]],[["mini","Do you think you can defeat me just by that?"],["foe","We knocked you flat once. We can do it again!"],["mini","Try it."]],[["foe","Impossible\u2026 you were offline!"],["mini","Rebooting\u2026 complete."],["mini","Is that all you got?"]],[["mini","Nice try."],["foe","Hah! You can barely stand."],["mini","Do you really think that\u2019s enough to beat me?"]],[["foe","Why won\u2019t you just stay down?!"],["mini","Because this site is under my protection."]],[["mini","You got lucky."],["foe","Lucky? That was pure skill!"],["mini","Then show me again. It won\u2019t happen twice."]],[["mini","Firewall restored."],["foe","Get him! Don\u2019t let him charge up!"],["mini","My turn."]],[["mini","That tickled."],["foe","Tickled?! You were face-down on the floor!"],["mini","Now watch this."]],[["foe","Still standing? Annoying little guardian."],["mini","Not today, malware."]]]),M_=a=>Ve(950+a.length*48,1600,3300),fr=30,S_=1.45,w_=2.75,Wf=.22,T_=1,E_=1.6,A_=1.1,R_=1.7,qf=1.5,ql=a=>a==="bolt"||a==="rasengan",Xf=a=>a==="bolt"?"boltCharge":a==="rasengan"?["rasengan","rasenganVoice"]:a==="katon"?["katonSeal","katonShout"]:"charge",jf=1.75,Kf=3.3,Jf=.9,C_=1.05,P_=1.42,I_=.55,L_=5,F_=15,D_=1,N_=2.1,k_=.4,pr=1.5,Yf=5.6,U_=1,Zf=2.98,Xl=()=>Math.random()<.5?"bolt":"rasengan",O_=[["HeadAnchor",.23],["ChestAnchor",.25],["Pelvis",.18],["LowerArm_L",.1],["LowerArm_R",.1],["Hand_L",.085],["Hand_R",.085],["LowerLeg_L",.11],["LowerLeg_R",.11],["Foot_L",.085],["Foot_R",.085]],Kl=class{constructor(e,t,i){this.ctx=e,this.ch=t,this.templates=i,this.brain=new Vl,this.enemies=[],this.mode="intro",this.modeT=0,this.cool=0,this.history=[],this.battleT=0,this.bossT=0,this.faceTimer=0,this.faceAfter=null,this.palmBoost={L:0,R:0},this.pendingShot=null,this.landed=!1,this.retreat=null,this.evasion=null,this.dodgeCooldown=0,this.slowMo=0,this.slowMoCooldown=0,this.followUp=null,this.blast=null,this.hitZones=[],this.quiet=!1,this.chatOpen=!1,this.chatBusy=!1,this.hover=!1,this.listeners={},this.patrolIn=be(45,90),this.glanceIn=be(3,7),this.introDone=!1,this.ebeams=[],this.tele=null,this.ragdoll=null,this.hp=fr,this.liveBeams=[],e.enemyBeamFree=()=>this.ebeams.length<2&&this.mode==="combat",e.enemyBeamTell=(n,s)=>this._enemyBeamTell(n,s),e.enemyBeamFire=n=>this._enemyBeamFire(n),e.enemyOrbFree=n=>this.mode==="combat"&&!this.calm&&!this.orbClash&&!this.ebeams.some(s=>s.clash)&&!this.enemies.some(s=>s!==n&&!s.dead&&s.attacking==="orb"),e.enemyOrbTell=(n,s)=>this._enemyOrbTell(n,s),this.orbClash=null,this.talk=null,this.fireballs=[],this.ama=null,this.carry=null,this.cb=null,this.ch.eyeRedTarget=0,this.eyeRedFor=0,this.clock=0,this.streak=0,this.lastKill=-1e9}on(e,t){var i;((i=this.listeners)[e]||(i[e]=[])).push(t)}emit(e,t){(this.listeners[e]||[]).forEach(i=>i(t))}setMode(e){this._retractRing=!1,e!=="idle"&&this.brain.cancelScrollFlight(),this.mode=e,this.modeT=0,this.emit("mode",e)}stepTime(e){if(this.calm&&(this.slowMo=0),this.slowMo<=0)return this.slowDepth=.72,e;let t=1-(this.slowDepth||.72)*Math.min(1,this.slowMo/.26);return this.slowMo=Math.max(0,this.slowMo-e),e*t}_focus(e,t=.9){this.calm||(this.slowMo=Math.max(this.slowMo,e),this.slowDepth=Math.max(this.slowDepth||.72,t),this.slowMoCooldown=Math.max(this.slowMoCooldown,1.6))}summon(e,t,i){let n=this.ctx;if(i==="boss"&&this.enemies.some(l=>l.boss&&!l.dead))return null;let s=this.enemies.filter(l=>!l.boss&&!l.dead).length;if(i==="small"&&s>=L_)return null;this.brain.quiet=!1;let r=n.screenToWorld(e,t),o=new Wl(i,this.templates[i],r,n);return this.enemies.push(o),["deploying","combat","downed","standoff"].includes(this.mode)||(this.hp=fr,this.emit("health",{hp:this.hp,max:fr}),this.retreat=null,this.battleT=0,this.swapCool=be(1.5,3),this.sneakCool=be(3,6),this.amaCool=be(4,7),this.cbCool=be(6,9),this.cbCheck=0,this.streak=0,this.lastKill=-1e9,this.carry=null,this.nextPress=1.25,this.pressUntil=0,this.nextBlast=i==="boss"?2.1:2.35,this.dodgeCooldown=0,this.slowMoCooldown=0,this.ch.setFace("surprised"),this.faceAfter="fierce",this.faceTimer=.25,this.setMode("deploying"),this.ch.deployTarget=1,this.ch.play("BoostStart",{weight:3}),this._scanRing()),i==="boss"&&(this.bossT=0),this.emit("spawn",{kind:i,x:e,y:t,world:r.clone(),enemy:o}),o}abortBattle(e){if(this.enemies.length){for(let t of this.enemies)t.dead||(t._tallied=!0,t.die());for(let t of this.fireballs)t.dispose();this.fireballs=[],this._cbClear();for(let t of this.ctx.projectiles)t.dispose(this.ctx.scene);this.ctx.projectiles.length=0,this.emit("abort",e),["deploying","combat","standoff"].includes(this.mode)&&this._afterBattle(!0)}}update(e,t){let i=this.ctx,n=this.brain,s=this.ch,r=i.viewport;this.modeT+=e,this.clock+=e,this.eyeRedFor>0&&(this.eyeRedFor-=e)<=0&&(s.eyeRedTarget=0),this.carry&&(this.carry.t+=e)>=this.carry.dur&&(this.carry=null,this.mode==="combat"&&!this.ragdoll&&s.play("Brake",{weight:4,timeScale:1.1})),this.enemies=this.enemies.filter(S=>S.alive);let o=this.enemies.filter(S=>!S.dead),l=o.filter(S=>!S.trapped),c=this._nearest(l.filter(S=>!S.boss))||l.find(S=>S.boss)||this._nearest(l)||this._nearest(o);this.faceTimer>0&&(this.faceTimer-=e,this.faceTimer<=0&&this.faceAfter&&(s.setFace(this.faceAfter),this.faceAfter=null)),this.cool=Math.max(0,this.cool-e),this.dodgeCooldown=Math.max(0,this.dodgeCooldown-e),this.slowMoCooldown=Math.max(0,this.slowMoCooldown-e),this.evasion&&(this.evasion.remaining-=e)<=0&&(this.evasion=null);for(let S of["L","R"])this.palmBoost[S]=Math.max(0,this.palmBoost[S]-e*3.2);switch(this.mode){case"intro":this._intro(e,r);break;case"idle":this._idle(e,r,t);break;case"patrol":this._patrol(e,r);break;case"deploying":n.setTuning({stiffness:16,damping:6,maxSpeed:700}),c&&this._combatPosition(r,o),s.deploy>.9&&(this.setMode(o.length?"combat":"victory"),s.holdPose("CombatReady",1),this.cool=be(.15,.4));break;case"combat":this._combat(e,r,c,o);break;case"victory":this._victory(e,r);break;case"approach":this._approach(e,r);break;case"landed":this._landed(e,r);break;case"retract":this._retract(e,r);break;case"quiet":this._quietMode(e,r);break;case"downed":this._downed(e,r);break;case"standoff":this._standoff(e,r,c,o);break}if(this.ragdoll){let S=this.ragdoll;S.t+=e,n.setTuning({stiffness:0,damping:1.7,maxSpeed:2400}),n.setGoal(n.pos.x,n.pos.y);let{left:P,right:C,top:D,bottom:k}=n.flightBounds(r);(n.pos.x<=P+2||n.pos.x>=C-2)&&(n.vel.x*=-.6,S.spin*=-.7),(n.pos.y<=D+2||n.pos.y>=k-2)&&(n.vel.y*=-.6,S.spin*=-.7);let V=Math.min(1,S.t/S.dur);S.angle=S.turn*(1-Math.pow(1-V,3)),S.t>=S.dur&&(this.ragdoll=null,s.play("BackFlip",{weight:5,timeScale:1.3}),s.setFace("fierce"))}let h=this.mode==="approach"||this.mode==="landed",u=n.update(e,r,h?30:r.pad);this._handleCues(u.cues);let d=this._facing(u,c);this.ragdoll&&(d.roll+=this.ragdoll.angle,d.pitch+=Math.sin(this.ragdoll.angle*.5)*.35);let f=this.tele&&this.tele.slam||(this.blast&&this.blast.slam&&!(this.blast.dash&&this.blast.dash.hit)?this.blast.slam:null);f==="above"&&(d.pitch+=.6);let g=i.screenToWorld(u.x,u.y),b=this.mode==="landed"||this.mode==="downed"&&this.down&&!["fly"].includes(this.down.phase),p=b?0:1;this.mode==="downed"&&this.down&&(d.yaw=this.down.yaw,d.pitch=this.down.pitch,d.roll=this.down.roll);let m=this.ebeams.filter(S=>S.clash).length>1,_=this.blast&&!this.blast.dash&&!m?this.blast:null,M=_&&{target:_.aim||_.target.pos,side:_.side,kind:_.kind,age:_.age,release:_.release,fired:_.fired,extension:Ve((_.age-(_.release-Wf))/Wf,0,1),power:_.fired?1-.6*Ve((_.age-_.release-.3)/(_.end-_.release-.3),0,1):Ve(_.age/_.release,0,1)**.7};if(M){let S=(1-M.extension)*(_.kind==="katon"?0:1);d.yaw+=M.side*.55*S,d.roll+=M.side*.22*S+(Math.random()-.5)*.06*M.power*S,d.pitch+=.26*S-.14*M.extension+(Math.random()-.5)*.03*M.power*S,_.fired||(_.kind==="bolt"?this._boltArcs(e,M.power):_.kind==="rasengan"?this._rasenSwirl(e,M.power):_.kind==="katon"?this._katonEmbers(e,M.power,_):this._chargeParticles(e,M.power))}s.update(e,{pos:g,speed:u.speed,thrust:u.thrust*p,sizePx:i.miniSize(),vx:u.vx,vy:u.vy,yaw:d.yaw,pitch:d.pitch,roll:d.roll,palmBoost:this.palmBoost,blast:M,tele:this.tele&&{phase:this.tele.phase,k:this.tele.k},ragdoll:this.ragdoll?1-this.ragdoll.t/this.ragdoll.dur:0,limp:this.mode==="downed"?1:0,full:!!(this.blast&&this.blast.full),landed:this.mode==="landed",jetScale:b?0:1,combat:this.mode==="combat"||this.mode==="standoff",dash:!!(this.blast&&this.blast.dash&&!this.blast.dash.hit),dive:f==="above"?1:0});let y=this.blast&&this.blast.kind==="counter"&&!this.ebeams.some(S=>this.blast.targets.includes(S.enemy))&&this.blast.age<this.blast.release+.45&&this.blast.targets.some(S=>S.state==="active"&&S.attacking==="beam");if(this.blast&&!this.blast.fired&&this.blast.age>=this.blast.release&&!y)if(this.blast.fired=!0,this.blast.backshot&&this._focus(.55,.8),ql(this.blast.kind))this._rasenBlink(this.blast)||this._startDash(this.blast);else if(this.blast.kind==="katon")this._breatheFire(this.blast);else if(this.blast.kind==="counter"&&this.ebeams.some(S=>!S.ended&&this.blast.targets.includes(S.enemy)))for(let S of this.ebeams.filter(P=>!P.ended&&this.blast.targets.includes(P.enemy)))this._startClash(S);else this._release({target:this.blast.target,big:!0,blast:!0});this.tele&&this._teleTick(e),this.blast&&this.blast.dash&&this._dashTick(e),this.orbClash&&this._orbClashTick(e,t),this._swapTick(e),this._swapCastTick(e),this._amaTick(e),this._fireTick(e),this._orbLunges(),this._beams(e,t),this.teleCool=Math.max(0,(this.teleCool||0)-e);{let S=0,P=this.blast;if(P&&!P.fired&&!P.dash){let C=Ve(P.age/P.release,0,1);S=i.px(P.full?5.5:ql(P.kind)?2.2:3.2)*C*C}else P&&P.fired&&!P.dash&&P.age<P.end&&(S=i.px(P.full?4:2));(this.orbClash&&this.orbClash.grind||this.ebeams.some(C=>C.clash))&&(S=Math.max(S,i.px(2.6))),this.cb&&this.cb.shell&&(S=Math.max(S,i.px(this.cb.phase==="pull"?3:1.6))),this.kick=Math.max(0,(this.kick||0)-e*i.px(40)),this.shake=this.calm?0:Math.max(S,this.kick)}this.invuln=Math.max(0,(this.invuln||0)-e),this.pendingShot&&(this.pendingShot.t-=e,this.pendingShot.t<=0&&(this._release(this.pendingShot),this.pendingShot=null));let w=s.chestWorld(new A),v=new A(u.vx,-u.vy,0);for(let S of this.enemies)S.update(e,w,t,v);this._burnTick(e),this._cbTick(e),this._tallyKills();let x=["combat","deploying"].includes(this.mode)?this._bodyZones():[];this._projectiles(e,x),this.hitZones=x,this._exhaust(e),this.emit("frame",{st:u,worldPos:g})}_nearest(e){let t=null,i=1/0;for(let n of e){let s=n.pos.distanceToSquared(this.ctx.screenToWorld(this.brain.pos.x,this.brain.pos.y));s<i&&(i=s,t=n)}return t}_facing(e,t){let i=this.ctx,n=0,s=0,r=0,o=this.ch.deploy;if(t&&["combat","deploying"].includes(this.mode)){let l=i.worldToScreen(t.pos),c=l.x-e.x,h=l.y-e.y;n=Ve(Math.atan2(c,i.px(260)),-1.15,1.15),s=Ve(h/i.px(900),-.35,.35),r=Ve(-e.vx/1400,-.4,.4)}else if(this.brain.scrollFlight)n=Ve(e.vx/1400,-.55,.55),s=Ve(e.vy/1800,-.3,.3),r=Ve(-e.vx/1800,-.3,.3);else if(o>.5&&e.speed>140&&this.mode!=="landed")n=Ve(e.vx/420,-1.35,1.35),s=Ve(e.vy/1400,-.35,.35),r=Ve(-e.vx/1600,-.35,.35);else{let l=this._idleLook||{x:e.x,y:e.y+200};n=Ve((l.x-e.x)/i.px(1400),-.45,.45),s=Ve((l.y-e.y)/i.px(2600),-.15,.2),r=Ve(-e.vx/2400,-.18,.18)}return{yaw:n,pitch:s,roll:r}}_intro(e,t){let i=this.brain,n=this.ch;this.modeT<e*1.5&&(i.start(t,{x:t.width+this.ctx.px(140),y:t.height*.42}),n.deployTarget=1,n.deploy=1,i.setTuning({stiffness:7,damping:4.2,maxSpeed:620}),i.setGoal(t.width*.8,t.height*.55),n.setFace("happy"),n.play("BoostStart",{weight:3})),this.modeT>1.1&&!this._introBraked&&(this._introBraked=!0,n.play("Brake",{weight:4})),this.modeT>1.9&&!this._introWaved&&(this._introWaved=!0,n.play("WaveHello",{weight:6,fade:.2}),this.emit("hello")),this.modeT>4&&(this._toIdle(),this.introDone=!0)}_toIdle(){let e=this.brain,t=this.ch;t.deployTarget=0,t.holdPose(null),t.setFace("neutral"),e.home=e.idleHome(this.ctx.viewport),e.setTuning({stiffness:9,damping:5.2,maxSpeed:420}),this.setMode(this.quiet?"quiet":"idle")}_idle(e,t,i){let n=this.brain,s=this.ch;if(n.setTuning({stiffness:9,damping:5.2,maxSpeed:420}),this.chatOpen){let l=this.ctx.chatRect();if(l&&l.width<t.width){let c=l.x+l.width;n.setGoal(c+this.ctx.miniSize()*.36+12,l.y+t.pad),s.lookAt(this.ctx.screenToWorld(c,l.y+t.pad),.6)}else n.setGoal(n.home.x,n.home.y);s.setFace(this.chatBusy?"thinking":"listening");return}if(!this.faceAfter){let l=n.cursor,c=l.active&&Math.hypot(l.x-n.pos.x,l.y-n.pos.y)<this.ctx.px(160);s.setFace(this.hover||c?"happy":n.time-l.lastMove>45?"sleepy":"neutral")}n.wander(e,t,this.ctx.exclusionRects()),this.glanceIn-=e;let r=n.time-n.cursor.lastMove<2.5&&n.cursor.active;r?this._idleLook={x:n.cursor.x,y:n.cursor.y}:this.glanceIn<=0&&(this.glanceIn=be(2.5,7),this._idleLook=this.ctx.pointOfInterest()||{x:be(0,t.width),y:be(0,t.height)});let o=this._idleLook;o&&s.lookAt(this.ctx.screenToWorld(o.x,o.y).setZ(this.ctx.px(500)),r?.9:.6),this.patrolIn-=e,this.patrolIn<=0&&!r&&n.time-n.lastScroll>2.5&&document.hasFocus()&&(this.patrolIn=be(70,140),this.setMode("patrol"),s.deployTarget=1,s.setFace("curious"),this._patrolGoal=null)}_patrol(e,t){let i=this.brain,n=this.ch;if(i.setTuning({stiffness:6,damping:3.8,maxSpeed:560}),!this._patrolGoal||Math.hypot(i.pos.x-this._patrolGoal.x,i.pos.y-this._patrolGoal.y)<60){if((this._patrolLegs=(this._patrolLegs||0)+1)>2+Math.floor(Math.random()*2)){this._patrolLegs=0,n.play("Brake",{weight:4}),Math.random()<.5&&n.play("Scan",{weight:3}),this._toIdle();return}let s=this.ctx.px(110);this._patrolGoal={x:be(t.width*.58,t.width-s),y:be(t.height*.2,t.height*.75)},n.play("BoostStart",{weight:3})}i.setGoal(this._patrolGoal.x,this._patrolGoal.y),n.lookAt(this.ctx.screenToWorld(this._patrolGoal.x,this._patrolGoal.y).setZ(this.ctx.px(300)),.5)}_quietMode(e,t){let i=this.brain,n=this.ch;n.deployTarget=this.enemies.length?1:0,i.quiet=!0,i.cursor.active&&n.lookAt(this.ctx.screenToWorld(i.cursor.x,i.cursor.y).setZ(this.ctx.px(500)),.5),n.setFace(this.chatOpen?this.chatBusy?"thinking":"listening":"neutral")}_combatPosition(e,t,i){let n=this.ctx,s=this.brain;if(this.carry){s.setGoal(s.pos.x,s.pos.y);return}if(this.evasion){s.setGoal(this.evasion.x,this.evasion.y);return}if(this.orbClash)return;if(this.blast&&this.blast.dash&&!this.blast.dash.hit){let h=this.blast.dash.lock||n.worldToScreen(this.blast.target.pos);s.setGoal(h.x,h.y);return}if(this.blast){s.setGoal(this.blast.brace.x,this.blast.brace.y);return}if(i&&this.battleT<this.pressUntil){let c=n.worldToScreen(i.pos),h=s.pos.x-c.x,u=s.pos.y-c.y,d=Math.hypot(h,u),f=n.px(i.boss?220:160);if(d>f){s.setGoal(c.x+h/d*f,c.y+u/d*f),this.retreat=null;return}this.pressUntil=0}let r=new Ae(s.pos.x,s.pos.y),o=t.map(c=>{let h=n.worldToScreen(c.pos);return new Ae(h.x,h.y)}),l=n.px(135);if(!this.retreat||this.retreat.distanceTo(r)<n.px(55)||o.some(c=>c.distanceTo(this.retreat)<l)){let{left:c,right:h,top:u,bottom:d}=s.flightBounds(e),f=-1/0;for(let g of[c,(c+h)/2,h])for(let b of[u,e.height/2,d]){let p=new Ae(g,b),m=p.clone().sub(r),_=m.lengthSq();if(_<l*l)continue;let M=1/0,y=1/0;for(let v of o){let x=Ve(v.clone().sub(r).dot(m)/_,0,1);M=Math.min(M,r.clone().addScaledVector(m,x).distanceTo(v)),y=Math.min(y,p.distanceTo(v))}let w=M*2+y-Math.sqrt(_)*.2;w>f&&(f=w,this.retreat=p)}}this.retreat&&s.setGoal(this.retreat.x,this.retreat.y)}_combat(e,t,i,n){let s=this.ctx,r=this.brain,o=this.ch;if(this.battleT+=e,!i){this._afterBattle(!1);return}if(i.boss&&(this.bossT+=e),this.ragdoll)return;if(this.swapping){r.setGoal(r.pos.x,r.pos.y),o.lookAt(this.swapping.e.pos,1),this.blast&&!this.blast.dash&&(this.blast.age+=e);return}if(this.cb&&this.cb.phase==="cast"){r.setGoal(r.pos.x,r.pos.y),o.holdPose("CombatReady",1),o.setFace("charging"),o.aimAt("R",this.cb.aimUp,1),o.lookAt(this.cb.aimUp,.6);return}if(this.cb&&this.cb.shell&&i&&i.trapped&&!this.blast){let p=s.worldToScreen(this.cb.center),m=s.px(120)+this.cb.R,_=r.pos.x-p.x,M=r.pos.y-p.y,y=Math.hypot(_,M)||1;if(y<m){let w=r.flightBounds(t);r.setGoal(Ve(p.x+_/y*m,w.left,w.right),Ve(p.y+M/y*m,w.top,w.bottom))}else r.setGoal(r.pos.x,r.pos.y);r.setTuning({stiffness:10,damping:5.2,maxSpeed:640}),o.lookAt(this.cb.center,1),o.holdPose("CombatReady",1),o.aimAt("L",null),o.aimAt("R",null),this.faceAfter||o.setFace("fierce");return}if((this.cbCheck=(this.cbCheck||0)-e)<=0&&(this.cbCheck=.4,this._cbReady())){let p=s.screenToWorld(r.pos.x,r.pos.y),m=n.filter(w=>w.state==="active"&&!w.hold),_=m.filter(w=>w.pos.distanceTo(p)<w.radiusPx+s.px(270)).length,M=m.filter(w=>w.lunge||w.attacking).length;if(m.length>=3&&(_>=3||_>=2&&m.length>=4||M>=3)&&Math.random()<.7){if(_>=2&&(this.teleCool||0)<=0&&Math.random()<.55&&this._teleport(t,n,{plan:"chibaku"})){this.tele.phase="out",this.tele.t=0,this.emit("sound","teleport"),this._record("ChibakuBlink");return}if(this._chibaku())return}}if(this.ama){r.setGoal(r.pos.x,r.pos.y),o.lookAt(this.ama.e.pos,1),o.holdPose("CombatReady",1),o.setFace("fierce");return}this.escapeCool=Math.max(0,(this.escapeCool||0)-e);{let p=this.blast;if(p&&p.kind==="beam"&&!p.fired&&!p.full&&!p.vsOrb&&!p.vsShell&&!p.backTried&&!p.backshot&&!this.tele&&!this.calm&&p.age>p.release-.6&&(p.backTried=!0,Math.random()<.45&&p.target.state==="active"&&!p.target.hold)){let m=this._behind(p.target,p.target.boss?250:210);if(m&&this._teleport(t,n,{plan:"backshot",to:m,keep:p})){this.tele.phase="out",this.tele.t=0,this.tele.back="late",this.emit("sound","teleport"),this._record("BackshotLate");return}}}this.blast&&this.blast.full&&(this.invuln=Math.max(this.invuln||0,.2)),this.blast&&this.blast.guard&&!this.blast.fired&&(this.invuln=Math.max(this.invuln||0,.15));let l=this.blast&&this.blast.kind==="beam"&&this._swapReady()&&!!this._farFoe(n,s.screenToWorld(r.pos.x,r.pos.y));if(this.blast&&!this.blast.fired&&this.blast.kind!=="counter"&&this.blast.kind!=="katon"&&!this.blast.vsShell&&!this.blast.full&&!this.blast.vsOrb&&!this.tele&&this.escapeCool<=0&&!this.calm&&!l){let p=s.screenToWorld(r.pos.x,r.pos.y),m=n.some(M=>M.state==="active"&&M.pos.distanceTo(p)<M.radiusPx+s.px(170)),_=this.blast.age>.3&&n.some(M=>M.state==="active"&&M.attacking==="swipe"&&M.pos.distanceTo(p)<s.px(260));if((m||_||this.chargeHit)&&this._teleport(t,n,{keep:this.blast,escape:!0})){this.chargeHit=!1;return}this.chargeHit=!1}if(this.blast&&!this.blast.fired&&this.blast.kind==="beam"&&!this.blast.full&&!this.blast.vsShell&&this._swapReady()){let p=s.screenToWorld(r.pos.x,r.pos.y),m=n.some(M=>M.state==="active"&&(M.pos.distanceTo(p)<M.radiusPx+s.px(240)||M.lunge&&M.pos.distanceTo(p)<s.px(520)))||s.projectiles.filter(M=>M.alive&&M.hostile&&!M.redirect&&M.group.position.distanceTo(p)<s.px(260)).length>=3,_=this._farFoe(n,p);if(m&&_&&this._swap(_,"guard",{tell:.2})){this._record("GuardSwap");return}}let c=this.blast&&(this.blast.fired||this.blast.age>.4||this.blast.kind==="beam");if(this.dodgeCooldown<=0&&!c){let p=this._incoming(n);p&&this._dodge(p,t)}if(!this.evasion&&!this.blast&&this.battleT>=this.nextPress&&i.state==="active"&&(this.pressUntil=this.battleT+be(.85,1.2),this.nextPress=this.battleT+be(2.6,3.8)),r.setTuning(this.carry?{stiffness:0,damping:2.3,maxSpeed:2800}:this.blast?.dash?{stiffness:80,damping:10,maxSpeed:2800}:this.evasion?{stiffness:24,damping:7,maxSpeed:950}:{stiffness:10,damping:5.2,maxSpeed:640}),this._combatPosition(t,n,i),!this.faceAfter&&!o.isPlaying("EnemyHit")&&o.setFace("fierce"),o.lookAt(this.blast?.aim||i.pos,1),o.holdPose("CombatReady",1),this.blast){this.blast.age+=e,this.blast.age>=this.blast.end||!this.blast.fired&&this.blast.target.dead?this.blast=null:o.setFace("charging");return}let h=i.pos.clone(),u=this.pendingShot?.side||this._lastFired||"R";if(o.aimAt(u,h,this.pendingShot||o.isPlaying("PalmFire_"+u)?1:.55),o.aimAt(u==="R"?"L":"R",h,.18),this.followUp&&(this.followUp.delay-=e),this.pendingShot)return;let d=o.busyFullBody();if(this.followUp&&this.followUp.delay<=0){let{side:p,target:m,big:_}=this.followUp;this.followUp=null,m.dead||this._fire(p,m,{big:_});return}if(this.cool>0||i.state!=="active"||this.tele)return;if(i.boss&&i.hp<.2&&this.bossT>15&&!this.evasion&&!d){this._startBlast(i,"beam",{full:!0}),this._record("FullPower");return}if(this.battleT>=this.nextBlast&&!this.evasion&&!d&&!this.calm&&(this.teleCool||0)<=0&&(this.sneakCool||0)<=this.battleT&&Math.random()<.3){let p=s.worldToScreen(i.pos),m=r.pos;if(Math.hypot(p.x-m.x,p.y-m.y)>s.px(260)){let _=p.x>m.x?1:-1,M=i.radiusPx+s.px(95),y=r.flightBounds(t),w={x:Ve(p.x+_*M,y.left,y.right),y:Ve(p.y-s.px(30),y.top,y.bottom)};if(this.sneakCool=this.battleT+be(7,11),this._teleport(t,n,{plan:"sneak",to:w,keep:{kind:Xl(),age:0,fired:!1,target:i}})){this._record("SneakAttack");return}}}if(this.battleT>=this.nextBlast&&!this.evasion&&!d){let p=this._chargeWindow(n),m=Math.random();if(!this.calm&&this.battleT>=(this.amaCool||0)&&Math.random()<.45){let _=n.filter(y=>y.state==="active"&&!y.burn&&!y.hold&&!y.trapped),M=_.includes(i)?i:_.find(y=>y.boss)||this._nearest(_);if(M&&this._amaterasu(M))return}if(Math.random()<.3){let _=s.worldToScreen(i.pos);if(Math.hypot(_.x-r.pos.x,_.y-r.pos.y)>s.px(200)){this._startBlast(i,"katon");return}}if(this._cbReady()&&n.filter(_=>_.state==="active").length>=3&&Math.random()<.2&&this._chibaku())return;if(!this.calm&&(this.teleCool||0)<=0&&Math.random()<.22){let _=this._behind(i,i.boss?250:210);if(_&&this._teleport(t,n,{plan:"backshot",to:_,keep:{kind:"beam",age:0,fired:!1,target:i}})){this.tele.phase="out",this.tele.t=0,this.tele.back="early",this.emit("sound","teleport"),this._record("BackshotEarly");return}}if(p&&m<.45){this._startBlast(i,Math.random()<.4?"katon":"beam");return}if(!p&&m<.45&&this._swapReady()&&n.length>=2){let _=s.screenToWorld(r.pos.x,r.pos.y),M=this._farFoe(n,_);if(M&&this._swap(M,"setup",{tell:.3,then:()=>{let y=this.enemies.filter(v=>v.state==="active"),w=this._nearest(y.filter(v=>!v.boss))||y.find(v=>v.boss);w&&this.mode==="combat"&&!this.blast&&this._startBlast(w,"beam")}})){this._record("SetupSwap"),this.nextBlast=this.battleT+be(3.6,4.8);return}}if(Math.random()<.33){this._startBlast(i,"katon");return}this._startBlast(i,Math.random()<.5?"bolt":"rasengan");return}let f=s.worldToScreen(i.pos).x>r.pos.x?"L":"R",g=i.boss&&this.bossT>16&&Math.random()<.3,b=g||!this.calm&&this.battleT>2&&Math.random()<.27;this._fire(f,i,{big:g}),b&&(this.followUp={side:f==="L"?"R":"L",target:i,big:g,delay:g?.12:.22}),this.cool=b?.95:be(.55,.84),this._record(g?"Finisher":b?"Burst":"Fire")}_startBlast(e,t,{full:i=!1,silent:n=!1}={}){let s=this.ctx,r=this.brain,o=s.worldToScreen(e.pos),l=r.pos.x<o.x?-1:1,c=t==="bolt",h=t==="rasengan",u=t==="katon";if(this.blast={kind:t,target:e,side:l,brace:{x:r.pos.x+l*s.px(30),y:r.pos.y+s.px(8)},age:0,fired:!1,release:c?T_:h?A_:u?jf:i?2.3:S_,end:c?E_:h?R_:u?jf+Jf:i?4:w_,full:i},u&&(this.blast.brace={x:r.pos.x,y:r.pos.y},this.blast.guard=!0,s.hasSample&&s.hasSample("katonShout")&&(this.blast.voiced=!0,this.blast.release=Kf,this.blast.end=Kf+Jf)),h&&s.hasSample&&s.hasSample("rasenganVoice")&&(this.blast.voiced=!0,this.blast.release=qf,this.blast.end=qf+.6),!c&&!h&&!u&&s.hasSample&&s.hasSample("charge")){let d=this.blast;d.voiced=!0,d.release=i?Zf+.2:Zf,d.end=d.release+(i?1.7:1.3)}if(h){let d=this.blast;s.fx.push(new Fl(s.scene,f=>{if(this.blast!==d)return!1;let g=d.dash;if(g&&g.hit&&!g.grind)return!1;g?this.ch.emitterWorld("PalmJet_"+g.side,f):this.ch.joinedPalms(f);let b=g?1:Ve(d.age/d.release,0,1);return{r:s.miniSize()*(.09+.16*b)*(g&&g.grind?1.3:1),k:.45+.55*b}}))}if(this.ch.setFace("charging"),this.nextBlast=this.battleT+be(3.6,4.8),this.cool=this.blast.end+.1,this._record(c?"LightningStrike":h?"Rasengan":u?"Katon":"ChargedBlast"),!n){if(u){this.emit("katon",{release:this.blast.release,voiced:!!this.blast.voiced});return}this.emit("sound",c?"boltCharge":h?"rasengan":i?"fullCharge":"charge"),!c&&!h&&this.emit("kame",{release:this.blast.release,full:i}),h&&this.emit("rasen",{release:this.blast.release})}}_rasenSwirl(e,t){let i=this.ctx,n=this.ch.joinedPalms(new A),s=Math.random()<.5+.5*t?2:1;for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,l=i.px(60+70*Math.random()),c=n.clone().add(new A(Math.cos(o)*l,Math.sin(o)*l,0)),h=new A(-Math.sin(o),Math.cos(o),0).multiplyScalar(l*5),u=n.clone().sub(c).multiplyScalar(3.2).add(h);i.particles.emit(c,u,Math.random()<.4?ze:nt,{life:.26,size:i.px(4+3*t),drag:2})}}_boltArcs(e,t){let i=this.ctx;if(this._arcT=(this._arcT||0)-e,this._arcT>0)return;this._arcT=.035+Math.random()*.04;let n=this.ch.joinedPalms(new A),s=i.px(28+55*t);for(let r=0;r<1+Math.round(t*2);r++){let o=Math.random()*Math.PI*2,l=o+be(.8,2.4),c=n.clone().add(new A(Math.cos(o)*s*be(.2,.6),Math.sin(o)*s*be(.2,.6),0)),h=n.clone().add(new A(Math.cos(l)*s,Math.sin(l)*s,0));i.fx.push(new mi(i.scene,c,h,{width:i.px(1.6+1.6*t),life:.08,segments:8,branches:1,jag:.5}))}Math.random()<.6&&i.particles.emit(n,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(260)),ze,{life:.18,size:i.px(5),drag:4})}_strikeBolt(e){let t=this.ctx,i=this.ch,n=e.target,s=i.joinedPalms(new A),r=n.pos.clone();t.fx.push(new mi(t.scene,s,r,{width:t.px(10),life:.55,segments:22,branches:4,jag:.22,readFrom:o=>i.joinedPalms(o),readTo:o=>{(!n.dead||n.alive)&&o.copy(n.pos)}})),t.fx.push(new mi(t.scene,s,r,{width:t.px(3),life:.4,segments:16,branches:2,jag:.32})),t.fx.push(new tt(t.scene,s,ze,t.px(220),.2)),t.fx.push(new tt(t.scene,r,ze,t.px(n.boss?300:180),.3)),t.particles.burst(r,ze,34,t.px(480),{life:.45,size:t.px(8),drag:3}),t.particles.burst(r,nt,26,t.px(300),{life:.6,size:t.px(6),drag:2.5}),this.palmBoost.L=this.palmBoost.R=1.6,n.state==="active"&&(n.hit(this._damageFor(n,!0)*(n.boss?.8:1),s),n.dead&&(n.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:n.kind,seconds:n.boss?this.bossT:null}))),this.emit("sound","bolt")}_teleport(e,t,{keep:i=null,escape:n=!1,plan:s=n?"escape":"cornered",to:r=null}={}){if(this.tele||this.ama||this.cb&&this.cb.phase==="cast"||this.ebeams.some(w=>w.clash))return!1;let o=this.ctx,l=this.brain,{left:c,right:h,top:u,bottom:d}=l.flightBounds(e),f=t.map(w=>o.worldToScreen(w.pos)),g=null,b=-1/0;for(let w=0;w<18;w++){let v=be(c,h),x=be(u,d),S=Math.min(...f.map(P=>Math.hypot(P.x-v,P.y-x)));for(let P of o.projectiles)if(P.hostile){let C=o.worldToScreen(P.group.position);S=Math.min(S,Math.hypot(C.x-v,C.y-x)*1.6)}S-=Math.abs(x-(u+d)/2)*.15,S>b&&(b=S,g={x:v,y:x})}if(r&&(g=r),!g)return!1;i&&i.kind==="katon"&&(i=null);let p=i&&!i.fired?{kind:i.kind,age:i.age,escape:n,target:i.target,full:i.full,voiced:i.voiced,bt0:this.battleT}:null;this._interruptBlast(!!(p&&p.age>.05));let m=o.projectiles.filter(w=>w.hostile&&w.alive).length,_={escape:.3,cornered:.45,evade:.2,sneak:.35,slam:0,backshot:0,chibaku:0,cbFar:0}[s]??.2,M=Math.random()<_?2+Math.floor(Math.random()**1.4*5):1;m>6&&s!=="sneak"&&s!=="slam"&&s!=="backshot"&&s!=="chibaku"&&s!=="cbFar"&&Math.random()<.4&&(M+=1+Math.floor(Math.random()*2)),M=Math.min(M,7);let y=[];for(let w=1;w<M;w++)y.push({x:be(c,h),y:be(u,d)});return y.push(g),this.carry=null,this.tele={phase:n?"out":"focus",t:0,k:0,to:y.shift(),queue:y,resume:p,live:t,plan:s,target:i&&i.target},n&&(this.emit("sound","teleport"),this.emit("teleport",{})),this.escapeCool=3.2,this.evasion=null,this.retreat=null,this.pressUntil=0,this.teleCool=be(4.5,6.5),this.dodgeCooldown=.8,this.ch.setFace("fierce"),this._record("Teleport"),!0}_teleTick(e){let t=this.tele,i=this.ctx,n=this.brain,s=this.ch;if(t.t+=e,n.vel.x*=.8,n.vel.y*=.8,(t.slam||t.back)&&t.phase==="in"&&(n.pos.x=t.to.x,n.pos.y=t.to.y,n.vel.x=n.vel.y=0,n.setGoal(t.to.x,t.to.y)),t.phase==="linger"){t.k=0,t.t>=(t.queue.length>2?.07:.11)&&(t.phase="out",t.t=0,this.emit("sound","teleHop"));return}if(t.phase==="focus")t.k=0,t.t>=.2&&(t.phase="out",t.t=0,this.emit("sound","teleport"),this.emit("teleport",{}));else if(t.phase==="out")t.k=Math.min(1,t.t/.13),t.t>=.13&&(this._teleportFx(i.screenToWorld(n.pos.x,n.pos.y),.6),n.pos.x=t.to.x,n.pos.y=t.to.y,n.vel.x=n.vel.y=0,n.setGoal(t.to.x,t.to.y),t.phase="in",t.t=0,t.k=1);else{if(t.k=Math.max(0,1-t.t/.16),t.t>=.16&&t.queue.length){this._teleportFx(i.screenToWorld(n.pos.x,n.pos.y),.4),t.phase="linger",t.t=0,t.k=0,t.to=t.queue.shift();return}if(t.t>=.16&&t.intro){this._teleportFx(i.screenToWorld(n.pos.x,n.pos.y),.7),this.tele=null,s.play("Victory",{weight:5,fade:.15}),this.mode==="standoff"&&(this.talk={lines:y_.next().slice(),wait:.35,done:!1});return}if(t.t>=.16){if(this._teleportFx(i.screenToWorld(n.pos.x,n.pos.y),.5),this.tele=null,t.plan==="chibaku"){this.mode==="combat"&&this._chibaku();return}if(t.plan==="cbFar"){this.mode==="combat"&&this.cb&&this.cb.shell&&this._cbKame();return}let r=this.enemies.filter(l=>!l.dead&&l.state==="active"),o=t.resume&&t.resume.target&&t.resume.target.state==="active"?t.resume.target:this._nearest(r.filter(l=>!l.boss))||r.find(l=>l.boss);if(o&&this.mode==="combat"&&!this.blast){this.cool=0,this.nextBlast=this.battleT;let l=!!(t.resume&&t.resume.age>.05),c=t.back==="early"&&t.resume&&o===t.resume.target;if(this._startBlast(o,t.resume?t.resume.kind==="counter"?"beam":t.resume.kind:Math.random()<.5?Xl():"beam",{full:!!(t.resume&&t.resume.full),silent:l||c}),t.slam&&o===t.resume.target)this.blast.age=this.blast.release,this.blast.slam=t.slam,this._focus(1.35,.9),this.emit("slam",{variant:t.slam,at:i.worldToScreen(o.pos),radius:o.radiusPx});else if(c){let h=this.blast;h.age=Math.max(0,h.release-(h.voiced?1.05:.8)),h.backshot=!0,this.emit("sound","charge"),this.emit("kame",{release:h.release-h.age,full:!1}),this.emit("backshot",{at:i.worldToScreen(o.pos),radius:o.radiusPx})}else if(t.back==="late"&&t.resume&&o===t.resume.target){let h=this.blast;h.backshot=!0,h.age=l&&t.resume.voiced?Math.min(h.release-.05,t.resume.age+(this.battleT-t.resume.bt0)):h.release-.12,this.emit("backshot",{at:i.worldToScreen(o.pos),radius:o.radiusPx})}else t.plan==="sneak"?this.blast.age=this.blast.release-.2:l&&t.resume.voiced?this.blast.age=Math.min(this.blast.release-.05,t.resume.age+(this.battleT-t.resume.bt0)):t.resume&&(this.blast.age=t.resume.escape?Math.max(t.resume.age,this.blast.release-.22):Math.min(t.resume.age,this.blast.release*.7));this.blast.brace={x:t.to.x,y:t.to.y}}}}}_cbReady(){return this.mode==="combat"&&!this.calm&&!this.cb&&!this.blast&&!this.tele&&!this.swapping&&!this.ama&&!this.orbClash&&!this.ragdoll&&!this.ebeams.some(e=>e.clash)&&this.battleT>=(this.cbCool||0)}_chibaku(){if(!this._cbReady())return!1;let e=this.ctx,t=!!(e.hasSample&&e.hasSample("chibaku")),i=t?N_:D_,n=new kl(e.scene);return e.fx.push(n),this.cb={phase:"cast",t:0,t0:performance.now(),cast:i,voiced:t,core:n,aimUp:new A,center:new A,R:e.px(130),trapped:[],kame:!1,kameDone:!1},this.cbCool=this.battleT+be(16,22),this.cool=i+.5,this.nextBlast=Math.max(this.nextBlast,this.battleT+i+2),this.retreat=null,this.evasion=null,this.pressUntil=0,this.followUp=null,this.invuln=Math.max(this.invuln||0,i+.3),this.emit("chibakuCast",{voiced:t,cast:i}),this._record("ChibakuTensei"),!0}_cbClear(){let e=this.cb;if(e){e.core&&e.core.dispose(),e.shell&&e.shell.dispose();for(let t of e.trapped)t.trapped=!1;e.phase==="cast"&&this.emit("soundStop","chibaku"),this.cb=null}}_cbTick(e){let t=this.cb;if(!t)return;let i=this.ctx,n=this.ch;if(t.t+=e,t.phase==="cast"){if(this.mode!=="combat"||this.ragdoll||this.tele){this._cbClear();return}let h=n.emitterWorld("PalmJet_R",new A);t.aimUp.copy(n.headWorld(new A)).add(new A(i.px(30),i.px(260),0));let u=Math.min(1,(performance.now()-t.t0)/1e3/t.cast);if(t.core.set(h.clone().add(new A(0,i.px(18),0)),i.px(6+12*u),.4+.6*u),Math.random()<.5+u){let d=Math.random()*Math.PI*2,f=i.px(70+60*Math.random()),g=t.core.group.position,b=g.clone().add(new A(Math.cos(d)*f,Math.sin(d)*f,0));i.particles.emit(b,g.clone().sub(b).multiplyScalar(3.2),Math.random()<.6?_n:ur,{life:.3,size:i.px(4+3*u),drag:2})}u>=1&&this._cbLaunch();return}if(t.phase==="launch"){let h=Math.min(1,t.t/k_),u=1-Math.pow(1-h,3);t.core.set(t.from.clone().lerp(t.center,u),i.px(18+10*h),1),h>=1&&this._cbActivate();return}let s=t.phase==="pull"?t.t:pr+t.t;if(t.phase==="pull"){let h=Math.min(1,t.t/pr);t.shell.k=h*h*.9+.1*h,t.core.set(t.center,i.px(28)*(1-.6*h),1-h);for(let u of this.enemies)u.state==="active"&&!u.trapped&&!u.hold&&u.pos.distanceTo(t.center)<i.px(520)&&this._cbTrap(u);if(Math.random()<.9){let u=Math.random()*Math.PI*2,d=t.R*(2.2+1.5*Math.random()),f=t.center.clone().add(new A(Math.cos(u)*d,Math.sin(u)*d,0));i.particles.emit(f,t.center.clone().sub(f).multiplyScalar(2.2),Math.random()<.5?ur:_n,{life:.45,size:i.px(6),drag:1})}h>=1&&(t.phase="formed",t.t=0,t.core.dispose(),t.core=null,t.shell.k=1)}else t.shell.glow=Math.max(0,(t.t-(Yf-pr-.9))/.9),t.shell.shake=.6+2*t.shell.glow;let r=t.phase==="pull"?1-Math.exp(-e*(2+9*Math.min(1,t.t/pr))):1-Math.exp(-e*12);for(let h of t.trapped){if(h.state!=="active")continue;h.stun=Math.max(h.stun||0,.25),h.spin=7,h.vel.set(0,0,0),h.attacking=null,h.fired=!1,h.tell=0,h.beaming=!1;let u=t.phase==="formed"?i.px(4):0,d=t.center.clone().add(h.slot).add(new A((Math.random()-.5)*u,(Math.random()-.5)*u,0));h.pos.lerp(d,r),h.group.position.copy(h.pos),t.phase==="formed"&&(h.boss?h.hp-=Math.min(.025*e,Math.max(0,.86-(1-h.hp))):h.hp-=U_*e,h.flash=Math.max(h.flash,.3),h.hp<=0&&(h.die(),this._killed(h)))}let o=this.mode==="combat"&&!this.blast&&!this.tele&&!this.ragdoll&&!this.swapping&&!this.ama;if((t.plan==="kame"||t.plan==="far")&&!t.kameDone&&o&&(t.phase==="formed"||t.t>.3))if(t.plan==="far"){let h=this._cbFarSpot();t.kameDone=!0,h&&this._teleport(i.viewport,this.enemies.filter(u=>!u.dead),{plan:"cbFar",to:h})?(this.tele.phase="out",this.tele.t=0,this.emit("sound","teleport"),this._record("ChibakuFar")):this._cbKame()}else this._cbKame();for(let h of this.liveBeams){if(h.detached||!h.cast)continue;let u=h.uniforms.uStart.value,d=h.uniforms.uEnd.value,f=d.clone().sub(u),g=f.lengthSq();if(g<1)continue;if(u.clone().addScaledVector(f,Ve(t.center.clone().sub(u).dot(f)/g,0,1)).distanceTo(t.center)<t.R*.9&&(t.phase==="formed"||t.t>pr*.6)){t.shell.k=1,this._cbExplode(!0);return}}let l=this.blast&&this.blast.vsShell&&this.blast.age<this.blast.release+.8||this.tele&&this.tele.plan==="cbFar",c=t.t>=Yf-pr+(l?3:0);t.phase==="formed"&&(c||!t.trapped.some(h=>h.state==="active"))&&this._cbExplode(!1)}_cbKame(){let e=this.cb;if(!e||this.blast)return;e.kameDone=!0;let t=e.trapped.find(i=>i.state==="active");t&&(this.cool=0,this._startBlast(t,"beam"),this.blast.vsShell=!0,this._record("ChibakuKameCharge"))}_cbFarSpot(){let e=this.cb,t=this.ctx,i=this.brain.flightBounds(t.viewport),n=t.worldToScreen(e.center),s=null,r=-1;for(let o of[i.left,(i.left+i.right)/2,i.right])for(let l of[i.top,(i.top+i.bottom)/2,i.bottom]){let c=Math.hypot(o-n.x,l-n.y);c>r&&(r=c,s={x:o,y:l})}return r>e.R+t.px(220)?s:null}_cbLaunch(){let e=this.cb,t=this.ctx,i=this.brain,n=t.viewport,s=this.enemies.filter(h=>h.state==="active"&&!h.hold);if(!s.length){this._cbClear();return}let r=new A;for(let h of s)r.add(h.pos);r.multiplyScalar(1/s.length).setZ(0);let o=t.screenToWorld(i.pos.x,i.pos.y),l=r.clone().sub(o);l.length()<t.px(240)&&r.copy(o).addScaledVector(l.lengthSq()>1?l.normalize():new A(o.x>0?-1:1,0,0),t.px(240));let c=t.px(150);r.x=Ve(r.x,-n.width/2+c,n.width/2-c),r.y=Ve(r.y,-n.height/2+c,n.height/2-c),e.center.copy(r),e.from=e.core.group.position.clone(),e.phase="launch",e.t=0,this.ch.aimAt("R",r,1),this.palmBoost.R=1.4,i.impulse(-(r.x-o.x)*.25,(r.y-o.y)*.25),this.emit("sound","dash")}_cbActivate(){let e=this.cb,t=this.ctx;e.phase="pull",e.t=0;let i=Math.random();e.plan=i<.4?"far":i<.65?"kame":"wait";let n=this.enemies.filter(r=>r.state==="active"&&!r.hold),s=n.some(r=>r.boss);e.R=t.px((s?175:95)+14*Math.min(6,n.length)),e.shell=new Ul(t.scene,t,e.center,e.R),t.fx.push(e.shell);for(let r of n)this._cbTrap(r);t.fx.push(new Kt(t.scene,e.center,e.R*3,_n,.9)),t.fx.push(new tt(t.scene,e.center,_n,e.R*2.2,.3)),this.kick=Math.max(this.kick||0,t.px(6)),this.ch.aimAt("R",null),this.emit("chibakuPull",{at:t.worldToScreen(e.center),radius:e.R})}_cbTrap(e){let t=this.cb;if(e.trapped||!t)return;e.trapped=!0,e.endOrb(),e.lunge=null,e.evadeT=0;let i=t.trapped.length,n=i*2.39996,s=e.boss?0:t.R*(.18+.28*Math.sqrt(Math.min(1,i/6)));e.slot=new A(Math.cos(n)*s,Math.sin(n)*s,0),t.trapped.push(e)}_cbExplode(e){let t=this.cb,i=this.ctx;if(!t)return;this.cb=null,t.core&&t.core.dispose();let n=t.center.clone();t.shell&&t.shell.explode();for(let r of this.enemies){let o=t.trapped.includes(r);if(r.trapped=!1,r.state!=="active")continue;let l=r.pos.distanceTo(n);if(!o&&l>t.R*1.7+r.radiusPx)continue;let c=r.pos.clone().sub(n).setZ(0);c=c.lengthSq()>1?c.normalize():new A(Math.cos(Math.random()*6.3),Math.sin(Math.random()*6.3),0);let h=r.boss?this._damageFor(r,!0)*(e?2.4:1.4)*(o?1:.5):(e?be(8,10):be(4,5.5))*(o?1:.5);r.stun=0,r.knockback(c,h,n,{car:!0}),this._killed(r)}let s=e?1.5:1;i.fx.push(new tt(i.scene,n,ur,t.R*4.5*s,.45)),i.fx.push(new tt(i.scene,n,_n,t.R*3*s,.35)),i.fx.push(new Kt(i.scene,n,t.R*3.6*s,ur,.9)),i.fx.push(new Kt(i.scene,n,t.R*2.4*s,_n,.7)),i.particles.burst(n,ur,70,i.px(900*s),{life:.9,size:i.px(12),drag:2}),i.particles.burst(n,_n,36,i.px(600*s),{life:.7,size:i.px(10),drag:2.4}),e&&i.particles.burst(n,ze,40,i.px(800),{life:.6,size:i.px(10),drag:2.4}),this.kick=Math.max(this.kick||0,i.px(e?22:15)),this._focus(e?.9:.6,.8),this.emit("soundStop","chibaku"),this.emit("sound","chibakuBoom"),this.emit("chibakuBoom",{boosted:e,at:i.worldToScreen(n)}),this._record(e?"ChibakuKame":"ChibakuBurst")}_behind(e,t){let i=this.ctx,n=this.brain,s=n.flightBounds(i.viewport),r=i.worldToScreen(e.pos.clone().addScaledVector(e.vel,.25)),o=r.x-n.pos.x,l=r.y-n.pos.y,c=Math.hypot(o,l)||1;o/=c,l/=c;let h=e.radiusPx+i.px(t);for(let u of[0,.45,-.45,.85,-.85]){let d=Math.cos(u),f=Math.sin(u),g=o*d-l*f,b=o*f+l*d,p=r.x+g*h,m=r.y+b*h;if(p>=s.left&&p<=s.right&&m>=s.top&&m<=s.bottom)return{x:p,y:m}}return null}_carryThrough(e){let t=this.ctx,i=this.brain,n=i.vel.x,s=i.vel.y,r=Math.hypot(n,s);r<1&&e.dash&&e.dash.lock&&(n=e.dash.lock.x-(e.brace?.x??i.pos.x),s=e.dash.lock.y-(e.brace?.y??i.pos.y),r=Math.hypot(n,s)||1);let o=Math.max(r,t.px(950));i.vel.x=n/(r||1)*o,i.vel.y=s/(r||1)*o,this.carry={t:0,dur:.7},e.brace={x:i.pos.x,y:i.pos.y},this.retreat=null,this.evasion=null,this._record("CarryThrough")}_amaterasu(e){if(this.ama||this.cb||this.tele||this.swapping||this.orbClash||this.ragdoll||this.blast||e.state!=="active"||e.burn)return!1;let t=!!(this.ctx.hasSample&&this.ctx.hasSample("amaterasu"));return this.ama={e,t:0,t0:performance.now(),tell:t?P_:C_},this._focus(this.ama.tell+.1,.88),this.ch.eyeRedTarget=1,this.amaCool=this.battleT+be(9,13),this.invuln=Math.max(this.invuln||0,this.ama.tell+.2),this.nextBlast=this.battleT+this.ama.tell+be(2.4,3.4),this.cool=this.ama.tell+.35,this.retreat=null,this.evasion=null,this.pressUntil=0,this.followUp=null,this.ch.setFace("fierce"),this.emit("sound","amaterasu"),this.emit("amaCast",{at:this.ctx.worldToScreen(e.pos),radius:e.radiusPx}),this._record("Amaterasu"),!0}_amaTick(e){let t=this.ama;if(t){if(this.mode!=="combat"||t.e.state!=="active"||this.ragdoll||this.tele){this.ama=null,this.ch.eyeRedTarget=0,this.emit("soundStop","amaterasu");return}t.t=(performance.now()-t.t0)/1e3,this.brain.vel.x*=.75,this.brain.vel.y*=.75,t.t>=t.tell&&this._ignite(t.e)}}_ignite(e){let t=this.ctx;this.ama=null,this.eyeRedFor=1.6,e.burn={t:0},t.fx.push(new Dl(t.scene,e,t)),t.particles.burst(e.pos,su,e.boss?60:34,t.px(e.boss?420:300),{life:.6,size:t.px(9),drag:2.6}),e.flash=1,e.vel.multiplyScalar(.3),this._focus(.9,.85),this.kick=Math.max(this.kick||0,t.px(7)),this.emit("amaterasu",{at:t.worldToScreen(e.pos),radius:e.radiusPx,boss:e.boss})}_burnTick(e){for(let t of this.enemies)if(!(!t.burn||t.state!=="active")){if(t.burn.t+=e,t.boss){let i=Math.max(0,.86-(1-t.hp));t.hp-=Math.min(.016*e,i)}else t.hp-=I_*e;t.flash=Math.max(t.flash,.12+.08*Math.sin(t.burn.t*17)),t.hp<=0&&(t.die(),this._killed(t))}}_killed(e){e.dead&&(e.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:e.kind,seconds:e.boss?this.bossT:null}))}_tallyKills(){for(let e of this.enemies)!e.dead||e._tallied||(e._tallied=!0,this.emit("sound","virusDie"),this.streak=this.clock-this.lastKill<=F_?this.streak+1:1,this.lastKill=this.clock,this.streak>=2&&this.emit("multikill",{n:Math.min(5,this.streak)}))}_katonEmbers(e,t,i){if(!i.saidKaton&&i.age>=Math.min(i.release*.48,1.45)&&(i.saidKaton=!0,this.emit("katonSay",{})),Math.random()>.25+t)return;let n=this.ctx,s=this.ch.mouthWorld(new A),r=Math.random()*Math.PI*2,o=n.px(45+45*Math.random()),l=s.clone().add(new A(Math.cos(r)*o,Math.sin(r)*o,0));n.particles.emit(l,s.clone().sub(l).multiplyScalar(3.4),Math.random()<.5?kn:hr,{life:.26,size:n.px(3+4*t),drag:2})}_breatheFire(e){let t=this.ctx,i=this.ch,n=e.target,s=i.mouthWorld(new A),r=t.px(820),o=n.pos.clone();n.state==="active"&&o.addScaledVector(n.vel,Math.min(.6,s.distanceTo(n.pos)/r)*.8);let l=o.sub(s).setZ(0).normalize(),c=t.px(n.boss?82:66),h=new Nl(t.scene,t,s,l,{speed:r,radius:c});h.hits=new Set,h.born=0,this.fireballs.push(h),t.fx.push(h),e.breath=.4,e.fireDir=l.clone(),e.brace={x:this.brain.pos.x,y:this.brain.pos.y},t.fx.push(new tt(t.scene,s,hr,t.px(200),.22)),this._foesReact("katon",s,l,n,c*.8),this.kick=Math.max(this.kick||0,t.px(6)),this.brain.impulse(-l.x*t.px(150),l.y*t.px(150)),this.emit("sound","katonFire"),this._record("KatonFire")}_fireTick(e){let t=this.ctx,i=t.viewport,n=this.blast;if(n&&n.kind==="katon"&&n.fired&&n.breath>0){n.breath-=e;let s=this.ch.mouthWorld(new A);for(let r=0;r<4;r++){let o=n.fireDir.clone().multiplyScalar(t.px(500+500*Math.random())).add(new A((Math.random()-.5)*t.px(160),(Math.random()-.5)*t.px(160),0));t.particles.emit(s,o,r%3===0?hr:r%3===1?kn:cr,{life:.22,size:t.px(10+14*Math.random()),drag:3})}}this.fireballs=this.fireballs.filter(s=>s.alive);for(let s of this.fireballs){if(s.out>=0)continue;s.born+=e;for(let o of t.projectiles)!o.alive||!o.hostile||o.group.position.distanceTo(s.pos)<s.r*1.1+o.radius&&(t.particles.burst(o.group.position,kn,6,t.px(200),{life:.25,size:t.px(6),drag:3}),o.dispose(t.scene));let r=null;for(let o of this.enemies)if(o.state==="active"&&o.pos.distanceTo(s.pos)<s.r*.85+o.radiusPx*.8){r=o;break}if(r){this._fireBurst(s,r);continue}(Math.abs(s.pos.x)>i.width/2+t.px(160)||Math.abs(s.pos.y)>i.height/2+t.px(160)||s.born>3.5)&&s.dispose()}}_fireBurst(e,t){let i=this.ctx,n=e.pos.clone();e.burst();for(let s of this.enemies){if(s.state!=="active")continue;let r=s.pos.distanceTo(n),o=s===t;if(!o&&r>s.radiusPx+e.R+i.px(110))continue;let l=r>1?s.pos.clone().sub(n).setZ(0).normalize():e.dir.clone(),c=s.boss?this._damageFor(s,!0)*(o?.9:.4):o?be(3,4.2):be(1.3,2.1);s.knockback(o?l.clone().add(e.dir).normalize():l,c,n,{car:o}),this._killed(s)}i.fx.push(new tt(i.scene,n,cr,i.px(t.boss?380:280),.32)),i.fx.push(new tt(i.scene,n,kn,i.px(t.boss?200:150),.2)),i.fx.push(new Kt(i.scene,n,i.px(260),kn,.6)),i.fx.push(new Kt(i.scene,n,i.px(170),hr,.4)),i.particles.burst(n,kn,46,i.px(560),{life:.6,size:i.px(12),drag:2.6}),i.particles.burst(n,cr,30,i.px(380),{life:.75,size:i.px(14),drag:2.2}),i.particles.burst(n,hr,12,i.px(300),{life:.3,size:i.px(8),drag:3}),this.kick=Math.max(this.kick||0,i.px(10)),!this.calm&&this.slowMoCooldown<=0&&(this.slowMo=Math.max(this.slowMo,.35),this.slowMoCooldown=1.2),this.emit("sound","katonBoom"),this._record("KatonHit")}_rasenBlink(e){let t=e.target,i=this.ctx,n=this.brain,s=i.viewport;if(e.kind!=="rasengan"||e.slam||e.vsOrb||this.calm||this.tele||this.orbClash||this.swapping||!t||t.state!=="active"||t.hold||t.lunge||t.attacking==="orb"||Math.random()>.7)return!1;let r=i.worldToScreen(t.pos.clone().addScaledVector(t.vel,.3)),o=n.flightBounds(s),l=t.radiusPx+i.px(t.boss?125:110),c={x:Ve(r.x,o.left,o.right),y:r.y-l},h=r.x>=n.pos.x?1:-1,u={x:r.x+h*l,y:Ve(r.y-i.px(14),o.top,o.bottom)},d=c.y>=o.top,f=u.x>=o.left&&u.x<=o.right;if(!d&&!f)return!1;let g=d&&(!f||Math.random()<.55)?"above":"behind",b={kind:"rasengan",age:e.age,fired:!1,target:t,voiced:e.voiced};return this._teleport(s,this.enemies.filter(p=>!p.dead),{plan:"slam",to:g==="above"?c:u,keep:b})?(this.tele.phase="out",this.tele.t=0,this.tele.slam=g,this.emit("sound","teleport"),this._record(g==="above"?"RasenganDrop":"RasenganBackstab"),!0):!1}_startDash(e){let t=this.ctx,i=t.worldToScreen(e.target.pos);e.dash={t:0,side:i.x>this.brain.pos.x?"L":"R",hit:!1,swept:new Set},this.carry=null,e.end=1/0,this.ch.play("BoostStart",{weight:3}),this.emit("sound",e.kind==="rasengan"?"rasenDash":"dash");let n=e.target;if(!e.slam&&n.attacking!=="orb"){let s=t.screenToWorld(this.brain.pos.x,this.brain.pos.y),r=n.pos.clone().sub(s).setZ(0).normalize();this._foesReact(e.kind,s,r,n,t.px(e.kind==="rasengan"?55:40)).targetOk&&(e.dash.lock={x:i.x,y:i.y},e.dash.dodgedBy=n)}}_dashTick(e){let t=this.ctx,i=this.blast,n=i.dash,s=i.target,r=this.ch;if(n.t+=e,n.grind)return;if(n.hit){n.t>n.hitAt+.35&&(this.blast=null,r.aimAt(n.side,null));return}r.aimAt(n.side,s.pos,1),this.palmBoost[n.side]=1.4;let o=r.emitterWorld("PalmJet_"+n.side,new A),l=i.kind==="rasengan";if(l)for(let u=0;u<2;u++){let d=n.t*40+u*Math.PI,f=t.px(26),g=o.clone().add(new A(Math.cos(d)*f,Math.sin(d)*f,0));t.particles.emit(g,new A(-Math.sin(d),Math.cos(d),0).multiplyScalar(t.px(260)),u?ze:nt,{life:.3,size:t.px(6),drag:3})}else for(let u=0;u<2;u++){let d=Math.random()*Math.PI*2,f=t.px(18+Math.random()*26);t.fx.push(new mi(t.scene,o,o.clone().add(new A(Math.cos(d)*f,Math.sin(d)*f,0)),{width:t.px(2.2),life:.06,segments:6,branches:1,jag:.6}))}t.particles.emit(o,new A(-this.brain.vel.x*.3,this.brain.vel.y*.3,0),ze,{life:.25,size:t.px(7),drag:3});for(let u of this.enemies){if(u===s||u.state!=="active"||n.swept.has(u)||u.hold)continue;if(u.attacking==="orb"&&u.orb&&o.distanceTo(u.orbWorld(new A))<u.orbRadiusPx+t.px(30)){this._startOrbClash(u,o.clone().lerp(u.orbWorld(new A),.5));return}if(o.distanceTo(u.pos)>u.radiusPx+t.px(30))continue;n.swept.add(u);let d=new A(this.brain.vel.x,-this.brain.vel.y,0).normalize(),f=Math.sign((u.pos.x-o.x)*-d.y+(u.pos.y-o.y)*d.x)||1,g=new A(-d.y*f,d.x*f,0).multiplyScalar(.8).addScaledVector(d,.6).normalize();u.knockback(g,u.boss?this._damageFor(u,!1)*2:be(1.2,2),o),t.fx.push(new tt(t.scene,u.pos,ze,t.px(u.boss?240:160),.22)),t.particles.burst(u.pos,ze,22,t.px(400),{life:.35,size:t.px(7),drag:3}),this.emit("sound","impact"),this._record("ChidoriSweep"),u.dead&&(u.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:u.kind,seconds:u.boss?this.bossT:null}))}if(s.state==="active"&&s.attacking==="orb"&&s.orb&&!s.hold){let u=s.orbWorld(new A);if(o.distanceTo(u)<s.orbRadiusPx+t.px(34)||o.distanceTo(s.pos)<s.radiusPx+t.px(18)){this._startOrbClash(s,o.clone().lerp(u,.5));return}}let c=s.state==="active"?o.distanceTo(s.pos):1/0,h=n.lock&&Math.hypot(this.brain.pos.x-n.lock.x,this.brain.pos.y-n.lock.y)<t.px(40);if(s.state!=="active"||c<s.radiusPx+t.px(18)||n.t>.6||h){if(n.hit=!0,n.hitAt=n.t,s.state==="active"&&c>=s.radiusPx+t.px(45)){if(l)t.particles.burst(o,nt,18,t.px(260),{life:.3,size:t.px(6),drag:3});else for(let p=0;p<3;p++){let m=Math.random()*Math.PI*2,_=t.px(40+Math.random()*50);t.fx.push(new mi(t.scene,o,o.clone().add(new A(Math.cos(m)*_,Math.sin(m)*_,0)),{width:t.px(3),life:.2,segments:9,branches:1,jag:.4}))}this._carryThrough(i),n.dodgedBy&&this.emit("whiff",{}),this._record("ChidoriWhiff");return}if(s.state==="active"){let p=i.slam==="above"?new A(0,-1,0):s.pos.clone().sub(o).setZ(0).normalize();s.knockback(p,s.boss?this._damageFor(s,!0)*.7:be(2.2,3.4),o,{car:!0}),i.slam&&(this._focus(.4,.85),t.fx.push(new Kt(t.scene,o,t.px(s.boss?300:230),ze,.6)),this.kick=Math.max(this.kick||0,t.px(11))),s.dead&&(s.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:s.kind,seconds:s.boss?this.bossT:null}))}for(let p=0;p<6&&!l;p++){let m=Math.random()*Math.PI*2,_=t.px(70+Math.random()*90);t.fx.push(new mi(t.scene,o,o.clone().add(new A(Math.cos(m)*_,Math.sin(m)*_,0)),{width:t.px(5),life:.3,segments:12,branches:2,jag:.3}))}l&&this._rasenBurst(o,s.boss?1.4:1),this.kick=Math.max(this.kick||0,t.px(l?8:6)),t.fx.push(new tt(t.scene,o,ze,t.px(s.boss?320:220),.25)),t.particles.burst(o,ze,40,t.px(520),{life:.45,size:t.px(8),drag:3});let u=t.worldToScreen(s.pos),d=this.brain.pos.x-u.x,f=this.brain.pos.y-u.y,g=Math.hypot(d,f)||1;this.brain.vel.x=d/g*t.px(700),this.brain.vel.y=f/g*t.px(700);let b=this.brain.flightBounds(t.viewport);i.brace={x:Ve(this.brain.pos.x+d/g*t.px(150),b.left,b.right),y:Ve(this.brain.pos.y+f/g*t.px(150),b.top,b.bottom)},this.emit("sound",l?"rasenHit":"bolt")}}_rasenBurst(e,t=1){let i=this.ctx;for(let n=0;n<46;n++){let s=n/46*Math.PI*2,r=i.px(be(320,640)*t),o=new A(Math.cos(s)*r-Math.sin(s)*r*.7,Math.sin(s)*r+Math.cos(s)*r*.7,0);i.particles.emit(e,o,n%3?nt:ze,{life:be(.35,.6),size:i.px(be(5,9)),drag:2.6})}i.fx.push(new Kt(i.scene,e,i.px(170*t),nt,.5)),i.fx.push(new Kt(i.scene,e,i.px(110*t),ze,.35))}_enemyBeamTell(e,t){if(this.mode!=="combat"||this.tele||this.ama||this.cb&&this.cb.phase==="cast"||this.ragdoll||this.blast&&this.blast.full)return;let i=this.ctx,n=this.blast&&this.blast.kind==="counter"?this.blast:null;if(n){!n.targets.includes(e)&&n.targets.length<2&&n.targets.push(e);return}if(this.ebeams.some(r=>r.clash)&&this.ebeams.length<2){this.pendingSecond=e;return}let s=this.blast&&this.blast.kind==="beam"&&!this.blast.fired&&!this.blast.full;if((!this.blast||s)&&this._swapReady()&&!this.pendingSwap&&this._swapPartner(e)&&Math.random()<(s?.75:.45)){this.pendingSwap={kind:"beam",foe:e,t:0,fireIn:t};return}if(s){let r=this.blast,o=Math.max(r.age+.05,Math.min(r.release,r.age+t+.05));r.voiced&&o<r.release-.05&&(this.emit("soundStop","charge"),this.emit("kame",{release:o-r.age,full:!1,counter:!0})),r.kind="counter",r.target=e,r.targets=[e],r.release=o,r.end=o+1.1,this.cool=Math.max(this.cool,r.end-r.age+.1),this._record("CounterBeam");return}!this.calm&&Math.random()<.5&&!(this.blast&&this.blast.dash)?(this._interruptBlast(),this.blast={kind:"counter",target:e,targets:[e],side:this.brain.pos.x<i.worldToScreen(e.pos).x?-1:1,brace:{x:this.brain.pos.x,y:this.brain.pos.y},age:0,fired:!1,release:t,end:t+1.1},this.ch.setFace("charging"),this.cool=t+1.2,this._record("CounterBeam"),this.emit("sound","charge"),this.emit("kame",{release:t,full:!1,counter:!0})):this.beamEvade={t:t-.12,enemy:e}}_enemyBeamFire(e){let t=this.ctx;if(this.ebeams.some(c=>c.enemy===e))return;let i=e.eyeWorld(new A),s=this.ch.chestWorld(new A).sub(i).setZ(0).normalize(),r=new ms(t.scene,{width:t.px(e.boss?30:20),core:"#FFE1E8",mid:"#FF2A55",outer:"#8A0022"});this.swapping&&this.swapping.beamFoe===e&&this._finishSwap(),this.lastSwap&&this.lastSwap.beamFoe===e&&this.battleT-this.lastSwap.t<.4&&s.copy(this.lastSwap.oldW).sub(i).setZ(0).normalize();let o={enemy:e,dir:s,age:0,dur:1.35,stream:r,hit:!1,len:0,ended:!1,out:0,clash:null};this.lastSwap&&this.lastSwap.beamFoe===e&&this.battleT-this.lastSwap.t<.4&&(o.betrayed=!0),this.ebeams.push(o),t.fx.push(new tt(t.scene,i,Ft,t.px(e.boss?200:120),.2)),this.emit("sound","enemyBeam");let l=this.blast&&this.blast.kind==="counter"?this.blast:null;l&&!l.fired&&l.targets.includes(e)?l.age=Math.max(l.age,l.release):(this.pendingSecond===e||this.ebeams.some(c=>c.clash)&&Math.random()<.85)&&(this.pendingSecond=null,this._startClash(o))}_startClash(e){let t=this.ctx;!e||e.clash||e.ended||(e.clash={u:.5,t:0,dur:be(1.7,2.8),surge:0,surgeSide:1,mini:new ms(t.scene,{width:t.px(34)}),orbA:jt(ze,t.px(160)),orbB:jt(Ft,t.px(120))},t.scene.add(e.clash.orbA,e.clash.orbB),this.blast?(this.blast.fired=!0,this.blast.end=1/0):this.blast={kind:"counter",target:e.enemy,targets:[e.enemy],side:1,brace:{x:this.brain.pos.x,y:this.brain.pos.y},age:9,fired:!0,release:0,end:1/0},this.palmBoost.L=this.palmBoost.R=1.6,this._record("BeamStruggle"),this.emit("sound","clash"),this.emit("clash",{dual:this.ebeams.filter(i=>i.clash).length>1}))}_clashSide(e){let t=this.ebeams.filter(n=>n.clash);if(t.length<2)return null;let i=t.find(n=>n!==e);return this.ctx.worldToScreen(e.enemy.pos).x>=this.ctx.worldToScreen(i.enemy.pos).x?"L":"R"}_clashOrigin(e,t){let i=this._clashSide(e);return i?this.ch.emitterWorld("PalmJet_"+i,t):this.ch.joinedPalms(t)}_beams(e,t){let i=this.ctx,n=this.ch;if(this.beamEvade&&(this.beamEvade.t-=e,this.beamEvade.t<=0)){let r=i.viewport,o=this.brain.flightBounds(r),l=this.brain.pos;if(!((Math.min(l.x-o.left,o.right-l.x)<i.px(110)||Math.min(l.y-o.top,o.bottom-l.y)<i.px(90))&&(this.teleCool||0)<=0&&this._teleport(r,this.enemies.filter(h=>!h.dead),{plan:"evade"}))){let h=i.worldToScreen(this.beamEvade.enemy.pos),u=this.brain,d=u.pos.x-h.x,f=u.pos.y-h.y,g=Math.hypot(d,f)||1,b=u.pos.y<r.height/2?1:-1;u.impulse(-f/g*b*i.px(900),d/g*b*i.px(900)),n.play(d*b<0?"DodgeLeft":"DodgeRight",{weight:6,fade:.06}),this.emit("dodge",{cinematic:!1,dir:Math.sign(-f*b)})}this.beamEvade=null}let s=this.ebeams.filter(r=>r.clash);if(s.length===2)for(let r of s)n.aimAt(this._clashSide(r),r.enemy.pos,1);for(let r of this.ebeams){let o=r.enemy,l=o.eyeWorld(new A);r.age+=e;let c=r.clash;if(c){c.t+=e;let h=this._clashOrigin(r,new A);c.surge-=e,c.surge<=0&&Math.random()<e*1.5&&(c.surge=be(.25,.5),c.surgeSide=Math.random()<(o.boss?.55:.62)?1:-1,this.emit("sound","surge"));let u=s.length>1?.78:1,d=c.surge>0?c.surgeSide*.5:0,f=(.27+.12*Math.sin(t*7.3+r.age))*u+Math.max(0,d),g=(o.boss?.26:.21)+.12*Math.sin(t*5.1+1+r.age)+Math.max(0,-d);c.u=Ve(c.u+(f-g)*e*.8,.04,.96);let b=h.clone().lerp(l,c.u);b.x+=(Math.random()-.5)*i.px(4),b.y+=(Math.random()-.5)*i.px(4),c.mini.set(h,b,1,i.px(s.length>1?26:34)*(1+.15*Math.sin(t*40)),t),r.stream.set(l,b,1,i.px(o.boss?30:22)*(1+.15*Math.sin(t*37)),t),c.orbA.position.copy(b),c.orbB.position.copy(b),c.orbA.scale.setScalar(i.px(140+60*Math.random())),c.orbB.scale.setScalar(i.px(100+50*Math.random())),i.particles.emit(b,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(500)),ze,{life:.3,size:i.px(7),drag:3}),i.particles.emit(b,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(450)),yt,{life:.3,size:i.px(7),drag:3}),this.brain.vel.x*=.7,this.brain.vel.y*=.7,o.vel.multiplyScalar(.7),o.state!=="active"?this._resolveClash(r,!0):(c.t>=c.dur||c.u<=.08||c.u>=.92)&&this._resolveClash(r,c.u>=.5);continue}if(r.ended){r.out+=e;let h=Math.max(0,1-r.out/.3),u=l.clone().addScaledVector(r.dir,r.len);r.stream.set(l.clone().lerp(u,1-h),u,h*h,null,t),h<=0&&(r.done=!0)}else{r.len=Math.min(i.px(2600),r.len+i.px(5200)*e);let h=n.chestWorld(new A);if(!r.betrayed)r.dir.lerp(h.clone().sub(l).setZ(0).normalize(),1-Math.exp(-e*.9)).normalize();else for(let d of this.enemies){if(d===o||d.state!=="active"||d.hold)continue;let f=d.pos.clone().sub(l).setZ(0),g=f.dot(r.dir);g<0||g>r.len||f.addScaledVector(r.dir,-g).length()>d.radiusPx+i.px(20)||((r.burned||(r.burned=new Set)).has(d)||(r.burned.add(d),i.fx.push(new tt(i.scene,d.pos,Ft,i.px(d.boss?260:170),.22)),this.emit("sound","impact"),this.emit("friendlyFire",{at:i.worldToScreen(d.pos),radius:d.radiusPx}),this._record("FriendlyFire")),d.pushed(r.dir,e,d.boss?Math.max(.02,this._damageFor(d,!1)*1.5):2.6,l),d.dead&&(d.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:d.kind,seconds:d.boss?this.bossT:null})))}let u=l.clone().addScaledVector(r.dir,r.len);if(r.stream.set(l,u,Math.min(1,r.age/.08),i.px(o.boss?30:20),t),!r.hit&&!this.tele&&this.mode==="combat"&&!((this.invuln||0)>0)){let d=h.clone().sub(l),f=d.dot(r.dir),g=d.clone().addScaledVector(r.dir,-f).length();if(f>0&&f<r.len&&g<i.px(o.boss?34:26)+i.miniSize()*.12){if(r.hit=!0,this.invuln=.9,this.blast&&this.blast.full){r.hit=!0;continue}this._knockedBack(r.dir,o.boss?1:.8,o.boss?3.2:2.2)}}(r.age>=r.dur||o.state!=="active")&&(r.ended=!0,r.out=0)}}for(let r of this.ebeams.filter(o=>o.done||o.enemy&&!o.enemy.alive))this._disposeBeam(r);this.blast&&this.blast.kind==="counter"&&this.blast.fired&&!this.ebeams.some(r=>r.clash)&&this.blast.end===1/0&&(this.blast=null)}_orbLunges(){if(this.mode!=="combat"||this.tele||this.orbClash)return;let e=this.ctx,t=this.ch.chestWorld(new A);for(let i of this.enemies){if(!i.lunge||i.hold||i.state!=="active")continue;let n=i.orbWorld(new A),s=this.enemies.find(r=>r!==i&&r.state==="active"&&!r.hold&&r.pos.distanceTo(n)<r.radiusPx+i.orbRadiusPx*.7);if(s){let r=i.lunge.dir.clone();i.endOrb(),i.attacking=null,i.fired=!1,i.tell=0,i.vel.multiplyScalar(-.25),s.knockback(r,s.boss?this._damageFor(s,!0)*.7:be(2.4,3.4),n,{car:!0}),e.fx.push(new tt(e.scene,n,Ft,e.px(300),.3)),e.particles.burst(n,yt,40,e.px(560),{life:.45,size:e.px(8),drag:3}),this.emit("sound","impact"),this.emit("friendlyFire",{at:e.worldToScreen(s.pos),radius:s.radiusPx}),this._record("FriendlyFire"),s.dead&&(s.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:s.kind,seconds:s.boss?this.bossT:null}));continue}n.distanceTo(t)>i.orbRadiusPx*.8+e.miniSize()*.22||(i.endOrb(),i.attacking=null,i.fired=!1,i.tell=0,i.vel.multiplyScalar(-.3),e.fx.push(new tt(e.scene,n,Ft,e.px(240),.25)),e.particles.burst(n,yt,30,e.px(480),{life:.4,size:e.px(8),drag:3}),this.emit("sound","impact"),!((this.invuln||0)>0)&&(this.invuln=.9,this._knockedBack(i.lunge?i.lunge.dir.clone():t.clone().sub(i.pos).setZ(0).normalize(),1,i.boss?2.6:2),this._record("OrbHit")))}}_disposeBeam(e){e.stream.dispose(),e.clash&&(e.clash.mini.dispose(),this.ctx.scene.remove(e.clash.orbA,e.clash.orbB),e.clash.orbA.material.dispose(),e.clash.orbB.material.dispose(),e.clash=null),e.enemy&&(e.enemy.beaming=!1),this.ebeams=this.ebeams.filter(t=>t!==e)}_knockedBack(e,t,i=2.5){let n=this.ctx,s=this.ch;this._interruptBlast();let r=s.chestWorld(new A);if(n.fx.push(new tt(n.scene,r,Ft,n.px(170),.22)),n.particles.burst(r,yt,30,n.px(460),{life:.45,size:n.px(8),drag:3}),this.kick=Math.max(this.kick||0,n.px(6)),this._hurt(i)){this._defeated(e);return}s.play("EnemyHit",{weight:6,fade:.04}),s.setFace("injured"),this.faceAfter="fierce",this.faceTimer=1.1,this.brain.vel.x=e.x*n.px(1200)*t,this.brain.vel.y=-e.y*n.px(1200)*t;let o=(Math.random()<.5?-1:1)*Math.PI*2;this.ragdoll={t:0,dur:.75+.25*t,turn:o,angle:0,spin:0},this.cool=Math.max(this.cool,1.1),this.emit("hit",{heavy:!0})}_hurt(e){return this.mode!=="combat"&&this.mode!=="deploying"?!1:(this.hp=Math.max(0,this.hp-e),this.emit("health",{hp:this.hp,max:fr}),this.hp<=0)}_defeated(e){let t=this.ctx,i=this.ch,n=this.brain,s=t.viewport;this._endOrbClash(null),this.talk=null,this.pendingSwap=null,this.swapping=null,this.ama&&this.emit("soundStop","amaterasu"),this.ama=null,this.carry=null,this.ch.eyeRedTarget=0,this.eyeRedFor=0,this.cb&&(this.cb.shell?this._cbExplode(!1):this._cbClear()),this._interruptBlast();for(let h of this.ebeams)h.clash&&(h.clash.mini.dispose(),t.scene.remove(h.clash.orbA,h.clash.orbB),h.clash=null,h.ended=!0);this.tele=null,this.ragdoll=null,this.evasion=null,this.pendingShot=null,this.followUp=null,i.aimAt("L",null),i.aimAt("R",null),i.holdPose(null),i.play("EnemyHit",{weight:6,fade:.04}),i.setFace("injured");let r=Math.sign(e.x)||(Math.random()<.5?-1:1),o=t.px(be(160,520)),l=Ve(n.pos.x+r*o,s.width*.16,s.width*.84);r=Math.sign(l-n.pos.x)||r;let c=be(.55,.9);n.vel.x=(l-n.pos.x)/(c*1.15),n.vel.y=-t.px(be(300,720)),this.slowMo=1.35,this.down={phase:"fly",t:0,side:r,yaw:0,pitch:0,roll:0,spin:r*be(6,11),bounces:Math.random()<.7?1:2,ground:s.height-t.px(be(46,120)),restRoll:r*Math.PI/2*(Math.random()<.8?1:-1),restPitch:-be(.4,.75)},t.enemiesTaunt=!0,this.setMode("downed"),this.emit("downed",{}),this.emit("sound","bolt")}_downed(e,t){let i=this.ctx,n=this.brain,s=this.ch,r=this.down;r.t+=e;let o=r.ground,l=o-i.miniSize()*.1;if(r.phase==="fly"){n.setTuning({stiffness:0,damping:.25,maxSpeed:2600}),n.setGoal(n.pos.x,n.pos.y),n.vel.y+=i.px(2600)*e,r.roll+=r.spin*e,r.pitch=Math.sin(r.t*5)*.4;let{left:c,right:h}=n.flightBounds(t);if((n.pos.x<=c+2||n.pos.x>=h-2)&&(n.vel.x*=-.5,r.spin*=-.6),n.pos.y>=l&&n.vel.y>0){let u=i.screenToWorld(n.pos.x,o);i.particles.burst(u,nt,18,i.px(260),{life:.5,size:i.px(6),drag:3}),this.emit("sound","impact"),r.bounces>0&&n.vel.y>i.px(260)?(r.bounces--,n.pos.y=l,n.vel.y*=-be(.28,.42),n.vel.x*=.7,r.spin*=.6):(i.fx.push(new Kt(i.scene,u,i.px(120),yt,.9)),n.pos.y=l,n.vel.y=0,r.phase="skid",r.t=0)}r.t>2.4&&(r.phase="skid",r.t=0)}else if(r.phase==="skid"){n.setTuning({stiffness:0,damping:4.5,maxSpeed:2e3}),n.vel.y=0,n.pos.y+=(l-n.pos.y)*.3,n.setGoal(n.pos.x,n.pos.y),Math.random()<.6&&Math.abs(n.vel.x)>60&&i.particles.emit(i.screenToWorld(n.pos.x,o),new A(-n.vel.x*.2,be(40,160),0),nt,{life:.35,size:i.px(5),drag:3});let c=1-Math.exp(-e*6);r.roll+=(r.restRoll-r.roll)*c,r.pitch+=(r.restPitch-r.pitch)*c,(r.t>.45||Math.abs(n.vel.x)<25)&&(r.phase="lie",r.t=0)}else if(r.phase==="lie"){n.setTuning({stiffness:30,damping:12,maxSpeed:300}),n.setGoal(n.pos.x,l);let c=1-Math.exp(-e*8);if(r.roll+=(r.restRoll-r.roll)*c,r.pitch+=(r.restPitch-r.pitch)*c,r.yaw+=(0-r.yaw)*c,s.setFace("sleepy"),!r.taunted&&r.t>.9){r.taunted=!0;let h=this.enemies.filter(u=>!u.dead).sort((u,d)=>(d.boss?1:0)-(u.boss?1:0))[0];h&&this.emit("taunt",{text:v_.next(),at:i.worldToScreen(h.pos),radius:h.radiusPx})}if(r.t>2.9){r.phase="reboot",r.t=0,s.setFace("fierce");let h=s.chestWorld(new A);i.fx.push(new Kt(i.scene,h,i.px(140),nt,.8)),i.fx.push(new tt(i.scene,h,ze,i.px(220),.3)),this.emit("sound","surge")}}else if(r.phase==="reboot"&&(r.roll*=.9,r.pitch*=.9,r.t>.45)){let c=this.enemies.filter(f=>!f.dead),h=c.map(f=>i.worldToScreen(f.pos)),u=h.length?h.reduce((f,g)=>f+g.x,0)/h.length:t.width/2,d={x:Ve(u+(u>t.width/2?-1:1)*i.px(320),i.px(90),t.width-i.px(90)),y:t.height*.42};this.hp=fr,this.emit("health",{hp:this.hp,max:fr}),this.down=null,i.enemiesTaunt=!0,this.setMode("standoff"),this.talk=null,this.standAt={x:d.x,y:d.y},this.tele={phase:"out",t:0,k:0,to:d,queue:[],resume:null,live:c,intro:!0},this.emit("sound","teleport"),this.invuln=2.6,this.cool=1.6,this.nextBlast=this.battleT+1.8}}_standoff(e,t,i,n){let s=this.ctx,r=this.brain,o=this.ch;if(!i){s.enemiesTaunt=!1,this.talk=null,this._afterBattle(!1);return}if(this.invuln=Math.max(this.invuln||0,.4),s.enemiesTaunt=!0,r.setTuning({stiffness:14,damping:7,maxSpeed:260}),this.standAt&&r.setGoal(this.standAt.x,this.standAt.y+Math.sin(this.modeT*1.6)*s.px(6)),o.lookAt(i.pos,1),this.tele)return;o.holdPose("CombatReady",1);let l=this.talk;if(!l||(l.wait-=e,l.wait>0))return;if(l.lines.length){let[h,u]=l.lines.shift(),d=M_(u);if(h==="mini")o.setFace(l.lines.length?"fierce":"happy"),this.faceAfter="fierce",this.faceTimer=d/1e3,this.emit("line",{who:h,text:u,ms:d});else{let f=n.find(g=>g.boss)||n[Math.floor(Math.random()*n.length)];this.emit("line",{who:h,text:u,ms:d,at:s.worldToScreen(f.pos),radius:f.radiusPx})}l.wait=d/1e3+.3;return}this.talk=null,s.enemiesTaunt=!1;let c=o.chestWorld(new A);s.fx.push(new Kt(s.scene,c,s.px(150),nt,.7)),s.particles.burst(c,ze,30,s.px(420),{life:.4,size:s.px(7),drag:3}),this.emit("sound","surge"),this.setMode("combat"),this.invuln=1,this.cool=.35,this.nextBlast=this.battleT+be(.6,1.4)}_foesReact(e,t,i,n,s,{full:r=!1}={}){let o=this.ctx,l=new Set,c=!1,h=!1;for(let u of this.enemies){if(u.state!=="active"||u.hold||u.lunge||(u.stun||0)>0)continue;let d=u.pos.clone().sub(t).setZ(0),f=d.dot(i);if(f<=0)continue;let g=d.clone().addScaledVector(i,-f),b=g.length();if(b>s+u.radiusPx+o.px(30))continue;let p=u===n,m=r?.75:p?u.boss?.32:.42:.55;if(Math.random()>m)continue;let _=!r&&Math.random()<(ql(e)?.6:.68),M=Math.sign(g.x*-i.y+g.y*i.x);(!M||b<o.px(6))&&(M=Math.random()<.5?-1:1);let y=new A(-i.y*M,i.x*M,0),w=u.pos.clone().addScaledVector(y,o.px(160));(Math.abs(w.x)>o.viewport.width/2-u.radiusPx||Math.abs(w.y)>o.viewport.height/2-u.radiusPx)&&y.negate(),u.evade(y,(u.boss?950:1250)*(_?1:.32)),_&&l.add(u),p&&_&&(h=!0),c=!0,this.emit("foeDodge",{ok:_,at:o.worldToScreen(u.pos),radius:u.radiusPx,target:p})}return c&&(this.emit("sound","dodge"),!this.calm&&this.slowMoCooldown<=0&&(this.slowMo=Math.max(this.slowMo,.55),this.slowMoCooldown=1.3),this._record("FoeDodge")),{dodgers:l,targetOk:h}}_swapReady(){return this.mode==="combat"&&!this.calm&&!this.tele&&!this.swapping&&!this.ama&&!(this.cb&&this.cb.phase==="cast")&&!this.orbClash&&!this.ragdoll&&!(this.blast&&this.blast.dash)&&this.battleT>=(this.swapCool||0)}_swap(e,t,{tell:i=.3,then:n=null,beamFoe:s=null}={}){return!e||e.state!=="active"||this.swapping?!1:(this.swapping={e,plan:t,t:0,tell:i,then:n,beamFoe:s},this.invuln=Math.max(this.invuln||0,i+.7),this.retreat=null,this.evasion=null,this.pressUntil=0,this.beamEvade=null,this.swapCool=this.battleT+be(5,8),this.ch.setFace("fierce"),this.emit("sound","swap"),this.emit("swapCast",{plan:t}),this._record("Amenotejikara"),i<=0&&this._finishSwap(),!0)}_swapCastTick(e){let t=this.swapping;if(!t)return;if(t.e.state!=="active"||this.mode!=="combat"){this.swapping=null;return}t.t+=e;let i=this.brain;i.vel.x*=.7,i.vel.y*=.7,t.t>=t.tell&&this._finishSwap()}_finishSwap(){let e=this.swapping;if(!e)return;this.swapping=null;let t=this.ctx,i=this.brain,n=t.viewport,s=e.e;if(s.state!=="active")return;let r=t.screenToWorld(i.pos.x,i.pos.y),o=t.worldToScreen(s.pos),l=i.flightBounds(n);i.pos.x=Ve(o.x,l.left,l.right),i.pos.y=Ve(o.y,l.top,l.bottom),i.vel.x=i.vel.y=0,i.setGoal(i.pos.x,i.pos.y),s.pos.set(r.x,r.y,s.pos.z),s.group.position.copy(s.pos),s.lunge||s.vel.multiplyScalar(.15),s.flash=1,this.blast&&!this.blast.dash&&(this.blast.brace={x:i.pos.x,y:i.pos.y});let c=t.screenToWorld(i.pos.x,i.pos.y);for(let h of t.projectiles)h.alive&&h.hostile&&(h.redirect=!0);for(let h of this.ebeams)!h.clash&&!h.ended&&(h.betrayed=!0);this._focus(1.3,.9),this.kick=Math.max(this.kick||0,t.px(6)),this.lastSwap={t:this.battleT,oldW:r,beamFoe:e.beamFoe},this.invuln=Math.max(this.invuln||0,.6),this.dodgeCooldown=Math.max(this.dodgeCooldown,.5),this.emit("swap",{plan:e.plan,at:t.worldToScreen(s.pos),radius:s.radiusPx,from:t.worldToScreen(r),to:{x:i.pos.x,y:i.pos.y},size:t.miniSize()}),e.then&&e.then()}_chargeWindow(e){let t=this.ctx,i=t.screenToWorld(this.brain.pos.x,this.brain.pos.y);return e.some(n=>n.state==="active"&&n.pos.distanceTo(i)<n.radiusPx+t.px(300))||e.some(n=>n.lunge||n.attacking==="orb"||n.attacking==="swipe")?!1:t.projectiles.filter(n=>n.alive&&n.hostile&&n.group.position.distanceTo(i)<t.px(420)).length<2}_farFoe(e,t){return e.filter(i=>i.state==="active"&&!i.hold&&!i.lunge&&!i.trapped&&i.pos.distanceTo(t)>this.ctx.px(300)).sort((i,n)=>n.pos.distanceTo(t)-i.pos.distanceTo(t))[0]||null}_swapPartner(e){let t=this.ctx.screenToWorld(this.brain.pos.x,this.brain.pos.y);return this.enemies.filter(i=>i!==e&&i.state==="active"&&!i.hold&&!i.lunge&&!i.trapped).sort((i,n)=>i.pos.distanceTo(t)-n.pos.distanceTo(t))[0]||null}_swapTick(e){let t=this.pendingSwap;if(!t)return;t.t+=e;let i=this.ctx;if(this.mode!=="combat"||t.t>2.4||t.foe.state!=="active"||this.swapping){this.swapping||(this.pendingSwap=null);return}if(t.kind==="orb"&&t.foe.lunge){let n=this.ch.chestWorld(new A);if(t.foe.orbWorld(new A).distanceTo(n)>t.foe.lunge.speed*.28+i.px(220)+t.foe.orbRadiusPx)return;this.pendingSwap=null;let s=this._swapPartner(t.foe);if(s)this._swap(s,"betray",{tell:.22});else{let r=t.foe;this._swap(r,"behind",{tell:.22,then:()=>{r.state!=="active"||this.mode!=="combat"||(this._interruptBlast(),this._startBlast(r,Xl()),this.blast.age=this.blast.release-.15)}})}}else if(t.kind==="beam"&&t.t>=t.fireIn-.3){this.pendingSwap=null;let n=this._swapPartner(t.foe);n&&this._swap(n,"betray",{tell:Math.max(.05,t.fireIn-t.t),beamFoe:t.foe})}}_enemyOrbTell(e,t){this.emit("sound","orbCharge");let i=this.blast&&!this.blast.fired&&!ql(this.blast.kind);if(this._swapReady()&&!this.pendingSwap&&Math.random()<(i?.8:this._swapPartner(e)?.5:.28)){this.pendingSwap={kind:"orb",foe:e,t:0};return}this.mode!=="combat"||this.tele||this.ama||this.cb&&this.cb.phase==="cast"||this.ragdoll||this.blast||this.calm||(this._startBlast(e,Xl()),this.blast.release=Math.max(.45,t-.05),this.blast.end=this.blast.release+.6,this.blast.vsOrb=e,this._record("ChidoriCounter"))}_startOrbClash(e,t){let i=this.ctx,n=this.blast,s=Math.random()<.6;e.hold=!0,e.lunge=null,n.dash.hit=!0,n.dash.hitAt=n.dash.t,n.dash.grind=!0,this.orbClash={e,cast:n,t:0,grind:s,dur:s?be(3,4):.4,u:.5,surge:0,surgeSide:1,P:t.clone(),anchor:{x:this.brain.pos.x,y:this.brain.pos.y},foeAnchor:e.pos.clone(),glowC:jt(nt,1),glowR:jt(yt,1)},i.scene.add(this.orbClash.glowC,this.orbClash.glowR),this.slowMo=Math.max(this.slowMo,s?.9:1.1),this.slowMoCooldown=1.6,this.invuln=Math.max(this.invuln||0,this.orbClash.dur+.6),i.fx.push(new tt(i.scene,t,ze,i.px(e.boss?380:300),.35)),i.fx.push(new tt(i.scene,t,Ft,i.px(e.boss?300:220),.3)),i.fx.push(new Kt(i.scene,t,i.px(160),nt,.6)),this.kick=Math.max(this.kick||0,i.px(9)),i.particles.burst(t,ze,30,i.px(560),{life:.4,size:i.px(8),drag:3}),i.particles.burst(t,Ft,30,i.px(560),{life:.4,size:i.px(8),drag:3}),this.emit("sound","impact"),s&&this.emit("grind",{duration:this.orbClash.dur,kind:n.kind}),this.emit("orbClash",{grind:s,kind:n.kind,at:i.worldToScreen(e.pos),radius:e.radiusPx}),this._record(s?"OrbGrind":"OrbClash")}_orbClashTick(e,t){let i=this.ctx,n=this.orbClash,s=n.e,r=this.ch;if(n.t+=e,this.blast!==n.cast||s.state!=="active"||this.mode!=="combat"){this._endOrbClash(s.state==="active"?null:!0);return}n.surge-=e,n.grind&&n.surge<=0&&Math.random()<e*1.6&&(n.surge=be(.25,.5),n.surgeSide=Math.random()<(s.boss?.5:.6)?1:-1,this.emit("sound","surge"));let o=n.surge>0?n.surgeSide*.45:0,l=.28+.12*Math.sin(t*6.7+1)+Math.max(0,o),c=(s.boss?.27:.23)+.12*Math.sin(t*4.9)+Math.max(0,-o);n.u=Ve(n.u+(l-c)*e*.7,.15,.85);let h=r.emitterWorld("PalmJet_"+n.cast.dash.side,new A),u=i.px(3),d=this.brain,f=(n.u-.5)*i.px(70),g=s.pos.clone().sub(i.screenToWorld(d.pos.x,d.pos.y)).setZ(0).normalize();d.setGoal(n.anchor.x+g.x*f+(Math.random()-.5)*u,n.anchor.y-g.y*f+(Math.random()-.5)*u),d.vel.x*=.6,d.vel.y*=.6,s.pos.lerp(n.foeAnchor.clone().addScaledVector(g,f).add(new A((Math.random()-.5)*u,(Math.random()-.5)*u,0)),.35),s.vel.multiplyScalar(.5);let b=s.orbWorld(new A);n.P.copy(h).lerp(b,.5);let p=1+.2*Math.sin(t*47);n.glowC.position.copy(n.P).lerp(h,.25),n.glowR.position.copy(n.P).lerp(b,.25),n.glowC.scale.setScalar(i.px(150)*p*(.8+.4*n.u)),n.glowR.scale.setScalar(i.px(s.boss?170:130)*p*(1.2-.4*n.u)),this.palmBoost[n.cast.dash.side]=1.5,r.aimAt(n.cast.dash.side,s.pos,1);let m=n.cast.kind==="rasengan";for(let[_,M,y]of[[h,nt,ze],[b,yt,Ft]]){if(m&&M===nt){for(let w=0;w<3;w++){let v=n.t*30+w*2.1,x=i.px(be(30,70)),S=n.P.clone().add(new A(Math.cos(v)*x,Math.sin(v)*x,0));i.particles.emit(S,new A(-Math.sin(v),Math.cos(v),0).multiplyScalar(i.px(520)),w?nt:ze,{life:.3,size:i.px(7),drag:3})}continue}if(Math.random()<.7){let w=Math.random()*Math.PI*2,v=i.px(be(60,n.grind?170:120));i.fx.push(new mi(i.scene,n.P,n.P.clone().add(new A(Math.cos(w)*v,Math.sin(w)*v,0)),{width:i.px(3),life:.08,segments:9,branches:1,jag:.45,color:M,hot:y}))}i.fx.push(new mi(i.scene,_,n.P,{width:i.px(4),life:.05,segments:6,branches:0,jag:.4,color:M,hot:y})),i.particles.emit(n.P,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(520)),y,{life:.28,size:i.px(7),drag:3})}if(n.t>=n.dur){let _=n.grind?n.u>=.5:Math.random()<(s.boss?.55:.64);this._endOrbClash(_)}}_endOrbClash(e){let t=this.ctx,i=this.orbClash;if(!i)return;this.orbClash=null,t.scene.remove(i.glowC,i.glowR),i.glowC.material.dispose(),i.glowR.material.dispose();let n=i.e;if(n.hold=!1,this.blast===i.cast&&(this.blast=null,this.ch.aimAt(i.cast.dash.side,null)),this.cool=Math.max(this.cool,.45),e==null){n.endOrb();return}if(t.fx.push(new tt(t.scene,i.P,e?ze:Ft,t.px(n.boss?420:320),.35)),t.particles.burst(i.P,e?ze:Ft,50,t.px(640),{life:.5,size:t.px(9),drag:2.8}),this.emit("sound","bolt"),n.state!=="active"){n.endOrb();return}let s=t.screenToWorld(this.brain.pos.x,this.brain.pos.y),r=n.pos.clone().sub(s).setZ(0).normalize();e?(i.cast.kind==="rasengan"&&this._rasenBurst(i.P,n.boss?1.5:1.15),n.knockback(r,n.boss?this._damageFor(n,!0):be(2.4,3.4),i.P,{car:!0}),n.dead&&(n.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:n.kind,seconds:n.boss?this.bossT:null})),this.brain.vel.x=-r.x*t.px(380),this.brain.vel.y=r.y*t.px(380)):(n.endOrb(),n.vel.copy(r).multiplyScalar(t.px(320)),this.invuln=0,this._knockedBack(r.clone().negate(),1.05,n.boss?2.8:2.2)),this.emit("clashResult",{win:e,orb:!0}),this.slowMo=Math.max(this.slowMo,.4)}_resolveClash(e,t){let i=this.ctx,n=e.clash,s=e.enemy,r=this._clashOrigin(e,new A),o=s.eyeWorld(new A);if(t){let l=o.clone().sub(r).setZ(0).normalize(),c=new ms(i.scene,{width:i.px(40)}),h=this,u=s.boss?Math.max(.02,this._damageFor(s,!0)*.25):be(1.8,3.4);i.fx.push({alive:!0,t:0,tail:null,update(d){this.t+=d;let f=.6,g=this.t<f?1:Math.max(0,1-(this.t-f)/.35),b=h.ch.joinedPalms(new A),p=s.alive?s.pos.clone():this.lastTip||b.clone().addScaledVector(l,600);this.lastTip=p,this.t>=f?this.tail=(this.tail||b).lerp(p,1-Math.exp(-d*7)):this.tail=b,c.set(this.tail,p,g*g,null,this.t),this.t<f&&s.state==="active"&&s.pushed(l,d,u,b),g<=0&&(c.dispose(),this.alive=!1)}}),i.fx.push(new tt(i.scene,o,ze,i.px(s.boss?320:220),.3)),i.particles.burst(o,ze,40,i.px(560),{life:.5,size:i.px(9),drag:3}),s.state==="active"&&s.boss&&s.hit(Math.max(.02,this._damageFor(s,!0)*.5),r),this.emit("clashResult",{win:!0})}else{let l=r.clone().sub(o).setZ(0).normalize(),c=new ms(i.scene,{width:i.px(32),core:"#FFE1E8",mid:"#FF2A55",outer:"#8A0022"});i.fx.push({alive:!0,t:0,update(h){this.t+=h;let u=Math.max(0,1-this.t/.45);c.set(o,r,u*u,null,this.t),u<=0&&(c.dispose(),this.alive=!1)}}),this._knockedBack(l,1.1,s.boss?3.8:2.8),this.emit("clashResult",{win:!1})}this.emit("sound","bolt"),n.mini.dispose(),i.scene.remove(n.orbA,n.orbB),n.orbA.material.dispose(),n.orbB.material.dispose(),e.clash=null,e.ended=!0,e.out=.15,!this.ebeams.some(l=>l.clash)&&this.blast&&this.blast.kind==="counter"&&(this.blast=null),this.cool=Math.max(this.cool,.6)}_teleportFx(e,t){let i=this.ctx;i.fx.push(new tt(i.scene,e,ze,i.px(170*t),.22)),i.fx.push(new Kt(i.scene,e,i.px(90*t),nt,.45)),i.particles.burst(e,nt,Math.round(30*t),i.px(420),{life:.4,size:i.px(7),drag:3.5});for(let n=0;n<3;n++){let s=Math.random()*Math.PI*2,r=i.px(60);i.fx.push(new mi(i.scene,e,e.clone().add(new A(Math.cos(s)*r,Math.sin(s)*r,0)),{width:i.px(2),life:.14,segments:8,branches:1,jag:.5}))}}_chargeParticles(e,t){let i=this.ctx,n=i.particles,s=this.ch.joinedPalms(new A),r=(i.lowPower?28:70)*(.3+t)*e;for(let o=0;o<r||Math.random()<r-o;o++){let l=Math.random()*Math.PI*2,c=i.px(70+90*Math.random()),h=s.clone().add(new A(Math.cos(l)*c,Math.sin(l)*c,0)),u=s.clone().sub(h).multiplyScalar(3.4).add(new A(-Math.sin(l),Math.cos(l),0).multiplyScalar(c*1.2));if(n.emit(h,u,Math.random()<.35?ze:nt,{life:.3,size:i.px(5+4*t),drag:.5}),o>6)break}}_record(e){this.history.push(e),this.history.length>8&&this.history.shift()}_interruptBlast(e=!1){this.blast&&!this.blast.fired&&(this.nextBlast=Math.min(this.nextBlast,this.battleT+.9),this.cool=Math.min(this.cool,.3),e||this.emit("soundStop",Xf(this.blast.kind))),this.blast=null}_dodge(e,t){let i=this.ch,n=this.brain,s=this.ctx,r=new Ae(-e.velocity.y,e.velocity.x).normalize(),o=s.px(245),{left:l,right:c,top:h,bottom:u}=n.flightBounds(t),d=[-1,1].map(x=>{let S=Ve(n.pos.x+r.x*o*x,l,c),P=Ve(n.pos.y+r.y*o*x,h,u),C=S-n.pos.x,D=P-n.pos.y,k=Math.abs(e.offset+C*r.x+D*r.y);return{x:S,y:P,dx:C,dy:D,clearance:k}}),f=d[0].clearance>d[1].clearance?d[0]:d[1],g=Math.hypot(f.dx,f.dy),b=Math.min(n.pos.x-l,c-n.pos.x)<s.px(90),p=Math.min(n.pos.y-h,u-n.pos.y)<s.px(80),m=g<o*.45||b&&p,_=e.projectile?s.projectiles.filter(x=>x.alive&&x.hostile&&!x.redirect&&(S=>Math.hypot(S.x-n.pos.x,S.y-n.pos.y))(s.worldToScreen(x.group.position))<s.px(380)).length:0;if((m||_>=3)&&this._swapReady()&&Math.random()<(m?.55:.3)){let x=s.screenToWorld(n.pos.x,n.pos.y),S=this.enemies.filter(P=>P.state==="active"&&!P.hold&&!P.lunge&&!P.trapped).sort((P,C)=>C.pos.distanceTo(x)-P.pos.distanceTo(x))[0];if(S&&S.pos.distanceTo(x)>s.px(260)&&this._swap(S,"escape",{tell:.18}))return}if(!this.calm&&!this.tele&&(this.teleCool||0)<=0&&m&&this._teleport(t,this.enemies.filter(x=>!x.dead),{plan:"cornered"})||g<s.px(24))return;let M=!this.calm&&this.slowMo<=0&&(e.projectile||this.slowMoCooldown<=0),w=Math.abs(f.dy)>Math.abs(f.dx)?f.dy<0?"BackFlip":"FrontFlip":"BarrelRoll",v=M?w:f.dx<0?"DodgeLeft":"DodgeRight";i.play(v,{weight:6,fade:.06,timeScale:1.25}),n.impulse(f.dx*3.3,f.dy*3.3),this._interruptBlast(),this.pressUntil=0,this.evasion={x:f.x,y:f.y,remaining:.48},this.retreat=null,this.dodgeCooldown=.6,e.projectile&&(e.projectile.evaded=!0),M&&(this.slowMo=.6,this.slowMoCooldown=1.1),this._record(v),this.emit("dodge",{cinematic:M,animation:v,dir:Math.sign(f.dx)||(Math.random()<.5?-1:1)})}_fire(e,t,{big:i=!1}={}){let n=this.ch;n.play("PalmFire_"+e,{weight:8,fade:.05,full:!1,timeScale:i?.8:be(1,1.25)}),n.aimAt(e,t.pos,1),this._lastFired=e,this.pendingShot={side:e,target:t,big:i,t:.07},this.palmBoost[e]=.9}_release({side:e,target:t,big:i,blast:n=!1}){let s=this.ctx,r=this.ch,o=new A,l=new A;n?(r.joinedPalms(o),l.copy(t.pos).sub(o).normalize()):r.emitterWorld("PalmJet_"+e,o,l);let c=new ps(s.scene,{color:nt,hot:ze,size:s.px(n?37:i?18:10),speed:s.px(n?2050:i?1300:1500)}),h=o.clone().addScaledVector(l,s.px(800));if(!t.dead){let g=t.pos.clone().sub(o),b=g.lengthSq(),p=g.dot(t.vel),m=c.speed**2-t.vel.lengthSq(),_=b/(Math.sqrt(p**2+m*b)-p||1);h.copy(t.pos).addScaledVector(t.vel,_*be(.82,1.07));let y=Math.random()<(n?.12:.24)?(t.radiusPx+c.radius+s.px(36))*be(1,1.5):be(-.24,.24)*t.radiusPx,w=new A(-g.y,g.x,0).normalize();h.addScaledVector(w,(Math.random()<.5?-1:1)*y)}if(c.fire(o,h),c.friendly=!0,c.big=i,c.blast=n,c.cast=n?this.blast:null,s.projectiles.push(c),n){c.group.visible=!1;let g=this.blast,b=new Pl(s.scene,c,o,m=>this.blast!==g?!1:(r.joinedPalms(m),!0),s.px(g.full?110:62),{particles:s.particles,hold:g.end-g.release-.35,fade:.35});s.particles.burst(o,ze,40,s.px(520),{life:.45,size:s.px(9),drag:3.2}),g.aim=h,g.beam=b,b.cast=g,b.proj=c;let p=this._foesReact("beam",o,h.clone().sub(o).setZ(0).normalize(),t,s.px(g.full?110:62)*.6,{full:g.full});g.dodgers=p.dodgers,this.liveBeams.push(b),s.fx.push(b)}s.fx.push(new tt(s.scene,o,ze,s.px(n?260:i?120:60),n?.24:.1)),n&&(this.kick=Math.max(this.kick||0,s.px(this.blast&&this.blast.full?12:7))),n?this.palmBoost.L=this.palmBoost.R=1.6:this.palmBoost[e]=i?1.6:1.2,this.emit("sound",n?this.blast&&this.blast.full?"fullBlast":"blast":"fire");let u=s.worldToScreen(h),d=this.brain.pos,f=Math.hypot(u.x-d.x,u.y-d.y)||1;this.brain.impulse(-(u.x-d.x)/f*s.px(i?160:70),-(u.y-d.y)/f*s.px(i?160:70))}_bodyZones(){let e=this.ctx;return O_.map(([t,i])=>{let n=e.worldToScreen(this.ch.nodes[t].getWorldPosition(new A));return{center:new Ae(n.x,n.y),radius:e.miniSize()*i}})}_incoming(e){let t=this.ctx,i=new Ae(this.brain.vel.x,this.brain.vel.y),n=null,s=(r,o,l,c,h=null)=>{let u=t.worldToScreen(r),d=t.worldToScreen(r.clone().addScaledVector(o,.1)),f=new Ae((d.x-u.x)*10,(d.y-u.y)*10);if(f.lengthSq()<t.px(55)**2)return;let g=f.clone().sub(i),b=g.lengthSq()||1,p=new Ae(-f.y,f.x).normalize();for(let m of l){let _=m.center.clone().sub(u),M=_.dot(g)/b;if(M<=0||M>.4||n&&M>=n.eta||_.clone().addScaledVector(g,-M).lengthSq()>(m.radius+c)**2)continue;let y=_.addScaledVector(i,M).dot(p);n={eta:M,velocity:f,offset:y,projectile:h}}};for(let r of t.projectiles)r.alive&&r.hostile&&!r.evaded&&s(r.group.position,r.vel,this.hitZones,r.radius+t.px(17),r);if(n)return n;for(let r of e)r.state==="active"&&!r.hold&&!(this.blast&&this.blast.vsOrb===r)&&!(this.pendingSwap&&this.pendingSwap.foe===r)&&s(r.pos,r.vel,this.hitZones.slice(1,2),r.radiusPx);return n}_bodyImpact(e,t,i,n){let s=this.ctx.worldToScreen(t),r=this.ctx.worldToScreen(e.group.position),o=1/0;return i.forEach((l,c)=>{let h=n[c]?.center||l.center,u=new Ae(s.x-h.x,s.y-h.y),d=new Ae(r.x-l.center.x,r.y-l.center.y).sub(u),f=l.radius+e.radius,g=u.lengthSq()-f*f;if(g<=0){o=0;return}let b=d.lengthSq(),p=u.dot(d),m=p*p-b*g;if(b===0||p>=0||m<0)return;let _=(-p-Math.sqrt(m))/b;_>=0&&_<=1&&(o=Math.min(o,_))}),o}_projectiles(e,t){let i=this.ctx,n=i.particles;this.liveBeams=this.liveBeams.filter(r=>r.alive);let s=this.liveBeams.filter(r=>!r.detached).map(r=>[r.uniforms.uStart.value,r.uniforms.uEnd.value,r.uniforms.uWidth.value*1.2]);for(let r of this.ebeams)if(r.clash){let o=this._clashOrigin(r,new A);s.push([o,r.clash.orbA.position.clone(),i.px(30)])}if(this.blast&&this.blast.dash&&!this.blast.dash.hit){let r=this.ch.emitterWorld("PalmJet_"+this.blast.dash.side,new A);s.push([r,r,i.px(55)])}if(s.length)for(let r of i.projectiles){if(!r.alive||!r.hostile)continue;let o=r.group.position;for(let[l,c,h]of s){let u=c.clone().sub(l),d=u.lengthSq()>0?Ve(o.clone().sub(l).dot(u)/u.lengthSq(),0,1):0;if(l.clone().addScaledVector(u,d).distanceTo(o)<h+r.radius){n.burst(o,yt,8,i.px(260),{life:.3,size:i.px(6),drag:3}),n.burst(o,ze,5,i.px(200),{life:.25,size:i.px(6),drag:3}),r.dispose(i.scene);break}}}for(let r of this.liveBeams){if(r.detached||!r.cast)continue;let o=r.uniforms.uStart.value,l=r.uniforms.uEnd.value,c=l.clone().sub(o),h=c.lengthSq();if(h<1)continue;let u=r.cast,d=r.uniforms.uWidth.value*.7,f=c.clone().normalize();u.swept||(u.swept=new Map);for(let g of this.enemies){if(g.state!=="active"||g.hold||g===r.proj?.latched||u.dodgers?.has(g))continue;let b=o.clone().addScaledVector(c,Ve(g.pos.clone().sub(o).dot(c)/h,0,1));if(b.distanceTo(g.pos)>d+g.radiusPx)continue;u.swept.has(g)||(u.swept.set(g,g.boss?Math.max(.02,this._damageFor(g,!1)*1.5):be(1.6,2.6)),i.fx.push(new tt(i.scene,g.pos,ze,i.px(g.boss?260:170),.22)),this.emit("sound","impact"),this._record("BeamSweep"));let p=g.pos.clone().sub(b).setZ(0),m=p.lengthSq()>1?p.normalize():new A(-f.y,f.x,0);g.pushed(f.clone().multiplyScalar(.75).addScaledVector(m,.65).normalize(),e,u.swept.get(g),b),Math.random()<.5&&n.emit(g.pos,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(380)),ze,{life:.3,size:i.px(7),drag:3}),g.dead&&(g.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:g.kind,seconds:g.boss?this.bossT:null}))}}for(let r of i.projectiles){if(!r.alive)continue;let o=r.age>0?this.hitZones:t,l=r.hostile?r.group.position.clone():null;if(r.update(e),!r.blast&&Math.random()<.9&&n.emit(r.group.position,r.vel.clone().multiplyScalar(-.08),r.friendly?nt:yt,{life:.22,size:i.px(r.big?12:7),drag:4}),r.latched){let c=r.latched,h=r.cast;c.alive&&c.state==="active"&&this.blast===h&&h&&h.age<h.end-.3?(c.pushed(r.dir,e,r.dps,r.group.position),r.group.position.copy(c.pos).addScaledVector(r.dir,-c.radiusPx*.5),Math.random()<.6&&n.emit(r.group.position,new A(be(-1,1),be(-1,1),0).multiplyScalar(i.px(420)),ze,{life:.3,size:i.px(7),drag:3}),c.dead&&(c.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:c.kind,seconds:c.boss?this.bossT:null}))):r.dispose(i.scene);continue}if(r.friendly){let c=this.enemies.find(h=>h.state==="active"&&!h.hold&&!(r.blast&&r.cast&&r.cast.dodgers?.has(h))&&r.passedWithin(h.pos,h.radiusPx+r.radius,e));if(c&&r.blast&&this.blast&&this.blast===r.cast){r.latched=c,r.dir=r.vel.clone().normalize(),r.dps=c.boss?(h=>h&&h.full?.5:Math.max(.02,this._damageFor(c,!0)*.3))(r.cast):be(1.4,3),c.hit(c.boss?Math.max(.03,this._damageFor(c,!1)):1,r.group.position),i.fx.push(new tt(i.scene,r.group.position,ze,i.px(190),.25)),this.emit("sound","impact");continue}if(c){let h=this._damageFor(c,r.big);c.hit(h,r.group.position),n.burst(r.group.position,nt,18,i.px(380),{life:.35,size:i.px(8),drag:3.2}),n.burst(r.group.position,yt,10,i.px(240),{life:.4,size:i.px(7),drag:3}),i.fx.push(new tt(i.scene,r.group.position,ze,i.px(r.blast?170:90),r.blast?.24:.12)),this.emit("sound","impact"),r.dispose(i.scene),c.dead&&(c.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:c.kind,seconds:c.boss?this.bossT:null}));continue}}else{if(r.hostile&&r.redirect&&r.age>.06&&(()=>{let c=this.enemies.find(h=>h.state==="active"&&!h.hold&&r.passedWithin(h.pos,h.radiusPx+r.radius,e));return c?(c.hit(c.boss?Math.max(.015,this._damageFor(c,!1)*.6):.8,r.group.position),n.burst(r.group.position,yt,14,i.px(280),{life:.35,size:i.px(7),drag:3}),i.fx.push(new tt(i.scene,r.group.position,Ft,i.px(90),.14)),r.dispose(i.scene),c.dead&&(c.boss&&(this.lastBossTime=this.bossT),this.emit("defeat",{kind:c.kind,seconds:c.boss?this.bossT:null})),this._ffSaid||(this._ffSaid=!0,this.emit("friendlyFire",{at:i.worldToScreen(c.pos),radius:c.radiusPx}),setTimeout(()=>{this._ffSaid=!1},1500)),!0):!1})())continue;if(r.hostile&&t.length&&!this.tele){let c=this._bodyImpact(r,l,t,o);if(Number.isFinite(c)){if(r.group.position.lerpVectors(l,r.group.position,c),(this.invuln||0)>0){n.burst(r.group.position,yt,6,i.px(200),{life:.25,size:i.px(6),drag:3}),r.dispose(i.scene);continue}if(this.invuln=.7,this._hurt(this.blast?.5:.8)){r.dispose(i.scene),this._defeated(r.vel.clone().normalize());continue}this.blast&&(this.blast.fired||this.blast.age>.4||this.blast.kind==="beam")?(this.brain.impulse(r.vel.x*.08,-r.vel.y*.08),this.chargeHit=!0):(this.ch.play("EnemyHit",{weight:6,fade:.05}),this.ch.setFace("injured"),this.faceAfter="fierce",this.faceTimer=.55,this.brain.impulse(r.vel.x*.35,-r.vel.y*.35),this._interruptBlast()),this.pendingShot=null,this.pressUntil=0,n.burst(r.group.position,yt,16,i.px(300),{life:.35,size:i.px(8),drag:3}),i.fx.push(new tt(i.scene,r.group.position,yt,i.px(80),.12)),r.dispose(i.scene),this.cool=Math.max(this.cool,.48),this.emit("hit");continue}}}r.age>Math.hypot(i.viewport.width,i.viewport.height)/r.speed+.45&&r.dispose(i.scene)}i.projectiles=i.projectiles.filter(r=>r.alive)}_damageFor(e,t){if(!e.boss)return t?2:1;let i=Ve(this.bossT/28,0,1),n=1-e.hp,s=t?.22:.03;return n>i+.1?s*=.3:n<i-.1&&(s*=1.7),this.blast&&this.blast.full?t?.6:.2:(s=Math.min(s,Math.max(0,.86-n)),s)}_afterBattle(e){let t=this.ch;t.aimAt("L",null),t.aimAt("R",null),t.lookAt(null),this.pendingShot=null,this.followUp=null,e&&this.blast?.beam?.dispose(),this.blast=null;for(let i of[...this.ebeams])this._disposeBeam(i);if(this._endOrbClash(null),this.talk=null,this.pendingSwap=null,this.swapping=null,this.ama=null,this.carry=null,this.ch.eyeRedTarget=0,this.eyeRedFor=0,this._cbClear(),this.blast&&!this.blast.fired&&this.emit("soundStop",Xf(this.blast.kind)),this.ragdoll=null,this.pendingSecond=null,this.down=null,this.ctx.enemiesTaunt=!1,this.liveBeams=[],this.beamEvade=null,this.tele&&(this.tele=null,this.ch.holder.visible=!0),this.evasion=null,this.slowMo=0,e){t.holdPose(null),this._toIdle();return}this.setMode("victory")}_victory(e,t){let i=this.ch,n=this.brain;this.modeT<e*1.5&&(i.holdPose(null),i.setFace("victory"),i.play("Victory",{weight:6,fade:.15}),n.setTuning({stiffness:6,damping:4,maxSpeed:360}),n.setGoal(n.pos.x,n.pos.y-this.ctx.px(30)),this.emit("victory")),this.modeT>1.5&&this.setMode("approach")}_approach(e,t){let i=this.ctx,n=this.brain,s=this.ch;if(this.modeT<e*1.5){let l=i.px(110),c=Ve(n.pos.x+be(-i.px(160),i.px(160)),l,t.width-l);this._landX=c,this._groundY=t.height-i.px(26),s.setFace("happy")}let r=this._groundY-i.miniSize()*.52;n.setTuning({stiffness:5.5,damping:4.6,maxSpeed:520}),n.setGoal(this._landX,r);let o=r-n.pos.y;if(o<i.px(80)&&!this._braking&&(this._braking=!0,s.play("Brake",{weight:4,timeScale:.8}),this.palmBoost.L=this.palmBoost.R=.8),Math.abs(o)<i.px(6)&&Math.abs(n.vel.y)<90){this._braking=!1,this.setMode("landed"),s.holdPose("HeroLanding",1);let l=i.screenToWorld(n.pos.x,this._groundY);i.fx.push(new Kt(i.scene,l,i.px(110),nt,1.2)),i.particles.burst(l,nt,30,i.px(260),{life:.6,size:i.px(7),drag:3.5})}}_landed(e,t){let i=this.brain,n=this.ch;i.setTuning({stiffness:30,damping:12,maxSpeed:120}),i.setGoal(this._landX,this._groundY-this.ctx.miniSize()*.52),this.modeT>.9&&n.setFace("happy"),this.modeT>3&&(this.setMode("retract"),n.holdPose(null),n.play("BoostStart",{weight:2}))}_retract(e,t){let i=this.brain,n=this.ch;i.setTuning({stiffness:6,damping:4.5,maxSpeed:300}),i.setGoal(this._landX,this._groundY-this.ctx.px(180)),this.modeT>.6&&(n.deployTarget=0,this._retractRing||(this._retractRing=!0,this._scanRing())),this.modeT>1.8&&this._toIdle()}_scanRing(){let e=this.ctx,t=e.screenToWorld(this.brain.pos.x,this.brain.pos.y+e.miniSize()*.1);e.fx.push(new Kt(e.scene,t,e.px(80),nt,.7))}_handleCues(e){let t=this.ch;for(let i of e)this.mode==="idle"&&(i==="LookAround"&&t.deploy<.5&&t.play("LookAround",{weight:3,full:!1}),i==="Curious"&&(t.setFace("curious"),this.faceAfter="neutral",this.faceTimer=1.2))}_exhaust(e){let t=this.ctx,i=t.particles,n=t.lowPower?.4:1;for(let[s,r]of Object.entries(this.ch.jets)){if(r.level<.12)continue;let l=r.level*(s.startsWith("Foot")?36:20)*n*e;for(;l>0;){if(Math.random()<l){let c=r.d.clone().multiplyScalar(t.px(220)*(.5+r.level)).add(new A(be(-30,30),be(-30,30),0));i.emit(r.pos,c,Math.random()<.3?ze:nt,{life:.28+r.level*.15,size:t.px(5+4*r.level),drag:3,alpha:.8})}l-=1}}}};var B_=["a","button","input","textarea","select","option","label","form","summary","details","video","audio","iframe","img","figure","canvas:not(.minix-canvas)",'[role="button"]','[role="link"]','[role="menuitem"]','[role="tab"]','[role="dialog"]','[role="textbox"]','[role="slider"]','[role="switch"]','[contenteditable=""]','[contenteditable="true"]','[tabindex]:not([tabindex="-1"])',"[onclick]","[data-mini-x-ignore]","[data-mini-x-chat]","[data-mini-x-settings]","[data-mini-x-overlay-control]",".nav",".menu",".rail",".aichat",".term",".keys",".lightbox",".toast",".loader",".totop",".frame",".thumb",".certcard",".chip",".form-wrap",".footer__links",".socials",".minix-ui",".minix-hit"].join(", ");function lu(a){return a instanceof Element&&!!a.closest(B_)}function $f(){let a=window.getSelection&&window.getSelection();return!!(a&&!a.isCollapsed&&String(a).trim().length)}function Qf({onEnemy:a,onBoss:e,onPointerMove:t=()=>{},onCancel:i=()=>{},onPress:n=()=>{},longPressMs:s=650,maxMovePx:r=12,enabled:o=()=>!0,root:l=document}={}){if(typeof a!="function"||typeof e!="function")throw new TypeError("onEnemy and onBoss callbacks are required.");let c=null,h=null,u=window.scrollY,d=()=>{h!=null&&window.clearTimeout(h),h=null},f=()=>{c&&i(),c=null,d()};function g(M){!o()||!M.isPrimary||M.button!==0||lu(M.target)||(f(),c={id:M.pointerId,x:M.clientX,y:M.clientY,type:M.pointerType,firedBoss:!1,cancelled:!1,hadSelection:$f()},n({x:c.x,y:c.y}),h=window.setTimeout(()=>{if(h=null,!(!c||c.cancelled||c.firedBoss||!o())){c.firedBoss=!0;try{window.getSelection().removeAllRanges()}catch{}e({x:c.x,y:c.y,input:c.type,kind:"boss"})}},s))}function b(M){o()&&(t({x:M.clientX,y:M.clientY,type:M.pointerType}),!(!c||c.id!==M.pointerId)&&Math.hypot(M.clientX-c.x,M.clientY-c.y)>r&&!c.firedBoss&&(c.cancelled=!0,d(),i()))}function p(M){if(!c||c.id!==M.pointerId)return;let y=c;d(),c=null,!(!o()||y.cancelled||y.firedBoss)&&(Math.hypot(M.clientX-y.x,M.clientY-y.y)>r||lu(M.target)||$f()&&!y.hadSelection||a({x:M.clientX,y:M.clientY,input:y.type,kind:"small"}))}function m(){window.scrollY!==u&&f(),u=window.scrollY}function _(M){c?.firedBoss&&!lu(M.target)&&M.preventDefault()}return l.addEventListener("pointerdown",g,{passive:!0}),l.addEventListener("pointermove",b,{passive:!0}),l.addEventListener("pointerup",p,{passive:!0}),l.addEventListener("pointercancel",f,{passive:!0}),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("blur",f),l.addEventListener("contextmenu",_),()=>{f(),l.removeEventListener("pointerdown",g),l.removeEventListener("pointermove",b),l.removeEventListener("pointerup",p),l.removeEventListener("pointercancel",f),window.removeEventListener("scroll",m),window.removeEventListener("blur",f),l.removeEventListener("contextmenu",_)}}var ep="minix-settings-v1";function tp(a){let e={visible:!0,battles:!a,motion:a?"reduced":"full",sound:!1,hinted:!1};try{return Object.assign(e,JSON.parse(localStorage.getItem(ep)||"{}"))}catch{return e}}function Yl(a){try{localStorage.setItem(ep,JSON.stringify(a))}catch{}}var z_='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3c-6.6 0-11 4.6-11 11.2 0 5.4 3.9 9.8 11 9.8s11-4.4 11-9.8C27 7.6 22.6 3 16 3z" fill="#3b434d"/><path d="M8.5 11.5h5l2.5 2 2.5-2h5c1 2.8 1.2 5.6.2 8.3-1.6 2.3-4.3 3.2-7.7 3.2s-6.1-.9-7.7-3.2c-1-2.7-.8-5.5.2-8.3z" fill="#05090d"/><rect x="11" y="14.5" width="2.2" height="4.6" rx="1.1" fill="#00f0fa"/><rect x="18.8" y="14.5" width="2.2" height="4.6" rx="1.1" fill="#00f0fa"/><path d="M14 20.6q2 1.4 4 0" stroke="#00f0fa" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M14.6 6.6l2.8 2.8M17.4 6.6l-2.8 2.8" stroke="#00f0fa" stroke-width="1.1" stroke-linecap="round"/><path d="M10 27.5h12" stroke="#00f0fa" stroke-width="1.2" stroke-linecap="round" opacity=".7"/></svg>',Jl=class{constructor({settings:e,onChange:t,onSummon:i,onHello:n}){this.s=e,this.onChange=t,this.ready=!1;let s=document.createElement("div");s.className="minix-ui",s.setAttribute("data-mini-x-settings",""),s.innerHTML=`
      <button type="button" class="minix-dock" aria-expanded="false" aria-controls="minix-menu" title="Mini-X settings">
        ${z_}<span class="minix-dock__txt">MINI-X</span>
      </button>
      <div class="minix-menu" id="minix-menu" role="group" aria-label="Mini-X settings" hidden>
        <p class="minix-menu__title">MINI-X <span>3D companion</span></p>
        <div class="minix-menu__row minix-menu__chat">
          <button type="button" data-mini-x-chat aria-haspopup="dialog" aria-controls="aichat-panel">Ask Mini-X about Mukramin</button>
        </div>
        <label class="minix-sw"><input type="checkbox" data-k="visible"><span>Show Mini-X</span></label>
        <label class="minix-sw"><input type="checkbox" data-k="battles"><span>Click to spawn viruses</span></label>
        <label class="minix-sw"><input type="checkbox" data-k="motionFull"><span>Full motion (flips, flight)</span></label>
        <label class="minix-sw"><input type="checkbox" data-k="sound"><span>Mini-X sound effects</span></label>
        <div class="minix-menu__row">
          <button type="button" data-act="small">Summon virus</button>
          <button type="button" data-act="boss">Summon boss</button>
          <button type="button" data-act="hello">Say hi</button>
        </div>
        <p class="minix-menu__hint">Click empty space to spawn a virus. Press and hold for a boss. Click Mini-X to ask about Mukramin.</p>
      </div>`,document.body.appendChild(s),this.root=s,this.dock=s.querySelector(".minix-dock"),this.menu=s.querySelector(".minix-menu"),this.dock.addEventListener("click",()=>this.toggle()),this.menu.querySelector("[data-mini-x-chat]").addEventListener("click",()=>this.toggle(!1)),document.addEventListener("keydown",r=>{r.key==="Escape"&&!this.menu.hidden&&(this.toggle(!1),this.dock.focus())}),document.addEventListener("pointerdown",r=>{!this.menu.hidden&&!s.contains(r.target)&&this.toggle(!1)},{passive:!0}),s.querySelectorAll("input[data-k]").forEach(r=>{r.addEventListener("change",()=>{let o=r.getAttribute("data-k");o==="motionFull"?this.s.motion=r.checked?"full":"reduced":this.s[o]=r.checked,Yl(this.s),this.sync(),t(this.s)})}),s.querySelectorAll("[data-act]").forEach(r=>r.addEventListener("click",()=>{let o=r.getAttribute("data-act");o==="hello"?n():i(o),this.toggle(!1)})),this.hit=document.createElement("button"),this.hit.type="button",this.hit.className="minix-hit",this.hit.setAttribute("data-mini-x-chat",""),this.hit.setAttribute("aria-label","Ask Mini-X about Mukramin"),this.hit.setAttribute("aria-haspopup","dialog"),this.hit.setAttribute("aria-controls","aichat-panel"),this.hit.title="Ask Mini-X about Mukramin",document.body.appendChild(this.hit),this.bubble=document.createElement("div"),this.bubble.className="minix-bubble",this.bubble.setAttribute("aria-hidden","true"),document.body.appendChild(this.bubble),this.foeBubble=document.createElement("div"),this.foeBubble.className="minix-bubble minix-bubble--foe",this.foeBubble.setAttribute("aria-hidden","true"),document.body.appendChild(this.foeBubble),this.live=document.createElement("div"),this.live.className="minix-live",this.live.setAttribute("role","status"),this.live.setAttribute("aria-live","polite"),document.body.appendChild(this.live),this.sync()}toggle(e){let t=e??this.menu.hidden;if(this.menu.hidden=!t,this.dock.setAttribute("aria-expanded",String(t)),t){let i=this.menu.querySelector("[data-mini-x-chat]");(i.getClientRects().length?i:this.menu.querySelector("input")).focus({preventScroll:!0})}}sync(){this.root.querySelector('[data-k="visible"]').checked=this.s.visible,this.root.querySelector('[data-k="battles"]').checked=this.s.battles,this.root.querySelector('[data-k="motionFull"]').checked=this.s.motion==="full",this.root.querySelector('[data-k="sound"]').checked=this.s.sound,this.root.classList.toggle("is-hidden-char",!this.s.visible),this.hit.hidden=!this.s.visible||!this.ready,this.s.visible||this.bubble.classList.remove("is-on")}announce(e){this.live.textContent="",setTimeout(()=>{this.live.textContent=e},30)}foeSay(e,t,i,n=2600){let s=this.foeBubble;s.textContent=e,s.classList.add("is-on");let r=s.offsetWidth||200;s.style.transform=`translate(${Math.round(Math.max(8,Math.min(window.innerWidth-r-8,t-r/2)))}px, ${Math.round(Math.max(8,i))}px)`,clearTimeout(this._ft),this._ft=setTimeout(()=>s.classList.remove("is-on"),n),this.announce(e)}say(e,t=4200){this.bubble.textContent=e,this.bubbleWidth=this.bubble.offsetWidth,this.bubbleHeight=this.bubble.offsetHeight,this.bubble.classList.add("is-on"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.bubble.classList.remove("is-on"),t)}place(e,t=0){let i=this.hit;this.ready||(this.ready=!0,i.hidden=!this.s.visible),i.style.transform=`translate(${Math.round(e.x-e.w/2)}px, ${Math.round(e.y-e.h/2)}px)`,i.style.width=Math.round(e.w)+"px",i.style.height=Math.round(e.h)+"px";let n=this.bubbleWidth||0,s=this.bubbleHeight||0,r=Math.min(window.innerWidth-n-10,Math.max(t+10,e.x-n/2)),o=e.y-e.h/2-s-12,l=o>=12?o:Math.min(window.innerHeight-s-10,e.y+e.h/2+12);this.bubble.style.transform=`translate(${Math.round(r)}px, ${Math.round(l)}px)`}};function ip(a){let e=()=>document.querySelector(".aichat"),t=e(),i=()=>{t=t||e(),a({open:!!(t&&t.classList.contains("is-open")),busy:!!(t&&t.classList.contains("is-busy"))})},n=new MutationObserver(i),s=()=>(t=e(),t?(n.observe(t,{attributes:!0,attributeFilter:["class"]}),i(),!0):!1);if(!s()){let r=new MutationObserver(()=>{s()&&r.disconnect()});r.observe(document.body,{childList:!0})}return{rect(){let r=document.querySelector(".aichat.is-open .aichat__panel");if(!r)return null;let o=r.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width,height:o.height}}}}var Zl=class{constructor(){yu(this,"unlock",()=>{if(!this.enabled)return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx||(this._build(new e),this._decodeSamples()),this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}catch{}});this.enabled=!1,this.last={},this.voices=new Set,this.samples={},this.sampleUrls={},this.named={}}has(e){return!!this.samples[e]}stop(e,t=.12){if(!this.ctx)return;let i=this.ctx.currentTime;for(let n of this.named[e]||[])try{n.g.gain.cancelScheduledValues(i),n.g.gain.setValueAtTime(n.g.gain.value,i),n.g.gain.linearRampToValueAtTime(1e-4,i+t),n.src.stop(i+t+.02)}catch{}this.named[e]?.clear()}async loadSamples(e){try{let t=await fetch(e+"sounds.json",{cache:"no-cache"});if(!t.ok)return;let i=await t.json();for(let[n,s]of Object.entries(i||{}))typeof s=="string"&&s&&(this.sampleUrls[n]=new URL(s,e).href);this._decodeSamples()}catch{}}async _decodeSamples(){if(!(!this.ctx||!this.ctx.decodeAudioData)){for(let[e,t]of Object.entries(this.sampleUrls))if(!this.samples[e])try{let i=await(await fetch(t)).arrayBuffer();this.samples[e]=await this.ctx.decodeAudioData(i)}catch{console.warn("[Mini-X] could not load sound",t)}}}_sample(e,t,{pan:i=0,gain:n=.9,duration:s=null,offset:r=0,delay:o=0}={}){var g;let l=this.ctx.createBufferSource();l.buffer=this.samples[e];let c=this.ctx.createGain(),h=n/2.4*1.6;c.gain.value=h,l.connect(c),this._route(c,i);let u=t+Math.max(0,o),d=Math.min(Math.max(0,r),l.buffer.duration-.05);l.start(u,d);let f={src:l,g:c};((g=this.named)[e]||(g[e]=new Set)).add(f),s&&s<l.buffer.duration-d&&(c.gain.setValueAtTime(h,u+Math.max(0,s-.25)),c.gain.linearRampToValueAtTime(1e-4,u+s),l.stop(u+s+.02)),this.voices.add(l),l.onended=()=>{this.voices.delete(l),this.named[e]?.delete(f),l.disconnect(),c.disconnect()}}setEnabled(e){this.enabled=e,this.out&&(this.out.gain.value=e?1:0),e||this.stopAll()}_build(e){this.ctx=e,this.bus=e.createGain(),this.bus.gain.value=2.4;let t=e.createDynamicsCompressor();t.threshold.value=-16,t.knee.value=8,t.ratio.value=3.5,t.attack.value=.004,t.release.value=.18;let i=e.createDynamicsCompressor();i.threshold.value=-2,i.knee.value=0,i.ratio.value=20,i.attack.value=.001,i.release.value=.08,this.out=e.createGain(),this.out.gain.value=1,this.bus.connect(t).connect(i).connect(this.out).connect(e.destination),this.noise=this._noiseBuffer()}get ready(){return this.enabled&&this.ctx&&this.ctx.state==="running"}play(e,t={}){if(!this.ready)return;let i=this.ctx.currentTime,n={fire:.05,enemyFire:.05,hit:.1,dodge:.12}[e]??.08;if(i-(this.last[e]??-1)<n)return;if(this.last[e]=i,this.samples[e]){this._sample(e,i,t);return}let s=this["_"+e];s&&s.call(this,i,t)}stopAll(){for(let e of this.voices)try{e.stop()}catch{}this.voices.clear()}_noiseBuffer(){let e=this.ctx,t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),i=t.getChannelData(0),n=317;for(let s=0;s<i.length;s++)n=Math.imul(n,1664525)+1013904223>>>0,i[s]=n/2147483648-1;return t}_env(e,t,i,n,s){let r=this.ctx.createGain();return r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(t,e+i),n>0&&r.gain.setValueAtTime(t,e+i+n),r.gain.exponentialRampToValueAtTime(1e-4,e+i+n+s),r}_pan(e){if(!this.ctx.createStereoPanner)return null;let t=this.ctx.createStereoPanner();return t.pan.value=e||0,t}_route(e,t){let i=t!=null?this._pan(t):null;i?e.connect(i).connect(this.bus):e.connect(this.bus)}_osc(e,t,i,n,s,r,{detune:o=0,curve:l="exp",pan:c=null,filter:h=null}={}){let u=this.ctx.createOscillator();u.type=e,u.detune.value=o,u.frequency.setValueAtTime(n,t),s&&s!==n&&(l==="exp"?u.frequency.exponentialRampToValueAtTime(s,t+i):u.frequency.linearRampToValueAtTime(s,t+i));let d=u;return h&&(d.connect(h),d=h),d.connect(r),this._route(r,c),u.start(t),u.stop(t+i+.05),this.voices.add(u),u.onended=()=>{this.voices.delete(u),u.disconnect(),r.disconnect()},u}_noise(e,t,i,n,s,r,o,l=null){let c=this.ctx.createBufferSource();c.buffer=this.noise,c.loop=!0;let h=this.ctx.createBiquadFilter();return h.type=i,h.Q.value=r,h.frequency.setValueAtTime(n,e),s&&s!==n&&h.frequency.exponentialRampToValueAtTime(s,e+t),c.connect(h).connect(o),this._route(o,l),c.start(e,Math.random()),c.stop(e+t+.05),this.voices.add(c),c.onended=()=>{this.voices.delete(c),c.disconnect(),h.disconnect(),o.disconnect()},{src:c,f:h}}_lfo(e,t,i,n,s,r){let o=this.ctx.createOscillator(),l=this.ctx.createGain();o.frequency.setValueAtTime(i,e),n!==i&&o.frequency.exponentialRampToValueAtTime(n,e+t),l.gain.value=s,o.connect(l).connect(r),o.start(e),o.stop(e+t+.05),this.voices.add(o),o.onended=()=>{this.voices.delete(o),o.disconnect(),l.disconnect()}}_fire(e,{pan:t=0}={}){let n=this._osc("sawtooth",e,.2,2400,180,this._env(e,.95,.004,.03,.166),{pan:t});this._lfo(e,.2,60,25,260,n.frequency),this._osc("square",e,.2*.8,1600,140,this._env(e,.4,.003,0,.2*.8),{pan:t,detune:12}),this._noise(e,.06,"highpass",5e3,2500,.7,this._env(e,.7,.002,0,.055),t)}_enemyFire(e,{pan:t=0}={}){let n=this._osc("square",e,.3,1500,210,this._env(e,.6,.003,.03,.267),{pan:t});this._lfo(e,.3,95,40,180,n.frequency),this._osc("sawtooth",e,.3*.85,2900,330,this._env(e,.32,.003,0,.3*.85),{pan:t,detune:-15}),this._osc("sine",e,.12,680,120,this._env(e,.45,.002,0,.11),{pan:t}),this._noise(e,.18,"highpass",6e3,2e3,.6,this._env(e,.3,.002,0,.17),t)}_charge(e,{duration:t=1.45}={}){let i=t,n=this._osc("sawtooth",e,i,110,1500,this._env(e,.24,i*.85,0,.1),{filter:(()=>{let o=this.ctx.createBiquadFilter();return o.type="lowpass",o.frequency.setValueAtTime(600,e),o.frequency.exponentialRampToValueAtTime(6500,e+i),o})()}),s=this._osc("sine",e,i,220,3e3,this._env(e,.16,i*.9,0,.08));this._lfo(e,i,6,34,40,n.frequency),this._lfo(e,i,6,34,90,s.frequency),this._osc("triangle",e,i,55,90,this._env(e,.3,i*.7,.1,.15),{curve:"lin"});let r=this._noise(e,i,"bandpass",800,7e3,2.5,this._env(e,.16,i*.9,0,.08));this._lfo(e,i,9,28,1500,r.f.frequency)}_blast(e,{duration:t=1}={}){let i=t;this._osc("sine",e,.35,160,38,this._env(e,.9,.004,.02,.32)),this._noise(e,.25,"lowpass",2500,300,.7,this._env(e,.6,.003,.02,.22));let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(5e3,e),n.frequency.exponentialRampToValueAtTime(1200,e+i);for(let[r,o,l]of[[110,0,.22],[110,9,.2],[220,-7,.14],[440,5,.08]]){let c=this.ctx.createOscillator();c.type="sawtooth",c.frequency.value=r,c.detune.value=o;let h=this._env(e,l,.03,i*.65,i*.35);c.connect(n),n.connect(h),this._route(h,0),this._lfo(e,i,22,16,r*.03,c.frequency),c.start(e),c.stop(e+i+.05),this.voices.add(c),c.onended=()=>{this.voices.delete(c),c.disconnect()}}let s=this._noise(e,i,"bandpass",3200,1800,1.2,this._env(e,.32,.02,i*.6,i*.38));this._lfo(e,i,30,18,700,s.f.frequency),this._osc("square",e,i,880,660,this._env(e,.06,.02,i*.5,i*.45),{detune:3})}_dodge(e,{dir:t=0}={}){let n=this._env(e,.55,.11,.03,.28),s=this._pan(-t*.7),r=this.ctx.createBufferSource();r.buffer=this.noise;let o=this.ctx.createBiquadFilter();o.type="bandpass",o.Q.value=1.4,o.frequency.setValueAtTime(450,e),o.frequency.exponentialRampToValueAtTime(2600,e+.13),o.frequency.exponentialRampToValueAtTime(520,e+.42),r.connect(o).connect(n),s?(n.connect(s).connect(this.bus),s.pan.linearRampToValueAtTime(t*.7,e+.42)):n.connect(this.bus),r.start(e,Math.random()),r.stop(e+.42+.05),this.voices.add(r),r.onended=()=>{this.voices.delete(r),r.disconnect(),o.disconnect(),n.disconnect()},this._noise(e,.42,"lowpass",700,250,.8,this._env(e,.35,.09,.02,.3));let l=this._noise(e,.3,"bandpass",1400,900,3,this._env(e+.04,.12,.05,0,.22));this._lfo(e,.3,26,12,500,l.f.frequency)}_rasengan(e,{duration:t=2.3}={}){let i=t,n=this._noise(e,i,"bandpass",500,1600,2.2,this._env(e,.5,.35,i*.6,i*.3));this._lfo(e,i,9,34,450,n.f.frequency);let s=this._osc("sawtooth",e,i,90,260,this._env(e,.18,.4,i*.5,i*.3),{curve:"lin"});this._lfo(e,i,12,40,30,s.frequency),this._noise(e,i,"highpass",3e3,5e3,.7,this._env(e,.16,.5,i*.4,i*.3))}_swap(e){this._osc("sine",e,.5,2400,2350,this._env(e,.5,.002,.02,.45)),this._osc("sine",e,.5,3610,3600,this._env(e,.25,.002,.02,.45)),this._noise(e,.25,"highpass",5e3,9e3,.7,this._env(e,.3,.003,.02,.2)),this._osc("sine",e,.35,90,40,this._env(e,.5,.003,.03,.3))}_rasenDash(e){this._dash(e),this._osc("sine",e,.3,220,640,this._env(e,.3,.05,.08,.17))}_rasenHit(e){this._osc("sine",e,.6,140,34,this._env(e,1,.003,.06,.5)),this._noise(e,.8,"lowpass",2600,140,.8,this._env(e,.9,.003,.08,.7));let t=this._noise(e,.7,"bandpass",1800,400,2,this._env(e,.5,.01,.1,.55));this._lfo(e,.7,30,10,600,t.f.frequency)}_boltCharge(e,{duration:t=1}={}){let i=t,n=this._osc("sawtooth",e,i,180,520,this._env(e,.2,i*.6,i*.3,.1));this._lfo(e,i,40,70,60,n.frequency);let s=this._noise(e,i,"highpass",3500,6e3,.8,this._env(e,.32,.12,i*.75,.13));this._lfo(e,i,17,45,1500,s.f.frequency);let r=Math.round(i*70);for(let o=0;o<r;o++){let l=e+Math.random()*i,c=2200+Math.random()*4200,h=.012+Math.random()*.025;this._osc("square",l,h,c,c*(.6+Math.random()*.8),this._env(l,.14+.18*(l-e)/i,.001,0,h),{pan:(Math.random()-.5)*.6})}for(let o=0;o<Math.round(i*30);o++){let l=e+Math.random()*i;this._noise(l,.02,"bandpass",1500+Math.random()*5e3,900,2,this._env(l,.35,.001,0,.018),(Math.random()-.5)*.8)}}_bolt(e){this._noise(e,.09,"highpass",1200,600,.5,this._env(e,1,.001,.01,.08)),this._noise(e,.7,"lowpass",1800,160,.7,this._env(e,.75,.004,.05,.6));let t=this._osc("sawtooth",e,.35,2600,90,this._env(e,.5,.002,.03,.31));this._lfo(e,.35,120,50,600,t.frequency),this._osc("sine",e,.45,110,38,this._env(e,.8,.003,.04,.4));for(let i=0;i<10;i++){let n=e+.03+Math.random()*.4;this._noise(n,.025,"bandpass",3e3+Math.random()*4e3,1500,2,this._env(n,.4,.001,0,.022),Math.random()-.5)}}_teleport(e){let t=this._osc("sine",e,.14,300,4200,this._env(e,.6,.004,.03,.1));this._osc("square",e,.14,150,2100,this._env(e,.18,.004,.03,.1),{detune:9}),this._osc("sine",e+.13,.22,3600,220,this._env(e+.13,.55,.003,.02,.19)),this._osc("sawtooth",e+.13,.22,1800,110,this._env(e+.13,.22,.003,.02,.19)),this._lfo(e,.36,45,90,300,t.frequency),this._noise(e+.11,.18,"bandpass",6e3,900,1.1,this._env(e+.11,.6,.002,.02,.15))}_enemyBeam(e,{duration:t=1.35}={}){let i=t;this._osc("sine",e,.3,120,40,this._env(e,.7,.004,.02,.27));let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400;for(let[s,r,o]of[[73,0,.24],[73,13,.2],[146,-9,.12]]){let l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.value=s,l.detune.value=r;let c=this._env(e,o,.04,i*.7,i*.3);l.connect(n),n.connect(c),this._route(c,0),this._lfo(e,i,13,9,s*.05,l.frequency),l.start(e),l.stop(e+i+.05),this.voices.add(l),l.onended=()=>{this.voices.delete(l),l.disconnect()}}this._noise(e,i,"bandpass",1400,900,1.5,this._env(e,.3,.03,i*.65,i*.32))}_clash(e,{duration:t=2.6}={}){let i=t;this._noise(e,.3,"lowpass",3e3,200,.7,this._env(e,.9,.003,.03,.27));let n=this._noise(e,i,"bandpass",900,2200,1.8,this._env(e,.4,.06,i*.8,i*.18));this._lfo(e,i,11,23,600,n.f.frequency);for(let[s,r]of[[98,.18],[131,.16],[104,.14]]){let o=this._osc("sawtooth",e,i,s,s*1.35,this._env(e,r,.05,i*.8,i*.15),{curve:"lin"});this._lfo(e,i,7,19,s*.06,o.frequency)}}_orbCharge(e,{duration:t=.8}={}){let i=t,n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1400;let s=this._osc("sawtooth",e,i,70,190,this._env(e,.32,i*.75,i*.15,.1),{filter:n});this._lfo(e,i,9,22,18,s.frequency),this._osc("square",e,i,35,95,this._env(e,.16,i*.8,.05,.1),{detune:7}),this._noise(e,i,"bandpass",900,2600,2,this._env(e,.22,i*.7,i*.2,.1));for(let r=0;r<Math.round(i*25);r++){let o=e+Math.random()*i;this._noise(o,.02,"bandpass",900+Math.random()*2500,700,2,this._env(o,.25,.001,0,.018),(Math.random()-.5)*.6)}}_grind(e,{duration:t=3.5,rasengan:i=!1,noCrackle:n=i}={}){let s=t;this._noise(e,.35,"lowpass",3200,180,.7,this._env(e,1,.002,.03,.3)),this._osc("sine",e,.45,120,36,this._env(e,.8,.003,.05,.4)),n||this._boltCharge(e,{duration:s});for(let[o,l]of[[62,.2],[93,.14]]){let c=this._osc("sawtooth",e,s,o,o*1.5,this._env(e,l,.08,s*.8,s*.12),{curve:"lin"});this._lfo(e,s,8,21,o*.08,c.frequency)}let r=this._noise(e,s,"bandpass",700,1900,1.6,this._env(e,.3,.06,s*.8,s*.14));this._lfo(e,s,12,26,500,r.f.frequency)}_surge(e){this._osc("sawtooth",e,.35,160,620,this._env(e,.35,.03,.1,.22)),this._noise(e,.35,"bandpass",800,4e3,1.2,this._env(e,.35,.05,.08,.22))}_dash(e){this._noise(e,.4,"bandpass",500,3500,1,this._env(e,.55,.05,.08,.27));for(let t=0;t<14;t++){let i=e+Math.random()*.4,n=2500+Math.random()*4e3;this._osc("square",i,.02,n,n*.7,this._env(i,.2,.001,0,.018))}}_boost(e){this._noise(e,.5,"bandpass",300,1600,1,this._env(e,.35,.12,.08,.28)),this._osc("triangle",e,.45,90,220,this._env(e,.16,.1,.05,.28))}_impact(e){this._osc("sine",e,.22,220,50,this._env(e,1,.003,0,.2)),this._noise(e,.15,"bandpass",2400,600,1,this._env(e,.8,.002,0,.14))}_hit(e){this._osc("square",e,.2,320,70,this._env(e,.6,.003,.02,.17)),this._noise(e,.2,"bandpass",1800,400,1.2,this._env(e,.9,.002,.02,.17))}_katonSeal(e,{duration:t=1.2}={}){let i=Math.max(3,Math.round(t/.2));for(let n=0;n<i;n++){let s=e+n*.2;this._noise(s,.05,"bandpass",2600,1800,3,this._env(s,.6,.002,0,.045)),this._osc("triangle",s,.06,900,500,this._env(s,.3,.002,0,.055))}this._noise(e,t,"highpass",4e3,6e3,.6,this._env(e,.06,.1,t*.6,t*.3))}_katonFire(e){let t=this._noise(e,1.3,"lowpass",900,2600,.8,this._env(e,.75,.05,.4,.8));this._lfo(e,1.3,14,7,500,t.f.frequency),this._osc("sawtooth",e,1.1,70,45,this._env(e,.22,.05,.3,.7),{curve:"lin"})}_katonBoom(e){this._osc("sine",e,.7,130,32,this._env(e,1,.003,.08,.6)),this._noise(e,.9,"lowpass",3e3,200,.7,this._env(e,.95,.003,.1,.8));let t=this._noise(e+.05,.8,"bandpass",1500,600,1.2,this._env(e+.05,.35,.02,.2,.55));this._lfo(e,.8,24,9,400,t.f.frequency)}_amaterasu(e){this._osc("sine",e,.9,60,30,this._env(e,.7,.01,.2,.7));let t=this._noise(e+.05,1.2,"lowpass",400,1500,1.4,this._env(e+.05,.6,.15,.4,.65));this._lfo(e,1.2,9,16,300,t.f.frequency)}_chibaku(e,{duration:t=6}={}){let i=t,n=this._osc("sawtooth",e,i,38,55,this._env(e,.3,.6,i*.7,i*.25),{curve:"lin"});this._lfo(e,i,3,7,6,n.frequency);let s=this._noise(e,i,"lowpass",220,520,1.2,this._env(e,.45,.5,i*.7,i*.25));this._lfo(e,i,4,9,120,s.f.frequency)}_chibakuBoom(e){this._osc("sine",e,1.4,90,24,this._env(e,1,.004,.2,1.2)),this._noise(e,2.2,"lowpass",2600,120,.7,this._env(e,1,.004,.3,1.9));let t=this._noise(e+.08,1.8,"bandpass",900,250,1,this._env(e+.08,.5,.02,.4,1.3));this._lfo(e,1.8,18,6,300,t.f.frequency)}_virusDie(e){this._katonBoom(e)}dispose(){this.stopAll(),this.ctx?.close().catch(()=>{})}};var H_=document.currentScript&&document.currentScript.src||import.meta&&import.meta.url||location.href,$l=a=>new URL("../../assets/mini-x/"+a,H_).href,cu=22;function G_(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function np(){if(window.__miniX)return window.__miniX;let a=window.matchMedia("(prefers-reduced-motion: reduce)"),e=!!(navigator.connection&&navigator.connection.saveData),t=tp(a.matches);e&&localStorage.getItem("minix-settings-v1")==null&&(t.visible=!1);let i={settings:t};window.__miniX=i;let n=new Zl;i.audio=n,n.loadSamples($l("sfx/"));let s=null,r=new Jl({settings:t,onChange:c=>{n.setEnabled(c.sound&&c.visible&&!document.hidden),n.unlock(),c.visible&&!s&&l(),s&&s.apply(c)},onSummon:c=>{s?s.summonCenter(c):l().then(()=>s&&s.summonCenter(c))},onHello:()=>s&&s.hello()});if(i.ui=r,!G_())return r.root.classList.add("is-nogl"),r.root.querySelector(".minix-menu__hint").textContent="The 3D companion needs WebGL 2. You can still chat with Mini-X here.",i;let o=null;function l(){return o||(o=V_(t,r,a,n).then(c=>(s=c,i.app=c,c)).catch(c=>{console.warn("[Mini-X] could not start:",c),r.root.classList.add("is-error")}))}return t.visible&&await l(),i}async function V_(a,e,t,i){let n=Math.min(window.innerWidth,window.innerHeight)<640||matchMedia("(pointer: coarse)").matches,s=n||(navigator.hardwareConcurrency||8)<=4,r=document.createElement("canvas");r.className="minix-canvas",r.setAttribute("aria-hidden","true"),document.body.appendChild(r);let o=new vl({canvas:r,alpha:!0,antialias:!s,premultipliedAlpha:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1.25:1.75)),o.setClearColor(0,0);let l=new Yn;Hf(o,l);let c=new Ot(cu,1,10,1e4),h=new Sl;h.setMeshoptDecoder(Uf);let u=U=>new Promise((te,De)=>h.load(U,te,void 0,De)),[d,f,g]=await Promise.all([u($l("mini-x.glb")),u($l("virus-small.glb")),u($l("virus-boss.glb"))]),b={scene:l,camera:c,renderer:o,viewport:{width:1,height:1},lowPower:s,mobile:n,sound:(U,te)=>i.play(U,te),hasSample:U=>i.has(U),particles:new El(l,s?360:800),projectiles:[],fx:[],scale:1,px:U=>U*b.scale,miniSize:()=>(n?112:158)*(window.innerWidth<900&&!n?.88:1),enemyScale:U=>b.px(U==="boss"?300:215),screenToWorld:(U,te)=>new A(U-b.viewport.width/2,b.viewport.height/2-te,0),worldToScreen:U=>{let te=U.clone().project(c);return{x:(te.x+1)/2*b.viewport.width,y:(1-te.y)/2*b.viewport.height}},exclusionRects:()=>p,pointOfInterest:()=>{let U=Array.from(document.querySelectorAll("h1, h2, .frame, .sk, .certcard")).filter(De=>{let Ze=De.getBoundingClientRect();return Ze.bottom>40&&Ze.top<innerHeight-40&&Ze.width>0});if(!U.length)return null;let te=U[Math.floor(Math.random()*U.length)].getBoundingClientRect();return{x:te.left+te.width*Math.random(),y:te.top+te.height/2}},chatRect:()=>x.rect()};b.scale=n?.7:1;let p=[],m=document.querySelector(".rail"),_=".nav, .totop, .minix-dock, .rail, h1, .btn, .chip",M=()=>{let U=m?.getBoundingClientRect();b.viewport.railRight=U?.width>0?Math.max(0,U.right)+8:0,p=Array.from(document.querySelectorAll(_)).map(te=>te.getBoundingClientRect()).filter(te=>te.width>0&&te.height>0&&te.bottom>0&&te.top<innerHeight).map(te=>({x:te.left,y:te.top,width:te.width,height:te.height}))};function y(){let U=window.innerWidth,te=window.innerHeight;b.viewport.width=U,b.viewport.height=te,b.viewport.pad=b.miniSize()*.68+8,o.setSize(U,te),c.aspect=U/te,c.fov=cu;let De=te/2/Math.tan(ci.degToRad(cu/2));c.position.set(0,0,De),c.near=Math.max(1,De-2500),c.far=De+2500,c.lookAt(0,0,0),c.updateProjectionMatrix(),b.particles.uniforms.uScale.value=o.getPixelRatio(),M()}y(),window.addEventListener("resize",y);let w=new Hl(d,l);ya(f.scene),ya(g.scene);let v=new Kl(b,w,{small:f.scene,boss:g.scene}),x=ip(U=>{let te=v.chatOpen;v.chatOpen=U.open,v.chatBusy=U.busy,U.open&&!te&&(v.abortBattle("chat"),v.brain.cancelScrollFlight(),v._toIdle())}),S=a.motion==="reduced";v.quiet=S,v.calm=S;let P=!1;try{P=sessionStorage.getItem("minix-intro")==="1"}catch{}if(S||P)v.brain.start(b.viewport),v._toIdle();else try{sessionStorage.setItem("minix-intro","1")}catch{}v.on("hello",()=>{e.say("Hi! I\u2019m Mini-X. Click me to ask about Mukramin.",4200),!a.hinted&&a.battles&&(setTimeout(()=>{!v.chatOpen&&v.mode==="idle"&&e.say("Click empty space to spawn a virus. Press and hold for a boss!",5200)},4400),a.hinted=!0,Yl(a))}),v.on("spawn",U=>{e.announce(U.kind==="boss"?"A boss virus appeared. Mini-X is fighting it.":"A virus appeared. Mini-X is fighting it."),U.kind==="boss"&&Math.random()<.7&&e.say(["Whoa, big one!","Boss incoming!","Shields up!"][Math.floor(Math.random()*3)],1600)});let C=-1/0;v.on("dodge",({cinematic:U,dir:te})=>{i.play("dodge",{dir:te}),U&&performance.now()-C>1100&&Math.random()<.55&&e.say(Math.random()<.5?"Hmm, easy.":"Nice try.",1600)}),v.on("clash",({dual:U})=>e.say(U?"Both of you?! Kamehameha!":"Kamehameha!",1400)),v.on("clashResult",({win:U,orb:te})=>e.say(U?te?"Gotcha!":"Take that!":"Argh!",1200)),v.on("downed",()=>{e.say("Agh\u2026!",900),e.announce("Mini-X was knocked down.")}),v.on("taunt",({text:U,at:te,radius:De})=>e.foeSay(U,te.x,te.y-De-70,2700)),v.on("line",({who:U,text:te,ms:De,at:Ze,radius:ut})=>{U==="mini"?e.say(te,De):e.foeSay(te,Ze.x,Ze.y-ut-70,De),e.announce((U==="mini"?"Mini-X: ":"Virus: ")+te)});let D=-1/0;v.on("foeDodge",({ok:U,at:te,radius:De,target:Ze})=>{let ut=performance.now();if(!Ze||ut-D<2600||Math.random()>.4)return;D=ut;let Ct=U?["Too slow!","Missed me!","Hah! Over here!","Nope!"]:["Wha\u2014?!","Can\u2019t\u2026 dodge\u2026!","Too fast!"];e.foeSay(Ct[Math.floor(Math.random()*Ct.length)],te.x,te.y-De-60,1300)}),v.on("whiff",()=>{Math.random()<.6&&e.say(["Tch, it dodged!","Slippery\u2026","Missed?!"][Math.floor(Math.random()*3)],1200)}),v.on("orbClash",({grind:U,kind:te,at:De,radius:Ze})=>{let ut=te==="rasengan"?"Rasengan":"Chidori";e.say(U?ut+"!!":ut+"!",1300),U&&Math.random()<.6&&setTimeout(()=>e.foeSay(["Crush him!","Grrraaah!","You can\u2019t hold this!"][Math.floor(Math.random()*3)],De.x,De.y-Ze-70,1500),1300)}),v.on("grind",({duration:U,kind:te})=>{te==="rasengan"?(b.sound("rasengan",{duration:U+.3}),b.sound("grind",{duration:U,rasengan:!0})):i.has("boltCharge")?(b.sound("boltCharge",{offset:.7,duration:U+.3}),b.sound("grind",{duration:U,noCrackle:!0})):b.sound("grind",{duration:U})});let k=3;v.on("kame",({release:U,full:te})=>{if(!i.has("charge"))return;let De=Math.max(0,k-U),Ze=Math.max(0,U-k);b.sound("charge",{offset:De,delay:Ze,duration:k-De+(te?1.9:1.4)})}),v.on("soundStop",U=>[].concat(U).forEach(te=>i.stop(te)));let V=.9,L=3.2,q=3.55;v.on("rasen",({release:U})=>{if(!i.has("rasenganVoice"))return;let te=Math.max(0,q-U);b.sound("rasenganVoice",{offset:te,duration:U+1.4})});let O=null,G=null,ie=0;v.on("swapCast",()=>e.say("Amenotejikara!",1500)),v.on("swap",({plan:U,at:te,radius:De,from:Ze,to:ut,size:Ct})=>{if(!v.calm&&!matchMedia("(prefers-reduced-motion: reduce)").matches){O||(O=document.createElement("div"),O.className="minix-swapfx",O.setAttribute("aria-hidden","true"),document.body.appendChild(O)),G||(G=document.createElement("div"),G.className="minix-warp",G.setAttribute("aria-hidden","true"),document.body.appendChild(G));let N=(Ne,R)=>{Ne.classList.remove(R),Ne.offsetWidth,Ne.classList.add(R)};N(O,"is-on"),N(r,"is-swapblur"),ie=performance.now()+1500;let Vt=ut.x-Ze.x,rt=ut.y-Ze.y,dt=Math.hypot(Vt,rt),ae=Math.atan2(rt,Vt)*180/Math.PI,xt=(Ne,R,T,B)=>`<i class="minix-warp__blot" style="left:${Ne}px;top:${R}px;width:${T}px;height:${T}px;rotate:${ae+(B?180:0)}deg"></i><i class="minix-warp__ring" style="left:${Ne}px;top:${R}px;width:${T*.9}px;height:${T*.9}px"></i>`,Ie=Math.max(34,Math.min(Ct,De*2)*.42);G.innerHTML=`<i class="minix-warp__smear" style="left:${Ze.x}px;top:${Ze.y-Ie/2}px;width:${dt}px;height:${Ie}px;rotate:${ae}deg"></i>`+xt(ut.x,ut.y,Ct*1.25,!1)+xt(Ze.x,Ze.y,Math.max(De*3.1,Ct*.9),!0),clearTimeout(G._t),G._t=setTimeout(()=>{G.innerHTML="",r.classList.remove("is-swapblur"),O.classList.remove("is-on")},1300)}e.announce("Mini-X swapped places with a virus."),Math.random()<(U==="betray"?.35:.6)&&setTimeout(()=>e.foeSay(["What?!","Huh?!","Where did he\u2014?!"][Math.floor(Math.random()*3)],te.x,te.y-De-60,1300),320)});let W=null,j='<svg class="minix-amacut__eye" viewBox="-120 -70 240 140" aria-hidden="true"><defs><radialGradient id="mxIris" r="0.5"><stop offset="0" stop-color="#ff5468"/><stop offset=".55" stop-color="#e0102e"/><stop offset="1" stop-color="#5a0010"/></radialGradient><filter id="mxGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M-116 0 C-62 -64 62 -64 116 0 C62 64 -62 64 -116 0Z" fill="#050407" stroke="#2a0a10" stroke-width="2"/><g class="minix-amacut__veins" stroke="#7a0a1e" stroke-width="1.2" fill="none" opacity=".8"><path d="M-46 4 C-70 10 -84 2 -100 8"/><path d="M-44 -12 C-66 -24 -80 -18 -94 -26"/><path d="M46 -6 C70 -16 84 -8 100 -14"/><path d="M44 14 C64 26 82 20 96 28"/></g><g class="minix-amacut__sigil" filter="url(#mxGlow)"><circle r="44" fill="url(#mxIris)"/><circle r="38" fill="none" stroke="#ffd2d8" stroke-width="1.6" opacity=".9"/>'+Array.from({length:12},(U,te)=>`<rect x="-1.2" y="-43" width="2.4" height="${te%3?4:7}" fill="#ffd2d8" transform="rotate(${te*30})"/>`).join("")+[0,90,180,270].map(U=>`<path d="M0 -29 A29 29 0 0 1 20.5 -20.5" transform="rotate(${U+22})" fill="none" stroke="#ff9aa8" stroke-width="3" stroke-linecap="round"/>`).join("")+'<g fill="#ffe8eb"><path d="M-21 -17 L-17 -21 L21 17 L17 21Z"/><path d="M17 -21 L21 -17 L-17 21 L-21 17Z"/></g><polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="#1a0004" stroke="#ffd2d8" stroke-width="1.2"/></g></svg>';v.on("amaCast",()=>{e.say("Amaterasu!",1600),!(v.calm||matchMedia("(prefers-reduced-motion: reduce)").matches)&&(O||(O=document.createElement("div"),O.className="minix-swapfx",O.setAttribute("aria-hidden","true"),document.body.appendChild(O)),W||(W=document.createElement("div"),W.className="minix-amacut",W.setAttribute("aria-hidden","true"),W.innerHTML='<div class="minix-amacut__lines"></div>'+j,document.body.appendChild(W)),O.classList.remove("is-on","is-ama","is-cut"),W.classList.remove("is-on"),O.offsetWidth,O.classList.add("is-on","is-cut"),W.classList.add("is-on"),ie=performance.now()+1100,clearTimeout(W._t),W._t=setTimeout(()=>{W.classList.remove("is-on"),O.classList.remove("is-cut"),O.classList.contains("is-ama")||O.classList.remove("is-on")},1e3))}),v.on("amaterasu",({at:U,radius:te})=>{!v.calm&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&(O||(O=document.createElement("div"),O.className="minix-swapfx",O.setAttribute("aria-hidden","true"),document.body.appendChild(O)),O.classList.remove("is-on","is-ama","is-cut"),O.offsetWidth,O.classList.add("is-on","is-ama"),ie=performance.now()+1200,clearTimeout(O._t),O._t=setTimeout(()=>O.classList.remove("is-on","is-ama"),1e3)),e.announce("Mini-X set a virus on fire with black flames."),Math.random()<.7&&setTimeout(()=>e.foeSay(["It burns!","Black fire?!","Put it out!","It won\u2019t go out!"][Math.floor(Math.random()*4)],U.x,U.y-te-60,1500),450)}),v.on("katon",({release:U,voiced:te})=>{b.sound("katonSeal",{duration:Math.min(1.2,U*.5)}),te&&b.sound("katonShout",{offset:V,delay:Math.max(0,U-(L-V))})}),v.on("katonSay",()=>e.say("Katon\u2026",1100)),v.on("chibakuCast",({voiced:U,cast:te})=>{e.say("Chibaku Tensei!",Math.max(1600,te*1e3)),b.sound("chibaku",U?{}:{duration:te+5.5})}),v.on("chibakuPull",({at:U,radius:te})=>{e.announce("Mini-X pulled the viruses into a sphere of rock."),Math.random()<.7&&setTimeout(()=>e.foeSay(["Can\u2019t\u2026 move!","It\u2019s pulling us in!","Let us out!"][Math.floor(Math.random()*3)],U.x,U.y-te-60,1500),500)}),v.on("chibakuBoom",({boosted:U})=>{e.announce(U?"Mini-X blew the sphere apart with a Kamehameha.":"The sphere of rock exploded."),U&&Math.random()<.7&&setTimeout(()=>e.say("Finished.",1300),400)}),v.on("backshot",({at:U,radius:te})=>{e.announce("Mini-X teleported behind the virus for a Kamehameha."),Math.random()<.6&&e.foeSay(["Behind me?!","When did he\u2014?!","Where\u2014?!"][Math.floor(Math.random()*3)],U.x,U.y-te-60,1300)});let ee={2:["killDouble","DOUBLE KILL"],3:["killTriple","TRIPLE KILL"],4:["killUltra","ULTRA KILL"],5:["killRampage","RAMPAGE"]},ce=null;v.on("multikill",({n:U})=>{let[te,De]=ee[U];i.play(te),e.announce(De.charAt(0)+De.slice(1).toLowerCase()+"."),ce||(ce=document.createElement("div"),ce.className="minix-announce",ce.setAttribute("aria-hidden","true"),document.body.appendChild(ce)),ce.textContent=De,ce.dataset.n=U,ce.classList.remove("is-on"),ce.offsetWidth,ce.classList.add("is-on"),clearTimeout(ce._t),ce._t=setTimeout(()=>ce.classList.remove("is-on"),1900)}),v.on("slam",({variant:U,at:te,radius:De})=>{e.announce(U==="above"?"Mini-X teleported above the virus with a Rasengan.":"Mini-X teleported behind the virus with a Rasengan."),Math.random()<.7&&e.foeSay((U==="above"?["Above me?!","Up there?!","Where\u2014?!"]:["Behind me?!","My back\u2014!","Where\u2014?!"])[Math.floor(Math.random()*3)],te.x,te.y-De-60,1300)});let ke=-1/0;v.on("friendlyFire",({at:U,radius:te})=>{performance.now()-ke<2500||(ke=performance.now(),e.foeSay(["Watch it!","Not me, you idiot!","Hey! Aim at HIM!","Traitor!"][Math.floor(Math.random()*4)],U.x,U.y-te-60,1500))}),v.on("teleport",()=>{Math.random()<.7&&e.say(["Too slow!","Over here!","Blink!"][Math.floor(Math.random()*3)],1100)}),v.on("hit",()=>{i.play("hit"),e.say(Math.random()<.7?"Ouch!":"That stung.",1250),C=performance.now()}),v.on("sound",U=>{i.has("charge")&&["charge","fullCharge","blast","fullBlast"].includes(U)||(U==="fullCharge"?b.sound("charge",{duration:2.3}):U==="fullBlast"?b.sound("blast",{duration:1.7}):U==="boltCharge"&&i.has("boltCharge")?b.sound("boltCharge",{duration:1.9}):U==="rasengan"&&i.has("rasenganVoice")||U==="katonFire"&&i.has("katonShout")||(U==="teleHop"?b.sound("teleport",i.has("teleport")?{duration:.42}:void 0):b.sound(U,{charge:{duration:1.45},blast:{duration:1},boltCharge:{duration:1},enemyBeam:{duration:1.35},clash:{duration:2.6},virusDie:{duration:2.3,gain:.75},chibakuBoom:{duration:5.1},orbCharge:{duration:.8},rasengan:{duration:2.3}}[U]))),U==="fullCharge"&&e.say("This is my full power\u2026",2200),U==="fullBlast"&&e.say("KAMEHAMEHA!!!",1600),U==="charge"&&e.say("Kame\u2026 hame\u2026",1350),U==="blast"&&e.say("Kamehameha!",1200),U==="boltCharge"&&e.say("Chidori\u2026",950),U==="dash"&&e.say("Chidori!",1100),U==="rasenDash"&&e.say("Rasengan!",1200),U==="katonFire"&&e.say("Goukakyuu no Jutsu!",1500)});let K=!1;v.on("frame",({st:U})=>{!K&&U.speed>=b.px(390)?(K=!0,i.play("boost")):U.speed<b.px(230)&&(K=!1)}),window.addEventListener("click",i.unlock,{capture:!0}),window.addEventListener("keydown",i.unlock,{capture:!0}),v.on("victory",()=>{e.announce("Mini-X won. All viruses are cleared."),Math.random()<.6&&e.say(["System clean!","Virus neutralized.","All clear!"][Math.floor(Math.random()*3)],1800)});let me=Qf({enabled:()=>a.visible&&a.battles&&!document.hidden&&!v.chatOpen,onEnemy:U=>v.summon(U.x,U.y,"small"),onBoss:U=>v.summon(U.x,U.y,"boss"),onPointerMove:U=>v.brain.pointerMove(U.x,U.y)}),ye=U=>v.brain.pointerMove(U.clientX,U.clientY);window.addEventListener("pointermove",ye,{passive:!0});let Ce=window.scrollY,ge=()=>{let U=window.scrollY,te=U-Ce;Ce=U,!(!te||!a.visible||v.quiet||v.chatOpen)&&((v.mode==="intro"||v.mode==="patrol")&&v._toIdle(),v.mode==="idle"&&v.brain.scroll(te,b.viewport))};window.addEventListener("scroll",ge,{passive:!0}),document.addEventListener("click",U=>{U.target.closest&&U.target.closest('a[href^="#"]')&&v.abortBattle("navigate")}),window.addEventListener("hashchange",()=>v.abortBattle("navigate"));let Ue=!0,bt=0,Fe=performance.now(),st=0,at=0,Ke=new A;function Dt(U){bt=requestAnimationFrame(Dt);let te=Math.min(.05,(U-Fe)/1e3);if(Fe=U,!Ue)return;at-=te,at<=0&&(M(),at=1);let De=Pt.frozen?0:Math.max(1,Pt.timeScale|0);for(let Vt=0;Vt<De;Vt++){let rt=v.stepTime(te);st+=rt,v.update(rt,st),b.particles.update(rt);{let dt=b.fx;b.fx=[];let ae=[];for(let xt of dt)xt.update(rt),xt.alive&&ae.push(xt);b.fx=ae.concat(b.fx)}}r.classList.toggle("is-slowmo",v.slowMo>0&&!v.calm&&U>ie);let Ze=v.shake||0;Ze>.05&&(c.position.x=(Math.random()-.5)*2*Ze,c.position.y=(Math.random()-.5)*2*Ze),o.render(l,c),Ze>.05&&(c.position.x=0,c.position.y=0,c.updateMatrixWorld()),w.holder.getWorldPosition(Ke);let ut=b.worldToScreen(Ke),Ct=b.miniSize(),N=w.deploy;e.place({x:ut.x,y:ut.y,w:Ct*(.62-.08*N),h:Ct*(.66+.34*N)},b.viewport.railRight)}bt=requestAnimationFrame(Dt);function Rt(U){Ue=U,i.setEnabled(U&&a.sound),r.style.visibility=U?"visible":"hidden",U||v.abortBattle("hidden"),Fe=performance.now()}document.addEventListener("visibilitychange",()=>Rt(!document.hidden&&a.visible)),t.addEventListener&&t.addEventListener("change",U=>{U.matches&&(a.motion="reduced",e.sync(),Pt.apply(a))});let Pt={ctx:b,character:w,director:v,renderer:o,timeScale:1,apply(U){Rt(U.visible&&!document.hidden),U.battles||v.abortBattle("settings");let te=U.motion==="reduced";te!==S&&(S=te,v.quiet=te,v.calm=te,["idle","quiet","patrol","intro"].includes(v.mode)&&v._toIdle(),v.brain.quiet=!1)},summonCenter(U){a.visible||(a.visible=!0,Yl(a),e.sync(),Pt.apply(a));let te=b.viewport.width*(.35+Math.random()*.3),De=b.viewport.height*(.35+Math.random()*.2);v.brain.quiet=!1,v.summon(te,De,U)},hello(){a.visible&&(w.deployTarget=1,setTimeout(()=>{w.play("WaveHello",{weight:6,fade:.2}),e.say("Hi! Ask me anything about Mukramin.",3e3)},500),setTimeout(()=>{["idle","quiet"].includes(v.mode)&&(w.deployTarget=0)},3200))},dispose(){cancelAnimationFrame(bt),me(),window.removeEventListener("resize",y),window.removeEventListener("pointermove",ye),window.removeEventListener("scroll",ge),window.removeEventListener("click",i.unlock,!0),window.removeEventListener("keydown",i.unlock,!0),i.dispose(),o.dispose(),r.remove()}};return Pt.apply(a),Pt}document.readyState==="complete"?np():window.addEventListener("load",()=>np());export{np as startMiniX};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
