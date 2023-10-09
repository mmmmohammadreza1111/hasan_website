paceOptions = {
    ajax: true,  //Checks AJAX requests
    document: true //Document is ready
}

Pace.on('done', () => {
    
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: true,
        items: 1,
        dotsData: true,
        nav: true,
        navText:["<ion-icon class='nav-btn prev-slide' name='chevron-back-outline'></ion-icon>",
                "<ion-icon class='nav-btn next-slide' name='chevron-forward-outline'></ion-icon>"], 
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    gsap.timeline()
    .add('p')
    .to('.pace', {
        transform: 'scale(10, 1)',
        duration: 4 
    }, "+=.2")

    .to('.pace', {
        duration: 1, 
        height: "100%",
        opacity: "0"
    }, "-=2.5")

    .to('.preloader', {
        duration: 3, 
        opacity: "0"
    }, "-=2.5")

    .to('.loadingText', {
        delay: .2, 
        duration: 3, 
        opacity: 0, 
        yPercent: -400, 
        ease: "BezierEasing(0.19,1,0.22,1)"
    }, 'p')

})





(function ($) {


})(jQuery);



// Splide:
var splide = new Splide( '.splide', {
    perMove: 1,
    autoWidth: true,
    perPage  : 2,
    focus    : 0,
    trimSpace: false,
    direction: 'rtl',
    wheel    : true,
    speed    : 2000,
    classes: {
        arrows: 'splide__arrows',
        arrow : 'splide__arrow',
        prev  : 'splide__arrow--prev',
        next  : 'splide__arrow--next',
    },
} );



var bar = splide.root.querySelector(".my-slider-progress-bar");

splide.on( 'mounted move', function () {
    var end  = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();


// Menu:
const navBtn = document.getElementById("menu-toggle-btn");
        
const t1 = gsap.timeline({
    paused: true
});

t1.to("body",{
    // duration: .5,
    autoAlpha: 1,
    // overflow: "hidden",
});

t1.to(".dark-overlay",{
    duration: .5,
    autoAlpha: 1,
    visibility: "visible",
});

t1.to(".nav-container", {
    visibility: "visible",
});

t1.to(".nav-logo", 
        0.2, 
        {
            color: "#fff",
            opacity: 1,
        }, 
        "-=0.1"
);

t1.to(".nav-socials", 0.4, {
    opacity: 1,
    y: 10,
    stagger: {
        amount: 0.04,
    },
});

t1.to(".nav-link > a", 
        0.8, {
            top: 0,
            ease: "power2.inOut",
            stagger: {
                amount: 0.1
            },
            opacity: 1,
        },
        "-=0.4",
);

t1.to(".nav-footer", 
        0.3, 
        {
        opacity: 1,
        },
        "-=0.5",
);

t1.reverse();

let scrollPos = window.pageYOffset;

navBtn.onclick = function (e) {    
    navBtn.classList.toggle("active");  

    if (navBtn.classList.contains("active") == true) {
        scrollPos = window.pageYOffset;
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, scrollPos);
    }
    t1.reversed(!t1.reversed());
};







 


// Site Animations:
gsap.registerPlugin(ScrollTrigger);

gsap.to('.header-carousel',{
    opacity: 0,
    ease:"ease",
    // autoAlpha: 1,
    scrollTrigger:{
        trigger: '.header-carousel',
        scrub: 1,
        start: "top",
        end: "bottom",
        pin: true,
        toggleActions: "play none none none",
    },
});

gsap.from(".titleOfProjects-section span",  {            
    width: 0,
    ease: Expo.easeInOut,
    duration: 2,
    scrollTrigger:{
        trigger: ".titleOfProjects-section",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".titleOfProjects-section h1",  {            
    x: -100,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".titleOfProjects-section",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        // markers: {
    //     startColor: "purple",
    //     endColor: "fuchsia",
    //     fontSize: "3rem",
    // },
    },
});

gsap.from(".titleOfProjects-section p", {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".titleOfProjects-section",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".projects-section-container a", {
    stagger: {
        amount: 0.1
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1,
    scrollTrigger: {
        trigger: ".titleOfProjects-section",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from("#image-carousel", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1.5,
    x: -100,
    scrollTrigger: {
        trigger: ".titleOfProjects-section",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});
    
gsap.from(".about-usContainer span",  {       
    stagger: {
        amount: 0.1
    },     
    width: 0,
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger:{
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usContainer h3",  {   
    stagger: {
        amount: 0.1
    },         
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger:{
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usContainer h1", {
    stagger: {
        amount: 0.1
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    y: 10,
    scrollTrigger: {
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usContainerFirstP", {
    stagger: {
        amount: 0.1
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    x: 50,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usContainerSecondP", {
    stagger: {
        amount: 0.1
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    x: -50,
    delay: 0.8,
    scrollTrigger: {
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usContainer a", {
    stagger: {
        amount: 0.1
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1.3,
    scrollTrigger: {
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".about-usImages img", {
    stagger: {
        amount: .4,
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: .8,
    scrollTrigger: {
        trigger: ".about-usContainer",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".titleOfServices-section span", {
    width: 0,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".services-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".titleOfServices-section h1", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".services-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".titleOfServices-section p", {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: "power2.inOut",
    delay: .5,
    scrollTrigger: {
        trigger: ".services-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".services-items", {
    stagger: {
        amount: .4,
    },
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    delay: 1,
    y: 20,
    scrollTrigger: {
        trigger: ".services-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        // markers: {
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "3rem",
        // },
    }, 
});

gsap.from(".titleOfStatistics-section-container h2", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".statistics-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".titleOfStatistics-section-container p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1,
    scrollTrigger: {
        trigger: ".statistics-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    },
});

gsap.from(".contentOfStatistics-section-container div", {
    stagger: {
        amount: .4,
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1.5,
    y: 20,
    scrollTrigger: {
        trigger: ".statistics-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".logos-container img", {
    stagger: {
        amount: .4,
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 2.5,
    y: 20,
    scrollTrigger: {
        trigger: ".statistics-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".titleOfContact-us-section", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".contact-us-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".googleMap", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    x: 50,
    delay: 1,
    scrollTrigger: {
        trigger: ".contact-us-section-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".contact-us-item", {
    stagger: {
        amount: .4,
    },
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 1,
    y: 20,
    scrollTrigger: {
        trigger: ".contact-us-items-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

gsap.from(".footer-section-container p", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    stagger: {
        amount: .4,
    },
    delay: 1.5,
    borderWidth: 0,
    scrollTrigger: {
        trigger: ".contact-us-items-container",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
    }, 
});

