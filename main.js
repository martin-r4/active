document.querySelector(".menu-btn").addEventListener("click",()=>{
        document.querySelector(".nav-menu").classList.toggle("show");
});
/*https://scrollrevealjs.org/  para que aparezca la info con delay */
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:400});
ScrollReveal().reveal('.cards-banner-one', {delay:400});
ScrollReveal().reveal('.cards-banner-two', {delay:400});