window.addEventListener("scroll",function(){let e=document.getElementById("site-header");window.scrollY>50?e.classList.add("shrink"):e.classList.remove("shrink")}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("nav-toggle"),t=document.getElementById("nav");e.addEventListener("click",function(){t.classList.toggle("open");document.body.classList.toggle("menu-open")})});