$(document).ready(function () {
    var scene1 = document.getElementById('scene1');
    var parallax = new Parallax(scene1);
    var scene2 = document.getElementById('scene2');
    var parallax = new Parallax(scene2);
    var scene3 = document.getElementById('scene3');
    var parallax = new Parallax(scene3);
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        speed: 1500,
        parallax: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

    //    SWIPER-EVENT
    mySwiper.on('slideChangeTransitionStart', function () {



        gsap.from('.swiper-slide-active .title h1', 1.5, {
            delay: 0.2,
            opacity: 0,
            y: 360,
            ease: Expo.easeInOut
        })
        gsap.from('.swiper-slide-active .content h5', 1.5, {
            delay: 0.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })
        gsap.from('.swiper-slide-active .inner h6', 1.5, {
            delay: 0.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })
        gsap.from('.swiper-slide-active .inner p', 1.5, {
            delay: 0.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .juice-bottle", 1, {
            delay: 1,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .front", 1, {
            delay: 1.2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .img_1", 1, {
            delay: 1.4,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .img_2", 1, {
            delay: 1.6,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .img_3", 1, {
            delay: 1.8,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .img_4", 1, {
            delay: 2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from(".swiper-slide-active .img_5", 1, {
            delay: 2.2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })

    });

    gsap.from('.logo', 1.5, {
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('.menu ul li', 1, {
        delay: 0.3,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    }, 0.08)
    gsap.from('.title h1', 1.5, {
        delay: 0.5,
        opacity: 0,
        y: 360,
        ease: Expo.easeInOut
    })
    gsap.from('.content h5', 1.5, {
        delay: 0.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    gsap.from('.inner h6', 1.5, {
        delay: 1,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    gsap.from('.inner p', 1.5, {
        delay: 1.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('.sa-social ul li', 1, {
        delay: 1.4,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    }, 0.08)
    TweenMax.from(".juice-bottle", 1, {
        delay: 2,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".front", 1, {
        delay: 2.2,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".img_1", 1, {
        delay: 2.6,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".img_2", 1, {
        delay: 2.7,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".img_3", 1, {
        delay: 2.8,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".img_4", 1, {
        delay: 2.9,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
    TweenMax.from(".img_5", 1, {
        delay: 3,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut
    })
     TweenMax.from(".swiper-button-prev", 1, {
        delay: 3.2,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.from(".swiper-button-next", 1, {
        delay: 3.2,
        opacity: 0,
        x: 20,
        ease: Expo.easeInOut
    })


});
