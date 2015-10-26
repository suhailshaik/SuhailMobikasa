//SMOOTH PAGE SCROLL
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(document).ready(
    function() {
        $("html").niceScroll({
            cursorcolor: "#F69220",
            scrollspeed: "100",
            cursorborder: "1px solid #F69220",
            horizrailenabled: "false",
            cursorborderradius: "0px"
        });
    }
);
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 51) {
       
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#brand").attr('src' , "./images/logoC.png");
        



    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#brand").attr('src' , "./images/logoW.png");
    }
});
