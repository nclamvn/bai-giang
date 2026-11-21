var iu=0,Cl=1,su=2;var Js=1,ru=2,ss=3,ui=0,Ke=1,ln=2,cn=0,rs=1,$s=2,Ll=3,Rl=4,au=5;var Ti=100,ou=101,lu=102,cu=103,uu=104,hu=200,du=201,fu=202,pu=203,Pl=204,Il=205,mu=206,gu=207,vu=208,xu=209,_u=210,yu=211,bu=212,Mu=213,Su=214,Jr=0,$r=1,Qr=2,Xi=3,ta=4,ea=5,na=6,ia=7,Dl=0,wu=1,Tu=2,xn=0,Qs=1,tr=2,er=3,Ei=4,nr=5,ir=6,sr=7;var Nl=300,hi=301,Ai=302,Ua=303,Fa=304,rr=306,sa=1e3,Tn=1001,ra=1002,Re=1003,Eu=1004;var ar=1005;var Ie=1006,za=1007;var di=1008;var Ye=1009,Ol=1010,ql=1011,as=1012,Ba=1013,_n=1014,yn=1015,Ne=1016,Ga=1017,ka=1018,os=1020,Ul=35902,Fl=35899,zl=1021,Bl=1022,un=1023,En=1026,fi=1027,Gl=1028,Ha=1029,pi=1030,Va=1031;var Wa=1033,or=33776,lr=33777,cr=33778,ur=33779,Ka=35840,Xa=35841,Za=35842,ja=35843,Ya=36196,Ja=37492,$a=37496,Qa=37488,to=37489,hr=37490,eo=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,vo=36492,xo=36494,_o=36495,yo=36283,bo=36284,dr=36285,Mo=36286;var Es=2300,aa=2301,jr=2302,_l=2303,yl=2400,bl=2401,Ml=2402;var Au=3200;var So=0,Cu=1,Vn="",tn="srgb",As="srgb-linear",Cs="linear",jt="srgb";var Yr=7680;var Lu=519,Ru=512,Pu=513,Iu=514,wo=515,Du=516,Nu=517,To=518,Ou=519,qu=35044;var kl="300 es",vn=2e3,Zi=2001;function Oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){let i=Ls("canvas");return i.style.display="block",i}var Tc={},ji=null;function Hl(...i){let t="THREE."+i.shift();ji?ji("log",t,...i):console.log(t,...i)}function Fu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=Fu(i);let t="THREE."+i.shift();if(ji)ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Fu(i);let t="THREE."+i.shift();if(ji)ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bi(...i){let t=i.join(" ");t in Tc||(Tc[t]=!0,Ct(...i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Bu={[Jr]:$r,[Qr]:na,[ta]:ia,[Xi]:ea,[$r]:Jr,[na]:Qr,[ia]:ta,[ea]:Xi},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ko=Math.PI/180,oa=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Uh(i,t){return(i%t+t)%t}function Xo(i,t,e){return(1-e)*i+e*t}function xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*y;m<0&&(u=-u,p=-p,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){let T=Math.acos(m),C=Math.sin(T);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+y*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+y*o;let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new R,Ec=new Cn,Dt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],T=s[1],C=s[4],b=s[7],M=s[2],S=s[5],E=s[8];return r[0]=a*y+o*T+l*M,r[3]=a*m+o*C+l*S,r[6]=a*f+o*b+l*E,r[1]=c*y+h*T+d*M,r[4]=c*m+h*C+d*S,r[7]=c*f+h*b+d*E,r[2]=u*y+p*T+g*M,r[5]=u*m+p*C+g*S,r[8]=u*f+p*b+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jo.makeScale(t,e)),this}rotate(t){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new Dt,Ac=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fh(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var Bt=Fh();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Ls("canvas")),Di.width=t.width,Di.height=t.height;let s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zh=0,Yi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yo(s[a].image)):r.push(Yo(s[a]))}else r=Yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var Bh=0,Jo=new R,je=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=Ie,a=di,o=un,l=Ye,c=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=fr(),this.name="",this.source=new Yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Nl;je.DEFAULT_ANISOTROPY=1;var pe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,b=(p+1)/2,M=(f+1)/2,S=(h+u)/4,E=(d+y)/4,x=(g+m)/4;return C>b&&C>M?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=E/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-y)/T,this.z=(u-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new je(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rs=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,kh)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),jn.crossVectors(n,$e),jn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),jn.crossVectors(n,$e)),jn.normalize(),Er.crossVectors($e,jn),s[0]=jn.x,s[4]=Er.x,s[8]=$e.x,s[1]=jn.y,s[5]=Er.y,s[9]=$e.y,s[2]=jn.z,s[6]=Er.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],T=n[3],C=n[7],b=n[11],M=n[15],S=s[0],E=s[4],x=s[8],w=s[12],L=s[1],O=s[5],q=s[9],F=s[13],I=s[2],k=s[6],Z=s[10],j=s[14],nt=s[3],W=s[7],Q=s[11],et=s[15];return r[0]=a*S+o*L+l*I+c*nt,r[4]=a*E+o*O+l*k+c*W,r[8]=a*x+o*q+l*Z+c*Q,r[12]=a*w+o*F+l*j+c*et,r[1]=h*S+d*L+u*I+p*nt,r[5]=h*E+d*O+u*k+p*W,r[9]=h*x+d*q+u*Z+p*Q,r[13]=h*w+d*F+u*j+p*et,r[2]=g*S+y*L+m*I+f*nt,r[6]=g*E+y*O+m*k+f*W,r[10]=g*x+y*q+m*Z+f*Q,r[14]=g*w+y*F+m*j+f*et,r[3]=T*S+C*L+b*I+M*nt,r[7]=T*E+C*O+b*k+M*W,r[11]=T*x+C*q+b*Z+M*Q,r[15]=T*w+C*F+b*j+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15],T=l*p-c*u,C=o*p-c*d,b=o*u-l*d,M=a*p-c*h,S=a*u-l*h,E=a*d-o*h;return e*(y*T-m*C+f*b)-n*(g*T-m*M+f*S)+s*(g*C-y*M+f*E)-r*(g*b-y*S+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],T=e*o-n*a,C=e*l-s*a,b=e*c-r*a,M=n*l-s*o,S=n*c-r*o,E=s*c-r*l,x=h*y-d*g,w=h*m-u*g,L=h*f-p*g,O=d*m-u*y,q=d*f-p*y,F=u*f-p*m,I=T*F-C*q+b*O+M*L-S*w+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*F-l*q+c*O)*k,t[1]=(s*q-n*F-r*O)*k,t[2]=(y*E-m*S+f*M)*k,t[3]=(u*S-d*E-p*M)*k,t[4]=(l*L-a*F-c*w)*k,t[5]=(e*F-s*L+r*w)*k,t[6]=(m*b-g*E-f*C)*k,t[7]=(h*E-u*b+p*C)*k,t[8]=(a*q-o*L+c*x)*k,t[9]=(n*L-e*q-r*x)*k,t[10]=(g*S-y*b+f*T)*k,t[11]=(d*b-h*S-p*T)*k,t[12]=(o*w-a*O-l*x)*k,t[13]=(e*O-n*w+s*x)*k,t[14]=(y*C-g*M-m*T)*k,t[15]=(h*M-d*C+u*T)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,y=a*h,m=a*d,f=o*d,T=l*c,C=l*h,b=l*d,M=n.x,S=n.y,E=n.z;return s[0]=(1-(y+f))*M,s[1]=(p+b)*M,s[2]=(g-C)*M,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(u+f))*S,s[6]=(m+T)*S,s[7]=0,s[8]=(g+C)*E,s[9]=(m-T)*E,s[10]=(1-(u+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,h=1/o,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Zi)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===vn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Zi)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ni=new R,fn=new ae,Gh=new R(0,0,0),kh=new R(1,1,1),jn=new R,Er=new R,$e=new R,Lc=new ae,Rc=new Cn,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hh=0,Pc=new R,Oi=new Cn,Dn=new ae,Ar=new R,_s=new R,Vh=new R,Wh=new Cn,Ic=new R(1,0,0),Dc=new R(0,1,0),Nc=new R(0,0,1),Oc={type:"added"},Kh={type:"removed"},qi={type:"childadded",child:null},$o={type:"childremoved",child:null},De=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new zn,n=new Cn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Dt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(_s,Ar,this.up):Dn.lookAt(Ar,_s,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),qi.child=t,this.dispatchEvent(qi),qi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kh),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new R(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xh={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Bt.workingColorSpace){if(t=Uh(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qo(a,r,t+1/3),this.g=Qo(a,r,t),this.b=Qo(a,r,t-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Bt.workingToColorSpace(ze.copy(this),t),Math.round(Vt(ze.r*255,0,255))*65536+Math.round(Vt(ze.g*255,0,255))*256+Math.round(Vt(ze.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=tn){Bt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Cr);let n=Xo(Yn.h,Cr.h,e),s=Xo(Yn.s,Cr.s,e),r=Xo(Yn.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Rt;Rt.NAMES=Gu;var Ps=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Is=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new R,Nn=new R,tl=new R,On=new R,Ui=new R,Fi=new R,qc=new R,el=new R,nl=new R,il=new R,sl=new pe,rl=new pe,al=new pe,ti=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Nn.subVectors(n,e),tl.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(Nn),l=pn.dot(tl),c=Nn.dot(Nn),h=Nn.dot(tl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return sl.setScalar(0),rl.setScalar(0),al.setScalar(0),sl.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sl,r.x),a.addScaledVector(rl,r.y),a.addScaledVector(al,r.z),a}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Nn.subVectors(t,e),pn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Fi.subVectors(r,n),el.subVectors(t,n);let l=Ui.dot(el),c=Fi.dot(el);if(l<=0&&c<=0)return e.copy(n);nl.subVectors(t,s);let h=Ui.dot(nl),d=Fi.dot(nl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);il.subVectors(t,r);let p=Ui.dot(il),g=Fi.dot(il);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return qc.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(qc,o);let f=1/(m+y+u);return a=y*f,o=u*f,e.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Rr.subVectors(this.max,ys),zi.subVectors(t.a,ys),Bi.subVectors(t.b,ys),Gi.subVectors(t.c,ys),Jn.subVectors(Bi,zi),$n.subVectors(Gi,Bi),vi.subVectors(zi,Gi);let e=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-vi.z,vi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,vi.z,0,-vi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-vi.y,vi.x,0];return!ol(e,zi,Bi,Gi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,zi,Bi,Gi,Rr))?!1:(Pr.crossVectors(Jn,$n),e=[Pr.x,Pr.y,Pr.z],ol(e,zi,Bi,Gi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new R,new R,new R,new R,new R,new R,new R,new R],mn=new R,Lr=new ei,zi=new R,Bi=new R,Gi=new R,Jn=new R,$n=new R,vi=new R,ys=new R,Rr=new R,Pr=new R,xi=new R;function ol(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var be=new R,Ir=new pt,Zh=0,We=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qu,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ds=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},jh=new ei,bs=new R,ll=new R,ni=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(ll)),this.expandByPoint(bs.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yh=0,an=new ae,cl=new De,ki=new R,Qe=new ei,Ms=new ei,Le=new R,te=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Ns:Ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(Qe.min,Ms.min),Qe.expandByPoint(Le),Le.addVectors(Qe.max,Ms.max),Qe.expandByPoint(Le)):(Qe.expandByPoint(Ms.min),Qe.expandByPoint(Ms.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(t,c),Le.add(ki)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new R,l[x]=new R;let c=new R,h=new R,d=new R,u=new pt,p=new pt,g=new pt,y=new R,m=new R;function f(x,w,L){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(O),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),o[x].add(y),o[w].add(y),o[L].add(y),l[x].add(m),l[w].add(m),l[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,w=T.length;x<w;++x){let L=T[x],O=L.start,q=L.count;for(let F=O,I=O+q;F<I;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let C=new R,b=new R,M=new R,S=new R;function E(x){M.fromBufferAttribute(s,x),S.copy(M);let w=o[x];C.copy(w),C.sub(M.multiplyScalar(M.dot(w))).normalize(),b.crossVectors(S,w);let O=b.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,O)}for(let x=0,w=T.length;x<w;++x){let L=T[x],O=L.start,q=L.count;for(let F=O,I=O+q;F<I;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new We(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ul=new R,Jh=new R,$h=new Dt,gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ul.subVectors(n,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$h.getNormalMatrix(t),s=this.coplanarPoint(ul).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qh=0,Ln=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=rs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new R,hl=new R,Dr=new R,Nr=new R,Mi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hl.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(hl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),o=Nr.dot(this.direction),l=-Nr.dot(Dr),c=Nr.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hl).addScaledVector(Dr,u),p}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,f=n.x-a.x,T=n.y-a.y,C=n.z-a.z,b=Math.abs(l),M=Math.abs(c),S=Math.abs(h),E,x,w,L,O,q,F,I,k,Z,j,nt;if(b>=M&&b>=S?(w=l,q=d,k=g,nt=f,l>=0?(E=c,x=h,L=u,O=p,F=y,I=m,Z=T,j=C):(E=h,x=c,L=p,O=u,F=m,I=y,Z=C,j=T)):M>=S?(w=c,q=u,k=y,nt=T,c>=0?(E=h,x=l,L=p,O=d,F=m,I=g,Z=C,j=f):(E=l,x=h,L=d,O=p,F=g,I=m,Z=f,j=C)):(w=h,q=p,k=m,nt=C,h>=0?(E=l,x=c,L=d,O=u,F=g,I=y,Z=f,j=T):(E=c,x=l,L=u,O=d,F=y,I=g,Z=T,j=f)),w===0)return null;let W=E/w,Q=x/w,et=1/w,At=L-W*q,Tt=O-Q*q,oe=F-W*k,Kt=I-Q*k,Yt=Z-W*nt,K=j-Q*nt,$=Yt*Kt-K*oe,xt=At*K-Tt*Yt,Nt=oe*Tt-Kt*At;if(s){if($<0||xt<0||Nt<0)return null}else if(($<0||xt<0||Nt<0)&&($>0||xt>0||Nt>0))return null;let gt=$+xt+Nt;if(gt===0)return null;let zt=et*($*q+xt*k+Nt*nt);return(gt>0?zt<0:zt>0)?null:this.at(zt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uc=new ae,_i=new Mi,Or=new ni,Fc=new R,qr=new R,Ur=new R,Fr=new R,dl=new R,zr=new R,zc=new R,Br=new R,ne=class extends De{constructor(t=new te,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(dl.fromBufferAttribute(d,t),a?zr.addScaledVector(dl,h):zr.addScaledVector(dl.sub(e),h))}e.add(zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Or.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Or,Fc)===null||_i.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,M=C;b<M;b+=3){let S=o.getX(b),E=o.getX(b+1),x=o.getX(b+2);s=Gr(this,f,t,n,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let T=o.getX(m),C=o.getX(m+1),b=o.getX(m+2);s=Gr(this,a,t,n,c,h,d,T,C,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,M=C;b<M;b+=3){let S=b,E=b+1,x=b+2;s=Gr(this,f,t,n,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let T=m,C=m+1,b=m+2;s=Gr(this,a,t,n,c,h,d,T,C,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function td(i,t,e,n,s,r,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Fr);let h=td(i,t,e,n,qr,Ur,Fr,zc);if(h){let d=new R;ti.getBarycoord(zc,qr,Ur,Fr,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,l,c,d,new pt)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,l,c,d,new pt)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};ti.getNormal(qr,Ur,Fr,u.normal),h.face=u,h.barycoord=d}return h}var ha=class extends je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=new ni,ed=new pt(.5,.5),kr=new R,Qi=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],T=r[12],C=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-a,p-h,f-g,M-T).normalize(),s[1].setComponents(c+a,p+h,f+g,M+T).normalize(),s[2].setComponents(c+o,p+d,f+y,M+C).normalize(),s[3].setComponents(c-o,p-d,f-y,M-C).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,p-u,f-m,M-b).normalize();else if(s[4].setComponents(c-l,p-u,f-m,M-b).normalize(),e===vn)s[5].setComponents(c+l,p+u,f+m,M+b).normalize();else if(e===Zi)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=ed.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new R,fa=new R,Bc=new ae,Ss=new Mi,Hr=new ni,fl=new R,Gc=new R,ii=class extends De{constructor(t=new te,e=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Gt(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;Bc.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(Bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){let f=h.getX(y),T=h.getX(y+1),C=Vr(this,t,Ss,l,f,T,y);C&&e.push(C)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=Vr(this,t,Ss,l,y,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){let f=Vr(this,t,Ss,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){let y=Vr(this,t,Ss,l,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,fl,Gc)>n)return;fl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fl);if(!(c<t.near||c>t.far))return{distance:c,point:Gc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var kc=new R,Hc=new R,es=class extends ii{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kc.fromBufferAttribute(e,s),Hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kc.distanceTo(Hc);t.setAttribute("lineDistance",new Gt(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gn=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vc=new ae,Sl=new Mi,Wr=new ni,Kr=new R,si=class extends De{constructor(t=new te,e=new Gn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Vc.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(Vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,y=p;g<y;g++){let m=c.getX(g);Kr.fromBufferAttribute(d,m),Wc(Kr,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,y=p;g<y;g++)Kr.fromBufferAttribute(d,g),Wc(Kr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wc(i,t,e,n,s,r,a){let o=Sl.distanceSqToPoint(i);if(o<e){let l=new R;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Os=class extends je{constructor(t=[],e=hi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ri=class extends je{constructor(t,e,n=_n,s,r,a,o=Re,l=Re,c,h=En,d=1){if(h!==En&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pa=class extends ri{constructor(t,e=_n,n=hi,s,r,a=Re,o=Re,l,c=En){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kn=class i extends te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function g(y,m,f,T,C,b,M,S,E,x,w){let L=b/E,O=M/x,q=b/2,F=M/2,I=S/2,k=E+1,Z=x+1,j=0,nt=0,W=new R;for(let Q=0;Q<Z;Q++){let et=Q*O-F;for(let At=0;At<k;At++){let Tt=At*L-q;W[y]=Tt*T,W[m]=et*C,W[f]=I,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[f]=S>0?1:-1,h.push(W.x,W.y,W.z),d.push(At/E),d.push(1-Q/x),j+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<E;et++){let At=u+et+k*Q,Tt=u+et+k*(Q+1),oe=u+(et+1)+k*(Q+1),Kt=u+(et+1)+k*Q;l.push(At,Tt,Kt),l.push(Tt,oe,Kt),nt+=6}o.addGroup(p,nt,w),p+=nt,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Us=class i extends te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fs=class i extends te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,y=[],m=n/2,f=0;T(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(p,2));function T(){let b=new R,M=new R,S=0,E=(e-t)/n;for(let x=0;x<=r;x++){let w=[],L=x/r,O=L*(e-t)+t;for(let q=0;q<=s;q++){let F=q/s,I=F*l+o,k=Math.sin(I),Z=Math.cos(I);M.x=O*k,M.y=-L*n+m,M.z=O*Z,d.push(M.x,M.y,M.z),b.set(k,E,Z).normalize(),u.push(b.x,b.y,b.z),p.push(F,1-L),w.push(g++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let L=y[w][x],O=y[w+1][x],q=y[w+1][x+1],F=y[w][x+1];(t>0||w!==0)&&(h.push(L,O,F),S+=3),(e>0||w!==r-1)&&(h.push(O,q,F),S+=3)}c.addGroup(f,S,0),f+=S}function C(b){let M=g,S=new pt,E=new R,x=0,w=b===!0?t:e,L=b===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),g++;let O=g;for(let q=0;q<=s;q++){let I=q/s*l+o,k=Math.cos(I),Z=Math.sin(I);E.x=w*Z,E.y=m*L,E.z=w*k,d.push(E.x,E.y,E.z),u.push(0,L,0),S.x=k*.5+.5,S.y=Z*.5*L+.5,p.push(S.x,S.y),g++}for(let q=0;q<s;q++){let F=M+q,I=O+q;b===!0?h.push(I,I+1,F):h.push(I+1,I,F),x+=3}c.addGroup(f,x,b===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],a=[],o=new R,l=new ae;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Vt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Vt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ma=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Kc=new R,Xc=new R,pl=new Vl,ml=new Vl,gl=new Vl,ns=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xc.subVectors(s[0],s[1]).add(s[0]),c=Xc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Kc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),pl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),ml.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),gl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ml.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),gl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(pl.calc(l),ml.calc(l),gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function nd(i,t){let e=1-i;return e*e*t}function id(i,t){return 2*(1-i)*i*t}function sd(i,t){return i*i*t}function ws(i,t,e,n){return nd(i,t)+id(i,e)+sd(i,n)}function rd(i,t){let e=1-i;return e*e*e*t}function ad(i,t){let e=1-i;return 3*e*e*i*t}function od(i,t){return 3*(1-i)*i*i*t}function ld(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return rd(i,t)+ad(i,e)+od(i,n)+ld(i,s)}var ga=class extends on{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},va=class extends on{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y),Ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends on{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends on{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Si=class extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y),ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Zc(o,l.x,c.x,h.x,d.x),Zc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},cd=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:ns,CubicBezierCurve:ga,CubicBezierCurve3:va,EllipseCurve:zs,LineCurve:xa,LineCurve3:_a,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Si,SplineCurve:ba});var Bs=class i extends te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let T=f*u-a;for(let C=0;C<c;C++){let b=C*d-r;g.push(b,-T,0),y.push(0,0,1),m.push(C/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let C=T+c*f,b=T+c*(f+1),M=T+1+c*(f+1),S=T+1+c*f;p.push(C,b,S),p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hn=class i extends te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let T=[],C=f/n,b=a+C*o,M=t*Math.cos(b),S=Math.sqrt(t*t-M*M),E=0;f===0&&a===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let w=x/e,L=s+w*r;d.x=-S*Math.cos(L),d.y=M,d.z=S*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+E,1-C),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){let C=h[f][T+1],b=h[f][T],M=h[f+1][T],S=h[f+1][T+1];(f!==0||a>0)&&p.push(C,b,S),(f!==n-1||l<Math.PI)&&p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wi=class i extends te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,p=new R,g=new R;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let f=0;f<=s;f++){let T=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(T),p.y=(t+e*Math.cos(m))*Math.sin(T),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let f=(s+1)*y+m-1,T=(s+1)*(y-1)+m-1,C=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(f,T,b),l.push(T,C,b)}this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Gs=class i extends te{constructor(t=new Si(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new pt,h=new R,d=[],u=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(p,2));function y(){for(let C=0;C<e;C++)m(C);m(r===!1?e:0),T(),f()}function m(C){h=t.getPointAt(C/e,h);let b=a.normals[C],M=a.binormals[C];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,x=Math.sin(E),w=-Math.cos(E);l.x=w*b.x+x*M.x,l.y=w*b.y+x*M.y,l.z=w*b.z+x*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let C=1;C<=e;C++)for(let b=1;b<=s;b++){let M=(s+1)*(C-1)+(b-1),S=(s+1)*C+(b-1),E=(s+1)*C+b,x=(s+1)*(C-1)+b;g.push(M,S,x),g.push(S,E,x)}}function T(){for(let C=0;C<=e;C++)for(let b=0;b<=s;b++)c.x=C/e,c.y=b/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new cd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jc(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Ci(i[e]);for(let s in n)t[s]=n[s]}return t}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Wn={clone:Ci,merge:ke},hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},is=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ks=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ma=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bl:r=t,o=2*e-n;break;case Ml:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bl:a=t,l=2*n-e;break;case Ml:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-u*m+2*u*y-u*g,T=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,C=(-1-p)*m+(1.5+p)*y+.5*g,b=p*m-p*y;for(let M=0;M!==o;++M)r[M]=f*a[h+M]+T*a[c+M]+C*a[l+M]+b*a[d+M];return r}},Ta=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ea=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends ai{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],f=p*u+g*2,T=d[f],C=d[f+1],b=t*u+g*2,M=h[b],S=h[b+1],E=pd(n,e,T,M,s);r[g]=ku(E,y,C,S,m)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ku(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=fd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hi(e,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hi(t.times,Array),values:Hi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vl(t.settings)&&(n.settings={inTangents:Hi(t.settings.inTangents,Array),outTangents:Hi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break;case _l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vl(this.settings)&&(Yc(this.settings.inTangents,t),Yc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&qh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=aa;var oi=class extends en{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Es;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="color";var La=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="number";var Ra=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hs=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Es;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="vector";var Ia=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new Ia,Da=class{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var xl=new ae,Jc=new R,$c=new R,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xr=new R,Zr=new Cn,wn=new R,Ws=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xr,Zr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Zr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xr,Zr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Zr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new R,Qc=new pt,tu=new pt,Be=class extends Ws{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,tu),e.subVectors(tu,Qc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ci=class extends Ws{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wl=class extends Na{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Xs=class extends Vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vi=-90,Wi=1,Oa=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Vi,Wi,t,e);s.layers=this.layers,this.add(s);let r=new Be(Vi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new Be(Vi,Wi,t,e);a.layers=this.layers,this.add(a);let o=new Be(Vi,Wi,t,e);o.layers=this.layers,this.add(o);let l=new Be(Vi,Wi,t,e);l.layers=this.layers,this.add(l);let c=new Be(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qa=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Zs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=md.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function md(){this._document.hidden===!1&&this.reset()}var Kl="\\[\\]\\.:\\/",gd=new RegExp("["+Kl+"]","g"),Xl="[^"+Kl+"]",vd="[^"+Kl.replace("\\.","")+"]",xd=/((?:WC+[\/:])*)/.source.replace("WC",Xl),_d=/(WCOD+)?/.source.replace("WCOD",vd),yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Md=new RegExp("^"+xd+_d+yd+bd+"$"),Sd=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gd,"")}static parseTrackName(t){let e=Md.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Tl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z0=new Float32Array(1);var eu=new ae,js=class{constructor(t,e,n=0,s=1/0){this.ray=new Mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return El(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)El(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function El(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)El(r[a],t,e,!0)}}var Ys=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Al=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Zl(i,t,e,n){let s=wd(n);switch(e){case zl:return i*t;case Gl:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case Va:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Wa:return i*t*4/s.components*s.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case ja:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Ja:case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case hr:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case xo:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yo:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dr:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wd(i){switch(i){case Ye:case Ol:return{byteLength:1,components:1};case as:case ql:case Ne:return{byteLength:2,components:1};case Ga:case ka:return{byteLength:2,components:4};case _n:case Ba:case yn:return{byteLength:4,components:1};case Ul:case Fl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Ef=`uniform sampler2D dfgLUT;
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
}`,Af=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,Jp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,om=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ad,alphahash_pars_fragment:Cd,alphamap_fragment:Ld,alphamap_pars_fragment:Rd,alphatest_fragment:Pd,alphatest_pars_fragment:Id,aomap_fragment:Dd,aomap_pars_fragment:Nd,batching_pars_vertex:Od,batching_vertex:qd,begin_vertex:Ud,beginnormal_vertex:Fd,bsdfs:zd,iridescence_fragment:Bd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Kd,color_pars_fragment:Xd,color_pars_vertex:Zd,color_vertex:jd,common:Yd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Qd,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:yf,envmap_vertex:uf,fog_vertex:hf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:_f,lights_toon_fragment:bf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:wf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Af,lights_fragment_maps:Cf,lights_fragment_end:Lf,lightprobes_pars_fragment:Rf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Nf,map_fragment:Of,map_pars_fragment:qf,map_particle_fragment:Uf,map_particle_pars_fragment:Ff,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Bf,morphinstance_vertex:Gf,morphcolor_vertex:kf,morphnormal_vertex:Hf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Wf,normal_fragment_begin:Kf,normal_fragment_maps:Xf,normal_pars_fragment:Zf,normal_pars_vertex:jf,normal_vertex:Yf,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:ap,dithering_pars_fragment:op,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:hp,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:vp,specularmap_fragment:xp,specularmap_pars_fragment:_p,tonemapping_fragment:yp,tonemapping_pars_fragment:bp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:wp,uv_pars_vertex:Tp,uv_vertex:Ep,worldpos_vertex:Ap,background_vert:Cp,background_frag:Lp,backgroundCube_vert:Rp,backgroundCube_frag:Pp,cube_vert:Ip,cube_frag:Dp,depth_vert:Np,depth_frag:Op,distance_vert:qp,distance_frag:Up,equirect_vert:Fp,equirect_frag:zp,linedashed_vert:Bp,linedashed_frag:Gp,meshbasic_vert:kp,meshbasic_frag:Hp,meshlambert_vert:Vp,meshlambert_frag:Wp,meshmatcap_vert:Kp,meshmatcap_frag:Xp,meshnormal_vert:Zp,meshnormal_frag:jp,meshphong_vert:Yp,meshphong_frag:Jp,meshphysical_vert:$p,meshphysical_frag:Qp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:am,sprite_frag:om},ut={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Pn={basic:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ke([ut.points,ut.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ke([ut.common,ut.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ke([ut.sprite,ut.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:ke([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:ke([ut.lights,ut.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Pn.physical={uniforms:ke([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Eo={r:0,b:0,g:0},lm=new ae,dh=new Dt;dh.set(-1,0,0,0,1,0,0,0,1);function cm(i,t,e,n,s,r){let a=new Rt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let b=T.backgroundBlurriness>0;C=t.get(C,b)}return C}function g(T){let C=!1,b=p(T);b===null?m(a,o):b&&b.isColor&&(m(b,1),C=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(T,C){let b=p(C);b&&(b.isCubeTexture||b.mapping===rr)?(c===void 0&&(c=new ne(new kn(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Ci(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dh),c.material.toneMapped=Bt.getTransfer(b.colorSpace)!==jt,(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ne(new Bs(2,2),new xe({name:"BackgroundMaterial",uniforms:Ci(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(b.colorSpace)!==jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,C){T.getRGB(Eo,Wl(i)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,C,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:y,dispose:f}}function um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(O,q,F,I,k){let Z=!1,j=d(O,I,F,q);r!==j&&(r=j,c(r.object)),Z=p(O,I,F,k),Z&&g(O,I,F,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(O,q,F,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function d(O,q,F,I){let k=I.wireframe===!0,Z=n[q.id];Z===void 0&&(Z={},n[q.id]=Z);let j=O.isInstancedMesh===!0?O.id:0,nt=Z[j];nt===void 0&&(nt={},Z[j]=nt);let W=nt[F.id];W===void 0&&(W={},nt[F.id]=W);let Q=W[k];return Q===void 0&&(Q=u(l()),W[k]=Q),Q}function u(O){let q=[],F=[],I=[];for(let k=0;k<e;k++)q[k]=0,F[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:F,attributeDivisors:I,object:O,attributes:{},index:null}}function p(O,q,F,I){let k=r.attributes,Z=q.attributes,j=0,nt=F.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=k[W],At=Z[W];if(At===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(At=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(At=O.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;j++}return r.attributesNum!==j||r.index!==I}function g(O,q,F,I){let k={},Z=q.attributes,j=0,nt=F.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=Z[W];et===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(et=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(et=O.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),k[W]=At,j++}r.attributes=k,r.attributesNum=j,r.index=I}function y(){let O=r.newAttributes;for(let q=0,F=O.length;q<F;q++)O[q]=0}function m(O){f(O,0)}function f(O,q){let F=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;F[O]=1,I[O]===0&&(i.enableVertexAttribArray(O),I[O]=1),k[O]!==q&&(i.vertexAttribDivisor(O,q),k[O]=q)}function T(){let O=r.newAttributes,q=r.enabledAttributes;for(let F=0,I=q.length;F<I;F++)q[F]!==O[F]&&(i.disableVertexAttribArray(F),q[F]=0)}function C(O,q,F,I,k,Z,j){j===!0?i.vertexAttribIPointer(O,q,F,k,Z):i.vertexAttribPointer(O,q,F,I,k,Z)}function b(O,q,F,I){y();let k=I.attributes,Z=F.getAttributes(),j=q.defaultAttributeValues;for(let nt in Z){let W=Z[nt];if(W.location>=0){let Q=k[nt];if(Q===void 0&&(nt==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),nt==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){let et=Q.normalized,At=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;let oe=Tt.buffer,Kt=Tt.type,Yt=Tt.bytesPerElement,K=Kt===i.INT||Kt===i.UNSIGNED_INT||Q.gpuType===Ba;if(Q.isInterleavedBufferAttribute){let $=Q.data,xt=$.stride,Nt=Q.offset;if($.isInstancedInterleavedBuffer){for(let gt=0;gt<W.locationSize;gt++)f(W.location+gt,$.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let gt=0;gt<W.locationSize;gt++)C(W.location+gt,At/W.locationSize,Kt,et,xt*Yt,(Nt+At/W.locationSize*gt)*Yt,K)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)f(W.location+$,Q.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<W.locationSize;$++)m(W.location+$);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let $=0;$<W.locationSize;$++)C(W.location+$,At/W.locationSize,Kt,et,At*Yt,At/W.locationSize*$*Yt,K)}}else if(j!==void 0){let et=j[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}T()}function M(){w();for(let O in n){let q=n[O];for(let F in q){let I=q[F];for(let k in I){let Z=I[k];for(let j in Z)h(Z[j].object),delete Z[j];delete I[k]}}delete n[O]}}function S(O){if(n[O.id]===void 0)return;let q=n[O.id];for(let F in q){let I=q[F];for(let k in I){let Z=I[k];for(let j in Z)h(Z[j].object),delete Z[j];delete I[k]}}delete n[O.id]}function E(O){for(let q in n){let F=n[q];for(let I in F){let k=F[I];if(k[O.id]===void 0)continue;let Z=k[O.id];for(let j in Z)h(Z[j].object),delete Z[j];delete k[O.id]}}}function x(O){for(let q in n){let F=n[q],I=O.isInstancedMesh===!0?O.id:0,k=F[I];if(k!==void 0){for(let Z in k){let j=k[Z];for(let nt in j)h(j[nt].object),delete j[nt];delete k[Z]}delete F[I],Object.keys(F).length===0&&delete n[q]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function hm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Ne&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ye&&E!==yn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:b,maxSamples:M,samples:S}}function fm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,C=T*4,b=f.clippingState||null;l.value=b,b=h(g,u,C,p);for(let M=0;M!==C;++M)b[M]=e[M];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,b=p;C!==y;++C,b+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var cs=4,pm=6,mm=20,gm=256,pr=new ci,Vu=new Rt,jl=null,Yl=0,Jl=0,$l=!1,vm=new R,Li=new R,Co=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=vm}=r;jl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Yl,Jl),this._renderer.xr.enabled=$l,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:Ne,format:un,colorSpace:As,depthBuffer:!1},s=Wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xm(r)),this._blurMaterial=ym(r,t,e),this._ggxMaterial=_m(r,t,e)}return s}_compileMaterial(t){let e=new ne(new te,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Vu),d.toneMapping=xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new kn,new Bn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,f=!0):(m.color.copy(Vu),f=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let M=this._cubeSize;ls(s,b*M,C>2?M:0,M,M),d.setRenderTarget(s),f&&d.render(y,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hi||t.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-cs?n-g+cs:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,ls(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ls(t,m,f,3*y,2*y),s.setRenderTarget(t),s.render(o,pr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-cs?s-this._lodMax+cs:0),u=4*(this._cubeSize-h);ls(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,pr)}};function xm(i){let t=[],e=[],n=i,s=i-cs+1+pm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),y=new Float32Array(p*u*d);for(let f=0;f<d;f++){let T=f%3*2/3-1,C=f>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(b,p*u*f);for(let M=0;M<u;M++){let S=h[M*2]*2-1,E=h[M*2+1]*2-1;f===0?Li.set(1,E,S):f===1?Li.set(-S,1,-E):f===2?Li.set(-S,E,1):f===3?Li.set(-1,E,-S):f===4?Li.set(-S,-1,E):Li.set(S,E,-1),Li.toArray(y,(f*u+M)*p)}}let m=new te;m.setAttribute("position",new We(g,p)),m.setAttribute("outputDirection",new We(y,p)),e.push(new ne(m,null)),n>cs&&n--}return{lodMeshes:e,sizeLods:t}}function Wu(i,t,e){let n=new Me(i,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){return new xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ym(i,t,e){return new xe({name:"SphericalGaussianBlur",defines:{SAMPLES:mm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ku(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Xu(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lo=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:cn});r.uniforms.tEquirect.value=e;let a=new ne(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Ie),new Oa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ua||p===Fa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Lo(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===Ua||p===Fa,y=p===hi||p===Ai;if(g||y){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Co(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||y&&T&&l(T)?(n===null&&(n=new Co(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Ua?u.mapping=hi:p===Fa&&(u.mapping=Ai),u}function l(u){let p=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bi("WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(p!==null){let T=p.array;y=p.version;for(let C=0,b=T.length;C<b;C+=3){let M=T[C+0],S=T[C+1],E=T[C+2];u.push(M,S,S,E,E,M)}}else{let T=g.array;y=g.version;for(let C=0,b=T.length/3-1;C<b;C+=3){let M=C+0,S=C+1,E=C+2;u.push(M,S,S,E,E,M)}}let m=new(g.count>=65535?Ns:Ds)(u,1);m.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function wm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Tm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;p===!0&&(C=1),g===!0&&(C=2),y===!0&&(C=3);let b=o.attributes.position.count*C,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let S=new Float32Array(b*M*4*d),E=new Rs(S,b,M,d);E.type=yn,E.needsUpdate=!0;let x=C*4;for(let L=0;L<d;L++){let O=m[L],q=f[L],F=T[L],I=b*M*4*L;for(let k=0;k<O.count;k++){let Z=k*x;p===!0&&(s.fromBufferAttribute(O,k),S[I+Z+0]=s.x,S[I+Z+1]=s.y,S[I+Z+2]=s.z,S[I+Z+3]=0),g===!0&&(s.fromBufferAttribute(q,k),S[I+Z+4]=s.x,S[I+Z+5]=s.y,S[I+Z+6]=s.z,S[I+Z+7]=0),y===!0&&(s.fromBufferAttribute(F,k),S[I+Z+8]=s.x,S[I+Z+9]=s.y,S[I+Z+10]=s.z,S[I+Z+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new pt(b,M)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Am(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Cm={[Qs]:"LINEAR_TONE_MAPPING",[tr]:"REINHARD_TONE_MAPPING",[er]:"CINEON_TONE_MAPPING",[Ei]:"ACES_FILMIC_TONE_MAPPING",[ir]:"AGX_TONE_MAPPING",[sr]:"NEUTRAL_TONE_MAPPING",[nr]:"CUSTOM_TONE_MAPPING"};function Lm(i,t,e,n,s,r){let a=new Me(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new te;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new is({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ne(c,h),u=new ci(-1,1,1,-1,0,1),p=null,g=null,y=!1,m,f=null,T=[],C=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let S=0;S<T.length;S++){let E=T[S];E.setSize&&E.setSize(b,M)}},this.setEffects=function(b){T=b,C=T.length>0&&T[0].isRenderPass===!0;let M=a.width,S=a.height;T.length>0&&o===null&&(o=new Me(M,S,{type:Ne,depthBuffer:!1,stencilBuffer:!1}),l=new Me(M,S,{type:Ne,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<T.length;E++){let x=T[E];x.setSize&&x.setSize(M,S)}},this.begin=function(b,M){if(y||b.toneMapping===xn&&T.length===0)return!1;if(f=M,M!==null){let S=M.width,E=M.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return C===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=xn,!0},this.hasRenderPass=function(){return C},this.end=function(b,M){b.toneMapping=m,y=!0;let S=a,E=o;for(let x=0;x<T.length;x++){let w=T[x];w.enabled!==!1&&(w.render(b,E,S,M),w.needsSwap!==!1&&(S=E,E=E===o?l:o))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,h.defines={},Bt.getTransfer(p)===jt&&(h.defines.SRGB_TRANSFER="");let x=Cm[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(f),b.render(d,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var fh=new je,ec=new ri(1,1),ph=new Rs,mh=new ua,gh=new Os,Zu=[],ju=[],Yu=new Float32Array(16),Ju=new Float32Array(9),$u=new Float32Array(4);function hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=ju[t];e===void 0&&(e=new Int32Array(t),ju[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Ee(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Ee(e,n)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Ee(e,n)}}function Um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=e.isReversedDepthBuffer()?To:wo,r=ec):r=fh,e.setTexture2D(t||r,s)}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mh,s)}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gh,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ph,s)}function jm(i){switch(i){case 5126:return Rm;case 35664:return Pm;case 35665:return Im;case 35666:return Dm;case 35674:return Nm;case 35675:return Om;case 35676:return qm;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return zm;case 35669:case 35673:return Bm;case 5125:return Gm;case 36294:return km;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Zm}}function Ym(i,t){i.uniform1fv(this.addr,t)}function Jm(i,t){let e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function $m(i,t){let e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Qm(i,t){let e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function tg(i,t){let e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function eg(i,t){let e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ng(i,t){let e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ig(i,t){i.uniform1iv(this.addr,t)}function sg(i,t){i.uniform2iv(this.addr,t)}function rg(i,t){i.uniform3iv(this.addr,t)}function ag(i,t){i.uniform4iv(this.addr,t)}function og(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function cg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function hg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ec:a=fh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function dg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mh,r[a])}function fg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gh,r[a])}function pg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ph,r[a])}function mg(i){switch(i){case 5126:return Ym;case 35664:return Jm;case 35665:return $m;case 35666:return Qm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}var nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}},ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mg(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function Qu(i,t){i.seq.push(t),i.map[t.id]=t}function gg(i,t,e){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qu(e,c===void 0?new nc(o,i,t):new ic(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sc(o),Qu(e,d)),e=d}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);gg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vg=37297,xg=0;function _g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var eh=new Dt;function yg(i){Bt._getMatrix(eh,Bt.workingColorSpace,i);let t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_g(i.getShaderSource(t),o)}else return r}function bg(i,t){let e=yg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mg={[Qs]:"Linear",[tr]:"Reinhard",[er]:"Cineon",[Ei]:"ACESFilmic",[ir]:"AgX",[sr]:"Neutral",[nr]:"Custom"};function Sg(i,t){let e=Mg[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ao=new R;function wg(){Bt.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gr(i){return i!==""}function ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(Cg,Rg)}var Lg=new Map;function Rg(i,t){let e=Ut[t];if(e===void 0){let n=Lg.get(t);if(n!==void 0)e=Ut[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rc(e)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(Pg,Ig)}function Ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Dg={[Js]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function Ng(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[hi]:"ENVMAP_TYPE_CUBE",[Ai]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function qg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ug={[Ai]:"ENVMAP_MODE_REFRACTION"};function Fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zg={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function Bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function kg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ng(e),c=qg(e),h=Fg(e),d=Bg(e),u=Gg(e),p=Tg(e),g=Eg(r),y=s.createProgram(),m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==xn?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=rc(a),a=ih(a,e),a=sh(a,e),o=rc(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=T+m+a,b=T+f+o,M=th(s,s.VERTEX_SHADER,C),S=th(s,s.FRAGMENT_SHADER,b);s.attachShader(y,M),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(O){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(y)||"",F=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(S)||"",k=q.trim(),Z=F.trim(),j=I.trim(),nt=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,S);else{let Q=nh(s,M,"vertex"),et=nh(s,S,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+Q+`
`+et)}else k!==""?Ct("WebGLProgram: Program Info Log:",k):(Z===""||j==="")&&(W=!1);W&&(O.diagnostics={runnable:nt,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(M),s.deleteShader(S),x=new us(s,y),w=Ag(s,y)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,vg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=S,this}var Hg=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}};function Vg(i){return i===pi||i===hr||i===dr}function Wg(i,t,e,n,s,r){let a=new Ji,o=new ac,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,L,O,q,F){let I=O.fog,k=q.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||Z,j),W=nt&&nt.mapping===rr?nt.image.height:null,Q=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,At=et!==void 0?et.length:0,Tt=0;k.morphAttributes.position!==void 0&&(Tt=1),k.morphAttributes.normal!==void 0&&(Tt=2),k.morphAttributes.color!==void 0&&(Tt=3);let oe,Kt,Yt,K;if(Q){let ce=Pn[Q];oe=ce.vertexShader,Kt=ce.fragmentShader}else{oe=x.vertexShader,Kt=x.fragmentShader;let ce=o.getVertexShaderStage(x),$t=o.getFragmentShaderStage(x);o.update(x,ce,$t),Yt=ce.id,K=$t.id}let $=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Nt=q.isInstancedMesh===!0,gt=q.isBatchedMesh===!0,zt=!!x.map,we=!!x.matcap,kt=!!nt,Zt=!!x.aoMap,le=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,Ce=!!x.displacementMap,Xe=!!x.emissiveMap,me=!!x.metalnessMap,_e=!!x.roughnessMap,N=x.anisotropy>0,qe=x.clearcoat>0,ee=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,U=x.sheen>0,G=x.transmission>0,V=N&&!!x.anisotropyMap,it=qe&&!!x.clearcoatMap,st=qe&&!!x.clearcoatNormalMap,X=qe&&!!x.clearcoatRoughnessMap,J=v&&!!x.iridescenceMap,rt=v&&!!x.iridescenceThicknessMap,St=U&&!!x.sheenColorMap,ct=U&&!!x.sheenRoughnessMap,at=!!x.specularMap,wt=!!x.specularColorMap,Lt=!!x.specularIntensityMap,Ot=G&&!!x.transmissionMap,D=G&&!!x.thicknessMap,ot=!!x.gradientMap,Y=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,tt=!!x.extensions,Et=xn;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Et=i.toneMapping);let bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:Kt,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:gt,batchingColor:gt&&q._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&q.instanceColor!==null,instancingMorph:Nt&&q.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:we,envMap:kt,envMapMode:kt&&nt.mapping,envMapCubeUVHeight:W,aoMap:Zt,lightMap:le,bumpMap:Wt,normalMap:fe,displacementMap:Ce,emissiveMap:Xe,normalMapObjectSpace:fe&&x.normalMapType===Cu,normalMapTangentSpace:fe&&x.normalMapType===So,packedNormalMap:fe&&x.normalMapType===So&&Vg(x.normalMap.format),metalnessMap:me,roughnessMap:_e,anisotropy:N,anisotropyMap:V,clearcoat:qe,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:X,dispersion:ee,retroreflection:A,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:U,sheenColorMap:St,sheenRoughnessMap:ct,specularMap:at,specularColorMap:wt,specularIntensityMap:Lt,transmission:G,transmissionMap:Ot,thicknessMap:D,gradientMap:ot,opaque:x.transparent===!1&&x.blending===rs&&x.alphaToCoverage===!1,alphaMap:Y,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:zt&&g(x.map.channel),aoMapUv:Zt&&g(x.aoMap.channel),lightMapUv:le&&g(x.lightMap.channel),bumpMapUv:Wt&&g(x.bumpMap.channel),normalMapUv:fe&&g(x.normalMap.channel),displacementMapUv:Ce&&g(x.displacementMap.channel),emissiveMapUv:Xe&&g(x.emissiveMap.channel),metalnessMapUv:me&&g(x.metalnessMap.channel),roughnessMapUv:_e&&g(x.roughnessMap.channel),anisotropyMapUv:V&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(x.sheenRoughnessMap.channel),specularMapUv:at&&g(x.specularMap.channel),specularColorMapUv:wt&&g(x.specularColorMap.channel),specularIntensityMapUv:Lt&&g(x.specularIntensityMap.channel),transmissionMapUv:Ot&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:Y&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||N),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(zt||Y),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&Bt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:Xe&&x.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(f(w,x),T(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=p[x.type],L;if(w){let O=Pn[w];L=Wn.clone(O.uniforms)}else L=x.uniforms;return L}function b(x,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new kg(i,w,x,s),c.push(L),h.set(w,L)),L}function M(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function Kg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,y,m,f){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},i[t]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=g,T.materialVariant=a(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=m,T.group=f),t++,T}function l(u,p,g,y,m,f,T){T.reversedDepth===!0&&(m=-m);let C=o(u,p,g,y,m,f);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,p,g,y,m,f){let T=o(u,p,g,y,m,f);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,p){e.length>1&&e.sort(u||Xg),n.length>1&&n.sort(p||oh),s.length>1&&s.sort(p||oh)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Rt};break;case"SpotLight":e={position:new R,direction:new R,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qg(i){let t=new jg,e=Yg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ae,a=new ae;function o(c){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,T=0,C=0,b=0,M=0,S=0,E=0,x=0,w=0,L=0;c.sort($g);for(let q=0,F=c.length;q<F;q++){let I=c[q],k=I.color,Z=I.intensity,j=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===pi?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*Z,d+=k.g*Z,u+=k.b*Z;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],Z);L++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=nt;let At=Q.getViewportCount();for(let Tt=0;Tt<At;Tt++)n.sunShadowMatrix[y+Tt]=Q.getMatrix(Tt),n.sunShadowCascade[y+Tt]=Q._cascadeData[Tt];y+=At,g++}n.sun[p]=W,p++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(Z),W.distance=j,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[T]=W;let Q=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[T]=Q.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[T]=et,n.spotShadowMap[T]=nt,E++}T++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(k).multiplyScalar(Z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[C]=W,C++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[f]=et,n.pointShadowMap[f]=nt,n.pointShadowMatrix[f]=I.shadow.matrix,S++}n.point[f]=W,f++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(Z),W.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[b]=W,b++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let O=n.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==f||O.spotLength!==T||O.rectAreaLength!==C||O.hemiLength!==b||O.numSunShadows!==g||O.numDirectionalShadows!==M||O.numPointShadows!==S||O.numSpotShadows!==E||O.numSpotMaps!==x||O.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=C,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,O.sunLength=p,O.directionalLength=m,O.pointLength=f,O.spotLength=T,O.rectAreaLength=C,O.hemiLength=b,O.numSunShadows=g,O.numDirectionalShadows=M,O.numPointShadows=S,O.numSpotShadows=E,O.numSpotMaps=x,O.numLightProbes=L,n.version=Jg++)}function l(c,h){let d=0,u=0,p=0,g=0,y=0,m=0,f=h.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){let b=c[T];if(b.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),d++}else if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),u++}else if(b.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function ch(i){let t=new Qg(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function t0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ch(i),t.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`,i0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],s0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],uh=new ae,mr=new R,tc=new R;function r0(i,t,e){let n=new Qi,s=new pt,r=new pt,a=new pe,o=new Ma,l=new Sa,c={},h=e.maxTextureSize,d={[ui]:Ke,[Ke]:ui,[ln]:ln},u=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new te;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ne(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let f=this.type;this.render=function(S,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===ru&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let w=i.getRenderTarget(),L=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(cn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let F=f!==this.type;F&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=S.length;I<k;I++){let Z=S[I],j=Z.shadow;if(j===void 0){Ct("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let nt=j.getFrameExtents();s.multiply(nt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,j.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||F===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ss){if(Z.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Me(s.x,s.y,{format:pi,type:Ne,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),j.map.texture.name=Z.name+".shadowMap",j.map.depthTexture=new ri(s.x,s.y,yn),j.map.depthTexture.name=Z.name+".shadowMapDepth",j.map.depthTexture.format=En,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Re,j.map.depthTexture.magFilter=Re}else Z.isPointLight?(j.map=new Lo(s.x),j.map.depthTexture=new pa(s.x,_n)):(j.map=new Me(s.x,s.y),j.map.depthTexture=new ri(s.x,s.y,_n)),j.map.depthTexture.name=Z.name+".shadowMap",j.map.depthTexture.format=En,this.type===Js?(j.map.depthTexture.compareFunction=W?To:wo,j.map.depthTexture.minFilter=Ie,j.map.depthTexture.magFilter=Ie):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Re,j.map.depthTexture.magFilter=Re);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let Q=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Z.isPointLight!==!0&&j.updateMatrices(Z,x);for(let et=0;et<Q;et++){let At=j.getCamera(et);if(Z.isPointLight){let Tt=j.camera,oe=j.matrix,Kt=Z.distance||Tt.far;Kt!==Tt.far&&(Tt.far=Kt,Tt.updateProjectionMatrix()),mr.setFromMatrixPosition(Z.matrixWorld),Tt.position.copy(mr),tc.copy(Tt.position),tc.add(i0[et]),Tt.up.copy(s0[et]),Tt.lookAt(tc),Tt.updateMatrixWorld(),oe.makeTranslation(-mr.x,-mr.y,-mr.z),uh.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(uh,Tt.coordinateSystem,Tt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,et),i.clear();else{et===0&&(i.setRenderTarget(j.map),i.clear());let Tt=j.getViewport(et);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),q.viewport(a)}n=j.getFrustum(et),b(E,x,At,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ss&&T(j,x),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,L,O)};function T(S,E){let x=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Me(s.x,s.y,{format:pi,type:Ne}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,x,u,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,x,p,y,null)}function C(S,E,x,w){let L=null,O=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)L=O;else if(L=x.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let q=L.uuid,F=E.uuid,I=c[q];I===void 0&&(I={},c[q]=I);let k=I[F];k===void 0&&(k=L.clone(),I[F]=k,E.addEventListener("dispose",M)),L=k}if(L.visible=E.visible,L.wireframe=E.wireframe,w===ss?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:d[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let q=i.properties.get(L);q.light=x}return L}function b(S,E,x,w,L){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===ss)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let F=t.update(S),I=S.material;if(Array.isArray(I)){let k=F.groups;for(let Z=0,j=k.length;Z<j;Z++){let nt=k[Z],W=I[nt.materialIndex];if(W&&W.visible){let Q=C(S,W,w,L);S.onBeforeShadow(i,S,E,x,F,Q,nt),i.renderBufferDirect(x,null,F,Q,S,nt),S.onAfterShadow(i,S,E,x,F,Q,nt)}}}else if(I.visible){let k=C(S,I,w,L);S.onBeforeShadow(i,S,E,x,F,k,null),i.renderBufferDirect(x,null,F,k,S,null),S.onAfterShadow(i,S,E,x,F,k,null)}}let q=S.children;for(let F=0,I=q.length;F<I;F++)b(q[F],E,x,w,L)}function M(S){S.target.removeEventListener("dispose",M);for(let x in c){let w=c[x],L=S.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function a0(i,t){function e(){let D=!1,ot=new pe,Y=null,lt=new pe(0,0,0,0);return{setMask:function(ft){Y!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){D=ft},setClear:function(ft,tt,Et,bt,ce){ce===!0&&(ft*=bt,tt*=bt,Et*=bt),ot.set(ft,tt,Et,bt),lt.equals(ot)===!1&&(i.clearColor(ft,tt,Et,bt),lt.copy(ot))},reset:function(){D=!1,Y=null,lt.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,Y=null,lt=null,ft=null;return{setReversed:function(tt){if(ot!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let bt=ft;ft=null,this.setClear(bt)}},getReversed:function(){return ot},setTest:function(tt){tt?$(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(tt){Y!==tt&&!D&&(i.depthMask(tt),Y=tt)},setFunc:function(tt){if(ot&&(tt=Bu[tt]),lt!==tt){switch(tt){case Jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=tt}},setLocked:function(tt){D=tt},setClear:function(tt){ft!==tt&&(ft=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){D=!1,Y=null,lt=null,ft=null,ot=!1}}}function s(){let D=!1,ot=null,Y=null,lt=null,ft=null,tt=null,Et=null,bt=null,ce=null;return{setTest:function($t){D||($t?$(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function($t){ot!==$t&&!D&&(i.stencilMask($t),ot=$t)},setFunc:function($t,dn,Mn){(Y!==$t||lt!==dn||ft!==Mn)&&(i.stencilFunc($t,dn,Mn),Y=$t,lt=dn,ft=Mn)},setOp:function($t,dn,Mn){(tt!==$t||Et!==dn||bt!==Mn)&&(i.stencilOp($t,dn,Mn),tt=$t,Et=dn,bt=Mn)},setLocked:function($t){D=$t},setClear:function($t){ce!==$t&&(i.clearStencil($t),ce=$t)},reset:function(){D=!1,ot=null,Y=null,lt=null,ft=null,tt=null,Et=null,bt=null,ce=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,T=null,C=null,b=null,M=null,S=null,E=null,x=new Rt(0,0,0),w=0,L=!1,O=null,q=null,F=null,I=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=nt>=2);let Q=null,et={},At=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),oe=new pe().fromArray(At),Kt=new pe().fromArray(Tt);function Yt(D,ot,Y,lt){let ft=new Uint8Array(4),tt=i.createTexture();i.bindTexture(D,tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<Y;Et++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return tt}let K={};K[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Xi),Wt(!1),fe(Cl),$(i.CULL_FACE),Zt(cn);function $(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Nt(D,ot){return u[D]!==ot?(i.bindFramebuffer(D,ot),u[D]=ot,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function gt(D,ot){let Y=g,lt=!1;if(D){Y=p.get(ot),Y===void 0&&(Y=[],p.set(ot,Y));let ft=D.textures;if(Y.length!==ft.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Et=ft.length;tt<Et;tt++)Y[tt]=i.COLOR_ATTACHMENT0+tt;Y.length=ft.length,lt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,lt=!0);lt&&i.drawBuffers(Y)}function zt(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let we={[Ti]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};we[cu]=i.MIN,we[uu]=i.MAX;let kt={[hu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[vu]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[xu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,ot,Y,lt,ft,tt,Et,bt,ce,$t){if(D===cn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),D!==au){if(D!==f||$t!==L){if((T!==Ti||M!==Ti)&&(i.blendEquation(i.FUNC_ADD),T=Ti,M=Ti),$t)switch(D){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",D);break}else switch(D){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ll:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",D);break}C=null,b=null,S=null,E=null,x.set(0,0,0),w=0,f=D,L=$t}return}ft=ft||ot,tt=tt||Y,Et=Et||lt,(ot!==T||ft!==M)&&(i.blendEquationSeparate(we[ot],we[ft]),T=ot,M=ft),(Y!==C||lt!==b||tt!==S||Et!==E)&&(i.blendFuncSeparate(kt[Y],kt[lt],kt[tt],kt[Et]),C=Y,b=lt,S=tt,E=Et),(bt.equals(x)===!1||ce!==w)&&(i.blendColor(bt.r,bt.g,bt.b,ce),x.copy(bt),w=ce),f=D,L=!1}function le(D,ot){D.side===ln?xt(i.CULL_FACE):$(i.CULL_FACE);let Y=D.side===Ke;ot&&(Y=!Y),Wt(Y),D.blending===rs&&D.transparent===!1?Zt(cn):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let lt=D.stencilWrite;o.setTest(lt),lt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function fe(D){D!==iu?($(i.CULL_FACE),D!==q&&(D===Cl?i.cullFace(i.BACK):D===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),q=D}function Ce(D){D!==F&&(j&&i.lineWidth(D),F=D)}function Xe(D,ot,Y){D?($(i.POLYGON_OFFSET_FILL),(I!==ot||k!==Y)&&(I=ot,k=Y,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,Y))):xt(i.POLYGON_OFFSET_FILL)}function me(D){D?$(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function _e(D){D===void 0&&(D=i.TEXTURE0+Z-1),Q!==D&&(i.activeTexture(D),Q=D)}function N(D,ot,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+Z-1:Y=Q);let lt=et[Y];lt===void 0&&(lt={type:void 0,texture:void 0},et[Y]=lt),(lt.type!==D||lt.texture!==ot)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(D,ot||K[D]),lt.type=D,lt.texture=ot)}function qe(){let D=et[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function U(){try{i.texSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function it(){try{i.texStorage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function st(){try{i.texStorage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function X(){try{i.texImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function rt(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function St(D,ot){d[D]!==ot&&(i.pixelStorei(D,ot),d[D]=ot)}function ct(D){oe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function at(D){Kt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Kt.copy(D))}function wt(D,ot){let Y=c.get(ot);Y===void 0&&(Y=new WeakMap,c.set(ot,Y));let lt=Y.get(D);lt===void 0&&(lt=i.getUniformBlockIndex(ot,D.name),Y.set(D,lt))}function Lt(D,ot){let lt=c.get(ot).get(D);l.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,D.__bindingPointIndex),l.set(ot,lt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,T=null,C=null,b=null,M=null,S=null,E=null,x=new Rt(0,0,0),w=0,L=!1,O=null,q=null,F=null,I=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:xt,bindFramebuffer:Nt,drawBuffers:gt,useProgram:zt,setBlending:Zt,setMaterial:le,setFlipSided:Wt,setCullFace:fe,setLineWidth:Ce,setPolygonOffset:Xe,setScissorTest:me,activeTexture:_e,bindTexture:N,unbindTexture:qe,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:X,texImage3D:J,pixelStorei:St,getParameter:rt,updateUBOMapping:wt,uniformBlockBinding:Lt,texStorage2D:it,texStorage3D:st,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:V,scissor:ct,viewport:at,reset:Ot}}function o0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,v){return g?new OffscreenCanvas(A,v):Ls("canvas")}function m(A,v,U){let G=1,V=ee(A);if((V.width>U||V.height>U)&&(G=U/Math.max(V.width,V.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(G*V.width),st=Math.floor(G*V.height);u===void 0&&(u=y(it,st));let X=v?y(it,st):u;return X.width=it,X.height=st,X.getContext("2d").drawImage(A,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+it+"x"+st+")."),X}else return"data"in A&&Ct("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),A;return A}function f(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,U,G,V,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st;G&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8),U===i.UNSIGNED_SHORT&&st&&(X=st.R16_EXT),U===i.SHORT&&st&&(X=st.R16_SNORM_EXT)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),v===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8),U===i.UNSIGNED_SHORT&&st&&(X=st.RG16_EXT),U===i.SHORT&&st&&(X=st.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_SHORT&&st&&(X=st.RGB16_EXT),U===i.SHORT&&st&&(X=st.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){let J=it?Cs:Bt.getTransfer(V);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=J===jt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&st&&(X=st.RGBA16_EXT),U===i.SHORT&&st&&(X=st.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(A,v){let U;return A?v===null||v===_n||v===os?U=i.DEPTH24_STENCIL8:v===yn?U=i.DEPTH32F_STENCIL8:v===as&&(U=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_n||v===os?U=i.DEPTH_COMPONENT24:v===yn?U=i.DEPTH_COMPONENT32F:v===as&&(U=i.DEPTH_COMPONENT16),U}function S(A,v){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Ie?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){let v=A.target;v.removeEventListener("dispose",E),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(A){let v=A.target;v.removeEventListener("dispose",x),O(v)}function w(A){let v=n.get(A);if(v.__webglInit===void 0)return;let U=A.source,G=p.get(U);if(G){let V=G[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&L(A),Object.keys(G).length===0&&p.delete(U)}n.remove(A)}function L(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let U=A.source,G=p.get(U);delete G[v.__cacheKey],a.memory.textures--}function O(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let V=0;V<v.__webglFramebuffer[G].length;V++)i.deleteFramebuffer(v.__webglFramebuffer[G][V]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=A.textures;for(let G=0,V=U.length;G<V;G++){let it=n.get(U[G]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(U[G])}n.remove(A)}let q=0;function F(){q=0}function I(){return q}function k(A){q=A}function Z(){let A=q;return A>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function j(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function nt(A,v){let U=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let G=A.image;if(G===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(U,A,v);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function W(A,v){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){xt(U,A,v);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function Q(A,v){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){xt(U,A,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function et(A,v){let U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Nt(U,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let At={[sa]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},Tt={[Re]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},oe={[Ru]:i.NEVER,[Ou]:i.ALWAYS,[Pu]:i.LESS,[wo]:i.LEQUAL,[Iu]:i.EQUAL,[To]:i.GEQUAL,[Du]:i.GREATER,[Nu]:i.NOTEQUAL};function Kt(A,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ie||v.magFilter===za||v.magFilter===ar||v.magFilter===di||v.minFilter===Ie||v.minFilter===za||v.minFilter===ar||v.minFilter===di)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,At[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,At[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,At[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Tt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==ar&&v.minFilter!==di||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(A,v){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));let G=v.source,V=p.get(G);V===void 0&&(V={},p.set(G,V));let it=j(v);if(it!==A.__cacheKey){V[it]===void 0&&(V[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[it].usedTimes++;let st=V[A.__cacheKey];st!==void 0&&(V[A.__cacheKey].usedTimes--,st.usedTimes===0&&L(v)),A.__cacheKey=it,A.__webglTexture=V[it].texture}return U}function K(A,v,U){return Math.floor(Math.floor(A/U)/v)}function $(A,v,U,G){let it=A.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,G,v.data);else{it.sort((St,ct)=>St.start-ct.start);let st=0;for(let St=1;St<it.length;St++){let ct=it[st],at=it[St],wt=ct.start+ct.count,Lt=K(at.start,v.width,4),Ot=K(ct.start,v.width,4);at.start<=wt+1&&Lt===Ot&&K(at.start+at.count-1,v.width,4)===Lt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let St=0,ct=it.length;St<ct;St++){let at=it[St],wt=Math.floor(at.start/4),Lt=Math.ceil(at.count/4),Ot=wt%v.width,D=Math.floor(wt/v.width),ot=Lt,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Ot,D,ot,Y,U,G,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function xt(A,v,U){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let V=Yt(A,v),it=v.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+U);let st=n.get(it);if(it.version!==st.__version||V===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=Bt.getPrimaries(Bt.workingColorSpace),lt=v.colorSpace===Vn?null:Bt.getPrimaries(v.colorSpace),ft=v.colorSpace===Vn||Y===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=qe(v,J);let rt=r.convert(v.format,v.colorSpace),St=r.convert(v.type),ct=b(v.internalFormat,rt,St,v.normalized,v.colorSpace,v.isVideoTexture);Kt(G,v);let at,wt=v.mipmaps,Lt=v.isVideoTexture!==!0,Ot=st.__version===void 0||V===!0,D=it.dataReady,ot=S(v,J);if(v.isDepthTexture)ct=M(v.format===fi,v.type),Ot&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,ct,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,ct,J.width,J.height,0,rt,St,null));else if(v.isDataTexture)if(wt.length>0){Lt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ct,wt[0].width,wt[0].height);for(let Y=0,lt=wt.length;Y<lt;Y++)at=wt[Y],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(i.TEXTURE_2D,Y,ct,at.width,at.height,0,rt,St,at.data);v.generateMipmaps=!1}else Lt?(Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height),D&&$(v,J,rt,St)):e.texImage2D(i.TEXTURE_2D,0,ct,J.width,J.height,0,rt,St,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,wt[0].width,wt[0].height,J.depth);for(let Y=0,lt=wt.length;Y<lt;Y++)if(at=wt[Y],v.format!==un)if(rt!==null)if(Lt){if(D)if(v.layerUpdates.size>0){let ft=Zl(at.width,at.height,v.format,v.type);for(let tt of v.layerUpdates){let Et=at.data.subarray(tt*ft/at.data.BYTES_PER_ELEMENT,(tt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,tt,at.width,at.height,1,rt,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,at.width,at.height,J.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ct,at.width,at.height,J.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,at.width,at.height,J.depth,rt,St,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,ct,at.width,at.height,J.depth,0,rt,St,at.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Lt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ct,wt[0].width,wt[0].height);for(let Y=0,lt=wt.length;Y<lt;Y++)at=wt[Y],v.format!==un?rt!==null?Lt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,ct,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(i.TEXTURE_2D,Y,ct,at.width,at.height,0,rt,St,at.data)}else if(v.isDataArrayTexture)if(Lt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,J.width,J.height,J.depth),D)if(v.layerUpdates.size>0){let Y=Zl(J.width,J.height,v.format,v.type);for(let lt of v.layerUpdates){let ft=J.data.subarray(lt*Y/J.data.BYTES_PER_ELEMENT,(lt+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,J.width,J.height,1,rt,St,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,rt,St,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,J.width,J.height,J.depth,0,rt,St,J.data);else if(v.isData3DTexture)Lt?(Ot&&e.texStorage3D(i.TEXTURE_3D,ot,ct,J.width,J.height,J.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,rt,St,J.data)):e.texImage3D(i.TEXTURE_3D,0,ct,J.width,J.height,J.depth,0,rt,St,J.data);else if(v.isFramebufferTexture){if(Ot)if(Lt)e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height);else{let Y=J.width,lt=J.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,Y,lt,0,rt,St,null),Y>>=1,lt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),d.add(v),Y.onpaint=lt=>{let ft=lt.changedElements;for(let tt of d)ft.includes(tt.image)&&(tt.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let ft=i.RGBA,tt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,tt,Et,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Lt&&Ot){let Y=ee(wt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,Y.width,Y.height)}for(let Y=0,lt=wt.length;Y<lt;Y++)at=wt[Y],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,rt,St,at):e.texImage2D(i.TEXTURE_2D,Y,ct,rt,St,at);v.generateMipmaps=!1}else if(Lt){if(Ot){let Y=ee(J);e.texStorage2D(i.TEXTURE_2D,ot,ct,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,St,J)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,St,J);f(v)&&T(G),st.__version=it.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Nt(A,v,U){if(v.image.length!==6)return;let G=Yt(A,v),V=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let it=n.get(V);if(V.version!==it.__version||G===!0){e.activeTexture(i.TEXTURE0+U);let st=Bt.getPrimaries(Bt.workingColorSpace),X=v.colorSpace===Vn?null:Bt.getPrimaries(v.colorSpace),J=v.colorSpace===Vn||st===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let rt=v.isCompressedTexture||v.image[0].isCompressedTexture,St=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!rt&&!St?ct[tt]=m(v.image[tt],!0,s.maxCubemapSize):ct[tt]=St?v.image[tt].image:v.image[tt],ct[tt]=qe(v,ct[tt]);let at=ct[0],wt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Ot=b(v.internalFormat,wt,Lt,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ot=it.__version===void 0||G===!0,Y=V.dataReady,lt=S(v,at);Kt(i.TEXTURE_CUBE_MAP,v);let ft;if(rt){D&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,at.width,at.height);for(let tt=0;tt<6;tt++){ft=ct[tt].mipmaps;for(let Et=0;Et<ft.length;Et++){let bt=ft[Et];v.format!==un?wt!==null?D?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ot,bt.width,bt.height,0,bt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,bt.width,bt.height,wt,Lt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ot,bt.width,bt.height,0,wt,Lt,bt.data)}}}else{if(ft=v.mipmaps,D&&ot){ft.length>0&&lt++;let tt=ee(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(St){D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,wt,Lt,ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,ct[tt].width,ct[tt].height,0,wt,Lt,ct[tt].data);for(let Et=0;Et<ft.length;Et++){let ce=ft[Et].image[tt].image;D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,ce.width,ce.height,wt,Lt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ot,ce.width,ce.height,0,wt,Lt,ce.data)}}else{D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,Lt,ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,wt,Lt,ct[tt]);for(let Et=0;Et<ft.length;Et++){let bt=ft[Et];D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,wt,Lt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ot,wt,Lt,bt.image[tt])}}}f(v)&&T(i.TEXTURE_CUBE_MAP),it.__version=V.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function gt(A,v,U,G,V,it){let st=r.convert(U.format,U.colorSpace),X=r.convert(U.type),J=b(U.internalFormat,st,X,U.normalized,U.colorSpace),rt=n.get(v),St=n.get(U);if(St.__renderTarget=v,!rt.__hasExternalTextures){let ct=Math.max(1,v.width>>it),at=Math.max(1,v.height>>it);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,it,J,ct,at,v.depth,0,st,X,null):e.texImage2D(V,it,J,ct,at,0,st,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,V,St.__webglTexture,0,me(v)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,V,St.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let G=v.depthTexture,V=G&&G.isDepthTexture?G.type:null,it=M(v.stencilBuffer,V),st=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(v),it,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(v),it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,A)}else{let G=v.textures;for(let V=0;V<G.length;V++){let it=G[V],st=r.convert(it.format,it.colorSpace),X=r.convert(it.type),J=b(it.internalFormat,st,X,it.normalized,it.colorSpace);_e(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(v),J,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(A,v,U){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(v.depthTexture);if(V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(V.__webglInit===void 0&&(V.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,v.depthTexture);let rt=r.convert(v.depthTexture.format),St=r.convert(v.depthTexture.type),ct;v.depthTexture.format===En?ct=i.DEPTH_COMPONENT24:v.depthTexture.format===fi&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,v.width,v.height,0,rt,St,null)}}else nt(v.depthTexture,0);let it=V.__webglTexture,st=me(v),X=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,J=v.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===En)_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,it,0);else if(v.depthTexture.format===fi)_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(A){let v=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let V=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",V)};G.addEventListener("dispose",V),v.__depthDisposeCallback=V}v.__boundDepthTexture=G}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)we(v.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?we(v.__webglFramebuffer[0],A,0):we(v.__webglFramebuffer,A,0)}else if(U){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),zt(v.__webglDepthbuffer[G],A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,it)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),zt(v.__webglDepthbuffer,A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(A,v,U){let G=n.get(A);v!==void 0&&gt(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&kt(A)}function le(A){let v=A.texture,U=n.get(A),G=n.get(v);A.addEventListener("dispose",x);let V=A.textures,it=A.isWebGLCubeRenderTarget===!0,st=V.length>1;if(st||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),it){U.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[X]=[];for(let J=0;J<v.mipmaps.length;J++)U.__webglFramebuffer[X][J]=i.createFramebuffer()}else U.__webglFramebuffer[X]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)U.__webglFramebuffer[X]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(st)for(let X=0,J=V.length;X<J;X++){let rt=n.get(V[X]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let X=0;X<V.length;X++){let J=V[X];U.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[X]);let rt=r.convert(J.format,J.colorSpace),St=r.convert(J.type),ct=b(J.internalFormat,rt,St,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),at=me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,U.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(U.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(U.__webglFramebuffer[X][J],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else gt(U.__webglFramebuffer[X],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(v)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let X=0,J=V.length;X<J;X++){let rt=V[X],St=n.get(rt),ct=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,St.__webglTexture),Kt(ct,rt),gt(U.__webglFramebuffer,A,rt,i.COLOR_ATTACHMENT0+X,ct,0),f(rt)&&T(ct)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,G.__webglTexture),Kt(X,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(U.__webglFramebuffer[J],A,v,i.COLOR_ATTACHMENT0,X,J);else gt(U.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,X,0);f(v)&&T(X),e.unbindTexture()}A.depthBuffer&&kt(A)}function Wt(A){let v=A.textures;for(let U=0,G=v.length;U<G;U++){let V=v[U];if(f(V)){let it=C(A),st=n.get(V).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}let fe=[],Ce=[];function Xe(A){if(A.samples>0){if(_e(A)===!1){let v=A.textures,U=A.width,G=A.height,V=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(A),X=v.length>1;if(X)for(let rt=0;rt<v.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<v.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=n.get(v[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,V,i.NEAREST),l===!0&&(fe.length=0,Ce.length=0,fe.push(i.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(fe.push(it),Ce.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let rt=0;rt<v.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let St=n.get(v[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function me(A){return Math.min(s.maxSamples,A.samples)}function _e(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function qe(A,v){let U=A.colorSpace,G=A.format,V=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==As&&U!==Vn&&(Bt.getTransfer(U)===jt?(G!==un||V!==Ye)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",U)),v}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function l0(i,t){function e(n,s=Vn){let r,a=Bt.getTransfer(s);if(n===Ye)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ol)return i.BYTE;if(n===ql)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ne)return i.HALF_FLOAT;if(n===zl)return i.ALPHA;if(n===Bl)return i.RGB;if(n===un)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===ur)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Xa||n===Za||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ja||n===$a||n===Qa||n===to||n===hr||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ja)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qa)return r.COMPRESSED_R11_EAC;if(n===to)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===xo||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===bo||n===dr||n===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:c0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends An{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new lc,f={},T=e.getContextAttributes(),C=null,b=null,M=[],S=[],E=new pt,x=null,w=null,L=new Be;L.viewport=new pe;let O=new Be;O.viewport=new pe;let q=[L,O],F=new qa,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=M[K];return $===void 0&&($=new $i,M[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=M[K];return $===void 0&&($=new $i,M[K]=$),$.getGripSpace()},this.getHand=function(K){let $=M[K];return $===void 0&&($=new $i,M[K]=$),$.getHandSpace()};function Z(K){let $=S.indexOf(K.inputSource);if($===-1)return;let xt=M[$];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<M.length;K++){let $=S[K];$!==null&&(S[K]=null,M[K].disconnect($))}I=null,k=null,m.reset();for(let K in f)delete f[K];if(t.setRenderTarget(C),p=null,u=null,d=null,s=null,b=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Nt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?fi:En,Nt=T.stencil?os:_n);let zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Me(u.textureWidth,u.textureHeight,{format:un,type:Ye,depthTexture:new ri(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Me(p.framebufferWidth,p.framebufferHeight,{format:un,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(K){for(let $=0;$<K.removed.length;$++){let xt=K.removed[$],Nt=S.indexOf(xt);Nt>=0&&(S[Nt]=null,M[Nt].disconnect(xt))}for(let $=0;$<K.added.length;$++){let xt=K.added[$],Nt=S.indexOf(xt);if(Nt===-1){for(let zt=0;zt<M.length;zt++)if(zt>=S.length){S.push(xt),Nt=zt;break}else if(S[zt]===null){S[zt]=xt,Nt=zt;break}if(Nt===-1)break}let gt=M[Nt];gt&&gt.connect(xt)}}let W=new R,Q=new R;function et(K,$,xt){W.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);let Nt=W.distanceTo(Q),gt=$.projectionMatrix.elements,zt=xt.projectionMatrix.elements,we=gt[14]/(gt[10]-1),kt=gt[14]/(gt[10]+1),Zt=(gt[9]+1)/gt[5],le=(gt[9]-1)/gt[5],Wt=(gt[8]-1)/gt[0],fe=(zt[8]+1)/zt[0],Ce=we*Wt,Xe=we*fe,me=Nt/(-Wt+fe),_e=me*-Wt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let N=we+me,qe=kt+me,ee=Ce-_e,A=Xe+(Nt-_e),v=Zt*kt/qe*N,U=le*kt/qe*N;K.projectionMatrix.makePerspective(ee,A,v,U,N,qe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function At(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,xt=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),F.near=O.near=L.near=$,F.far=O.far=L.far=xt,(I!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,k=F.far),F.layers.mask=K.layers.mask|6,L.layers.mask=F.layers.mask&-5,O.layers.mask=F.layers.mask&-3;let Nt=K.parent,gt=F.cameras;At(F,Nt);for(let zt=0;zt<gt.length;zt++)At(gt[zt],Nt);gt.length===2?et(F,L,O):F.projectionMatrix.copy(L.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Tt(K,F,Nt)};function Tt(K,$,xt){xt===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let oe=null;function Kt(K,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Nt=!1;xt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let kt=0;kt<xt.length;kt++){let Zt=xt[kt],le=null;if(p!==null)le=p.getViewport(Zt);else{let fe=d.getViewSubImage(u,Zt);le=fe.viewport,kt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(b))}let Wt=q[kt];Wt===void 0&&(Wt=new Be,Wt.layers.enable(kt),Wt.viewport=new pe,q[kt]=Wt),Wt.matrix.fromArray(Zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),kt===0&&(F.matrix.copy(Wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(Wt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let kt=d.getDepthInformation(xt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let kt=0;kt<xt.length;kt++){let Zt=xt[kt].camera;if(Zt){let le=f[Zt];le||(le=new qs,f[Zt]=le);let Wt=d.getCameraImage(Zt);le.sourceTexture=Wt}}}}for(let xt=0;xt<M.length;xt++){let Nt=S[xt],gt=M[xt];Nt!==null&&gt!==void 0&&gt.update(Nt,$,c||a)}oe&&oe(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Yt=new hh;Yt.setAnimationLoop(Kt),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}},h0=new ae,vh=new Dt;vh.set(-1,0,0,0,1,0,0,0,1);function d0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,C,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=t.get(f),C=T.envMap,b=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",T));let E=M.program;n.updateUBOMapping(b,E);let x=t.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let M=d();b.__bindingPointIndex=M;let S=i.createBuffer(),E=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],S=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,w=S.length;x<w;x++){let L=S[x];if(Array.isArray(L))for(let O=0,q=L.length;O<q;O++)p(L[O],x,O,E);else p(L,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,S,E){if(y(b,M,S,E)===!0){let x=b.__offset,w=b.value;if(Array.isArray(w)){let L=0;for(let O=0;O<w.length;O++){let q=w[O],F=f(q);g(q,b.__data,L),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,M,S){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,S)}function y(b,M,S,E){let x=b.value,w=M+"_"+S;if(E[w]===void 0)return typeof x=="number"||typeof x=="boolean"?E[w]=x:ArrayBuffer.isView(x)?E[w]=x.slice():E[w]=x.clone(),!0;{let L=E[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return E[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(b){let M=b.uniforms,S=0,E=16;for(let w=0,L=M.length;w<L;w++){let O=Array.isArray(M[w])?M[w]:[M[w]];for(let q=0,F=O.length;q<F;q++){let I=O[q],k=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,j=k.length;Z<j;Z++){let nt=k[Z],W=f(nt),Q=S%E,et=Q%W.boundary,At=Q+et;S+=et,At!==0&&E-At<W.storage&&(S+=E-At),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=W.storage}}}let x=S%E;return x>0&&(S+=E-x),b.__size=S,b.__cache={},this}function f(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",b),M}function T(b){let M=b.target;M.removeEventListener("dispose",T);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function C(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var p0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function m0(){return Rn===null&&(Rn=new ha(p0,16,16,pi,Ne),Rn.name="DFG_LUT",Rn.minFilter=Ie,Rn.magFilter=Ie,Rn.wrapS=Tn,Rn.wrapT=Tn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var Ro=class{constructor(t={}){let{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Ye}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,m=new Set([Wa,Va,Ha]),f=new Set([Ye,_n,as,os,Ga,ka]),T=new Uint32Array(4),C=new Int32Array(4),b=new R,M=null,S=null,E=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,O=!1,q=null,F=null,I=null,k=null;this._outputColorSpace=tn;let Z=0,j=0,nt=null,W=-1,Q=null,et=new pe,At=new pe,Tt=null,oe=new Rt(0),Kt=0,Yt=e.width,K=e.height,$=1,xt=null,Nt=null,gt=new pe(0,0,Yt,K),zt=new pe(0,0,Yt,K),we=!1,kt=new Qi,Zt=!1,le=!1,Wt=new ae,fe=new R,Ce=new pe,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function _e(){return nt===null?$:1}let N=n;function qe(_,P){return e.getContext(_,P)}let ee,A,v,U,G,V,it,st,X,J,rt,St,ct,at,wt,Lt,Ot,D,ot,Y,lt,ft,tt;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",dn,!1),N===null){let P="webgl2";if(N=qe(P,_),N===null)throw qe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(_){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",dn,!1),Pt("WebGLRenderer: "+_.message),_}function Et(){ee=new Mm(N),ee.init(),lt=new l0(N,ee),A=new dm(N,ee,t,lt),v=new a0(N,ee),A.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),F=N.createFramebuffer(),I=N.createFramebuffer(),k=N.createFramebuffer(),U=new Tm(N),G=new Kg,V=new o0(N,ee,v,G,A,lt,U),it=new bm(L),st=new Ed(N),ft=new um(N,st),X=new Sm(N,st,U,ft),J=new Am(N,X,st,ft,U),D=new Em(N,A,V),wt=new fm(G),rt=new Wg(L,it,ee,A,ft,wt),St=new d0(L,G),ct=new Zg,at=new t0(ee),Ot=new cm(L,it,v,J,g,l),Lt=new r0(L,J,A),tt=new f0(N,U,A,v),ot=new hm(N,ee,U),Y=new wm(N,ee,U),U.programs=rt.programs,L.capabilities=A,L.extensions=ee,L.properties=G,L.renderLists=ct,L.shadowMap=Lt,L.state=v,L.info=U}y!==Ye&&(w=new Lm(y,e.width,e.height,o,s,r));let bt=new cc(L,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let _=ee.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ee.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(_){_!==void 0&&($=_,this.setSize(Yt,K,!1))},this.getSize=function(_){return _.set(Yt,K)},this.setSize=function(_,P,H=!0){if(bt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=_,K=P,e.width=Math.floor(_*$),e.height=Math.floor(P*$),H===!0&&(e.style.width=_+"px",e.style.height=P+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(Yt*$,K*$).floor()},this.setDrawingBufferSize=function(_,P,H){Yt=_,K=P,$=H,e.width=Math.floor(_*H),e.height=Math.floor(P*H),this.setViewport(0,0,_,P)},this.setEffects=function(_){if(y===Ye){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let P=0;P<_.length;P++)if(_[P].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(et)},this.getViewport=function(_){return _.copy(gt)},this.setViewport=function(_,P,H,z){_.isVector4?gt.set(_.x,_.y,_.z,_.w):gt.set(_,P,H,z),v.viewport(et.copy(gt).multiplyScalar($).round())},this.getScissor=function(_){return _.copy(zt)},this.setScissor=function(_,P,H,z){_.isVector4?zt.set(_.x,_.y,_.z,_.w):zt.set(_,P,H,z),v.scissor(At.copy(zt).multiplyScalar($).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(_){v.setScissorTest(we=_)},this.setOpaqueSort=function(_){xt=_},this.setTransparentSort=function(_){Nt=_},this.getClearColor=function(_){return _.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,H=!0){let z=0;if(_){let B=!1;if(nt!==null){let dt=nt.texture.format;B=m.has(dt)}if(B){let dt=nt.texture.type,vt=f.has(dt),ht=Ot.getClearColor(),_t=Ot.getClearAlpha(),Mt=ht.r,qt=ht.g,Ht=ht.b;vt?(T[0]=Mt,T[1]=qt,T[2]=Ht,T[3]=_t,N.clearBufferuiv(N.COLOR,0,T)):(C[0]=Mt,C[1]=qt,C[2]=Ht,C[3]=_t,N.clearBufferiv(N.COLOR,0,C))}else z|=N.COLOR_BUFFER_BIT}P&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),q=_},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",dn,!1),Ot.dispose(),ct.dispose(),at.dispose(),G.dispose(),it.dispose(),J.dispose(),ft.dispose(),tt.dispose(),rt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gc),bt.removeEventListener("sessionend",vc),gi.stop()};function ce(_){_.preventDefault(),Hl("WebGLRenderer: Context Lost."),O=!0}function $t(){Hl("WebGLRenderer: Context Restored."),O=!1;let _=U.autoReset,P=Lt.enabled,H=Lt.autoUpdate,z=Lt.needsUpdate,B=Lt.type;Et(),U.autoReset=_,Lt.enabled=P,Lt.autoUpdate=H,Lt.needsUpdate=z,Lt.type=B}function dn(_){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Mn(_){let P=_.target;P.removeEventListener("dispose",Mn),Ch(P)}function Ch(_){Lh(_),G.remove(_)}function Lh(_){let P=G.get(_).programs;P!==void 0&&(P.forEach(function(H){rt.releaseProgram(H)}),_.isShaderMaterial&&rt.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,H,z,B,dt){P===null&&(P=Xe);let vt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ht=Ih(_,P,H,z,B);v.setMaterial(z,vt);let _t=H.index,Mt=1;if(z.wireframe===!0){if(_t=X.getWireframeAttribute(H),_t===void 0)return;Mt=2}let qt=H.drawRange,Ht=H.attributes.position,yt=qt.start*Mt,Qt=(qt.start+qt.count)*Mt;dt!==null&&(yt=Math.max(yt,dt.start*Mt),Qt=Math.min(Qt,(dt.start+dt.count)*Mt)),_t!==null?(yt=Math.max(yt,0),Qt=Math.min(Qt,_t.count)):Ht!=null&&(yt=Math.max(yt,0),Qt=Math.min(Qt,Ht.count));let ye=Qt-yt;if(ye<0||ye===1/0)return;ft.setup(B,z,ht,H,_t);let he,re=ot;if(_t!==null&&(he=st.get(_t),re=Y,re.setIndex(he)),B.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*_e()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(B.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),v.setLineWidth(Ue*_e()),B.isLineSegments?re.setMode(N.LINES):B.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else B.isPoints?re.setMode(N.POINTS):B.isSprite&&re.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ue=B._multiDrawStarts,mt=B._multiDrawCounts,Ve=B._multiDrawCount,Xt=_t?st.get(_t).bytesPerElement:1,rn=G.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<Ve;Sn++)rn.setValue(N,"_gl_DrawID",Sn),re.render(Ue[Sn]/Xt,mt[Sn])}else if(B.isInstancedMesh)re.renderInstances(yt,ye,B.count);else if(H.isInstancedBufferGeometry){let Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mt=Math.min(H.instanceCount,Ue);re.renderInstances(yt,ye,mt)}else re.render(yt,ye)};function mc(_,P,H,z){q!==null&&_.isNodeMaterial&&q.setObject(z,_),Zt===!0&&wt.setState(_,H,!1),_.transparent===!0&&_.side===ln&&_.forceSinglePass===!1?(_.side=Ke,_.needsUpdate=!0,Tr(_,P,z),_.side=ui,_.needsUpdate=!0,Tr(_,P,z),_.side=ln):Tr(_,P,z)}this.compile=function(_,P,H=null){H===null&&(H=_),q!==null&&q.renderStart(_,P,H),S=at.get(H),S.init(P),x.push(S),H.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),_!==H&&_.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights(),q!==null&&q.updateLights(S.state.lightsArray),le=this.localClippingEnabled,Zt=wt.init(this.clippingPlanes,le),Zt===!0&&wt.setGlobalState(this.clippingPlanes,P),q!==null&&Lt.render(S.state.shadowsArray,H,P);let z=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];mc(ht,H,P,B),z.add(ht)}else mc(dt,H,P,B),z.add(dt)}),S=x.pop(),q!==null&&q.renderEnd(),z},this.compileAsync=function(_,P,H=null){let z=this.compile(_,P,H);return new Promise(B=>{function dt(){if(z.forEach(function(vt){let _t=G.get(vt).currentProgram;(_t===void 0||_t.isReady())&&z.delete(vt)}),z.size===0){B(_);return}setTimeout(dt,10)}ee.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Vo=null;function Rh(_){Vo&&Vo(_)}function gc(){gi.stop()}function vc(){gi.start()}let gi=new hh;gi.setAnimationLoop(Rh),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(_){Vo=_,bt.setAnimationLoop(_),_===null?gi.stop():gi.start()},bt.addEventListener("sessionstart",gc),bt.addEventListener("sessionend",vc),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;q!==null&&q.renderStart(_,P);let H=bt.enabled===!0&&bt.isPresenting===!0,z=w!==null&&(nt===null||H)&&w.begin(L,nt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(P),P=bt.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,P,nt),S=at.get(_,x.length),S.init(P),S.state.textureUnits=V.getTextureUnits(),x.push(S),Wt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),kt.setFromProjectionMatrix(Wt,vn,P.reversedDepth),le=this.localClippingEnabled,Zt=wt.init(this.clippingPlanes,le),M=ct.get(_,E.length),M.init(),E.push(M),bt.enabled===!0&&bt.isPresenting===!0){let vt=L.xr.getDepthSensingMesh();vt!==null&&Wo(vt,P,-1/0,L.sortObjects)}Wo(_,P,0,L.sortObjects),M.finish(),q!==null&&q.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(xt,Nt),me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,me&&Ot.addToRenderList(M,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&wt.beginShadows();let B=S.state.shadowsArray;if(Lt.render(B,_,P),Zt===!0&&wt.endShadows(),(z&&w.hasRenderPass())===!1){let vt=M.opaque,ht=M.transmissive;if(S.setupLights(),P.isArrayCamera){let _t=P.cameras;if(ht.length>0)for(let Mt=0,qt=_t.length;Mt<qt;Mt++){let Ht=_t[Mt];_c(vt,ht,_,Ht)}me&&Ot.render(_);for(let Mt=0,qt=_t.length;Mt<qt;Mt++){let Ht=_t[Mt];xc(M,_,Ht,Ht.viewport)}}else ht.length>0&&_c(vt,ht,_,P),me&&Ot.render(_),xc(M,_,P)}nt!==null&&j===0&&(V.updateMultisampleRenderTarget(nt),V.updateRenderTargetMipmap(nt)),z&&w.end(L),_.isScene===!0&&_.onAfterRender(L,_,P),ft.resetDefaultState(),W=-1,Q=null,x.pop(),x.length>0?(S=x[x.length-1],V.setTextureUnits(S.state.textureUnits),Zt===!0&&wt.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,q!==null&&q.renderEnd()};function Wo(_,P,H,z){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(kt)){z&&Ce.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Wt);let vt=J.update(_),ht=_.material;ht.visible&&M.push(_,vt,ht,H,Ce.z,null,P)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(kt))){let vt=J.update(_),ht=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ce.copy(_.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ce.copy(vt.boundingSphere.center)),Ce.applyMatrix4(_.matrixWorld).applyMatrix4(Wt)),Array.isArray(ht)){let _t=vt.groups;for(let Mt=0,qt=_t.length;Mt<qt;Mt++){let Ht=_t[Mt],yt=ht[Ht.materialIndex];yt&&yt.visible&&M.push(_,vt,yt,H,Ce.z,Ht,P)}}else ht.visible&&M.push(_,vt,ht,H,Ce.z,null,P)}}let dt=_.children;for(let vt=0,ht=dt.length;vt<ht;vt++)Wo(dt[vt],P,H,z)}function xc(_,P,H,z){let{opaque:B,transmissive:dt,transparent:vt}=_;S.setupLightsView(H),Zt===!0&&wt.setGlobalState(L.clippingPlanes,H),z&&v.viewport(et.copy(z)),B.length>0&&wr(B,P,H),dt.length>0&&wr(dt,P,H),vt.length>0&&wr(vt,P,H),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _c(_,P,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let yt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Me(1,1,{generateMipmaps:!0,type:yt?Ne:Ye,minFilter:di,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let dt=S.state.transmissionRenderTarget[z.id],vt=z.viewport||et;dt.setSize(vt.z*L.transmissionResolutionScale,vt.w*L.transmissionResolutionScale);let ht=L.getRenderTarget(),_t=L.getActiveCubeFace(),Mt=L.getActiveMipmapLevel();L.setRenderTarget(dt),L.getClearColor(oe),Kt=L.getClearAlpha(),Kt<1&&L.setClearColor(16777215,.5),L.clear(),me&&Ot.render(H);let qt=L.toneMapping;L.toneMapping=xn;let Ht=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),Zt===!0&&wt.setGlobalState(L.clippingPlanes,z),wr(_,H,z),V.updateMultisampleRenderTarget(dt),V.updateRenderTargetMipmap(dt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Qt=0,ye=P.length;Qt<ye;Qt++){let he=P[Qt],{object:re,geometry:Ue,material:mt,group:Ve}=he;if(mt.side===ln&&re.layers.test(z.layers)){let Xt=mt.side;mt.side=Ke,mt.needsUpdate=!0,yc(re,H,z,Ue,mt,Ve),mt.side=Xt,mt.needsUpdate=!0,yt=!0}}yt===!0&&(V.updateMultisampleRenderTarget(dt),V.updateRenderTargetMipmap(dt))}L.setRenderTarget(ht,_t,Mt),L.setClearColor(oe,Kt),Ht!==void 0&&(z.viewport=Ht),L.toneMapping=qt}function wr(_,P,H){let z=P.isScene===!0?P.overrideMaterial:null;for(let B=0,dt=_.length;B<dt;B++){let vt=_[B],{object:ht,geometry:_t,group:Mt}=vt,qt=vt.material;qt.allowOverride===!0&&z!==null&&(qt=z),ht.layers.test(H.layers)&&yc(ht,P,H,_t,qt,Mt)}}function yc(_,P,H,z,B,dt){q!==null&&B.isNodeMaterial&&q.setObject(_,B),_.onBeforeRender(L,P,H,z,B,dt),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(L,P,H,z,_,dt),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=Ke,B.needsUpdate=!0,L.renderBufferDirect(H,P,z,B,_,dt),B.side=ui,B.needsUpdate=!0,L.renderBufferDirect(H,P,z,B,_,dt),B.side=ln):L.renderBufferDirect(H,P,z,B,_,dt),_.onAfterRender(L,P,H,z,B,dt)}function Tr(_,P,H){P.isScene!==!0&&(P=Xe);let z=G.get(_),B=S.state.lights,dt=S.state.shadowsArray,vt=B.state.version,ht=rt.getParameters(_,B.state,dt,P,H,S.state.lightProbeGridArray),_t=rt.getProgramCacheKey(ht),Mt=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let qt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=it.get(_.envMap||z.environment,qt),z.envMapRotation=z.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Mt===void 0&&(_.addEventListener("dispose",Mn),Mt=new Map,z.programs=Mt);let Ht=Mt.get(_t);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===vt)return Mc(_,ht),Ht}else ht.uniforms=rt.getUniforms(_),q!==null&&_.isNodeMaterial&&q.build(_,H,ht),_.onBeforeCompile(ht,L),Ht=rt.acquireProgram(ht,_t),Mt.set(_t,Ht),z.uniforms=ht.uniforms;let yt=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(yt.clippingPlanes=wt.uniform),Mc(_,ht),z.needsLights=Nh(_),z.lightsStateVersion=vt,z.needsLights&&(yt.ambientLightColor.value=B.state.ambient,yt.lightProbe.value=B.state.probe,yt.sunLights.value=B.state.sun,yt.sunLightShadows.value=B.state.sunShadow,yt.directionalLights.value=B.state.directional,yt.directionalLightShadows.value=B.state.directionalShadow,yt.spotLights.value=B.state.spot,yt.spotLightShadows.value=B.state.spotShadow,yt.rectAreaLights.value=B.state.rectArea,yt.ltc_1.value=B.state.rectAreaLTC1,yt.ltc_2.value=B.state.rectAreaLTC2,yt.pointLights.value=B.state.point,yt.pointLightShadows.value=B.state.pointShadow,yt.hemisphereLights.value=B.state.hemi,yt.sunShadowMatrix.value=B.state.sunShadowMatrix,yt.sunShadowCascade.value=B.state.sunShadowCascade,yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,yt.spotLightMatrix.value=B.state.spotLightMatrix,yt.spotLightMap.value=B.state.spotLightMap,yt.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Ht,z.uniformsList=null,Ht}function bc(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=us.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Mc(_,P){let H=G.get(_);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Ph(_,P){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;b.setFromMatrixPosition(P.matrixWorld);for(let H=0,z=_.length;H<z;H++){let B=_[H];if(B.texture!==null&&B.boundingBox.containsPoint(b))return B}return null}function Ih(_,P,H,z,B){P.isScene!==!0&&(P=Xe),V.resetTextureUnits();let dt=P.fog,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,ht=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Bt.workingColorSpace,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Mt=it.get(z.envMap||vt,_t),qt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,ye=!!H.morphAttributes.color,he=xn;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=L.toneMapping);let re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ue=re!==void 0?re.length:0,mt=G.get(z),Ve=S.state.lights;if(Zt===!0&&(le===!0||_!==Q)){let ue=_===Q&&z.id===W;wt.setState(z,_,ue)}let Xt=!1;z.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Ve.state.version||mt.outputColorSpace!==ht||B.isBatchedMesh&&mt.batching===!1||!B.isBatchedMesh&&mt.batching===!0||B.isBatchedMesh&&mt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&mt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&mt.instancing===!1||!B.isInstancedMesh&&mt.instancing===!0||B.isSkinnedMesh&&mt.skinning===!1||!B.isSkinnedMesh&&mt.skinning===!0||B.isInstancedMesh&&mt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&mt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&mt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&mt.instancingMorph===!1&&B.morphTexture!==null||mt.envMap!==Mt||z.fog===!0&&mt.fog!==dt||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==wt.numPlanes||mt.numIntersection!==wt.numIntersection)||mt.vertexAlphas!==qt||mt.vertexTangents!==Ht||mt.morphTargets!==yt||mt.morphNormals!==Qt||mt.morphColors!==ye||mt.toneMapping!==he||mt.morphTargetsCount!==Ue||!!mt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Xt=!0):(Xt=!0,mt.__version=z.version);let rn=mt.currentProgram;Xt===!0&&(rn=Tr(z,P,B),q&&z.isNodeMaterial&&q.onUpdateProgram(z,rn,mt));let Sn=!1,Kn=!1,Pi=!1,ie=rn.getUniforms(),ve=mt.uniforms;if(v.useProgram(rn.program)&&(Sn=!0,Kn=!0,Pi=!0),z.id!==W&&(W=z.id,Kn=!0),mt.needsLights){let ue=Ph(S.state.lightProbeGridArray,B);mt.lightProbeGrid!==ue&&(mt.lightProbeGrid=ue,Kn=!0)}if(Sn||Q!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ie.setValue(N,"projectionMatrix",_.projectionMatrix),ie.setValue(N,"viewMatrix",_.matrixWorldInverse);let Zn=ie.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,fe.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ie.setValue(N,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,Kn=!0,Pi=!0)}if(mt.needsLights&&(Ve.state.sunShadowMap.length>0&&ie.setValue(N,"sunShadowMap",Ve.state.sunShadowMap,V),Ve.state.directionalShadowMap.length>0&&ie.setValue(N,"directionalShadowMap",Ve.state.directionalShadowMap,V),Ve.state.spotShadowMap.length>0&&ie.setValue(N,"spotShadowMap",Ve.state.spotShadowMap,V),Ve.state.pointShadowMap.length>0&&ie.setValue(N,"pointShadowMap",Ve.state.pointShadowMap,V)),B.isSkinnedMesh){ie.setOptional(N,B,"bindMatrix"),ie.setOptional(N,B,"bindMatrixInverse");let ue=B.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),ie.setValue(N,"boneTexture",ue.boneTexture,V))}B.isBatchedMesh&&(ie.setOptional(N,B,"batchingTexture"),ie.setValue(N,"batchingTexture",B._matricesTexture,V),ie.setOptional(N,B,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",B._indirectTexture,V),ie.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",B._colorsTexture,V));let Xn=H.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&D.update(B,H,rn),(Kn||mt.receiveShadow!==B.receiveShadow)&&(mt.receiveShadow=B.receiveShadow,ie.setValue(N,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(ve.envMapIntensity.value=P.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=m0()),Kn){if(ie.setValue(N,"toneMappingExposure",L.toneMappingExposure),mt.needsLights&&Dh(ve,Pi),dt&&z.fog===!0&&St.refreshFogUniforms(ve,dt),St.refreshMaterialUniforms(ve,z,$,K,S.state.transmissionRenderTarget[_.id]),mt.needsLights&&mt.lightProbeGrid){let ue=mt.lightProbeGrid;ve.probesSH.value=ue.texture,ve.probesMin.value.copy(ue.boundingBox.min),ve.probesMax.value.copy(ue.boundingBox.max),ve.probesResolution.value.copy(ue.resolution)}us.upload(N,bc(mt),ve,V)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(us.upload(N,bc(mt),ve,V),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ie.setValue(N,"center",B.center),ie.setValue(N,"modelViewMatrix",B.modelViewMatrix),ie.setValue(N,"normalMatrix",B.normalMatrix),ie.setValue(N,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){let ue=z.uniformsGroups;for(let Zn=0,Ii=ue.length;Zn<Ii;Zn++){let wc=ue[Zn];tt.update(wc,rn),tt.bind(wc,rn)}}return rn}function Dh(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.sunLights.needsUpdate=P,_.sunLightShadows.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function Nh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(_,P,H){let z=G.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(_.texture).__webglTexture=P,G.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){let H=G.get(_);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(_,P=0,H=0){nt=_,Z=P,j=H;let z=null,B=!1,dt=!1;if(_){let ht=G.get(_);if(ht.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(_.viewport),At.copy(_.scissor),Tt=_.scissorTest,v.viewport(et),v.scissor(At),v.setScissorTest(Tt),W=-1;return}else if(ht.__webglFramebuffer===void 0)V.setupRenderTarget(_);else if(ht.__hasExternalTextures)V.rebindTextures(_,G.get(_.texture).__webglTexture,G.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let qt=_.depthTexture;if(ht.__boundDepthTexture!==qt){if(qt!==null&&G.has(qt)&&(_.width!==qt.image.width||_.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(_)}}let _t=_.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);let Mt=G.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Mt[P])?z=Mt[P][H]:z=Mt[P],B=!0):_.samples>0&&V.useMultisampledRTT(_)===!1?z=G.get(_).__webglMultisampledFramebuffer:Array.isArray(Mt)?z=Mt[H]:z=Mt,et.copy(_.viewport),At.copy(_.scissor),Tt=_.scissorTest}else et.copy(gt).multiplyScalar($).floor(),At.copy(zt).multiplyScalar($).floor(),Tt=we;if(H!==0&&(z=F),v.bindFramebuffer(N.FRAMEBUFFER,z)&&v.drawBuffers(_,z),v.viewport(et),v.scissor(At),v.setScissorTest(Tt),B){let ht=G.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ht.__webglTexture,H)}else if(dt){let ht=P;for(let _t=0;_t<_.textures.length;_t++){let Mt=G.get(_.textures[_t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_t,Mt.__webglTexture,H,ht)}}else if(_!==null&&H!==0){let ht=G.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ht.__webglTexture,H)}W=-1};function Sc(_){let P=G.get(_);return(P.__readFormat!==_.format||P.__readType!==_.type)&&(P.__readFormat=_.format,P.__readType=_.type,P.__formatReadable=A.textureFormatReadable(_.format),P.__typeReadable=A.textureTypeReadable(_.type)),P}this.readRenderTargetPixels=function(_,P,H,z,B,dt,vt,ht=0){if(!(_&&_.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt]),_t){v.bindFramebuffer(N.FRAMEBUFFER,_t);try{let Mt=_.textures[ht],qt=Mt.format,Ht=Mt.type;_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht);let yt=Sc(Mt);if(yt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-z&&H>=0&&H<=_.height-B&&N.readPixels(P,H,z,B,lt.convert(qt),lt.convert(Ht),dt)}finally{let Mt=nt!==null?G.get(nt).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(_,P,H,z,B,dt,vt,ht=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt]),_t)if(P>=0&&P<=_.width-z&&H>=0&&H<=_.height-B){v.bindFramebuffer(N.FRAMEBUFFER,_t);let Mt=_.textures[ht],qt=Mt.format,Ht=Mt.type;_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht);let yt=Sc(Mt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(P,H,z,B,lt.convert(qt),lt.convert(Ht),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ye=nt!==null?G.get(nt).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,ye);let he=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zu(N,he,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qt),N.deleteSync(he),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,H=0){let z=Math.pow(2,-H),B=Math.floor(_.image.width*z),dt=Math.floor(_.image.height*z),vt=P!==null?P.x:0,ht=P!==null?P.y:0;V.setTexture2D(_,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,vt,ht,B,dt),v.unbindTexture()},this.copyTextureToTexture=function(_,P,H=null,z=null,B=0,dt=0){let vt,ht,_t,Mt,qt,Ht,yt,Qt,ye,he=_.isCompressedTexture?_.mipmaps[dt]:_.image;if(H!==null)vt=H.max.x-H.min.x,ht=H.max.y-H.min.y,_t=H.isBox3?H.max.z-H.min.z:1,Mt=H.min.x,qt=H.min.y,Ht=H.isBox3?H.min.z:0;else{let ve=Math.pow(2,-B);vt=Math.floor(he.width*ve),ht=Math.floor(he.height*ve),_.isDataArrayTexture?_t=he.depth:_.isData3DTexture?_t=Math.floor(he.depth*ve):_t=1,Mt=0,qt=0,Ht=0}z!==null?(yt=z.x,Qt=z.y,ye=z.z):(yt=0,Qt=0,ye=0);let re=lt.convert(P.format),Ue=lt.convert(P.type),mt;P.isData3DTexture?(V.setTexture3D(P,0),mt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(V.setTexture2DArray(P,0),mt=N.TEXTURE_2D_ARRAY):(V.setTexture2D(P,0),mt=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Ve=v.getParameter(N.UNPACK_ROW_LENGTH),Xt=v.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=v.getParameter(N.UNPACK_SKIP_PIXELS),Sn=v.getParameter(N.UNPACK_SKIP_ROWS),Kn=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),v.pixelStorei(N.UNPACK_SKIP_ROWS,qt),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht);let Pi=_.isDataArrayTexture||_.isData3DTexture,ie=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let ve=G.get(_),Xn=G.get(P),ue=G.get(ve.__renderTarget),Zn=G.get(Xn.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,ue.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Ii=0;Ii<_t;Ii++)Pi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(_).__webglTexture,B,Ht+Ii),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(P).__webglTexture,dt,ye+Ii)),N.blitFramebuffer(Mt,qt,vt,ht,yt,Qt,vt,ht,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||_.isRenderTargetTexture||G.has(_)){let ve=G.get(_),Xn=G.get(P);v.bindFramebuffer(N.READ_FRAMEBUFFER,I),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let ue=0;ue<_t;ue++)Pi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,B,Ht+ue):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,B),ie?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xn.__webglTexture,dt,ye+ue):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xn.__webglTexture,dt),B!==0?N.blitFramebuffer(Mt,qt,vt,ht,yt,Qt,vt,ht,N.COLOR_BUFFER_BIT,N.NEAREST):ie?N.copyTexSubImage3D(mt,dt,yt,Qt,ye+ue,Mt,qt,vt,ht):N.copyTexSubImage2D(mt,dt,yt,Qt,Mt,qt,vt,ht);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?_.isDataTexture||_.isData3DTexture?N.texSubImage3D(mt,dt,yt,Qt,ye,vt,ht,_t,re,Ue,he.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(mt,dt,yt,Qt,ye,vt,ht,_t,re,he.data):N.texSubImage3D(mt,dt,yt,Qt,ye,vt,ht,_t,re,Ue,he):_.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,yt,Qt,vt,ht,re,Ue,he.data):_.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,yt,Qt,he.width,he.height,re,he.data):N.texSubImage2D(N.TEXTURE_2D,dt,yt,Qt,vt,ht,re,Ue,he);v.pixelStorei(N.UNPACK_ROW_LENGTH,Ve),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt),v.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Sn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Kn),dt===0&&P.generateMipmaps&&N.generateMipmap(mt),v.unbindTexture()},this.initRenderTarget=function(_){G.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?V.setTextureCube(_,0):_.isData3DTexture?V.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?V.setTexture2DArray(_,0):V.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){Z=0,j=0,nt=null,v.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v0=new ci(-1,1,1,-1,0,1),uc=class extends te{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}},x0=new uc,mi=class{constructor(t){this._mesh=new ne(x0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,v0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Do=class extends nn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vr=class extends nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},No=class extends nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Oo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ne}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Do(ds),this.copyPass.material.blending=cn,this.timer=new Zs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vr!==void 0&&(a instanceof vr?n=!0:a instanceof No&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qo=class extends nn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var xh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fs=class i extends nn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(r,a,{type:Ne,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Me(r,a,{type:Ne,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Me(r,a,{type:Ne,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=xh;this.highPassUniforms=Wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wn.clone(ds.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,premultipliedAlpha:!0,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new Bn,this._fsQuad=new mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};fs.BlurDirectionX=new pt(1,0);fs.BlurDirectionY=new pt(0,1);var xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Uo=class extends nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wn.clone(xr.uniforms),this.material=new is({name:xr.name,uniforms:this.uniforms,vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this._fsQuad=new mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===er?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ei?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ge={zeros:[14.134725142,21.022039639,25.01085758,30.424876126,32.935061588,37.586178159,40.918719012,43.327073281,48.005150881,49.773832478,52.970321478,56.446247697,59.347044003,60.831778525,65.112544048,67.079810529,69.546401711,72.067157674,75.704690699,77.144840069,79.33737502,82.910380854,84.735492981,87.425274613,88.809111208,92.491899271,94.651344041,95.870634228,98.831194218,101.317851006,103.72553804,105.446623052,107.168611184,111.029535543,111.874659177,114.320220915,116.226680321,118.790782866,121.370125002,122.946829294,124.256818554,127.51668388,129.5787042,131.087688531,133.497737203,134.756509753,138.116042055,139.736208952,141.123707404,143.111845808,146.000982487,147.422765343,150.053520421,150.925257612,153.024693811,156.112909294,157.597591818,158.849988171,161.188964138,163.030709687,165.537069188,167.184439978,169.094515416,169.911976479,173.41153652,174.754191523,176.441434298,178.377407776,179.91648402,182.207078484,184.874467848,185.598783678,187.228922584,189.416158656,192.026656361,193.079726604,195.26539668,196.876481841,198.015309676,201.264751944,202.493594514,204.189671803,205.394697202,207.906258888,209.576509717,211.690862595,213.34791936,214.547044783,216.169538508,219.067596349,220.714918839,221.430705555,224.007000255,224.98332467,227.42144428,229.337413306,231.2501887,231.987235253,233.693404179,236.524229666,237.769820481,239.555477573,241.049157796,242.823271934,244.070898497,247.136990075,248.10199006,249.573689645,251.014947795,253.069986748,255.306256455,256.380713694,258.610439492,259.87440699,260.805084505,263.573893905,265.557851839,266.614973782,267.921915083,269.970449024,271.494055642,273.459609188,275.587492649,276.452049503,278.25074353,279.229250928,282.465114765,283.211185733,284.835963981,286.667445363,287.911920501,289.579854929,291.846291329,293.558434139,294.965369619,295.573254879,297.979277062,299.840326054,301.649325462,302.69674959,304.864371341,305.728912602,307.219496128,310.109463147,311.16514153,312.427801181,313.985285731,315.475616089,317.734805942,318.853104256,321.160134309,322.144558672,323.466969558,324.862866052,327.443901262,329.03307168,329.953239728,331.474467583,333.645378525,334.211354833,336.841850428,338.339992851,339.858216725,341.042261111,342.05487751,344.66170294,346.347870566,347.272677584,349.316260871,350.408419349,351.878649025,353.488900489,356.017574977,357.151302252,357.952685102,359.743754953,361.289361696,363.331330579,364.736024114,366.212710288,367.993575482,368.968438096,370.050919212,373.061928372,373.864873911,375.825912767,376.324092231,378.43668025,379.872975347,381.484468617,383.44352945,384.956116815,385.861300846,387.222890222,388.846128354,391.456083564,392.24508334,393.427743844,395.582870011,396.381854223],ns:49,nt:641,s:[-1,2],t:[0,80],lo:-2.6,hi:1.2,grid:"ZmptcHR3en6BhIeKjZCUl5qeoaWorLC1ur/Ey9Lc6f7//+3i29XRzcrIxsTCwb++vWZqbXF0d3p+gYSHio2QlJeanaGkqKywtLm+w8nP19/n6+nj3djT0MzKx8XDwsC/vr1nam5xdHd7foGEh4qNkJOXmp2gpKerr7K2u7/Eyc3S1dfX1tTRzszJx8XEwsG/vr28aGtucnV4e36BhIeKjZCTlpmcn6Omqa2wtLe7vsLFyMrLzMzLysnHxsTDwsC/vr28u2lsb3J1eHt+gYSHio2Qk5WYm56hpKeqrbCztrm8vsDCw8TExMTDw8LBwL++vby8u7prbnBzdnl8f4KEh4qNj5KVl5qdoKKlqKutsLK1t7m7vL2+v7+/v7++vr28vLu7urm5bG9ydHd6fX+ChIeKjI+RlJeZnJ6ho6aoqq2vsbO0tre4ubq6u7u7u7q6urm5ubi4t25wc3Z4e32AgoWHioyPkZOWmJudn6GkpqiqrK2vsbKztLW2t7e3uLi4uLe3t7e3trZwcnR3eXx+gIOFh4qMjpGTlZeZnJ6goqSmp6mrrK6vsLGys7O0tLW1tbW1tbW1tbW1cXR2eHp9f4GDhYiKjI6QkpSWmJqcnqCipKWnqKqrrK2ur7CxsbKys7Ozs7Ozs7Ozs3N1d3l7foCChIaIioyOkJKUlpiZm52foKKjpaaoqaqrrK2urq+wsLCxsbGxsrKysrJ1d3l7fX+Bg4SGiIqMjpCSk5WXmZqcnp+hoqOlpqeoqaqrrKytrq6vr6+wsLCwsLCxdnh6fH6AgoOFh4mLjI6QkpOVlpiam52en6Gio6Slpqeoqaqrq6ysra2urq6vr6+vr3h6fH1/gYKEhoiJi42OkJGTlZaYmZqcnZ6goaKjpKWmp6ioqaqqq6ysrK2tra6urq56e31/gIKDhYeIiouNjpCRk5SWl5mam5yen6ChoqOkpaamp6ipqaqqq6usrKytra2te31+gIGDhIaHiYqMjY+QkpOUlpeYmZucnZ6foKGio6SlpaanqKipqaqqq6urrKysrX1+gIGDhIaHiIqLjI6PkJKTlJaXmJmam5yen6CgoaKjpKWlpqenqKipqaqqqqurq6x/gIGDhIWHiImLjI2OkJGSk5SWl5iZmpucnZ6foKGioqOkpaWmpqeoqKipqaqqqqurgIGDhIWGiImKi42Oj5CRkpSVlpeYmZqbnJ2en5+goaKjo6Slpaamp6eoqKmpqaqqqoKDhIWGiImKi4yNjpCRkpOUlZaXmJmam5ydnp6foKGhoqOjpKWlpqanp6ioqKmpqqqDhIWHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ2en6CgoaKio6SkpaWmpqenqKioqamphYaHiImKi4yNjo+QkZKTlJWWl5iYmZqbnJ2dnp+goKGioqOjpKSlpaamp6eoqKipqYaHiImKi4yNjo+QkZKTlJWVlpeYmZqam5ydnZ6foKChoaKjo6SkpaWmpqenp6ioqKmIiYqLi4yNjo+QkZKTk5SVlpeYmJmam5ucnZ6en6CgoaGioqOkpKWlpaamp6enqKioiYqLjI2Ojo+QkZKTk5SVlpeXmJmampucnJ2enp+goKGhoqKjo6SkpaWmpqanp6ioqIuMjI2Oj5CQkZKTlJSVlpeXmJmZmpubnJ2dnp+foKChoaKio6OkpKWlpqamp6enqKiMjY6Pj5CRkpKTlJSVlpeXmJmZmpubnJ2dnp6fn6ChoaKio6OjpKSlpaampqenp6iojo+PkJGRkpOTlJWVlpeXmJmZmpubnJydnp6fn6CgoaGioqOjpKSkpaWmpqanp6eoqI+QkZGSk5OUlZWWlpeYmJmZmpubnJydnZ6fn6CgoaGioqKjo6SkpaWlpqamp6enqKiRkZKTk5SUlZaWl5eYmZmampubnJydnp6fn6CgoKGhoqKjo6SkpKWlpaampqenp6iokpOTlJWVlpaXl5iYmZmam5ucnJ2dnp6fn6CgoKGhoqKjo6OkpKWlpaampqenp6eoqJSUlZWWlpeXmJiZmZqam5ucnJ2dnp6fn6CgoaGhoqKjo6OkpKSlpaWmpqanp6enqKiVlpaXl5iYmZmampqbm5ycnZ2enp+fn6CgoaGhoqKjo6OkpKSlpaWmpqanp6enqKiol5eYmJiZmZqam5ubnJydnZ6enp+foKCgoaGioqKjo6OkpKSlpaWmpqanp6enqKioqJiZmZmampubm5ycnZ2dnp6fn5+goKChoaGioqOjo6SkpKWlpaWmpqanp6enqKioqKiampqbm5ucnJydnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqanp6enqKioqKipm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OjpKSkpaWlpaampqanp6enqKioqKipqZydnZ2enp6en5+foKCgoaGhoaKioqOjo6SkpKSlpaWlpqampqenp6eoqKioqKmpqamenp6fn5+foKCgoKGhoaKioqKjo6OjpKSkpKWlpaWmpqamp6enp6ioqKioqKmpqampn5+goKCgoaGhoaKioqKjo6OjpKSkpKSlpaWlpqampqenp6enqKioqKioqampqamqqqGhoaGhoqKioqKjo6OjpKSkpKSlpaWlpaampqamp6enp6eoqKioqKmpqampqaqqqqqioqKio6Ojo6OkpKSkpKSlpaWlpaampqamp6enp6enqKioqKioqampqampqqqqqqqqo6OkpKSkpKSkpaWlpaWlpqampqamp6enp6enqKioqKioqampqampqaqqqqqqqqqqq6WlpaWlpaWlpqampqampqenp6enp6eoqKioqKioqampqampqamqqqqqqqqqqqurq6umpqampqamp6enp6enp6enqKioqKioqKipqampqampqaqqqqqqqqqqqqurq6urq6urp6enp6eoqKioqKioqKioqKmpqampqampqamqqqqqqqqqqqqqq6urq6urq6urq6usrKmpqampqampqampqampqampqqqqqqqqqqqqqqqqqqurq6urq6urq6urq6ysrKysrKyqqqqqqqqqqqqqqqqqqqqqqqqqqqurq6urq6urq6urq6urq6ysrKysrKysrKysrKysq6urq6urq6urq6urq6urq6urq6urq6urrKysrKysrKysrKysrKysrKysrKysra2traysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK2tra2tra2tra2tra2tra2ura2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tr6+vr66urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urrCwsLCwr6+vr6+vr6+vr6+vr6+vr66urq6urq6urq6urq6urq6urq6urq6urq6urq6xsbGxsbGwsLCwsLCwsLCwsK+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vrq6usrKysrKysbGxsbGxsbGxsLCwsLCwsLCwsLCwsLCvr6+vr6+vr6+vr6+vr6+vr6+vr7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbCwsLCwsLCwsLCwsLCwsLCvr6+vr6+vr6+1tLS0tLSzs7Ozs7OzsrKysrKysrKxsbGxsbGxsbGxsbCwsLCwsLCwsLCwsLCwsLCwtrW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbGwsLCwsLCwsLCwsLe2tra2trW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysrGxsbGxsbGxsbGxsLCwsLC4uLe3t7e2tra2tbW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysbGxsbGxsbGxsbGxubm4uLi4t7e3t7a2tra1tbW1tbW0tLS0tLSzs7Ozs7OzsrKysrKysrKxsbGxsbGxsbq6ubm5uLi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7Ozs7KysrKysrKysrGxsbG7u7q6urm5ubm4uLi3t7e3t7a2tra1tbW1tbS0tLS0tLOzs7Ozs7OysrKysrKysrKxvLu7u7u6urq5ubm4uLi4t7e3t7a2tra2tbW1tbW0tLS0tLSzs7Ozs7OzsrKysrKysr28vLy7u7u6urq6ubm5uLi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7OzsrKysrK+vb29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7OzsrKyv76+vb29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLS0s7Ozs7Ozsr+/v76+vr29vLy8u7u7urq6ubm5ubi4uLe3t7e2tra2trW1tbW1tLS0tLSzs7Ozs7PAwL+/v76+vb29vLy8u7u7urq6ubm5uLi4uLe3t7e2tra2tbW1tbW0tLS0tLSzs7OzwcHAwL+/v76+vb29vLy8u7u7urq6ubm5uLi4uLe3t7a2tra2tbW1tbW0tLS0tLOzs8LBwcHAwL+/vr6+vb28vLy7u7u6urq5ubm4uLi4t7e3t7a2tra1tbW1tbS0tLS0s7PDwsLBwcDAv7+/vr69vb28vLy7u7q6urm5ubm4uLi3t7e3tra2trW1tbW1tLS0tLSzw8PCwsHBwcDAv7++vr69vby8vLu7u7q6urm5ubi4uLe3t7e2tra2tbW1tbW0tLS0tMTEw8PCwsHBwMC/v76+vr29vLy8u7u7urq6ubm5uLi4t7e3t7a2tra1tbW1tLS0tLTFxMTDw8LCwcHAwL+/vr6+vb28vLy7u7q6urm5ubi4uLi3t7e2tra2tbW1tbW0tLS0xcXExMPDwsLBwcDAv7++vr69vby8vLu7urq6ubm5uLi4t7e3t7a2tra1tbW1tLS0tMbGxcTEw8PCwsHBwMC/v76+vb29vLy7u7u6urq5ubm4uLi3t7e2tra2tbW1tbS0tLTHxsbFxMTDw8LCwcHAwL+/vr69vby8vLu7urq6ubm5uLi4t7e3t7a2trW1tbW1tLS0x8fGxcXExMPDwsLBwMC/v7++vr29vLy7u7u6urm5ubi4uLe3t7e2tra1tbW1tbS0tMjHx8bFxcTEw8LCwcHAwL+/vr69vby8vLu7urq6ubm4uLi3t7e3tra2tbW1tbW0tLTIyMfGxsXExMPDwsLBwMC/v76+vb29vLy7u7q6urm5ubi4t7e3t7a2trW1tbW0tLS0ycjHx8bFxcTEw8LCwcHAwL+/vr69vby8u7u6urq5ubm4uLe3t7e2tra1tbW1tLS0tMnIyMfGxsXExMPDwsHBwMC/v76+vb28vLu7urq6ubm4uLi3t7e2tra2tbW1tbS0tLTKycjHx8bFxcTDw8LCwcDAv7++vr29vLy7u7q6urm5uLi4t7e3tra2tbW1tbS0tLSzysnIyMfGxsXExMPCwsHAwL+/vr69vby8u7u6urm5ubi4t7e3tra2trW1tbS0tLSzs8rJycjHxsbFxMTDwsLBwMC/v76+vb28vLu7urq5ubi4uLe3t7a2trW1tbS0tLSzs7PKysnIx8fGxcTEw8LCwcDAv7++vb28vLu7urq5ubm4uLe3t7a2trW1tbS0tLSzs7Ozy8rJyMfHxsXExMPCwsHAwL++vr29vLy7u7q6ubm4uLe3t7a2trW1tbS0tLSzs7Ozs8vKycjIx8bFxMTDwsLBwMC/vr69vLy7u7q6ubm4uLi3t7a2trW1tbS0tLSzs7OzsrLLysnIyMfGxcTEw8LBwcC/v769vby8u7q6ubm4uLi3t7a2trW1tbS0tLOzs7OysrKyy8rJyMjHxsXEw8PCwcDAv76+vby8u7u6urm4uLi3t7a2tbW1tLS0s7Ozs7KysrKyscvKycjHx8bFxMPCwsHAv7++vb28u7u6urm4uLe3t7a2tbW1tLS0s7OzsrKysrKxsbHLysnIx8bGxcTDwsHBwL++vb28u7u6urm4uLe3tra2tbW0tLSzs7OysrKysbGxsbGxy8rJyMfGxcTDw8LBwL++vr28vLu6urm4uLe3tra1tbS0tLOzs7KysrKxsbGxsLCwsMvKycjHxsXEw8LBwMC/vr28vLu6ubm4uLe2trW1tLS0s7OzsrKysbGxsbCwsLCwsK/LysnIx8bFxMPCwcC/vr28vLu6ubm4t7e2trW1tLSzs7KysrGxsbGwsLCwsK+vr6+vy8rIx8bFxMPCwcC/vr29vLu6ubm4t7a2tbW0tLOzsrKxsbGwsLCwr6+vr6+vr66ursrJyMfGxcTDwsHAv769vLu6ubi4t7a1tbS0s7KysrGxsLCwr6+vr6+urq6urq6urq7KycjHxcTDwsHAv769vLu6ubi3tra1tLSzsrKxsbCwsK+vr66urq6ura2tra2tra2tysnHxsXEwsHAv769vLu6ubi3trW0tLOysrGwsK+vr66urq2tra2trKysrKysrKysrMnIx8bEw8LBv769vLu6ubi3trW0s7KxsbCvr66ura2trKysrKysq6urq6urq6urq6vJyMbFxMLBwL69vLu6uLe2tbSzsrGwsK+urq2trKyrq6urq6qqqqqqqqqqqqqqqqqrycfGxMPCwL+9vLu6uLe2tbOysbCvr66trKyrq6qqqqmpqampqampqampqampqamqqsjHxcTCwb++vLu6uLe1tLOysa+uraysq6qqqamoqKinp6enp6enp6eoqKioqKipqanIxsXDwsC+vbu6uLe1tLKxsK6trKuqqaiop6empqWlpaWlpaWlpqampqanp6enqKioyMbEw8G/vry6ube1tLKwr66sq6qop6alpaSko6Ojo6Ojo6OjpKSkpKWlpaampqenp8fFxMLAvr27ube1tLKwrq2rqainpaSjoqGhoKCgoKCgoKChoaKioqOjpKSlpaWmpqbHxcPBv768uri2tLKwrqyqqKelo6Kgn56dnZycnJydnZ2enp+foKGhoqKjo6SkpaWmx8XDwb+9u7m3tbKwrqyqqKWjoZ+enJuZmZiYmJiYmZqam5ydnZ6foKChoqKjpKSlpcbEwsC+vLq4trOxr6yqp6WioJ2bmZeVlJOSkpKTlJWWl5iZmpucnZ6foKGhoqOjpKTGxMLAvry6t7WysK2rqKWin5yZlpOQjoyLi4uMjY+QkpSVl5iam5ydnp+goaGio6OkxsTCwL68ube0sq+sqaajoJyZlZCMiISBgICBhIaJjI6Rk5WXmJqbnJ2en6ChoqKjpMfFwsC+vLm3tLGvrKmlop6alpGMhn93cW1vdXuAhIiMj5GTlZeZmpydnp+goaKio6THxcPBvry6t7Syr6yppaKempWQioJ5bVghV2p1fIKHi46Rk5WXmZqbnZ6foKGioqOkyMbDwb+9uri1sq+sqaajn5uWkYyFfnZuaWxzen+EiIyPkZSWl5mbnJ2en6ChoqOjpMnGxMLAvbu5trOxrquopKGdmZWRjIiEgH9/gYOGiYyPkZOVl5manJ2en6ChoqKjpKTJx8XDwb+8ure1srCtqqekoZ6al5SRjoyLi4uMjo+Rk5WWmJmbnJ2en6ChoqKjpKSly8nGxMLAvru5t7Syr62qp6Win52amJaVlJOTlJSVlpeYmpucnZ6foKChoqOjpKWlpszKyMbEwb+9u7m2tLKwrauppqSioJ6dnJuampqampubnJ2enp+goaGio6OkpKWlpqbNy8nHxcPBv727ube0srCurKqop6WkoqGgoJ+fn5+fn6CgoaGioqOjpKSlpaamp6enzs3LycfFw8G/vbu5t7WzsbCurKupqKempaSko6Ojo6Ojo6OkpKSlpaampqenp6ioqNDOzMrIx8XDwb+9u7q4trWzsbCurayrqqmoqKenpqampqampqanp6enqKioqKmpqanRz87MysjHxcPBwL68u7m3trSzsrCvrq2srKuqqqqpqampqampqampqampqqqqqqqq09HPzczKyMfFw8LAvr27urm3trWzsrGwsK+ura2srKyrq6urq6urq6urq6urq6urq9TS0c/NzMrIx8XEwsG/vry7uri3trW0s7KysbCwr6+urq6tra2tra2trKysrKysra3V1NLRz83MysnHxsTDwcC/vby7urm4t7a1tLOzsrGxsLCwr6+vr66urq6urq6urq6u19XU0tDPzczKycfGxcPCwb++vby7urm4t7a2tbS0s7KysrGxsbCwsLCvr6+vr6+vr9jX1dPS0M/NzMvJyMbFxMPBwL++vby7urm4uLe2tbW0tLOzs7KysrGxsbGwsLCwsLDZ2NbV09LQz87My8nIx8bEw8LBwL++vby7urm5uLe3tra1tbS0s7OzsrKysrGxsbGx29nY1tXT0tDPzszLysjHxsXEw8HAv76+vby7urq5uLi3tra1tbW0tLOzs7OysrKysdza2dfW1dPS0M/OzMvKycfGxcTDwsHAv769vby7urq5uLi3t7a2tbW1tLS0s7Ozs7Ld29rZ19bU09LQz87My8rJyMfFxMPCwcDAv769vLy7urq5ubi3t7e2trW1tbS0tLOz3t3b2tjX1dTT0dDPzszLysnIx8bFxMPCwcC/vr69vLu7urq5uLi3t7e2trW1tbS0tN/e3NvZ2NbV1NPR0M/OzMvKycjHxsXEw8LBwL+/vr29vLu7urm5uLi3t7e2trW1tbTg3t3c2tnX1tXT0tHQz83My8rJyMfGxcTDwsHAwL++vb28u7u6urm5uLi3t7a2trW14d/e3Nva2NfW1NPS0c/OzczLysnIx8bFxMPCwcHAv76+vby8u7q6ubm4uLe3t7a2tuLg393c29nY1tXU09HQz87NzMvKycjHxsXEw8LBwMC/vr69vLy7u7q5ubi4uLe3trbi4d/e3dva2dfW1dPS0dDPzczLysnIx8bFxMTDwsHAwL++vr28vLu7urm5ubi4t7e24+Lg393c29nY19XU09LQz87NzMvKycjHxsXEw8LCwcC/v769vby8u7q6ubm4uLi3t+Ti4d/e3Nva2NfW1dPS0dDPzszLysnIx8bFxcTDwsHBwL++vr28vLu7urq5ubi4t7fk4+Hg3t3c2tnY1tXU09HQz87NzMvKycjHxsXEw8LCwcC/v769vby8u7q6ubm5uLi35ePi4N/d3NvZ2NfV1NPS0c/OzczLysnIx8bFxMPDwsHAwL++vr28vLu7urq5ubi4t+Xj4uDf3tzb2tjX1tTT0tHQzs3My8rJyMfGxcTEw8LBwMC/vr69vLy7u7q6ubm4uLfl5OLh397c29rY19bV09LR0M/NzMvKycjHxsXFxMPCwcDAv76+vby8u7u6urm5uLi35eTi4d/e3dva2dfW1dPS0dDPzczLysnIx8bFxMTDwsHAwL++vr28vLu7urq5ubi4t+bk4+Hg3t3b2tnX1tXT0tHQzs3My8rJyMfGxcTDw8LBwL+/vr29vLy7urq5ubm4uLfm5OPh4N7d29rY19bU09LRz87NzMvKycjHxsXEw8LBwcC/vr69vby7u7q6ubm4uLe35uTj4eDe3dva2NfW1NPS0M/OzczLycjHxsXFxMPCwcDAv769vby8u7q6ubm4uLi3t+bk4uHf3tzb2djX1dTT0dDPzszLysnIx8bFxMPCwcHAv76+vby8u7u6ubm4uLi3t7bm5OLh397c29nY1tXT0tHQzs3My8rIx8bFxMPCwsHAv76+vby8u7u6ubm4uLi3t7a25eTi4N/d3NrZ19bU09LQz87My8rJyMfGxcTDwsHAv76+vby8u7q6ubm4uLe3t7a2tuXj4uDe3dva2NfV1NLRz87NzMrJyMfGxcTDwsHAv76+vby7u7q6ubm4uLe3tra2tbXl4+Hg3tzb2djW1NPR0M/NzMvJyMfGxcTDwsHAv769vby7urq5ubi4t7e2tra1tbW05OPh393c2tjX1dTS0c/OzMvKyMfGxcTCwcC/v769vLu7urm5uLi3t7a2trW1tbS0tOTi4N/d29nY1tTT0dDOzcvKyMfGxMPCwcC/vr28vLu6ubm4uLe3tra1tbW0tLSzs7Pj4uDe3NrY19XT0tDOzcvKyMfGxMPCwb++vby8u7q5ubi3t7a2tbW1tLS0s7Ozs7Ky4+Hf3dvZ2NbU0tDPzcvKyMfFxMPBwL++vby7urm4uLe2trW1tLS0s7OzsrKysrKxseLg3tza2NfV09HPzczKyMfFxMLBv769vLu6ubi3tra1tLSzs7OysrKysbGxsbGxsbDi4N7b2dfV1NLQzszKyMbFw8HAvr28urm4t7a1tbSzs7KysrGxsbGwsLCwsLCwsLCw4d/d29nW1NLQzszKyMbEw8G/vry7ubi3trW0s7KysbGwsLCvr6+vr6+vr6+vr6+vr+De3NrX1dPRz83LyMbEwsC+vbu5uLa1tLKxsbCvr66urq2tra2tra2tra2tra2trq7g3dvZ1tTS0M3LycfEwsC+vLq4trSzsbCvrq2srKurq6urq6urq6urq6ysrKysrKyt393a2NXT0c7MycfFwsC9u7m3tLKxr62sq6qpqKioqKioqKioqampqaqqqqurq6usrN7c2dfV0s/NysjFw8C9u7i2s7GurKqop6alpKSkpKSkpKWlpqanp6ioqampqqqqq6ve29nW1NHOzMnGw8G+u7i1sq+sqqelo6Ggn56enp+foKGioqOkpaWmp6eoqKmpqaqq3dvY1tPQzcvIxcK/vLm1sq+rqKShnpuZmJeXl5iZm5ydnqChoqOkpKWmpqeoqKipqd3a2NXSz83Kx8TBvbq3s6+rp6OempaSjo2MjY+RlJaYmpydn6ChoqOkpaWmp6eoqKnd2tfV0s/MycbDwLy5tbGtqaSfmZOMhX57fICFio6SlZeZm52foKGio6Slpaanp6io3drX1dLPzMnGw7+8uLSwrKeinZaOhXhkQ2J0foaLj5OWmJqcnp+goqOjpKWmpqenqN3a19XSz8zJxsO/vLi1sayoo52XkIh/dXBze4KIjJCTlpianJ6foKKio6Slpqanp6jd2tjV0s/MycbDwL25trKuqqWhnJeSjYmHh4iLjpGTlpianJ2eoKGio6Skpaamp6eo3dvY1dPQzcrHxMG+u7e0sK2ppaGempeVk5KTk5WWmJmbnJ2foKGio6OkpaWmp6enqN7b2dbT0c7LyMXCv7y5trOwraqmpKGfnZubmpqbm5ydnp+goaGio6SkpaWmpqenqKjf3NnX1NHPzMnHxMG+u7m2s7Cuq6mnpaOioaCgoKCgoaGioqOjpKSlpaamp6enqKio393a2NXS0M3LyMXDwL67uLa0sa+tq6mop6alpKSkpKSkpKSlpaWmpqanp6eoqKipqeDd29jW09HOzMnHxcLAvbu5t7Sysa+trKuqqaiop6enp6enp6enp6eoqKioqKmpqanh3tzZ19TS0M3LycbEwr+9u7m3tbSysa+urayrq6qqqampqampqampqampqampqqqq4d/d2tjW09HPzMrIxsPBv727uri2tbOysbCvrq2srKurq6qqqqqqqqqqqqqqqqqqquLg3dvZ1tTS0M3LycfFw8G/vby6uLe1tLOysbCvrq6traysrKurq6urq6urq6urq6vj4N7c2tfV09HPzMrIxsTDwb+9vLq5t7a1tLOysbCvr66ura2trKysrKyrq6urq6ur4+Hf3drY1tTS0M3LycjGxMLAv728urm4trW0s7KxsbCvr66urq2traysrKysrKysrOTi393b2dfV0tDOzMrIx8XDwcC+vbu6ubi2tbSzs7KxsLCvr66urq2tra2srKysrKzl4uDe3NnX1dPRz83LycfGxMLBv768u7q4t7a1tLOzsrGxsK+vr66urq2tra2trKys5ePg3tza2NbU0tDOzMrIxsXDwcC+vby6ubi3trW0s7KysbCwr6+vrq6ura2tra2trOXj4d/c2tjW1NLQzszKyMfFw8LAv728u7m4t7a1tLOzsrGxsLCvr66urq6tra2tra3m4+Hf3dvY1tTS0M7MysnHxcPCwL+9vLu5uLe2tbS0s7KxsbCwr6+vrq6ura2tra2t5uTh393b2dbU0tDOzMrJx8XDwsC/vby7ubi3trW0s7OysbGwsK+vrq6urq2tra2trebk4d/d29nW1NLQzszKyMbFw8HAvr27urm4t7a1tLOysrGwsK+vr66urq2tra2tra3m5OHf3dvY1tTS0M7MysjGxMLBv768u7m4t7a1tLOysrGwsK+vrq6urq2tra2trays5uTh393a2NbU0c/Ny8nHxcPCwL69u7q4t7a1tLOysbGwr6+vrq6ura2tra2srKysrObk4d/d2tjV09HPzcrIxsTCwL+9u7q4t7a1s7KysbCvr66urq2tra2srKysrKysrKzm5OHf3NrX1dPQzszJx8XDwb+9u7q4t7W0s7KxsK+vrq2traysrKysrKysrKysrKys5uPh3tzZ19TSz83LyMbEwb+9u7m4trSzsrCvr66traysq6urq6urq6urq6urq6urq+bj4d7c2dbU0c/MycfFwsC9u7m3tbOysK+urayrq6qqqqqqqqqqqqqqqqqqqqurq6vm4+De29jW09DOy8jGw8C+u7m2tLKwrq2rqqmpqKiop6eoqKioqKmpqampqqqqqqur5uPg3tvY1dLQzcrHxMG+u7m2s7GurKqop6alpaSkpKWlpaampqenqKioqampqqqqqubj4N3b2NXSz8zJxsO/vLm2s7Ctqqelo6KhoKCgoKGhoqOjpKWlpqenqKipqamqqqrm4+Dd2tfU0c7LyMXBvrq3s6+sqKShnpyamZmampudnp+goaKjpKWmpqeoqKmpqaqq5uPg3drX1NHOy8fEwLy5tbCsqKOemZWRj4+QkpSWmZucnqChoqOkpaanp6ioqamqqubj4d7b19TRzsrHw8C8uLOvqqSemJCIgX1/g4mOkpWYm52foKKjpKWmpqeoqKmpqqrn5OHe29jV0c7Lx8PAvLezrqmjnJSLfmk0ZnmDipCUl5qcnqCho6SlpqenqKmpqqqq5+Ti39zY1dLPy8jEwL24tK+qpZ+YkId+eXuCiI6SlpmbnZ+hoqOlpqanqKipqqqqq+jl4t/c2dbT0M3JxsK+urayramkn5qVkY+OkJKVl5qcnp+hoqSlpqenqKmpqqqrq6vp5uPg3drX1NHOy8fEwb25tbKuqqajoJ2bmpqbnJ2foKGio6Wlpqeoqamqqqurq6ys6ufk4d/c2dbT0M3KxsPAvbm2s7CtqqimpKOjoqOjpKSlpqanqKipqaqqq6usrKysrevo5uPg3drX1dLPzMnGw8C9uri1srCurKuqqaioqKioqampqqqrq6usrKysra2tra7s6efk4d/c2dbU0c7LycbDwb68ube1s7Kwr66ura2srKysrKytra2tra2urq6urq6u7evo5ePg3tvY1tPQzsvJxsTCwL27uri2tbSzsrGxsLCvr6+vr6+vr6+vr6+vr6+vr+7s6efk4t/d2tjV09DOzMnHxcPBv728urm4t7a1tLOzsrKysbGxsbGxsbGxsLCwsLDw7evo5uPh3tza19XT0M7MysjGxMLBv728u7q5uLe2trW1tLSzs7OzsrKysrKysbGx8e7s6efl4uDe29nX1dLQzszKyMfFw8LAv769vLu6ubi3t7a2tbW1tLS0s7Ozs7OysvLv7evo5uTh393b2dbU0tDOzcvJx8bEw8LAv769vLu6urm4uLe3tra1tbW0tLS0s7Pz8e7s6ufl4+He3NrY1tTS0M/Ny8rIxsXEwsHAv769vLu7urm5uLi3t7a2tbW1tbS09PLv7evo5uTi4N7c2tjW1NLQz83LysjHxsTDwsHAv769vLy7urq5uLi3t7e2trW1tfXz8O7s6ufl4+Hf3dvZ19XU0tDPzcvKycfGxcTCwcC/v769vLu7urm5uLi3t7e2trX28/Hv7evo5uTi4N7c2tnX1dPS0M7Ny8rJx8bFxMPCwcC/vr28vLu6urm5uLi3t7a29vTy8O7r6efl4+Hf3dva2NbU09HQzs3LysnHxsXEw8LBwL++vb28u7u6ubm4uLe3t/f18/Du7Oro5uTi4N7c29nX1dTS0c/OzMvKyMfGxcTDwsHAv769vby7u7q6ubi4uLf49fPx7+3r6efl4+Hf3dva2NbU09HQzs3MysnIx8bEw8LBwcC/vr29vLu7urm5uLi3+Pb08u/t6+nn5ePh397c2tjX1dPS0M/OzMvKyMfGxcTDwsHAv7++vby8u7q6ubm4uPj29PLw7uzq6Obk4uDe3NvZ19bU0tHPzs3LysnIxsXEw8LBwMC/vr29vLu7urm5uLj59/Ty8O7s6ujm5OLg3t3b2dfW1NPR0M7NzMrJyMfGxcTDwsHAv769vby7u7q6ubi4+ff18vDu7Oro5uTi4N7d29nY1tTT0dDOzczKycjHxsXEw8LBwL++vb28u7u6urm4uPn39fLw7uzq6Obk4uDe3dvZ19bU09HQzs3MysnIx8bEw8LBwcC/vr29vLu7urm5uLj59/Xy8O7s6ujm5OLg3tzb2dfW1NLRz87Ny8rJx8bFxMPCwcC/v769vLy7urq5ubi4+ff08vDu7Oro5uTi4N7c2tnX1dTS0M/NzMvJyMfGxcTDwsHAv769vby7u7q5ubi4t/n29PLw7uvp5+Xj4d/d3NrY1tXT0dDOzcvKycjGxcTDwsHAv76+vby7u7q6ubi4t7f49vTy7+3r6efl4+Hf3dvZ19XU0tDPzczLycjHxsTDwsHAv76+vby7u7q6ubi4t7e3+Pbz8e/t6ujm5OLg3tza2NbU09HPzszLysjHxsTDwsHAv76+vby7u7q5ubi4t7e2tvj18/Du7Orn5ePh393b2dfV09LQzs3LysjHxsTDwsHAv769vLy7urq5uLi3t7a2trX39fLw7evp5+Ti4N7c2tjW1NLQzs3LysjHxcTDwsHAv769vLu6urm5uLe3tra2tbW19vTx7+3q6OXj4d/d2tjW1NLQz83LycjGxcTCwcC/vr28u7q6ubi4t7e2trW1tbS0tPbz8e7s6efk4uDd29nX1dPQz83LycfGxMPCwL++vby7urm5uLe3tra1tbW0tLSzs7P18vDt6+jm4+He3NnX1dPRzszLycfFxMLBv769vLu6ubi3t7a2tbW0tLSzs7OysrKy9PHv7Onn5OLf3drY1dPRzszKyMbEwsG/vry7urm4t7a2tbW0tLOzs7KysrKxsbGxsfPw7uvo5uPg3tvY1tPRzszKx8XDwb++vLu5uLe2tbS0s7OysrGxsbGxsLCwsLCwsLDy7+3q5+Th39zZ1tTRzszJx8TCwL68uri3trSzs7KxsbCwsK+vr6+vr6+vr6+vr6+v8e7s6ebj4N3a19TRz8zJxsTBvry6uLa0s7Gwr6+urq2tra2tra2tra2tra2tra2trfDt6ufk4d7b2NXSz8zJxsPAvbq4tbOxr66sq6qqqqmpqamqqqqqq6urq6usrKysrKzw7Onm4+Dd2tfT0M3JxsPAvLm2s7Ctq6mnpqWlpaWlpaampqenqKipqamqqqqrq6ur7+zo5eLf3NjV0c7Lx8PAvLi1sa2qpqShn56enp6foKGioqOkpaamp6eoqKmpqaqqqu7r6OTh3trX09DMycXBvbm0sKynop6al5WUlJWXmZqcnp+goaKjpKWmpqenqKipqant6ufk4N3Z1tLPy8fDv7q2saynoZuUjYiEhYiLj5OVmJqcnp+hoqOkpKWmpqenqKip7erm4+Dc2dXRzsrGwr25tK+po52Vi39uX2t5g4mOkpWYmpyen6CioqOkpaamp6eoqO3p5uLf3NjU0c3JxcG9uLOuqaOclYyBc2pwe4OJjpKVl5qbnZ6goaKjpKSlpqanp6fs6ebi39vY1NHNycXBvbm0r6qln5qTjomGhoiLjpGUlpianJ2eoKGioqOkpaWmpqen7Onm4t/b2NTRzcnGwr66trGtqaSgnJiVk5KSk5SWl5mam52en6ChoqKjpKSlpaamp+zp5uLf29jU0c3KxsO/u7e0sKyppaKfnZuamZmampucnJ2en6ChoaKjo6SkpaWmpqfs6ebi39zY1dHOy8fEwL25trOvrKmnpKKhoJ+enp6enp+foKChoaKio6OkpKWlpqam7Onm49/c2dXSz8vIxcK+u7i1sq+tq6inpaSjoqGhoaGhoaGioqKjo6OkpKWlpaampu3p5uPg3NnW08/MycbDwL26t7Syr62rqqinpaWko6OjoqKio6Ojo6SkpKSlpaWmpqbt6ubj4N3Z1tPQzcrHxMG+u7m2tLGvrayqqaempqWkpKSko6OkpKSkpKSlpaWmpqam7ern4+Dd2tfT0M3Kx8TCv7y6t7Wzsa+tq6qpqKempaWlpKSkpKSkpKSlpaWlpqampu3q5+Tg3drX1NHOy8jFwr+9uri1s7Gvrqyrqainp6alpaWlpKSkpKSlpaWlpaampqbt6ufk4d3a19TRzsvIxcK/vbq4tbOxr66sq6qoqKempqWlpaSkpKSlpaWlpaWmpqan7urn5OHd2tfU0c7LyMXCv7y6t7Wzsa+trKqpqKempqWlpKSkpKSkpKWlpaWlpqamp+7q5+Th3drX1NHNysfEwb68uba0srCurKqpqKempaWkpKSkpKSkpKSkpaWlpaampqfu6+fk4d3a19TQzcrHxMC9u7i1srCurKqop6alpKSjo6Ojo6Ojo6SkpKSlpaWmpqan7uvo5OHd2tfT0M3JxsO/vLm2s7Ctq6mnpaSjoqKhoaGhoaKioqOjo6SkpaWlpqamp+7r6OTh3trX09DMycXCvru3tLCtqqelo6Ggn56enp6fn6CgoaGioqOjpKSlpaampqfv6+jl4d7a19PPzMjEwb25tbGtqaajoJ2bmpqampqbnJ2en6CgoaKio6SkpaWmpqen7+zo5eHe2tfTz8vIxMC7t7OuqqWhnJiVk5KSk5WWmJmbnJ2foKGhoqOkpKWlpqanp/Ds6eXi3tvX08/Lx8O/u7axrKehm5SOiIWFiIuPkpWXmZudnp+goaKjpKWlpqanp6jw7enm4t/b2NTQzMjEv7u2saulnpaNgXJlb3uEio+TlpibnJ6foaKjpKSlpqanp6io8e7q5+Pg3NjV0c3JxcC8t7Kspp+XjoJ0aXF8hYuQlJeZnJ2foKGjo6Slpqanp6ioqfLv6+jk4d3a1tLOysbCvrm0r6qknpeRjImJi46SlZeanJ6foaKjpKWlpqenqKipqanz8Ozp5eLf29fU0MzIxMC8uLOvqqahnZqYl5eYmpudnp+hoqOkpaWmp6eoqKmpqqqq9PHt6ufj4N3Z1tLOy8fDwLy4tLGtqqeko6GhoaGhoqOjpKWmpqenqKipqaqqqqurq/Xy7+zo5eLe29jU0c7Kx8PAvbm2s7GurKqpqKenp6enqKioqampqqqqq6urq6ysrKz28/Dt6ufj4N3a19PQzcrHxMG+u7m2tLKxr66trKysq6urq6ysrKysrKysra2tra2t+PXy7uvo5eLf3NnW09DNysfFwsC9u7m3trSzsrGwsK+vr66urq6urq6urq6urq6urvn28/Dt6ufk4d7b2NbT0M3LyMbDwb+9vLq4t7a1tLOzsrKxsbGwsLCwsLCwsK+vr6/69/Tx7uzp5uPg3dvY1dPQzsvJx8XDwb++vLu6uLe3trW0tLOzs7KysrGxsbGxsbCw+/j28/Dt6ufl4t/d2tjV09DOzMrIxsTCwb++vbu6ubi4t7a2tbW0tLOzs7KysrKysfz69/Tx7uzp5uTh39za19XT0M7MysjHxcPCwb++vby7urm4uLe2trW1tbS0s7Ozs7L++/j18vDt6ujl4+De29nX1dPQzs3LycfGxMPBwL++vby7urm5uLe3tra1tbW0tLSz//z59vTx7uzp5+Ti393b2dbU0tDPzcvJyMbFw8LBwL++vby7urm5uLi3t7a2tbW0tP/9+vf18u/t6ujm4+Hf3NrY1tTS0M7Ny8nIxsXEwsHAv769vLy7urm5uLi3tra2tbX//vv49vPw7uvp5+Ti4N7b2dfV09LQzszLycjGxcTDwcC/vr29vLu6urm4uLe3tra1//78+fb08e/s6ujl4+Hf3NrY1tTT0c/NzMrJx8bFxMLBwL++vb28u7q6ubi4t7e2tv///Pr39PLv7evo5uTi393b2dfV09LQzs3LysjHxsTDwsHAv769vby7urq5uLi3t7b///36+PXz8O7r6efk4uDe3NrY1tTS0c/NzMrJyMbFxMPCwcC/vr28u7u6ubm4uLe3///9+/j18/Du7Onn5ePg3tza2NbV09HPzszLycjHxcTDwsHAv769vLy7urq5ubi3t////fv49vPx7uzp5+Xj4d7c2tjX1dPR0M7My8nIx8bEw8LBwL++vb28u7q6ubm4uLf///77+Pbz8e7s6ufl4+He3NrY1tXT0c/OzMvJyMfFxMPCwcC/vr29vLu6urm5uLi3///++/j28/Hu7Onn5ePg3tza2NbU09HPzszKycjGxcTDwsHAv769vLy7urq5ubi4t////fv49vPw7uzp5+Ti4N7c2tjW1NLQz83LysjHxsXDwsHAv76+vby7u7q5ubi4t7f///37+PXz8O7r6ebk4t/d29nX1dPRz87My8nIxsXEw8LBwL++vby7u7q6ubi4t7e3///9+vf18vDt6ujl4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby7u7q5ubi4t7e3tv///fr39PLv7Orn5eLg3dvZ19XT0c/Ny8rIx8XEw8HAv76+vby7urq5ubi4t7e2trb///z59vTx7uvp5uPh3tza19XT0c/Ny8nIxsXDwsHAv769vLu7urm5uLi3t7a2trW1//77+Pbz8O3q6OXi4N3b2NbT0c/Ny8nHxsTDwcC/vr28u7u6ubm4uLe3tra2tbW1tP/++/j18u/s6ebk4d7b2dbU0c/Ny8nHxcPCwL++vby7urm5uLi3t7a2trW1tbS0tLT//fr39PHu6+jl4t/c2dfU0c/MysjGxMLAv728u7q5uLi3t7a2tbW1tbS0tLS0s7Oz//z59vPw7ern4+Dd2tfU0c/MycfEwsC+vLu6uLi3trW1tbS0tLSzs7Ozs7Ozs7Kysv/8+PXy7+zo5eLf29jV0s/MycbDwL68uri3tbS0s7KysrKysrKysrKysrKysrKysrL++/j08e7q5+Tg3drW08/MyMXCv7y5t7SzsbCvr6+urq+vr6+vsLCwsLCwsLGxsbGx/vr39PDt6ebi39vY1NDMycXBvbq2s7CurKqqqamqqqqrrKytra6urq+vr6+wsLCwsP369vPw7Ojl4d7a1tLOysbBvbm0sKuopaOhoaKjpKWmp6ipqqusrK2trq6ur6+vr6/9+fby7+vo5ODc2dXQzMjDvrm0rqiinZiVlJaZm56goqSmp6ipqqusrK2trq6ur6+v/fn28u/r5+Pg3NjUz8vGwby2sKqimY6Ce3+Ij5WZnaCipKanqKmqq6ysra2trq6urvz59fLu6+fj39vX08/KxsG7tq+ooJaKd2N0g42TmJyfoaOlp6ipqqqrrKytra2urq78+fXy7uvn49/b19PPy8bBvLexq6WelpCMjZCUmJueoKKkpqeoqaqqq6ysra2trq6u/Pn18u7r5+Pg3NjU0MzIw7+6tbCrp6KfnJucnZ6goqOkpqeoqaqqq6usrK2tra2urv359vLv6+jk4N3Z1dHNycXBvbm1sq6rqKalpKSkpaamp6ipqaqqq6usrK2tra2urq79+fbz7+zo5eHe2tbTz8vIxMG9ure0sa+trKuqqqmqqqqqq6urrKysra2tra2urq6u/fr28/Ds6eXi39vY1NHOysfEwb67uLa0srGvr66tra2tra2tra2tra2trq6urq6urv369/Pw7enm4+Dc2dbTz8zJxsTBvry6uLa1s7KxsLCvr6+urq6urq6urq6urq6urq7++vf08e3q5+Tg3drX1NHOy8nGxMG/vbu5uLa1tLOysrGwsLCvr6+vr6+vr6+urq6u/vv39PHu6+jk4d7b2NXT0M3KyMbDwb+9vLq5t7a1tLOzsrGxsbCwsK+vr6+vr6+vr/77+PXx7uvo5eLf3NnW1NHOzMnHxcPBv728urm4t7a1tLOzsrGxsbCwsK+vr6+vr6/++/j18u/s6OXj4N3a19TSz83LyMbEwsC/vbu6ubi3trW0s7OysrGxsLCwsK+vr6+v/vv49fLv7Onm4+Dd2tjV0tDOy8nHxcPBv768u7q4t7a1tbSzsrKxsbGwsLCvr6+vr//7+PXy7+zp5uPg3dvY1dPQzszJx8XDwcC+vbu6ubi3trW0s7OysbGxsLCwr6+vr6/++/j18u/s6ebj4N3b2NXT0M7MycfFw8HAvr27urm4tra1tLOysrGxsLCwr6+vr6+u/vv49fLv7Onm4+Dd2tjV0tDNy8nHxcPBv768u7m4t7a1tLOzsrKxsbCwr6+vr66urv77+PXx7uvo5eLf3NrX1NLPzcrIxsTCwL69u7q5t7a1tLSzsrGxsLCwr6+vrq6urq7++/f08e7r6OXi39zZ1tPRzszJx8XDwb+9vLq5t7a1tLOzsrGxsLCvr6+urq6urq2t/vr39PDt6ufk4d7b2NXSz83KyMXDwb+9u7q4t7a1tLOysbGwr6+vrq6urq2tra2trf369vPw7enm4+Dd2dbU0c7LyMbDwb+9u7m4trW0s7KxsK+vrq6ura2tra2trKysrKz9+fby7+zo5eLf29jV0s/MycbDwb68uri2tbOysbCvr66tra2srKysrKysrKysrKys/Pn18u7r5+Th3drX09DNysbDwb67ube1s7Gwr66trKyrq6urq6urq6urq6urq6urq/z49fHu6ubj39zY1dHOysfEwL26t7WysK6tq6qqqampqKioqampqampqaqqqqqqqqr7+PTw7enm4t7a19PPzMjEwL25trOwraupp6alpaWlpaWmpqanp6eoqKipqampqaqq+/fz8Ozo5eHd2dXRzcnFwb25tbGtqaajoaCfn5+goKGio6OkpaWmpqenp6ioqKmpqfr38+/r6OTg3NjU0MzHw766tbCrpqGdmZeWlpeYmpydnqChoqOkpKWmpqenp6ioqKn69vPv6+fj39vX08/KxsG8t7GspZ+YkYqHh4qNkZSXmpydn6ChoqOkpaWmpqenqKio+vby7+vn49/b1tLOycXAu7WvqaKZkINxX258hYyRlJeanJ6foKGio6Slpaamp6eoqPr28u7r5+Pf2tbSzsnEwLq1r6mimpGGeXF2f4eMkZSXmpydn6ChoqOkpaWmpqenp6j69vLu6+fj39vW0s7KxcC7trGspqCZk46Li4yPkpWXmZudnp+goaKjpKWlpqanp6eo+vby7+vn49/b19PPysbCvbm0r6umop6amJeXl5iZm5ydnp+goaKjpKSlpaamp6enqPr28+/r5+Pg3NjU0MzIxL+7t7OvrKilo6Gfnp6enp+foKGhoqKjpKSlpaampqenp6j69/Pv7Ojk4NzZ1dHNycXCvrq3s7Ctq6impaSjoqKioqKjo6OkpKWlpaampqenp6io+/fz8Ozo5eHd2dbSzsvHxMC9ure0sa+tq6mop6alpaWlpaWlpaWlpqamp6enp6ioqPv39PDs6eXh3trX09DMycXCv7y5trSysK6sq6qpqKenpqampqampqanp6enp6ioqKj8+PTx7enm4t7b19TQzcrHxMG+u7i2tLKwrq2sq6qpqKiop6enp6enp6enqKioqKip/Pj18e3q5uPf29jV0c7LyMXCv7y6t7WzsbCurayrqqmpqKioqKioqKioqKioqKipqfz59fHu6ufj39zY1dLOy8jFwr+9uri2tLKwr66sq6uqqampqKioqKioqKioqKmpqan9+fXy7urn4+Dc2dXSz8vIxcK/vbq4trSysK+urKurqqmpqaioqKioqKioqKmpqamp/fn28u7r5+Pg3NnV0s7LyMXCv7y6t7Wzsa+urayrqqmpqaioqKioqKioqKmpqampqf369vLu6+fj4NzZ1dHOy8fEwb67uLazsbCurauqqqmoqKioqKioqKioqKipqampqar++vby7+vn4+Dc2NXRzcrGw7+8uba0sa+tq6qpqKinp6enp6enp6ioqKioqampqaqq/vr28+/r5+Tg3NjU0MzJxcG9urazsK6rqainpqWlpaWlpaampqenp6ioqKmpqaqqqv779/Pv6+fk4NzY1NDMx8O/u7ezr6yppqSjoqGhoqKjo6Skpaamp6eoqKmpqaqqqqr/+/fz8Ozo5ODc2NPPy8bCvbi0r6qmop6cm5ubnJ2foKGio6SlpqenqKipqamqqqqr//z49PDs6OTg3NjTz8rGwby2sauknpiTkI+RlJaZnJ6goaKkpaanp6ioqamqqqurq//8+PXx7enl4dzY1M/KxsC7ta+ooJaLfnV6hIySlpqcn6GipKWmp6ioqaqqqqurq6z//fn18u7q5uHd2dXQy8bBvLavqKCWinhodYKMkpeanaCio6Wmp6ipqaqqq6usrKys//769vPv6+fj39rW0s3Iw765s62mn5iSjo6RlZibnqCipKWmp6ipqqqrq6ysrK2trf//+/j08Ozo5ODc2NTPy8bCvbizrqmloZ+enp+goaOkpqeoqamqq6usrK2tra2urq7///z59fHu6ubi3trW0s7KxsK+ubayr6yqqKinp6ioqaqqq6usrK2tra6urq6vr6+v///++vbz7+zo5ODd2dXRzsrGw7+8uba0srCvrq6ura6urq6urq+vr6+vr7CwsLCwsP////v49PHt6ubj39zY1dHOy8fEwb+8uri3tbSzs7KysrGxsbGxsbGxsbGxsbGxsbH////9+fbz7+zo5eLe29jV0s/MycbEwb+9vLq5uLe2trW1tLS0tLOzs7Ozs7KysrKy/////vv49PHu6ufk4d7b2NXSz83KyMbEwsC/vby7urm4uLe3tra1tbW1tLS0tLOzs//////8+fbz8Ozp5uPg3dvY1dLQzsvJx8XEwsG/vr28u7q6ubi4t7e3tra1tbW1tLT//////vv39PHu6+jl4uDd2tjV09HOzMrJx8XEwsHAv769vLu7urm5uLi3t7a2trW1///////8+fbz8O3q5+Ti393a2NXT0c/Ny8nIxsXEwsHAv769vLy7urq5ubi4t7e2tv///////fr39PHu7Onm5OHf3NrY1dPRz83MysjHxsTDwsHAv769vLy7urq5ubi4t7f///////77+PXz8O3q6OXj4N7c2dfV09HPzszKycfGxcTCwcC/vr69vLu7urq5uLi3/////////Pn29PHu7Onm5OLf3dvZ19XT0c/NzMrJx8bFxMPCwcC/vr28vLu6urm5uP////////369/Xy7+3q6OXj4N7c2tjW1NLQz83MysnHxsXEw8LBwL++vby8u7q6ubn////////++/j18/Dt6+jm5OHf3dvZ19XT0dDOzMvKyMfGxMPCwcC/vr69vLu7urq5/////////vv59vPx7uvp5+Ti4N7b2dfW1NLQz83MysnHxsXEw8LBwL++vb28u7q6uf////////78+fb08e7s6efl4uDe3NrY1tTS0c/NzMvJyMfFxMPCwcC/vr69vLu7urn//////////Pn29PHu7Orn5ePg3tza2NbU09HPzszLycjHxcTDwsHAv76+vby7u7q5//////////z59vTx7uzp5+Xi4N7c2tjW1NLRz87My8nIx8XEw8LBwL++vb28u7u6uf////////78+fbz8e7s6efk4uDe3NrY1tTS0M/NzMrJx8bFxMPCwcC/vr28vLu6urn////////++/j28/Du6+nm5OLf3dvZ19XT0dDOzcvKyMfGxMPCwcC/vr69vLu7urm5/////////fv49fLw7ero5ePh3tza2NbU0tHPzczKycfGxcTCwcC/v769vLu7urm5uP////////369/Tx7+zp5+Ti4N3b2dfV09HPzszKycjGxcTDwcC/v769vLu7urm5uLj////////8+fbz8O7r6Obj4d7c2tjV09HQzszLycjGxcTCwcC/vr29vLu6urm5uLi3///////++/j18u/s6ufk4t/d2tjW1NLQzszKycfGxMPCwcC/vr28u7u6ubm4uLe3tv///////fr39PHu6+jl4uDd29jW1NLPzszKyMfFxMLBwL++vby7u7q5ubi4t7e2trX///////z49fLv7Onm4+De29jW1NHPzcvJx8bEw8HAv769vLu6urm4uLe3tra1tbW0//////769/Tx7ern5OHe29nW09HOzMrIxsTDwcC+vby7urq5uLi3tra2tbW0tLSzs//////8+fXy7+vo5eLf3NnW09DOy8nHxcPBv768u7q5uLi3tra1tbS0tLOzs7OysrL////++/f08O3p5uPf3NnW0tDNysfFw8C+vbu6ubi3trW1tLSzs7OysrKysrGxsbGx/////fn28u7r5+Tg3dnW0s/MycbDwL68uri2tbSzs7KysbGxsLCwsLCwsLCwsLCwsP////z49PDs6eXh3drW0s/Lx8TBvru4trSysbCvrq6urq2tra6urq6urq6urq6urq7///769vLv6+fj39vX08/Lx8O/u7e0sa+tq6qpqampqamqqqqrq6urrKysrK2tra2t///9+fXx7enl4dzY1NDLx8K+ubWwrKmmo6KhoaKio6SlpqanqKipqaqqqqurq6ysrP///Pj07+vn49/a1tHNyMO+ubOuqKOemZeWlpiZm52foKKjpKWmp6eoqKmpqqqqq6v///v28u7q5uHd2NTPysXAurWuqKCYj4eCg4iNkZWYm52foKKjpKWlpqenqKipqaqq//769vHt6eTg3NfSzcjDvriyq6SbkYNtIml7hoyRlZianJ6goaKjpKWlpqenqKipqf/9+fXw7Ojk39vW0czHwr23sauknJSLgXx+g4mOkpWXmpydn6ChoqOkpKWmpqenqKj//Pj08Ozn497a1dHMx8K9uLKtp6GclpKPjo+QkpWXmJqcnZ6foKGio6Skpaamp6en//z49O/r5+Le2tXRzMfDvrm0r6umop6bmZeXl5eYmZqbnJ2en6ChoqKjpKSlpqamp//89/Pv6+bi3tnV0czIw7+6trKuqqajoZ+dnJubm5ycnZ2en5+goaKio6OkpaWmpqb/+/fz7+rm4t7Z1dHMyMTAvLi0sK2pp6SioJ+enp2dnZ6en5+goKGhoqOjpKSlpaam//v38+/q5uLd2dXRzMjEwLy4tbGuq6impKKhoJ+fnp6en5+foKChoaKio6OkpKWlpv/79/Pu6ubi3dnV0czIxMC8ubWyr6ypp6WjoqCgn5+enp+fn6CgoaGioqOjpKSlpab/+/fz7urm4t3Z1dDMyMTAvLi1sa6rqKakoqGgn56enp6en5+foKChoaKio6OkpKWl//v38+7q5uHd2dTQzMjDv7u3s7CsqaakoqCfnp2dnZ2dnZ6en5+goaGioqOjpKSlpf/79/Pu6ubh3dnU0MvHwr66tbGtqqajoZ6dnJubm5ubnJydnp6foKChoqKjo6SkpaX/+/fz7urm4d3Y1M/LxsK9uLOvqqainpuZl5aWl5eYmZqbnJ2en5+goaKio6OkpKWl//z38+/q5uLd2dTPysbBvLaxrKahm5aSkI+PkJKTlZeYmpucnZ6foKGioqOkpKWlpv/8+PPv6+bi3dnUz8rFwLu1r6mim5OLhICAhIiMkJOVl5mbnJ2en6ChoqOjpKSlpab//fj08Ovn497Z1dDLxsG7ta+ooZiOgGxMaHmDiY6SlZeZm5yen6ChoqKjpKSlpaam//359fDs6OPf2tbRzMfCvbexqqObkoh9d3qBh4yQlJaZm5yen6ChoqOjpKSlpaamp//++vbx7enl4NzX087JxL+6tK+po52Xko+Oj5GUlpianJ2eoKGhoqOkpKWlpqanp6f///v38u7q5uLd2dXQzMfCvrm0r6umop+dm5ubm5ydnp+goaKjo6Slpaampqenp6io///8+PTw6+fj39vX0s7KxsK9ubWxrquopqSjo6KioqOjpKSlpaWmpqenp6ioqKipqf///fn18e3p5eHd2dXRzcnFwr66t7Sxr62rqqmoqKenp6enp6eoqKioqKmpqampqar///769vLu6ufj39vX1NDMycXCv7y5t7Sysa+urayrq6qqqqqqqqqqqqqqqqqqqqqq////+/fz8Ozo5eHd2tbTz8zJxsPAvbu5t7WzsrGwr66ura2srKysrKurq6urq6urq/////z49fHt6ubj39zY1dLPzMnGw8G/vLq5t7W0s7KxsLCvrq6ura2tra2srKysrKz////9+fby7+vo5OHd2tfU0c7LycbEwb+9u7q4t7a0s7KysbCwr6+vrq6ura2tra2t/////vr38/Ds6ebi39zZ1tPQzcvIxsTBwL68urm4trW0s7OysbGwsK+vr66urq6urv/////7+PTx7ern4+Dd2tfU0s/MysjFw8G/vry7ubi3trW0s7KysbGwsLCvr6+urq7//////Pn18u7r6OTh3tvY1dPQzcvJx8TCwb+9vLq5uLe2tbSzs7KysbGwsLCvr6+v//////359vLv7Ojl4t/c2dbT0c7MysfFw8HAvr27urm4tra1tLOzsrKxsbCwsK+vr//////9+vbz7+zp5eLf3NnW1NHPzMrIxsTCwL69u7q5uLe2tbS0s7KysbGxsLCwsK///////fr28+/s6ebi39zZ1tTRzszKx8XDwsC+vbu6ubi3trW0tLOzsrKxsbGwsLCw//////369vPv7Onl4t/c2dbT0c7LycfFw8G/vry7ubi3tra1tLSzsrKysbGxsLCwsP/////++vbz7+zo5eLf29jV0tDNysjGxMLAvry7urm3t7a1tLSzs7KysbGxsbCwsLD//////fr28+/r6OTh3trX1NHOy8nGxMLAvry7ubi3trW1tLOzsrKysbGxsbCwsLCw//////369vLv6+fk4N3Z1tPPzMnHxMK/vbu6uLe2tbS0s7OysrKxsbGxsbCwsLCwsP/////9+fby7urm49/b2NTRzcrHxMG+vLq4t7W0s7OysrGxsbGxsLCwsLCwsLCwsLD//////fn18e3p5uLe2tbSzsvHw8C9uri2tLOxsbCwr6+vr6+vr6+wsLCwsLCwsLCw//////359fHt6eXh3NjU0MzHw7+8uLWysK6trKysrKytra2urq6vr6+vr6+vr7CwsP/////9+fXw7Ojk4NvX0s7JxL+7trGtqqimpqamp6ipqqusrK2trq6ur6+vr6+vsLD//////fn08Ozo49/a1tHMx8G8tq+po56bm5yeoKKkpqipqqusrK2urq6vr6+vr7Cw//////359fDs6OPf2tXQy8W/ubKqoZaLg4eOlZqeoaSmqKmqq6ytra6ur6+vr7CwsP/////9+fXx7Ojj39rV0MvFv7ixqJ6RfWJ5iZKZnaGkpqipqqusra6ur6+vr7CwsLD//////vn18e3p5ODb1tHMx8G7tK2lnpaSk5aanaGjpqepqqusra6ur6+vsLCwsLCw//////769vLu6uXh3NjTzsnEv7q0r6qmpKKio6WmqKmqq6ytrq6vr6+wsLCwsbGxsf//////+/fz7+vn4t7a1dHNyMS/u7e0sa6trKusrKytra6vr6+wsLCxsbGxsbGxsbH///////z49PDs6OTg3NjU0MzIxcG+u7i2tLOysbGxsbGxsbGxsbKysrKysrKysrKy///////9+fXx7urm4t7b19PQzMnGw8C+vLq4t7a1tbS0tLSzs7Ozs7Ozs7Ozs7Oysv///////vr38+/r6OTh3drW09DNysfFwsC+vbu6ubi4t7a2trW1tbS0tLS0tLOzs7P////////7+PTx7enm49/c2dbT0M3LyMbEwsC/vry7urq5uLi3t7a2tbW1tbS0tLSz/////////Pn18u7r6OTh3tvY1dLQzcvJx8XDwsC/vr28u7q5ubi3t7e2trW1tbS0tP////////369vPw7Onm4+Dd2tfV0tDNy8nHxcTCwcC+vby8u7q5ubi3t7e2trW1tbT////////++vf08e3q5+Th3tvZ1tTRz83LycfGxMPBwL++vby7urq5uLi3t7a2tbW1/////////vv49PHu6+jl4t/d2tfV09DOzMrJx8XEwsHAv769vLu6urm4uLe3tra1tf/////////8+PXy7+zp5uPg3dvY1tPRz83LycjGxcPCwb++vby8u7q5ubi3t7e2trX//////////Pn18u/s6ebj4N7b2dbU0tDOzMrIxsXEwsHAv769vLu6ubm4uLe3tra1//////////z59fLv7Onm4+De29nW1NLQzszKyMfFxMLBwL++vby7urm5uLi3t7a2tf/////////8+PXy7+zp5uPg3tvY1tTRz83LysjGxcPCwb++vby8u7q5ubi3t7a2trX/////////+/j18u7r6OXi4N3a2NXT0c/Ny8nHxcTDwcC/vr28u7q6ubi4t7e2trW1/////////vv49PHu6+fk4t/c2dfU0tDNy8nIxsTDwcC/vr28u7q6ubi4t7e2trW1tf////////769/Pw7erm4+Dd29jV09DOzMrIxsTDwcC/vr28u7q5ubi3t7a2trW1tbT////////9+fby7+zo5eLf3NnW09HOzMrIxsTCwb++vby7urm5uLi3t7a2tbW1tLS0/////////Pn18e7q5+Pg3drX1NHOzMnHxcPBwL69vLu6ubi4t7e2trW1tbS0tLSzs/////////v39PDs6eXi3tvX1NHOy8jGw8HAvry7urm4t7e2trW1tbS0tLSzs7Ozs7P///////769vLv6+fj39zY1NHOysfEwr+9u7q4t7a2tbW0tLSzs7Ozs7OzsrKysrKy///////9+fXx7enl4d3Z1dHNysbDv7y6uLa0s7OysrKxsbGxsbGxsbGxsbGxsbGxsf///////Pj08Ozo49/b19LOycXBvbm2s7Gvrq2tra2urq6vr6+wsLCwsLCwsbGxsbH///////v38+/q5uLd2dTPysXAu7ayraqnpqWmpqeoqqqrrK2trq6vr6+vsLCwsLCw///////79vLu6eXg3NfSzcfCvLavqKKcmZianJ+ipKanqaqrrKytra6ur6+vr6+vsP/////++vby7enk39vW0MvFv7mxqZ+ThXuBi5OZnaGjpaeoqqurrK2trq6urq+vr6///////vr28e3o5N/a1dDKxb+4sKiekYFyfYmSmJygo6WmqKmqq6ysra2trq6urq+v//////769fHt6OTf2tXQy8bAurStpp6YlZSWmp2foqSmp6ipqqusrK2tra6urq6urv/////++vXx7ejk4NvW0s3Iw764s66qpqOioqKjpKWnqKmpqqurrKytra2urq6urq7//////vr28e3p5eDc2NPPysbBvbm1sq+sq6qpqampqqqrq6ysrK2tra2trq6urq6u//////769vLu6ubh3dnV0c3JxcG+ure1s7Gvrq6tra2tra2tra2tra2urq6urq6urv/////++vby7urm4t7b19PPy8jFwb68ube1tLKxsLCvr6+urq6urq6urq6urq6urq7///////v38+/r5+Pf3NjV0c7Kx8TBv726ube1tLOysbGwsK+vr6+vrq6urq6urq6u///////79/Pv6+jk4N3Z1tLPzMnGxMG/vbu5uLa1tLOysrGwsLCvr6+vrq6urq6urv//////+/fz8Ozo5eHd2tfU0M3LyMXDwb69u7m4trW0s7KysbGwsK+vr66urq6urq7///////v38/Ds6OXh3tvX1NHOy8nGxMK/vry6ube2tbSzsrGxsLCvr6+urq6urq6t///////79/Pw7Ojl4d7b19TRzszJx8TCwL68urm3trW0s7KysbCwr6+vrq6urq2trf/////++vfz7+zo5eHe2tfU0c7LycbEwsC+vLq5t7a1tLOysbGwr6+vrq6ura2tra3//////vr28u/r5+Tg3drX09DOy8jGw8G/vbu5uLe1tLOysbGwr6+urq6tra2tra2s//////359vLu6ufj4NzZ1tLPzMrHxMLAvry6uLe1tLOysbCwr66urq2traysrKysrP/////9+fXx7enm4t7b19TRzsvIxcLAvry6uLa1tLKxsLCvrq6tra2srKysrKurq6v//////Pj08Ozo5OHd2dbSz8zIxsPAvru5t7W0srGwr66ura2srKyrq6urq6urq6ur//////v38+/r5+Pf29fU0MzJxsPAvbq4trSysa+ura2sq6urqqqqqqqqqqqqqqqqqv////769vLu6eXh3dnV0c3KxsK/vLm2tLKwrq2sq6qpqamoqKioqKioqKipqampqan////9+fXx7Ojk39vX087KxsK+u7e0sa6sqqmop6ampqampqampqanp6enp6ioqKio/////fj07+vm4t7Z1dDMx8O+urWxrqqnpaOioaGhoaKioqOjpKSkpaWmpqanp6eoqP////z38+7q5eDc19LNycS/urWwq6ainpyampqam5ydnp+goaGio6OkpKWlpqamp6f////79vLt6eTf2tXQy8bBu7WvqaOclpGOjY6QkpWXmZqcnZ6foKGioqOkpKWlpqam////+vbx7Ojj3tnUz8nEvriyq6Sbkoh8dXh/houPk5WXmZucnp+goaGio6OkpaWmpv////r18ezn4t3Y087Iw723sKmhmI6AbFBoeIKIjZGTlpiam52en6ChoaKjo6Slpab///769fDr5uLd2NLNyMK9t7Cqo5uTi4R/gIOHi46RlJaYmZucnZ6foKGioqOkpKWl///++fXw6+bh3NfSzcjDvbiyrKahm5aSj46Oj5CSlJWXmJqbnJ2en6ChoaKjo6Slpf///vn18Ovm4d3Y087Iw765tK+qpaGdmpeWlZWVlZaXmJmam5ydnp+goaGio6OkpKX///769fDr5uLd2NPOycS/uraxramloZ+cm5mZmJiZmZqam5ydnp6foKGhoqOjpKSl////+vXw7Ofi3djTz8rFwLu3s66rp6Shn52cm5qampqbm5ycnZ6fn6ChoqKjpKSlpf////r18ezn4t3Z1M/KxcG8uLOvq6iloqCenZybm5ubm5ycnZ6en6ChoaKjo6SkpaX////79vHs6OPe2dTPysbBvLezr6unpKGfnZybmpqam5ucnJ2en5+goaKio6SkpaWm////+/fy7ejj3trV0MvGwby3sq2ppaGenJqZmJiZmZqbm5ydnp+goaGio6OkpaWmpv////z38+7p5N/a1dDLxsC7trCrpqGcmJaUlJSVlpeZmpucnZ+foKGio6SkpaWmpqf////9+PPv6uXg29bRy8bAu7WuqKGalI6LioyOkZOWmJqbnZ6foKGio6Skpaamp6eo/////vn18Ovm4dzX0szHwbu0rqaelIl7c3eAiI2RlZianJ2foKGio6Slpaanp6ioqP/////79vHs6OPe2dPOycO9tq+on5SHdWJxf4iOk5aZnJ6foaKjpKWlpqenqKipqan//////Pfz7unl4NvW0cvGwLq0raael5CMjI6SlZibnZ+goqOkpaamp6ioqamqqqqq//////359fDr5+Ld2NTPycS/ubSvqaWhnpycnZ6foaKjpKWmp6eoqamqqqqrq6urrP//////+/by7unl4NzX0s7JxMC7t7OvrKqop6ampqenqKipqaqqq6urrKysrKytra3///////349PDs5+Pf2tbSzsrGwr67t7Wysa+ura2tra2tra2tra2trq6urq6urq6u////////+/by7urm4t7a1tLOy8fEwb68ubi2tbOzsrGxsbCwsLCwsLCwsLCwsLCwsP////////359fHt6eXh3trW09DMycbEwb+9vLq5uLe2tbS0tLOzs7KysrKysbGxsbH/////////+/fz7+zo5OHd2tfU0c7LycbEwsC/vby7urm4t7e2trW1tLS0s7Ozs7Ky//////////359fLu6+fk4d3a19TSz83KyMbEw8HAvr28u7q5ubi3t7a2tbW1tLS0s///////////+/f08O3q5+Pg3drY1dLQzszKyMbEw8HAv769vLu6ubm4uLe3tra1tbX///////////359vLv7Onm4+Dd2tjV09HPzcvJx8bEw8HAv769vLu7urm5uLe3tra2///////////++/j08e7r6OXi393a2NXT0c/Ny8rIxsXEwsHAv769vLu7urm5uLi3t/////////////z59vPw7ern5OHf3NrX1dPRz83MysjHxcTDwsG/vr69vLu6urm5uLf////////////9+vf08e7r6Obj4N7b2dfV09HPzcvKyMfFxMPCwcC/vr28u7u6ubm4/////////////vv49fLv7Orn5OLf3drY1tTS0M7Ny8rIx8XEw8LBwL++vby7u7q5uf/////////////8+fbz8O3q6OXj4N7b2dfV09HPzszKycfGxcTCwcC/vr69vLu7urn//////////////fr29PHu6+jm4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby8u7q6//////////////369/Tx7uvp5uTh39za2NbU0tDPzcvKyMfGxMPCwcC/vr29vLu6uv/////////////9+vf08e7r6ebk4d/c2tjW1NLQz83LysjHxsTDwsHAv769vby7urr//////////////fr39PHu6+jm4+He3NrY1tTS0M7Ny8nIx8XEw8LBwL++vby8u7q6//////////////z59vPw7evo5ePg3tvZ19XT0c/OzMrJx8bFxMPBwL+/vr28u7u6uv/////////////8+fXy7+3q5+Ti393a2NbU0tDOzcvJyMfFxMPCwcC/vr28vLu6urn////////////++/j18e7r6ebj4N7b2dfV09HPzcvKyMfFxMPCwcC/vr28vLu6urm5/////////////fr38/Dt6ufk4d/c2tfV09HPzcvKyMfFxMPCwcC/vr28vLu6urm5uP////////////z49fLv6+jl4t/d2tjV09HPzcvJyMbFw8LBwL++vb28u7q6ubm4uLf///////////769/Pw7enm4+Dd2tjV09DOzMrIx8XEwsHAv769vLy7urq5ubi4t7e2///////////9+fXy7uvn5ODd2tfV0s/Ny8nHxcTCwcC/vr28u7u6ubm4uLe3t7a2tv//////////+/fz7+zo5OHe2tfU0c7MycfFw8HAv769vLu6urm4uLe3t7a2trW1tbX//////////fn18e3p5eLe2tfT0M3Kx8XCwL+9vLu6ubi4t7e2tra1tbW1tbS0tLS0//////////v38+/r5+Pe2tbTz8vIxMG/vbu5uLe2tbW1tLS0tLS0s7Ozs7Ozs7Ozs/////////769fHt6OTg29fSzsrGwr67uLW0srGxsLCwsLGxsbGxsbGxsbKysrKysbH////////8+PTv6+bh3djTzsnEv7u2sq+sqqqpqqqrrKytra6ur6+vsLCwsLCwsLCw////////+/fy7enk39rV0MrFv7mzraein56eoKKkpaeoqaqrrK2trq6ur6+vr6+vr////////vr18ezn4t3Y0s3Hwbqzq6KYjoiKkJWanqGjpaeoqaqrq6ysra2urq6urq////////359O/r5uHc1tHLxb+4sKecjnhHdIaQlpueoaOlpqipqaqrq6ysra2tra6u///////9+PPv6uXg29bQy8W/uLGpoZiQi4yQlJicnqGjpKanqKmpqqqrq6ysrK2trf///////Pfz7unl4NvW0MvGwLq1r6mkn5ybm5yen6GipKWmp6eoqamqqqurq6ysrKz///////z38u7p5ODb1tHMx8K9uLSvq6ilpKOio6OkpKWmpqeoqKmpqaqqq6urq6ys///////79/Lu6eTg29bSzcnEwLy4tLGuq6mop6ampqamp6enqKioqamqqqqqq6urq///////+/by7enk4NvX0s7KxsK+ure0sa+tq6qpqaioqKioqKioqKmpqamqqqqqq6v///////v28u3p5ODc19PPy8fDv7y5trOxr62sq6qpqaioqKioqKipqampqaqqqqqr///////69vHt6eTg29fTz8vHxMC9ure0srCurayrqqmpqKioqKioqKipqampqqqqqv//////+vbx7ejk39vX08/Lx8PAvbq3tLKwrq2rqqqpqKioqKioqKioqKipqampqqr//////vr18ezo49/b1tLOysbCv7u4trOxr62sqqmpqKinp6enp6enqKioqKmpqamp//////759fDs5+Pe2tXRzcnFwb25trOxrqyrqainp6ampqampqanp6enqKioqKmpqf/////++fTw6+fi3dnU0MvHwr66trOwraupp6alpaSkpKSlpaWmpqamp6enqKioqan//////fn07+vm4dzY087JxMC7t7Kuq6ilo6KhoaGhoqKjo6SkpaWlpqanp6eoqKip//////359O/q5eHc19LMx8K9t7KtqKOgnZubm5ydnp+goaGio6SkpaWmpqenqKioqP/////9+PTv6uXg29bRy8bAurStp6CZlJCPkZOVmJqcnZ+goaKjpKSlpqanp6eoqKj//////fj07+rl4NvV0MvFv7ixqqGXjH91eoOLkJSXmpyen6Gio6SkpaWmpqenqKio//////359O/q5eDb1tDLxb+4samhlol3ZXOAiY+Ul5qcnqChoqOkpKWmpqenp6ioqP/////++fTv6+bh3NbRzMbAurStpp6XkIyMjpGVl5qcnp+hoqOjpKWlpqanp6ioqKn//////vn18Ovm4t3Y087Iw764sq2oo5+cmpqbnJ2en6ChoqOkpaWmpqenp6ioqKmp///////69fHs5+Pe2dTQy8bBvLizr6uopqSjoqKio6OjpKSlpaamp6enqKioqKmpqf//////+/by7enk39vW0s3JxcG8ubWyr62rqainp6empqenp6enp6ioqKioqampqan///////v38u7q5eHd2NTQzMjEwL26t7SysK6trKuqqampqampqampqampqampqaqq///////8+PPv6+bi3trW0s7Kx8PAvbq4tbOysK+urayrq6uqqqqqqqqqqqqqqqqqqv///////fj08Ozn49/b19TQzMnGw8C9uri2tLOxsK+uraysrKurq6qqqqqqqqqqqqr///////359fDs6OTg3NjV0c7Kx8TBv7y6uLa0s7Gwr66uraysrKurq6urq6urq6ur///////9+fXx7enl4d3Z1dLPy8jFwsC9u7m3tbSysbCvrq6traysrKurq6urq6urq////////vr18e3p5eHd2dbSz8zIxcPAvru5t7a0s7Gwr6+ura2srKysq6urq6urq6v///////769fHt6eXh3dnW0s/LyMXCwL27ube1tLKxsK+urq2trKysrKurq6urq6ur///////++vXx7enl4d3Z1dHOysfEwb68ure2tLOxsK+urq2trKysrKurq6urq6urq////////vr18e3o5ODc2NTQzMnFwr+8ure1tLKxsK+ura2srKyrq6urq6urq6urq6v///////759fDs6OPf29fSzsrHw7+8ube0srGvrq2srKurq6urq6urq6urq6urq6ur///////++fXw7Ofj3trV0czIxMC8uLWysK6sq6qqqqmpqamqqqqqqqqqq6urq6urq////////fn08Ovm4t3Y08/KxcC8t7OvrKqop6ampqamp6eoqKmpqaqqqqqqq6urq6v///////359O/r5uHc19LNx8K8t7Gsp6Ogn56foKGio6SlpqeoqKmpqaqqqqurq6ur///////9+fTv6uXg29bRy8W/ubKro5yVkZGTlpqcn6GipKWmp6ioqamqqqqrq6urq////////vn07+rl4NvW0MrEvrevppyPfWx5ho+VmZ2foaOkpqenqKmpqqqqq6urq6z///////759fDr5uHc1tHLxb+4sKiekoV7gImRlpqdoKKkpaanqKmpqqqqq6urrKys////////+vXw7Ofi3dfSzcfBu7Sup6Cbl5aYmpyfoaKkpaanqKmpqqqrq6urrKysrP////////v28e3o497Z1M/Kxb+6tbCrqKWjo6OjpKWmp6ioqamqqqurq6ysrKysrK3////////79/Lu6eTg29bSzcjEv7u3tLCurKuqqqmpqqqqqqurq6ysrKysrK2tra2t/////////Pjz7+rm4t3Z1NDMyMTAvbq3tLKxsK+ura2tra2tra2tra2tra2tra2trv////////359PDs6OPf29fTz8vIxMG+vLm3tbSzsrGwsK+vr6+urq6urq6urq6urq7////////++vbx7enl4d3Z1dLOy8fEwr+9u7m3trW0s7KxsbCwsK+vr6+vr6+vr6+u//////////v28u7q5uLe29fU0M3Kx8TCv727uri3trW0s7KysbGxsLCwsK+vr6+vr//////////79/Pv6+fj4NzY1dLPzMnGxMG/vbu6uLe2tbS0s7KysbGxsLCwsLCwr6///////////Pj08Ozo5ODd2dbT0M3Kx8XCwL69u7m4t7a1tLSzsrKysbGxsLCwsLCw//////////z49PDs6OTh3drW09DNysjFw8G/vbu6ube2tbW0s7OysrKxsbGxsLCwsP/////////9+PTw7Ojl4d3a1tPQzcrHxcLAvr27uri3trW1tLOzsrKysbGxsbGwsLD//////////fj08Ozo5ODd2dXSz8zJxsTBv728urm4t7a1tLSzs7KysrGxsbGxsbGw//////////349PDs6OTg3NjU0c3Kx8TCv728uri3trW1tLOzs7KysrKxsbGxsbGxsf/////////8+PTv6+fj39rW08/LyMXCv727ube2tbS0s7OysrKysbGxsbGxsbGxsbH//////////Pjz7+rm4t3Z1dDMyMTBvru5t7W0s7KysbGxsbGxsbGxsbGxsbGxsbGx//////////z48+7q5eDc19LOycXAvLi1s7Gwr66urq+vr6+wsLCwsLGxsbGxsbGxsf/////////89/Pu6eTf2tXQy8XAu7axraqpqKipqqusra2ur6+vsLCwsbGxsbGxsbH//////////Pfz7unk39nUzsjCu7Wtp6GdnJ6go6Wnqausra6ur7CwsLGxsbGxsbGx//////////z48+7p5N7Z083HwLiwppmKf4aRmJ6ipaiqq62urq+wsLCxsbGxsbKysv/////////9+PPu6eTf2dTOx8C5sKaZiXuEkJmeo6aoqqytrq+wsLGxsbGysrKysrL//////////vn07+rl4NvW0MrEvbavp6GdnZ+hpKepq6ytr6+wsbGxsrKysrKysrKy///////////69fHs5+Ld2NPOyMO9uLSwraurq6ytrq6vsLGxsrKys7Ozs7Ozs7Ozs///////////+/fy7unk4NvW0s3JxMC9ube1tLOysrKzs7Ozs7S0tLS0tLS0tLS0tLT///////////349PDr5+Pe2tbSzsrHw8C+vLq5uLe3t7a2tra2trW1tbW1tbW1tLS0///////////++vbx7enl4d3Z1tLPzMnGxMLAvr28u7q6ubm4uLe3t7e2tra2tbW1tf////////////v38+/r6OTg3dnW09DNysjGxMLBwL69vLy7urq5ubi4t7e3tra2trX////////////9+fXx7erm49/c2dbT0M7MycfGxMPBwL++vby7u7q6ubm4uLe3tra2/////////////vr28+/s6OXh3tvY1tPRzszKyMfFxMLBwL++vby7u7q5ubi4t7e3tv/////////////79/Tw7erm4+Dd2tjV09DOzMrJx8XEw8HAv769vLy7urq5uLi3t7f//////////////Pj18e7r6OXi39zZ19TS0M7MysjHxcTDwcC/vr28vLu6urm4uLe3//////////////359vLv7Onm4+Dd2tjV09HPzcvJyMbFw8LBwL++vby7u7q5ubi4t//////////////9+fbz7+zp5uPg3tvZ1tTS0M7MysjHxcTDwcC/vr28u7u6ubm4uLf//////////////fr28/Ds6ebj4d7b2dbU0tDOzMrJx8XEw8HAv769vLu7urm5uLe3//////////////359vPv7Onm4+De29nW1NLQzszKyMfFxMLBwL++vby7urq5uLi3t//////////////8+fXy7+zp5uPg3dvY1tPRz83LycjGxcPCwcC+vb28u7q5ubi3t7b//////////////Pj18e7r6OXi39za19XS0M7MysnHxcTCwcC/vr28u7q5ubi3t7a2/////////////vv39PDt6ufj4N7b2NbT0c/Ny8nHxsTDwcC/vr28u7q5ubi3t7a2tf////////////359vLv6+jl4t/c2dbU0c/Ny8nHxcTCwcC+vby7urq5uLi3tra1tbT////////////8+PTx7erm4+Dd2tfU0c/Ny8jHxcPCwL++vby7urm4t7e2trW1tLS0///////////++vby7+vn5ODd2tfU0c/MysjGxMLAv768u7q5ubi3tra1tbS0tLOzs////////////Pj08Ozp5eHe2tfU0c7LycbEwsC/vby7urm4t7a2tbW0tLOzs7KysrL///////////r28u7q5uLe2tfT0M3Kx8TCwL68u7m4t7a1tbS0s7OysrKysbGxsbGw//////////349PDr5+Pf29fTz8vIxcK/vbu5t7a1tLOysrKxsbGwsLCwsLCwr6+vr//////////79vLt6eTg29fSzsrGwr+8uba0s7Gwr6+vrq6urq6urq6urq6urq6urq7////////++fTv6+bh3NjTzsnFwLy4tLGurKuqqqmpqqqqqqurq6usrKysrKysra2t/////////Pfy7ejj3tnUz8nEv7m0r6qmpKKhoaKjo6SlpqenqKipqaqqqqurq6urrP////////r18Ovm4dvW0cvFv7myq6SemJSTlJeZm52foaKjpKWmp6eoqKmpqaqqqqv///////759O/p5N/Z1M7Iwbu0rKOZjoB3fIWMkZWZm52foKKjpKWlpqenqKioqamp///////99/Lt6OLd19LMxr+5samgloh2ZHJ/iI6TlpmbnZ+goaKjpKWlpqanp6ioqf///////Pbx7Ofh3NbRy8W/uLKqo5uTjIiIio6RlJaYmpydn6ChoqOjpKWlpqanp6j///////v28Ovm4NvW0MrFv7mzraeinZiVlJSUlZaYmZucnZ6foKGioqOkpKWmpqan///////69fDq5eDb1dDKxcC6tbCrpqKfnJqZmZmZmpqbnJ2en5+goaKio6SkpaWmpv//////+fTv6uXf2tXQysXAu7axramloqCenJubm5ubnJydnp6foKChoqKjpKSlpab//////vn07+nk39rVz8rFwLu2sq6qp6Shn52cnJubm5ycnZ2en5+goaGio6OkpKWl//////759O7p5N/Z1M/KxcC7trGtqaajoJ6dnJubm5ubnJydnZ6foKChoqKjo6Slpf/////++fPu6eTe2dTOycS+ubSwq6ejoJ6cmpmZmZmZmpubnJ2enp+goaGio6OkpKX//////vjz7unj3tnTzsjDvbiyraijn5uZl5aVlpaXmJmam5ucnZ6foKChoqKjpKSl//////748+7p497Y083Hwby2r6mjnZiTkI6Oj5GSlJaXmJqbnJ2en6CgoaKio6Skpf/////++fPu6ePe2NPNx8G7tK2mnpWMhICAg4iLj5KUlpiZm5ydnp+goaGio6OkpKX//////vn07+nk3tnTzcfBurSspJuQgmxHaHmCiY2RlJaYmpucnZ6foKGioqOjpKSl///////69O/q5d/a1M7Iwry1rqeelYp/eXuBh4yQk5WXmZucnZ6foKGhoqOjpKSlpf//////+vXw6+bg29XQysW/ubKspZ+Zk5CPj5GTlZeZmpudnp+foKGioqOjpKSlpab///////v28ezn4tzX0s3Hwr23sq2oo6Cdm5qampucnZ2en6CgoaKio6OkpKWlpaam///////89/Lt6OPe2dTPysXBvLezr6uopqSioaGgoKGhoaGioqOjpKSkpaWlpqamp////////fjz7url4NvW0s3JxMC8uLSxrqyqqKempaSkpKSkpKSkpaWlpaampqenp6f///////759PDr5uLd2NTQy8fDwLy5trOwrqyrqqmop6empqampqampqanp6enp6io////////+vXx7Ojj39rW0s7KxsK/vLm2tLKwrq2rqqqpqKioqKenp6enqKioqKioqf////////v28u3p5ODc19PPy8jEwb67uLa0srCvrayrq6qpqampqKioqKioqampqan////////89/Pu6uXh3djU0M3JxsK/vLq3tbOxsK+trKyrqqqqqampqampqampqaqq/////////Pjz7+rm4d3Z1dHNycbDwL26uLWzsrCvrq2srKurqqqqqqqqqqqqqqqqqv////////349O/r5uLd2dXRzcnGwr+8ube1s7Gwr66trKyrq6uqqqqqqqqqqqqrq6v////////++fTw6+bi3dnV0MzIxcG+u7i1s7Gwr66trKyrq6urq6urq6urq6urq6ur/////////vn18Ovm4t3Y1M/Lx8O/u7i1srCvraysq6urqqqqqqqrq6urq6urq6ysrP////////769fDr5uHd2NPOycTAu7e0sK6sqqqpqampqamqqqqqq6urq6usrKysrKz/////////+vXw6+bh3NfSzMfCvLeyraqnpaSkpKWmp6eoqamqqqurq6ysrKysra2t//////////v28ezm4dzW0cvFv7iyq6Sfm5qbnZ+ho6Wmp6ipqqqrq6ysrK2tra2trf/////////79vHs5+Lc1tHKxL21raOYi4OHj5WanqGkpqeoqaqrrKysra2trq6urq7//////////Pfy7ejj3dfSy8W+tq2ilYFsfYuUmp+ipKaoqaqrrKytra6urq6vr6+v//////////359O/p5N/Z1M7Iwbqzq6Ocl5eanaCjpaepqqusra2urq+vr6+vr7CwsP//////////+vXw6+bh3NfRzMbAu7WwrKmnp6eoqaqrrK2urq+vsLCwsLCwsLCxsbH///////////z38u3p5N/a1dDLx8K+ure0srGwsLCwsLCwsbGxsbGysrKysrKysrGx///////////9+fTw6+fi3tnV0czIxcG+vLq4t7a1tbS0tLS0tLS0s7Ozs7Ozs7Oysv////////////v28u7q5eHd2dXRzsvHxcLAvr27urm5uLe3t7a2trW1tbW0tLS0s7M="};var He={ghi_chu:"S\u1ED5 d\u1EEF li\u1EC7u c\u1EE7a trang toan/riemann. M\u1ED7i m\u1ED1c c\xF3 tr\u1EA1ng th\xE1i (tt) v\xE0 ngu\u1ED3n. tt: dinh-ly = \u0111\xE3 ch\u1EE9ng minh v\xE0 \u0111\u01B0\u1EE3c c\xF4ng nh\u1EADn; gia-thuyet = ph\u1ECFng \u0111o\xE1n; tinh-toan = ki\u1EC3m b\u1EB1ng m\xE1y t\xEDnh; y-tuong = ch\u01B0\u01A1ng tr\xECnh, \xFD t\u01B0\u1EDFng; tuyen-bo = tuy\xEAn b\u1ED1 ch\u01B0a qua b\xECnh duy\u1EC7t; hinh-thuc = \u0111\xE3 qua ki\u1EC3m h\xECnh th\u1EE9c (Lean) nh\u01B0ng ch\u01B0a c\xF3 b\u1EA3n ng\u01B0\u1EDDi \u0111\u1ECDc \u0111\u01B0\u1EE3c. C\u1ED9t 'tam' l\xE0 thang \u0111\u1ECBnh t\xEDnh 0\u201310 do trang \u0111\u1EB7t \u0111\u1EC3 v\u1EBD hai nh\xE1nh, kh\xF4ng ph\u1EA3i s\u1ED1 \u0111o.",nguon:{clay:["Vi\u1EC7n To\xE1n Clay, b\xE0i to\xE1n Thi\xEAn ni\xEAn k\u1EC9: gi\u1EA3 thuy\u1EBFt Riemann","https://www.claymath.org/millennium/riemann-hypothesis/"],bombieri:["E. Bombieri, m\xF4 t\u1EA3 ch\xEDnh th\u1EE9c b\xE0i to\xE1n (Clay)","https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf"],conrey:["J. B. Conrey, The Riemann Hypothesis, Notices of the AMS 50 (2003)","https://www.ams.org/notices/200303/fea-conrey-web.pdf"],wiki:["Wikipedia, Riemann hypothesis (b\u1EA3ng ki\u1EC3m s\u1ED1, t\u1EC9 l\u1EC7 kh\xF4ng \u0111i\u1EC3m, c\xE1c m\u1ED1c 2026), \u0111\u1ECDc 21/11/2026","https://en.wikipedia.org/wiki/Riemann_hypothesis"],przz:["Pratt, Robles, Zaharescu, Zeindler, More than five-twelfths of the zeros of \u03B6 are on the critical line (2020)","https://arxiv.org/abs/1802.10521"],pt:["Platt, Trudgian, The Riemann hypothesis is true up to 3\xB710\xB9\xB2 (2021)","https://arxiv.org/abs/2004.09765"],rt:["Rodgers, Tao, The de Bruijn\u2013Newman constant is non-negative (2020)","https://arxiv.org/abs/1801.05914"],a67:["Anthropic, b\xE0i nghi\xEAn c\u1EE9u v\u1EC1 t\u1EC9 l\u1EC7 kh\xF4ng \u0111i\u1EC3m 67,2 % (10/8/2026)","https://www.anthropic.com/research/riemann-zeta"],tc8:["TechCrunch, 11/8/2026: m\xF4 h\xECnh ch\u01B0a ph\xE1t h\xE0nh c\u1EE7a Anthropic v\xE0 gi\u1EA3 thuy\u1EBFt Riemann","https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/"],sciam8:["Scientific American, 8/2026: AI ch\u01B0a gi\u1EA3i b\xE0i to\xE1n h\xF3c b\xFAa nh\u1EA5t","https://scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math"],note:["L. Alp\xF6ge, ghi ch\xFA b\u1ED1n trang (20/11/2026)","https://alpo.ge/remark.pdf"],drew:["A. Sutherland (MIT), trang ki\u1EC3m b\u1EA3n Lean, c\u1EADp nh\u1EADt 20/11/2026 22:05 UTC","https://math.mit.edu/~drew/grh/"],ap:["AP qua Boston Globe, 21/11/2026","https://www.bostonglobe.com/2026/11/21/nation/anthropic-worker-solve-math-problems-ai-riemann-hypothesis/"],afp:["AFP qua TheJournal.ie, 21/11/2026","https://www.thejournal.ie/riemann-hypothesis-proved-by-ai-7233391-Nov2026/"],tc11:["TechCrunch, 20/11/2026: AI tuy\xEAn b\u1ED1 gi\u1EA3i, m\u1ED9t ng\u01B0\u1EDDi c\u0169ng v\u1EADy","https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/"],ie:["Interesting Engineering, 20/11/2026","https://interestingengineering.com/ai-robotics/anthropic-167-year-old-riemann-hypothesis-claude"],fello:["Fello AI, 20/11/2026: \u0111o kho Lean, d\xF2ng th\u1EDDi gian trong ng\xE0y","https://felloai.com/riemann-hypothesis-solved/"],dc:["DataCamp, 20/11/2026: hai ch\u1EE9ng minh trong m\u1ED9t ng\xE0y","https://www.datacamp.com/blog/ai-solved-riemann-hypothesis"],nature21:["Davies v\xE0 c\u1ED9ng s\u1EF1, Advancing mathematics by guiding human intuition with AI, Nature 600 (2021)","https://www.nature.com/articles/s41586-021-04086-x"],funsearch:["Romera-Paredes v\xE0 c\u1ED9ng s\u1EF1, Mathematical discoveries from program search with large language models, Nature 625 (2023)","https://www.nature.com/articles/s41586-023-06924-6"],imo24:["Google DeepMind, AlphaProof v\xE0 AlphaGeometry 2 \u0111\u1EA1t m\u1EE9c huy ch\u01B0\u01A1ng b\u1EA1c IMO (7/2024)","https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/"],imo25:["Google DeepMind, Gemini Deep Think \u0111\u1EA1t m\u1EE9c huy ch\u01B0\u01A1ng v\xE0ng IMO (7/2025)","https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"],lt:["Wikipedia, Logic Theorist","https://en.wikipedia.org/wiki/Logic_Theorist"],"4c":["Wikipedia, Four color theorem","https://en.wikipedia.org/wiki/Four_color_theorem"],robbins:["W. McCune, Solution of the Robbins Problem, J. Automated Reasoning 19 (1997)","https://doi.org/10.1023/A:1005843212881"]},moc:[{id:"euclid",nam:-300,nhanh:"so",nguoi:"Euclid",ten:"S\u1ED1 nguy\xEAn t\u1ED1 l\xE0 v\xF4 h\u1EA1n",y:"Gi\u1EA3 s\u1EED ch\u1EC9 c\xF3 h\u1EEFu h\u1EA1n s\u1ED1 nguy\xEAn t\u1ED1, nh\xE2n t\u1EA5t c\u1EA3 l\u1EA1i r\u1ED3i c\u1ED9ng 1 th\xEC \u0111\u01B0\u1EE3c m\u1ED9t s\u1ED1 kh\xF4ng chia h\u1EBFt cho s\u1ED1 n\xE0o trong \u0111\xF3. B\xE0i to\xE1n v\u1EC1 s\u1ED1 nguy\xEAn t\u1ED1 b\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\xE2y.",tt:"dinh-ly",tam:.6,src:["conrey"]},{id:"euler",nam:1737,nhanh:"gt",nguoi:"Leonhard Euler",ten:"T\xEDch Euler",y:"T\u1ED5ng 1/n\u02E2 tr\xEAn m\u1ECDi s\u1ED1 t\u1EF1 nhi\xEAn b\u1EB1ng t\xEDch 1/(1 \u2212 p\u207B\u02E2) tr\xEAn m\u1ECDi s\u1ED1 nguy\xEAn t\u1ED1. L\u1EA7n \u0111\u1EA7u gi\u1EA3i t\xEDch n\xF3i \u0111\u01B0\u1EE3c v\u1EC1 s\u1ED1 nguy\xEAn t\u1ED1.",tt:"dinh-ly",tam:1.6,src:["conrey","bombieri"]},{id:"gauss",nam:1792,nhanh:"so",nguoi:"Carl Friedrich Gauss",ten:"M\u1EADt \u0111\u1ED9 1/ln x",y:"\u0110\u1EBFm b\u1EA3ng s\u1ED1 nguy\xEAn t\u1ED1 n\u0103m 15 tu\u1ED5i, Gauss \u0111o\xE1n quanh x c\u1EE9 kho\u1EA3ng ln x s\u1ED1 th\xEC c\xF3 m\u1ED9t s\u1ED1 nguy\xEAn t\u1ED1, n\xEAn \u03C0(x) g\u1EA7n b\u1EB1ng Li(x).",tt:"gia-thuyet",tam:2.1,src:["conrey"]},{id:"dirichlet",nam:1837,nhanh:"gt",nguoi:"Peter Gustav Lejeune Dirichlet",ten:"H\xE0m L",y:"D\xF9ng chu\u1ED7i L(s, \u03C7) \u0111\u1EC3 ch\u1EE9ng minh m\u1ECDi c\u1EA5p s\u1ED1 c\u1ED9ng a + nq (a, q nguy\xEAn t\u1ED1 c\xF9ng nhau) ch\u1EE9a v\xF4 h\u1EA1n s\u1ED1 nguy\xEAn t\u1ED1. Gi\u1EA3 thuy\u1EBFt Riemann t\u1ED5ng qu\xE1t n\xF3i v\u1EC1 kh\xF4ng \u0111i\u1EC3m c\u1EE7a ch\xEDnh c\xE1c h\xE0m n\xE0y.",tt:"dinh-ly",tam:2.6,src:["conrey"]},{id:"chebyshev",nam:1850,nhanh:"so",nguoi:"Pafnuty Chebyshev",ten:"K\u1EB9p \u03C0(x) gi\u1EEFa hai h\u1EB1ng s\u1ED1",y:"Ch\u1EE9ng minh \u03C0(x) n\u1EB1m gi\u1EEFa hai b\u1ED9i c\u1EE7a x/ln x v\xE0 \u0111\u01B0a v\xE0o h\xE0m \u03C8(x), t\u1ED5ng ln p tr\xEAn c\xE1c lu\u1EF9 th\u1EEBa nguy\xEAn t\u1ED1, th\u1EE9 m\xE0 c\xF4ng th\u1EE9c t\u01B0\u1EDDng minh c\u1EE7a Riemann t\xEDnh \u0111\u01B0\u1EE3c.",tt:"dinh-ly",tam:3,src:["conrey"]},{id:"riemann",nam:1859,nhanh:"gt",nguoi:"Bernhard Riemann",ten:"B\xE0i b\xE1o t\xE1m trang",y:"K\xE9o \u03B6(s) ra to\xE0n m\u1EB7t ph\u1EB3ng ph\u1EE9c, t\xECm ph\u01B0\u01A1ng tr\xECnh h\xE0m, vi\u1EBFt \u03C0(x) th\xE0nh t\u1ED5ng tr\xEAn c\xE1c kh\xF4ng \u0111i\u1EC3m c\u1EE7a \u03B6, v\xE0 ghi ch\xFA r\u1EB1ng r\u1EA5t c\xF3 th\u1EC3 m\u1ECDi kh\xF4ng \u0111i\u1EC3m kh\xF4ng t\u1EA7m th\u01B0\u1EDDng \u0111\u1EC1u c\xF3 ph\u1EA7n th\u1EF1c \xBD.",tt:"gia-thuyet",tam:4.2,src:["clay","bombieri"]},{id:"pnt",nam:1896,nhanh:"gt",nguoi:"Hadamard \xB7 de la Vall\xE9e Poussin",ten:"\u0110\u1ECBnh l\xED s\u1ED1 nguy\xEAn t\u1ED1",y:"Ch\u1EE9ng minh \u03B6 kh\xF4ng c\xF3 kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng Re s = 1, \u0111\u1EE7 \u0111\u1EC3 suy ra \u03C0(x) ~ x/ln x. V\xF9ng kh\xF4ng c\xF3 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn: b\u1EE9c t\u01B0\u1EDDng th\xE0nh l\xF9i l\u1EA1i m\u1ED9t ch\xFAt.",tt:"dinh-ly",tam:5,src:["conrey","bombieri"]},{id:"hilbert",nam:1900,nhanh:"gt",nguoi:"David Hilbert",ten:"B\xE0i to\xE1n th\u1EE9 8",y:"\u0110\u01B0a gi\u1EA3 thuy\u1EBFt Riemann v\xE0o danh s\xE1ch 23 b\xE0i to\xE1n c\u1EE7a th\u1EBF k\u1EC9 \u1EDF \u0110\u1EA1i h\u1ED9i To\xE1n h\u1ECDc Paris.",tt:"y-tuong",tam:5.1,src:["conrey"]},{id:"koch",nam:1901,nhanh:"gt",nguoi:"Helge von Koch",ten:"Sai s\u1ED1 c\u1EE1 \u221Ax",y:"Gi\u1EA3 thuy\u1EBFt Riemann t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi vi\u1EC7c \u03C0(x) l\u1EC7ch kh\u1ECFi Li(x) kh\xF4ng qu\xE1 c\u1EE1 \u221Ax \xB7 ln x: s\u1ED1 nguy\xEAn t\u1ED1 ng\u1EABu nhi\xEAn v\u1EEBa \u0111\u1EE7, kh\xF4ng h\u01A1n.",tt:"dinh-ly",tam:5.2,src:["conrey"]},{id:"gram",nam:1903,nhanh:"may",nguoi:"J\xF8rgen Gram",ten:"15 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u",y:"T\xEDnh tay 15 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn, t\u1EA5t c\u1EA3 n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD.",tt:"tinh-toan",tam:5.2,so:15,src:["wiki"]},{id:"hardy",nam:1914,nhanh:"gt",nguoi:"G. H. Hardy",ten:"V\xF4 h\u1EA1n kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng",y:"Ch\u1EE9ng minh c\xF3 v\xF4 h\u1EA1n kh\xF4ng \u0111i\u1EC3m n\u1EB1m \u0111\xFAng tr\xEAn \u0111\u01B0\u1EDDng \xBD. V\xF4 h\u1EA1n, nh\u01B0ng ch\u01B0a bi\u1EBFt l\xE0 bao nhi\xEAu ph\u1EA7n.",tt:"dinh-ly",tam:5.6,tile:0,src:["wiki","conrey"]},{id:"polya",nam:1914,nhanh:"vl",nguoi:"Hilbert \xB7 P\xF3lya",ten:"Kh\xF4ng \u0111i\u1EC3m l\xE0 ph\u1ED5?",y:"\xDD t\u01B0\u1EDFng truy\u1EC1n mi\u1EC7ng: n\u1EBFu c\xE1c kh\xF4ng \u0111i\u1EC3m l\xE0 tr\u1ECB ri\xEAng c\u1EE7a m\u1ED9t to\xE1n t\u1EED t\u1EF1 li\xEAn h\u1EE3p th\xEC ch\xFAng bu\u1ED9c ph\u1EA3i th\u1EB3ng h\xE0ng. Ch\u01B0a ai t\xECm ra to\xE1n t\u1EED \u1EA5y.",tt:"y-tuong",tam:5.6,src:["wiki","conrey"]},{id:"artin",nam:1924,nhanh:"hh",nguoi:"Emil Artin",ten:"Zeta c\u1EE7a \u0111\u01B0\u1EDDng cong",y:"\u0110\u1ECBnh ngh\u0129a h\xE0m zeta cho \u0111\u01B0\u1EDDng cong tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n v\xE0 \u0111o\xE1n m\u1ED9t b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt Riemann \u1EDF \u0111\xF3. M\u1EDF m\u1EB7t tr\u1EADn h\xECnh h\u1ECDc.",tt:"gia-thuyet",tam:5.8,src:["wiki","bombieri"]},{id:"siegel",nam:1932,nhanh:"may",nguoi:"Carl Ludwig Siegel",ten:"C\xF4ng th\u1EE9c Riemann\u2013Siegel",y:"\u0110\u1ECDc b\u1EA3n nh\xE1p \u0111\u1EC3 l\u1EA1i c\u1EE7a Riemann v\xE0 t\xECm ra c\xF4ng th\u1EE9c \xF4ng d\xF9ng \u0111\u1EC3 t\xEDnh kh\xF4ng \u0111i\u1EC3m, v\u1EABn l\xE0 l\xF5i c\u1EE7a m\u1ECDi ph\xE9p ki\u1EC3m s\u1ED1 v\u1EC1 sau.",tt:"dinh-ly",tam:5.9,src:["wiki"]},{id:"hasse",nam:1933,nhanh:"hh",nguoi:"Helmut Hasse",ten:"\u0110\u01B0\u1EDDng cong elliptic",y:"Ch\u1EE9ng minh b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt cho \u0111\u01B0\u1EDDng cong gi\u1ED1ng 1 tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n.",tt:"dinh-ly",tam:6.1,src:["wiki"]},{id:"selberg",nam:1942,nhanh:"gt",nguoi:"Atle Selberg",ten:"M\u1ED9t t\u1EC9 l\u1EC7 d\u01B0\u01A1ng",y:"Ch\u1EE9ng minh m\u1ED9t t\u1EC9 l\u1EC7 d\u01B0\u01A1ng c\xE1c kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Con s\u1ED1 r\u1EA5t nh\u1ECF, nh\u01B0ng l\u1EA7n \u0111\u1EA7u l\xE0 m\u1ED9t ph\u1EA7n ch\u1EE9 kh\xF4ng ch\u1EC9 v\xF4 h\u1EA1n.",tt:"dinh-ly",tam:6.3,tile:.01,src:["wiki","conrey"]},{id:"weil",nam:1948,nhanh:"hh",nguoi:"Andr\xE9 Weil",ten:"M\u1ECDi \u0111\u01B0\u1EDDng cong",y:"Ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Riemann cho m\u1ECDi \u0111\u01B0\u1EDDng cong tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n, v\xE0 n\xEAu ti\xEAu chu\u1EA9n d\u01B0\u01A1ng: gi\u1EA3 thuy\u1EBFt g\u1ED1c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi m\u1ED9t d\u1EA1ng to\xE0n ph\u01B0\u01A1ng kh\xF4ng \xE2m.",tt:"dinh-ly",tam:6.8,src:["wiki","bombieri"]},{id:"turing",nam:1953,nhanh:"may",nguoi:"Alan Turing",ten:"M\xE1y t\xEDnh v\xE0o cu\u1ED9c",y:"D\xF9ng m\xE1y Manchester Mark 1 ki\u1EC3m 1 104 kh\xF4ng \u0111i\u1EC3m, l\u1EA7n \u0111\u1EA7u d\xF9ng m\xE1y t\xEDnh s\u1ED1, v\xE0 \u0111\u1EC3 l\u1EA1i ph\u01B0\u01A1ng ph\xE1p ch\u1EE9ng minh kh\xF4ng s\xF3t kh\xF4ng \u0111i\u1EC3m n\xE0o.",tt:"tinh-toan",tam:6.8,so:1104,src:["wiki"]},{id:"stepanov",nam:1969,nhanh:"hh",nguoi:"Sergei Stepanov",ten:"Ch\u1EE9ng minh s\u01A1 c\u1EA5p",y:"Ch\u1EE9ng minh l\u1EA1i \u0111\u1ECBnh l\xED c\u1EE7a Weil b\u1EB1ng c\xE1ch d\u1EF1ng m\u1ED9t \u0111a th\u1EE9c tri\u1EC7t ti\xEAu b\u1ED9i cao t\u1EA1i c\xE1c \u0111i\u1EC3m c\u1EA7n \u0111\u1EBFm. Ghi ch\xFA 2026 c\u1EE7a Alp\xF6ge n\xF3i l\u1EADp lu\u1EADn c\u1EE7a \xF4ng v\xE0 Claude \u0111i xu\u1ED1ng t\u1EEB ch\xEDnh ph\u01B0\u01A1ng ph\xE1p n\xE0y.",tt:"dinh-ly",tam:7,src:["note","bombieri"]},{id:"montgomery",nam:1973,nhanh:"vl",nguoi:"Hugh Montgomery \xB7 Freeman Dyson",ten:"Kh\xF4ng \u0111i\u1EC3m nh\u01B0 m\u1EE9c n\u0103ng l\u01B0\u1EE3ng",y:"Kho\u1EA3ng c\xE1ch gi\u1EEFa c\xE1c kh\xF4ng \u0111i\u1EC3m tu\xE2n c\xF9ng quy lu\u1EADt v\u1EDBi tr\u1ECB ri\xEAng c\u1EE7a ma tr\u1EADn Hermite ng\u1EABu nhi\xEAn, th\u1EE9 v\u1EADt l\xED h\u1EA1t nh\xE2n d\xF9ng cho m\u1EE9c n\u0103ng l\u01B0\u1EE3ng. Dyson nh\u1EADn ra c\xF4ng th\u1EE9c trong m\u1ED9t bu\u1ED5i tr\xE0 \u1EDF Princeton.",tt:"gia-thuyet",tam:7.1,src:["wiki","conrey"]},{id:"deligne",nam:1974,nhanh:"hh",nguoi:"Pierre Deligne",ten:"Gi\u1EA3 thuy\u1EBFt Weil",y:"Ch\u1EE9ng minh b\u1EA3n sao c\u1EE7a gi\u1EA3 thuy\u1EBFt Riemann cho m\u1ECDi \u0111a t\u1EA1p tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n. M\u1EB7t tr\u1EADn h\xECnh h\u1ECDc th\u1EAFng tr\u1ECDn; ch\u01B0a ai chuy\u1EC3n \u0111\u01B0\u1EE3c chi\u1EBFn th\u1EAFng \u1EA5y v\u1EC1 s\u1ED1 nguy\xEAn.",tt:"dinh-ly",tam:7.3,src:["wiki","bombieri"]},{id:"levinson",nam:1974,nhanh:"gt",nguoi:"Norman Levinson",ten:"H\u01A1n m\u1ED9t ph\u1EA7n ba",y:"\xCDt nh\u1EA5t 1/3 s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD.",tt:"dinh-ly",tam:7.3,tile:.3333,src:["wiki","conrey"]},{id:"brent",nam:1979,nhanh:"may",nguoi:"Richard Brent",ten:"81 tri\u1EC7u kh\xF4ng \u0111i\u1EC3m",y:"Ki\u1EC3m 81 000 001 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn.",tt:"tinh-toan",tam:7.3,so:81000001,src:["wiki"]},{id:"odlyzko",nam:1987,nhanh:"may",nguoi:"Andrew Odlyzko",ten:"Th\u1ED1ng k\xEA \u1EDF \u0111\u1ED9 cao 10\xB9\xB2",y:"T\xEDnh c\xE1c kh\xF4ng \u0111i\u1EC3m quanh \u0111\u1ED9 cao 10\xB9\xB2 v\xE0 th\u1EA5y kho\u1EA3ng c\xE1ch c\u1EE7a ch\xFAng kh\u1EDBp v\u1EDBi ph\u1ECFng \u0111o\xE1n ma tr\u1EADn ng\u1EABu nhi\xEAn c\u1EE7a Montgomery.",tt:"tinh-toan",tam:7.4,src:["wiki"]},{id:"conrey89",nam:1989,nhanh:"gt",nguoi:"Brian Conrey",ten:"H\u01A1n hai ph\u1EA7n n\u0103m",y:"\xCDt nh\u1EA5t 2/5 s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Con s\u1ED1 \u0111\u1EE9ng g\u1EA7n nh\u01B0 y\xEAn su\u1ED1t ba m\u01B0\u01A1i n\u0103m sau \u0111\xF3.",tt:"dinh-ly",tam:7.6,tile:.4,src:["wiki","conrey"]},{id:"clay",nam:2e3,nhanh:"gt",nguoi:"Vi\u1EC7n To\xE1n Clay",ten:"M\u1ED9t tri\u1EC7u \u0111\xF4 la",y:"B\u1EA3y b\xE0i to\xE1n Thi\xEAn ni\xEAn k\u1EC9, m\u1ED7i b\xE0i m\u1ED9t tri\u1EC7u \u0111\xF4 la. Lu\u1EADt: c\xF4ng b\u1ED1 \u1EDF n\u01A1i c\xF3 b\xECnh duy\u1EC7t, ch\u1EDD \xEDt nh\u1EA5t hai n\u0103m, \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng ch\u1EA5p nh\u1EADn.",tt:"y-tuong",tam:7.7,src:["clay"]},{id:"gourdon",nam:2004,nhanh:"may",nguoi:"Xavier Gourdon \xB7 Patrick Demichel",ten:"10\xB9\xB3 kh\xF4ng \u0111i\u1EC3m",y:"M\u01B0\u1EDDi ngh\xECn t\u1EC9 kh\xF4ng \u0111i\u1EC3m \u0111\u1EA7u ti\xEAn, kh\xF4ng m\u1ED9t ngo\u1EA1i l\u1EC7.",tt:"tinh-toan",tam:7.7,so:1e13,src:["wiki"]},{id:"lean",nam:2013,nhanh:"may",nguoi:"Leonardo de Moura v\xE0 c\u1ED9ng \u0111\u1ED3ng Mathlib",ten:"Lean",y:"M\u1ED9t ng\xF4n ng\u1EEF \u0111\u1EC3 vi\u1EBFt ch\u1EE9ng minh cho m\xE1y ki\u1EC3m t\u1EEBng b\u01B0\u1EDBc t\u1EEB ba ti\xEAn \u0111\u1EC1. Mathlib, th\u01B0 vi\u1EC7n to\xE1n chung, c\xF3 s\u1EB5n \u0111\u1ECBnh ngh\u0129a RiemannHypothesis m\xE0 b\u1EA3n ch\u1EE9ng minh 2026 nh\u1EAFm t\u1EDBi.",tt:"y-tuong",tam:7.8,src:["drew"]},{id:"rt",nam:2020,nhanh:"gt",nguoi:"Brad Rodgers \xB7 Terence Tao",ten:"H\u1EB1ng s\u1ED1 de Bruijn\u2013Newman \u2265 0",y:"Gi\u1EA3 thuy\u1EBFt Riemann t\u01B0\u01A1ng \u0111\u01B0\u01A1ng \u039B \u2264 0; Rodgers v\xE0 Tao ch\u1EE9ng minh \u039B \u2265 0. N\u1EBFu \u0111\xFAng th\xEC gi\u1EA3 thuy\u1EBFt ch\u1EC9 v\u1EEBa \u0111\u1EE7 \u0111\xFAng.",tt:"dinh-ly",tam:7.9,src:["rt","wiki"]},{id:"przz",nam:2020,nhanh:"gt",nguoi:"Pratt \xB7 Robles \xB7 Zaharescu \xB7 Zeindler",ten:"H\u01A1n 5/12",y:"\xCDt nh\u1EA5t 5/12 (41,6 %) s\u1ED1 kh\xF4ng \u0111i\u1EC3m n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD. Ba m\u01B0\u01A1i n\u0103m cho 1,6 \u0111i\u1EC3m ph\u1EA7n tr\u0103m.",tt:"dinh-ly",tam:8,tile:.4167,src:["przz","wiki"]},{id:"pt",nam:2021,nhanh:"may",nguoi:"David Platt \xB7 Tim Trudgian",ten:"\u0110\xFAng t\u1EDBi \u0111\u1ED9 cao 3\xB710\xB9\xB2",y:"Ch\u1EE9ng minh ch\u1EB7t ch\u1EBD r\u1EB1ng m\u1ECDi kh\xF4ng \u0111i\u1EC3m c\xF3 ph\u1EA7n \u1EA3o t\u1EDBi 3\xB710\xB9\xB2 \u0111\u1EC1u n\u1EB1m tr\xEAn \u0111\u01B0\u1EDDng \xBD (kho\u1EA3ng 1,2\xB710\xB9\xB3 kh\xF4ng \u0111i\u1EC3m).",tt:"tinh-toan",tam:8,so:12363e9,src:["pt","wiki"]},{id:"c67",nam:2026.61,ngay:"10/8/2026",nhanh:"ai",nguoi:"Claude (b\u1EA3n nghi\xEAn c\u1EE9u ch\u01B0a ph\xE1t h\xE0nh) \xB7 Alp\xF6ge, Furman ki\u1EC3m",ten:"67,2 %",y:"\u0110\u01B0\u1EE3c nh\u1EAFc th\u1EED s\u1EE9c th\u1EADt v\u1EDBi gi\u1EA3 thuy\u1EBFt, Claude th\u1EA5t b\u1EA1i v\u1EDBi kho\u1EA3ng 650 \xFD t\u01B0\u1EDFng r\u1ED3i r\u1EBD sang b\xE0i to\xE1n t\u1EC9 l\u1EC7: gh\xE9p k\u1EBFt qu\u1EA3 c\u1EE7a Aryan, c\u1EE7a Baluyot\u2013Goldston\u2013Suriajaya\u2013Turnage-Butterbaugh v\u1EDBi m\u1ED9t b\xE0i c\u1EE7a Bombieri n\u0103m 2000 quanh d\u1EA1ng to\xE0n ph\u01B0\u01A1ng Weil, n\xE2ng c\u1EADn d\u01B0\u1EDBi t\u1EEB 41,6 % l\xEAn 67,2 %. Kho\u1EA3ng 60 t\xE1c t\u1EED con, 31 tri\u1EC7u token, c\xF3 b\u1EA3n Lean. Ch\u01B0a ph\u1EA3i gi\u1EA3 thuy\u1EBFt Riemann.",tt:"hinh-thuc",tam:9,tile:.672,src:["a67","tc8","sciam8"]},{id:"quasi",nam:2026.75,ngay:"9\u201310/2026",nhanh:"ai",nguoi:"OpenAI",ten:"T\u1EF1a gi\u1EA3 thuy\u1EBFt Riemann",y:"Hai b\u1EA3n th\u1EA3o tuy\xEAn b\u1ED1 m\u1ECDi kh\xF4ng \u0111i\u1EC3m n\u1EB1m trong d\u1EA3i ph\u1EA7n th\u1EF1c t\u1EEB 1/8 t\u1EDBi 7/8 (\u0111\xE3 ki\u1EC3m b\u1EB1ng Lean), r\u1ED3i t\u1EEB 1/12 t\u1EDBi 11/12. D\u1EA3i t\u1EDBi h\u1EA1n l\u1EA7n \u0111\u1EA7u b\u1ECB thu h\u1EB9p.",tt:"tuyen-bo",tam:9.4,src:["wiki"]},{id:"rh26",nam:2026.887,ngay:"20/11/2026",nhanh:"ai",nguoi:"Levent Alp\xF6ge \xB7 Claude",ten:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh",y:"Ghi ch\xFA b\u1ED1n trang v\xE0 m\u1ED9t kho Lean 17,4 tri\u1EC7u d\xF2ng: gi\u1EA3 thuy\u1EBFt Riemann v\xE0 b\u1EA3n t\u1ED5ng qu\xE1t cho h\xE0m L Dirichlet. L\u1EADp lu\u1EADn \u0111i xu\u1ED1ng t\u1EEB ph\u01B0\u01A1ng ph\xE1p Stepanov, qua t\u1ED5ng von Mangoldt, c\xF4ng th\u1EE9c Guinand\u2013Weil v\xE0 m\u1ED9t chu\u1ED7i d\xE0i n\xE2ng theta tr\xEAn c\xE1c nh\xF3m unita. Trong m\u1ED9t ng\xE0y, nhi\u1EC1u b\u1ED9 ki\u1EC3m \u0111\u1ED9c l\u1EADp ch\u1EA5p nh\u1EADn kho Lean. Ch\u01B0a c\xF3 b\u1EA3n ng\u01B0\u1EDDi \u0111\u1ECDc \u0111\u01B0\u1EE3c; Clay ch\u01B0a c\xF4ng nh\u1EADn.",tt:"hinh-thuc",tam:10,tile:1,src:["note","drew","ap","afp","tc11"]},{id:"masullo",nam:2026.889,ngay:"20/11/2026",nhanh:"gt",nguoi:"Alessandro Masullo (Stanford)",ten:"B\u1EA3n ch\u1EE9ng minh thu\u1EA7n ng\u01B0\u1EDDi",y:"V\xE0i gi\u1EDD sau, Ravi Vakil c\xF4ng b\u1ED1 b\u1EA3n th\u1EA3o c\u1EE7a nghi\xEAn c\u1EE9u vi\xEAn Alessandro Masullo: gi\u1EA3 thuy\u1EBFt Riemann t\u1ED5ng qu\xE1t, kh\xF4ng d\xF9ng AI, k\u1EBFt qu\u1EA3 m\u01B0\u1EDDi hai n\u0103m l\xE0m vi\u1EC7c, \u0111\xE3 \u0111\u01B0\u1EE3c Brian Conrad \u0111\u1ECDc k\u0129 nhi\u1EC1u th\xE1ng. Ch\u01B0a vi\u1EBFt trong Lean, ch\u01B0a \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ED9c l\u1EADp.",tt:"tuyen-bo",tam:10,src:["tc11","dc","afp"]}],noi:[["euclid","euler"],["euler","riemann"],["gauss","riemann"],["dirichlet","riemann"],["chebyshev","riemann"],["gauss","pnt"],["riemann","pnt"],["riemann","hilbert"],["riemann","koch"],["riemann","gram"],["riemann","siegel"],["riemann","hardy"],["hardy","selberg"],["selberg","levinson"],["levinson","conrey89"],["conrey89","przz"],["przz","c67"],["hilbert","polya"],["polya","montgomery"],["montgomery","odlyzko"],["montgomery","c67"],["riemann","artin"],["artin","hasse"],["hasse","weil"],["weil","stepanov"],["weil","deligne"],["weil","c67"],["stepanov","rh26"],["gram","turing"],["siegel","turing"],["turing","brent"],["brent","odlyzko"],["odlyzko","gourdon"],["gourdon","pt"],["turing","lean"],["lean","c67"],["lean","rh26"],["c67","rh26"],["dirichlet","rh26"],["clay","rh26"],["rt","przz"],["quasi","rh26"],["deligne","masullo"],["dirichlet","masullo"],["pnt","hardy"]],ai:[{nam:1956,ten:"Logic Theorist ch\u1EE9ng minh 38 \u0111\u1ECBnh l\xED c\u1EE7a Principia Mathematica",tam:.8,src:["lt"]},{nam:1976,ten:"\u0110\u1ECBnh l\xED b\u1ED1n m\xE0u: ng\u01B0\u1EDDi ch\u1EE9ng minh, m\xE1y ki\u1EC3m 1 936 tr\u01B0\u1EDDng h\u1EE3p",tam:1.4,src:["4c"]},{nam:1996,ten:"EQP t\u1EF1 ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Robbins, m\u1EDF t\u1EEB 1933",tam:2.2,src:["robbins"]},{nam:2021,ten:"DeepMind: AI g\u1EE3i tr\u1EF1c gi\xE1c cho l\xED thuy\u1EBFt n\xFAt v\xE0 bi\u1EC3u di\u1EC5n",tam:3.4,src:["nature21"]},{nam:2023.9,ten:"FunSearch: m\xF4 h\xECnh ng\xF4n ng\u1EEF t\xECm c\u1EA5u tr\xFAc m\u1EDBi cho b\xE0i to\xE1n cap set",tam:4.4,src:["funsearch"]},{nam:2024.55,ten:"AlphaProof: m\u1EE9c huy ch\u01B0\u01A1ng b\u1EA1c Olympic To\xE1n qu\u1ED1c t\u1EBF",tam:5.6,src:["imo24"]},{nam:2025.55,ten:"M\u1EE9c huy ch\u01B0\u01A1ng v\xE0ng Olympic To\xE1n qu\u1ED1c t\u1EBF",tam:6.8,src:["imo25"]},{nam:2026.05,ten:"C\xE1c m\xF4 h\xECnh gi\u1EA3i nhi\u1EC1u b\xE0i to\xE1n m\u1EDF c\u1EE7a Erd\u0151s",tam:7.8,src:["tc8"]},{nam:2026.58,ten:"Claude t\xECm ph\u1EA3n v\xED d\u1EE5 cho gi\u1EA3 thuy\u1EBFt Jacobi",tam:8.6,src:["tc8","fello"]},{nam:2026.61,ten:"67,2 % kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng t\u1EDBi h\u1EA1n",tam:9,src:["a67"]},{nam:2026.69,ten:"OpenAI tuy\xEAn b\u1ED1 gi\u1EA3i b\xE0i to\xE1n Navier\u2013Stokes",tam:9.5,src:["afp"]},{nam:2026.887,ten:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh gi\u1EA3 thuy\u1EBFt Riemann",tam:10,src:["note"]}],buoc41:[["6/10","\u0110\u1ECBnh th\u1EE9c Stepanov"],["6/10","Th\xE1p Iwasawa, ph\u1ECFng theo nguy\xEAn l\xED chu\u1ED3ng b\u1ED3 c\xE2u tr\xEAn tr\u01B0\u1EDDng h\u1EEFu h\u1EA1n"],["6/10","B\u1EA5t \u0111\u1EB3ng th\u1EE9c \u0111\u1ED9 d\u1ED1c Bost"],["6/10","T\xEDnh kh\xF4ng \xE2m c\u1EE7a W qua m\u1ED9t \u0111\u1ECBnh th\u1EE9c: Stepanov v\u1EDBi b\u1ED9i m\u1ED9t"],["8/10","\xC1p W v\xE0o h\xE0m ch\u1EC9 th\u1ECB tr\xEAn (0, 1], \u0111\u01B0\u1EE3c c\u1EADn l\u1EDBn h\u01A1n 1 \u2212 \u03B7"],["9/10","M\u1ED9t \u0111\u1EA1i l\u01B0\u1EE3ng ki\u1EC3u \u0111\u1EA1o h\xE0m tri\u1EC7t ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng cong CM t\u1EA1i c\xE1c s\u1ED1 nguy\xEAn t\u1ED1 tr\u01A1"],["14/10","\u0110\u1ECBnh th\u1EE9c ch\u1EE9a chu k\xEC Gan\u2013Gross\u2013Prasad, gi\xE1 tr\u1ECB 0 ho\u1EB7c 1"],["14/10","C\xF4ng th\u1EE9c v\u1EBFt t\u01B0\u01A1ng \u0111\u1ED1i; Cauchy\u2013Schwarz \u0111\u01B0a v\u1EC1 chu\u1EA9n c\u1EE7a chu\u1ED7i Poincar\xE9"],["19/10","Vi\u1EBFt q\u1D3A = M\u1D4F + R; t\xECm t\xEDnh t\u1EF1 \u0111\u1EB3ng c\u1EA5u qua h\xE0m theta tr\xEAn ph\u1EE7 s\xE1u l\u1EDBp c\u1EE7a GL\u2085"],["19/10","Ch\u1ECDn th\xE1p Iwasawa (t\xE1c gi\u1EA3 ghi: c\xF3 l\u1EBD kh\xF4ng c\u1EA7n)"],["20/10","\u0110\u1ED5i sang t\u1ED5ng von Mangoldt c\xF3 tr\u1ECDng s\u1ED1; d\u1EA5u l\u1EA5y t\u1EEB c\xF4ng th\u1EE9c Guinand\u2013Weil"],["15/11","Chu\u1ED7i n\xE2ng theta gi\u1EEFa c\xE1c nh\xF3m unita x\xE1c \u0111\u1ECBnh ho\xE0n to\xE0n; m\u1ED7i l\u1EA7n n\xE2ng th\xEAm m\u1ED9t b\u1ED9i; \u0111\u1ED9 d\xE0i chu\u1ED7i m \u2248 \u221AX (Claude \u0111\u1EC1 xu\u1EA5t)"],["15/11","Chu\u1EA9n v\xE0 m\u1EE9c c\u1EE7a c\xE1c n\xE2ng; tri\u1EC7t ti\xEAu s\u1ED1 h\u1EA1ng b\u1EADc m b\u1EB1ng Chowla\u2013Selberg, Weyl, Siegel"],["15/11","C\u1EADn d\u01B0\u1EDBi \u0111\u1EE7 m\u1EA1nh cho t\xEDnh chia h\u1EBFt c\u1EE7a n\xE2ng m l\u1EA7n"],["15/11","Seesaw: chu k\xEC c\u1EE7a n\xE2ng l\u1EB7p l\xE0 chu k\xEC Bessel (Rallis)"],["15/11","Gi\xE1 c\u1EE7a m\u1ED7i l\u1EA7n n\xE2ng"],["15/11","D\xE1n c\u1EA5u tr\xFAc nguy\xEAn qua c\xE1c \u0111\u1EB7c tr\u01B0ng Hecke \u0111\u1EC3 c\xF3 th\xEAm ph\xE9p l\u1EA5y trung b\xECnh"],["15/11","M\u1ED9t d\u1EA1ng y\u1EBFu c\u1EE7a gi\u1EA3 thuy\u1EBFt Vandiver cho c\xE1c l\u1EDBp H\xB9"],["15/11","\u0110\u1ED1i th\u1EC3 t\xEDch, ch\u1EC9 s\u1ED1 chu\u1ED7i theta, \u0111\u1ED3ng d\u01B0 gi\u1EEFa c\xE1c n\xE2ng"],["16/11","GRH"]],kiem:[["Bi\xEAn d\u1ECBch 175 187 m\xF4-\u0111un (Lean 4.33.1, Mathlib 4.33.1)","0 l\u1ED7i"],["Ti\xEAn \u0111\u1EC1 c\u1EE7a n\u0103m \u0111\u1ECBnh l\xED","propext, Classical.choice, Quot.sound"],["Ph\xE1t l\u1EA1i b\u1EB1ng nh\xE2n Lean (leanchecker)","175 187 / 175 187"],["nanoda (nh\xE2n vi\u1EBFt b\u1EB1ng Rust)","ch\u1EA5p nh\u1EADn \xB7 27 ph\xFAt 42 gi\xE2y, 80 lu\u1ED3ng"],["con-leche","1 468 418 khai b\xE1o"],["lean4lean, t\u1EEBng m\xF4-\u0111un","175 187 / 175 187"],["Ph\xE1t bi\u1EC3u","RiemannHypothesis c\u1EE7a Mathlib"],["Nh\xE2n Lean m\u1EB7c \u0111\u1ECBnh v\xE0 ch\u1EBF \u0111\u1ED9 k\u0129, lake comparator","c\xF2n \u0111ang ch\u1EA1y l\xFAc 22:05 UTC"]]};var se=(i,t=document)=>t.querySelector(i),Ho=(i,t=document)=>[...t.querySelectorAll(i)],hn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Jt=(i,t,e)=>i+(t-i)*e,Je=i=>i*i*(3-2*i),Oe=(i,t,e)=>hn((i-t)/(e-t)),bn=(i,t=0)=>i.toLocaleString("vi-VN",{minimumFractionDigits:t,maximumFractionDigits:t}),It={ink:16052714,dim:5921378,amber:14262373,sig:13380179,blue:7314392,green:8369546,violet:10848982,bg:131587},zo={so:{z:-7,c:It.ink,n:"S\u1ED1 h\u1ECDc"},gt:{z:-2.5,c:It.amber,n:"Gi\u1EA3i t\xEDch"},hh:{z:2,c:It.blue,n:"H\xECnh h\u1ECDc"},may:{z:6.5,c:It.green,n:"T\xEDnh to\xE1n v\xE0 m\xE1y"},vl:{z:10.5,c:It.violet,n:"V\u1EADt l\xED"},ai:{z:2,c:It.sig,n:"AI v\xE0 ng\u01B0\u1EDDi"}},b0={"dinh-ly":"\u0110\u1ECBnh l\xED","gia-thuyet":"Ph\u1ECFng \u0111o\xE1n","tinh-toan":"Ki\u1EC3m b\u1EB1ng m\xE1y t\xEDnh","y-tuong":"\xDD t\u01B0\u1EDFng, ch\u01B0\u01A1ng tr\xECnh","tuyen-bo":"Tuy\xEAn b\u1ED1, ch\u01B0a ki\u1EC3m \u0111\u1ED9c l\u1EADp","hinh-thuc":"\u0110\xE3 qua m\xE1y ki\u1EC3m (Lean)"},bh=matchMedia("(max-width: 760px)").matches,M0=matchMedia("(prefers-reduced-motion: reduce)").matches,_r=se("#gl"),gs=new Ro({canvas:_r,antialias:!bh,powerPreference:"high-performance"});gs.setPixelRatio(Math.min(devicePixelRatio,bh?1.5:2));gs.setClearColor(It.bg);gs.toneMapping=Ei;gs.toneMappingExposure=1.05;var vs=new Is;vs.fog=new Ps(It.bg,.012);var Se=new Be(40,1,.1,600);vs.add(new Xs(16777215,.35));var Mh=new Ks(16777215,1.2);Mh.position.set(6,12,8);vs.add(Mh);var Sr=new Oo(gs);Sr.addPass(new qo(vs,Se));var Sh=new fs(new pt(1,1),.85,.7,.18);Sr.addPass(Sh);Sr.addPass(new Uo);function wh(){let i=innerWidth,t=innerHeight;gs.setSize(i,t,!1),Sr.setSize(i,t),Se.aspect=i/t,Se.fov=i<t?58:40,Se.updateProjectionMatrix()}addEventListener("resize",wh);wh();var sn=(i,t=1)=>new Bn({color:i,transparent:!0,opacity:t}),br=(i,t=1)=>new ts({color:i,transparent:!0,opacity:t}),Ae=(i,t,e=1)=>new ii(new te().setFromPoints(i),br(t,e)),Ft=(i,t,e)=>new R(i,t,e),S0=se("#labels"),dc=new Map,fc=new Set;function Pe(i,t,e,n=""){let s=e.clone().project(Se);if(s.z>1||Math.abs(s.x)>1.05||Math.abs(s.y)>1.05)return;let r=dc.get(i);r||(r=document.createElement("div"),r.className="lb",S0.appendChild(r),dc.set(i,r)),r._h!==t&&(r.innerHTML=t,r._h=t),r.className="lb "+n,r.style.transform=`translate(${((s.x+1)/2*innerWidth).toFixed(1)}px, ${((1-s.y)/2*innerHeight).toFixed(1)}px)`,r.style.opacity=1,fc.add(i)}function w0(){for(let[i,t]of dc)fc.has(i)||(t.style.opacity=0);fc=new Set}var Bo=i=>{if(i<2)return!1;for(let t=2;t*t<=i;t++)if(i%t===0)return!1;return!0},ms=ge.zeros,Th=(()=>{let i=[];for(let t=2;t<=110;t++)for(let e=2;e<=t;e++){if(!Bo(e))continue;let n=e;for(;n<t;)n*=e;if(n===t){i.push([t,Math.log(e)]);break}}return i})(),Go=i=>Th.reduce((t,[e,n])=>t+(e<=i?n:0),0),ko=(i,t)=>{let e=Math.log(i),n=Math.sqrt(i),s=0;for(let r=0;r<t;r++){let a=ms[r];s+=(.5*Math.cos(a*e)+a*Math.sin(a*e))/(.25+a*a)}return i-2*n*s-Math.log(2*Math.PI)-.5*Math.log(1-1/(i*i))};function T0(){let i=new Ge,t=600,e=[],n=[],s=[];for(let a=1;a<=t;a++){let o=a*.42;(Bo(a)?e:n).push(o,0,0),Bo(a)&&s.push(o,0,0,o,.5+.9*Math.random()**0,0)}let r=(a,o,l,c)=>new si(new te().setAttribute("position",new Gt(a,3)),new Gn({color:o,size:l,transparent:!0,opacity:c,sizeAttenuation:!0}));return i.add(r(n,It.dim,.07,.9),r(e,It.amber,.2,1)),i.add(new es(new te().setAttribute("position",new Gt(s,3)),br(It.amber,.55))),i.add(Ae([Ft(0,0,0),Ft(t*.42,0,0)],It.dim,.35)),{g:i,update(a,o){let l=Jt(2,60,Je(a));Se.position.set(l-6,1.1+2.2*a,5.2-1.5*a),Se.lookAt(l+9,.3,0);for(let c of[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149]){let h=c*.42;h>l-4&&h<l+16&&Pe("p"+c,String(c),Ft(h,1.55,0),"num")}}}}var Ri={N:0,auto:!0};function E0(){let i=new Ge,t=2,e=100,n=.3,s=.3,r=900,a=(m,f,T=0)=>Ft((m-50)*n,f*s-15,T),o=[],l=Go(t-.001);o.push(a(t,l));for(let[m,f]of Th){if(m>e)break;o.push(a(m,l)),l+=f,o.push(a(m,l))}o.push(a(e,l)),i.add(Ae(o,It.ink,.95)),i.add(Ae([a(t,t),a(e,e)],It.dim,.5)),i.add(Ae([a(0,0),a(e+2,0)],It.dim,.4),Ae([a(0,0),a(0,104)],It.dim,.4));let c=new te().setAttribute("position",new Gt(new Float32Array(r*3),3)),h=new ii(c,br(It.amber,1));i.add(h);let d=new te().setAttribute("position",new Gt(new Float32Array(r*3),3)),u=new ii(d,br(It.sig,.85));i.add(u);let p=[];for(let m=2;m<=e;m++)Bo(m)&&p.push(a(m,0));i.add(new si(new te().setFromPoints(p),new Gn({color:It.amber,size:.32})));let g=-1,y=m=>{let f=c.attributes.position.array,T=d.attributes.position.array;for(let C=0;C<r;C++){let b=t+(e-t)*C/(r-1),M=a(b,ko(b,m));f[C*3]=M.x,f[C*3+1]=M.y,f[C*3+2]=.02;let S=ms[Math.max(0,m-1)],E=Math.log(b),x=a(b*.55,m?-2*Math.sqrt(b)*(.5*Math.cos(S*E)+S*Math.sin(S*E))/(.25+S*S)*6+84:84);T[C*3]=x.x,T[C*3+1]=x.y,T[C*3+2]=0}c.attributes.position.needsUpdate=d.attributes.position.needsUpdate=!0};return{g:i,update(m){Ri.auto&&(Ri.N=Math.round(200*Je(Oe(m,.22,.86))**2.2)),Ri.N!==g&&(g=Ri.N,y(g),A0(g));let f=Je(Oe(m,0,.25));Se.position.set(Jt(-6,1,f),Jt(-4,0,f),Jt(36,54,f)*(innerWidth<innerHeight?1.7:1)),Se.lookAt(1,-2.5,0),Pe("ax","x",a(101,-3),"mono"),Pe("psi","\u03C8(x): b\u1EADc thang th\u1EADt",a(84,Go(84)+9),"mono"),Pe("apx",`c\xF4ng th\u1EE9c t\u01B0\u1EDDng minh \xB7 ${g} c\u1EB7p kh\xF4ng \u0111i\u1EC3m`,a(52,ko(52,g)-9),"mono am"),g&&Pe("wav",`s\xF3ng th\u1EE9 ${g}: \u03B3 = ${bn(ms[g-1],4)} (ph\xF3ng 6 l\u1EA7n)`,a(57,84),"mono sg")}}}function A0(i){let t=se("#a1n");if(t){t.value=i,se("#a1v").textContent=`${i} c\u1EB7p kh\xF4ng \u0111i\u1EC3m`;let e=0,n=0;for(let s=10;s<=100;s+=.37)e+=Math.abs(ko(s,i)-Go(s)),n++;se("#a1e").textContent=`sai l\u1EC7ch trung b\xECnh ${bn(e/n,2)}`}}function C0(){let i=new Ge,{ns:t,nt:e}=ge,n=Uint8Array.from(atob(ge.grid),E=>E.charCodeAt(0)),s=14,r=110,a=5.2,o=E=>((E-ge.s[0])/(ge.s[1]-ge.s[0])-.5)*s,l=E=>-(E/ge.t[1])*r,c=(E,x)=>n[x*t+E]/255*a,h=(E,x)=>{let w=hn((E-ge.s[0])/(ge.s[1]-ge.s[0]))*(t-1),L=hn(x/ge.t[1])*(e-1),O=Math.min(t-2,w|0),q=Math.min(e-2,L|0),F=w-O,I=L-q;return Jt(Jt(c(O,q),c(O+1,q),F),Jt(c(O,q+1),c(O+1,q+1),F),I)},d=new Float32Array(t*e*3),u=new Float32Array(t*e*3),p=[],g=new Rt(3803672),y=new Rt(1381916),m=new Rt(9211804),f=new Rt;for(let E=0;E<e;E++)for(let x=0;x<t;x++){let w=E*t+x,L=n[w]/255;d.set([o(ge.s[0]+(ge.s[1]-ge.s[0])*x/(t-1)),L*a,l(ge.t[1]*E/(e-1))],w*3),L<.5?f.lerpColors(g,y,L/.5):f.lerpColors(y,m,(L-.5)/.5),u.set([f.r,f.g,f.b],w*3)}for(let E=0;E<e-1;E++)for(let x=0;x<t-1;x++){let w=E*t+x;p.push(w,w+t,w+1,w+1,w+t,w+t+1)}let T=new te;T.setAttribute("position",new We(d,3)),T.setAttribute("color",new We(u,3)),T.setIndex(p),T.computeVertexNormals(),i.add(new ne(T,new ks({vertexColors:!0,roughness:.62,metalness:.25,side:ln})));let C=[];for(let E=0;E<e;E+=8)for(let x=0;x<t-1;x++){let w=(E*t+x)*3;C.push(d[w],d[w+1]+.02,d[w+2],d[w+3],d[w+4]+.02,d[w+5])}i.add(new es(new te().setAttribute("position",new Gt(C,3)),br(It.ink,.1)));let b=[];for(let E=0;E<e;E++){let x=ge.t[1]*E/(e-1);b.push(Ft(o(.5),h(.5,x)+.05,l(x)))}i.add(Ae(b,It.amber,1));for(let E of[0,1]){let x=[];for(let w=0;w<e;w+=2){let L=ge.t[1]*w/(e-1);x.push(Ft(o(E),h(E,L)+.04,l(L)))}i.add(Ae(x,It.ink,.35))}let M=ms.filter(E=>E<ge.t[1]-1),S=[];for(let E of M){let x=new ne(new Hn(.16,16,12),sn(It.sig));x.position.set(o(.5),.12,l(E)),i.add(x);let w=new ne(new Fs(.02,.02,7,6),sn(It.sig,.5));w.position.set(o(.5),3.6,l(E)),i.add(w),S.push(w)}return{g:i,update(E,x){let w=Je(Oe(E,.08,.92)),L=Jt(-4,62,w),O=Je(Oe(E,.8,1));Se.position.set(o(.5)+Jt(-9,1.6,Je(Oe(E,0,.3)))+5*O,Jt(11,5.2,Je(Oe(E,0,.32)))+16*O,l(L)+Jt(22,14,Oe(E,0,.3))),Se.lookAt(o(.5),1.2,l(L+13-6*O)),S.forEach((q,F)=>{q.material.opacity=.32+.25*Math.sin(x*1.6+F)}),M.forEach((q,F)=>{Math.abs(q-L-8)<12&&Pe("z"+F,F<3?`\u03C1${"\u2081\u2082\u2083"[F]} = \xBD + ${bn(q,4)}i`:`${bn(q,2)}`,Ft(o(.5),7.3,l(q)),"mono sg")}),L<14&&Pe("pole","c\u1EF1c t\u1EA1i s = 1",Ft(o(1),a+.6,l(0)),"mono"),Pe("cl","\u0111\u01B0\u1EDDng t\u1EDBi h\u1EA1n Re s = \xBD",Ft(o(.5),h(.5,L+16)+1.2,l(L+16)),"mono am"),Pe("s0","Re s = 0",Ft(o(0),h(0,L+10)+.5,l(L+10)),"mono"),Pe("s1","Re s = 1",Ft(o(1),h(1,L+10)+.5,l(L+10)),"mono")}}}var In=[[-300,0],[1700,5],[1850,15],[1900,27],[1950,44],[2e3,60],[2020,70],[2026,76],[2027,92]],Fo=i=>{for(let t=1;t<In.length;t++)if(i<=In[t][0]){let[e,n]=In[t-1],[s,r]=In[t];return Jt(n,r,hn((i-e)/(s-e)))}return In.at(-1)[1]},L0=i=>{for(let t=1;t<In.length;t++)if(i<=In[t][1]){let[e,n]=In[t-1],[s,r]=In[t];return Jt(e,s,hn((i-n)/(r-n)))}return In.at(-1)[0]},yr=He.moc.map((i,t)=>({...i,i:t})),hc=Object.fromEntries(yr.map(i=>[i.id,i])),ps={pin:null,cur:null,year:-300};function R0(){let i=new Ge,t=95;for(let[u,p]of Object.entries(zo))u!=="ai"&&i.add(Ae([Ft(0,0,p.z),Ft(t-6,0,p.z)],p.c,.16));for(let u of[1700,1800,1850,1900,1950,2e3,2020,2026])i.add(Ae([Ft(Fo(u),0,-9),Ft(Fo(u),0,12.5)],It.dim,.3));let e={};for(let u of yr){let p=zo[u.nhanh],g=u.nhanh+Math.round(Fo(u.nam));e[g]=(e[g]||0)+1;let y=.8+u.tam*.42;u.p=Ft(Fo(u.nam)+(e[g]-1)*.9,0,p.z+(e[g]-1)*1.2+(u.id==="masullo"?-3.5:0)),u.top=u.p.clone().setY(y),u.mesh=new ne(new kn(.09,y,.09),sn(p.c,.2)),u.mesh.position.copy(u.p).setY(y/2),u.mesh.userData.m=u,i.add(u.mesh),u.dot=new ne(new Hn(u.tt==="dinh-ly"?.22:.17,16,12),sn(p.c,.25)),u.dot.position.copy(u.top),u.dot.userData.m=u,i.add(u.dot)}let n=He.noi.map(([u,p])=>{let g=hc[u],y=hc[p],m=g.top.clone().lerp(y.top,.5);m.y+=1.2+g.top.distanceTo(y.top)*.16;let f=Ae(new Si(g.top,m,y.top).getPoints(28),zo[y.nhanh].c,.05);return i.add(f),{l:f,A:g,B:y}}),s=new Ge;s.position.set(t,6.2,2),s.rotation.y=Math.PI/2,i.add(s),s.add(new ne(new wi(6,.05,8,160),sn(It.dim,.9)));let r=null,a=-1,o=u=>{Math.abs(u-a)<1e-4||(a=u,r&&(s.remove(r),r.geometry.dispose()),r=new ne(new wi(6,.13,10,200,Math.max(1e-4,u)*Math.PI*2),sn(It.sig,1)),r.rotation.z=Math.PI/2,s.add(r))},l=new ne(new Us(5.9,64),sn(It.amber,0));s.add(l);let c=Ae([Ft(0,0,-9),Ft(0,0,12.5)],It.ink,.45);i.add(c);let h=new js;h.params.Line={threshold:.2};let d=(u,p)=>{h.setFromCamera(new pt(u/innerWidth*2-1,-(p/innerHeight)*2+1),Se);let g=h.intersectObjects(yr.flatMap(y=>[y.mesh,y.dot]))[0];return g?g.object.userData.m:null};return _r.addEventListener("click",u=>{if(Mr!==3)return;let p=d(u.clientX,u.clientY);ps.pin=p,p&&_h(p,!0)}),_r.addEventListener("pointermove",u=>{Mr===3&&(_r.style.cursor=d(u.clientX,u.clientY)?"pointer":"")}),{g:i,update(u,p){let g=Jt(-2,t-3,Je(Oe(u,.04,.9))),y=L0(hn(g,0,92)),m=Je(Oe(u,.9,1));ps.year=y,c.position.x=g;let f=innerWidth<innerHeight;Se.position.set(g-Jt(15,20,m)*(f?1.5:1),Jt(8.5,7,m)*(f?1.4:1),Jt(19,9,m)*(f?1.5:1)),Se.lookAt(g+Jt(5,4,m),Jt(2.2,6,m),Jt(1.5,2,m));let T=null,C=0,b=3;for(let M of yr){let S=M.p.x<=g+.01,E=Math.abs(M.p.x-g)<9;M.mesh.material.opacity=S?.55:.12,M.dot.material.opacity=S?.95:.2,M.dot.scale.setScalar(S?1+.18*Math.sin(p*2+M.i):.8),S&&((!T||M.p.x>=T.p.x)&&(T=M),M.tile!==void 0&&(C=Math.max(C,M.tile)),M.so&&(b=Math.max(b,M.so))),(E||M===ps.pin)&&Pe("m"+M.id,`<b>${M.nam<0?"kho\u1EA3ng 300 TCN":M.ngay||Math.floor(M.nam)}</b>${M.nguoi.split(" \xB7 ")[0].split(" (")[0]}`,M.top.clone().setY(M.top.y+.5),"node"+(S?" on":""))}for(let M of n){let S=M.A.p.x<=g,E=M.B.p.x<=g;M.l.material.opacity=S&&E?.5:S?.14:.04}o(C),l.material.opacity=.05+.5*(C>=1?1:0)*(.6+.4*Math.sin(p*2)),m>.5&&(T=hc.rh26),T!==ps.cur&&(ps.cur=T,ps.pin=null,T&&_h(T,!1)),se("#a3y").textContent=y<0?`${Math.round(-y)} TCN`:y<2026?String(Math.floor(y)):y<2026.6?"2026":y<2026.7?"th\xE1ng 8/2026":y<2026.86?"th\xE1ng 10/2026":"20/11/2026",se("#a3t").textContent=C>=1?"100 % (tuy\xEAn b\u1ED1)":C>.02?`${bn(C*100,1)} %`:C>0?"> 0 %":y>=1914?"v\xF4 h\u1EA1n, ch\u01B0a r\xF5 t\u1EC9 l\u1EC7":"ch\u01B0a bi\u1EBFt g\xEC",se("#a3tb").style.width=`${C*100}%`,se("#a3s").innerHTML=b>=1e4?`\u2248 10<sup>${Math.log10(b).toFixed(b>=1e12?1:0).replace(".0","")}</sup>`:bn(b),se("#a3sb").style.width=`${hn(Math.log10(b)/13.1)*100}%`,Pe("gate",C>=1?"c\xE1nh c\u1ED5ng: m\u1ECDi kh\xF4ng \u0111i\u1EC3m tr\xEAn \u0111\u01B0\u1EDDng \xBD":"c\xE1nh c\u1ED5ng",Ft(t,13.2,2),"mono am")}}}var P0=i=>(i||[]).map(t=>He.nguon[t]?`<a href="${He.nguon[t][1]}" target="_blank" rel="noopener">${He.nguon[t][0]}</a>`:"").filter(Boolean).join(" \xB7 ");function _h(i,t){let e=zo[i.nhanh],n="#"+e.c.toString(16).padStart(6,"0");se("#a3card").innerHTML=`<div class="k"><i style="background:${n}"></i>${e.n} \xB7 ${b0[i.tt]}${t?" \xB7 \u0111ang ghim":""}</div><h3>${i.ten}</h3><div class="who">${i.nguoi} \xB7 ${i.nam<0?"kho\u1EA3ng 300 TCN":i.ngay||Math.floor(i.nam)}</div><p>${i.y}</p><div class="src">Ngu\u1ED3n: ${P0(i.src)}</div>`}function I0(){let i=new Ge,t=d=>d<=2010?Jt(-26,-6,hn((d-1850)/160)):Jt(-6,26,hn((d-2010)/16.9)),e=d=>d*1.5-7,n=yr.filter(d=>d.nhanh!=="ai"&&d.nam>=1850&&d.id!=="masullo").sort((d,u)=>d.nam-u.nam),s=0,r=n.map(d=>(s=Math.max(s,d.tam),{y:d.nam,v:s,n:d.ten,who:d.nguoi}));r.unshift({y:1850,v:3,n:"",who:""}),r.push({y:2026.6,v:8.05,n:"",who:""},{y:2026.887,v:10,n:"Tuy\xEAn b\u1ED1 ch\u1EE9ng minh",who:""});let a=[{y:1850,v:0,n:""},{y:1955,v:0,n:""},...He.ai.map(d=>({y:d.nam,v:d.tam,n:d.ten}))],o=(d,u,p)=>{let g=new ns(d.map(T=>Ft(t(T.y),e(T.v),p)),!1,"catmullrom",.08),y=new Gs(g,700,.1,8,!1),m=new ne(y,sn(u,1));i.add(m);let f=d.filter(T=>T.n).map(T=>{let C=new ne(new Hn(.22,16,12),sn(u,1));return C.position.set(t(T.y),e(T.v),p),C.userData=T,i.add(C),C});return{m,n:y.index.count,beads:f,cv:g}},l=o(r,It.amber,-.6),c=o(a,It.sig,.6);i.add(Ae([Ft(-27,e(0),0),Ft(27.5,e(0),0)],It.dim,.5),Ae([Ft(-27,e(0),0),Ft(-27,e(10.4),0)],It.dim,.5),Ae([Ft(-6,e(0)-.3,0),Ft(-6,e(10.4),0)],It.dim,.22));for(let d of[2,4,6,8,10])i.add(Ae([Ft(-27,e(d),0),Ft(27.5,e(d),0)],It.dim,.12));let h=new ne(new Hn(.5,24,16),sn(It.ink,0));return h.position.set(t(2026.887),e(10),0),i.add(h),{g:i,update(d,u){let p=d<.5?Jt(1850,2010,Je(Oe(d,.03,.5))):Jt(2010,2026.9,Je(Oe(d,.5,.9))),g=t(p);for(let M of[l,c]){let S=hn((g+26)/52);M.m.geometry.setDrawRange(0,Math.floor(M.n*S/48)*48),M.beads.forEach(E=>{let x=E.position.x<=g+.05;E.visible=x})}let y=Je(Oe(d,.45,.92)),m=innerWidth<innerHeight;Se.position.set(Jt(-6,9,y),Jt(1,2,y),Jt(54,42,y)*(m?1.7:1)),Se.lookAt(Jt(-4,9,y),Jt(-1,.8,y),0);let f=Oe(d,.9,1);h.material.opacity=f,h.scale.setScalar(1+f*(1.2+.3*Math.sin(u*3)));for(let M of[1859,1900,1950,2010,2020,2024,2026])Pe("y"+M,String(M),Ft(t(M),e(0)-.8,0),"mono");for(let M of[0,5,10])Pe("v"+M,String(M),Ft(-28,e(M),0),"mono");let T=(M,S,E)=>M.beads.filter(x=>x.visible).slice(-2).forEach((x,w)=>Pe(S+x.userData.y+x.userData.n,`<b>${x.userData.y>2026?"2026":Math.floor(x.userData.y)}</b>${x.userData.n}`,x.position.clone().add(Ft(0,E*(1+w*1.5),0)),"node on "+S));T(l,"hu",.9),T(c,"ai",-.9),se("#a4y").textContent=p>2026.85?"20/11/2026":String(Math.floor(p));let C=r.filter(M=>M.y<=p).at(-1)?.v??3,b=a.filter(M=>M.y<=p).at(-1)?.v??0;se("#a4h").textContent=bn(C,1),se("#a4a").textContent=bn(b,1),se("#a4hb").style.width=`${C*10}%`,se("#a4ab").style.width=`${b*10}%`}}}function D0(){let i=new Ge,t=He.buoc41,e=t.map(([r,a],o)=>{let l=o*.62,c=4.6,h=new ne(new kn(1.9,.09,.9),sn(o===t.length-1?It.sig:It.amber,.12));return h.position.set(Math.cos(l)*c,o*.62-6,Math.sin(l)*c),h.rotation.y=-l+Math.PI/2,i.add(h),{m:h,d:r,n:a}});i.add(Ae(e.map(r=>r.m.position.clone()),It.amber,.35));let n=[];for(let r=0;r<144;r++){let a=r*.21,o=10.5;n.push(Ft(Math.cos(a)*o,r/143*11.8-6,Math.sin(a)*o))}i.add(new si(new te().setFromPoints(n),new Gn({color:It.blue,size:.16,transparent:!0,opacity:.8})),Ae(n,It.blue,.18));let s=new ne(new Hn(.45,24,16),sn(It.ink,0));return s.position.set(0,7,0),i.add(s),{g:i,update(r,a){let o=Oe(r,.05,.72)*t.length,l=Math.min(t.length,Math.floor(o)),c=.55+r*2.6+(M0?0:a*.02),h=innerWidth<innerHeight;e.forEach((m,f)=>{m.m.material.opacity=f<l?.5:.08,f<l&&f>=l-3&&Pe("s"+f,`<b>${m.d}</b>`,m.m.position.clone().add(Ft(0,.5,0)),"node on")});let d=Jt(-5,5.5,Oe(r,0,.8));Se.position.set(Math.cos(c)*23*(h?1.5:1),d+5,Math.sin(c)*23*(h?1.5:1)),Se.lookAt(0,d,0),s.material.opacity=l>=t.length?.6+.4*Math.sin(a*3):0,Pe("h12","\u0111\u01B0\u1EDDng thu\u1EA7n ng\u01B0\u1EDDi: 12 n\u0103m, m\u1ED7i ch\u1EA5m m\u1ED9t th\xE1ng",n[70].clone().add(Ft(0,.6,0)),"mono bl"),Pe("h41","41 ng\xE0y, 20 b\u01B0\u1EDBc",e[Math.min(t.length-1,Math.max(0,l-1))].m.position.clone().add(Ft(0,-.7,0)),"mono am");let u=se("#a5list");u._n!==l&&(u._n=l,u.innerHTML=t.slice(Math.max(0,l-4),l).map(([m,f],T,C)=>`<li class="${T===C.length-1?"on":""}"><b>${m}</b>${f}</li>`).join("")||"<li><b>6/10</b>B\u1EAFt \u0111\u1EA7u</li>",se("#a5n").textContent=`${String(l).padStart(2,"0")} / ${t.length}`);let p=Je(Oe(r,.6,.86));se("#a5l").textContent=bn(Math.round(17374215*p)),se("#a5f").textContent=bn(Math.round(175187*p)),se("#a5m").textContent=bn(Math.round(239*p));let g=Math.floor(Oe(r,.8,.99)*(He.kiem.length+.99)),y=se("#a5k");y._n!==g&&(y._n=g,y.innerHTML=He.kiem.slice(0,g).map(([m,f],T)=>`<li class="${T===He.kiem.length-1?"wait":""}"><span>${m}</span><b>${f}</b></li>`).join(""))}}}function N0(){let i=new Ge,t=new ne(new wi(6,.12,10,200),sn(It.sig,1));i.add(t);let e=ms.map(n=>Ft(0,0,-n*.55-4));i.add(new si(new te().setFromPoints(e),new Gn({color:It.amber,size:.3}))),i.add(Ae([Ft(0,0,0),Ft(0,0,-160)],It.amber,.45));for(let n of[-3,3])i.add(Ae([Ft(n,0,4),Ft(n,0,-160)],It.dim,.3));return{g:i,update(n,s){Se.position.set(.6*Math.sin(s*.2),1.5-.9*n,Jt(26,-18,Je(n))),Se.lookAt(0,.2,-60),t.material.opacity=.7+.3*Math.sin(s*1.5)}}}var yh=[T0,E0,C0,R0,I0,D0,N0].map(i=>{let t=i();return t.g.visible=!1,vs.add(t.g),t}),pc=Ho("section[data-act]"),O0=se("#fade"),q0=Ho(".hud"),Eh=se("#nav"),Mr=-1;Eh.innerHTML=pc.map((i,t)=>`<a href="#${i.id}" data-i="${t}"><span>${String(t).padStart(2,"0")}</span>${i.dataset.t}</a>`).join("");se("#a1n").addEventListener("input",i=>{Ri.auto=!1,Ri.N=+i.target.value});se("#a1auto").addEventListener("click",()=>{Ri.auto=!0});var U0=new Ys;function Ah(){let i=U0.getElapsedTime(),t=innerHeight,e=t/2,n=0,s=0,r=1;pc.forEach((a,o)=>{let l=a.getBoundingClientRect();l.top<=e&&l.bottom>e&&(n=o,s=hn(-l.top/Math.max(1,l.height-t)),r=Math.min(e-l.top,l.bottom-e)/(t*.45))}),n!==Mr&&(Mr=n,yh.forEach((a,o)=>{a.g.visible=o===n}),q0.forEach(a=>a.classList.toggle("on",+a.dataset.act===n)),Ho("a",Eh).forEach(a=>a.classList.toggle("on",+a.dataset.i===n)),vs.fog.density=[.02,.004,.016,.011,.004,.008,.012][n],Sh.strength=[.9,.55,.8,.85,.7,.8,1][n],_r.style.cursor=""),O0.style.opacity=n===0&&s<.5||n===pc.length-1&&s>.5?0:1-hn(r),yh[n].update(s,i),w0(),Sr.render(),requestAnimationFrame(Ah)}var F0=new IntersectionObserver(i=>i.forEach(t=>t.target.classList.toggle("in",t.isIntersecting)),{rootMargin:"-28% 0px -28% 0px"});Ho(".beat").forEach(i=>F0.observe(i));se("#nguon").innerHTML=Object.values(He.nguon).map(([i,t])=>`<li><a href="${t}" target="_blank" rel="noopener">${i}</a></li>`).join("");se("#dem").textContent=`${He.moc.length} m\u1ED1c, ${He.noi.length} li\xEAn h\u1EC7, ${Object.keys(He.nguon).length} ngu\u1ED3n, ${ms.length} kh\xF4ng \u0111i\u1EC3m, ${ge.ns*ge.nt} \u0111i\u1EC3m l\u01B0\u1EDBi |\u03B6|`;document.documentElement.classList.add("ok");Ah();window.RH={D:He,Z:ge,psi:Go,psiN:ko,get act(){return Mr}};
