var $u=0,hc=1,Qu=2;var Lr=1,th=2,As=3,bi=0,tn=1,Ke=2,xn=0,Cs=1,Gn=2,dc=3,fc=4,eh=5;var Gi=100,nh=101,ih=102,sh=103,rh=104,ah=200,oh=201,lh=202,ch=203,pc=204,mc=205,uh=206,hh=207,dh=208,fh=209,ph=210,mh=211,gh=212,vh=213,xh=214,Ca=0,La=1,Ra=2,ms=3,Pa=4,Ia=5,Da=6,Na=7,gc=0,yh=1,_h=2,Ln=0,Rr=1,Pr=2,Ir=3,ki=4,Dr=5,Nr=6,Or=7;var vc=300,Si=301,Hi=302,mo=303,go=304,qr=306,Oa=1e3,qn=1001,qa=1002,Re=1003,bh=1004;var Ur=1005;var Ne=1006,vo=1007;var Mi=1008;var an=1009,xc=1010,yc=1011,Ls=1012,xo=1013,Rn=1014,Pn=1015,qe=1016,yo=1017,_o=1018,Rs=1020,_c=35902,bc=35899,Sc=1021,Mc=1022,yn=1023,Un=1026,wi=1027,wc=1028,bo=1029,Ti=1030,So=1031;var Mo=1033,Fr=33776,zr=33777,Br=33778,Gr=33779,wo=35840,To=35841,Eo=35842,Ao=35843,Co=36196,Lo=37492,Ro=37496,Po=37488,Io=37489,kr=37490,Do=37491,No=37808,Oo=37809,qo=37810,Uo=37811,Fo=37812,zo=37813,Bo=37814,Go=37815,ko=37816,Ho=37817,Vo=37818,Wo=37819,Ko=37820,Xo=37821,jo=36492,Zo=36494,Yo=36495,Jo=36283,$o=36284,Hr=36285,Qo=36286;var Qs=2300,Ua=2301,Ea=2302,nc=2303,ic=2400,sc=2401,rc=2402;var Sh=3200;var tl=0,Mh=1,si="",$e="srgb",tr="srgb-linear",er="linear",Jt="srgb";var Aa=7680;var wh=519,Th=512,Eh=513,Ah=514,el=515,Ch=516,Lh=517,nl=518,Rh=519,Tc=35044;var Ec="300 es",An=2e3,gs=2001;function Fd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=nr("canvas");return i.style.display="block",i}var vu={},vs=null;function ir(...i){let t="THREE."+i.shift();vs?vs("log",t,...i):console.log(t,...i)}function Ih(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function At(...i){i=Ih(i);let t="THREE."+i.shift();if(vs)vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=Ih(i);let t="THREE."+i.shift();if(vs)vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in vu||(vu[t]=!0,At(...i))}function Dh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Nh={[Ca]:La,[Ra]:Da,[Pa]:Na,[ms]:Ia,[La]:Ca,[Da]:Ra,[Na]:Pa,[Ia]:ms},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,Zs=Math.PI/180,xs=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ut(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function Bd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function kd(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function Hd(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function Vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xd(i,t){return i+Math.random()*(t-i)}function jd(i){return i*(.5-Math.random())}function Zd(i){i!==void 0&&(xu=i);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yd(i){return i*Zs}function Jd(i){return i*xs}function $d(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cc={DEG2RAD:Zs,RAD2DEG:xs,generateUUID:Qn,clamp:Ut,euclideanModulo:Ac,mapLinear:Bd,inverseLerp:Gd,lerp:Ys,damp:kd,pingpong:Hd,smoothstep:Vd,smootherstep:Wd,randInt:Kd,randFloat:Xd,randFloatSpread:jd,seededRandom:Zd,degToRad:Yd,radToDeg:Jd,isPowerOfTwo:$d,ceilPowerOfTwo:Qd,floorPowerOfTwo:tf,setQuaternionFromProperEuler:ef,normalize:re,denormalize:En},ft=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(p!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+p*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);d=Math.sin(d*M)/E,o=Math.sin(o*M)/E,l=l*d+h*o,c=c*d+f*o,u=u*d+g*o,p=p*d+_*o}else{l=l*d+h*o,c=c*d+f*o,u=u*d+g*o,p=p*d+_*o;let M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*f-c*h,t[e+1]=l*g+u*h+c*p-o*f,t[e+2]=c*g+u*f+o*h-l*p,t[e+3]=u*g-o*p-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"YZX":this._x=h*u*p+c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p-h*f*g;break;case"XZY":this._x=h*u*p-c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p+h*f*g;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new P,yu=new zn,Nt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],M=s[1],E=s[4],y=s[7],T=s[2],w=s[5],L=s[8];return r[0]=a*_+o*M+l*T,r[3]=a*m+o*E+l*w,r[6]=a*d+o*y+l*L,r[1]=c*_+u*M+p*T,r[4]=c*m+u*E+p*w,r[7]=c*d+u*y+p*L,r[2]=h*_+f*M+g*T,r[5]=h*m+f*E+g*w,r[8]=h*d+f*y+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*p+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=p*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pl.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pl.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pl=new Nt,_u=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:_u,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:_u,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var kt=nf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=nr("canvas")),Qi.width=t.width,Qi.height=t.height;let s=Qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Il(s[a].image)):r.push(Il(s[a]))}else r=Il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}var rf=0,Dl=new P,Qe=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=Ne,a=Mi,o=yn,l=an,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Qn(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){At(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){At(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=vc;Qe.DEFAULT_ANISOTROPY=1;var ne=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,T=(d+1)/2,w=(u+h)/4,L=(p+_)/4,x=(g+m)/4;return E>y&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=L/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=L/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(p-_)*(p-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},we=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,p,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,h,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,p,h,f,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*p,g=o*u,_=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*p,g=c*u,_=c*p;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*p,g=c*u,_=c*p;e[0]=h-_*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*p,g=o*u,_=o*p;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*p,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*p,e[8]=g*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+g,e[10]=h-_*p}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=h*p+_,e[5]=a*u,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*u,e[10]=_*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,of)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),li.crossVectors(n,ln),li.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),li.crossVectors(n,ln)),li.normalize(),na.crossVectors(ln,li),s[0]=li.x,s[4]=na.x,s[8]=ln.x,s[1]=li.y,s[5]=na.y,s[9]=ln.y,s[2]=li.z,s[6]=na.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],E=n[7],y=n[11],T=n[15],w=s[0],L=s[4],x=s[8],S=s[12],C=s[1],R=s[5],D=s[9],N=s[13],I=s[2],z=s[6],V=s[10],W=s[14],et=s[3],X=s[7],Q=s[11],nt=s[15];return r[0]=a*w+o*C+l*I+c*et,r[4]=a*L+o*R+l*z+c*X,r[8]=a*x+o*D+l*V+c*Q,r[12]=a*S+o*N+l*W+c*nt,r[1]=u*w+p*C+h*I+f*et,r[5]=u*L+p*R+h*z+f*X,r[9]=u*x+p*D+h*V+f*Q,r[13]=u*S+p*N+h*W+f*nt,r[2]=g*w+_*C+m*I+d*et,r[6]=g*L+_*R+m*z+d*X,r[10]=g*x+_*D+m*V+d*Q,r[14]=g*S+_*N+m*W+d*nt,r[3]=M*w+E*C+y*I+T*et,r[7]=M*L+E*R+y*z+T*X,r[11]=M*x+E*D+y*V+T*Q,r[15]=M*S+E*N+y*W+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15],M=l*f-c*h,E=o*f-c*p,y=o*h-l*p,T=a*f-c*u,w=a*h-l*u,L=a*p-o*u;return e*(_*M-m*E+d*y)-n*(g*M-m*T+d*w)+s*(g*E-_*T+d*L)-r*(g*y-_*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=e*o-n*a,E=e*l-s*a,y=e*c-r*a,T=n*l-s*o,w=n*c-r*o,L=s*c-r*l,x=u*_-p*g,S=u*m-h*g,C=u*d-f*g,R=p*m-h*_,D=p*d-f*_,N=h*d-f*m,I=M*N-E*D+y*R+T*C-w*S+L*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*N-l*D+c*R)*z,t[1]=(s*D-n*N-r*R)*z,t[2]=(_*L-m*w+d*T)*z,t[3]=(h*w-p*L-f*T)*z,t[4]=(l*C-a*N-c*S)*z,t[5]=(e*N-s*C+r*S)*z,t[6]=(m*y-g*L-d*E)*z,t[7]=(u*L-h*y+f*E)*z,t[8]=(a*D-o*C+c*x)*z,t[9]=(n*C-e*D-r*x)*z,t[10]=(g*w-_*y+d*M)*z,t[11]=(p*y-u*w-f*M)*z,t[12]=(o*S-a*R-l*x)*z,t[13]=(e*R-n*S+s*x)*z,t[14]=(_*E-g*T-m*M)*z,t[15]=(u*T-p*E+h*M)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,h=r*c,f=r*u,g=r*p,_=a*u,m=a*p,d=o*p,M=l*c,E=l*u,y=l*p,T=n.x,w=n.y,L=n.z;return s[0]=(1-(_+d))*T,s[1]=(f+y)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+d))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+E)*L,s[9]=(m-M)*L,s[10]=(1-(h+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let c=1/a,u=1/o,p=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=p,Sn.elements[9]*=p,Sn.elements[10]*=p,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===gs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===An)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===gs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new P,Sn=new ae,af=new P(0,0,0),of=new P(1,1,1),li=new P,na=new P,ln=new P,Su=new ae,Mu=new zn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lf=0,wu=new P,es=new zn,jn=new ae,ia=new P,Vs=new P,cf=new P,uf=new zn,Tu=new P(1,0,0),Eu=new P(0,1,0),Au=new P(0,0,1),Cu={type:"added"},hf={type:"removed"},ns={type:"childadded",child:null},Nl={type:"childremoved",child:null},Oe=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new ei,n=new zn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Vs,ia,this.up):jn.lookAt(ia,Vs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(jn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),ns.child=t,this.dispatchEvent(ns),ns.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new P(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=Ac(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ol(a,r,t+1/3),this.g=Ol(a,r,t),this.b=Ol(a,r,t-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return kt.workingToColorSpace(He.copy(this),t),Math.round(Ut(He.r*255,0,255))*65536+Math.round(Ut(He.g*255,0,255))*256+Math.round(Ut(He.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=$e){kt.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(sa);let n=Ys(ci.h,sa.h,e),s=Ys(ci.s,sa.s,e),r=Ys(ci.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Ct;Ct.NAMES=Oh;var rr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ar=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mn=new P,Zn=new P,ql=new P,Yn=new P,is=new P,ss=new P,Lu=new P,Ul=new P,Fl=new P,zl=new P,Bl=new ne,Gl=new ne,kl=new ne,fi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Zn.subVectors(n,e),ql.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(Zn),l=Mn.dot(ql),c=Zn.dot(Zn),u=Zn.dot(ql),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bl.setScalar(0),Gl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bl,r.x),a.addScaledVector(Gl,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Zn.subVectors(t,e),Mn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;is.subVectors(s,n),ss.subVectors(r,n),Ul.subVectors(t,n);let l=is.dot(Ul),c=ss.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,s);let u=is.dot(Fl),p=ss.dot(Fl);if(u>=0&&p<=u)return e.copy(s);let h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(is,a);zl.subVectors(t,r);let f=is.dot(zl),g=ss.dot(zl);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ss,o);let m=u*g-f*p;if(m<=0&&p-u>=0&&f-g>=0)return Lu.subVectors(r,s),o=(p-u)/(p-u+(f-g)),e.copy(s).addScaledVector(Lu,o);let d=1/(m+_+h);return a=_*d,o=h*d,e.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},un=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),aa.subVectors(this.max,Ws),rs.subVectors(t.a,Ws),as.subVectors(t.b,Ws),os.subVectors(t.c,Ws),ui.subVectors(as,rs),hi.subVectors(os,as),Li.subVectors(rs,os);let e=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Li.z,Li.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Li.y,Li.x,0];return!Hl(e,rs,as,os,aa)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,rs,as,os,aa))?!1:(oa.crossVectors(ui,hi),e=[oa.x,oa.y,oa.z],Hl(e,rs,as,os,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new P,new P,new P,new P,new P,new P,new P,new P],wn=new P,ra=new un,rs=new P,as=new P,os=new P,ui=new P,hi=new P,Li=new P,Ws=new P,aa=new P,oa=new P,Ri=new P;function Hl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Me=new P,la=new ft,ff=0,We=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Dt=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},pf=new un,Ks=new P,Vl=new P,gn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Vl)),this.expandByPoint(Ks.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mf=0,mn=new ae,Wl=new Oe,ls=new P,cn=new un,Xs=new un,Le=new P,Zt=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?lr:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(cn.min,Xs.min),cn.expandByPoint(Le),Le.addVectors(cn.max,Xs.max),cn.expandByPoint(Le)):(cn.expandByPoint(Xs.min),cn.expandByPoint(Xs.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),Le.add(ls)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;let c=new P,u=new P,p=new P,h=new ft,f=new ft,g=new ft,_=new P,m=new P;function d(x,S,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),p.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),u.sub(c),p.sub(c),f.sub(h),g.sub(h);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(R),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[x].add(_),o[S].add(_),o[C].add(_),l[x].add(m),l[S].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,S=M.length;x<S;++x){let C=M[x],R=C.start,D=C.count;for(let N=R,I=R+D;N<I;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let E=new P,y=new P,T=new P,w=new P;function L(x){T.fromBufferAttribute(s,x),w.copy(T);let S=o[x];E.copy(S),E.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(w,S);let R=y.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,S=M.length;x<S;++x){let C=M[x],R=C.start,D=C.count;for(let N=R,I=R+D;N<I;N+=3)L(t.getX(N+0)),L(t.getX(N+1)),L(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,p=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[f++]}return new We(h,u,p)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Je=new P,Cn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kl=new P,gf=new P,vf=new Nt,Tn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kl.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vf.getNormalMatrix(t),s=this.coplanarPoint(Kl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xf=0,Bn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Cs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $n=new P,Xl=new P,ca=new P,ua=new P,Ni=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ua.dot(this.direction),l=-ua.dot(ca),c=ua.lengthSq(),u=Math.abs(1-a*a),p,h,f,g;if(u>0)if(p=a*l-o,h=a*o-l,g=r*u,p>=0)if(h>=-g)if(h<=g){let _=1/u;p*=_,h*=_,f=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Xl).addScaledVector(ca,h),f}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,d=n.x-a.x,M=n.y-a.y,E=n.z-a.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(u),L,x,S,C,R,D,N,I,z,V,W,et;if(y>=T&&y>=w?(S=l,D=p,z=g,et=d,l>=0?(L=c,x=u,C=h,R=f,N=_,I=m,V=M,W=E):(L=u,x=c,C=f,R=h,N=m,I=_,V=E,W=M)):T>=w?(S=c,D=h,z=_,et=M,c>=0?(L=u,x=l,C=f,R=p,N=m,I=g,V=E,W=d):(L=l,x=u,C=p,R=f,N=g,I=m,V=d,W=E)):(S=u,D=f,z=m,et=E,u>=0?(L=l,x=c,C=p,R=h,N=g,I=_,V=d,W=M):(L=c,x=l,C=h,R=p,N=_,I=g,V=M,W=d)),S===0)return null;let X=L/S,Q=x/S,nt=1/S,Lt=C-X*D,Tt=R-Q*D,ce=N-X*z,Xt=I-Q*z,$t=V-X*et,j=W-Q*et,$=$t*Xt-j*ce,xt=Lt*j-Tt*$t,qt=ce*Tt-Xt*Lt;if(s){if($<0||xt<0||qt<0)return null}else if(($<0||xt<0||qt<0)&&($>0||xt>0||qt>0))return null;let gt=$+xt+qt;if(gt===0)return null;let Gt=nt*($*D+xt*z+qt*et);return(gt>0?Gt<0:Gt>0)?null:this.at(Gt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ru=new ae,Pi=new Ni,ha=new gn,Pu=new P,da=new P,fa=new P,pa=new P,jl=new P,ma=new P,Iu=new P,ga=new P,Wt=class extends Oe{constructor(t=new Zt,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(jl.fromBufferAttribute(p,t),a?ma.addScaledVector(jl,u):ma.addScaledVector(jl.sub(e),u))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(ha.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ha,Pu)===null||Pi.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=E;y<T;y+=3){let w=o.getX(y),L=o.getX(y+1),x=o.getX(y+2);s=va(this,d,t,n,c,u,p,w,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let M=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=va(this,a,t,n,c,u,p,M,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=E;y<T;y+=3){let w=y,L=y+1,x=y+2;s=va(this,d,t,n,c,u,p,w,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let M=m,E=m+1,y=m+2;s=va(this,a,t,n,c,u,p,M,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function yf(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:i}}function va(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let u=yf(i,t,e,n,da,fa,pa,Iu);if(u){let p=new P;fi.getBarycoord(Iu,da,fa,pa,p),s&&(u.uv=fi.getInterpolatedAttribute(s,o,l,c,p,new ft)),r&&(u.uv1=fi.getInterpolatedAttribute(r,o,l,c,p,new ft)),a&&(u.normal=fi.getInterpolatedAttribute(a,o,l,c,p,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};fi.getNormal(da,fa,pa,h.normal),u.face=h,u.barycoord=p}return u}var ka=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,u=Re,p,h){super(null,a,o,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new gn,_f=new ft(.5,.5),xa=new P,Ss=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],d=r[11],M=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,d-g,T-M).normalize(),s[1].setComponents(c+a,f+u,d+g,T+M).normalize(),s[2].setComponents(c+o,f+p,d+_,T+E).normalize(),s[3].setComponents(c-o,f-p,d-_,T-E).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,d-m,T-y).normalize();else if(s[4].setComponents(c-l,f-h,d-m,T-y).normalize(),e===An)s[5].setComponents(c+l,f+h,d+m,T+y).normalize();else if(e===gs)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=_f.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Oi=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new P,Va=new P,Du=new ae,js=new Ni,ya=new gn,Zl=new P,Nu=new P,qi=class extends Oe{constructor(t=new Zt,e=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);t.setAttribute("lineDistance",new Dt(n,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Du.copy(s).invert(),js.copy(t.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let d=u.getX(_),M=u.getX(_+1),E=_a(this,t,js,l,d,M,_);E&&e.push(E)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),d=_a(this,t,js,l,_,m,g-1);d&&e.push(d)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let d=_a(this,t,js,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){let _=_a(this,t,js,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _a(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),e.distanceSqToSegment(Ha,Va,Zl,Nu)>n)return;Zl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zl);if(!(c<t.near||c>t.far))return{distance:c,point:Nu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ou=new P,qu=new P,Ui=class extends qi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ou.fromBufferAttribute(e,s),qu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ou.distanceTo(qu);t.setAttribute("lineDistance",new Dt(n,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fi=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new ae,ac=new Ni,ba=new gn,Sa=new P,Ms=class extends Oe{constructor(t=new Zt,e=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;Uu.copy(s).invert(),ac.copy(t.ray).applyMatrix4(Uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let m=c.getX(g);Sa.fromBufferAttribute(p,m),Fu(Sa,m,l,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Sa.fromBufferAttribute(p,g),Fu(Sa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(i,t,e,n,s,r,a){let o=ac.distanceSqToPoint(i);if(o<e){let l=new P;ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var cr=class extends Qe{constructor(t=[],e=Si,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ur=class extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends Qe{constructor(t,e,n=Rn,s,r,a,o=Re,l=Re,c,u=Un,p=1){if(u!==Un&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wa=class extends pi{constructor(t,e=Rn,n=Si,s,r,a=Re,o=Re,l,c=Un){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hr=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ni=class i extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2));function g(_,m,d,M,E,y,T,w,L,x,S){let C=y/L,R=T/x,D=y/2,N=T/2,I=w/2,z=L+1,V=x+1,W=0,et=0,X=new P;for(let Q=0;Q<V;Q++){let nt=Q*R-N;for(let Lt=0;Lt<z;Lt++){let Tt=Lt*C-D;X[_]=Tt*M,X[m]=nt*E,X[d]=I,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[d]=w>0?1:-1,u.push(X.x,X.y,X.z),p.push(Lt/L),p.push(1-Q/x),W+=1}}for(let Q=0;Q<x;Q++)for(let nt=0;nt<L;nt++){let Lt=h+nt+z*Q,Tt=h+nt+z*(Q+1),ce=h+(nt+1)+z*(Q+1),Xt=h+(nt+1)+z*Q;l.push(Lt,Tt,Xt),l.push(Tt,ce,Xt),et+=6}o.addGroup(f,et,S),f+=et,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var dr=class i extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,u=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=e;p++,h+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(o,3)),this.setAttribute("uv",new Dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ws=class i extends Zt{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],h=[],f=[],g=0,_=[],m=n/2,d=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(f,2));function M(){let y=new P,T=new P,w=0,L=(e-t)/n;for(let x=0;x<=r;x++){let S=[],C=x/r,R=C*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,I=N*l+o,z=Math.sin(I),V=Math.cos(I);T.x=R*z,T.y=-C*n+m,T.z=R*V,p.push(T.x,T.y,T.z),y.set(z,L,V).normalize(),h.push(y.x,y.y,y.z),f.push(N,1-C),S.push(g++)}_.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let C=_[S][x],R=_[S+1][x],D=_[S+1][x+1],N=_[S][x+1];(t>0||S!==0)&&(u.push(C,R,N),w+=3),(e>0||S!==r-1)&&(u.push(R,D,N),w+=3)}c.addGroup(d,w,0),d+=w}function E(y){let T=g,w=new ft,L=new P,x=0,S=y===!0?t:e,C=y===!0?1:-1;for(let D=1;D<=s;D++)p.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),g++;let R=g;for(let D=0;D<=s;D++){let I=D/s*l+o,z=Math.cos(I),V=Math.sin(I);L.x=S*V,L.y=m*C,L.z=S*z,p.push(L.x,L.y,L.z),h.push(0,C,0),w.x=z*.5+.5,w.y=V*.5*C+.5,f.push(w.x,w.y),g++}for(let D=0;D<s;D++){let N=T+D,I=R+D;y===!0?u.push(I,I+1,N):u.push(I+1,I,N),x+=3}c.addGroup(d,x,y===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){At("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ut(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*p+this.aX,c=h*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends fr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var zu=new P,Bu=new P,Yl=new Lc,Jl=new Lc,$l=new Lc,Ts=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Bu.subVectors(s[0],s[1]).add(s[0]),c=Bu);let p=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yl.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,g,_,m),Jl.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,g,_,m),$l.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),Jl.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),$l.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return n.set(Yl.calc(l),Jl.calc(l),$l.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function bf(i,t){let e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function Mf(i,t){return i*i*t}function Js(i,t,e,n){return bf(i,t)+Sf(i,e)+Mf(i,n)}function wf(i,t){let e=1-i;return e*e*e*t}function Tf(i,t){let e=1-i;return 3*e*e*i*t}function Ef(i,t){return 3*(1-i)*i*i*t}function Af(i,t){return i*i*i*t}function $s(i,t,e,n,s){return wf(i,t)+Tf(i,e)+Ef(i,n)+Af(i,s)}var Xa=class extends vn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends vn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends vn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends vn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends vn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zi=class extends vn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Gu(o,l.x,c.x,u.x,p.x),Gu(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Ts,CubicBezierCurve:Xa,CubicBezierCurve3:ja,EllipseCurve:fr,LineCurve:Za,LineCurve3:Ya,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:zi,SplineCurve:$a});var pr=class i extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,h=e/l,f=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let M=d*h-a;for(let E=0;E<c;E++){let y=E*p-r;g.push(y,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let E=M+c*d,y=M+c*(d+1),T=M+1+c*(d+1),w=M+1+c*d;f.push(E,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bi=class i extends Zt{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],p=t,h=(e-t)/s,f=new P,g=new ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*a;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}p+=h}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let M=d+m,E=M,y=M+n+1,T=M+n+2,w=M+1;o.push(E,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ii=class i extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new P,h=new P,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let M=[],E=d/n,y=a+E*o,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T),L=0;d===0&&a===0?L=.5/e:d===n&&l===Math.PI&&(L=-.5/e);for(let x=0;x<=e;x++){let S=x/e,C=s+S*r;p.x=-w*Math.cos(C),p.y=T,p.z=w*Math.sin(C),g.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),m.push(S+L,1-E),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){let E=u[d][M+1],y=u[d][M],T=u[d+1][M],w=u[d+1][M+1];(d!==0||a>0)&&f.push(E,y,w),(d!==n-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class i extends Zt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],h=new P,f=new P,g=new P;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let d=0;d<=s;d++){let M=d/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),p.push(d/s),p.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let d=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(d,M,y),l.push(M,E,y)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var mr=class i extends Zt{constructor(t=new zi(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ft,u=new P,p=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(f,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),M(),d()}function m(E){u=t.getPointAt(E/e,u);let y=a.normals[E],T=a.binormals[E];for(let w=0;w<=s;w++){let L=w/s*Math.PI*2,x=Math.sin(L),S=-Math.cos(L);l.x=S*y.x+x*T.x,l.y=S*y.y+x*T.y,l.z=S*y.z+x*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){let T=(s+1)*(E-1)+(y-1),w=(s+1)*E+(y-1),L=(s+1)*E+y,x=(s+1)*(E-1)+y;g.push(T,w,x),g.push(w,L,x)}}function M(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Cf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},gr=class extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new P,r=new P;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let p=l[c],h=p.start,f=p.count;for(let g=h,_=h+f;g<_;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),M=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,M),ku(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,p),ku(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ku(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hu(s))s.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var _n={clone:Vi,merge:Xe},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Es=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vr=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qa=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+M*a[c+T]+E*a[l+T]+y*a[p+T];return r}},no=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*p+a[l+h]*u;return r}},io=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},so=class extends gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],d=f*h+g*2,M=p[d],E=p[d+1],y=t*h+g*2,T=u[y],w=u[y+1],L=Df(n,e,M,T,s);r[g]=qh(L,_,E,w,m)}return r}};function qh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function If(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Df(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=qh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=If(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ql(t.settings)&&(n.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new so(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return At("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ql(this.settings)&&(Vu(this.settings.inTangents,t),Vu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&zd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,h=p-n,f=p+n;for(let g=0;g!==n;++g){let _=e[p+g];if(_!==e[h+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Ua;var vi=class extends dn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Qs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};ro.prototype.ValueTypeName="color";var ao=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="number";var oo=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends dn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Qs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="vector";var co=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uh=new co,uo=class{constructor(t){this.manager=t!==void 0?t:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var tc=new ae,Wu=new P,Ku=new P,ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new P,wa=new zn,On=new P,_r=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,wa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,wa,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ma,wa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,wa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new P,Xu=new ft,ju=new ft,Ve=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,ju),e.subVectors(ju,Xu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yi=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oc=class extends ho{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Sr=class extends yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mr=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var us=-90,hs=1,fo=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(us,hs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(us,hs,t,e);r.layers=this.layers,this.add(r);let a=new Ve(us,hs,t,e);a.layers=this.layers,this.add(a);let o=new Ve(us,hs,t,e);o.layers=this.layers,this.add(o);let l=new Ve(us,hs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(us,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},wr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Nf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Nf(){this._document.hidden===!1&&this.reset()}var Pc="\\[\\]\\.:\\/",Of=new RegExp("["+Pc+"]","g"),Ic="[^"+Pc+"]",qf="[^"+Pc.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Ic),Ff=/(WCOD+)?/.source.replace("WCOD",qf),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),Bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),Gf=new RegExp("^"+Uf+Ff+zf+Bf+"$"),kf=["material","materials","bones","map"],lc=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Of,"")}static parseTrackName(t){let e=Gf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=lc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);var _i=class extends Ga{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Zu=new ae,Tr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zu),this}intersectObject(t,e=!0,n=[]){return cc(t,this,n,e),n.sort(Yu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)cc(t[s],this,n,e);return n.sort(Yu),n}};function Yu(i,t){return i.distance-t.distance}function cc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],t,e,!0)}}var Er=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,At("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var uc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Ju=new P,Ta=new P,ds=new P,fs=new P,ec=new P,Hf=new P,Vf=new P,Ar=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ju.subVectors(t,this.start),Ta.subVectors(this.end,this.start);let n=Ta.dot(Ta);if(n===0)return 0;let r=Ta.dot(Ju)/n;return e&&(r=Ut(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Hf,n=Vf){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,u=t.end;ds.subVectors(c,o),fs.subVectors(u,l),ec.subVectors(o,l);let p=ds.dot(ds),h=fs.dot(fs),f=fs.dot(ec);if(p<=s&&h<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=f/h,a=Ut(a,0,1);else{let g=ds.dot(ec);if(h<=s)a=0,r=Ut(-g/p,0,1);else{let _=ds.dot(fs),m=p*h-_*_;m!==0?r=Ut((_*f-g*h)/m,0,1):r=0,a=(_*r+f)/h,a<0?(a=0,r=Ut(-g/p,0,1)):a>1&&(a=1,r=Ut((_-g)/p,0,1))}}return e.copy(o).addScaledVector(ds,r),n.copy(l).addScaledVector(fs,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Cr=class extends Ui{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ct(n),s=new Ct(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,f=0,g=-o;h<=e;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let _=h===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let u=new Zt;u.setAttribute("position",new Dt(l,3)),u.setAttribute("color",new Dt(c,3));let p=new Oi({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Dc(i,t,e,n){let s=Wf(n);switch(e){case Sc:return i*t;case wc:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case Mc:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case Fr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case Co:case Lo:case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case kr:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jo:case Zo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wf(i){switch(i){case an:case xc:return{byteLength:1,components:1};case Ls:case yc:case qe:return{byteLength:2,components:1};case yo:case _o:return{byteLength:2,components:4};case Rn:case xo:case Pn:return{byteLength:4,components:1};case _c:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<p.length;f++){let g=p[h],_=p[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,p[h]=_)}p.length=h+1;for(let f=0,g=p.length;f<g;f++){let _=p[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Kp=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Xp=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,vg=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,xg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,_g=`#define TOON
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
}`,bg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:jf,alphahash_pars_fragment:Zf,alphamap_fragment:Yf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Qf,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:_p,displacementmap_vertex:bp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Mp,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ep,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Bp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Np,gradientmap_pars_fragment:Op,lightmap_pars_fragment:qp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:kp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Kp,lights_fragment_begin:Xp,lights_fragment_maps:jp,lights_fragment_end:Zp,lightprobes_pars_fragment:Yp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:am,morphinstance_vertex:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:um,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:_m,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:Mm,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Em,dithering_pars_fragment:Am,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Im,shadowmask_pars_fragment:Dm,skinbase_vertex:Nm,skinning_pars_vertex:Om,skinning_vertex:qm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:zm,tonemapping_fragment:Bm,tonemapping_pars_fragment:Gm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:Km,worldpos_vertex:Xm,background_vert:jm,background_frag:Zm,backgroundCube_vert:Ym,backgroundCube_frag:Jm,cube_vert:$m,cube_frag:Qm,depth_vert:tg,depth_frag:eg,distance_vert:ng,distance_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:ug,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:vg,meshphysical_vert:xg,meshphysical_frag:yg,meshtoon_vert:_g,meshtoon_frag:bg,points_vert:Sg,points_frag:Mg,shadow_vert:wg,shadow_frag:Tg,sprite_vert:Eg,sprite_frag:Ag},st={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},en={basic:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Xe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Xe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Xe([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Xe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Xe([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Xe([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Xe([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Xe([st.lights,st.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};en.physical={uniforms:Xe([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var il={r:0,b:0,g:0},Cg=new ae,ad=new Nt;ad.set(-1,0,0,0,1,0,0,0,1);function Lg(i,t,e,n,s,r){let a=new Ct(0),o=s===!0?0:1,l,c,u=null,p=0,h=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let y=M.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(M){let E=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===qr)?(c===void 0&&(c=new Wt(new ni(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Vi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ad),c.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,(u!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wt(new pr(2,2),new xe({name:"BackgroundMaterial",uniforms:Vi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(il,Rc(i)),e.buffers.color.setClear(il.r,il.g,il.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:d}}function Rg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,D,N,I,z){let V=!1,W=p(R,I,N,D);r!==W&&(r=W,c(r.object)),V=f(R,I,N,z),V&&g(R,I,N,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(R,D,N,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function p(R,D,N,I){let z=I.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let W=R.isInstancedMesh===!0?R.id:0,et=V[W];et===void 0&&(et={},V[W]=et);let X=et[N.id];X===void 0&&(X={},et[N.id]=X);let Q=X[z];return Q===void 0&&(Q=h(l()),X[z]=Q),Q}function h(R){let D=[],N=[],I=[];for(let z=0;z<e;z++)D[z]=0,N[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:I,object:R,attributes:{},index:null}}function f(R,D,N,I){let z=r.attributes,V=D.attributes,W=0,et=N.getAttributes();for(let X in et)if(et[X].location>=0){let nt=z[X],Lt=V[X];if(Lt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Lt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Lt=R.instanceColor)),nt===void 0||nt.attribute!==Lt||Lt&&nt.data!==Lt.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function g(R,D,N,I){let z={},V=D.attributes,W=0,et=N.getAttributes();for(let X in et)if(et[X].location>=0){let nt=V[X];nt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let Lt={};Lt.attribute=nt,nt&&nt.data&&(Lt.data=nt.data),z[X]=Lt,W++}r.attributes=z,r.attributesNum=W,r.index=I}function _(){let R=r.newAttributes;for(let D=0,N=R.length;D<N;D++)R[D]=0}function m(R){d(R,0)}function d(R,D){let N=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;N[R]=1,I[R]===0&&(i.enableVertexAttribArray(R),I[R]=1),z[R]!==D&&(i.vertexAttribDivisor(R,D),z[R]=D)}function M(){let R=r.newAttributes,D=r.enabledAttributes;for(let N=0,I=D.length;N<I;N++)D[N]!==R[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function E(R,D,N,I,z,V,W){W===!0?i.vertexAttribIPointer(R,D,N,z,V):i.vertexAttribPointer(R,D,N,I,z,V)}function y(R,D,N,I){_();let z=I.attributes,V=N.getAttributes(),W=D.defaultAttributeValues;for(let et in V){let X=V[et];if(X.location>=0){let Q=z[et];if(Q===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){let nt=Q.normalized,Lt=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;let ce=Tt.buffer,Xt=Tt.type,$t=Tt.bytesPerElement,j=Xt===i.INT||Xt===i.UNSIGNED_INT||Q.gpuType===xo;if(Q.isInterleavedBufferAttribute){let $=Q.data,xt=$.stride,qt=Q.offset;if($.isInstancedInterleavedBuffer){for(let gt=0;gt<X.locationSize;gt++)d(X.location+gt,$.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let gt=0;gt<X.locationSize;gt++)E(X.location+gt,Lt/X.locationSize,Xt,nt,xt*$t,(qt+Lt/X.locationSize*gt)*$t,j)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)d(X.location+$,Q.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<X.locationSize;$++)m(X.location+$);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let $=0;$<X.locationSize;$++)E(X.location+$,Lt/X.locationSize,Xt,nt,Lt*$t,Lt/X.locationSize*$*$t,j)}}else if(W!==void 0){let nt=W[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(X.location,nt);break;case 3:i.vertexAttrib3fv(X.location,nt);break;case 4:i.vertexAttrib4fv(X.location,nt);break;default:i.vertexAttrib1fv(X.location,nt)}}}}M()}function T(){S();for(let R in n){let D=n[R];for(let N in D){let I=D[N];for(let z in I){let V=I[z];for(let W in V)u(V[W].object),delete V[W];delete I[z]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let N in D){let I=D[N];for(let z in I){let V=I[z];for(let W in V)u(V[W].object),delete V[W];delete I[z]}}delete n[R.id]}function L(R){for(let D in n){let N=n[D];for(let I in N){let z=N[I];if(z[R.id]===void 0)continue;let V=z[R.id];for(let W in V)u(V[W].object),delete V[W];delete z[R.id]}}}function x(R){for(let D in n){let N=n[D],I=R.isInstancedMesh===!0?R.id:0,z=N[I];if(z!==void 0){for(let V in z){let W=z[V];for(let et in W)u(W[et].object),delete W[et];delete z[V]}delete N[I],Object.keys(N).length===0&&delete n[D]}}}function S(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Pg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==yn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let x=L===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==an&&L!==Pn&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(At("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function Dg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Tn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||s;return s=h,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,f){let g=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,E=M*4,y=d.clippingState||null;l.value=y,y=u(g,h,E,f);for(let T=0;T!==E;++T)y[T]=e[T];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,f,g){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(p[E]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Is=4,Ng=6,Og=20,qg=256,Vr=new yi,Fh=new Ct,Nc=null,Oc=0,qc=0,Uc=!1,Ug=new P,Wi=new P,rl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ug}=r;Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Oc,qc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:qe,format:yn,colorSpace:tr,depthBuffer:!1},s=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fg(r)),this._blurMaterial=Bg(r,t,e),this._ggxMaterial=zg(r,t,e)}return s}_compileMaterial(t){let e=new Wt(new Zt,t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(Fh),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new ni,new hn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,d=!0):(m.color.copy(Fh),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let T=this._cubeSize;Ps(s,y*T,E>2?T:0,T,T),p.setRenderTarget(s),d&&p.render(_,l),p.render(t,l)}p.toneMapping=f,p.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Si||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,f=p*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Is?n-g+Is:0),d=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ps(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(o,Vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ps(t,m,d,3*_,2*_),s.setRenderTarget(t),s.render(o,Vr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-Is?s-this._lodMax+Is:0),h=4*(this._cubeSize-u);Ps(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Vr)}};function Fg(i){let t=[],e=[],n=i,s=i-Is+1+Ng;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,f=3,g=new Float32Array(f*h*p),_=new Float32Array(f*h*p);for(let d=0;d<p;d++){let M=d%3*2/3-1,E=d>2?0:-1,y=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(y,f*h*d);for(let T=0;T<h;T++){let w=u[T*2]*2-1,L=u[T*2+1]*2-1;d===0?Wi.set(1,L,w):d===1?Wi.set(-w,1,-L):d===2?Wi.set(-w,L,1):d===3?Wi.set(-1,L,-w):d===4?Wi.set(-w,-1,L):Wi.set(w,L,-1),Wi.toArray(_,(d*h+T)*f)}}let m=new Zt;m.setAttribute("position",new We(g,f)),m.setAttribute("outputDirection",new We(_,f)),e.push(new Wt(m,null)),n>Is&&n--}return{lodMeshes:e,sizeLods:t}}function zh(i,t,e){let n=new we(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zg(i,t,e){return new xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Bg(i,t,e){return new xe({name:"SphericalGaussianBlur",defines:{SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Bh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Gh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends we{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:xn});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Ne),new fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Gg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===mo||f===go)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new al(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===mo||f===go,_=f===Si||f===Hi;if(g||_){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new rl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new rl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===mo?h.mapping=Si:f===go&&(h.mapping=Hi),h}function l(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(p){let h=p.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(p){let h=[],f=p.index,g=p.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let E=0,y=M.length;E<y;E+=3){let T=M[E+0],w=M[E+1],L=M[E+2];h.push(T,w,w,L,L,T)}}else{let M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let T=E+0,w=E+1,L=E+2;h.push(T,w,w,L,L,T)}}let m=new(g.count>=65535?lr:or)(h,1);m.version=_;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function u(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function Vg(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function c(p,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,p*a,f),e.update(h,n,f))}function u(p,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,t,e){let n=new WeakMap,s=new ne;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*p),L=new sr(w,y,T,p);L.type=Pn,L.needsUpdate=!0;let x=E*4;for(let C=0;C<p;C++){let R=m[C],D=d[C],N=M[C],I=y*T*4*C;for(let z=0;z<R.count;z++){let V=z*x;f===!0&&(s.fromBufferAttribute(R,z),w[I+V+0]=s.x,w[I+V+1]=s.y,w[I+V+2]=s.z,w[I+V+3]=0),g===!0&&(s.fromBufferAttribute(D,z),w[I+V+4]=s.x,w[I+V+5]=s.y,w[I+V+6]=s.z,w[I+V+7]=0),_===!0&&(s.fromBufferAttribute(N,z),w[I+V+8]=s.x,w[I+V+9]=s.y,w[I+V+10]=s.z,w[I+V+11]=N.itemSize===4?s.w:1)}}h={count:p,texture:L,size:new ft(y,T)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Xg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,h=t.get(c,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var jg={[Rr]:"LINEAR_TONE_MAPPING",[Pr]:"REINHARD_TONE_MAPPING",[Ir]:"CINEON_TONE_MAPPING",[ki]:"ACES_FILMIC_TONE_MAPPING",[Nr]:"AGX_TONE_MAPPING",[Or]:"NEUTRAL_TONE_MAPPING",[Dr]:"CUSTOM_TONE_MAPPING"};function Zg(i,t,e,n,s,r){let a=new we(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Zt;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let u=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Wt(c,u),h=new yi(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,d=null,M=[],E=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let w=0;w<M.length;w++){let L=M[w];L.setSize&&L.setSize(y,T)}},this.setEffects=function(y){M=y,E=M.length>0&&M[0].isRenderPass===!0;let T=a.width,w=a.height;M.length>0&&o===null&&(o=new we(T,w,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new we(T,w,{type:qe,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let x=M[L];x.setSize&&x.setSize(T,w)}},this.begin=function(y,T){if(_||y.toneMapping===Ln&&M.length===0)return!1;if(d=T,T!==null){let w=T.width,L=T.height;(a.width!==w||a.height!==L)&&this.setSize(w,L)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ln,!0},this.hasRenderPass=function(){return E},this.end=function(y,T){y.toneMapping=m,_=!0;let w=a,L=o;for(let x=0;x<M.length;x++){let S=M[x];S.enabled!==!1&&(S.render(y,L,w,T),S.needsSwap!==!1&&(w=L,L=L===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},kt.getTransfer(f)===Jt&&(u.defines.SRGB_TRANSFER="");let x=jg[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(p,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var od=new Qe,Bc=new pi(1,1),ld=new sr,cd=new Ba,ud=new cr,kh=[],Hh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Kh=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cl(i,t){let e=Hh[t];e===void 0&&(e=new Int32Array(t),Hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Ae(e,n)}}function e0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Ae(e,n)}}function n0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),Ae(e,n)}}function i0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=e.isReversedDepthBuffer()?nl:el,r=Bc):r=od,e.setTexture2D(t||r,s)}function d0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cd,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ud,s)}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ld,s)}function m0(i){switch(i){case 5126:return Yg;case 35664:return Jg;case 35665:return $g;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function x0(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function y0(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function _0(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function w0(i,t){i.uniform2iv(this.addr,t)}function T0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function A0(i,t){i.uniform1uiv(this.addr,t)}function C0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function P0(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bc:a=od;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cd,r[a])}function D0(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ud,r[a])}function N0(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ld,r[a])}function O0(i){switch(i){case 5126:return g0;case 35664:return v0;case 35665:return x0;case 35666:return y0;case 35674:return _0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return M0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return E0;case 5125:return A0;case 36294:return C0;case 36295:return L0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}var Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}},kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}},Hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Xh(i,t){i.seq.push(t),i.map[t.id]=t}function q0(i,t,e){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let r=Fc.exec(n),a=Fc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xh(e,c===void 0?new Gc(o,i,t):new kc(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Hc(o),Xh(e,p)),e=p}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);q0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function jh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U0=37297,F0=0;function z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zh=new Nt;function B0(i){kt._getMatrix(Zh,kt.workingColorSpace,i);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+z0(i.getShaderSource(t),o)}else return r}function G0(i,t){let e=B0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var k0={[Rr]:"Linear",[Pr]:"Reinhard",[Ir]:"Cineon",[ki]:"ACESFilmic",[Nr]:"AgX",[Or]:"Neutral",[Dr]:"Custom"};function H0(i,t){let e=k0[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new P;function V0(){kt.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function K0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Kr(i){return i!==""}function Jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(j0,Y0)}var Z0=new Map;function Y0(i,t){let e=Bt[t];if(e===void 0){let n=Z0.get(t);if(n!==void 0)e=Bt[n],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vc(e)}var J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(J0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Q0={[Lr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function tv(i){return Q0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ev={[Si]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function nv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ev[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var iv={[Hi]:"ENVMAP_MODE_REFRACTION"};function sv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":iv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rv={[gc]:"ENVMAP_BLENDING_MULTIPLY",[yh]:"ENVMAP_BLENDING_MIX",[_h]:"ENVMAP_BLENDING_ADD"};function av(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rv[i.combine]||"ENVMAP_BLENDING_NONE"}function ov(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=tv(e),c=nv(e),u=sv(e),p=av(e),h=ov(e),f=W0(e),g=K0(r),_=s.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),d.length>0&&(d+=`
`)):(m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),d=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),V0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Vc(a),a=Jh(a,e),a=$h(a,e),o=Vc(o),o=Jh(o,e),o=$h(o,e),a=Qh(a),o=Qh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=M+m+a,y=M+d+o,T=jh(s,s.VERTEX_SHADER,E),w=jh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(w)||"",z=D.trim(),V=N.trim(),W=I.trim(),et=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{let Q=Yh(s,T,"vertex"),nt=Yh(s,w,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Q+`
`+nt)}else z!==""?At("WebGLProgram: Program Info Log:",z):(V===""||W==="")&&(X=!1);X&&(R.diagnostics={runnable:et,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(T),s.deleteShader(w),x=new Ds(s,_),S=X0(s,_)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,U0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var cv=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kc(t),e.set(t,n)),n}},Kc=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function uv(i){return i===Ti||i===kr||i===Hr}function hv(i,t,e,n,s,r){let a=new _s,o=new Wc,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,C,R,D,N){let I=R.fog,z=D.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,et=t.get(x.envMap||V,W),X=et&&et.mapping===qr?et.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&At("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Lt=nt!==void 0?nt.length:0,Tt=0;z.morphAttributes.position!==void 0&&(Tt=1),z.morphAttributes.normal!==void 0&&(Tt=2),z.morphAttributes.color!==void 0&&(Tt=3);let ce,Xt,$t,j;if(Q){let he=en[Q];ce=he.vertexShader,Xt=he.fragmentShader}else{ce=x.vertexShader,Xt=x.fragmentShader;let he=o.getVertexShaderStage(x),te=o.getFragmentShaderStage(x);o.update(x,he,te),$t=he.id,j=te.id}let $=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),qt=D.isInstancedMesh===!0,gt=D.isBatchedMesh===!0,Gt=!!x.map,Te=!!x.matcap,Ht=!!et,Yt=!!x.aoMap,ue=!!x.lightMap,Kt=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Ce=!!x.displacementMap,rn=!!x.emissiveMap,ve=!!x.metalnessMap,be=!!x.roughnessMap,U=x.anisotropy>0,Be=x.clearcoat>0,se=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,F=x.sheen>0,k=x.transmission>0,K=U&&!!x.anisotropyMap,it=Be&&!!x.clearcoatMap,rt=Be&&!!x.clearcoatNormalMap,Z=Be&&!!x.clearcoatRoughnessMap,J=v&&!!x.iridescenceMap,at=v&&!!x.iridescenceThicknessMap,Mt=F&&!!x.sheenColorMap,ut=F&&!!x.sheenRoughnessMap,ot=!!x.specularMap,wt=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Ft=k&&!!x.transmissionMap,q=k&&!!x.thicknessMap,lt=!!x.gradientMap,Y=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,tt=!!x.extensions,Et=Ln;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Et=i.toneMapping);let bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:Xt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&D._colorsTexture!==null,instancing:qt,instancingColor:qt&&D.instanceColor!==null,instancingMorph:qt&&D.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:Te,envMap:Ht,envMapMode:Ht&&et.mapping,envMapCubeUVHeight:X,aoMap:Yt,lightMap:ue,bumpMap:Kt,normalMap:ge,displacementMap:Ce,emissiveMap:rn,normalMapObjectSpace:ge&&x.normalMapType===Mh,normalMapTangentSpace:ge&&x.normalMapType===tl,packedNormalMap:ge&&x.normalMapType===tl&&uv(x.normalMap.format),metalnessMap:ve,roughnessMap:be,anisotropy:U,anisotropyMap:K,clearcoat:Be,clearcoatMap:it,clearcoatNormalMap:rt,clearcoatRoughnessMap:Z,dispersion:se,retroreflection:A,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:at,sheen:F,sheenColorMap:Mt,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:wt,specularIntensityMap:Rt,transmission:k,transmissionMap:Ft,thicknessMap:q,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Cs&&x.alphaToCoverage===!1,alphaMap:Y,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:Yt&&g(x.aoMap.channel),lightMapUv:ue&&g(x.lightMap.channel),bumpMapUv:Kt&&g(x.bumpMap.channel),normalMapUv:ge&&g(x.normalMap.channel),displacementMapUv:Ce&&g(x.displacementMap.channel),emissiveMapUv:rn&&g(x.emissiveMap.channel),metalnessMapUv:ve&&g(x.metalnessMap.channel),roughnessMapUv:be&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:ot&&g(x.specularMap.channel),specularColorMapUv:wt&&g(x.specularColorMap.channel),specularIntensityMapUv:Rt&&g(x.specularIntensityMap.channel),transmissionMapUv:Ft&&g(x.transmissionMap.channel),thicknessMapUv:q&&g(x.thicknessMap.channel),alphaMapUv:Y&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ge||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Gt||Y),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Tt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:rn&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ke,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(d(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function d(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let S=f[x.type],C;if(S){let R=en[S];C=_n.clone(R.uniforms)}else C=x.uniforms;return C}function y(x,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new lv(i,S,x,s),c.push(C),u.set(S,C)),C}function T(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function L(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:L}}function dv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ed(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,d){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:d},i[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=d),t++,M}function l(h,f,g,_,m,d,M){M.reversedDepth===!0&&(m=-m);let E=o(h,f,g,_,m,d);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(h,f,g,_,m,d){let M=o(h,f,g,_,m,d);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||fv),n.length>1&&n.sort(f||ed),s.length>1&&s.sort(f||ed)}function p(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function pv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new nd,i.set(n,[a])):s>=r.length?(a=new nd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ct};break;case"SpotLight":e={position:new P,direction:new P,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vv=0;function xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yv(i){let t=new mv,e=gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ae,a=new ae;function o(c){let u=0,p=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,m=0,d=0,M=0,E=0,y=0,T=0,w=0,L=0,x=0,S=0,C=0;c.sort(xv);for(let D=0,N=c.length;D<N;D++){let I=c[D],z=I.color,V=I.intensity,W=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ti?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*V,p+=z.g*V,h+=z.b*V;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],V);C++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,nt=e.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=et;let Lt=Q.getViewportCount();for(let Tt=0;Tt<Lt;Tt++)n.sunShadowMatrix[_+Tt]=Q.getMatrix(Tt),n.sunShadowCascade[_+Tt]=Q._cascadeData[Tt];_+=Lt,g++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,nt=e.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(z).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[M]=X;let Q=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[M]=Q.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=et,L++}M++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(z).multiplyScalar(V),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=X,E++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Q=I.shadow,nt=e.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[d]=nt,n.pointShadowMap[d]=et,n.pointShadowMatrix[d]=I.shadow.matrix,w++}n.point[d]=X,d++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(V),X.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[y]=X,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==d||R.spotLength!==M||R.rectAreaLength!==E||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==T||R.numPointShadows!==w||R.numSpotShadows!==L||R.numSpotMaps!==x||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=d,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,R.sunLength=f,R.directionalLength=m,R.pointLength=d,R.spotLength=M,R.rectAreaLength=E,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=T,R.numPointShadows=w,R.numSpotShadows=L,R.numSpotMaps=x,R.numLightProbes=C,n.version=vv++)}function l(c,u){let p=0,h=0,f=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let y=c[M];if(y.isSunLight){let T=n.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function id(i){let t=new yv(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _v(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new id(i),t.set(s,[o])):r>=a.length?(o=new id(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`,Mv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],wv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sd=new ae,Wr=new P,zc=new P;function Tv(i,t,e){let n=new Ss,s=new ft,r=new ft,a=new ne,o=new Qa,l=new to,c={},u=e.maxTextureSize,p={[bi]:tn,[tn]:bi,[Ke]:Ke},h=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:bv,fragmentShader:Sv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let d=this.type;this.render=function(w,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===th&&(At("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr);let S=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=d!==this.type;N&&L.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=w.length;I<z;I++){let V=w[I],W=V.shadow;if(W===void 0){At("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let et=W.getFrameExtents();s.multiply(et),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===As){if(V.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new we(s.x,s.y,{format:Ti,type:qe,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new pi(s.x,s.y,Pn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Un,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re}else V.isPointLight?(W.map=new al(s.x),W.map.depthTexture=new Wa(s.x,Rn)):(W.map=new we(s.x,s.y),W.map.depthTexture=new pi(s.x,s.y,Rn)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Un,this.type===Lr?(W.map.depthTexture.compareFunction=X?nl:el,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,x);for(let nt=0;nt<Q;nt++){let Lt=W.getCamera(nt);if(V.isPointLight){let Tt=W.camera,ce=W.matrix,Xt=V.distance||Tt.far;Xt!==Tt.far&&(Tt.far=Xt,Tt.updateProjectionMatrix()),Wr.setFromMatrixPosition(V.matrixWorld),Tt.position.copy(Wr),zc.copy(Tt.position),zc.add(Mv[nt]),Tt.up.copy(wv[nt]),Tt.lookAt(zc),Tt.updateMatrixWorld(),ce.makeTranslation(-Wr.x,-Wr.y,-Wr.z),sd.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(sd,Tt.coordinateSystem,Tt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(W.map),i.clear());let Tt=W.getViewport(nt);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),D.viewport(a)}n=W.getFrustum(nt),y(L,x,Lt,V,this.type)}W.isPointLightShadow!==!0&&this.type===As&&M(W,x),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,C,R)};function M(w,L){let x=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new we(s.x,s.y,{format:Ti,type:qe}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,x,f,_,null)}function E(w,L,x,S){let C=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)C=R;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let D=C.uuid,N=L.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[N];z===void 0&&(z=C.clone(),I[N]=z,L.addEventListener("dispose",T)),C=z}if(C.visible=L.visible,C.wireframe=L.wireframe,S===As?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:p[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=x}return C}function y(w,L,x,S,C){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===As)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let N=t.update(w),I=w.material;if(Array.isArray(I)){let z=N.groups;for(let V=0,W=z.length;V<W;V++){let et=z[V],X=I[et.materialIndex];if(X&&X.visible){let Q=E(w,X,S,C);w.onBeforeShadow(i,w,L,x,N,Q,et),i.renderBufferDirect(x,null,N,Q,w,et),w.onAfterShadow(i,w,L,x,N,Q,et)}}}else if(I.visible){let z=E(w,I,S,C);w.onBeforeShadow(i,w,L,x,N,z,null),i.renderBufferDirect(x,null,N,z,w,null),w.onAfterShadow(i,w,L,x,N,z,null)}}let D=w.children;for(let N=0,I=D.length;N<I;N++)y(D[N],L,x,S,C)}function T(w){w.target.removeEventListener("dispose",T);for(let x in c){let S=c[x],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function Ev(i,t){function e(){let q=!1,lt=new ne,Y=null,ct=new ne(0,0,0,0);return{setMask:function(pt){Y!==pt&&!q&&(i.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){q=pt},setClear:function(pt,tt,Et,bt,he){he===!0&&(pt*=bt,tt*=bt,Et*=bt),lt.set(pt,tt,Et,bt),ct.equals(lt)===!1&&(i.clearColor(pt,tt,Et,bt),ct.copy(lt))},reset:function(){q=!1,Y=null,ct.set(-1,0,0,0)}}}function n(){let q=!1,lt=!1,Y=null,ct=null,pt=null;return{setReversed:function(tt){if(lt!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),lt=tt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(tt){tt?$(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(tt){Y!==tt&&!q&&(i.depthMask(tt),Y=tt)},setFunc:function(tt){if(lt&&(tt=Nh[tt]),ct!==tt){switch(tt){case Ca:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=tt}},setLocked:function(tt){q=tt},setClear:function(tt){pt!==tt&&(pt=tt,lt&&(tt=1-tt),i.clearDepth(tt))},reset:function(){q=!1,Y=null,ct=null,pt=null,lt=!1}}}function s(){let q=!1,lt=null,Y=null,ct=null,pt=null,tt=null,Et=null,bt=null,he=null;return{setTest:function(te){q||(te?$(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(te){lt!==te&&!q&&(i.stencilMask(te),lt=te)},setFunc:function(te,bn,Dn){(Y!==te||ct!==bn||pt!==Dn)&&(i.stencilFunc(te,bn,Dn),Y=te,ct=bn,pt=Dn)},setOp:function(te,bn,Dn){(tt!==te||Et!==bn||bt!==Dn)&&(i.stencilOp(te,bn,Dn),tt=te,Et=bn,bt=Dn)},setLocked:function(te){q=te},setClear:function(te){he!==te&&(i.clearStencil(te),he=te)},reset:function(){q=!1,lt=null,Y=null,ct=null,pt=null,tt=null,Et=null,bt=null,he=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},p={},h={},f=new WeakMap,g=[],_=null,m=!1,d=null,M=null,E=null,y=null,T=null,w=null,L=null,x=new Ct(0,0,0),S=0,C=!1,R=null,D=null,N=null,I=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=et>=2);let Q=null,nt={},Lt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),ce=new ne().fromArray(Lt),Xt=new ne().fromArray(Tt);function $t(q,lt,Y,ct){let pt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(q,tt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<Y;Et++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return tt}let j={};j[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ms),Kt(!1),ge(hc),$(i.CULL_FACE),Yt(xn);function $(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function xt(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function qt(q,lt){return h[q]!==lt?(i.bindFramebuffer(q,lt),h[q]=lt,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(q,lt){let Y=g,ct=!1;if(q){Y=f.get(lt),Y===void 0&&(Y=[],f.set(lt,Y));let pt=q.textures;if(Y.length!==pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Et=pt.length;tt<Et;tt++)Y[tt]=i.COLOR_ATTACHMENT0+tt;Y.length=pt.length,ct=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Y)}function Gt(q){return _!==q?(i.useProgram(q),_=q,!0):!1}let Te={[Gi]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};Te[sh]=i.MIN,Te[rh]=i.MAX;let Ht={[ah]:i.ZERO,[oh]:i.ONE,[lh]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[dh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[ch]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[hh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[gh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(q,lt,Y,ct,pt,tt,Et,bt,he,te){if(q===xn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),q!==eh){if(q!==d||te!==C){if((M!==Gi||T!==Gi)&&(i.blendEquation(i.FUNC_ADD),M=Gi,T=Gi),te)switch(q){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",q);break}else switch(q){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",q);break}E=null,y=null,w=null,L=null,x.set(0,0,0),S=0,d=q,C=te}return}pt=pt||lt,tt=tt||Y,Et=Et||ct,(lt!==M||pt!==T)&&(i.blendEquationSeparate(Te[lt],Te[pt]),M=lt,T=pt),(Y!==E||ct!==y||tt!==w||Et!==L)&&(i.blendFuncSeparate(Ht[Y],Ht[ct],Ht[tt],Ht[Et]),E=Y,y=ct,w=tt,L=Et),(bt.equals(x)===!1||he!==S)&&(i.blendColor(bt.r,bt.g,bt.b,he),x.copy(bt),S=he),d=q,C=!1}function ue(q,lt){q.side===Ke?xt(i.CULL_FACE):$(i.CULL_FACE);let Y=q.side===tn;lt&&(Y=!Y),Kt(Y),q.blending===Cs&&q.transparent===!1?Yt(xn):Yt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let ct=q.stencilWrite;o.setTest(ct),ct&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),rn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(q){R!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),R=q)}function ge(q){q!==$u?($(i.CULL_FACE),q!==D&&(q===hc?i.cullFace(i.BACK):q===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),D=q}function Ce(q){q!==N&&(W&&i.lineWidth(q),N=q)}function rn(q,lt,Y){q?($(i.POLYGON_OFFSET_FILL),(I!==lt||z!==Y)&&(I=lt,z=Y,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,Y))):xt(i.POLYGON_OFFSET_FILL)}function ve(q){q?$(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function be(q){q===void 0&&(q=i.TEXTURE0+V-1),Q!==q&&(i.activeTexture(q),Q=q)}function U(q,lt,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+V-1:Y=Q);let ct=nt[Y];ct===void 0&&(ct={type:void 0,texture:void 0},nt[Y]=ct),(ct.type!==q||ct.texture!==lt)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(q,lt||j[q]),ct.type=q,ct.texture=lt)}function Be(){let q=nt[Q];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function v(){try{i.texSubImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function F(){try{i.texSubImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function it(){try{i.texStorage2D(...arguments)}catch(q){It("WebGLState:",q)}}function rt(){try{i.texStorage3D(...arguments)}catch(q){It("WebGLState:",q)}}function Z(){try{i.texImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function J(){try{i.texImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function at(q){return p[q]!==void 0?p[q]:i.getParameter(q)}function Mt(q,lt){p[q]!==lt&&(i.pixelStorei(q,lt),p[q]=lt)}function ut(q){ce.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ce.copy(q))}function ot(q){Xt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Xt.copy(q))}function wt(q,lt){let Y=c.get(lt);Y===void 0&&(Y=new WeakMap,c.set(lt,Y));let ct=Y.get(q);ct===void 0&&(ct=i.getUniformBlockIndex(lt,q.name),Y.set(q,ct))}function Rt(q,lt){let ct=c.get(lt).get(q);l.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,q.__bindingPointIndex),l.set(lt,ct))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Q=null,nt={},h={},f=new WeakMap,g=[],_=null,m=!1,d=null,M=null,E=null,y=null,T=null,w=null,L=null,x=new Ct(0,0,0),S=0,C=!1,R=null,D=null,N=null,I=null,z=null,ce.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:xt,bindFramebuffer:qt,drawBuffers:gt,useProgram:Gt,setBlending:Yt,setMaterial:ue,setFlipSided:Kt,setCullFace:ge,setLineWidth:Ce,setPolygonOffset:rn,setScissorTest:ve,activeTexture:be,bindTexture:U,unbindTexture:Be,compressedTexImage2D:se,compressedTexImage3D:A,texImage2D:Z,texImage3D:J,pixelStorei:Mt,getParameter:at,updateUBOMapping:wt,uniformBlockBinding:Rt,texStorage2D:it,texStorage3D:rt,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:K,scissor:ut,viewport:ot,reset:Ft}}function Av(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,p=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):nr("canvas")}function m(A,v,F){let k=1,K=se(A);if((K.width>F||K.height>F)&&(k=F/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(k*K.width),rt=Math.floor(k*K.height);h===void 0&&(h=_(it,rt));let Z=v?_(it,rt):h;return Z.width=it,Z.height=rt,Z.getContext("2d").drawImage(A,0,0,it,rt),At("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+it+"x"+rt+")."),Z}else return"data"in A&&At("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function d(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,F,k,K,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&rt&&(Z=rt.R16_EXT),F===i.SHORT&&rt&&(Z=rt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&rt&&(Z=rt.RG16_EXT),F===i.SHORT&&rt&&(Z=rt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&rt&&(Z=rt.RGB16_EXT),F===i.SHORT&&rt&&(Z=rt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let J=it?er:kt.getTransfer(K);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=J===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&rt&&(Z=rt.RGBA16_EXT),F===i.SHORT&&rt&&(Z=rt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(A,v){let F;return A?v===null||v===Rn||v===Rs?F=i.DEPTH24_STENCIL8:v===Pn?F=i.DEPTH32F_STENCIL8:v===Ls&&(F=i.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Rn||v===Rs?F=i.DEPTH_COMPONENT24:v===Pn?F=i.DEPTH_COMPONENT32F:v===Ls&&(F=i.DEPTH_COMPONENT16),F}function w(A,v){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Ne?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function L(A){let v=A.target;v.removeEventListener("dispose",L),S(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&p.delete(v)}function x(A){let v=A.target;v.removeEventListener("dispose",x),R(v)}function S(A){let v=n.get(A);if(v.__webglInit===void 0)return;let F=A.source,k=f.get(F);if(k){let K=k[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(A),Object.keys(k).length===0&&f.delete(F)}n.remove(A)}function C(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let F=A.source,k=f.get(F);delete k[v.__cacheKey],a.memory.textures--}function R(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let K=0;K<v.__webglFramebuffer[k].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[k][K]);else i.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)i.deleteFramebuffer(v.__webglFramebuffer[k]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=A.textures;for(let k=0,K=F.length;k<K;k++){let it=n.get(F[k]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(A)}let D=0;function N(){D=0}function I(){return D}function z(A){D=A}function V(){let A=D;return A>=s.maxTextures&&At("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function W(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function et(A,v){let F=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let k=A.image;if(k===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,A,v);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function X(A,v){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xt(F,A,v);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Q(A,v){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xt(F,A,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function nt(A,v){let F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){qt(F,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let Lt={[Oa]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},Tt={[Re]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ce={[Th]:i.NEVER,[Rh]:i.ALWAYS,[Eh]:i.LESS,[el]:i.LEQUAL,[Ah]:i.EQUAL,[nl]:i.GEQUAL,[Ch]:i.GREATER,[Lh]:i.NOTEQUAL};function Xt(A,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ne||v.magFilter===vo||v.magFilter===Ur||v.magFilter===Mi||v.minFilter===Ne||v.minFilter===vo||v.minFilter===Ur||v.minFilter===Mi)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Lt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Lt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Lt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Tt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==Ur&&v.minFilter!==Mi||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",L));let k=v.source,K=f.get(k);K===void 0&&(K={},f.set(k,K));let it=W(v);if(it!==A.__cacheKey){K[it]===void 0&&(K[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[it].usedTimes++;let rt=K[A.__cacheKey];rt!==void 0&&(K[A.__cacheKey].usedTimes--,rt.usedTimes===0&&C(v)),A.__cacheKey=it,A.__webglTexture=K[it].texture}return F}function j(A,v,F){return Math.floor(Math.floor(A/F)/v)}function $(A,v,F,k){let it=A.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,k,v.data);else{it.sort((Mt,ut)=>Mt.start-ut.start);let rt=0;for(let Mt=1;Mt<it.length;Mt++){let ut=it[rt],ot=it[Mt],wt=ut.start+ut.count,Rt=j(ot.start,v.width,4),Ft=j(ut.start,v.width,4);ot.start<=wt+1&&Rt===Ft&&j(ot.start+ot.count-1,v.width,4)===Rt?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++rt,it[rt]=ot)}it.length=rt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Mt=0,ut=it.length;Mt<ut;Mt++){let ot=it[Mt],wt=Math.floor(ot.start/4),Rt=Math.ceil(ot.count/4),Ft=wt%v.width,q=Math.floor(wt/v.width),lt=Rt,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,Ft,q,lt,Y,F,k,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function xt(A,v,F){let k=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=i.TEXTURE_3D);let K=$t(A,v),it=v.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+F);let rt=n.get(it);if(it.version!==rt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=kt.getPrimaries(kt.workingColorSpace),ct=v.colorSpace===si?null:kt.getPrimaries(v.colorSpace),pt=v.colorSpace===si||Y===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=Be(v,J);let at=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),ut=y(v.internalFormat,at,Mt,v.normalized,v.colorSpace,v.isVideoTexture);Xt(k,v);let ot,wt=v.mipmaps,Rt=v.isVideoTexture!==!0,Ft=rt.__version===void 0||K===!0,q=it.dataReady,lt=w(v,J);if(v.isDepthTexture)ut=T(v.format===wi,v.type),Ft&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,ut,J.width,J.height,0,at,Mt,null));else if(v.isDataTexture)if(wt.length>0){Rt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,wt[0].width,wt[0].height);for(let Y=0,ct=wt.length;Y<ct;Y++)ot=wt[Y],Rt?q&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,Y,ut,ot.width,ot.height,0,at,Mt,ot.data);v.generateMipmaps=!1}else Rt?(Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,J.width,J.height),q&&$(v,J,at,Mt)):e.texImage2D(i.TEXTURE_2D,0,ut,J.width,J.height,0,at,Mt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Rt&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,wt[0].width,wt[0].height,J.depth);for(let Y=0,ct=wt.length;Y<ct;Y++)if(ot=wt[Y],v.format!==yn)if(at!==null)if(Rt){if(q)if(v.layerUpdates.size>0){let pt=Dc(ot.width,ot.height,v.format,v.type);for(let tt of v.layerUpdates){let Et=ot.data.subarray(tt*pt/ot.data.BYTES_PER_ELEMENT,(tt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,tt,ot.width,ot.height,1,at,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,J.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ut,ot.width,ot.height,J.depth,0,ot.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,J.depth,at,Mt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,ut,ot.width,ot.height,J.depth,0,at,Mt,ot.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Rt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,wt[0].width,wt[0].height);for(let Y=0,ct=wt.length;Y<ct;Y++)ot=wt[Y],v.format!==yn?at!==null?Rt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,ut,ot.width,ot.height,0,ot.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?q&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,Y,ut,ot.width,ot.height,0,at,Mt,ot.data)}else if(v.isDataArrayTexture)if(Rt){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,J.width,J.height,J.depth),q)if(v.layerUpdates.size>0){let Y=Dc(J.width,J.height,v.format,v.type);for(let ct of v.layerUpdates){let pt=J.data.subarray(ct*Y/J.data.BYTES_PER_ELEMENT,(ct+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,J.width,J.height,1,at,Mt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,at,Mt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,at,Mt,J.data);else if(v.isData3DTexture)Rt?(Ft&&e.texStorage3D(i.TEXTURE_3D,lt,ut,J.width,J.height,J.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,at,Mt,J.data)):e.texImage3D(i.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,at,Mt,J.data);else if(v.isFramebufferTexture){if(Ft)if(Rt)e.texStorage2D(i.TEXTURE_2D,lt,ut,J.width,J.height);else{let Y=J.width,ct=J.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,ut,Y,ct,0,at,Mt,null),Y>>=1,ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),p.add(v),Y.onpaint=ct=>{let pt=ct.changedElements;for(let tt of p)pt.includes(tt.image)&&(tt.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let pt=i.RGBA,tt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,tt,Et,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Rt&&Ft){let Y=se(wt[0]);e.texStorage2D(i.TEXTURE_2D,lt,ut,Y.width,Y.height)}for(let Y=0,ct=wt.length;Y<ct;Y++)ot=wt[Y],Rt?q&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,at,Mt,ot):e.texImage2D(i.TEXTURE_2D,Y,ut,at,Mt,ot);v.generateMipmaps=!1}else if(Rt){if(Ft){let Y=se(J);e.texStorage2D(i.TEXTURE_2D,lt,ut,Y.width,Y.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Mt,J)}else e.texImage2D(i.TEXTURE_2D,0,ut,at,Mt,J);d(v)&&M(k),rt.__version=it.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function qt(A,v,F){if(v.image.length!==6)return;let k=$t(A,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let it=n.get(K);if(K.version!==it.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let rt=kt.getPrimaries(kt.workingColorSpace),Z=v.colorSpace===si?null:kt.getPrimaries(v.colorSpace),J=v.colorSpace===si||rt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let at=v.isCompressedTexture||v.image[0].isCompressedTexture,Mt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!at&&!Mt?ut[tt]=m(v.image[tt],!0,s.maxCubemapSize):ut[tt]=Mt?v.image[tt].image:v.image[tt],ut[tt]=Be(v,ut[tt]);let ot=ut[0],wt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Ft=y(v.internalFormat,wt,Rt,v.normalized,v.colorSpace),q=v.isVideoTexture!==!0,lt=it.__version===void 0||k===!0,Y=K.dataReady,ct=w(v,ot);Xt(i.TEXTURE_CUBE_MAP,v);let pt;if(at){q&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,ot.width,ot.height);for(let tt=0;tt<6;tt++){pt=ut[tt].mipmaps;for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];v.format!==yn?wt!==null?q?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,bt.width,bt.height,0,bt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,bt.width,bt.height,wt,Rt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ft,bt.width,bt.height,0,wt,Rt,bt.data)}}}else{if(pt=v.mipmaps,q&&lt){pt.length>0&&ct++;let tt=se(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Mt){q?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,wt,Rt,ut[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,ut[tt].width,ut[tt].height,0,wt,Rt,ut[tt].data);for(let Et=0;Et<pt.length;Et++){let he=pt[Et].image[tt].image;q?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,he.width,he.height,wt,Rt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,he.width,he.height,0,wt,Rt,he.data)}}else{q?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,Rt,ut[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,wt,Rt,ut[tt]);for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];q?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,wt,Rt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ft,wt,Rt,bt.image[tt])}}}d(v)&&M(i.TEXTURE_CUBE_MAP),it.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function gt(A,v,F,k,K,it){let rt=r.convert(F.format,F.colorSpace),Z=r.convert(F.type),J=y(F.internalFormat,rt,Z,F.normalized,F.colorSpace),at=n.get(v),Mt=n.get(F);if(Mt.__renderTarget=v,!at.__hasExternalTextures){let ut=Math.max(1,v.width>>it),ot=Math.max(1,v.height>>it);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,it,J,ut,ot,v.depth,0,rt,Z,null):e.texImage2D(K,it,J,ut,ot,0,rt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,K,Mt.__webglTexture,0,ve(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,K,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let k=v.depthTexture,K=k&&k.isDepthTexture?k.type:null,it=T(v.stencilBuffer,K),rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(v),it,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(v),it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,A)}else{let k=v.textures;for(let K=0;K<k.length;K++){let it=k[K],rt=r.convert(it.format,it.colorSpace),Z=r.convert(it.type),J=y(it.internalFormat,rt,Z,it.normalized,it.colorSpace);be(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(v),J,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(A,v,F){let k=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v.depthTexture);let at=r.convert(v.depthTexture.format),Mt=r.convert(v.depthTexture.type),ut;v.depthTexture.format===Un?ut=i.DEPTH_COMPONENT24:v.depthTexture.format===wi&&(ut=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,v.width,v.height,0,at,Mt,null)}}else et(v.depthTexture,0);let it=K.__webglTexture,rt=ve(v),Z=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=v.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Un)be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,it,0);else if(v.depthTexture.format===wi)be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(A){let v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=k}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Te(v.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?Te(v.__webglFramebuffer[0],A,0):Te(v.__webglFramebuffer,A,0)}else if(F){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=i.createRenderbuffer(),Gt(v.__webglDepthbuffer[k],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Gt(v.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,v,F){let k=n.get(A);v!==void 0&&gt(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(A)}function ue(A){let v=A.texture,F=n.get(A),k=n.get(v);A.addEventListener("dispose",x);let K=A.textures,it=A.isWebGLCubeRenderTarget===!0,rt=K.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=v.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let J=0;J<v.mipmaps.length;J++)F.__webglFramebuffer[Z][J]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(rt)for(let Z=0,J=K.length;Z<J;Z++){let at=n.get(K[Z]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&be(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let J=K[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);let at=r.convert(J.format,J.colorSpace),Mt=r.convert(J.type),ut=y(J.internalFormat,at,Mt,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ot=ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(F.__webglFramebuffer[Z][J],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else gt(F.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let Z=0,J=K.length;Z<J;Z++){let at=K[Z],Mt=n.get(at),ut=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Mt.__webglTexture),Xt(ut,at),gt(F.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+Z,ut,0),d(at)&&M(ut)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,k.__webglTexture),Xt(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(F.__webglFramebuffer[J],A,v,i.COLOR_ATTACHMENT0,Z,J);else gt(F.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Z,0);d(v)&&M(Z),e.unbindTexture()}A.depthBuffer&&Ht(A)}function Kt(A){let v=A.textures;for(let F=0,k=v.length;F<k;F++){let K=v[F];if(d(K)){let it=E(A),rt=n.get(K).__webglTexture;e.bindTexture(it,rt),M(it),e.unbindTexture()}}}let ge=[],Ce=[];function rn(A){if(A.samples>0){if(be(A)===!1){let v=A.textures,F=A.width,k=A.height,K=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(A),Z=v.length>1;if(Z)for(let at=0;at<v.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<v.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Mt=n.get(v[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,K,i.NEAREST),l===!0&&(ge.length=0,Ce.length=0,ge.push(i.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ge.push(it),Ce.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let at=0;at<v.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Mt=n.get(v[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ve(A){return Math.min(s.maxSamples,A.samples)}function be(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Be(A,v){let F=A.colorSpace,k=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==tr&&F!==si&&(kt.getTransfer(F)===Jt?(k!==yn||K!==an)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",F)),v}function se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=et,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=Yt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cv(i,t){function e(n,s=si){let r,a=kt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return i.BYTE;if(n===yc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Mc)return i.RGB;if(n===yn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===So)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Fr||n===zr||n===Br||n===Gr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===To||n===Eo||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Lo||n===Ro||n===Po||n===Io||n===kr||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Lo)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Po)return r.COMPRESSED_R11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===No||n===Oo||n===qo||n===Uo||n===Fo||n===zo||n===Bo||n===Go||n===ko||n===Ho||n===Vo||n===Wo||n===Ko||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Zo||n===Yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===$o||n===Hr||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Lv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Xc,d={},M=e.getContextAttributes(),E=null,y=null,T=[],w=[],L=new ft,x=null,S=null,C=new Ve;C.viewport=new ne;let R=new Ve;R.viewport=new ne;let D=[C,R],N=new po,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=T[j];return $===void 0&&($=new bs,T[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=T[j];return $===void 0&&($=new bs,T[j]=$),$.getGripSpace()},this.getHand=function(j){let $=T[j];return $===void 0&&($=new bs,T[j]=$),$.getHandSpace()};function V(j){let $=w.indexOf(j.inputSource);if($===-1)return;let xt=T[$];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||a),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",et);for(let j=0;j<T.length;j++){let $=w[j];$!==null&&(w[j]=null,T[j].disconnect($))}I=null,z=null,m.reset();for(let j in d)delete d[j];if(t.setRenderTarget(E),f=null,h=null,p=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),S!==null){let j=S.camera;j.fov=S.fov,j.zoom=S.zoom,j.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,qt=null,gt=null;M.depth&&(gt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=M.stencil?wi:Un,qt=M.stencil?Rs:Rn);let Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new we(h.textureWidth,h.textureHeight,{format:yn,type:an,depthTexture:new pi(h.textureWidth,h.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new we(f.framebufferWidth,f.framebufferHeight,{format:yn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(j){for(let $=0;$<j.removed.length;$++){let xt=j.removed[$],qt=w.indexOf(xt);qt>=0&&(w[qt]=null,T[qt].disconnect(xt))}for(let $=0;$<j.added.length;$++){let xt=j.added[$],qt=w.indexOf(xt);if(qt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=w.length){w.push(xt),qt=Gt;break}else if(w[Gt]===null){w[Gt]=xt,qt=Gt;break}if(qt===-1)break}let gt=T[qt];gt&&gt.connect(xt)}}let X=new P,Q=new P;function nt(j,$,xt){X.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);let qt=X.distanceTo(Q),gt=$.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,Te=gt[14]/(gt[10]-1),Ht=gt[14]/(gt[10]+1),Yt=(gt[9]+1)/gt[5],ue=(gt[9]-1)/gt[5],Kt=(gt[8]-1)/gt[0],ge=(Gt[8]+1)/Gt[0],Ce=Te*Kt,rn=Te*ge,ve=qt/(-Kt+ge),be=ve*-Kt;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),gt[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let U=Te+ve,Be=Ht+ve,se=Ce-be,A=rn+(qt-be),v=Yt*Ht/Be*U,F=ue*Ht/Be*U;j.projectionMatrix.makePerspective(se,A,v,F,U,Be),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Lt(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let $=j.near,xt=j.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),N.near=R.near=C.near=$,N.far=R.far=C.far=xt,(I!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,z=N.far),N.layers.mask=j.layers.mask|6,C.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let qt=j.parent,gt=N.cameras;Lt(N,qt);for(let Gt=0;Gt<gt.length;Gt++)Lt(gt[Gt],qt);gt.length===2?nt(N,C,R):N.projectionMatrix.copy(C.projectionMatrix),S===null&&j.isPerspectiveCamera&&(S={camera:j,fov:j.fov,zoom:j.zoom}),Tt(j,N,qt)};function Tt(j,$,xt){xt===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return d[j]};let ce=null;function Xt(j,$){if(u=$.getViewerPose(c||a),g=$,u!==null){let xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let qt=!1;xt.length!==N.cameras.length&&(N.cameras.length=0,qt=!0);for(let Ht=0;Ht<xt.length;Ht++){let Yt=xt[Ht],ue=null;if(f!==null)ue=f.getViewport(Yt);else{let ge=p.getViewSubImage(h,Yt);ue=ge.viewport,Ht===0&&(t.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(y))}let Kt=D[Ht];Kt===void 0&&(Kt=new Ve,Kt.layers.enable(Ht),Kt.viewport=new ne,D[Ht]=Kt),Kt.matrix.fromArray(Yt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Yt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ht===0&&(N.matrix.copy(Kt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),qt===!0&&N.cameras.push(Kt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let Ht=p.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),p=n.getBinding();for(let Ht=0;Ht<xt.length;Ht++){let Yt=xt[Ht].camera;if(Yt){let ue=d[Yt];ue||(ue=new hr,d[Yt]=ue);let Kt=p.getCameraImage(Yt);ue.sourceTexture=Kt}}}}for(let xt=0;xt<T.length;xt++){let qt=w[xt],gt=T[xt];qt!==null&&gt!==void 0&&gt.update(qt,$,c||a)}ce&&ce(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let $t=new rd;$t.setAnimationLoop(Xt),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}},Pv=new ae,hd=new Nt;hd.set(-1,0,0,0,1,0,0,0,1);function Iv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Rc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,E,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d),E=M.envMap,y=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let w=T.program;n.uniformBlockBinding(y,w)}function c(y,T){let w=s[y.id];w===void 0&&(m(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",M));let L=T.program;n.updateUBOMapping(y,L);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let T=p();y.__bindingPointIndex=T;let w=i.createBuffer(),L=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,S=w.length;x<S;x++){let C=w[x];if(Array.isArray(C))for(let R=0,D=C.length;R<D;R++)f(C[R],x,R,L);else f(C,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,T,w,L){if(_(y,T,w,L)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let C=0;for(let R=0;R<S.length;R++){let D=S[R],N=d(D);g(D,y.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function _(y,T,w,L){let x=y.value,S=T+"_"+w;if(L[S]===void 0)return typeof x=="number"||typeof x=="boolean"?L[S]=x:ArrayBuffer.isView(x)?L[S]=x.slice():L[S]=x.clone(),!0;{let C=L[S];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return L[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let T=y.uniforms,w=0,L=16;for(let S=0,C=T.length;S<C;S++){let R=Array.isArray(T[S])?T[S]:[T[S]];for(let D=0,N=R.length;D<N;D++){let I=R[D],z=Array.isArray(I.value)?I.value:[I.value];for(let V=0,W=z.length;V<W;V++){let et=z[V],X=d(et),Q=w%L,nt=Q%X.boundary,Lt=Q+nt;w+=nt,Lt!==0&&L-Lt<X.storage&&(w+=L-Lt),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=X.storage}}}let x=w%L;return x>0&&(w+=L-x),y.__size=w,y.__cache={},this}function d(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):At("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){let T=y.target;T.removeEventListener("dispose",M);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function Ov(){return kn===null&&(kn=new ka(Nv,16,16,Ti,qe),kn.name="DFG_LUT",kn.minFilter=Ne,kn.magFilter=Ne,kn.wrapS=qn,kn.wrapT=qn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var ol=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Mo,So,bo]),d=new Set([an,Rn,Ls,Rs,yo,_o]),M=new Uint32Array(4),E=new Int32Array(4),y=new P,T=null,w=null,L=[],x=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,D=null,N=null,I=null,z=null;this._outputColorSpace=$e;let V=0,W=0,et=null,X=-1,Q=null,nt=new ne,Lt=new ne,Tt=null,ce=new Ct(0),Xt=0,$t=e.width,j=e.height,$=1,xt=null,qt=null,gt=new ne(0,0,$t,j),Gt=new ne(0,0,$t,j),Te=!1,Ht=new Ss,Yt=!1,ue=!1,Kt=new ae,ge=new P,Ce=new ne,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function be(){return et===null?$:1}let U=n;function Be(b,O){return e.getContext(b,O)}let se,A,v,F,k,K,it,rt,Z,J,at,Mt,ut,ot,wt,Rt,Ft,q,lt,Y,ct,pt,tt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",bn,!1),U===null){let O="webgl2";if(U=Be(O,b),U===null)throw Be(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(b){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),It("WebGLRenderer: "+b.message),b}function Et(){se=new kg(U),se.init(),ct=new Cv(U,se),A=new Ig(U,se,t,ct),v=new Ev(U,se),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),N=U.createFramebuffer(),I=U.createFramebuffer(),z=U.createFramebuffer(),F=new Wg(U),k=new dv,K=new Av(U,se,v,k,A,ct,F),it=new Gg(C),rt=new Xf(U),pt=new Rg(U,rt),Z=new Hg(U,rt,F,pt),J=new Xg(U,Z,rt,pt,F),q=new Kg(U,A,K),wt=new Dg(k),at=new hv(C,it,se,A,pt,wt),Mt=new Iv(C,k),ut=new pv,ot=new _v(se),Ft=new Lg(C,it,v,J,g,l),Rt=new Tv(C,J,A),tt=new Dv(U,F,A,v),lt=new Pg(U,se,F),Y=new Vg(U,se,F),F.programs=at.programs,C.capabilities=A,C.extensions=se,C.properties=k,C.renderLists=ut,C.shadowMap=Rt,C.state=v,C.info=F}_!==an&&(S=new Zg(_,e.width,e.height,o,s,r));let bt=new jc(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize($t,j,!1))},this.getSize=function(b){return b.set($t,j)},this.setSize=function(b,O,H=!0){if(bt.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=b,j=O,e.width=Math.floor(b*$),e.height=Math.floor(O*$),H===!0&&(e.style.width=b+"px",e.style.height=O+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set($t*$,j*$).floor()},this.setDrawingBufferSize=function(b,O,H){$t=b,j=O,$=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===an){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){At("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,O,H,B){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,O,H,B),v.viewport(nt.copy(gt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,O,H,B){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,O,H,B),v.scissor(Lt.copy(Gt).multiplyScalar($).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){v.setScissorTest(Te=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){qt=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let B=0;if(b){let G=!1;if(et!==null){let dt=et.texture.format;G=m.has(dt)}if(G){let dt=et.texture.type,vt=d.has(dt),ht=Ft.getClearColor(),yt=Ft.getClearAlpha(),St=ht.r,zt=ht.g,Vt=ht.b;vt?(M[0]=St,M[1]=zt,M[2]=Vt,M[3]=yt,U.clearBufferuiv(U.COLOR,0,M)):(E[0]=St,E[1]=zt,E[2]=Vt,E[3]=yt,U.clearBufferiv(U.COLOR,0,E))}else B|=U.COLOR_BUFFER_BIT}O&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Ft.dispose(),ut.dispose(),ot.dispose(),k.dispose(),it.dispose(),J.dispose(),pt.dispose(),tt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",lu),bt.removeEventListener("sessionend",cu),Ci.stop()};function he(b){b.preventDefault(),ir("WebGLRenderer: Context Lost."),R=!0}function te(){ir("WebGLRenderer: Context Restored."),R=!1;let b=F.autoReset,O=Rt.enabled,H=Rt.autoUpdate,B=Rt.needsUpdate,G=Rt.type;Et(),F.autoReset=b,Rt.enabled=O,Rt.autoUpdate=H,Rt.needsUpdate=B,Rt.type=G}function bn(b){It("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dn(b){let O=b.target;O.removeEventListener("dispose",Dn),Pd(O)}function Pd(b){Id(b),k.remove(b)}function Id(b){let O=k.get(b).programs;O!==void 0&&(O.forEach(function(H){at.releaseProgram(H)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,B,G,dt){O===null&&(O=rn);let vt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ht=Od(b,O,H,B,G);v.setMaterial(B,vt);let yt=H.index,St=1;if(B.wireframe===!0){if(yt=Z.getWireframeAttribute(H),yt===void 0)return;St=2}let zt=H.drawRange,Vt=H.attributes.position,_t=zt.start*St,ee=(zt.start+zt.count)*St;dt!==null&&(_t=Math.max(_t,dt.start*St),ee=Math.min(ee,(dt.start+dt.count)*St)),yt!==null?(_t=Math.max(_t,0),ee=Math.min(ee,yt.count)):Vt!=null&&(_t=Math.max(_t,0),ee=Math.min(ee,Vt.count));let Se=ee-_t;if(Se<0||Se===1/0)return;pt.setup(G,B,ht,H,yt);let fe,le=lt;if(yt!==null&&(fe=rt.get(yt),le=Y,le.setIndex(fe)),G.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*be()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(G.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),v.setLineWidth(Ge*be()),G.isLineSegments?le.setMode(U.LINES):G.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else G.isPoints?le.setMode(U.POINTS):G.isSprite&&le.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(se.get("WEBGL_multi_draw"))le.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ge=G._multiDrawStarts,mt=G._multiDrawCounts,Ye=G._multiDrawCount,jt=yt?rt.get(yt).bytesPerElement:1,pn=k.get(B).currentProgram.getUniforms();for(let Nn=0;Nn<Ye;Nn++)pn.setValue(U,"_gl_DrawID",Nn),le.render(Ge[Nn]/jt,mt[Nn])}else if(G.isInstancedMesh)le.renderInstances(_t,Se,G.count);else if(H.isInstancedBufferGeometry){let Ge=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mt=Math.min(H.instanceCount,Ge);le.renderInstances(_t,Se,mt)}else le.render(_t,Se)};function ou(b,O,H,B){D!==null&&b.isNodeMaterial&&D.setObject(B,b),Yt===!0&&wt.setState(b,H,!1),b.transparent===!0&&b.side===Ke&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,ea(b,O,B),b.side=bi,b.needsUpdate=!0,ea(b,O,B),b.side=Ke):ea(b,O,B)}this.compile=function(b,O,H=null){H===null&&(H=b),D!==null&&D.renderStart(b,O,H),w=ot.get(H),w.init(O),x.push(w),H.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==H&&b.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),ue=this.localClippingEnabled,Yt=wt.init(this.clippingPlanes,ue),Yt===!0&&wt.setGlobalState(this.clippingPlanes,O),D!==null&&Rt.render(w.state.shadowsArray,H,O);let B=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];ou(ht,H,O,G),B.add(ht)}else ou(dt,H,O,G),B.add(dt)}),w=x.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(b,O,H=null){let B=this.compile(b,O,H);return new Promise(G=>{function dt(){if(B.forEach(function(vt){let yt=k.get(vt).currentProgram;(yt===void 0||yt.isReady())&&B.delete(vt)}),B.size===0){G(b);return}setTimeout(dt,10)}se.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Cl=null;function Dd(b){Cl&&Cl(b)}function lu(){Ci.stop()}function cu(){Ci.start()}let Ci=new rd;Ci.setAnimationLoop(Dd),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){Cl=b,bt.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},bt.addEventListener("sessionstart",lu),bt.addEventListener("sessionend",cu),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(b,O);let H=bt.enabled===!0&&bt.isPresenting===!0,B=S!==null&&(et===null||H)&&S.begin(C,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(O),O=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,O,et),w=ot.get(b,x.length),w.init(O),w.state.textureUnits=K.getTextureUnits(),x.push(w),Kt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ht.setFromProjectionMatrix(Kt,An,O.reversedDepth),ue=this.localClippingEnabled,Yt=wt.init(this.clippingPlanes,ue),T=ut.get(b,L.length),T.init(),L.push(T),bt.enabled===!0&&bt.isPresenting===!0){let vt=C.xr.getDepthSensingMesh();vt!==null&&Ll(vt,O,-1/0,C.sortObjects)}Ll(b,O,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(xt,qt),ve=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ve&&Ft.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&wt.beginShadows();let G=w.state.shadowsArray;if(Rt.render(G,b,O),Yt===!0&&wt.endShadows(),(B&&S.hasRenderPass())===!1){let vt=T.opaque,ht=T.transmissive;if(w.setupLights(),O.isArrayCamera){let yt=O.cameras;if(ht.length>0)for(let St=0,zt=yt.length;St<zt;St++){let Vt=yt[St];hu(vt,ht,b,Vt)}ve&&Ft.render(b);for(let St=0,zt=yt.length;St<zt;St++){let Vt=yt[St];uu(T,b,Vt,Vt.viewport)}}else ht.length>0&&hu(vt,ht,b,O),ve&&Ft.render(b),uu(T,b,O)}et!==null&&W===0&&(K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et)),B&&S.end(C),b.isScene===!0&&b.onAfterRender(C,b,O),pt.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),Yt===!0&&wt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?T=L[L.length-1]:T=null,D!==null&&D.renderEnd()};function Ll(b,O,H,B){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ht)){B&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);let vt=J.update(b),ht=b.material;ht.visible&&T.push(b,vt,ht,H,Ce.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ht))){let vt=J.update(b),ht=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ce.copy(vt.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(ht)){let yt=vt.groups;for(let St=0,zt=yt.length;St<zt;St++){let Vt=yt[St],_t=ht[Vt.materialIndex];_t&&_t.visible&&T.push(b,vt,_t,H,Ce.z,Vt,O)}}else ht.visible&&T.push(b,vt,ht,H,Ce.z,null,O)}}let dt=b.children;for(let vt=0,ht=dt.length;vt<ht;vt++)Ll(dt[vt],O,H,B)}function uu(b,O,H,B){let{opaque:G,transmissive:dt,transparent:vt}=b;w.setupLightsView(H),Yt===!0&&wt.setGlobalState(C.clippingPlanes,H),B&&v.viewport(nt.copy(B)),G.length>0&&ta(G,O,H),dt.length>0&&ta(dt,O,H),vt.length>0&&ta(vt,O,H),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function hu(b,O,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let _t=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new we(1,1,{generateMipmaps:!0,type:_t?qe:an,minFilter:Mi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let dt=w.state.transmissionRenderTarget[B.id],vt=B.viewport||nt;dt.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);let ht=C.getRenderTarget(),yt=C.getActiveCubeFace(),St=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor(ce),Xt=C.getClearAlpha(),Xt<1&&C.setClearColor(16777215,.5),C.clear(),ve&&Ft.render(H);let zt=C.toneMapping;C.toneMapping=Ln;let Vt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),Yt===!0&&wt.setGlobalState(C.clippingPlanes,B),ta(b,H,B),K.updateMultisampleRenderTarget(dt),K.updateRenderTargetMipmap(dt),se.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let ee=0,Se=O.length;ee<Se;ee++){let fe=O[ee],{object:le,geometry:Ge,material:mt,group:Ye}=fe;if(mt.side===Ke&&le.layers.test(B.layers)){let jt=mt.side;mt.side=tn,mt.needsUpdate=!0,du(le,H,B,Ge,mt,Ye),mt.side=jt,mt.needsUpdate=!0,_t=!0}}_t===!0&&(K.updateMultisampleRenderTarget(dt),K.updateRenderTargetMipmap(dt))}C.setRenderTarget(ht,yt,St),C.setClearColor(ce,Xt),Vt!==void 0&&(B.viewport=Vt),C.toneMapping=zt}function ta(b,O,H){let B=O.isScene===!0?O.overrideMaterial:null;for(let G=0,dt=b.length;G<dt;G++){let vt=b[G],{object:ht,geometry:yt,group:St}=vt,zt=vt.material;zt.allowOverride===!0&&B!==null&&(zt=B),ht.layers.test(H.layers)&&du(ht,O,H,yt,zt,St)}}function du(b,O,H,B,G,dt){D!==null&&G.isNodeMaterial&&D.setObject(b,G),b.onBeforeRender(C,O,H,B,G,dt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(C,O,H,B,b,dt),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,C.renderBufferDirect(H,O,B,G,b,dt),G.side=bi,G.needsUpdate=!0,C.renderBufferDirect(H,O,B,G,b,dt),G.side=Ke):C.renderBufferDirect(H,O,B,G,b,dt),b.onAfterRender(C,O,H,B,G,dt)}function ea(b,O,H){O.isScene!==!0&&(O=rn);let B=k.get(b),G=w.state.lights,dt=w.state.shadowsArray,vt=G.state.version,ht=at.getParameters(b,G.state,dt,O,H,w.state.lightProbeGridArray),yt=at.getProgramCacheKey(ht),St=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,B.fog=O.fog;let zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=it.get(b.envMap||B.environment,zt),B.envMapRotation=B.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,St===void 0&&(b.addEventListener("dispose",Dn),St=new Map,B.programs=St);let Vt=St.get(yt);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===vt)return pu(b,ht),Vt}else ht.uniforms=at.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,H,ht),b.onBeforeCompile(ht,C),Vt=at.acquireProgram(ht,yt),St.set(yt,Vt),B.uniforms=ht.uniforms;let _t=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(_t.clippingPlanes=wt.uniform),pu(b,ht),B.needsLights=Ud(b),B.lightsStateVersion=vt,B.needsLights&&(_t.ambientLightColor.value=G.state.ambient,_t.lightProbe.value=G.state.probe,_t.sunLights.value=G.state.sun,_t.sunLightShadows.value=G.state.sunShadow,_t.directionalLights.value=G.state.directional,_t.directionalLightShadows.value=G.state.directionalShadow,_t.spotLights.value=G.state.spot,_t.spotLightShadows.value=G.state.spotShadow,_t.rectAreaLights.value=G.state.rectArea,_t.ltc_1.value=G.state.rectAreaLTC1,_t.ltc_2.value=G.state.rectAreaLTC2,_t.pointLights.value=G.state.point,_t.pointLightShadows.value=G.state.pointShadow,_t.hemisphereLights.value=G.state.hemi,_t.sunShadowMatrix.value=G.state.sunShadowMatrix,_t.sunShadowCascade.value=G.state.sunShadowCascade,_t.directionalShadowMatrix.value=G.state.directionalShadowMatrix,_t.spotLightMatrix.value=G.state.spotLightMatrix,_t.spotLightMap.value=G.state.spotLightMap,_t.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=Vt,B.uniformsList=null,Vt}function fu(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Ds.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function pu(b,O){let H=k.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Nd(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let H=0,B=b.length;H<B;H++){let G=b[H];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Od(b,O,H,B,G){O.isScene!==!0&&(O=rn),K.resetTextureUnits();let dt=O.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?O.environment:null,ht=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:kt.workingColorSpace,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,St=it.get(B.envMap||vt,yt),zt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,Se=!!H.morphAttributes.color,fe=Ln;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=C.toneMapping);let le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ge=le!==void 0?le.length:0,mt=k.get(B),Ye=w.state.lights;if(Yt===!0&&(ue===!0||b!==Q)){let de=b===Q&&B.id===X;wt.setState(B,b,de)}let jt=!1;B.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Ye.state.version||mt.outputColorSpace!==ht||G.isBatchedMesh&&mt.batching===!1||!G.isBatchedMesh&&mt.batching===!0||G.isBatchedMesh&&mt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&mt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&mt.instancing===!1||!G.isInstancedMesh&&mt.instancing===!0||G.isSkinnedMesh&&mt.skinning===!1||!G.isSkinnedMesh&&mt.skinning===!0||G.isInstancedMesh&&mt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&mt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&mt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&mt.instancingMorph===!1&&G.morphTexture!==null||mt.envMap!==St||B.fog===!0&&mt.fog!==dt||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==wt.numPlanes||mt.numIntersection!==wt.numIntersection)||mt.vertexAlphas!==zt||mt.vertexTangents!==Vt||mt.morphTargets!==_t||mt.morphNormals!==ee||mt.morphColors!==Se||mt.toneMapping!==fe||mt.morphTargetsCount!==Ge||!!mt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,mt.__version=B.version);let pn=mt.currentProgram;jt===!0&&(pn=ea(B,O,G),D&&B.isNodeMaterial&&D.onUpdateProgram(B,pn,mt));let Nn=!1,ri=!1,Ji=!1,oe=pn.getUniforms(),_e=mt.uniforms;if(v.useProgram(pn.program)&&(Nn=!0,ri=!0,Ji=!0),B.id!==X&&(X=B.id,ri=!0),mt.needsLights){let de=Nd(w.state.lightProbeGridArray,G);mt.lightProbeGrid!==de&&(mt.lightProbeGrid=de,ri=!0)}if(Nn||Q!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),oe.setValue(U,"projectionMatrix",b.projectionMatrix),oe.setValue(U,"viewMatrix",b.matrixWorldInverse);let oi=oe.map.cameraPosition;oi!==void 0&&oi.setValue(U,ge.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,ri=!0,Ji=!0)}if(mt.needsLights&&(Ye.state.sunShadowMap.length>0&&oe.setValue(U,"sunShadowMap",Ye.state.sunShadowMap,K),Ye.state.directionalShadowMap.length>0&&oe.setValue(U,"directionalShadowMap",Ye.state.directionalShadowMap,K),Ye.state.spotShadowMap.length>0&&oe.setValue(U,"spotShadowMap",Ye.state.spotShadowMap,K),Ye.state.pointShadowMap.length>0&&oe.setValue(U,"pointShadowMap",Ye.state.pointShadowMap,K)),G.isSkinnedMesh){oe.setOptional(U,G,"bindMatrix"),oe.setOptional(U,G,"bindMatrixInverse");let de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),oe.setValue(U,"boneTexture",de.boneTexture,K))}G.isBatchedMesh&&(oe.setOptional(U,G,"batchingTexture"),oe.setValue(U,"batchingTexture",G._matricesTexture,K),oe.setOptional(U,G,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",G._indirectTexture,K),oe.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",G._colorsTexture,K));let ai=H.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&q.update(G,H,pn),(ri||mt.receiveShadow!==G.receiveShadow)&&(mt.receiveShadow=G.receiveShadow,oe.setValue(U,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&O.environment!==null&&(_e.envMapIntensity.value=O.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Ov()),ri){if(oe.setValue(U,"toneMappingExposure",C.toneMappingExposure),mt.needsLights&&qd(_e,Ji),dt&&B.fog===!0&&Mt.refreshFogUniforms(_e,dt),Mt.refreshMaterialUniforms(_e,B,$,j,w.state.transmissionRenderTarget[b.id]),mt.needsLights&&mt.lightProbeGrid){let de=mt.lightProbeGrid;_e.probesSH.value=de.texture,_e.probesMin.value.copy(de.boundingBox.min),_e.probesMax.value.copy(de.boundingBox.max),_e.probesResolution.value.copy(de.resolution)}Ds.upload(U,fu(mt),_e,K)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ds.upload(U,fu(mt),_e,K),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(U,"center",G.center),oe.setValue(U,"modelViewMatrix",G.modelViewMatrix),oe.setValue(U,"normalMatrix",G.normalMatrix),oe.setValue(U,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let de=B.uniformsGroups;for(let oi=0,$i=de.length;oi<$i;oi++){let gu=de[oi];tt.update(gu,pn),tt.bind(gu,pn)}}return pn}function qd(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ud(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,O,H){let B=k.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=O,k.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let H=k.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){et=b,V=O,W=H;let B=null,G=!1,dt=!1;if(b){let ht=k.get(b);if(ht.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),nt.copy(b.viewport),Lt.copy(b.scissor),Tt=b.scissorTest,v.viewport(nt),v.scissor(Lt),v.setScissorTest(Tt),X=-1;return}else if(ht.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(ht.__hasExternalTextures)K.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let zt=b.depthTexture;if(ht.__boundDepthTexture!==zt){if(zt!==null&&k.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let yt=b.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(dt=!0);let St=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(St[O])?B=St[O][H]:B=St[O],G=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?B=k.get(b).__webglMultisampledFramebuffer:Array.isArray(St)?B=St[H]:B=St,nt.copy(b.viewport),Lt.copy(b.scissor),Tt=b.scissorTest}else nt.copy(gt).multiplyScalar($).floor(),Lt.copy(Gt).multiplyScalar($).floor(),Tt=Te;if(H!==0&&(B=N),v.bindFramebuffer(U.FRAMEBUFFER,B)&&v.drawBuffers(b,B),v.viewport(nt),v.scissor(Lt),v.setScissorTest(Tt),G){let ht=k.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,H)}else if(dt){let ht=O;for(let yt=0;yt<b.textures.length;yt++){let St=k.get(b.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,St.__webglTexture,H,ht)}}else if(b!==null&&H!==0){let ht=k.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,H)}X=-1};function mu(b){let O=k.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=A.textureFormatReadable(b.format),O.__typeReadable=A.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,H,B,G,dt,vt,ht=0){if(!(b&&b.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){v.bindFramebuffer(U.FRAMEBUFFER,yt);try{let St=b.textures[ht],zt=St.format,Vt=St.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let _t=mu(St);if(_t.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_t.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-B&&H>=0&&H<=b.height-G&&U.readPixels(O,H,B,G,ct.convert(zt),ct.convert(Vt),dt)}finally{let St=et!==null?k.get(et).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,B,G,dt,vt,ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(O>=0&&O<=b.width-B&&H>=0&&H<=b.height-G){v.bindFramebuffer(U.FRAMEBUFFER,yt);let St=b.textures[ht],zt=St.format,Vt=St.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let _t=mu(St);if(_t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(O,H,B,G,ct.convert(zt),ct.convert(Vt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Se=et!==null?k.get(et).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Se);let fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dh(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ee),U.deleteSync(fe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){let B=Math.pow(2,-H),G=Math.floor(b.image.width*B),dt=Math.floor(b.image.height*B),vt=O!==null?O.x:0,ht=O!==null?O.y:0;K.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,vt,ht,G,dt),v.unbindTexture()},this.copyTextureToTexture=function(b,O,H=null,B=null,G=0,dt=0){let vt,ht,yt,St,zt,Vt,_t,ee,Se,fe=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(H!==null)vt=H.max.x-H.min.x,ht=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,zt=H.min.y,Vt=H.isBox3?H.min.z:0;else{let _e=Math.pow(2,-G);vt=Math.floor(fe.width*_e),ht=Math.floor(fe.height*_e),b.isDataArrayTexture?yt=fe.depth:b.isData3DTexture?yt=Math.floor(fe.depth*_e):yt=1,St=0,zt=0,Vt=0}B!==null?(_t=B.x,ee=B.y,Se=B.z):(_t=0,ee=0,Se=0);let le=ct.convert(O.format),Ge=ct.convert(O.type),mt;O.isData3DTexture?(K.setTexture3D(O,0),mt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),mt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),mt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Ye=v.getParameter(U.UNPACK_ROW_LENGTH),jt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=v.getParameter(U.UNPACK_SKIP_PIXELS),Nn=v.getParameter(U.UNPACK_SKIP_ROWS),ri=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,St),v.pixelStorei(U.UNPACK_SKIP_ROWS,zt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);let Ji=b.isDataArrayTexture||b.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let _e=k.get(b),ai=k.get(O),de=k.get(_e.__renderTarget),oi=k.get(ai.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,de.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let $i=0;$i<yt;$i++)Ji&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(b).__webglTexture,G,Vt+$i),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(O).__webglTexture,dt,Se+$i)),U.blitFramebuffer(St,zt,vt,ht,_t,ee,vt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||k.has(b)){let _e=k.get(b),ai=k.get(O);v.bindFramebuffer(U.READ_FRAMEBUFFER,I),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let de=0;de<yt;de++)Ji?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,G,Vt+de):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,G),oe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ai.__webglTexture,dt,Se+de):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ai.__webglTexture,dt),G!==0?U.blitFramebuffer(St,zt,vt,ht,_t,ee,vt,ht,U.COLOR_BUFFER_BIT,U.NEAREST):oe?U.copyTexSubImage3D(mt,dt,_t,ee,Se+de,St,zt,vt,ht):U.copyTexSubImage2D(mt,dt,_t,ee,St,zt,vt,ht);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(mt,dt,_t,ee,Se,vt,ht,yt,le,Ge,fe.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(mt,dt,_t,ee,Se,vt,ht,yt,le,fe.data):U.texSubImage3D(mt,dt,_t,ee,Se,vt,ht,yt,le,Ge,fe):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,_t,ee,vt,ht,le,Ge,fe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,_t,ee,fe.width,fe.height,le,fe.data):U.texSubImage2D(U.TEXTURE_2D,dt,_t,ee,vt,ht,le,Ge,fe);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ye),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),v.pixelStorei(U.UNPACK_SKIP_ROWS,Nn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ri),dt===0&&O.generateMipmaps&&U.generateMipmap(mt),v.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){V=0,W=0,et=null,v.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}};var Os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Uv=new yi(-1,1,1,-1,0,1),Zc=class extends Zt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},Fv=new Zc,Ei=class{constructor(t){this._mesh=new Wt(Fv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Uv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var qs=class extends fn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_n.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ei(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xr=class extends fn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends fn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new we(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qs(Os),this.copyPass.material.blending=xn,this.timer=new wr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(a instanceof Xr?n=!0:a instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var dl=class extends fn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ct}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var dd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Us=class i extends fn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new Ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new we(r,a,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new we(r,a,{type:qe,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let h=new we(r,a,{type:qe,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=dd;this.highPassUniforms=_n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_n.clone(Os.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:Os.vertexShader,fragmentShader:Os.fragmentShader,premultipliedAlpha:!0,blending:Gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ct,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new Ei(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Us.BlurDirectionX=new ft(1,0);Us.BlurDirectionY=new ft(0,1);var jr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fl=class extends fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=_n.clone(jr.uniforms),this.material=new Es({name:jr.name,uniforms:this.uniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader}),this._fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},kt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ki?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Or?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fd=new un,pl=new P,Fs=class extends Mr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Dt(t,3)),this.setAttribute("uv",new Dt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new _i(e,6,1);return this.setAttribute("instanceStart",new Cn(n,3,0)),this.setAttribute("instanceEnd",new Cn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new _i(e,6,1);return this.setAttribute("instanceColorStart",new Cn(n,3,0)),this.setAttribute("instanceColorEnd",new Cn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new gr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),fd.setFromBufferAttribute(e),this.boundingBox.union(fd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pl)),pl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};en.line={uniforms:_n.merge([st.common,st.fog,st.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ai=class extends xe{constructor(t){super({type:"LineMaterial",uniforms:_n.clone(en.line.uniforms),vertexShader:en.line.vertexShader,fragmentShader:en.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Yc=new ne,pd=new P,md=new P,Ue=new ne,Fe=new ne,Hn=new ne,Jc=new P,$c=new ae,ze=new Ar,gd=new P,ml=new un,gl=new gn,Vn=new ne,Wn,Ki;function vd(i,t,e){return Vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Vn.multiplyScalar(1/Vn.w),Vn.x=Ki/e.width,Vn.y=Ki/e.height,Vn.applyMatrix4(i.projectionMatrixInverse),Vn.multiplyScalar(1/Vn.w),Math.abs(Math.max(Vn.x,Vn.y))}function zv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){ze.start.fromBufferAttribute(s,o),ze.end.fromBufferAttribute(r,o),ze.applyMatrix4(e);let c=new P,u=new P;Wn.distanceSqToSegment(ze.start,ze.end,u,c),u.distanceTo(c)<Ki*.5&&t.push({point:u,pointOnLine:c,distance:Wn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Bv(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),p=-t.near;Wn.at(1,Hn),Hn.w=1,Hn.applyMatrix4(t.matrixWorldInverse),Hn.applyMatrix4(n),Hn.multiplyScalar(1/Hn.w),Hn.x*=r.x/2,Hn.y*=r.y/2,Hn.z=0,Jc.copy(Hn),$c.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,f=u;h<f;h++){if(Ue.fromBufferAttribute(l,h),Fe.fromBufferAttribute(c,h),Ue.w=1,Fe.w=1,Ue.applyMatrix4($c),Fe.applyMatrix4($c),Ue.z>p&&Fe.z>p)continue;if(Ue.z>p){let E=Ue.z-Fe.z,y=(Ue.z-p)/E;Ue.lerp(Fe,y)}else if(Fe.z>p){let E=Fe.z-Ue.z,y=(Fe.z-p)/E;Fe.lerp(Ue,y)}Ue.applyMatrix4(n),Fe.applyMatrix4(n),Ue.multiplyScalar(1/Ue.w),Fe.multiplyScalar(1/Fe.w),Ue.x*=r.x/2,Ue.y*=r.y/2,Fe.x*=r.x/2,Fe.y*=r.y/2,ze.start.copy(Ue),ze.start.z=0,ze.end.copy(Fe),ze.end.z=0;let _=ze.closestPointToPointParameter(Jc,!0);ze.at(_,gd);let m=Cc.lerp(Ue.z,Fe.z,_),d=m>=-1&&m<=1,M=Jc.distanceTo(gd)<Ki*.5;if(d&&M){ze.start.fromBufferAttribute(l,h),ze.end.fromBufferAttribute(c,h),ze.start.applyMatrix4(a),ze.end.applyMatrix4(a);let E=new P,y=new P;Wn.distanceSqToSegment(ze.start,ze.end,y,E),e.push({point:y,pointOnLine:E,distance:Wn.origin.distanceTo(y),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var vl=class extends Wt{constructor(t=new Fs,e=new Ai({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)pd.fromBufferAttribute(e,a),md.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+pd.distanceTo(md);let r=new _i(s,2,1);return t.setAttribute("instanceDistanceStart",new Cn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Cn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Wn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ki=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),gl.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ki*.5;else{let p=Math.max(s.near,gl.distanceToPoint(Wn.origin));c=vd(s,p,l.resolution)}if(gl.radius+=c,Wn.intersectsSphere(gl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ml.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Ki*.5;else{let p=Math.max(s.near,ml.distanceToPoint(Wn.origin));u=vd(s,p,l.resolution)}ml.expandByScalar(u),Wn.intersectsBox(ml)!==!1&&(n?zv(this,e):Bv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Yc),this.material.uniforms.resolution.value.set(Yc.z,Yc.w))}};var Xi=class extends Fs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var xl=class extends vl{constructor(t=new Xi,e=new Ai({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var ye={zeros:[14.134725142,21.022039639,25.01085758,30.424876126,32.935061588,37.586178159,40.918719012,43.327073281,48.005150881,49.773832478,52.970321478,56.446247697,59.347044003,60.831778525,65.112544048,67.079810529,69.546401711,72.067157674,75.704690699,77.144840069,79.33737502,82.910380854,84.735492981,87.425274613,88.809111208,92.491899271,94.651344041,95.870634228,98.831194218,101.317851006,103.72553804,105.446623052,107.168611184,111.029535543,111.874659177,114.320220915,116.226680321,118.790782866,121.370125002,122.946829294,124.256818554,127.51668388,129.5787042,131.087688531,133.497737203,134.756509753,138.116042055,139.736208952,141.123707404,143.111845808,146.000982487,147.422765343,150.053520421,150.925257612,153.024693811,156.112909294,157.597591818,158.849988171,161.188964138,163.030709687,165.537069188,167.184439978,169.094515416,169.911976479,173.41153652,174.754191523,176.441434298,178.377407776,179.91648402,182.207078484,184.874467848,185.598783678,187.228922584,189.416158656,192.026656361,193.079726604,195.26539668,196.876481841,198.015309676,201.264751944,202.493594514,204.189671803,205.394697202,207.906258888,209.576509717,211.690862595,213.34791936,214.547044783,216.169538508,219.067596349,220.714918839,221.430705555,224.007000255,224.98332467,227.42144428,229.337413306,231.2501887,231.987235253,233.693404179,236.524229666,237.769820481,239.555477573,241.049157796,242.823271934,244.070898497,247.136990075,248.10199006,249.573689645,251.014947795,253.069986748,255.306256455,256.380713694,258.610439492,259.87440699,260.805084505,263.573893905,265.557851839,266.614973782,267.921915083,269.970449024,271.494055642,273.459609188,275.587492649,276.452049503,278.25074353,279.229250928,282.465114765,283.211185733,284.835963981,286.667445363,287.911920501,289.579854929,291.846291329,293.558434139,294.965369619,295.573254879,297.979277062,299.840326054,301.649325462,302.69674959,304.864371341,305.728912602,307.219496128,310.109463147,311.16514153,312.427801181,313.985285731,315.475616089,317.734805942,318.853104256,321.160134309,322.144558672,323.466969558,324.862866052,327.443901262,329.03307168,329.953239728,331.474467583,333.645378525,334.211354833,336.841850428,338.339992851,339.858216725,341.042261111,342.05487751,344.66170294,346.347870566,347.272677584,349.316260871,350.408419349,351.878649025,353.488900489,356.017574977,357.151302252,357.952685102,359.743754953,361.289361696,363.331330579,364.736024114,366.212710288,367.993575482,368.968438096,370.050919212,373.061928372,373.864873911,375.825912767,376.324092231,378.43668025,379.872975347,381.484468617,383.44352945,384.956116815,385.861300846,387.222890222,388.846128354,391.456083564,392.24508334,393.427743844,395.582870011,396.381854223],ns:49,nt:641,s:[-1,2],t:[0,80],lo:-2.6,hi:1.2,grid:"ZmptcHR3en6BhIeKjZCUl5qeoaWorLC1ur/Ey9Lc6f7//+3i29XRzcrIxsTCwb++vWZqbXF0d3p+gYSHio2QlJeanaGkqKywtLm+w8nP19/n6+nj3djT0MzKx8XDwsC/vr1nam5xdHd7foGEh4qNkJOXmp2gpKerr7K2u7/Eyc3S1dfX1tTRzszJx8XEwsG/vr28aGtucnV4e36BhIeKjZCTlpmcn6Omqa2wtLe7vsLFyMrLzMzLysnHxsTDwsC/vr28u2lsb3J1eHt+gYSHio2Qk5WYm56hpKeqrbCztrm8vsDCw8TExMTDw8LBwL++vby8u7prbnBzdnl8f4KEh4qNj5KVl5qdoKKlqKutsLK1t7m7vL2+v7+/v7++vr28vLu7urm5bG9ydHd6fX+ChIeKjI+RlJeZnJ6ho6aoqq2vsbO0tre4ubq6u7u7u7q6urm5ubi4t25wc3Z4e32AgoWHioyPkZOWmJudn6GkpqiqrK2vsbKztLW2t7e3uLi4uLe3t7e3trZwcnR3eXx+gIOFh4qMjpGTlZeZnJ6goqSmp6mrrK6vsLGys7O0tLW1tbW1tbW1tbW1cXR2eHp9f4GDhYiKjI6QkpSWmJqcnqCipKWnqKqrrK2ur7CxsbKys7Ozs7Ozs7Ozs3N1d3l7foCChIaIioyOkJKUlpiZm52foKKjpaaoqaqrrK2urq+wsLCxsbGxsrKysrJ1d3l7fX+Bg4SGiIqMjpCSk5WXmZqcnp+hoqOlpqeoqaqrrKytrq6vr6+wsLCwsLCxdnh6fH6AgoOFh4mLjI6QkpOVlpiam52en6Gio6Slpqeoqaqrq6ysra2urq6vr6+vr3h6fH1/gYKEhoiJi42OkJGTlZaYmZqcnZ6goaKjpKWmp6ioqaqqq6ysrK2tra6urq56e31/gIKDhYeIiouNjpCRk5SWl5mam5yen6ChoqOkpaamp6ipqaqqq6usrKytra2te31+gIGDhIaHiYqMjY+QkpOUlpeYmZucnZ6foKGio6SlpaanqKipqaqqq6urrKysrX1+gIGDhIaHiIqLjI6PkJKTlJaXmJmam5yen6CgoaKjpKWlpqenqKipqaqqqqurq6x/gIGDhIWHiImLjI2OkJGSk5SWl5iZmpucnZ6foKGioqOkpaWmpqeoqKipqaqqqqurgIGDhIWGiImKi42Oj5CRkpSVlpeYmZqbnJ2en5+goaKjo6Slpaamp6eoqKmpqaqqqoKDhIWGiImKi4yNjpCRkpOUlZaXmJmam5ydnp6foKGhoqOjpKWlpqanp6ioqKmpqqqDhIWHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ2en6CgoaKio6SkpaWmpqenqKioqamphYaHiImKi4yNjo+QkZKTlJWWl5iYmZqbnJ2dnp+goKGioqOjpKSlpaamp6eoqKipqYaHiImKi4yNjo+QkZKTlJWVlpeYmZqam5ydnZ6foKChoaKjo6SkpaWmpqenp6ioqKmIiYqLi4yNjo+QkZKTk5SVlpeYmJmam5ucnZ6en6CgoaGioqOkpKWlpaamp6enqKioiYqLjI2Ojo+QkZKTk5SVlpeXmJmampucnJ2enp+goKGhoqKjo6SkpaWmpqanp6ioqIuMjI2Oj5CQkZKTlJSVlpeXmJmZmpubnJ2dnp+foKChoaKio6OkpKWlpqamp6enqKiMjY6Pj5CRkpKTlJSVlpeXmJmZmpubnJ2dnp6fn6ChoaKio6OjpKSlpaampqenp6iojo+PkJGRkpOTlJWVlpeXmJmZmpubnJydnp6fn6CgoaGioqOjpKSkpaWmpqanp6eoqI+QkZGSk5OUlZWWlpeYmJmZmpubnJydnZ6fn6CgoaGioqKjo6SkpaWlpqamp6enqKiRkZKTk5SUlZaWl5eYmZmampubnJydnp6fn6CgoKGhoqKjo6SkpKWlpaampqenp6iokpOTlJWVlpaXl5iYmZmam5ucnJ2dnp6fn6CgoKGhoqKjo6OkpKWlpaampqenp6eoqJSUlZWWlpeXmJiZmZqam5ucnJ2dnp6fn6CgoaGhoqKjo6OkpKSlpaWmpqanp6enqKiVlpaXl5iYmZmampqbm5ycnZ2enp+fn6CgoaGhoqKjo6OkpKSlpaWmpqanp6enqKiol5eYmJiZmZqam5ubnJydnZ6enp+foKCgoaGioqKjo6OkpKSlpaWmpqanp6enqKioqJiZmZmampubm5ycnZ2dnp6fn5+goKChoaGioqOjo6SkpKWlpaWmpqanp6enqKioqKiampqbm5ucnJydnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqanp6enqKioqKipm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OjpKSkpaWlpaampqanp6enqKioqKipqZydnZ2enp6en5+foKCgoaGhoaKioqOjo6SkpKSlpaWlpqampqenp6eoqKioqKmpqamenp6fn5+foKCgoKGhoaKioqKjo6OjpKSkpKWlpaWmpqamp6enp6ioqKioqKmpqampn5+goKCgoaGhoaKioqKjo6OjpKSkpKSlpaWlpqampqenp6enqKioqKioqampqamqqqGhoaGhoqKioqKjo6OjpKSkpKSlpaWlpaampqamp6enp6eoqKioqKmpqampqaqqqqqioqKio6Ojo6OkpKSkpKSlpaWlpaampqamp6enp6enqKioqKioqampqampqqqqqqqqo6OkpKSkpKSkpaWlpaWlpqampqamp6enp6enqKioqKioqampqampqaqqqqqqqqqqq6WlpaWlpaWlpqampqampqenp6enp6eoqKioqKioqampqampqamqqqqqqqqqqqurq6umpqampqamp6enp6enp6enqKioqKioqKipqampqampqaqqqqqqqqqqqqurq6urq6urp6enp6eoqKioqKioqKioqKmpqampqampqamqqqqqqqqqqqqqq6urq6urq6urq6usrKmpqampqampqampqampqampqqqqqqqqqqqqqqqqqqurq6urq6urq6urq6ysrKysrKyqqqqqqqqqqqqqqqqqqqqqqqqqqqurq6urq6urq6urq6urq6ysrKysrKysrKysrKysq6urq6urq6urq6urq6urq6urq6urq6urrKysrKysrKysrKysrKysrKysrKysra2traysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK2tra2tra2tra2tra2tra2ura2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tr6+vr66urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urrCwsLCwr6+vr6+vr6+vr6+vr6+vr66urq6urq6urq6urq6urq6urq6urq6urq6urq6xsbGxsbGwsLCwsLCwsLCwsK+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vrq6usrKysrKysbGxsbGxsbGxsLCwsLCwsLCwsLCwsLCvr6+vr6+vr6+vr6+vr6+vr6+vr7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbCwsLCwsLCwsLCwsLCwsLCvr6+vr6+vr6+1tLS0tLSzs7Ozs7OzsrKysrKysrKxsbGxsbGxsbGxsbCwsLCwsLCwsLCwsLCwsLCwtrW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbGwsLCwsLCwsLCwsLe2tra2trW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysrGxsbGxsbGxsbGxsLCwsLC4uLe3t7e2tra2tbW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbGxubm4uLi4t7e3t7a2tra1tbW1tbW0tLS0tLSzs7Ozs7OzsrKysrKysrKxsbGxsbGxsbq6ubm5uLi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysrGxsbG7u7q6urm5ubm4uLi3t7e3t7a2tra1tbW1tbS0tLS0tLOzs7Ozs7OysrKysrKysrKxvLu7u7u6urq5ubm4uLi4t7e3t7a2tra2tbW1tbW0tLS0tLSzs7Ozs7OzsrKysrKysr28vLy7u7u6urq6ubm5uLi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7OzsrKysrK+vb29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7OzsrKyv76+vb29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7Ozsr+/v76+vr29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLSzs7Ozs7PAwL+/v76+vb29vLy8u7u7urq6ubm5uLi4uLe3t7e2tra2tbW1tbW0tLS0tLSzs7OzwcHAwL+/v76+vb29vLy8u7u7urq6ubm5uLi4uLe3t7a2tra2tbW1tbW0tLS0tLOzs8LBwcHAwL+/vr6+vb28vLy7u7u6urq5ubm4uLi4t7e3t7a2tra1tbW1tbS0tLS0s7PDwsLBwcDAv7+/vr69vb28vLy7u7q6urm5ubm4uLi3t7e3tra2trW1tbW1tLS0tLSzw8PCwsHBwcDAv7++vr69vby8vLu7u7q6urm5ubi4uLe3t7e2tra2tbW1tbW0tLS0tMTEw8PCwsHBwMC/v76+vr29vLy8u7u7urq6ubm5uLi4t7e3t7a2tra1tbW1tLS0tLTFxMTDw8LCwcHAwL+/vr6+vb28vLy7u7q6urm5ubi4uLi3t7e2tra2tbW1tbW0tLS0xcXExMPDwsLBwcDAv7++vr69vby8vLu7urq6ubm5uLi4t7e3t7a2tra1tbW1tLS0tMbGxcTEw8PCwsHBwMC/v76+vb29vLy7u7u6urq5ubm4uLi3t7e2tra2tbW1tbS0tLTHxsbFxMTDw8LCwcHAwL+/vr69vby8vLu7urq6ubm5uLi4t7e3t7a2trW1tbW1tLS0x8fGxcXExMPDwsLBwMC/v7++vr29vLy7u7u6urm5ubi4uLe3t7e2tra1tbW1tbS0tMjHx8bFxcTEw8LCwcHAwL+/vr69vby8vLu7urq6ubm4uLi3t7e3tra2tbW1tbW0tLTIyMfGxsXExMPDwsLBwMC/v76+vb29vLy7u7q6urm5ubi4t7e3t7a2trW1tbW0tLS0ycjHx8bFxcTEw8LCwcHAwL+/vr69vby8u7u6urq5ubm4uLe3t7e2tra1tbW1tLS0tMnIyMfGxsXExMPDwsHBwMC/v76+vb28vLu7urq6ubm4uLi3t7e2tra2tbW1tbS0tLTKycjHx8bFxcTDw8LCwcDAv7++vr29vLy7u7q6urm5uLi4t7e3tra2tbW1tbS0tLSzysnIyMfGxsXExMPCwsHAwL+/vr69vby8u7u6urm5ubi4t7e3tra2trW1tbS0tLSzs8rJycjHxsbFxMTDwsLBwMC/v76+vb28vLu7urq5ubi4uLe3t7a2trW1tbS0tLSzs7PKysnIx8fGxcTEw8LCwcDAv7++vb28vLu7urq5ubm4uLe3t7a2trW1tbS0tLSzs7Ozy8rJyMfHxsXExMPCwsHAwL++vr29vLy7u7q6ubm4uLe3t7a2trW1tbS0tLSzs7Ozs8vKycjIx8bFxMTDwsLBwMC/vr69vLy7u7q6ubm4uLi3t7a2trW1tbS0tLSzs7OzsrLLysnIyMfGxcTEw8LBwcC/v769vby8u7q6ubm4uLi3t7a2trW1tbS0tLOzs7OysrKyy8rJyMjHxsXEw8PCwcDAv76+vby8u7u6urm4uLi3t7a2tbW1tLS0s7Ozs7KysrKyscvKycjHx8bFxMPCwsHAv7++vb28u7u6urm4uLe3t7a2tbW1tLS0s7OzsrKysrKxsbHLysnIx8bGxcTDwsHBwL++vb28u7u6urm4uLe3tra2tbW0tLSzs7OysrKysbGxsbGxy8rJyMfGxcTDw8LBwL++vr28vLu6urm4uLe3tra1tbS0tLOzs7KysrKxsbGxsLCwsMvKycjHxsXEw8LBwMC/vr28vLu6ubm4uLe2trW1tLS0s7OzsrKysbGxsbCwsLCwsK/LysnIx8bFxMPCwcC/vr28vLu6ubm4t7e2trW1tLSzs7KysrGxsbGwsLCwsK+vr6+vy8rIx8bFxMPCwcC/vr29vLu6ubm4t7a2tbW0tLOzsrKxsbGwsLCwr6+vr6+vr66ursrJyMfGxcTDwsHAv769vLu6ubi4t7a1tbS0s7KysrGxsLCwr6+vr6+urq6urq6urq7KycjHxcTDwsHAv769vLu6ubi3tra1tLSzsrKxsbCwsK+vr66urq6ura2tra2tra2tysnHxsXEwsHAv769vLu6ubi3trW0tLOysrGwsK+vr66urq2tra2trKysrKysrKysrMnIx8bEw8LBv769vLu6ubi3trW0s7KxsbCvr66ura2trKysrKysq6urq6urq6urq6vJyMbFxMLBwL69vLu6uLe2tbSzsrGwsK+urq2trKyrq6urq6qqqqqqqqqqqqqqqqqrycfGxMPCwL+9vLu6uLe2tbOysbCvr66trKyrq6qqqqmpqampqampqampqampqamqqsjHxcTCwb++vLu6uLe1tLOysa+uraysq6qqqamoqKinp6enp6enp6eoqKioqKipqanIxsXDwsC+vbu6uLe1tLKxsK6trKuqqaiop6empqWlpaWlpaWlpqampqanp6enqKioyMbEw8G/vry6ube1tLKwr66sq6qop6alpaSko6Ojo6Ojo6OjpKSkpKWlpaampqenp8fFxMLAvr27ube1tLKwrq2rqainpaSjoqGhoKCgoKCgoKChoaKioqOjpKSlpaWmpqbHxcPBv768uri2tLKwrqyqqKelo6Kgn56dnZycnJydnZ2enp+foKGhoqKjo6SkpaWmx8XDwb+9u7m3tbKwrqyqqKWjoZ+enJuZmZiYmJiYmZqam5ydnZ6foKChoqKjpKSlpcbEwsC+vLq4trOxr6yqp6WioJ2bmZeVlJOSkpKTlJWWl5iZmpucnZ6foKGhoqOjpKTGxMLAvry6t7WysK2rqKWin5yZlpOQjoyLi4uMjY+QkpSVl5iam5ydnp+goaGio6OkxsTCwL68ube0sq+sqaajoJyZlZCMiISBgICBhIaJjI6Rk5WXmJqbnJ2en6ChoqKjpMfFwsC+vLm3tLGvrKmlop6alpGMhn93cW1vdXuAhIiMj5GTlZeZmpydnp+goaKio6THxcPBvry6t7Syr6yppaKempWQioJ5bVghV2p1fIKHi46Rk5WXmZqbnZ6foKGioqOkyMbDwb+9uri1sq+sqaajn5uWkYyFfnZuaWxzen+EiIyPkZSWl5mbnJ2en6ChoqOjpMnGxMLAvbu5trOxrquopKGdmZWRjIiEgH9/gYOGiYyPkZOVl5manJ2en6ChoqKjpKTJx8XDwb+8ure1srCtqqekoZ6al5SRjoyLi4uMjo+Rk5WWmJmbnJ2en6ChoqKjpKSly8nGxMLAvru5t7Syr62qp6Win52amJaVlJOTlJSVlpeYmpucnZ6foKChoqOjpKWlpszKyMbEwb+9u7m2tLKwrauppqSioJ6dnJuampqampubnJ2enp+goaGio6OkpKWlpqbNy8nHxcPBv727ube0srCurKqop6WkoqGgoJ+fn5+fn6CgoaGioqOjpKSlpaamp6enzs3LycfFw8G/vbu5t7WzsbCurKupqKempaSko6Ojo6Ojo6OkpKSlpaampqenp6ioqNDOzMrIx8XDwb+9u7q4trWzsbCurayrqqmoqKenpqampqampqanp6enqKioqKmpqanRz87MysjHxcPBwL68u7m3trSzsrCvrq2srKuqqqqpqampqampqampqampqqqqqqqq09HPzczKyMfFw8LAvr27urm3trWzsrGwsK+ura2srKyrq6urq6urq6urq6urq6urq9TS0c/NzMrIx8XEwsG/vry7uri3trW0s7KysbCwr6+urq6tra2tra2trKysrKysra3V1NLRz83MysnHxsTDwcC/vby7urm4t7a1tLOzsrGxsLCwr6+vr66urq6urq6urq6u19XU0tDPzczKycfGxcPCwb++vby7urm4t7a2tbS0s7KysrGxsbCwsLCvr6+vr6+vr9jX1dPS0M/NzMvJyMbFxMPBwL++vby7urm4uLe2tbW0tLOzs7KysrGxsbGwsLCwsLDZ2NbV09LQz87My8nIx8bEw8LBwL++vby7urm5uLe3tra1tbS0s7OzsrKysrGxsbGx29nY1tXT0tDPzszLysjHxsXEw8HAv76+vby7urq5uLi3tra1tbW0tLOzs7OysrKysdza2dfW1dPS0M/OzMvKycfGxcTDwsHAv769vby7urq5uLi3t7a2tbW1tLS0s7Ozs7Ld29rZ19bU09LQz87My8rJyMfFxMPCwcDAv769vLy7urq5ubi3t7e2trW1tbS0tLOz3t3b2tjX1dTT0dDPzszLysnIx8bFxMPCwcC/vr69vLu7urq5uLi3t7e2trW1tbS0tN/e3NvZ2NbV1NPR0M/OzMvKycjHxsXEw8LBwL+/vr29vLu7urm5uLi3t7e2trW1tbTg3t3c2tnX1tXT0tHQz83My8rJyMfGxcTDwsHAwL++vb28u7u6urm5uLi3t7a2trW14d/e3Nva2NfW1NPS0c/OzczLysnIx8bFxMPCwcHAv76+vby8u7q6ubm4uLe3t7a2tuLg393c29nY1tXU09HQz87NzMvKycjHxsXEw8LBwMC/vr69vLy7u7q5ubi4uLe3trbi4d/e3dva2dfW1dPS0dDPzczLysnIx8bFxMTDwsHAwL++vr28vLu7urm5ubi4t7e24+Lg393c29nY19XU09LQz87NzMvKycjHxsXEw8LCwcC/v769vby8u7q6ubm4uLi3t+Ti4d/e3Nva2NfW1dPS0dDPzszLysnIx8bFxcTDwsHBwL++vr28vLu7urq5ubi4t7fk4+Hg3t3c2tnY1tXU09HQz87NzMvKycjHxsXEw8LCwcC/v769vby8u7q6ubm5uLi35ePi4N/d3NvZ2NfV1NPS0c/OzczLysnIx8bFxMPDwsHAwL++vr28vLu7urq5ubi4t+Xj4uDf3tzb2tjX1tTT0tHQzs3My8rJyMfGxcTEw8LBwMC/vr69vLy7u7q6ubm4uLfl5OLh397c29rY19bV09LR0M/NzMvKycjHxsXFxMPCwcDAv76+vby8u7u6urm5uLi35eTi4d/e3dva2dfW1dPS0dDPzczLysnIx8bFxMTDwsHAwL++vr28vLu7urq5ubi4t+bk4+Hg3t3b2tnX1tXT0tHQzs3My8rJyMfGxcTDw8LBwL+/vr29vLy7urq5ubm4uLfm5OPh4N7d29rY19bU09LRz87NzMvKycjHxsXEw8LBwcC/vr69vby7u7q6ubm4uLe35uTj4eDe3dva2NfW1NPS0M/OzczLycjHxsXFxMPCwcDAv769vby8u7q6ubm4uLi3t+bk4uHf3tzb2djX1dTT0dDPzszLysnIx8bFxMPCwcHAv76+vby8u7u6ubm4uLi3t7bm5OLh397c29nY1tXT0tHQzs3My8rIx8bFxMPCwsHAv76+vby8u7u6ubm4uLi3t7a25eTi4N/d3NrZ19bU09LQz87My8rJyMfGxcTDwsHAv76+vby8u7q6ubm4uLe3t7a2tuXj4uDe3dva2NfV1NLRz87NzMrJyMfGxcTDwsHAv76+vby7u7q6ubm4uLe3tra2tbXl4+Hg3tzb2djW1NPR0M/NzMvJyMfGxcTDwsHAv769vby7urq5ubi4t7e2tra1tbW05OPh393c2tjX1dTS0c/OzMvKyMfGxcTCwcC/v769vLu7urm5uLi3t7a2trW1tbS0tOTi4N/d29nY1tTT0dDOzcvKyMfGxMPCwcC/vr28vLu6ubm4uLe3tra1tbW0tLSzs7Pj4uDe3NrY19XT0tDOzcvKyMfGxMPCwb++vby8u7q5ubi3t7a2tbW1tLS0s7Ozs7Ky4+Hf3dvZ2NbU0tDPzcvKyMfFxMPBwL++vby7urm4uLe2trW1tLS0s7OzsrKysrKxseLg3tza2NfV09HPzczKyMfFxMLBv769vLu6ubi3tra1tLSzs7OysrKysbGxsbGxsbDi4N7b2dfV1NLQzszKyMbFw8HAvr28urm4t7a1tbSzs7KysrGxsbGwsLCwsLCwsLCw4d/d29nW1NLQzszKyMbEw8G/vry7ubi3trW0s7KysbGwsLCvr6+vr6+vr6+vr6+vr+De3NrX1dPRz83LyMbEwsC+vbu5uLa1tLKxsbCvr66urq2tra2tra2tra2tra2trq7g3dvZ1tTS0M3LycfEwsC+vLq4trSzsbCvrq2srKurq6urq6urq6urq6ysrKysrKyt393a2NXT0c7MycfFwsC9u7m3tLKxr62sq6qpqKioqKioqKioqampqaqqqqurq6usrN7c2dfV0s/NysjFw8C9u7i2s7GurKqop6alpKSkpKSkpKWlpqanp6ioqampqqqqq6ve29nW1NHOzMnGw8G+u7i1sq+sqqelo6Ggn56enp+foKGioqOkpaWmp6eoqKmpqaqq3dvY1tPQzcvIxcK/vLm1sq+rqKShnpuZmJeXl5iZm5ydnqChoqOkpKWmpqeoqKipqd3a2NXSz83Kx8TBvbq3s6+rp6OempaSjo2MjY+RlJaYmpydn6ChoqOkpaWmp6eoqKnd2tfV0s/MycbDwLy5tbGtqaSfmZOMhX57fICFio6SlZeZm52foKGio6Slpaanp6io3drX1dLPzMnGw7+8uLSwrKeinZaOhXhkQ2J0foaLj5OWmJqcnp+goqOjpKWmpqenqN3a19XSz8zJxsO/vLi1sayoo52XkIh/dXBze4KIjJCTlpianJ6foKKio6Slpqanp6jd2tjV0s/MycbDwL25trKuqqWhnJeSjYmHh4iLjpGTlpianJ2eoKGio6Skpaamp6eo3dvY1dPQzcrHxMG+u7e0sK2ppaGempeVk5KTk5WWmJmbnJ2foKGio6OkpaWmp6enqN7b2dbT0c7LyMXCv7y5trOwraqmpKGfnZubmpqbm5ydnp+goaGio6SkpaWmpqenqKjf3NnX1NHPzMnHxMG+u7m2s7Cuq6mnpaOioaCgoKCgoaGioqOjpKSlpaamp6enqKio393a2NXS0M3LyMXDwL67uLa0sa+tq6mop6alpKSkpKSkpKSlpaWmpqanp6eoqKipqeDd29jW09HOzMnHxcLAvbu5t7Sysa+trKuqqaiop6enp6enp6enp6eoqKioqKmpqanh3tzZ19TS0M3LycbEwr+9u7m3tbSysa+urayrq6qqqampqampqampqampqampqqqq4d/d2tjW09HPzMrIxsPBv727uri2tbOysbCvrq2srKurq6qqqqqqqqqqqqqqqqqqquLg3dvZ1tTS0M3LycfFw8G/vby6uLe1tLOysbCvrq6traysrKurq6urq6urq6urq6vj4N7c2tfV09HPzMrIxsTDwb+9vLq5t7a1tLOysbCvr66ura2trKysrKyrq6urq6ur4+Hf3drY1tTS0M3LycjGxMLAv728urm4trW0s7KxsbCvr66urq2traysrKysrKysrOTi393b2dfV0tDOzMrIx8XDwcC+vbu6ubi2tbSzs7KxsLCvr66urq2tra2srKysrKzl4uDe3NnX1dPRz83LycfGxMLBv768u7q4t7a1tLOzsrGxsK+vr66urq2tra2trKys5ePg3tza2NbU0tDOzMrIxsXDwcC+vby6ubi3trW0s7KysbCwr6+vrq6ura2tra2trOXj4d/c2tjW1NLQzszKyMfFw8LAv728u7m4t7a1tLOzsrGxsLCvr66urq6tra2tra3m4+Hf3dvY1tTS0M7MysnHxcPCwL+9vLu5uLe2tbS0s7KxsbCwr6+vrq6ura2tra2t5uTh393b2dbU0tDOzMrJx8XDwsC/vby7ubi3trW0s7OysbGwsK+vrq6urq2tra2trebk4d/d29nW1NLQzszKyMbFw8HAvr27urm4t7a1tLOysrGwsK+vr66urq2tra2tra3m5OHf3dvY1tTS0M7MysjGxMLBv768u7m4t7a1tLOysrGwsK+vrq6urq2tra2trays5uTh393a2NbU0c/Ny8nHxcPCwL69u7q4t7a1tLOysbGwr6+vrq6ura2tra2srKysrObk4d/d2tjV09HPzcrIxsTCwL+9u7q4t7a1s7KysbCvr66urq2tra2srKysrKysrKzm5OHf3NrX1dPQzszJx8XDwb+9u7q4t7W0s7KxsK+vrq2traysrKysrKysrKysrKys5uPh3tzZ19TSz83LyMbEwb+9u7m4trSzsrCvr66traysq6urq6urq6urq6urq6urq+bj4d7c2dbU0c/MycfFwsC9u7m3tbOysK+urayrq6qqqqqqqqqqqqqqqqqqqqurq6vm4+De29jW09DOy8jGw8C+u7m2tLKwrq2rqqmpqKiop6eoqKioqKmpqampqqqqqqur5uPg3tvY1dLQzcrHxMG+u7m2s7GurKqop6alpaSkpKWlpaampqenqKioqampqqqqqubj4N3b2NXSz8zJxsO/vLm2s7Ctqqelo6KhoKCgoKGhoqOjpKWlpqenqKipqamqqqrm4+Dd2tfU0c7LyMXBvrq3s6+sqKShnpyamZmampudnp+goaKjpKWmpqeoqKmpqaqq5uPg3drX1NHOy8fEwLy5tbCsqKOemZWRj4+QkpSWmZucnqChoqOkpaanp6ioqamqqubj4d7b19TRzsrHw8C8uLOvqqSemJCIgX1/g4mOkpWYm52foKKjpKWmpqeoqKmpqqrn5OHe29jV0c7Lx8PAvLezrqmjnJSLfmk0ZnmDipCUl5qcnqCho6SlpqenqKmpqqqq5+Ti39zY1dLPy8jEwL24tK+qpZ+YkId+eXuCiI6SlpmbnZ+hoqOlpqanqKipqqqqq+jl4t/c2dbT0M3JxsK+urayramkn5qVkY+OkJKVl5qcnp+hoqSlpqenqKmpqqqrq6vp5uPg3drX1NHOy8fEwb25tbKuqqajoJ2bmpqbnJ2foKGio6Wlpqeoqamqqqurq6ys6ufk4d/c2dbT0M3KxsPAvbm2s7CtqqimpKOjoqOjpKSlpqanqKipqaqqq6usrKysrevo5uPg3drX1dLPzMnGw8C9uri1srCurKuqqaioqKioqampqqqrq6usrKysra2tra7s6efk4d/c2dbU0c7LycbDwb68ube1s7Kwr66ura2srKysrKytra2tra2urq6urq6u7evo5ePg3tvY1tPQzsvJxsTCwL27uri2tbSzsrGxsLCvr6+vr6+vr6+vr6+vr6+vr+7s6efk4t/d2tjV09DOzMnHxcPBv728urm4t7a1tLOzsrKysbGxsbGxsbGxsLCwsLDw7evo5uPh3tza19XT0M7MysjGxMLBv728u7q5uLe2trW1tLSzs7OzsrKysrKysbGx8e7s6efl4uDe29nX1dLQzszKyMfFw8LAv769vLu6ubi3t7a2tbW1tLS0s7Ozs7OysvLv7evo5uTh393b2dbU0tDOzcvJx8bEw8LAv769vLu6urm4uLe3tra1tbW0tLS0s7Pz8e7s6ufl4+He3NrY1tTS0M/Ny8rIxsXEwsHAv769vLu7urm5uLi3t7a2tbW1tbS09PLv7evo5uTi4N7c2tjW1NLQz83LysjHxsTDwsHAv769vLy7urq5uLi3t7e2trW1tfXz8O7s6ufl4+Hf3dvZ19XU0tDPzcvKycfGxcTCwcC/v769vLu7urm5uLi3t7e2trX28/Hv7evo5uTi4N7c2tnX1dPS0M7Ny8rJx8bFxMPCwcC/vr28vLu6urm5uLi3t7a29vTy8O7r6efl4+Hf3dva2NbU09HQzs3LysnHxsXEw8LBwL++vb28u7u6ubm4uLe3t/f18/Du7Oro5uTi4N7c29nX1dTS0c/OzMvKyMfGxcTDwsHAv769vby7u7q6ubi4uLf49fPx7+3r6efl4+Hf3dva2NbU09HQzs3MysnIx8bEw8LBwcC/vr29vLu7urm5uLi3+Pb08u/t6+nn5ePh397c2tjX1dPS0M/OzMvKyMfGxcTDwsHAv7++vby8u7q6ubm4uPj29PLw7uzq6Obk4uDe3NvZ19bU0tHPzs3LysnIxsXEw8LBwMC/vr29vLu7urm5uLj59/Ty8O7s6ujm5OLg3t3b2dfW1NPR0M7NzMrJyMfGxcTDwsHAv769vby7u7q6ubi4+ff18vDu7Oro5uTi4N7d29nY1tTT0dDOzczKycjHxsXEw8LBwL++vb28u7u6urm4uPn39fLw7uzq6Obk4uDe3dvZ19bU09HQzs3MysnIx8bEw8LBwcC/vr29vLu7urm5uLj59/Xy8O7s6ujm5OLg3tzb2dfW1NLRz87Ny8rJx8bFxMPCwcC/v769vLy7urq5ubi4+ff08vDu7Oro5uTi4N7c2tnX1dTS0M/NzMvJyMfGxcTDwsHAv769vby7u7q5ubi4t/n29PLw7uvp5+Xj4d/d3NrY1tXT0dDOzcvKycjGxcTDwsHAv76+vby7u7q6ubi4t7f49vTy7+3r6efl4+Hf3dvZ19XU0tDPzczLycjHxsTDwsHAv76+vby7u7q6ubi4t7e3+Pbz8e/t6ujm5OLg3tza2NbU09HPzszLysjHxsTDwsHAv76+vby7u7q5ubi4t7e2tvj18/Du7Orn5ePh393b2dfV09LQzs3LysjHxsTDwsHAv769vLy7urq5uLi3t7a2trX39fLw7evp5+Ti4N7c2tjW1NLQzs3LysjHxcTDwsHAv769vLu6urm5uLe3tra2tbW19vTx7+3q6OXj4d/d2tjW1NLQz83LycjGxcTCwcC/vr28u7q6ubi4t7e2trW1tbS0tPbz8e7s6efk4uDd29nX1dPQz83LycfGxMPCwL++vby7urm5uLe3tra1tbW0tLSzs7P18vDt6+jm4+He3NnX1dPRzszLycfFxMLBv769vLu6ubi3t7a2tbW0tLSzs7OysrKy9PHv7Onn5OLf3drY1dPRzszKyMbEwsG/vry7urm4t7a2tbW0tLOzs7KysrKxsbGxsfPw7uvo5uPg3tvY1tPRzszKx8XDwb++vLu5uLe2tbS0s7OysrGxsbGxsLCwsLCwsLDy7+3q5+Th39zZ1tTRzszJx8TCwL68uri3trSzs7KxsbCwsK+vr6+vr6+vr6+vr6+v8e7s6ebj4N3a19TRz8zJxsTBvry6uLa0s7Gwr6+urq2tra2tra2tra2tra2tra2trfDt6ufk4d7b2NXSz8zJxsPAvbq4tbOxr66sq6qqqqmpqamqqqqqq6urq6usrKysrKzw7Onm4+Dd2tfT0M3JxsPAvLm2s7Ctq6mnpqWlpaWlpaampqenqKipqamqqqqrq6ur7+zo5eLf3NjV0c7Lx8PAvLi1sa2qpqShn56enp6foKGioqOkpaamp6eoqKmpqaqqqu7r6OTh3trX09DMycXBvbm0sKynop6al5WUlJWXmZqcnp+goaKjpKWmpqenqKipqant6ufk4N3Z1tLPy8fDv7q2saynoZuUjYiEhYiLj5OVmJqcnp+hoqOkpKWmpqenqKip7erm4+Dc2dXRzsrGwr25tK+po52Vi39uX2t5g4mOkpWYmpyen6CioqOkpaamp6eoqO3p5uLf3NjU0c3JxcG9uLOuqaOclYyBc2pwe4OJjpKVl5qbnZ6goaKjpKSlpqanp6fs6ebi39vY1NHNycXBvbm0r6qln5qTjomGhoiLjpGUlpianJ2eoKGioqOkpaWmpqen7Onm4t/b2NTRzcnGwr66trGtqaSgnJiVk5KSk5SWl5mam52en6ChoqKjpKSlpaamp+zp5uLf29jU0c3KxsO/u7e0sKyppaKfnZuamZmampucnJ2en6ChoaKjo6SkpaWmpqfs6ebi39zY1dHOy8fEwL25trOvrKmnpKKhoJ+enp6enp+foKChoaKio6OkpKWlpqam7Onm49/c2dXSz8vIxcK+u7i1sq+tq6inpaSjoqGhoaGhoaGioqKjo6OkpKWlpaampu3p5uPg3NnW08/MycbDwL26t7Syr62rqqinpaWko6OjoqKio6Ojo6SkpKSlpaWmpqbt6ubj4N3Z1tPQzcrHxMG+u7m2tLGvrayqqaempqWkpKSko6OkpKSkpKSlpaWmpqam7ern4+Dd2tfT0M3Kx8TCv7y6t7Wzsa+tq6qpqKempaWlpKSkpKSkpKSlpaWlpqampu3q5+Tg3drX1NHOy8jFwr+9uri1s7Gvrqyrqainp6alpaWlpKSkpKSlpaWlpaampqbt6ufk4d3a19TRzsvIxcK/vbq4tbOxr66sq6qoqKempqWlpaSkpKSlpaWlpaWmpqan7urn5OHd2tfU0c7LyMXCv7y6t7Wzsa+trKqpqKempqWlpKSkpKSkpKWlpaWlpqamp+7q5+Th3drX1NHNysfEwb68uba0srCurKqpqKempaWkpKSkpKSkpKSkpaWlpaampqfu6+fk4d3a19TQzcrHxMC9u7i1srCurKqop6alpKSjo6Ojo6Ojo6SkpKSlpaWmpqan7uvo5OHd2tfT0M3JxsO/vLm2s7Ctq6mnpaSjoqKhoaGhoaKioqOjo6SkpaWlpqamp+7r6OTh3trX09DMycXCvru3tLCtqqelo6Ggn56enp6fn6CgoaGioqOjpKSlpaampqfv6+jl4d7a19PPzMjEwb25tbGtqaajoJ2bmpqampqbnJ2en6CgoaKio6SkpaWmpqen7+zo5eHe2tfTz8vIxMC7t7OuqqWhnJiVk5KSk5WWmJmbnJ2foKGhoqOkpKWlpqanp/Ds6eXi3tvX08/Lx8O/u7axrKehm5SOiIWFiIuPkpWXmZudnp+goaKjpKWlpqanp6jw7enm4t/b2NTQzMjEv7u2saulnpaNgXJlb3uEio+TlpibnJ6foaKjpKSlpqanp6io8e7q5+Pg3NjV0c3JxcC8t7Kspp+XjoJ0aXF8hYuQlJeZnJ2foKGjo6Slpqanp6ioqfLv6+jk4d3a1tLOysbCvrm0r6qknpeRjImJi46SlZeanJ6foaKjpKWlpqenqKipqanz8Ozp5eLf29fU0MzIxMC8uLOvqqahnZqYl5eYmpudnp+hoqOkpaWmp6eoqKmpqqqq9PHt6ufj4N3Z1tLOy8fDwLy4tLGtqqeko6GhoaGhoqOjpKWmpqenqKipqaqqqqurq/Xy7+zo5eLe29jU0c7Kx8PAvbm2s7GurKqpqKenp6enqKioqampqqqqq6urq6ysrKz28/Dt6ufj4N3a19PQzcrHxMG+u7m2tLKxr66trKysq6urq6ysrKysrKysra2tra2t+PXy7uvo5eLf3NnW09DNysfFwsC9u7m3trSzsrGwsK+vr66urq6urq6urq6urq6urvn28/Dt6ufk4d7b2NbT0M3LyMbDwb+9vLq4t7a1tLOzsrKxsbGwsLCwsLCwsK+vr6/69/Tx7uzp5uPg3dvY1dPQzsvJx8XDwb++vLu6uLe3trW0tLOzs7KysrGxsbGxsbCw+/j28/Dt6ufl4t/d2tjV09DOzMrIxsTCwb++vbu6ubi4t7a2tbW0tLOzs7KysrKysfz69/Tx7uzp5uTh39za19XT0M7MysjHxcPCwb++vby7urm4uLe2trW1tbS0s7Ozs7L++/j18vDt6ujl4+De29nX1dPQzs3LycfGxMPBwL++vby7urm5uLe3tra1tbW0tLSz//z59vTx7uzp5+Ti393b2dbU0tDPzcvJyMbFw8LBwL++vby7urm5uLi3t7a2tbW0tP/9+vf18u/t6ujm4+Hf3NrY1tTS0M7Ny8nIxsXEwsHAv769vLy7urm5uLi3tra2tbX//vv49vPw7uvp5+Ti4N7b2dfV09LQzszLycjGxcTDwcC/vr29vLu6urm4uLe3tra1//78+fb08e/s6ujl4+Hf3NrY1tTT0c/NzMrJx8bFxMLBwL++vb28u7q6ubi4t7e2tv///Pr39PLv7evo5uTi393b2dfV09LQzs3LysjHxsTDwsHAv769vby7urq5uLi3t7b///36+PXz8O7r6efk4uDe3NrY1tTS0c/NzMrJyMbFxMPCwcC/vr28u7u6ubm4uLe3///9+/j18/Du7Onn5ePg3tza2NbV09HPzszLycjHxcTDwsHAv769vLy7urq5ubi3t////fv49vPx7uzp5+Xj4d7c2tjX1dPR0M7My8nIx8bEw8LBwL++vb28u7q6ubm4uLf///77+Pbz8e7s6ufl4+He3NrY1tXT0c/OzMvJyMfFxMPCwcC/vr29vLu6urm5uLi3///++/j28/Hu7Onn5ePg3tza2NbU09HPzszKycjGxcTDwsHAv769vLy7urq5ubi4t////fv49vPw7uzp5+Ti4N7c2tjW1NLQz83LysjHxsXDwsHAv76+vby7u7q5ubi4t7f///37+PXz8O7r6ebk4t/d29nX1dPRz87My8nIxsXEw8LBwL++vby7u7q6ubi4t7e3///9+vf18vDt6ujl4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby7u7q5ubi4t7e3tv///fr39PLv7Orn5eLg3dvZ19XT0c/Ny8rIx8XEw8HAv76+vby7urq5ubi4t7e2trb///z59vTx7uvp5uPh3tza19XT0c/Ny8nIxsXDwsHAv769vLu7urm5uLi3t7a2trW1//77+Pbz8O3q6OXi4N3b2NbT0c/Ny8nHxsTDwcC/vr28u7u6ubm4uLe3tra2tbW1tP/++/j18u/s6ebk4d7b2dbU0c/Ny8nHxcPCwL++vby7urm5uLi3t7a2trW1tbS0tLT//fr39PHu6+jl4t/c2dfU0c/MysjGxMLAv728u7q5uLi3t7a2tbW1tbS0tLS0s7Oz//z59vPw7ern4+Dd2tfU0c/MycfEwsC+vLu6uLi3trW1tbS0tLSzs7Ozs7Ozs7Kysv/8+PXy7+zo5eLf29jV0s/MycbDwL68uri3tbS0s7KysrKysrKysrKysrKysrKysrL++/j08e7q5+Tg3drW08/MyMXCv7y5t7SzsbCvr6+urq+vr6+vsLCwsLCwsLGxsbGx/vr39PDt6ebi39vY1NDMycXBvbq2s7CurKqqqamqqqqrrKytra6urq+vr6+wsLCwsP369vPw7Ojl4d7a1tLOysbBvbm0sKuopaOhoaKjpKWmp6ipqqusrK2trq6ur6+vr6/9+fby7+vo5ODc2dXQzMjDvrm0rqiinZiVlJaZm56goqSmp6ipqqusrK2trq6ur6+v/fn28u/r5+Pg3NjUz8vGwby2sKqimY6Ce3+Ij5WZnaCipKanqKmqq6ysra2trq6urvz59fLu6+fj39vX08/KxsG7tq+ooJaKd2N0g42TmJyfoaOlp6ipqqqrrKytra2urq78+fXy7uvn49/b19PPy8bBvLexq6WelpCMjZCUmJueoKKkpqeoqaqqq6ysra2trq6u/Pn18u7r5+Pg3NjU0MzIw7+6tbCrp6KfnJucnZ6goqOkpqeoqaqqq6usrK2tra2urv359vLv6+jk4N3Z1dHNycXBvbm1sq6rqKalpKSkpaamp6ipqaqqq6usrK2tra2urq79+fbz7+zo5eHe2tbTz8vIxMG9ure0sa+trKuqqqmqqqqqq6urrKysra2tra2urq6u/fr28/Ds6eXi39vY1NHOysfEwb67uLa0srGvr66tra2tra2tra2tra2trq6urq6urv369/Pw7enm4+Dc2dbTz8zJxsTBvry6uLa1s7KxsLCvr6+urq6urq6urq6urq6urq7++vf08e3q5+Tg3drX1NHOy8nGxMG/vbu5uLa1tLOysrGwsLCvr6+vr6+vr6+urq6u/vv39PHu6+jk4d7b2NXT0M3KyMbDwb+9vLq5t7a1tLOzsrGxsbCwsK+vr6+vr6+vr/77+PXx7uvo5eLf3NnW1NHOzMnHxcPBv728urm4t7a1tLOzsrGxsbCwsK+vr6+vr6/++/j18u/s6OXj4N3a19TSz83LyMbEwsC/vbu6ubi3trW0s7OysrGxsLCwsK+vr6+v/vv49fLv7Onm4+Dd2tjV0tDOy8nHxcPBv768u7q4t7a1tbSzsrKxsbGwsLCvr6+vr//7+PXy7+zp5uPg3dvY1dPQzszJx8XDwcC+vbu6ubi3trW0s7OysbGxsLCwr6+vr6/++/j18u/s6ebj4N3b2NXT0M7MycfFw8HAvr27urm4tra1tLOysrGxsLCwr6+vr6+u/vv49fLv7Onm4+Dd2tjV0tDNy8nHxcPBv768u7m4t7a1tLOzsrKxsbCwr6+vr66urv77+PXx7uvo5eLf3NrX1NLPzcrIxsTCwL69u7q5t7a1tLSzsrGxsLCwr6+vrq6urq7++/f08e7r6OXi39zZ1tPRzszJx8XDwb+9vLq5t7a1tLOzsrGxsLCvr6+urq6urq2t/vr39PDt6ufk4d7b2NXSz83KyMXDwb+9u7q4t7a1tLOysbGwr6+vrq6urq2tra2trf369vPw7enm4+Dd2dbU0c7LyMbDwb+9u7m4trW0s7KxsK+vrq6ura2tra2trKysrKz9+fby7+zo5eLf29jV0s/MycbDwb68uri2tbOysbCvr66tra2srKysrKysrKysrKys/Pn18u7r5+Th3drX09DNysbDwb67ube1s7Gwr66trKyrq6urq6urq6urq6urq6urq/z49fHu6ubj39zY1dHOysfEwL26t7WysK6tq6qqqampqKioqampqampqaqqqqqqqqr7+PTw7enm4t7a19PPzMjEwL25trOwraupp6alpaWlpaWmpqanp6eoqKipqampqaqq+/fz8Ozo5eHd2dXRzcnFwb25tbGtqaajoaCfn5+goKGio6OkpaWmpqenp6ioqKmpqfr38+/r6OTg3NjU0MzHw766tbCrpqGdmZeWlpeYmpydnqChoqOkpKWmpqenp6ioqKn69vPv6+fj39vX08/KxsG8t7GspZ+YkYqHh4qNkZSXmpydn6ChoqOkpaWmpqenqKio+vby7+vn49/b1tLOycXAu7WvqaKZkINxX258hYyRlJeanJ6foKGio6Slpaamp6eoqPr28u7r5+Pf2tbSzsnEwLq1r6mimpGGeXF2f4eMkZSXmpydn6ChoqOkpaWmpqenp6j69vLu6+fj39vW0s7KxcC7trGspqCZk46Li4yPkpWXmZudnp+goaKjpKWlpqanp6eo+vby7+vn49/b19PPysbCvbm0r6umop6amJeXl5iZm5ydnp+goaKjpKSlpaamp6enqPr28+/r5+Pg3NjU0MzIxL+7t7OvrKilo6Gfnp6enp+foKGhoqKjpKSlpaampqenp6j69/Pv7Ojk4NzZ1dHNycXCvrq3s7Ctq6impaSjoqKioqKjo6OkpKWlpaampqenp6io+/fz8Ozo5eHd2dbSzsvHxMC9ure0sa+tq6mop6alpaWlpaWlpaWlpqamp6enp6ioqPv39PDs6eXh3trX09DMycXCv7y5trSysK6sq6qpqKenpqampqampqanp6enp6ioqKj8+PTx7enm4t7b19TQzcrHxMG+u7i2tLKwrq2sq6qpqKiop6enp6enp6enqKioqKip/Pj18e3q5uPf29jV0c7LyMXCv7y6t7WzsbCurayrqqmpqKioqKioqKioqKioqKipqfz59fHu6ufj39zY1dLOy8jFwr+9uri2tLKwr66sq6uqqampqKioqKioqKioqKmpqan9+fXy7urn4+Dc2dXSz8vIxcK/vbq4trSysK+urKurqqmpqaioqKioqKioqKmpqamp/fn28u7r5+Pg3NnV0s7LyMXCv7y6t7Wzsa+urayrqqmpqaioqKioqKioqKmpqampqf369vLu6+fj4NzZ1dHOy8fEwb67uLazsbCurauqqqmoqKioqKioqKioqKipqampqar++vby7+vn4+Dc2NXRzcrGw7+8uba0sa+tq6qpqKinp6enp6enp6ioqKioqampqaqq/vr28+/r5+Tg3NjU0MzJxcG9urazsK6rqainpqWlpaWlpaampqenp6ioqKmpqaqqqv779/Pv6+fk4NzY1NDMx8O/u7ezr6yppqSjoqGhoqKjo6Skpaamp6eoqKmpqaqqqqr/+/fz8Ozo5ODc2NPPy8bCvbi0r6qmop6cm5ubnJ2foKGio6SlpqenqKipqamqqqqr//z49PDs6OTg3NjTz8rGwby2sauknpiTkI+RlJaZnJ6goaKkpaanp6ioqamqqqurq//8+PXx7enl4dzY1M/KxsC7ta+ooJaLfnV6hIySlpqcn6GipKWmp6ioqaqqqqurq6z//fn18u7q5uHd2dXQy8bBvLavqKCWinhodYKMkpeanaCio6Wmp6ipqaqqq6usrKys//769vPv6+fj39rW0s3Iw765s62mn5iSjo6RlZibnqCipKWmp6ipqqqrq6ysrK2trf//+/j08Ozo5ODc2NTPy8bCvbizrqmloZ+enp+goaOkpqeoqamqq6usrK2tra2urq7///z59fHu6ubi3trW0s7KxsK+ubayr6yqqKinp6ioqaqqq6usrK2tra6urq6vr6+v///++vbz7+zo5ODd2dXRzsrGw7+8uba0srCvrq6ura6urq6urq+vr6+vr7CwsLCwsP////v49PHt6ubj39zY1dHOy8fEwb+8uri3tbSzs7KysrGxsbGxsbGxsbGxsbGxsbH////9+fbz7+zo5eLe29jV0s/MycbEwb+9vLq5uLe2trW1tLS0tLOzs7Ozs7KysrKy/////vv49PHu6ufk4d7b2NXSz83KyMbEwsC/vby7urm4uLe3tra1tbW1tLS0tLOzs//////8+fbz8Ozp5uPg3dvY1dLQzsvJx8XEwsG/vr28u7q6ubi4t7e3tra1tbW1tLT//////vv39PHu6+jl4uDd2tjV09HOzMrJx8XEwsHAv769vLu7urm5uLi3t7a2trW1///////8+fbz8O3q5+Ti393a2NXT0c/Ny8nIxsXEwsHAv769vLy7urq5ubi4t7e2tv///////fr39PHu7Onm5OHf3NrY1dPRz83MysjHxsTDwsHAv769vLy7urq5ubi4t7f///////77+PXz8O3q6OXj4N7c2dfV09HPzszKycfGxcTCwcC/vr69vLu7urq5uLi3/////////Pn29PHu7Onm5OLf3dvZ19XT0c/NzMrJx8bFxMPCwcC/vr28vLu6urm5uP////////369/Xy7+3q6OXj4N7c2tjW1NLQz83MysnHxsXEw8LBwL++vby8u7q6ubn////////++/j18/Dt6+jm5OHf3dvZ19XT0dDOzMvKyMfGxMPCwcC/vr69vLu7urq5/////////vv59vPx7uvp5+Ti4N7b2dfW1NLQz83MysnHxsXEw8LBwL++vb28u7q6uf////////78+fb08e7s6efl4uDe3NrY1tTS0c/NzMvJyMfFxMPCwcC/vr69vLu7urn//////////Pn29PHu7Orn5ePg3tza2NbU09HPzszLycjHxcTDwsHAv76+vby7u7q5//////////z59vTx7uzp5+Xi4N7c2tjW1NLRz87My8nIx8XEw8LBwL++vb28u7u6uf////////78+fbz8e7s6efk4uDe3NrY1tTS0M/NzMrJx8bFxMPCwcC/vr28vLu6urn////////++/j28/Du6+nm5OLf3dvZ19XT0dDOzcvKyMfGxMPCwcC/vr69vLu7urm5/////////fv49fLw7ero5ePh3tza2NbU0tHPzczKycfGxcTCwcC/v769vLu7urm5uP////////369/Tx7+zp5+Ti4N3b2dfV09HPzszKycjGxcTDwcC/v769vLu7urm5uLj////////8+fbz8O7r6Obj4d7c2tjV09HQzszLycjGxcTCwcC/vr29vLu6urm5uLi3///////++/j18u/s6ufk4t/d2tjW1NLQzszKycfGxMPCwcC/vr28u7u6ubm4uLe3tv///////fr39PHu6+jl4uDd29jW1NLPzszKyMfFxMLBwL++vby7u7q5ubi4t7e2trX///////z49fLv7Onm4+De29jW1NHPzcvJx8bEw8HAv769vLu6urm4uLe3tra1tbW0//////769/Tx7ern5OHe29nW09HOzMrIxsTDwcC+vby7urq5uLi3tra2tbW0tLSzs//////8+fXy7+vo5eLf3NnW09DOy8nHxcPBv768u7q5uLi3tra1tbS0tLOzs7OysrL////++/f08O3p5uPf3NnW0tDNysfFw8C+vbu6ubi3trW1tLSzs7OysrKysrGxsbGx/////fn28u7r5+Tg3dnW0s/MycbDwL68uri2tbSzs7KysbGxsLCwsLCwsLCwsLCwsP////z49PDs6eXh3drW0s/Lx8TBvru4trSysbCvrq6urq2tra6urq6urq6urq6urq7///769vLv6+fj39vX08/Lx8O/u7e0sa+tq6qpqampqamqqqqrq6urrKysrK2tra2t///9+fXx7enl4dzY1NDLx8K+ubWwrKmmo6KhoaKio6SlpqanqKipqaqqqqurq6ysrP///Pj07+vn49/a1tHNyMO+ubOuqKOemZeWlpiZm52foKKjpKWmp6eoqKmpqqqqq6v///v28u7q5uHd2NTPysXAurWuqKCYj4eCg4iNkZWYm52foKKjpKWlpqenqKipqaqq//769vHt6eTg3NfSzcjDvriyq6SbkYNtIml7hoyRlZianJ6goaKjpKWlpqenqKipqf/9+fXw7Ojk39vW0czHwr23sauknJSLgXx+g4mOkpWXmpydn6ChoqOkpKWmpqenqKj//Pj08Ozn497a1dHMx8K9uLKtp6GclpKPjo+QkpWXmJqcnZ6foKGio6Skpaamp6en//z49O/r5+Le2tXRzMfDvrm0r6umop6bmZeXl5eYmZqbnJ2en6ChoqKjpKSlpqamp//89/Pv6+bi3tnV0czIw7+6trKuqqajoZ+dnJubm5ycnZ2en5+goaKio6OkpaWmpqb/+/fz7+rm4t7Z1dHMyMTAvLi0sK2pp6SioJ+enp2dnZ6en5+goKGhoqOjpKSlpaam//v38+/q5uLd2dXRzMjEwLy4tbGuq6impKKhoJ+fnp6en5+foKChoaKio6OkpKWlpv/79/Pu6ubi3dnV0czIxMC8ubWyr6ypp6WjoqCgn5+enp+fn6CgoaGioqOjpKSlpab/+/fz7urm4t3Z1dDMyMTAvLi1sa6rqKakoqGgn56enp6en5+foKChoaKio6OkpKWl//v38+7q5uHd2dTQzMjDv7u3s7CsqaakoqCfnp2dnZ2dnZ6en5+goaGioqOjpKSlpf/79/Pu6ubh3dnU0MvHwr66tbGtqqajoZ6dnJubm5ubnJydnp6foKChoqKjo6SkpaX/+/fz7urm4d3Y1M/LxsK9uLOvqqainpuZl5aWl5eYmZqbnJ2en5+goaKio6OkpKWl//z38+/q5uLd2dTPysbBvLaxrKahm5aSkI+PkJKTlZeYmpucnZ6foKGioqOkpKWlpv/8+PPv6+bi3dnUz8rFwLu1r6mim5OLhICAhIiMkJOVl5mbnJ2en6ChoqOjpKSlpab//fj08Ovn497Z1dDLxsG7ta+ooZiOgGxMaHmDiY6SlZeZm5yen6ChoqKjpKSlpaam//359fDs6OPf2tbRzMfCvbexqqObkoh9d3qBh4yQlJaZm5yen6ChoqOjpKSlpaamp//++vbx7enl4NzX087JxL+6tK+po52Xko+Oj5GUlpianJ2eoKGhoqOkpKWlpqanp6f///v38u7q5uLd2dXQzMfCvrm0r6umop+dm5ubm5ydnp+goaKjo6Slpaampqenp6io///8+PTw6+fj39vX0s7KxsK9ubWxrquopqSjo6KioqOjpKSlpaWmpqenp6ioqKipqf///fn18e3p5eHd2dXRzcnFwr66t7Sxr62rqqmoqKenp6enp6eoqKioqKmpqampqar///769vLu6ufj39vX1NDMycXCv7y5t7Sysa+urayrq6qqqqqqqqqqqqqqqqqqqqqq////+/fz8Ozo5eHd2tbTz8zJxsPAvbu5t7WzsrGwr66ura2srKysrKurq6urq6urq/////z49fHt6ubj39zY1dLPzMnGw8G/vLq5t7W0s7KxsLCvrq6ura2tra2srKysrKz////9+fby7+vo5OHd2tfU0c7LycbEwb+9u7q4t7a0s7KysbCwr6+vrq6ura2tra2t/////vr38/Ds6ebi39zZ1tPQzcvIxsTBwL68urm4trW0s7OysbGwsK+vr66urq6urv/////7+PTx7ern4+Dd2tfU0s/MysjFw8G/vry7ubi3trW0s7KysbGwsLCvr6+urq7//////Pn18u7r6OTh3tvY1dPQzcvJx8TCwb+9vLq5uLe2tbSzs7KysbGwsLCvr6+v//////359vLv7Ojl4t/c2dbT0c7MysfFw8HAvr27urm4tra1tLOzsrKxsbCwsK+vr//////9+vbz7+zp5eLf3NnW1NHPzMrIxsTCwL69u7q5uLe2tbS0s7KysbGxsLCwsK///////fr28+/s6ebi39zZ1tTRzszKx8XDwsC+vbu6ubi3trW0tLOzsrKxsbGwsLCw//////369vPv7Onl4t/c2dbT0c7LycfFw8G/vry7ubi3tra1tLSzsrKysbGxsLCwsP/////++vbz7+zo5eLf29jV0tDNysjGxMLAvry7urm3t7a1tLSzs7KysbGxsbCwsLD//////fr28+/r6OTh3trX1NHOy8nGxMLAvry7ubi3trW1tLOzsrKysbGxsbCwsLCw//////369vLv6+fk4N3Z1tPPzMnHxMK/vbu6uLe2tbS0s7OysrKxsbGxsbCwsLCwsP/////9+fby7urm49/b2NTRzcrHxMG+vLq4t7W0s7OysrGxsbGxsLCwsLCwsLCwsLD//////fn18e3p5uLe2tbSzsvHw8C9uri2tLOxsbCwr6+vr6+vr6+wsLCwsLCwsLCw//////359fHt6eXh3NjU0MzHw7+8uLWysK6trKysrKytra2urq6vr6+vr6+vr7CwsP/////9+fXw7Ojk4NvX0s7JxL+7trGtqqimpqamp6ipqqusrK2trq6ur6+vr6+vsLD//////fn08Ozo49/a1tHMx8G8tq+po56bm5yeoKKkpqipqqusrK2urq6vr6+vr7Cw//////359fDs6OPf2tXQy8W/ubKqoZaLg4eOlZqeoaSmqKmqq6ytra6ur6+vr7CwsP/////9+fXx7Ojj39rV0MvFv7ixqJ6RfWJ5iZKZnaGkpqipqqusra6ur6+vr7CwsLD//////vn18e3p5ODb1tHMx8G7tK2lnpaSk5aanaGjpqepqqusra6ur6+vsLCwsLCw//////769vLu6uXh3NjTzsnEv7q0r6qmpKKio6WmqKmqq6ytrq6vr6+wsLCwsbGxsf//////+/fz7+vn4t7a1dHNyMS/u7e0sa6trKusrKytra6vr6+wsLCxsbGxsbGxsbH///////z49PDs6OTg3NjU0MzIxcG+u7i2tLOysbGxsbGxsbGxsbKysrKysrKysrKy///////9+fXx7urm4t7b19PQzMnGw8C+vLq4t7a1tbS0tLSzs7Ozs7Ozs7Ozs7Oysv///////vr38+/r6OTh3drW09DNysfFwsC+vbu6ubi4t7a2trW1tbS0tLS0tLOzs7P////////7+PTx7enm49/c2dbT0M3LyMbEwsC/vry7urq5uLi3t7a2tbW1tbS0tLSz/////////Pn18u7r6OTh3tvY1dLQzcvJx8XDwsC/vr28u7q5ubi3t7e2trW1tbS0tP////////369vPw7Onm4+Dd2tfV0tDNy8nHxcTCwcC+vby8u7q5ubi3t7e2trW1tbT////////++vf08e3q5+Th3tvZ1tTRz83LycfGxMPBwL++vby7urq5uLi3t7a2tbW1/////////vv49PHu6+jl4t/d2tfV09DOzMrJx8XEwsHAv769vLu6urm4uLe3tra1tf/////////8+PXy7+zp5uPg3dvY1tPRz83LycjGxcPCwb++vby8u7q5ubi3t7e2trX//////////Pn18u/s6ebj4N7b2dbU0tDOzMrIxsXEwsHAv769vLu6ubm4uLe3tra1//////////z59fLv7Onm4+De29nW1NLQzszKyMfFxMLBwL++vby7urm5uLi3t7a2tf/////////8+PXy7+zp5uPg3tvY1tTRz83LysjGxcPCwb++vby8u7q5ubi3t7a2trX/////////+/j18u7r6OXi4N3a2NXT0c/Ny8nHxcTDwcC/vr28u7q6ubi4t7e2trW1/////////vv49PHu6+fk4t/c2dfU0tDNy8nIxsTDwcC/vr28u7q6ubi4t7e2trW1tf////////769/Pw7erm4+Dd29jV09DOzMrIxsTDwcC/vr28u7q5ubi3t7a2trW1tbT////////9+fby7+zo5eLf3NnW09HOzMrIxsTCwb++vby7urm5uLi3t7a2tbW1tLS0/////////Pn18e7q5+Pg3drX1NHOzMnHxcPBwL69vLu6ubi4t7e2trW1tbS0tLSzs/////////v39PDs6eXi3tvX1NHOy8jGw8HAvry7urm4t7e2trW1tbS0tLSzs7Ozs7P///////769vLv6+fj39zY1NHOysfEwr+9u7q4t7a2tbW0tLSzs7Ozs7OzsrKysrKy///////9+fXx7enl4d3Z1dHNysbDv7y6uLa0s7OysrKxsbGxsbGxsbGxsbGxsbGxsf///////Pj08Ozo49/b19LOycXBvbm2s7Gvrq2tra2urq6vr6+wsLCwsLCwsbGxsbH///////v38+/q5uLd2dTPysXAu7ayraqnpqWmpqeoqqqrrK2trq6vr6+vsLCwsLCw///////79vLu6eXg3NfSzcfCvLavqKKcmZianJ+ipKanqaqrrKytra6ur6+vr6+vsP/////++vby7enk39vW0MvFv7mxqZ+ThXuBi5OZnaGjpaeoqqurrK2trq6urq+vr6///////vr28e3o5N/a1dDKxb+4sKiekYFyfYmSmJygo6WmqKmqq6ysra2trq6urq+v//////769fHt6OTf2tXQy8bAurStpp6YlZSWmp2foqSmp6ipqqusrK2tra6urq6urv/////++vXx7ejk4NvW0s3Iw764s66qpqOioqKjpKWnqKmpqqurrKytra2urq6urq7//////vr28e3p5eDc2NPPysbBvbm1sq+sq6qpqampqqqrq6ysrK2tra2trq6urq6u//////769vLu6ubh3dnV0c3JxcG+ure1s7Gvrq6tra2tra2tra2tra2urq6urq6urv/////++vby7urm4t7b19PPy8jFwb68ube1tLKxsLCvr6+urq6urq6urq6urq6urq7///////v38+/r5+Pf3NjV0c7Kx8TBv726ube1tLOysbGwsK+vr6+vrq6urq6urq6u///////79/Pv6+jk4N3Z1tLPzMnGxMG/vbu5uLa1tLOysrGwsLCvr6+vrq6urq6urv//////+/fz8Ozo5eHd2tfU0M3LyMXDwb69u7m4trW0s7KysbGwsK+vr66urq6urq7///////v38/Ds6OXh3tvX1NHOy8nGxMK/vry6ube2tbSzsrGxsLCvr6+urq6urq6t///////79/Pw7Ojl4d7b19TRzszJx8TCwL68urm3trW0s7KysbCwr6+vrq6urq2trf/////++vfz7+zo5eHe2tfU0c7LycbEwsC+vLq5t7a1tLOysbGwr6+vrq6ura2tra3//////vr28u/r5+Tg3drX09DOy8jGw8G/vbu5uLe1tLOysbGwr6+urq6tra2tra2s//////359vLu6ufj4NzZ1tLPzMrHxMLAvry6uLe1tLOysbCwr66urq2traysrKysrP/////9+fXx7enm4t7b19TRzsvIxcLAvry6uLa1tLKxsLCvrq6tra2srKysrKurq6v//////Pj08Ozo5OHd2dbSz8zIxsPAvru5t7W0srGwr66ura2srKyrq6urq6urq6ur//////v38+/r5+Pf29fU0MzJxsPAvbq4trSysa+ura2sq6urqqqqqqqqqqqqqqqqqv////769vLu6eXh3dnV0c3KxsK/vLm2tLKwrq2sq6qpqamoqKioqKioqKipqampqan////9+fXx7Ojk39vX087KxsK+u7e0sa6sqqmop6ampqampqampqanp6enp6ioqKio/////fj07+vm4t7Z1dDMx8O+urWxrqqnpaOioaGhoaKioqOjpKSkpaWmpqanp6eoqP////z38+7q5eDc19LNycS/urWwq6ainpyampqam5ydnp+goaGio6OkpKWlpqamp6f////79vLt6eTf2tXQy8bBu7WvqaOclpGOjY6QkpWXmZqcnZ6foKGioqOkpKWlpqam////+vbx7Ojj3tnUz8nEvriyq6Sbkoh8dXh/houPk5WXmZucnp+goaGio6OkpaWmpv////r18ezn4t3Y087Iw723sKmhmI6AbFBoeIKIjZGTlpiam52en6ChoaKjo6Slpab///769fDr5uLd2NLNyMK9t7Cqo5uTi4R/gIOHi46RlJaYmZucnZ6foKGioqOkpKWl///++fXw6+bh3NfSzcjDvbiyrKahm5aSj46Oj5CSlJWXmJqbnJ2en6ChoaKjo6Slpf///vn18Ovm4d3Y087Iw765tK+qpaGdmpeWlZWVlZaXmJmam5ydnp+goaGio6OkpKX///769fDr5uLd2NPOycS/uraxramloZ+cm5mZmJiZmZqam5ydnp6foKGhoqOjpKSl////+vXw7Ofi3djTz8rFwLu3s66rp6Shn52cm5qampqbm5ycnZ6fn6ChoqKjpKSlpf////r18ezn4t3Z1M/KxcG8uLOvq6iloqCenZybm5ubm5ycnZ6en6ChoaKjo6SkpaX////79vHs6OPe2dTPysbBvLezr6unpKGfnZybmpqam5ucnJ2en5+goaKio6SkpaWm////+/fy7ejj3trV0MvGwby3sq2ppaGenJqZmJiZmZqbm5ydnp+goaGio6OkpaWmpv////z38+7p5N/a1dDLxsC7trCrpqGcmJaUlJSVlpeZmpucnZ+foKGio6SkpaWmpqf////9+PPv6uXg29bRy8bAu7WuqKGalI6LioyOkZOWmJqbnZ6foKGio6Skpaamp6eo/////vn18Ovm4dzX0szHwbu0rqaelIl7c3eAiI2RlZianJ2foKGio6Slpaanp6ioqP/////79vHs6OPe2dPOycO9tq+on5SHdWJxf4iOk5aZnJ6foaKjpKWlpqenqKipqan//////Pfz7unl4NvW0cvGwLq0raael5CMjI6SlZibnZ+goqOkpaamp6ioqamqqqqq//////359fDr5+Ld2NTPycS/ubSvqaWhnpycnZ6foaKjpKWmp6eoqamqqqqrq6urrP//////+/by7unl4NzX0s7JxMC7t7OvrKqop6ampqenqKipqaqqq6urrKysrKytra3///////349PDs5+Pf2tbSzsrGwr67t7Wysa+ura2tra2tra2tra2trq6urq6urq6u////////+/by7urm4t7a1tLOy8fEwb68ubi2tbOzsrGxsbCwsLCwsLCwsLCwsLCwsP////////359fHt6eXh3trW09DMycbEwb+9vLq5uLe2tbS0tLOzs7KysrKysbGxsbH/////////+/fz7+zo5OHd2tfU0c7LycbEwsC/vby7urm4t7e2trW1tLS0s7Ozs7Ky//////////359fLu6+fk4d3a19TSz83KyMbEw8HAvr28u7q5ubi3t7a2tbW1tLS0s///////////+/f08O3q5+Pg3drY1dLQzszKyMbEw8HAv769vLu6ubm4uLe3tra1tbX///////////359vLv7Onm4+Dd2tjV09HPzcvJx8bEw8HAv769vLu7urm5uLe3tra2///////////++/j08e7r6OXi393a2NXT0c/Ny8rIxsXEwsHAv769vLu7urm5uLi3t/////////////z59vPw7ern5OHf3NrX1dPRz83MysjHxcTDwsG/vr69vLu6urm5uLf////////////9+vf08e7r6Obj4N7b2dfV09HPzcvKyMfFxMPCwcC/vr28u7u6ubm4/////////////vv49fLv7Orn5OLf3drY1tTS0M7Ny8rIx8XEw8LBwL++vby7u7q5uf/////////////8+fbz8O3q6OXj4N7b2dfV09HPzszKycfGxcTCwcC/vr69vLu7urn//////////////fr29PHu6+jm4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby8u7q6//////////////369/Tx7uvp5uTh39za2NbU0tDPzcvKyMfGxMPCwcC/vr29vLu6uv/////////////9+vf08e7r6ebk4d/c2tjW1NLQz83LysjHxsTDwsHAv769vby7urr//////////////fr39PHu6+jm4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby8u7q6//////////////z59vPw7evo5ePg3tvZ19XT0c/OzMrJx8bFxMPBwL+/vr28u7u6uv/////////////8+fXy7+3q5+Ti393a2NbU0tDOzcvJyMfFxMPCwcC/vr28vLu6urn////////////++/j18e7r6ebj4N7b2dfV09HPzcvKyMfFxMPCwcC/vr28vLu6urm5/////////////fr38/Dt6ufk4d/c2tfV09HPzcvKyMfFxMPCwcC/vr28vLu6urm5uP////////////z49fLv6+jl4t/d2tjV09HPzcvJyMbFw8LBwL++vb28u7q6ubm4uLf///////////769/Pw7enm4+Dd2tjV09DOzMrIx8XEwsHAv769vLy7urq5ubi4t7e2///////////9+fXy7uvn5ODd2tfV0s/Ny8nHxcTCwcC/vr28u7u6ubm4uLe3t7a2tv//////////+/fz7+zo5OHe2tfU0c7MycfFw8HAv769vLu6urm4uLe3t7a2trW1tbX//////////fn18e3p5eLe2tfT0M3Kx8XCwL+9vLu6ubi4t7e2tra1tbW1tbS0tLS0//////////v38+/r5+Pe2tbTz8vIxMG/vbu5uLe2tbW1tLS0tLS0s7Ozs7Ozs7Ozs/////////769fHt6OTg29fSzsrGwr67uLW0srGxsLCwsLGxsbGxsbGxsbKysrKysbH////////8+PTv6+bh3djTzsnEv7u2sq+sqqqpqqqrrKytra6ur6+vsLCwsLCwsLCw////////+/fy7enk39rV0MrFv7mzraein56eoKKkpaeoqaqrrK2trq6ur6+vr6+vr////////vr18ezn4t3Y0s3Hwbqzq6KYjoiKkJWanqGjpaeoqaqrq6ysra2urq6urq////////359O/r5uHc1tHLxb+4sKecjnhHdIaQlpueoaOlpqipqaqrq6ysra2tra6u///////9+PPv6uXg29bQy8W/uLGpoZiQi4yQlJicnqGjpKanqKmpqqqrq6ysrK2trf///////Pfz7unl4NvW0MvGwLq1r6mkn5ybm5yen6GipKWmp6eoqamqqqurq6ysrKz///////z38u7p5ODb1tHMx8K9uLSvq6ilpKOio6OkpKWmpqeoqKmpqaqqq6urq6ys///////79/Lu6eTg29bSzcnEwLy4tLGuq6mop6ampqamp6enqKioqamqqqqqq6urq///////+/by7enk4NvX0s7KxsK+ure0sa+tq6qpqaioqKioqKioqKmpqamqqqqqq6v///////v28u3p5ODc19PPy8fDv7y5trOxr62sq6qpqaioqKioqKipqampqaqqqqqr///////69vHt6eTg29fTz8vHxMC9ure0srCurayrqqmpqKioqKioqKipqampqqqqqv//////+vbx7ejk39vX08/Lx8PAvbq3tLKwrq2rqqqpqKioqKioqKioqKipqampqqr//////vr18ezo49/b1tLOysbCv7u4trOxr62sqqmpqKinp6enp6enqKioqKmpqamp//////759fDs5+Pe2tXRzcnFwb25trOxrqyrqainp6ampqampqanp6enqKioqKmpqf/////++fTw6+fi3dnU0MvHwr66trOwraupp6alpaSkpKSlpaWmpqamp6enqKioqan//////fn07+vm4dzY087JxMC7t7Kuq6ilo6KhoaGhoqKjo6SkpaWlpqanp6eoqKip//////359O/q5eHc19LMx8K9t7KtqKOgnZubm5ydnp+goaGio6SkpaWmpqenqKioqP/////9+PTv6uXg29bRy8bAurStp6CZlJCPkZOVmJqcnZ+goaKjpKSlpqanp6eoqKj//////fj07+rl4NvV0MvFv7ixqqGXjH91eoOLkJSXmpyen6Gio6SkpaWmpqenqKio//////359O/q5eDb1tDLxb+4samhlol3ZXOAiY+Ul5qcnqChoqOkpKWmpqenp6ioqP/////++fTv6+bh3NbRzMbAurStpp6XkIyMjpGVl5qcnp+hoqOjpKWlpqanp6ioqKn//////vn18Ovm4t3Y087Iw764sq2oo5+cmpqbnJ2en6ChoqOkpaWmpqenp6ioqKmp///////69fHs5+Pe2dTQy8bBvLizr6uopqSjoqKio6OjpKSlpaamp6enqKioqKmpqf//////+/by7enk39vW0s3JxcG8ubWyr62rqainp6empqenp6enp6ioqKioqampqan///////v38u7q5eHd2NTQzMjEwL26t7SysK6trKuqqampqampqampqampqampqaqq///////8+PPv6+bi3trW0s7Kx8PAvbq4tbOysK+urayrq6uqqqqqqqqqqqqqqqqqqv///////fj08Ozn49/b19TQzMnGw8C9uri2tLOxsK+uraysrKurq6qqqqqqqqqqqqr///////359fDs6OTg3NjV0c7Kx8TBv7y6uLa0s7Gwr66uraysrKurq6urq6urq6ur///////9+fXx7enl4d3Z1dLPy8jFwsC9u7m3tbSysbCvrq6traysrKurq6urq6urq////////vr18e3p5eHd2dbSz8zIxcPAvru5t7a0s7Gwr6+ura2srKysq6urq6urq6v///////769fHt6eXh3dnW0s/LyMXCwL27ube1tLKxsK+urq2trKysrKurq6urq6ur///////++vXx7enl4d3Z1dHOysfEwb68ure2tLOxsK+urq2trKysrKurq6urq6urq////////vr18e3o5ODc2NTQzMnFwr+8ure1tLKxsK+ura2srKyrq6urq6urq6urq6v///////759fDs6OPf29fSzsrHw7+8ube0srGvrq2srKurq6urq6urq6urq6urq6ur///////++fXw7Ofj3trV0czIxMC8uLWysK6sq6qqqqmpqamqqqqqqqqqq6urq6urq////////fn08Ovm4t3Y08/KxcC8t7OvrKqop6ampqamp6eoqKmpqaqqqqqqq6urq6v///////359O/r5uHc19LNx8K8t7Gsp6Ogn56foKGio6SlpqeoqKmpqaqqqqurq6ur///////9+fTv6uXg29bRy8W/ubKro5yVkZGTlpqcn6GipKWmp6ioqamqqqqrq6urq////////vn07+rl4NvW0MrEvrevppyPfWx5ho+VmZ2foaOkpqenqKmpqqqqq6urq6z///////759fDr5uHc1tHLxb+4sKiekoV7gImRlpqdoKKkpaanqKmpqqqqq6urrKys////////+vXw7Ofi3dfSzcfBu7Sup6Cbl5aYmpyfoaKkpaanqKmpqqqrq6urrKysrP////////v28e3o497Z1M/Kxb+6tbCrqKWjo6OjpKWmp6ioqamqqqurq6ysrKysrK3////////79/Lu6eTg29bSzcjEv7u3tLCurKuqqqmpqqqqqqurq6ysrKysrK2tra2t/////////Pjz7+rm4t3Z1NDMyMTAvbq3tLKxsK+ura2tra2tra2tra2tra2tra2trv////////359PDs6OPf29fTz8vIxMG+vLm3tbSzsrGwsK+vr6+urq6urq6urq6urq7////////++vbx7enl4d3Z1dLOy8fEwr+9u7m3trW0s7KxsbCwsK+vr6+vr6+vr6+u//////////v28u7q5uLe29fU0M3Kx8TCv727uri3trW0s7KysbGxsLCwsK+vr6+vr//////////79/Pv6+fj4NzY1dLPzMnGxMG/vbu6uLe2tbS0s7KysbGxsLCwsLCwr6///////////Pj08Ozo5ODd2dbT0M3Kx8XCwL69u7m4t7a1tLSzsrKysbGxsLCwsLCw//////////z49PDs6OTh3drW09DNysjFw8G/vbu6ube2tbW0s7OysrKxsbGxsLCwsP/////////9+PTw7Ojl4d3a1tPQzcrHxcLAvr27uri3trW1tLOzsrKysbGxsbGwsLD//////////fj08Ozo5ODd2dXSz8zJxsTBv728urm4t7a1tLSzs7KysrGxsbGxsbGw//////////349PDs6OTg3NjU0c3Kx8TCv728uri3trW1tLOzs7KysrKxsbGxsbGxsf/////////8+PTv6+fj39rW08/LyMXCv727ube2tbS0s7OysrKysbGxsbGxsbGxsbH//////////Pjz7+rm4t3Z1dDMyMTBvru5t7W0s7KysbGxsbGxsbGxsbGxsbGxsbGx//////////z48+7q5eDc19LOycXAvLi1s7Gwr66urq+vr6+wsLCwsLGxsbGxsbGxsf/////////89/Pu6eTf2tXQy8XAu7axraqpqKipqqusra2ur6+vsLCwsbGxsbGxsbH//////////Pfz7unk39nUzsjCu7Wtp6GdnJ6go6Wnqausra6ur7CwsLGxsbGxsbGx//////////z48+7p5N7Z083HwLiwppmKf4aRmJ6ipaiqq62urq+wsLCxsbGxsbKysv/////////9+PPu6eTf2dTOx8C5sKaZiXuEkJmeo6aoqqytrq+wsLGxsbGysrKysrL//////////vn07+rl4NvW0MrEvbavp6GdnZ+hpKepq6ytr6+wsbGxsrKysrKysrKy///////////69fHs5+Ld2NPOyMO9uLSwraurq6ytrq6vsLGxsrKys7Ozs7Ozs7Ozs///////////+/fy7unk4NvW0s3JxMC9ube1tLOysrKzs7Ozs7S0tLS0tLS0tLS0tLT///////////349PDr5+Pe2tbSzsrHw8C+vLq5uLe3t7a2tra2trW1tbW1tbW1tLS0///////////++vbx7enl4d3Z1tLPzMnGxMLAvr28u7q6ubm4uLe3t7e2tra2tbW1tf////////////v38+/r6OTg3dnW09DNysjGxMLBwL69vLy7urq5ubi4t7e3tra2trX////////////9+fXx7erm49/c2dbT0M7MycfGxMPBwL++vby7u7q6ubm4uLe3tra2/////////////vr28+/s6OXh3tvY1tPRzszKyMfFxMLBwL++vby7u7q5ubi4t7e3tv/////////////79/Tw7erm4+Dd2tjV09DOzMrJx8XEw8HAv769vLy7urq5uLi3t7f//////////////Pj18e7r6OXi39zZ19TS0M7MysjHxcTDwcC/vr28vLu6urm4uLe3//////////////359vLv7Onm4+Dd2tjV09HPzcvJyMbFw8LBwL++vby7u7q5ubi4t//////////////9+fbz7+zp5uPg3tvZ1tTS0M7MysjHxcTDwcC/vr28u7u6ubm4uLf//////////////fr28/Ds6ebj4d7b2dbU0tDOzMrJx8XEw8HAv769vLu7urm5uLe3//////////////359vPv7Onm4+De29nW1NLQzszKyMfFxMLBwL++vby7urq5uLi3t//////////////8+fXy7+zp5uPg3dvY1tPRz83LycjGxcPCwcC+vb28u7q5ubi3t7b//////////////Pj18e7r6OXi39za19XS0M7MysnHxcTCwcC/vr28u7q5ubi3t7a2/////////////vv39PDt6ufj4N7b2NbT0c/Ny8nHxsTDwcC/vr28u7q5ubi3t7a2tf////////////359vLv6+jl4t/c2dbU0c/Ny8nHxcTCwcC+vby7urq5uLi3tra1tbT////////////8+PTx7erm4+Dd2tfU0c/Ny8jHxcPCwL++vby7urm4t7e2trW1tLS0///////////++vby7+vn5ODd2tfU0c/MysjGxMLAv768u7q5ubi3tra1tbS0tLOzs////////////Pj08Ozp5eHe2tfU0c7LycbEwsC/vby7urm4t7a2tbW0tLOzs7KysrL///////////r28u7q5uLe2tfT0M3Kx8TCwL68u7m4t7a1tbS0s7OysrKysbGxsbGw//////////349PDr5+Pf29fTz8vIxcK/vbu5t7a1tLOysrKxsbGwsLCwsLCwr6+vr//////////79vLt6eTg29fSzsrGwr+8uba0s7Gwr6+vrq6urq6urq6urq6urq6urq7////////++fTv6+bh3NjTzsnFwLy4tLGurKuqqqmpqqqqqqurq6usrKysrKysra2t/////////Pfy7ejj3tnUz8nEv7m0r6qmpKKhoaKjo6SlpqenqKipqaqqqqurq6urrP////////r18Ovm4dvW0cvFv7myq6SemJSTlJeZm52foaKjpKWmp6eoqKmpqaqqqqv///////759O/p5N/Z1M7Iwbu0rKOZjoB3fIWMkZWZm52foKKjpKWlpqenqKioqamp///////99/Lt6OLd19LMxr+5samgloh2ZHJ/iI6TlpmbnZ+goaKjpKWlpqanp6ioqf///////Pbx7Ofh3NbRy8W/uLKqo5uTjIiIio6RlJaYmpydn6ChoqOjpKWlpqanp6j///////v28Ovm4NvW0MrFv7mzraeinZiVlJSUlZaYmZucnZ6foKGioqOkpKWmpqan///////69fDq5eDb1dDKxcC6tbCrpqKfnJqZmZmZmpqbnJ2en5+goaKio6SkpaWmpv//////+fTv6uXf2tXQysXAu7axramloqCenJubm5ubnJydnp6foKChoqKjpKSlpab//////vn07+nk39rVz8rFwLu2sq6qp6Shn52cnJubm5ycnZ2en5+goaGio6OkpKWl//////759O7p5N/Z1M/KxcC7trGtqaajoJ6dnJubm5ubnJydnZ6foKChoqKjo6Slpf/////++fPu6eTe2dTOycS+ubSwq6ejoJ6cmpmZmZmZmpubnJ2enp+goaGio6OkpKX//////vjz7unj3tnTzsjDvbiyraijn5uZl5aVlpaXmJmam5ucnZ6foKChoqKjpKSl//////748+7p497Y083Hwby2r6mjnZiTkI6Oj5GSlJaXmJqbnJ2en6CgoaKio6Skpf/////++fPu6ePe2NPNx8G7tK2mnpWMhICAg4iLj5KUlpiZm5ydnp+goaGio6OkpKX//////vn07+nk3tnTzcfBurSspJuQgmxHaHmCiY2RlJaYmpucnZ6foKGioqOjpKSl///////69O/q5d/a1M7Iwry1rqeelYp/eXuBh4yQk5WXmZucnZ6foKGhoqOjpKSlpf//////+vXw6+bg29XQysW/ubKspZ+Zk5CPj5GTlZeZmpudnp+foKGioqOjpKSlpab///////v28ezn4tzX0s3Hwr23sq2oo6Cdm5qampucnZ2en6CgoaKio6OkpKWlpaam///////89/Lt6OPe2dTPysXBvLezr6uopqSioaGgoKGhoaGioqOjpKSkpaWlpqamp////////fjz7url4NvW0s3JxMC8uLSxrqyqqKempaSkpKSkpKSkpaWlpaampqenp6f///////759PDr5uLd2NTQy8fDwLy5trOwrqyrqqmop6empqampqampqanp6enp6io////////+vXx7Ojj39rW0s7KxsK/vLm2tLKwrq2rqqqpqKioqKenp6enqKioqKioqf////////v28u3p5ODc19PPy8jEwb67uLa0srCvrayrq6qpqampqKioqKioqampqan////////89/Pu6uXh3djU0M3JxsK/vLq3tbOxsK+trKyrqqqqqampqampqampqaqq/////////Pjz7+rm4d3Z1dHNycbDwL26uLWzsrCvrq2srKurqqqqqqqqqqqqqqqqqv////////349O/r5uLd2dXRzcnGwr+8ube1s7Gwr66trKyrq6uqqqqqqqqqqqqrq6v////////++fTw6+bi3dnV0MzIxcG+u7i1s7Gwr66trKyrq6urq6urq6urq6urq6ur/////////vn18Ovm4t3Y1M/Lx8O/u7i1srCvraysq6urqqqqqqqrq6urq6urq6ysrP////////769fDr5uHd2NPOycTAu7e0sK6sqqqpqampqamqqqqqq6urq6usrKysrKz/////////+vXw6+bh3NfSzMfCvLeyraqnpaSkpKWmp6eoqamqqqurq6ysrKysra2t//////////v28ezm4dzW0cvFv7iyq6Sfm5qbnZ+ho6Wmp6ipqqqrq6ysrK2tra2trf/////////79vHs5+Lc1tHKxL21raOYi4OHj5WanqGkpqeoqaqrrKysra2trq6urq7//////////Pfy7ejj3dfSy8W+tq2ilYFsfYuUmp+ipKaoqaqrrKytra6urq6vr6+v//////////359O/p5N/Z1M7Iwbqzq6Ocl5eanaCjpaepqqusra2urq+vr6+vr7CwsP//////////+vXw6+bh3NfRzMbAu7WwrKmnp6eoqaqrrK2urq+vsLCwsLCwsLCxsbH///////////z38u3p5N/a1dDLx8K+ure0srGwsLCwsLCwsbGxsbGysrKysrKysrGx///////////9+fTw6+fi3tnV0czIxcG+vLq4t7a1tbS0tLS0tLS0s7Ozs7Ozs7Oysv////////////v28u7q5eHd2dXRzsvHxcLAvr27urm5uLe3t7a2trW1tbW0tLS0s7M="};var je={ghi_chu:"S\u1ED5 d\u1EEF li\u1EC7u c\u1EE7a trang toan/riemann. M\u1ED7i m\u1ED1c c\xF3 tr\u1EA1ng th\xE1i (tt) v\xE0 ngu\u1ED3n. tt: dinh-ly = \u0111\xE3 ch\u1EE9ng minh v\xE0 \u0111\u01B0\u1EE3c c\xF4ng nh\u1EADn; gia-thuyet = ph\u1ECFng \u0111o\xE1n; tinh-toan = ki\u1EC3m b\u1EB1ng m\xE1y t\xEDnh; y-tuong = ch\u01B0\u01A1ng tr\xECnh, \xFD t\u01B0\u1EDFng; tuyen-bo = tuy\xEAn b\u1ED1 ch\u01B0a qua b\xECnh duy\u1EC7t; hinh-thuc = \u0111\xE3 qua ki\u1EC3m h\xECnh th\u1EE9c (Lean) nh\u01B0ng ch\u01B0a c\xF3 b\u1EA3n ng\u01B0\u1EDDi \u0111\u1ECDc \u0111\u01B0\u1EE3c. C\u1ED9t 'tam' l\xE0 thang \u0111\u1ECBnh t\xEDnh 0\u201310 do trang \u0111\u1EB7t \u0111\u1EC3 v\u1EBD hai nh\xE1nh, kh\xF4ng ph\u1EA3i s\u1ED1 \u0111o.",nguon:{clay:["Vi\u1EC7n To\xE1n Clay, b\xE0i to\xE1n Thi\xEAn ni\xEAn k\u1EC9: gi\u1EA3 thuy\u1EBFt Riemann","https://www.claymath.org/millennium/riemann-hypothesis/"],bombieri:["E. Bombieri, m\xF4 t\u1EA3 ch\xEDnh th\u1EE9c b\xE0i to\xE1n (Clay)","https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf"],conrey:["J. B. Conrey, The Riemann Hypothesis, Notices of the AMS 50 (2003)","https://www.ams.org/notices/200303/fea-conrey-web.pdf"],wiki:["Wikipedia, Riemann hypothesis (b\u1EA3ng ki\u1EC3m s\u1ED1, t\u1EC9 l\u1EC7 kh\xF4ng \u0111i\u1EC3m, c\xE1c m\u1ED1c 2026), \u0111\u1ECDc 21/11/2026","https://en.wikipedia.org/wiki/Riemann_hypothesis"],przz:["Pratt, Robles, Zaharescu, Zeindler, More than five-twelfths of the zeros of \u03B6 are on the critical line (2020)","https://arxiv.org/abs/1802.10521"],pt:["Platt, Trudgian, The Riemann hypothesis is true up to 3\xB710\xB9\xB2 (2021)","https://arxiv.org/abs/2004.09765"],rt:["Rodgers, Tao, The de Bruijn\u2013Newman constant is non-negative (2020)","https://arxiv.org/abs/1801.05914"],a67:["Anthropic, b\xE0i nghi\xEAn c\u1EE9u v\u1EC1 t\u1EC9 l\u1EC7 kh\xF4ng \u0111i\u1EC3m 67,2 % (10/8/2026)","https://www.anthropic.com/research/riemann-zeta"],tc8:["TechCrunch, 11/8/2026: m\xF4 h\xECnh ch\u01B0a ph\xE1t h\xE0nh c\u1EE7a Anthropic v\xE0 gi\u1EA3 thuy\u1EBFt Riemann","https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/"],sciam8:["Scientific American, 8/2026: AI ch\u01B0a gi\u1EA3i b\xE0i to\xE1n h\xF3c b\xFAa nh\u1EA5t","https://scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math"],note:["L. Alp\xF6ge, ghi ch\xFA b\u1ED1n trang (20/11/2026)","https://alpo.ge/remark.pdf"],drew:["A. Sutherland (MIT), trang ki\u1EC3m b\u1EA3n Lean, c\u1EADp nh\u1EADt 20/11/2026 22:05 UTC","https://math.mit.edu/~drew/grh/"],ap:["AP qua Boston Globe, 21/11/2026","https://www.bostonglobe.com/2026/11/21/nation/anthropic-worker-solve-math-problems-ai-riemann-hypothesis/"],afp:["AFP qua TheJournal.ie, 21/11/2026","https://www.thejournal.ie/riemann-hypothesis-proved-by-ai-7233391-Nov2026/"],tc11:["TechCrunch, 20/11/2026: AI tuy\xEAn b\u1ED1 gi\u1EA3i, m\u1ED9t ng\u01B0\u1EDDi c\u0169ng v\u1EADy","https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/"],ie:["Interesting Engineering, 20/11/2026","https://interestingengineering.com/ai-robotics/anthropic-167-year-old-riemann-hypothesis-claude"],fello:["Fello AI, 20/11/2026: \u0111o kho Lean, d\xF2ng th\u1EDDi gian trong ng\xE0y","https://felloai.com/riemann-hypothesis-solved/"],dc:["DataCamp, 20/11/2026: hai ch\u1EE9ng minh trong m\u1ED9t ng\xE0y","https://www.datacamp.com/blog/ai-solved-riemann-hypothesis"],nature21:["Davies v\xE0 c\u1ED9ng s\u1EF1, Advancing mathematics by guiding human intuition with AI, Nature 600 (2021)","https://www.nature.com/articles/s41586-021-04086-x"],funsearch:["Romera-Paredes v\xE0 c\u1ED9ng s\u1EF1, Mathematical discoveries from program search with large language models, Nature 625 (2023)","https://www.nature.com/articles/s41586-023-06924-6"],imo24:["Google DeepMind, AlphaProof v\xE0 AlphaGeometry 2 \u0111\u1EA1t m\u1EE9c huy ch\u01B0\u01A1ng b\u1EA1c IMO (7/2024)","https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/"],imo25:["Google DeepMind, Gemini Deep Think \u0111\u1EA1t m\u1EE9c huy ch\u01B0\u01A1ng v\xE0ng IMO (7/2025)","https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"],lt:["Wikipedia, Logic Theorist","https://en.wikipedia.org/wiki/Logic_Theorist"],"4c":["Wikipedia, Four color theorem","https://en.wikipedia.org/wiki/Four_color_theorem"],robbins:["W. McCune, Solution of the Robbins Problem, J. Automated Reasoning 19 (1997)","https://doi.org/10.1023/A:1005843212881"]},moc:[{id:"euclid",nam:-300,nhanh:"so",nguoi:"Euclid",ten:"S\u1ED1 nguy\xEAn t\u1ED1 l\xE0 v\xF4 h\u1EA1n",y:"Gi\u1EA3 s\u1EED ch\u1EC9 c\xF3 h\u1EEFu h\u1EA1n s\u1ED1 nguy\xEAn t\u1ED1, nh\xE2n t\u1EA5t c\u1EA3 l\u1EA1i r\u1ED3i c\u1ED9ng 1 th\xEC \u0111\u01B0\u1EE3c m\u1ED9t s\u1ED1 kh\xF4ng chia h\u1EBFt cho s\u1ED1 n\xE0o trong \u0111\xF3. B\xE0i to\xE1n v\u1EC1 s\u1ED1 nguy\xEAn t\u1ED1 b\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\xE2y.",tt:"dinh-ly",tam:.6,src:["conrey"]},{id:"euler",nam:1737,nhanh:"gt",nguoi:"Leonhard Euler",ten:"T\xEDch Euler",y:"T\u1ED5ng 1/n\u02E2 tr\xEAn m\u1ECDi s\u1ED1 t\u1EF1 nhi\xEAn b\u1EB1ng t\xEDch 1/(1 \u2212 p\u207B\u02E2) tr\xEAn m\u1ECDi s\u1ED1 nguy\xEAn t\u1ED1. L\u1EA7n \u0111\u1EA7u gi\u1EA3i t\xEDch n\xF3i \u0111\u01B0\u1EE3c v\u1EC1 s\u1ED1 nguy\xEAn t\u1ED1.",tt:"dinh-ly",tam:1.6,src:["conrey","bombieri"]},{id:"gauss",nam:1792,nhanh:"so",nguoi:"Carl Friedrich Gauss",ten:"M\u1EADt \u0111\u1ED9 1/ln x",y:"\u0110\u1EBFm b\u1EA3ng s\u1ED1 nguy\xEAn t\u1ED1 n\u0103m 15 tu\u1ED5i, Gauss \u0111o\xE1n quanh x c\u1EE9 kho\u1EA3ng ln x s\u1ED1 th\xEC c\xF3 m\u1ED9t s\u1ED1 nguy\xEAn t\u1ED1, n\xEAn \u03C0(x) g\u1EA7n b\u1EB1ng Li(x).",tt:"gia-thuyet",tam:2.1,src:["conrey"]},{id:"dirichlet",nam:1837,nhanh:"gt",nguoi:"Peter Gustav Lejeune Dirichlet",ten:"H\xE0m L",y:"D\xF9ng chu\u1ED7i L(s, \u03C7) \u0111\u1EC3 ch\u1EE9ng minh m\u1ECDi c\u1EA5p s\u1ED1 c\u1ED9ng a + nq (a, q nguy\xEAn t\u1ED1 c\xF9ng nhau) ch\u1EE9a v\xF4 h\u1EA1n s\u1ED1 nguy\xEAn t\u1ED1. Gi\u1EA3 thuy\u1EBFt Riemann t\u1ED5ng qu\xE1t n\xF3i v\u1EC1 kh\xF4ng \u0111i\u1EC3m c\u1EE7a ch\xEDnh c\xE1c h\xE0m n\xE0y.",tt:"dinh-ly",tam:2.6,src:["conrey"]},{id:"chebyshev",nam:1850,nhanh:"so",nguoi:"Pafnuty Chebyshev",ten:"K\u1EB9p \u03C0(x) gi\u1EEFa hai h\u1EB1ng s\u1ED1",y:"Ch\u1EE9ng minh \u03C0(x) n\u1EB1m gi\u1EEFa hai b\u1ED9i c\u1EE7a x/ln x v\xE0 \u0111\u01B0a v\xE0o h\xE0m \u03C8(x), t\u1ED5ng ln p tr\xEAn c\xE1c lu\u1EF9 th\u1EEBa nguy\xEAn t\u1ED1, th\u1EE9 m\xE0 c\xF4ng th\u1EE9c t\u01B0\u1EDDng minh c\u1EE7a Riemann t\xEDnh \u0111\u01B0\u1EE3c.",tt:"dinh-ly",tam:3,src:["conrey"]},{id:"riemann",nam:1859,nhanh:"gt",nguoi:"Bernhard Riemann",ten:"B\xE0i b\xE1o t\xE1m trang",y:"K\xE9o \u03B6(s) ra to\xE0n m\u1EB7t ph\u1EB3ng ph\u1EE9c, t\xECm ph\u01B0\u01A1ng tr\xECnh h\xE0m, vi\u1EBFt \u03C0(x) th\xE0nh t\u1ED5ng tr\xEAn c\xE1c kh\xF4ng \u0111i\u1EC3m c\u1EE7a \u03B6, v\xE0 ghi ch\xFA r\u1EB1ng r\u1EA5t c\xF3 th\u1EC3 m\u1ECDi kh\xF4ng \u0111i\u1EC3m kh\xF4ng t\u1EA7m th\u01B0\u1EDDng \u0111\u1EC1u c\xF3 ph\u1EA7n th\u1EF1c \xBD.",tt:"gia-thuyet",tam:4.2,src:["clay","bombieri"]},{id:"pnt",nam:1896,nhanh:"gt",nguoi:"Hadamard \xB7 de la Vall\xE9e Poussin",ten:"\u0110\u1ECBnh l\xED s\u1ED1 nguy\xEAn t\u1ED1",y:"Ch\u1EE9ng minh \u03B6 kh\xF4ng c\xF3 kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng Re s = 1, \u0111\u1EE7 \u0111\u1EC3 suy ra \u03C0(x) ~ x/ln x. V\xF9ng kh\xF4ng c\xF3 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn: b\u1EE9c t\u01B0\u1EDDng th\xE0nh l\xF9i l\u1EA1i m\u1ED9t ch\xFAt.",tt:"dinh-ly",tam:5,src:["conrey","bombieri"]},{id:"hilbert",nam:1900,nhanh:"gt",nguoi:"David Hilbert",ten:"B\xE0i to\xE1n th\u1EE9 8",y:"\u0110\u01B0a gi\u1EA3 thuy\u1EBFt Riemann v\xE0o danh s\xE1ch 23 b\xE0i to\xE1n c\u1EE7a th\u1EBF k\u1EC9 \u1EDF \u0110\u1EA1i h\u1ED9i To\xE1n h\u1ECDc Paris.",tt:"y-tuong",tam:5.1,src:["conrey"]},{id:"koch",nam:1901,nhanh:"gt",nguoi:"Helge von Koch",ten:"Sai s\u1ED1 c\u1EE1 \u221Ax",y:"Gi\u1EA3 thuy\u1EBFt Riemann t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi vi\u1EC7c \u03C0(x) l\u1EC7ch kh\u1ECFi Li(x) kh\xF4ng qu\xE1 c\u1EE1 \u221Ax \xB7 ln x: s\u1ED1 nguy\xEAn t\u1ED1 ng\u1EABu nhi\xEAn v\u1EEBa \u0111\u1EE7, kh\xF4ng h\u01A1n.",tt:"dinh-ly",tam:5.2,src:["conrey"]},{id:"gram",nam:1903,nhanh:"may",nguoi:"J\xF8rgen Gram",ten:"15 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u",y:"T\xEDnh tay 15 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn, t\u1EA5t c\u1EA3 n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD.",tt:"tinh-toan",tam:5.2,so:15,src:["wiki"]},{id:"hardy",nam:1914,nhanh:"gt",nguoi:"G. H. Hardy",ten:"V\xF4 h\u1EA1n kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng",y:"Ch\u1EE9ng minh c\xF3 v\xF4 h\u1EA1n kh\xF4ng \u0111i\u1EC3m n\u1EB1m \u0111\xFAng tr\xEAn \u0111\u01B0\u1EDDng \xBD. V\xF4 h\u1EA1n, nh\u01B0ng ch\u01B0a bi\u1EBFt l\xE0 bao nhi\xEAu ph\u1EA7n.",tt:"dinh-ly",tam:5.6,tile:0,src:["wiki","conrey"]},{id:"polya",nam:1914,nhanh:"vl",nguoi:"Hilbert \xB7 P\xF3lya",ten:"Kh\xF4ng \u0111i\u1EC3m l\xE0 ph\u1ED5?",y:"\xDD t\u01B0\u1EDFng truy\u1EC1n mi\u1EC7ng: n\u1EBFu c\xE1c kh\xF4ng \u0111i\u1EC3m l\xE0 tr\u1ECB ri\xEAng c\u1EE7a m\u1ED9t to\xE1n t\u1EED t\u1EF1 li\xEAn h\u1EE3p th\xEC ch\xFAng bu\u1ED9c ph\u1EA3i th\u1EB3ng h\xE0ng. Ch\u01B0a ai t\xECm ra to\xE1n t\u1EED \u1EA5y.",tt:"y-tuong",tam:5.6,src:["wiki","conrey"]},{id:"artin",nam:1924,nhanh:"hh",nguoi:"Emil Artin",ten:"Zeta c\u1EE7a \u0111\u01B0\u1EDDng cong",y:"\u0110\u1ECBnh ngh\u0129a h\xE0m zeta cho \u0111\u01B0\u1EDDng cong tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n v\xE0 \u0111o\xE1n m\u1ED9t b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt Riemann \u1EDF \u0111\xF3. M\u1EDF m\u1EB7t tr\u1EADn h\xECnh h\u1ECDc.",tt:"gia-thuyet",tam:5.8,src:["wiki","bombieri"]},{id:"siegel",nam:1932,nhanh:"may",nguoi:"Carl Ludwig Siegel",ten:"C\xF4ng th\u1EE9c Riemann\u2013Siegel",y:"\u0110\u1ECDc b\u1EA3n nh\xE1p \u0111\u1EC3 l\u1EA1i c\u1EE7a Riemann v\xE0 t\xECm ra c\xF4ng th\u1EE9c \xF4ng d\xF9ng \u0111\u1EC3 t\xEDnh kh\xF4ng \u0111i\u1EC3m, v\u1EABn l\xE0 l\xF5i c\u1EE7a m\u1ECDi ph\xE9p ki\u1EC3m s\u1ED1 v\u1EC1 sau.",tt:"dinh-ly",tam:5.9,src:["wiki"]},{id:"hasse",nam:1933,nhanh:"hh",nguoi:"Helmut Hasse",ten:"\u0110\u01B0\u1EDDng cong elliptic",y:"Ch\u1EE9ng minh b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt cho \u0111\u01B0\u1EDDng cong gi\u1ED1ng 1 tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n.",tt:"dinh-ly",tam:6.1,src:["wiki"]},{id:"selberg",nam:1942,nhanh:"gt",nguoi:"Atle Selberg",ten:"M\u1ED9t t\u1EC9 l\u1EC7 d\u01B0\u01A1ng",y:"Ch\u1EE9ng minh m\u1ED9t t\u1EC9 l\u1EC7 d\u01B0\u01A1ng c\xE1c kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Con s\u1ED1 r\u1EA5t nh\u1ECF, nh\u01B0ng l\u1EA7n \u0111\u1EA7u l\xE0 m\u1ED9t ph\u1EA7n ch\u1EE9 kh\xF4ng ch\u1EC9 v\xF4 h\u1EA1n.",tt:"dinh-ly",tam:6.3,tile:.01,src:["wiki","conrey"]},{id:"weil",nam:1948,nhanh:"hh",nguoi:"Andr\xE9 Weil",ten:"M\u1ECDi \u0111\u01B0\u1EDDng cong",y:"Ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Riemann cho m\u1ECDi \u0111\u01B0\u1EDDng cong tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n, v\xE0 n\xEAu ti\xEAu chu\u1EA9n d\u01B0\u01A1ng: gi\u1EA3 thuy\u1EBFt g\u1ED1c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi m\u1ED9t d\u1EA1ng to\xE0n ph\u01B0\u01A1ng kh\xF4ng \xE2m.",tt:"dinh-ly",tam:6.8,src:["wiki","bombieri"]},{id:"turing",nam:1953,nhanh:"may",nguoi:"Alan Turing",ten:"M\xE1y t\xEDnh v\xE0o cu\u1ED9c",y:"D\xF9ng m\xE1y Manchester Mark 1 ki\u1EC3m 1 104 kh\xF4ng \u0111i\u1EC3m, l\u1EA7n \u0111\u1EA7u d\xF9ng m\xE1y t\xEDnh s\u1ED1, v\xE0 \u0111\u1EC3 l\u1EA1i ph\u01B0\u01A1ng ph\xE1p ch\u1EE9ng minh kh\xF4ng s\xF3t kh\xF4ng \u0111i\u1EC3m n\xE0o.",tt:"tinh-toan",tam:6.8,so:1104,src:["wiki"]},{id:"stepanov",nam:1969,nhanh:"hh",nguoi:"Sergei Stepanov",ten:"Ch\u1EE9ng minh s\u01A1 c\u1EA5p",y:"Ch\u1EE9ng minh l\u1EA1i \u0111\u1ECBnh l\xED c\u1EE7a Weil b\u1EB1ng c\xE1ch d\u1EF1ng m\u1ED9t \u0111a th\u1EE9c tri\u1EC7t ti\xEAu b\u1ED9i cao t\u1EA1i c\xE1c \u0111i\u1EC3m c\u1EA7n \u0111\u1EBFm. Ghi ch\xFA 2026 c\u1EE7a Alp\xF6ge n\xF3i l\u1EADp lu\u1EADn c\u1EE7a \xF4ng v\xE0 Claude \u0111i xu\u1ED1ng t\u1EEB ch\xEDnh ph\u01B0\u01A1ng ph\xE1p n\xE0y.",tt:"dinh-ly",tam:7,src:["note","bombieri"]},{id:"montgomery",nam:1973,nhanh:"vl",nguoi:"Hugh Montgomery \xB7 Freeman Dyson",ten:"Kh\xF4ng \u0111i\u1EC3m nh\u01B0 m\u1EE9c n\u0103ng l\u01B0\u1EE3ng",y:"Kho\u1EA3ng c\xE1ch gi\u1EEFa c\xE1c kh\xF4ng \u0111i\u1EC3m tu\xE2n c\xF9ng quy lu\u1EADt v\u1EDBi tr\u1ECB ri\xEAng c\u1EE7a ma tr\u1EADn Hermite ng\u1EABu nhi\xEAn, th\u1EE9 v\u1EADt l\xED h\u1EA1t nh\xE2n d\xF9ng cho m\u1EE9c n\u0103ng l\u01B0\u1EE3ng. Dyson nh\u1EADn ra c\xF4ng th\u1EE9c trong m\u1ED9t bu\u1ED5i tr\xE0 \u1EDF Princeton.",tt:"gia-thuyet",tam:7.1,src:["wiki","conrey"]},{id:"deligne",nam:1974,nhanh:"hh",nguoi:"Pierre Deligne",ten:"Gi\u1EA3 thuy\u1EBFt Weil",y:"Ch\u1EE9ng minh b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt Riemann cho m\u1ECDi \u0111a t\u1EA1p tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n. M\u1EB7t tr\u1EADn h\xECnh h\u1ECDc th\u1EAFng tr\u1ECDn; ch\u01B0a ai chuy\u1EC3n \u0111\u01B0\u1EE3c chi\u1EBFn th\u1EAFng \u1EA5y v\u1EC1 s\u1ED1 nguy\xEAn.",tt:"dinh-ly",tam:7.3,src:["wiki","bombieri"]},{id:"levinson",nam:1974,nhanh:"gt",nguoi:"Norman Levinson",ten:"H\u01A1n m\u1ED9t ph\u1EA7n ba",y:"\xCDt nh\u1EA5t 1/3 s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD.",tt:"dinh-ly",tam:7.3,tile:.3333,src:["wiki","conrey"]},{id:"brent",nam:1979,nhanh:"may",nguoi:"Richard Brent",ten:"81 tri\u1EC7u kh\xF4ng \u0111i\u1EC3m",y:"Ki\u1EC3m 81 000 001 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn.",tt:"tinh-toan",tam:7.3,so:81000001,src:["wiki"]},{id:"odlyzko",nam:1987,nhanh:"may",nguoi:"Andrew Odlyzko",ten:"Th\u1ED1ng k\xEA \u1EDF \u0111\u1ED9 cao 10\xB9\xB2",y:"T\xEDnh c\xE1c kh\xF4ng \u0111i\u1EC3m quanh \u0111\u1ED9 cao 10\xB9\xB2 v\xE0 th\u1EA5y kho\u1EA3ng c\xE1ch c\u1EE7a ch\xFAng kh\u1EDBp v\u1EDBi ph\u1ECFng \u0111o\xE1n ma tr\u1EADn ng\u1EABu nhi\xEAn c\u1EE7a Montgomery.",tt:"tinh-toan",tam:7.4,src:["wiki"]},{id:"conrey89",nam:1989,nhanh:"gt",nguoi:"Brian Conrey",ten:"H\u01A1n hai ph\u1EA7n n\u0103m",y:"\xCDt nh\u1EA5t 2/5 s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Con s\u1ED1 \u0111\u1EE9ng g\u1EA7n nh\u01B0 y\xEAn su\u1ED1t ba m\u01B0\u01A1i n\u0103m sau \u0111\xF3.",tt:"dinh-ly",tam:7.6,tile:.4,src:["wiki","conrey"]},{id:"clay",nam:2e3,nhanh:"gt",nguoi:"Vi\u1EC7n To\xE1n Clay",ten:"M\u1ED9t tri\u1EC7u \u0111\xF4 la",y:"B\u1EA3y b\xE0i to\xE1n Thi\xEAn ni\xEAn k\u1EC9, m\u1ED7i b\xE0i m\u1ED9t tri\u1EC7u \u0111\xF4 la. Lu\u1EADt: c\xF4ng b\u1ED1 \u1EDF n\u01A1i c\xF3 b\xECnh duy\u1EC7t, ch\u1EDD \xEDt nh\u1EA5t hai n\u0103m, \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng ch\u1EA5p nh\u1EADn.",tt:"y-tuong",tam:7.7,src:["clay"]},{id:"gourdon",nam:2004,nhanh:"may",nguoi:"Xavier Gourdon \xB7 Patrick Demichel",ten:"10\xB9\xB3 kh\xF4ng \u0111i\u1EC3m",y:"M\u01B0\u1EDDi ngh\xECn t\u1EC9 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn, kh\xF4ng m\u1ED9t ngo\u1EA1i l\u1EC7.",tt:"tinh-toan",tam:7.7,so:1e13,src:["wiki"]},{id:"lean",nam:2013,nhanh:"may",nguoi:"Leonardo de Moura v\xE0 c\u1ED9ng \u0111\u1ED3ng Mathlib",ten:"Lean",y:"M\u1ED9t ng\xF4n ng\u1EEF \u0111\u1EC3 vi\u1EBFt ch\u1EE9ng minh cho m\xE1y ki\u1EC3m t\u1EEBng b\u01B0\u1EDBc t\u1EEB ba ti\xEAn \u0111\u1EC1. Mathlib, th\u01B0 vi\u1EC7n to\xE1n chung, c\xF3 s\u1EB5n \u0111\u1ECBnh ngh\u0129a RiemannHypothesis m\xE0 b\u1EA3n ch\u1EE9ng minh 2026 nh\u1EAFm t\u1EDBi.",tt:"y-tuong",tam:7.8,src:["drew"]},{id:"rt",nam:2020,nhanh:"gt",nguoi:"Brad Rodgers \xB7 Terence Tao",ten:"H\u1EB1ng s\u1ED1 de Bruijn\u2013Newman \u2265 0",y:"Gi\u1EA3 thuy\u1EBFt Riemann t\u01B0\u01A1ng \u0111\u01B0\u01A1ng \u039B \u2264 0; Rodgers v\xE0 Tao ch\u1EE9ng minh \u039B \u2265 0. N\u1EBFu \u0111\xFAng th\xEC gi\u1EA3 thuy\u1EBFt ch\u1EC9 v\u1EEBa \u0111\u1EE7 \u0111\xFAng.",tt:"dinh-ly",tam:7.9,src:["rt","wiki"]},{id:"przz",nam:2020,nhanh:"gt",nguoi:"Pratt \xB7 Robles \xB7 Zaharescu \xB7 Zeindler",ten:"H\u01A1n 5/12",y:"\xCDt nh\u1EA5t 5/12 (41,6 %) s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Ba m\u01B0\u01A1i n\u0103m cho 1,6 \u0111i\u1EC3m ph\u1EA7n tr\u0103m.",tt:"dinh-ly",tam:8,tile:.4167,src:["przz","wiki"]},{id:"pt",nam:2021,nhanh:"may",nguoi:"David Platt \xB7 Tim Trudgian",ten:"\u0110\xFAng t\u1EDBi \u0111\u1ED9 cao 3\xB710\xB9\xB2",y:"Ch\u1EE9ng minh ch\u1EB7t ch\u1EBD r\u1EB1ng m\u1ECDi kh\xF4ng \u0111i\u1EC3m c\xF3 ph\u1EA7n \u1EA3o t\u1EDBi 3\xB710\xB9\xB2 \u0111\u1EC1u n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD (kho\u1EA3ng 1,2\xB710\xB9\xB3 kh\xF4ng \u0111i\u1EC3m).",tt:"tinh-toan",tam:8,so:12363e9,src:["pt","wiki"]},{id:"c67",nam:2026.61,ngay:"10/8/2026",nhanh:"ai",nguoi:"Claude (b\u1EA3n nghi\xEAn c\u1EE9u ch\u01B0a ph\xE1t h\xE0nh) \xB7 Alp\xF6ge, Furman ki\u1EC3m",ten:"67,2 %",y:"\u0110\u01B0\u1EE3c nh\u1EAFc th\u1EED s\u1EE9c th\u1EADt v\u1EDBi gi\u1EA3 thuy\u1EBFt, Claude th\u1EA5t b\u1EA1i v\u1EDBi kho\u1EA3ng 650 \xFD t\u01B0\u1EDFng r\u1ED3i r\u1EBD sang b\xE0i to\xE1n t\u1EC9 l\u1EC7: gh\xE9p k\u1EBFt qu\u1EA3 c\u1EE7a Aryan, c\u1EE7a Baluyot\u2013Goldston\u2013Suriajaya\u2013Turnage-Butterbaugh v\u1EDBi m\u1ED9t b\xE0i c\u1EE7a Bombieri n\u0103m 2000 quanh d\u1EA1ng to\xE0n ph\u01B0\u01A1ng Weil, n\xE2ng c\u1EADn d\u01B0\u1EDBi t\u1EEB 41,6 % l\xEAn 67,2 %. Kho\u1EA3ng 60 t\xE1c t\u1EED con, 31 tri\u1EC7u token, c\xF3 b\u1EA3n Lean. Ch\u01B0a ph\u1EA3i gi\u1EA3 thuy\u1EBFt Riemann.",tt:"hinh-thuc",tam:9,tile:.672,src:["a67","tc8","sciam8"]},{id:"quasi",nam:2026.75,ngay:"9\u201310/2026",nhanh:"ai",nguoi:"OpenAI",ten:"T\u1EF1a gi\u1EA3 thuy\u1EBFt Riemann",y:"Hai b\u1EA3n th\u1EA3o tuy\xEAn b\u1ED1 m\u1ECDi kh\xF4ng \u0111i\u1EC3m n\u1EB1m trong d\u1EA3i ph\u1EA7n th\u1EF1c t\u1EEB 1/8 t\u1EDBi 7/8 (\u0111\xE3 ki\u1EC3m b\u1EB1ng Lean), r\u1ED3i t\u1EEB 1/12 t\u1EDBi 11/12. D\u1EA3i t\u1EDBi h\u1EA1n l\u1EA7n \u0111\u1EA7u b\u1ECB thu h\u1EB9p.",tt:"tuyen-bo",tam:9.4,src:["wiki"]},{id:"rh26",nam:2026.887,ngay:"20/11/2026",nhanh:"ai",nguoi:"Levent Alp\xF6ge \xB7 Claude",ten:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh",y:"Ghi ch\xFA b\u1ED1n trang v\xE0 m\u1ED9t kho Lean 17,4 tri\u1EC7u d\xF2ng: gi\u1EA3 thuy\u1EBFt Riemann v\xE0 b\u1EA3n t\u1ED5ng qu\xE1t cho h\xE0m L Dirichlet. L\u1EADp lu\u1EADn \u0111i xu\u1ED1ng t\u1EEB ph\u01B0\u01A1ng ph\xE1p Stepanov, qua t\u1ED5ng von Mangoldt, c\xF4ng th\u1EE9c Guinand\u2013Weil v\xE0 m\u1ED9t chu\u1ED7i d\xE0i n\xE2ng theta tr\xEAn c\xE1c nh\xF3m unita. Trong m\u1ED9t ng\xE0y, nhi\u1EC1u b\u1ED9 ki\u1EC3m \u0111\u1ED9c l\u1EADp ch\u1EA5p nh\u1EADn kho Lean. Ch\u01B0a c\xF3 b\u1EA3n ng\u01B0\u1EDDi \u0111\u1ECDc \u0111\u01B0\u1EE3c; Clay ch\u01B0a c\xF4ng nh\u1EADn.",tt:"hinh-thuc",tam:10,tile:1,src:["note","drew","ap","afp","tc11"]},{id:"masullo",nam:2026.889,ngay:"20/11/2026",nhanh:"gt",nguoi:"Alessandro Masullo (Stanford)",ten:"B\u1EA3n ch\u1EE9ng minh thu\u1EA7n ng\u01B0\u1EDDi",y:"V\xE0i gi\u1EDD sau, Ravi Vakil c\xF4ng b\u1ED1 b\u1EA3n th\u1EA3o c\u1EE7a nghi\xEAn c\u1EE9u vi\xEAn Alessandro Masullo: gi\u1EA3 thuy\u1EBFt Riemann t\u1ED5ng qu\xE1t, kh\xF4ng d\xF9ng AI, k\u1EBFt qu\u1EA3 m\u01B0\u1EDDi hai n\u0103m l\xE0m vi\u1EC7c, \u0111\xE3 \u0111\u01B0\u1EE3c Brian Conrad \u0111\u1ECDc k\u0129 nhi\u1EC1u th\xE1ng. Ch\u01B0a vi\u1EBFt trong Lean, ch\u01B0a \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ED9c l\u1EADp.",tt:"tuyen-bo",tam:10,src:["tc11","dc","afp"]}],noi:[["euclid","euler"],["euler","riemann"],["gauss","riemann"],["dirichlet","riemann"],["chebyshev","riemann"],["gauss","pnt"],["riemann","pnt"],["riemann","hilbert"],["riemann","koch"],["riemann","gram"],["riemann","siegel"],["riemann","hardy"],["hardy","selberg"],["selberg","levinson"],["levinson","conrey89"],["conrey89","przz"],["przz","c67"],["hilbert","polya"],["polya","montgomery"],["montgomery","odlyzko"],["montgomery","c67"],["riemann","artin"],["artin","hasse"],["hasse","weil"],["weil","stepanov"],["weil","deligne"],["weil","c67"],["stepanov","rh26"],["gram","turing"],["siegel","turing"],["turing","brent"],["brent","odlyzko"],["odlyzko","gourdon"],["gourdon","pt"],["turing","lean"],["lean","c67"],["lean","rh26"],["c67","rh26"],["dirichlet","rh26"],["clay","rh26"],["rt","przz"],["quasi","rh26"],["deligne","masullo"],["dirichlet","masullo"],["pnt","hardy"]],ai:[{nam:1956,ten:"Logic Theorist ch\u1EE9ng minh 38 \u0111\u1ECBnh l\xED c\u1EE7a Principia Mathematica",tam:.8,src:["lt"]},{nam:1976,ten:"\u0110\u1ECBnh l\xED b\u1ED1n m\xE0u: ng\u01B0\u1EDDi ch\u1EE9ng minh, m\xE1y ki\u1EC3m 1 936 tr\u01B0\u1EDDng h\u1EE3p",tam:1.4,src:["4c"]},{nam:1996,ten:"EQP t\u1EF1 ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Robbins, m\u1EDF t\u1EEB 1933",tam:2.2,src:["robbins"]},{nam:2021,ten:"DeepMind: AI g\u1EE3i tr\u1EF1c gi\xE1c cho l\xED thuy\u1EBFt n\xFAt v\xE0 bi\u1EC3u di\u1EC5n",tam:3.4,src:["nature21"]},{nam:2023.9,ten:"FunSearch: m\xF4 h\xECnh ng\xF4n ng\u1EEF t\xECm c\u1EA5u tr\xFAc m\u1EDBi cho b\xE0i to\xE1n cap set",tam:4.4,src:["funsearch"]},{nam:2024.55,ten:"AlphaProof: m\u1EE9c huy ch\u01B0\u01A1ng b\u1EA1c Olympic To\xE1n qu\u1ED1c t\u1EBF",tam:5.6,src:["imo24"]},{nam:2025.55,ten:"M\u1EE9c huy ch\u01B0\u01A1ng v\xE0ng Olympic To\xE1n qu\u1ED1c t\u1EBF",tam:6.8,src:["imo25"]},{nam:2026.05,ten:"C\xE1c m\xF4 h\xECnh gi\u1EA3i nhi\u1EC1u b\xE0i to\xE1n m\u1EDF c\u1EE7a Erd\u0151s",tam:7.8,src:["tc8"]},{nam:2026.58,ten:"Claude t\xECm ph\u1EA3n v\xED d\u1EE5 cho gi\u1EA3 thuy\u1EBFt Jacobi",tam:8.6,src:["tc8","fello"]},{nam:2026.61,ten:"67,2 % kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng t\u1EDBi h\u1EA1n",tam:9,src:["a67"]},{nam:2026.69,ten:"OpenAI tuy\xEAn b\u1ED1 gi\u1EA3i b\xE0i to\xE1n Navier\u2013Stokes",tam:9.5,src:["afp"]},{nam:2026.887,ten:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Riemann",tam:10,src:["note"]}],buoc41:[["6/10","\u0110\u1ECBnh th\u1EE9c Stepanov"],["6/10","Th\xE1p Iwasawa, ph\u1ECFng theo nguy\xEAn l\xED chu\u1ED3ng b\u1ED3 c\xE2u tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n"],["6/10","B\u1EA5t \u0111\u1EB3ng th\u1EE9c \u0111\u1ED9 d\u1ED1c Bost"],["6/10","T\xEDnh kh\xF4ng \xE2m c\u1EE7a W qua m\u1ED9t \u0111\u1ECBnh th\u1EE9c: Stepanov v\u1EDBi b\u1ED9i m\u1ED9t"],["8/10","\xC1p W v\xE0o h\xE0m ch\u1EC9 th\u1ECB tr\xEAn (0, 1], \u0111\u01B0\u1EE3c c\u1EADn l\u1EDBn h\u01A1n 1 \u2212 \u03B7"],["9/10","M\u1ED9t \u0111\u1EA1i l\u01B0\u1EE3ng ki\u1EC3u \u0111\u1EA1o h\xE0m tri\u1EC7t ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng cong CM t\u1EA1i c\xE1c s\u1ED1 nguy\xEAn t\u1ED1 tr\u01A1"],["14/10","\u0110\u1ECBnh th\u1EE9c ch\u1EE9a chu k\xEC Gan\u2013Gross\u2013Prasad, gi\xE1 tr\u1ECB 0 ho\u1EB7c 1"],["14/10","C\xF4ng th\u1EE9c v\u1EBFt t\u01B0\u01A1ng \u0111\u1ED1i; Cauchy\u2013Schwarz \u0111\u01B0a v\u1EC1 chu\u1EA9n c\u1EE7a chu\u1ED7i Poincar\xE9"],["19/10","Vi\u1EBFt q\u1D3A = M\u1D4F + R; t\xECm t\xEDnh t\u1EF1 \u0111\u1EB3ng c\u1EA5u qua h\xE0m theta tr\xEAn ph\u1EE7 s\xE1u l\u1EDBp c\u1EE7a GL\u2085"],["19/10","Ch\u1ECDn th\xE1p Iwasawa (t\xE1c gi\u1EA3 ghi: c\xF3 l\u1EBD kh\xF4ng c\u1EA7n)"],["20/10","\u0110\u1ED5i sang t\u1ED5ng von Mangoldt c\xF3 tr\u1ECDng s\u1ED1; d\u1EA5u l\u1EA5y t\u1EEB c\xF4ng th\u1EE9c Guinand\u2013Weil"],["15/11","Chu\u1ED7i n\xE2ng theta gi\u1EEFa c\xE1c nh\xF3m unita x\xE1c \u0111\u1ECBnh ho\xE0n to\xE0n; m\u1ED7i l\u1EA7n n\xE2ng th\xEAm m\u1ED9t b\u1ED9i; \u0111\u1ED9 d\xE0i chu\u1ED7i m \u2248 \u221AX (Claude \u0111\u1EC1 xu\u1EA5t)"],["15/11","Chu\u1EA9n v\xE0 m\u1EE9c c\u1EE7a c\xE1c n\xE2ng; tri\u1EC7t ti\xEAu s\u1ED1 h\u1EA1ng b\u1EADc m b\u1EB1ng Chowla\u2013Selberg, Weyl, Siegel"],["15/11","C\u1EADn d\u01B0\u1EDBi \u0111\u1EE7 m\u1EA1nh cho t\xEDnh chia h\u1EBFt c\u1EE7a n\xE2ng m l\u1EA7n"],["15/11","Seesaw: chu k\xEC c\u1EE7a n\xE2ng l\u1EB7p l\xE0 chu k\xEC Bessel (Rallis)"],["15/11","Gi\xE1 c\u1EE7a m\u1ED7i l\u1EA7n n\xE2ng"],["15/11","D\xE1n c\u1EA5u tr\xFAc nguy\xEAn qua c\xE1c \u0111\u1EB7c tr\u01B0ng Hecke \u0111\u1EC3 c\xF3 th\xEAm ph\xE9p l\u1EA5y trung b\xECnh"],["15/11","M\u1ED9t d\u1EA1ng y\u1EBFu c\u1EE7a gi\u1EA3 thuy\u1EBFt Vandiver cho c\xE1c l\u1EDBp H\xB9"],["15/11","\u0110\u1ED1i th\u1EC3 t\xEDch, ch\u1EC9 s\u1ED1 chu\u1ED7i theta, \u0111\u1ED3ng d\u01B0 gi\u1EEFa c\xE1c n\xE2ng"],["16/11","GRH"]],kiem:[["Bi\xEAn d\u1ECBch 175 187 m\xF4-\u0111un (Lean 4.33.1, Mathlib 4.33.1)","0 l\u1ED7i"],["Ti\xEAn \u0111\u1EC1 c\u1EE7a n\u0103m \u0111\u1ECBnh l\xED","propext, Classical.choice, Quot.sound"],["Ph\xE1t l\u1EA1i b\u1EB1ng nh\xE2n Lean (leanchecker)","175 187 / 175 187"],["nanoda (nh\xE2n vi\u1EBFt b\u1EB1ng Rust)","ch\u1EA5p nh\u1EADn \xB7 27 ph\xFAt 42 gi\xE2y, 80 lu\u1ED3ng"],["con-leche","1 468 418 khai b\xE1o"],["lean4lean, t\u1EEBng m\xF4-\u0111un","175 187 / 175 187"],["Ph\xE1t bi\u1EC3u","RiemannHypothesis c\u1EE7a Mathlib"],["Nh\xE2n Lean m\u1EB7c \u0111\u1ECBnh v\xE0 ch\u1EBF \u0111\u1ED9 k\u0129, lake comparator","c\xF2n \u0111ang ch\u1EA1y l\xFAc 22:05 UTC"]]};var ie=(i,t=document)=>t.querySelector(i),$r=(i,t=document)=>[...t.querySelectorAll(i)],nn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Qt=(i,t,e)=>i+(t-i)*e,on=i=>i*i*(3-2*i),Pe=(i,t,e)=>nn((i-t)/(e-t)),In=(i,t=0)=>i.toLocaleString("vi-VN",{minimumFractionDigits:t,maximumFractionDigits:t}),Pt={ink:16052714,dim:5921378,amber:14262373,sig:13380179,blue:7314392,green:8369546,violet:10848982,bg:131587},bl={so:{z:-7,c:Pt.ink,n:"S\u1ED1 h\u1ECDc"},gt:{z:-2.5,c:Pt.amber,n:"Gi\u1EA3i t\xEDch"},hh:{z:2,c:Pt.blue,n:"H\xECnh h\u1ECDc"},may:{z:6.5,c:Pt.green,n:"T\xEDnh to\xE1n v\xE0 m\xE1y"},vl:{z:10.5,c:Pt.violet,n:"V\u1EADt l\xED"},ai:{z:2,c:Pt.sig,n:"AI v\xE0 ng\u01B0\u1EDDi"}},Hv={"dinh-ly":"\u0110\u1ECBnh l\xED","gia-thuyet":"Ph\u1ECFng \u0111o\xE1n","tinh-toan":"Ki\u1EC3m b\u1EB1ng m\xE1y t\xEDnh","y-tuong":"\xDD t\u01B0\u1EDFng, ch\u01B0\u01A1ng tr\xECnh","tuyen-bo":"Tuy\xEAn b\u1ED1, ch\u01B0a ki\u1EC3m \u0111\u1ED9c l\u1EADp","hinh-thuc":"\u0110\xE3 qua m\xE1y ki\u1EC3m (Lean)"},Qr=matchMedia("(max-width: 760px)").matches,nu=matchMedia("(prefers-reduced-motion: reduce)").matches,Yr=ie("#gl"),ks=new ol({canvas:Yr,antialias:!Qr,powerPreference:"high-performance"});ks.setPixelRatio(Math.min(devicePixelRatio,Qr?1.5:2));ks.setClearColor(Pt.bg);ks.toneMapping=ki;ks.toneMappingExposure=1.05;var Yi=new ar;Yi.fog=new rr(Pt.bg,.012);var me=new Ve(40,1,.1,600);Yi.add(new Sr(16777215,.35));var bd=new br(16777215,1.2);bd.position.set(6,12,8);Yi.add(bd);var Hs=new hl(ks);Hs.addPass(new dl(Yi,me));var Sd=new Us(new ft(1,1),.85,.7,.18);Hs.addPass(Sd);var Md=new qs({uniforms:{tDiffuse:{value:null},uT:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uT;varying vec2 vUv;
float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}
void main(){vec2 d=vUv-.5;float r=dot(d,d);vec2 o=d*r*.014;
vec3 c=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);
c*=1.-smoothstep(.16,.8,r)*.72;c+=(hh(floor(vUv*vec2(1600.,900.)))-.5)*.011;gl_FragColor=vec4(max(c,0.),1.);}`});Hs.addPass(Md);Hs.addPass(new fl);var Gs=-1;function wd(){let i=innerWidth,t=innerHeight;ks.setSize(i,t,!1),Hs.setSize(i,t),me.aspect=i/t,me.fov=i<t?58:40,Td()}function Td(){let i=innerWidth,t=innerHeight;i<t?me.setViewOffset(i,t,0,t*[-.27,.08,.1,.15,-.16,.02,0][Math.max(0,Gs)],i,t):me.clearViewOffset(),me.updateProjectionMatrix()}addEventListener("resize",wd);wd();var sn=(i,t=1)=>new hn({color:i,transparent:!0,opacity:t}),Al=(i,t=1)=>new Oi({color:i,transparent:!0,opacity:t}),Ze=(i,t,e=1)=>new qi(new Zt().setFromPoints(i),Al(t,e)),Ot=(i,t,e)=>new P(i,t,e),Vv=Math.min(devicePixelRatio,2),Ml=(i,t,e=2,n=1)=>{let s=new Xi;return s.setPositions(i.flatMap(r=>[r.x,r.y,r.z])),new xl(s,new Ai({color:t,linewidth:e*Vv,transparent:!0,opacity:n,depthWrite:!1}))},Wv=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new ur(i);return n.colorSpace=$e,n})(),Xn=(i,t,e,n=1)=>new Ms(Array.isArray(i)&&i[0]?.isVector3?new Zt().setFromPoints(i):new Zt().setAttribute("position",new Dt(i,3)),new Fi({color:t,size:e,map:Wv,transparent:!0,opacity:n,depthWrite:!1,blending:Gn,sizeAttenuation:!0})),Sl=i=>(Math.random()*2-1)*i,iu=Xn(Array.from({length:Qr?500:1300},()=>Ot(Sl(70),Sl(40),Sl(70))),9409448,.2,.55);Yi.add(iu);var au=(i,t=3)=>{let e=new De,n=Array.from({length:t},()=>{let s=new Wt(new Bi(.988,1,128),new hn({color:i,transparent:!0,opacity:0,side:Ke,depthWrite:!1,blending:Gn}));return e.add(s),s});return e.userData.tick=(s,r,a=14)=>n.forEach((o,l)=>{let c=(s*.35+l/t)%1;o.scale.setScalar(1+c*a),o.material.opacity=r*(1-c)*(1-c)*.55}),e},Kv=ie("#labels"),su=new Map,ru=new Set;function Ie(i,t,e,n=""){let s=e.clone().project(me);if(s.z>1||Math.abs(s.x)>1.05||Math.abs(s.y)>1.05)return;let r=su.get(i);r||(r=document.createElement("div"),r.className="lb",Kv.appendChild(r),su.set(i,r)),r._h!==t&&(r.innerHTML=t,r._h=t),r.className="lb "+n,r.style.transform=`translate(${((s.x+1)/2*innerWidth).toFixed(1)}px, ${((1-s.y)/2*innerHeight).toFixed(1)}px)`,r.style.opacity=1,ru.add(i)}function Xv(){for(let[i,t]of su)ru.has(i)||(t.style.opacity=0);ru=new Set}var wl=i=>{if(i<2)return!1;for(let t=2;t*t<=i;t++)if(i%t===0)return!1;return!0},Zi=ye.zeros,Ed=(()=>{let i=[];for(let t=2;t<=110;t++)for(let e=2;e<=t;e++){if(!wl(e))continue;let n=e;for(;n<t;)n*=e;if(n===t){i.push([t,Math.log(e)]);break}}return i})(),Tl=i=>Ed.reduce((t,[e,n])=>t+(e<=i?n:0),0),El=(i,t)=>{let e=Math.log(i),n=Math.sqrt(i),s=0;for(let r=0;r<t;r++){let a=Zi[r];s+=(.5*Math.cos(a*e)+a*Math.sin(a*e))/(.25+a*a)}return i-2*n*s-Math.log(2*Math.PI)-.5*Math.log(1-1/(i*i))};function jv(){let i=new De,t=600,e=[],n=[],s=[];for(let a=1;a<=t;a++){let o=a*.42;(wl(a)?e:n).push(o,0,0),wl(a)&&s.push(o,0,0,o,.5+.9*Math.random()**0,0)}let r=(a,o,l,c)=>new Ms(new Zt().setAttribute("position",new Dt(a,3)),new Fi({color:o,size:l,transparent:!0,opacity:c,sizeAttenuation:!0}));return i.add(Xn(n,7039864,.13,.9),Xn(e,Pt.amber,.5,1)),i.add(new Ui(new Zt().setAttribute("position",new Dt(s,3)),Al(Pt.amber,.55))),i.add(Ze([Ot(0,0,0),Ot(t*.42,0,0)],Pt.dim,.35)),{g:i,update(a,o){let l=Qt(2,60,on(a));me.position.set(l-6,1.1+2.2*a,5.2-1.5*a),me.lookAt(l+9,.3,0);for(let c of[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149]){let u=c*.42;u>l-4&&u<l+16&&Ie("p"+c,String(c),Ot(u,1.55,0),"num")}}}}var ji={N:0,auto:!0};function Zv(){let i=new De,t=2,e=100,n=.3,s=.3,r=900,a=(m,d,M=0)=>Ot((m-50)*n,d*s-15,M),o=[],l=Tl(t-.001);o.push(a(t,l));for(let[m,d]of Ed){if(m>e)break;o.push(a(m,l)),l+=d,o.push(a(m,l))}o.push(a(e,l)),i.add(Ml(o,Pt.ink,1.1,.9)),i.add(Ze([a(t,t),a(e,e)],Pt.dim,.5)),i.add(Ze([a(0,0),a(e+2,0)],Pt.dim,.4),Ze([a(0,0),a(0,104)],Pt.dim,.4));let c=Ml([Ot(0,0,0),Ot(1,0,0)],Pt.amber,1.7,1);i.add(c);let u=new Float32Array(r*3),p=new Zt().setAttribute("position",new Dt(new Float32Array(r*3),3)),h=new qi(p,Al(Pt.sig,.85));i.add(h);let f=[];for(let m=2;m<=e;m++)wl(m)&&f.push(a(m,0));i.add(Xn(f,Pt.amber,.7,1));let g=-1,_=m=>{let d=u,M=p.attributes.position.array;for(let E=0;E<r;E++){let y=t+(e-t)*E/(r-1),T=a(y,El(y,m));d[E*3]=T.x,d[E*3+1]=T.y,d[E*3+2]=.02;let w=Zi[Math.max(0,m-1)],L=Math.log(y),x=a(y*.55,m?-2*Math.sqrt(y)*(.5*Math.cos(w*L)+w*Math.sin(w*L))/(.25+w*w)*6+84:84);M[E*3]=x.x,M[E*3+1]=x.y,M[E*3+2]=0}c.geometry.dispose(),c.geometry=new Xi,c.geometry.setPositions(d),p.attributes.position.needsUpdate=!0};return{g:i,update(m){ji.auto&&(ji.N=Math.round(200*on(Pe(m,.22,.86))**2.2)),ji.N!==g&&(g=ji.N,_(g),Yv(g));let d=on(Pe(m,0,.25));me.position.set(Qt(-6,1,d),Qt(-4,0,d),Qt(36,54,d)*(innerWidth<innerHeight?1.7:1)),me.lookAt(1,-2.5,0),Ie("ax","x",a(101,-3),"mono"),Ie("psi","\u03C8(x): b\u1EADc thang th\u1EADt",a(84,Tl(84)+9),"mono"),Ie("apx",`c\xF4ng th\u1EE9c t\u01B0\u1EDDng minh \xB7 ${g} c\u1EB7p kh\xF4ng \u0111i\u1EC3m`,a(52,El(52,g)-9),"mono am"),g&&Ie("wav",`s\xF3ng th\u1EE9 ${g}: \u03B3 = ${In(Zi[g-1],4)} (ph\xF3ng 6 l\u1EA7n)`,a(57,84),"mono sg")}}}function Yv(i){let t=ie("#a1n");if(t){t.value=i,ie("#a1v").textContent=`${i} c\u1EB7p kh\xF4ng \u0111i\u1EC3m`;let e=0,n=0;for(let s=10;s<=100;s+=.37)e+=Math.abs(El(s,i)-Tl(s)),n++;ie("#a1e").textContent=`sai l\u1EC7ch trung b\xECnh ${In(e/n,2)}`}}function Jv(){let i=new De,{ns:t,nt:e}=ye,n=Uint8Array.from(atob(ye.grid),S=>S.charCodeAt(0)),s=14,r=110,a=5.2,o=S=>((S-ye.s[0])/(ye.s[1]-ye.s[0])-.5)*s,l=S=>-(S/ye.t[1])*r,c=(S,C)=>n[C*t+S]/255*a,u=(S,C)=>{let R=nn((S-ye.s[0])/(ye.s[1]-ye.s[0]))*(t-1),D=nn(C/ye.t[1])*(e-1),N=Math.min(t-2,R|0),I=Math.min(e-2,D|0),z=R-N,V=D-I;return Qt(Qt(c(N,I),c(N+1,I),z),Qt(c(N,I+1),c(N+1,I+1),z),V)},p=new Float32Array(t*e*3),h=new Float32Array(t*e*3),f=[],g=new Ct(3803672),_=new Ct(1381916),m=new Ct(9211804),d=new Ct;for(let S=0;S<e;S++)for(let C=0;C<t;C++){let R=S*t+C,D=n[R]/255;p.set([o(ye.s[0]+(ye.s[1]-ye.s[0])*C/(t-1)),D*a,l(ye.t[1]*S/(e-1))],R*3),D<.5?d.lerpColors(g,_,D/.5):d.lerpColors(_,m,(D-.5)/.5),h.set([d.r,d.g,d.b],R*3)}for(let S=0;S<e-1;S++)for(let C=0;C<t-1;C++){let R=S*t+C;f.push(R,R+t,R+1,R+1,R+t,R+t+1)}let M=new Zt;M.setAttribute("position",new We(p,3)),M.setAttribute("color",new We(h,3)),M.setIndex(f),M.computeVertexNormals();let E=new vr({vertexColors:!0,roughness:.55,metalness:.3,side:Ke}),y={value:0};E.onBeforeCompile=S=>{S.uniforms.uScan=y,S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vP;varying float vS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vP = position; vS = 1.0 - abs(normal.y);`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vP;varying float vS;uniform float uScan;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float hN = vP.y / ${a.toFixed(1)}; float q = hN * 18.0; float fw = fwidth(q); float ln = (1.0 - smoothstep(0.0, fw * 1.4, abs(fract(q) - 0.5))) * smoothstep(0.004, 0.03, fw) * smoothstep(0.004, 0.05, vS);
      totalEmissiveRadiance += vec3(0.85, 0.63, 0.40) * ln * 0.32 * smoothstep(0.03, 0.25, hN);
      totalEmissiveRadiance += vec3(0.80, 0.14, 0.30) * pow(smoothstep(0.30, 0.0, hN), 1.5) * 1.1;
      totalEmissiveRadiance += vec3(0.85, 0.63, 0.40) * exp(-pow((vP.z - uScan) * 0.45, 2.0)) * 0.22;`)},i.add(new Wt(M,E));let T=[];for(let S=0;S<e;S+=8)for(let C=0;C<t-1;C++){let R=(S*t+C)*3;T.push(p[R],p[R+1]+.02,p[R+2],p[R+3],p[R+4]+.02,p[R+5])}i.add(new Ui(new Zt().setAttribute("position",new Dt(T,3)),Al(Pt.ink,.1)));let w=[];for(let S=0;S<e;S++){let C=ye.t[1]*S/(e-1);w.push(Ot(o(.5),u(.5,C)+.05,l(C)))}i.add(Ml(w,Pt.amber,2.2,1));for(let S of[0,1]){let C=[];for(let R=0;R<e;R+=2){let D=ye.t[1]*R/(e-1);C.push(Ot(o(S),u(S,D)+.04,l(D)))}i.add(Ze(C,Pt.ink,.35))}let L=Zi.filter(S=>S<ye.t[1]-1),x=[];for(let S of L){let C=new Wt(new ii(.16,16,12),sn(Pt.sig));C.position.set(o(.5),.12,l(S)),i.add(C);let R=new Wt(new ws(.02,.02,7,6),sn(Pt.sig,.5));R.position.set(o(.5),3.6,l(S)),i.add(R),x.push(R);let D=new Wt(new Bi(.9,1,48).rotateX(-Math.PI/2),new hn({color:Pt.sig,transparent:!0,opacity:0,depthWrite:!1,blending:Gn,side:Ke}));D.position.set(o(.5),.35,l(S)),i.add(D),R.userData.ring=D}return{g:i,update(S,C){let R=on(Pe(S,.08,.92)),D=Qt(-4,62,R),N=on(Pe(S,.8,1));me.position.set(o(.5)+Qt(-9,1.6,on(Pe(S,0,.3)))+5*N,Qt(11,5.2,on(Pe(S,0,.32)))+16*N,l(D)+Qt(22,14,Pe(S,0,.3))),me.lookAt(o(.5),1.2,l(D+13-6*N)),y.value=l(D+10+9*Math.sin(C*.5)),x.forEach((I,z)=>{I.material.opacity=.32+.25*Math.sin(C*1.6+z);let V=(C*.4+z*.37)%1,W=I.userData.ring;W.scale.setScalar(.3+V*2.2),W.material.opacity=(1-V)*.7}),L.forEach((I,z)=>{Math.abs(I-D-8)<12&&Ie("z"+z,z<3?`\u03C1${"\u2081\u2082\u2083"[z]} = \xBD + ${In(I,4)}i`:`${In(I,2)}`,Ot(o(.5),7.3,l(I)),"mono sg")}),D<14&&Ie("pole","c\u1EF1c t\u1EA1i s = 1",Ot(o(1),a+.6,l(0)),"mono"),Ie("cl","\u0111\u01B0\u1EDDng t\u1EDBi h\u1EA1n Re s = \xBD",Ot(o(.5),u(.5,D+16)+1.2,l(D+16)),"mono am"),Ie("s0","Re s = 0",Ot(o(0),u(0,D+10)+.5,l(D+10)),"mono"),Ie("s1","Re s = 1",Ot(o(1),u(1,D+10)+.5,l(D+10)),"mono")}}}var Kn=[[-300,0],[1700,5],[1850,15],[1900,27],[1950,44],[2e3,60],[2020,70],[2026,76],[2027,92]],yl=i=>{for(let t=1;t<Kn.length;t++)if(i<=Kn[t][0]){let[e,n]=Kn[t-1],[s,r]=Kn[t];return Qt(n,r,nn((i-e)/(s-e)))}return Kn.at(-1)[1]},$v=i=>{for(let t=1;t<Kn.length;t++)if(i<=Kn[t][1]){let[e,n]=Kn[t-1],[s,r]=Kn[t];return Qt(e,s,nn((i-n)/(r-n)))}return Kn.at(-1)[0]},Jr=je.moc.map((i,t)=>({...i,i:t})),Qc=Object.fromEntries(Jr.map(i=>[i.id,i])),zs={pin:null,cur:null,year:-300};function Qv(){let i=new De,t=95;for(let[d,M]of Object.entries(bl))d!=="ai"&&i.add(Ze([Ot(0,0,M.z),Ot(t-6,0,M.z)],M.c,.16));for(let d of[1700,1800,1850,1900,1950,2e3,2020,2026])i.add(Ze([Ot(yl(d),0,-9),Ot(yl(d),0,12.5)],Pt.dim,.3));let e=new Cr(240,120,2763315,1447452);e.position.set(48,-.02,2),e.material.transparent=!0,e.material.opacity=.55,i.add(e);let n={};for(let d of Jr){let M=bl[d.nhanh],E=d.nhanh+Math.round(yl(d.nam));n[E]=(n[E]||0)+1;let y=.8+d.tam*.42;d.p=Ot(yl(d.nam)+(n[E]-1)*.9,0,M.z+(n[E]-1)*1.2+(d.id==="masullo"?-3.5:0)),d.top=d.p.clone().setY(y),d.mesh=new Wt(new ni(.09,y,.09),sn(M.c,.2)),d.mesh.position.copy(d.p).setY(y/2),d.mesh.userData.m=d,i.add(d.mesh),d.dot=new Wt(new ii(d.tt==="dinh-ly"?.22:.17,16,12),sn(M.c,.25)),d.dot.position.copy(d.top),d.dot.userData.m=d,i.add(d.dot),d.base=new Wt(new Bi(.34,.4,40).rotateX(-Math.PI/2),new hn({color:M.c,transparent:!0,opacity:.15,depthWrite:!1,side:Ke})),d.base.position.copy(d.p).setY(.02),i.add(d.base)}let s=je.noi.map(([d,M])=>{let E=Qc[d],y=Qc[M],T=E.top.clone().lerp(y.top,.5);T.y+=1.2+E.top.distanceTo(y.top)*.16;let w=new zi(E.top,T,y.top),L=Ze(w.getPoints(28),bl[y.nhanh].c,.05);return i.add(L),{l:L,A:E,B:y,cv:w}}),r=3,a=Xn(new Float32Array(s.length*r*3),16773852,.34,1);a.frustumCulled=!1,i.add(a);let o=au(Pt.sig,4),l=new De;l.position.set(t,6.2,2),l.rotation.y=Math.PI/2,i.add(l),l.add(new Wt(new mi(6,.05,8,160),sn(Pt.dim,.9)));let c=null,u=-1,p=d=>{Math.abs(d-u)<1e-4||(u=d,c&&(l.remove(c),c.geometry.dispose()),c=new Wt(new mi(6,.13,10,200,Math.max(1e-4,d)*Math.PI*2),sn(Pt.sig,1)),c.rotation.z=Math.PI/2,l.add(c))},h=new Wt(new dr(5.9,64),sn(Pt.amber,0));l.add(h),o.scale.setScalar(6),l.add(o);let f=Xn(Array.from({length:220},(d,M)=>{let E=M/220*Math.PI*2,y=6.5+Math.random()*1.6;return Ot(Math.cos(E)*y,Math.sin(E)*y,Sl(.6))}),Pt.amber,.22,0);l.add(f);let g=Ml([Ot(0,.03,-9),Ot(0,.03,12.5)],Pt.ink,1,.38);i.add(g);let _=new Tr;_.params.Line={threshold:.2};let m=(d,M)=>{_.setFromCamera(new ft(d/innerWidth*2-1,-(M/innerHeight)*2+1),me);let E=_.intersectObjects(Jr.flatMap(y=>[y.mesh,y.dot]))[0];return E?E.object.userData.m:null};return Yr.addEventListener("click",d=>{if(Gs!==3)return;let M=m(d.clientX,d.clientY);zs.pin=M,M&&xd(M,!0)}),Yr.addEventListener("pointermove",d=>{Gs===3&&(Yr.style.cursor=m(d.clientX,d.clientY)?"pointer":"")}),{g:i,update(d,M){let E=Qt(-2,t-3,on(Pe(d,.04,.9))),y=$v(nn(E,0,92)),T=on(Pe(d,.9,1));zs.year=y,g.position.x=E;let w=innerWidth<innerHeight;me.position.set(E-Qt(15,20,T)*(w?1.5:1),Qt(8.5,7,T)*(w?1.4:1),Qt(19,9,T)*(w?1.5:1)),me.lookAt(E+Qt(5,4,T),Qt(2.2,6,T),Qt(1.5,2,T));let L=null,x=0,S=3;for(let N of Jr){let I=N.p.x<=E+.01,z=Math.abs(N.p.x-E)<9;N.mesh.material.opacity=I?.55:.12,N.dot.material.opacity=I?.95:.2,N.dot.scale.setScalar(I?1+.18*Math.sin(M*2+N.i):.8),N.base.material.opacity=I?.8:.12,N.base.scale.setScalar(I?1+.5*((M*.5+N.i*.3)%1):1),I&&((!L||N.p.x>=L.p.x)&&(L=N),N.tile!==void 0&&(x=Math.max(x,N.tile)),N.so&&(S=Math.max(S,N.so))),(z||N===zs.pin)&&Ie("m"+N.id,`<b>${N.nam<0?"kho\u1EA3ng 300 TCN":N.ngay||Math.floor(N.nam)}</b>${N.nguoi.split(" \xB7 ")[0].split(" (")[0]}`,N.top.clone().setY(N.top.y+.5),"node"+(I?" on":""))}let C=a.geometry.attributes.position.array,R=Ot(0,0,0);s.forEach((N,I)=>{let z=N.A.p.x<=E,V=N.B.p.x<=E;N.l.material.opacity=z&&V?.5:z?.14:.04;for(let W=0;W<r;W++){let et=(I*r+W)*3;z&&V?(N.cv.getPoint((M*.22+W/r+I*.137)%1,R),C[et]=R.x,C[et+1]=R.y,C[et+2]=R.z):C[et+1]=-999}}),a.geometry.attributes.position.needsUpdate=!0,p(x);let D=x>=1?1:0;h.material.opacity=.04+.42*D*(.6+.4*Math.sin(M*2)),o.userData.tick(M,D,.9),f.material.opacity=.25+.6*D,f.rotation.z=M*.08,T>.5&&(L=Qc.rh26),L!==zs.cur&&(zs.cur=L,zs.pin=null,L&&xd(L,!1)),ie("#a3y").textContent=y<0?`${Math.round(-y)} TCN`:y<2026?String(Math.floor(y)):y<2026.6?"2026":y<2026.7?"th\xE1ng 8/2026":y<2026.86?"th\xE1ng 10/2026":"20/11/2026",ie("#a3t").textContent=x>=1?"100 % (tuy\xEAn b\u1ED1)":x>.02?`${In(x*100,1)} %`:x>0?"> 0 %":y>=1914?"v\xF4 h\u1EA1n, ch\u01B0a r\xF5 t\u1EC9 l\u1EC7":"ch\u01B0a bi\u1EBFt g\xEC",ie("#a3tb").style.width=`${x*100}%`,ie("#a3s").innerHTML=S>=1e4?`\u2248 10<sup>${Math.log10(S).toFixed(S>=1e12?1:0).replace(".0","")}</sup>`:In(S),ie("#a3sb").style.width=`${nn(Math.log10(S)/13.1)*100}%`,Ie("gate",x>=1?"c\xE1nh c\u1ED5ng: m\u1ECDi kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng \xBD":"c\xE1nh c\u1ED5ng",Ot(t,13.2,2),"mono am")}}}var tx=i=>(i||[]).map(t=>je.nguon[t]?`<a href="${je.nguon[t][1]}" target="_blank" rel="noopener">${je.nguon[t][0]}</a>`:"").filter(Boolean).join(" \xB7 ");function xd(i,t){let e=bl[i.nhanh],n="#"+e.c.toString(16).padStart(6,"0");ie("#a3card").innerHTML=`<div class="k"><i style="background:${n}"></i>${e.n} \xB7 ${Hv[i.tt]}${t?" \xB7 \u0111ang ghim":""}</div><h3>${i.ten}</h3><div class="who">${i.nguoi} \xB7 ${i.nam<0?"kho\u1EA3ng 300 TCN":i.ngay||Math.floor(i.nam)}</div><p>${i.y}</p><div class="src">Ngu\u1ED3n: ${tx(i.src)}</div>`}function ex(){let i=new De,t=f=>f<=2010?Qt(-26,-6,nn((f-1850)/160)):Qt(-6,26,nn((f-2010)/16.9)),e=f=>f*1.5-7,n=Jr.filter(f=>f.nhanh!=="ai"&&f.nam>=1850&&f.id!=="masullo").sort((f,g)=>f.nam-g.nam),s=0,r=n.map(f=>(s=Math.max(s,f.tam),{y:f.nam,v:s,n:f.ten,who:f.nguoi}));r.unshift({y:1850,v:3,n:"",who:""}),r.push({y:2026.6,v:8.05,n:"",who:""},{y:2026.887,v:10,n:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh",who:""});let a=[{y:1850,v:0,n:""},{y:1955,v:0,n:""},...je.ai.map(f=>({y:f.nam,v:f.tam,n:f.ten}))],o=(f,g,_)=>{let m=new Ts(f.map(D=>Ot(t(D.y),e(D.v),_)),!1,"catmullrom",.08),d=new mr(m,700,.1,8,!1),M=new Wt(d,sn(g,1));i.add(M);let E=[],y=[],T=[],w=new Ct(g),L=[],x=-1e9;for(let D of m.getSpacedPoints(900))D.x>x+.02&&(L.push(D),x=D.x);L.forEach((D,N)=>{if(E.push(D.x,D.y,_,D.x,e(0),_),y.push(w.r*.2,w.g*.2,w.b*.2,0,0,0),N<L.length-1){let I=N*2;T.push(I,I+1,I+2,I+2,I+1,I+3)}});let S=new Zt;S.setAttribute("position",new Dt(E,3)),S.setAttribute("color",new Dt(y,3)),S.setIndex(T);let C=new Wt(S,new hn({vertexColors:!0,transparent:!0,blending:Gn,depthWrite:!1,side:Ke}));i.add(C);let R=f.filter(D=>D.n).map(D=>{let N=new Wt(new ii(.22,16,12),sn(g,1));return N.position.set(t(D.y),e(D.v),_),N.userData=D,i.add(N),N});return{m:M,n:d.index.count,beads:R,cv:m,curtain:C,sp:L}},l=o(r,Pt.amber,-.6),c=o(a,Pt.sig,.6);i.add(Ze([Ot(-27,e(0),0),Ot(27.5,e(0),0)],Pt.dim,.5),Ze([Ot(-27,e(0),0),Ot(-27,e(10.4),0)],Pt.dim,.5),Ze([Ot(-6,e(0)-.3,0),Ot(-6,e(10.4),0)],Pt.dim,.22));for(let f of[2,4,6,8,10])i.add(Ze([Ot(-27,e(f),0),Ot(27.5,e(f),0)],Pt.dim,.12));let u=new Wt(new ii(.5,24,16),sn(Pt.ink,0));u.position.set(t(2026.887),e(10),0),i.add(u);let p=au(16773852,4);p.position.copy(u.position),i.add(p);let h=Xn(new Float32Array(6),16777215,1.3,1);return h.frustumCulled=!1,i.add(h),{g:i,update(f,g){let _=f<.5?Qt(1850,2010,on(Pe(f,.03,.5))):Qt(2010,2026.9,on(Pe(f,.5,.9))),m=t(_),d=h.geometry.attributes.position.array;[l,c].forEach((x,S)=>{let C=nn((m+26)/52);x.m.geometry.setDrawRange(0,Math.floor(x.n*C/48)*48),x.beads.forEach(D=>{let N=D.position.x<=m+.05;D.visible=N});let R=0;for(;R<x.sp.length-1&&x.sp[R+1].x<=m;)R++;x.curtain.geometry.setDrawRange(0,R*6),d.set([x.sp[R].x,x.sp[R].y,x.sp[R].z+(S?.6:-.6)*0],S*3)}),h.geometry.attributes.position.needsUpdate=!0;let M=on(Pe(f,.45,.92)),E=innerWidth<innerHeight;me.position.set(Qt(-6,9,M),Qt(1,2,M),Qt(54,42,M)*(E?1.7:1)),me.lookAt(Qt(-4,9,M),Qt(-1,.8,M),0);let y=Pe(f,.9,1);u.material.opacity=y,u.scale.setScalar(1+y*(1.2+.3*Math.sin(g*3))),p.userData.tick(g,y,9);for(let x of[1859,1900,1950,2010,2020,2024,2026])Ie("y"+x,String(x),Ot(t(x),e(0)-.8,0),"mono");for(let x of[0,5,10])Ie("v"+x,String(x),Ot(-28,e(x),0),"mono");let T=(x,S,C)=>x.beads.filter(R=>R.visible).slice(-2).forEach((R,D)=>Ie(S+R.userData.y+R.userData.n,`<b>${R.userData.y>2026?"2026":Math.floor(R.userData.y)}</b>${R.userData.n}`,R.position.clone().add(Ot(0,C*(1+D*1.5),0)),"node on "+S));T(l,"hu",.9),T(c,"ai",-.9),ie("#a4y").textContent=_>2026.85?"20/11/2026":String(Math.floor(_));let w=r.filter(x=>x.y<=_).at(-1)?.v??3,L=a.filter(x=>x.y<=_).at(-1)?.v??0;ie("#a4h").textContent=In(w,1),ie("#a4a").textContent=In(L,1),ie("#a4hb").style.width=`${w*10}%`,ie("#a4ab").style.width=`${L*10}%`}}}function nx(){let i=new De,t=je.buoc41,e=t.map(([u,p],h)=>{let f=h*.62,g=4.6,_=new Wt(new ni(1.9,.09,.9),sn(h===t.length-1?Pt.sig:Pt.amber,.12));return _.position.set(Math.cos(f)*g,h*.62-6,Math.sin(f)*g),_.rotation.y=-f+Math.PI/2,i.add(_),{m:_,d:u,n:p}});i.add(Ze(e.map(u=>u.m.position.clone()),Pt.amber,.35));let n=[];for(let u=0;u<144;u++){let p=u*.21,h=10.5;n.push(Ot(Math.cos(p)*h,u/143*11.8-6,Math.sin(p)*h))}i.add(Xn(n,Pt.blue,.42,.95),Ze(n,Pt.blue,.2));let s=new Wt(new ii(.45,24,16),sn(Pt.ink,0));s.position.set(0,7,0),i.add(s);let r=Qr?500:1400,a=Xn(new Float32Array(r*3),10477744,.13,.9),o=Array.from({length:r},()=>[Math.random()*Math.PI*2,Math.sqrt(Math.random())*3.2,Math.random(),.3+Math.random()*.9]);a.frustumCulled=!1,i.add(a);let l=new Wt(new ws(.05,.05,15,8),sn(16773852,0));l.position.y=.5,i.add(l);let c=au(16773852,3);return c.position.set(0,7,0),c.rotation.x=Math.PI/2,i.add(c),{g:i,update(u,p){let h=Pe(u,.05,.72)*t.length,f=Math.min(t.length,Math.floor(h)),g=.55+u*2.6+(nu?0:p*.02),_=innerWidth<innerHeight;e.forEach((S,C)=>{S.m.material.opacity=C===f-1?.6:C<f?.3:.07,C<f&&C>=f-3&&Ie("s"+C,`<b>${S.d}</b>`,S.m.position.clone().add(Ot(0,.5,0)),"node on")});let m=Qt(-5,5.5,Pe(u,0,.8));me.position.set(Math.cos(g)*23*(_?1.5:1),m+5,Math.sin(g)*23*(_?1.5:1)),me.lookAt(0,m,0);let d=f>=t.length?1:0;s.material.opacity=d*(.6+.4*Math.sin(p*3)),l.material.opacity=.5*d,c.userData.tick(p,d,11);let M=a.geometry.attributes.position.array,E=Pe(u,.05,.86),y=Math.floor(r*(.06+.94*E));for(let S=0;S<r;S++){let C=o[S],R=(C[2]+p*.05*C[3])%1*14-6.5;S<y?(M[S*3]=Math.cos(C[0])*C[1],M[S*3+1]=R,M[S*3+2]=Math.sin(C[0])*C[1]):M[S*3+1]=-999}a.geometry.attributes.position.needsUpdate=!0,Ie("h12","\u0111\u01B0\u1EDDng thu\u1EA7n ng\u01B0\u1EDDi: 12 n\u0103m, m\u1ED7i ch\u1EA5m m\u1ED9t th\xE1ng",n[70].clone().add(Ot(0,.6,0)),"mono bl"),Ie("h41","41 ng\xE0y, 20 b\u01B0\u1EDBc",e[Math.min(t.length-1,Math.max(0,f-1))].m.position.clone().add(Ot(0,-.7,0)),"mono am");let T=ie("#a5list");T._n!==f&&(T._n=f,T.innerHTML=t.slice(Math.max(0,f-4),f).map(([S,C],R,D)=>`<li class="${R===D.length-1?"on":""}"><b>${S}</b>${C}</li>`).join("")||"<li><b>6/10</b>B\u1EAFt \u0111\u1EA7u</li>",ie("#a5n").textContent=`${String(f).padStart(2,"0")} / ${t.length}`);let w=on(Pe(u,.6,.86));ie("#a5l").textContent=In(Math.round(17374215*w)),ie("#a5f").textContent=In(Math.round(175187*w)),ie("#a5m").textContent=In(Math.round(239*w));let L=Math.floor(Pe(u,.8,.99)*(je.kiem.length+.99)),x=ie("#a5k");x._n!==L&&(x._n=L,x.innerHTML=je.kiem.slice(0,L).map(([S,C],R)=>`<li class="${R===je.kiem.length-1?"wait":""}"><span>${S}</span><b>${C}</b></li>`).join(""))}}}function ix(){let i=new De,t=new Wt(new mi(6,.12,10,200),sn(Pt.sig,1));i.add(t);let e=Zi.map(s=>Ot(0,0,-s*.55-4));i.add(Xn(e,Pt.amber,.7,1));let n=Zi.slice(0,60).map((s,r)=>{let a=new Wt(new mi(6,.025,6,120),sn(r%5===0?Pt.sig:Pt.amber,.5));return a.position.z=-s*.55-4,i.add(a),a});i.add(Ze([Ot(0,0,0),Ot(0,0,-160)],Pt.amber,.45));for(let s of[-3,3])i.add(Ze([Ot(s,0,4),Ot(s,0,-160)],Pt.dim,.3));return{g:i,update(s,r){me.position.set(.6*Math.sin(r*.2),1.5-.9*s,Qt(26,-18,on(s))),me.lookAt(0,.2,-60),t.material.opacity=.7+.3*Math.sin(r*1.5),n.forEach((a,o)=>{a.material.opacity=.14+.3*Math.max(0,Math.sin(r*1.2-o*.35)),a.rotation.z=r*.05+o*.2})}}}var yd=[jv,Zv,Jv,Qv,ex,nx,ix].map(i=>{let t=i();return t.g.visible=!1,Yi.add(t.g),t}),Zr=$r("section[data-act]"),sx=ie("#fade"),rx=$r(".hud"),Ad=ie("#nav"),_d=0,_l=0,tu=0,eu=0,Cd=0,Ld=0,Bs=ie("#chap"),ax=ie("#prog");addEventListener("pointermove",i=>{Cd=i.clientX/innerWidth*2-1,Ld=i.clientY/innerHeight*2-1});Ad.innerHTML=Zr.map((i,t)=>`<a href="#${i.id}" data-i="${t}"><span>${String(t).padStart(2,"0")}</span>${i.dataset.t}</a>`).join("");ie("#a1n").addEventListener("input",i=>{ji.auto=!1,ji.N=+i.target.value});ie("#a1auto").addEventListener("click",()=>{ji.auto=!0});var ox=new Er;function Rd(){let i=ox.getElapsedTime(),t=innerHeight,e=t/2,n=0,s=0,r=1;Zr.forEach((h,f)=>{let g=h.getBoundingClientRect();g.top<=e&&g.bottom>e&&(n=f,s=nn(-g.top/Math.max(1,g.height-t)),r=Math.min(e-g.top,g.bottom-e)/(t*.45))}),n!==Gs&&(Gs=n,yd.forEach((h,f)=>{h.g.visible=f===n}),rx.forEach(h=>h.classList.toggle("on",+h.dataset.act===n)),$r("a",Ad).forEach(h=>h.classList.toggle("on",+h.dataset.i===n)),_l=s,Yi.fog.density=[.02,.004,.016,.011,.004,.008,.012][n],Sd.strength=[.9,.55,.8,.85,.7,.8,1][n],Yr.style.cursor="",Td());let a=n===0&&s<.5||n===Zr.length-1&&s>.5?0:1-nn(r);sx.style.opacity=a;let o=s<.5?n:Math.min(Zr.length-1,n+1),l=nn((a-.45)/.4);Bs.style.opacity=l;let c=(1-nn(a*1.7)).toFixed(2);Bs._o!==c&&(Bs._o=c,document.documentElement.style.setProperty("--o",c)),l>0&&Bs._i!==o&&(Bs._i=o,Bs.innerHTML=`<span>${String(o).padStart(2,"0")}</span><b>${Zr[o].dataset.t}</b>`),ax.style.transform=`scaleX(${nn(scrollY/Math.max(1,document.documentElement.scrollHeight-t))})`;let u=Math.min(.25,i-_d),p=1-Math.exp(-u*6);_d=i,_l+=(s-_l)*(nu?1:p),tu+=(Cd-tu)*p*.5,eu+=(Ld-eu)*p*.5,yd[n].update(_l,i),!nu&&!Qr&&(me.rotateY(-tu*.03),me.rotateX(-eu*.02)),iu.position.copy(me.position).multiplyScalar(.94),iu.rotation.y=i*.004,Md.uniforms.uT.value=i%10,Xv(),Hs.render(),requestAnimationFrame(Rd)}var lx=new IntersectionObserver(i=>i.forEach(t=>t.target.classList.toggle("in",t.isIntersecting)),{rootMargin:"-28% 0px -28% 0px"});$r(".beat").forEach(i=>lx.observe(i));ie("#nguon").innerHTML=Object.values(je.nguon).map(([i,t])=>`<li><a href="${t}" target="_blank" rel="noopener">${i}</a></li>`).join("");ie("#dem").textContent=`${je.moc.length} m\u1ED1c, ${je.noi.length} li\xEAn h\u1EC7, ${Object.keys(je.nguon).length} ngu\u1ED3n, ${Zi.length} kh\xF4ng \u0111i\u1EC3m, ${ye.ns*ye.nt} \u0111i\u1EC3m l\u01B0\u1EDBi |\u03B6|`;$r("[data-chia]").forEach(i=>i.addEventListener("click",async()=>{let t="https://nclamvn.github.io/bai-giang/toan/riemann/",e=i.textContent;try{if(navigator.share){await navigator.share({title:document.title,url:t});return}await navigator.clipboard.writeText(t),i.textContent="\u0110\xE3 ch\xE9p li\xEAn k\u1EBFt"}catch(n){if(n&&n.name==="AbortError")return;i.textContent=t.replace("https://","")}setTimeout(()=>{i.textContent=e},2200)}));document.documentElement.classList.add("ok");Rd();window.RH={D:je,Z:ye,psi:Tl,psiN:El,get act(){return Gs}};
