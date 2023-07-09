
//industrial service responsive
$(document).ready(function(){
$('.service_owl_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// product slider
$('.product-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// four_item

$('.four_item_carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


});