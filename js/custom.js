// $(window).load(function() {

//     $(".loader_inner").fadeOut();
//     $(".loader").delay(300).fadeOut("slow");

// });

$(document).ready(function() {

    /* ========================================================== */
    /*   Navigation Background Color                              */
    /* ========================================================== */

    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $('nav').addClass('sticky-top');
        } else {
            $('nav').removeClass('sticky-top');
        }

        if($(this).scrollTop() > 320) {
            $('nav').addClass('opaque');
        } else {
            $('nav').removeClass('opaque');
        }
     });

    // menu

    $(".navbar").on("click", "a.nav-link", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // $('.video_vantage').click(function(){
    //     $(".wrap_play").hide();
    // });

    // $("#video").on("play", function (e) {
    //     $(".wrap_play").hide();
    // });
    // $("#video-2").on("play", function (e) {
    //     $(".wrap_play_2").hide();
    // });

    //pop-pap

    // $('.zoom-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     closeOnContentClick: false,
    //     closeBtnInside: false,
    //     mainClass: 'mfp-with-zoom mfp-img-mobile',
    //     image: {
    //         verticalFit: true,
    //         titleSrc: function(item) {
    //             return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
    //         }
    //     },
    //     gallery: {
    //         enabled: true
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 300,
    //         opener: function(element) {
    //             return element.find('img');
    //         }
    //     }

    // });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

});
