    let swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    document.addEventListener('DOMContentLoaded', () =>{
   const banner = document.querySelector('.banner');
   const header = document.querySelector('.header');

   const headerFixed = () => {
   let scrollTop = window.scrollY;
    let bannerCenter = banner.offsetHeight/2;

    if (scrollTop >= bannerCenter) {
        header.classList.add('fixed')
        banner.style.marginTop = `${header.offsetHeight}px`;
    }   else {
        header.classList.remove('fixed')
        banner.style.marginTop = `0px`;
    }
   };


        headerFixed();
    window.addEventListener('scroll', () => {

        headerFixed();
    });

});


 document.addEventListener('DOMContentLoaded', () =>{
   const banner = document.querySelector('.box-2');
   const header = document.querySelector('.header');

   const headerFixed = () => {
   let scrollTop = window.scrollY;
    let bannerCenter = banner.offsetHeight/2;

    if (scrollTop >= bannerCenter) {
        header.classList.add('fixed')
        banner.style.marginTop = `${header.offsetHeight}px`;
    }   else {
        header.classList.remove('fixed')
        banner.style.marginTop = `0px`;
    }
   };


        headerFixed();
    window.addEventListener('scroll', () => {

        headerFixed();
    });

});



 document.addEventListener('DOMContentLoaded', () =>{
   const banner = document.querySelector('.box-3');
   const header = document.querySelector('.header');

   const headerFixed = () => {
   let scrollTop = window.scrollY;
    let bannerCenter = banner.offsetHeight/2;

    if (scrollTop >= bannerCenter) {
        header.classList.add('fixed')
        banner.style.marginTop = `${header.offsetHeight}px`;
    }   else {
        header.classList.remove('fixed')
        banner.style.marginTop = `0px`;
    }
   };


        headerFixed();
    window.addEventListener('scroll', () => {

        headerFixed();
    });

});




 document.addEventListener('DOMContentLoaded', () =>{
   const banner = document.querySelector('.box-1');
   const header = document.querySelector('.header');

   const headerFixed = () => {
   let scrollTop = window.scrollY;
    let bannerCenter = banner.offsetHeight/2;

    if (scrollTop >= bannerCenter) {
        header.classList.add('fixed')
        banner.style.marginTop = `${header.offsetHeight}px`;
    }   else {
        header.classList.remove('fixed')
        banner.style.marginTop = `0px`;
    }
   };


        headerFixed();
    window.addEventListener('scroll', () => {

        headerFixed();
    });

});





let center = [43.102772, 131.913342];
function init() {
 let map=new ymaps.Map('map', {
    center: center,
    zoom:18
 });

let placemark = new ymaps.Placemark(center, {},{

    iconLayout: 'default#image',
    iconImageHref: '/static/main/img/apple-touch-icon.png',
    iconImageSize: [40,40],
    iconImageOffset: [0,0]

});


map.geoObjects.add(placemark)
 }
ymaps.ready(init);
