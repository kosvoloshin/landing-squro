!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5)()},function(e,t){var n=document.querySelectorAll(".menu__link");document.querySelector(".header").addEventListener("click",(function(e){if(e.target.classList.contains("lang__control")&&e.target.classList.toggle("active"),e.target.classList.contains("menu__link")){if(e.preventDefault(),window.innerWidth>1023){for(var t=0;t<n.length;t++)n[t].classList.remove("active");e.target.classList.add("active")}if(window.innerWidth<1024)if(e.target.classList.contains("active"))e.target.classList.remove("active"),e.target.nextElementSibling.style.height=null;else{for(var r=0;r<n.length;r++)n[r].classList.remove("active"),n[r].nextElementSibling.style.height=null;e.target.classList.add("active"),e.target.nextElementSibling.style.height=e.target.nextElementSibling.scrollHeight+"px"}}}))},function(e,t){for(var n=document.querySelectorAll(".range"),r=document.querySelectorAll(".value__count"),i={0:2.4,1:30},o=function(e){for(var t=0;t<e.length;t++)e[t].nextElementSibling.style.width="".concat(e[t].value,"%"),r[t].innerHTML=Math.round(e[t].value*i[t]);r[2].innerHTML="".concat(function(e,t){return e.innerHTML*t.innerHTML}(r[0],r[1])," Points")},l=0;l<n.length;l++)n[l].oninput=function(){o(n)};o(n)},function(e,t){document.addEventListener("click",(function(e){document.querySelectorAll(".tooltip").forEach((function(e){return e.classList.remove("active")})),e.target.classList.contains("tooltip")&&e.target.classList.toggle("active")}))},function(e,t){var n=document.querySelector(".hamburger"),r=document.querySelector(".header__content");n.addEventListener("click",(function(){n.classList.toggle("active"),r.classList.toggle("active")}))},function(e,t){var n=document.querySelectorAll(".slider__item"),r=document.querySelectorAll(".dots__btn"),i=0;e.exports=function(){for(var e=function(e){r[e].addEventListener("click",(function(){!function(e){n[i].className="slider__item",r[i].className="dots__btn",n[i=e].className="slider__item active",r[i].className="dots__btn active"}(r[e].dataset.num)}))},t=0;t<r.length;t++)e(t)}}]);