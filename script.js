var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
    
});
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWidthBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1, 
        },
        520:{
            slidesPerView:2, 
        },
        950:{
            slidesPerView:3, 
        }
    }
    
});

let tabIpunts = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change',function() {
        let id = input.valueMax;
        let thisSwiper = document.getElementyById('swiper' + id);
        thisSwiper.swiper.update();
    })
});