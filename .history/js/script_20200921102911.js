const responsive ={
    320:{
        items:1
    },
    620:{
        items:2
    },
    1000:{
        items:3
    }

}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
})

// owl carousel for blog
$('.owl-carousel').owlCarousel(
    {
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        fluidSpeed:1,
        dots:false,
        nav:true,
        animateOut:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    }
)
$(document).ready(function(){

    $('.fas fa-arrow-circle-up').click(function(){
        $('body,html').animate({
            scrollTop:0
        },3000)
    })
})