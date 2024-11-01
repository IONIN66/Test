(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const L of i.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&r(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const k=document.querySelectorAll(".modal__input input"),c=document.getElementById("phone"),_=document.querySelector(".modal__checkbox-input"),q=document.querySelector(".button--modal-submit"),z=document.querySelector(".modal__form"),I=document.getElementById("modal"),G=document.getElementById("modal__button__close"),H=document.querySelectorAll(".button--leave-request"),D=document.getElementById("videoModal"),A=document.getElementById("videoFrame");function h(e,n){e.classList.toggle("error_border",n);const t=e.nextElementSibling;t&&(t.style.display=n?"block":"none",t.textContent=n?"Неверный формат":"")}let W=function(e){return e.value.replace(/\D/g,"")},J=function(e){let n=e.target,t=W(n);const r=e.clipboardData||window.clipboardData;if(r){const s=r.getData("Text");if(/\D/g.test(s)){n.value=t;return}}},Q=function(e){let n=e.target,t=W(n),r=n.selectionStart,s="";if(!t)return n.value="";if(n.value.length!=r){e.data&&/\D/g.test(e.data)&&(n.value=t);return}if(["7","8","9"].indexOf(t[0])>-1){t[0]=="9"&&(t="7"+t);const i=t[0]=="8"?"8":"+7";s=n.value=i+" ",t.length>1&&(s+="("+t.substring(1,4)),t.length>=5&&(s+=") "+t.substring(4,7)),t.length>=8&&(s+="-"+t.substring(7,9)),t.length>=10&&(s+="-"+t.substring(9,11))}else s="+"+t.substring(0,16);n.value=s},U=function(e){let n=e.target.value.replace(/\D/g,"");e.keyCode==8&&n.length==1&&(e.target.value="")};c.addEventListener("keydown",U);c.addEventListener("input",Q,!1);c.addEventListener("paste",J,!1);function Z(e){const n=e.split("").filter(t=>!isNaN(t)&&t!==" ").join("");return n.length===11&&(n.startsWith("8")||n.startsWith("7"))}function b(){let e=!0,n=!0;k.forEach(s=>{const i=s.value.trim()==="";h(s,i),i&&(e=!1)});const t=c.value.trim();n=Z(t),h(c,!n);const r=_.checked;q.disabled=!(e&&n&&r)}function B(){k.forEach(e=>{e.value="",h(e,!1)}),c.value="",h(c,!1),_.checked=!1,q.disabled=!0}function ee(){B(),I.style.display="flex"}function P(){B(),I.style.display="none"}function V(){A.src="",D.style.display="none"}function te(e){b(),q.disabled?e.preventDefault():B()}k.forEach(e=>e.addEventListener("input",b));_.addEventListener("change",b);c.addEventListener("input",b);z.addEventListener("submit",te);G.addEventListener("click",P);document.addEventListener("click",e=>{e.target===I&&P()});H.forEach(e=>e.addEventListener("click",ee));document.getElementById("videoButton").addEventListener("click",()=>{A.src="https://rutube.ru/play/embed/0581f03c3611e5ee2587547ace1828e8/",D.style.display="flex"});document.querySelector(".modal__close").addEventListener("click",V);document.addEventListener("click",e=>{e.target===D&&V()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(P(),V())});let m=document.querySelector(".slider"),p=m.querySelector(".slider__list"),u=m.querySelector(".slider-track"),f=m.querySelectorAll(".slide"),M=m.querySelector(".slider-arrows"),ne=M.children[0],se=M.children[1],y=f[0].offsetWidth,o=0,d=0,l=0,x=0,S=0,T=0,O=0,g=!1,w=!1,a=!0,N=!0,X=0,C=0,ie=(f.length-1)*y,re=f[0].offsetWidth*.35,oe=/([-0-9.]+(?=px))/,$,F,K=function(){return event.type.search("touch")!==-1?event.touches[0]:event},R=function(){f.forEach(e=>{e.classList.add("blur")}),f[o].classList.remove("blur"),N&&(u.style.transition="transform .5s"),u.style.transform=`translate3d(-${o*y}px, 0px, 0px)`,ne.classList.toggle("disabled",o===0),se.classList.toggle("disabled",o===f.length-1)},j=function(){let e=K();a&&($=Date.now(),N=!0,X=(o+1)*-y,C=(o-1)*-y,d=l=e.clientX,S=e.clientY,u.style.transition="",document.addEventListener("touchmove",E),document.addEventListener("mousemove",E),document.addEventListener("touchend",v),document.addEventListener("mouseup",v),p.classList.remove("grab"),p.classList.add("grabbing"))},E=function(){let e=K(),n=u.style.transform,t=+n.match(oe)[0];if(x=l-e.clientX,l=e.clientX,T=S-e.clientY,S=e.clientY,!g&&!w){let r=Math.abs(T);r>7||x===0?(w=!0,a=!1):r<7&&(g=!0)}if(g){if(o===0)if(d<l){Y(t,0);return}else a=!0;if(o===f.length-1)if(d>l){Y(t,ie);return}else a=!0;if(d>l&&t<X||d<l&&t>C){le();return}u.style.transform=`translate3d(${t-x}px, 0px, 0px)`}},v=function(){O=d-l,w=!1,g=!1,document.removeEventListener("touchmove",E),document.removeEventListener("mousemove",E),document.removeEventListener("touchend",v),document.removeEventListener("mouseup",v),p.classList.add("grab"),p.classList.remove("grabbing"),a?(F=Date.now(),(Math.abs(O)>re||F-$<300)&&(d<l?o--:d>l&&o++),d!==l?(a=!1,R()):a=!0):a=!0},Y=function(e,n){e>=n&&e>n&&(u.style.transform=`translate3d(${n}px, 0px, 0px)`),a=!1},le=function(){N=!1,v(),a=!0};u.style.transform="translate3d(0px, 0px, 0px)";p.classList.add("grab");u.addEventListener("transitionend",()=>a=!0);m.addEventListener("touchstart",j);m.addEventListener("mousedown",j);M.addEventListener("click",function(){let e=event.target;if(e.classList.contains("next"))o++;else if(e.classList.contains("prev"))o--;else return;R()});
