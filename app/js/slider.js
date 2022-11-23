$('#customer-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["&#160;", "&#160;"],
    dots: false,
    navContainer: ".navigation",
    responsive:{
        0:{
            items:1.3
        },
        576:{
            items:2.2
        },
        1200:{
            items:3
        }
    }
})

