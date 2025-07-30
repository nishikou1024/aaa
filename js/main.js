// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('header').hasClass('open-nav')) {
        $('header').removeClass('open-nav');
    } else {
        $('header').addClass('open-nav');
    }
});

$('header li a').click(function() {
    if ($('main').hasClass('open-nav')) {
        $('main').removeClass('open-nav');
    }
});

// navigation scroll 
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// slider
$('.slider').slick({
    centerMode: true,
    centerPadding:'20%',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:1500,
    dots: true,
    variableWidth: true,
    infinite: true,
});

// top scroll
$(function  (){
    togglePageTopButton();
    
    $(window).scroll(function(){
        togglePageTopButton();
    });

    function togglePageTopButton(){
        if($(window).scrollTop() > 100){
            $('#page-top').fadeIn();
        } else{
            $('#page-top').fadeOut();
        }
    }

    $('#page-top').click(function(event) {
        $('html, body').animate({
            scrollTop: 0
        });
        event.preventDefault();
    });

});


// 文字フェードイン
$(window).on('scroll', function(){
    $('.fade-up').each(function(){
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > elemTop - windowHeight + 100){
            $(this).addClass('active');
        }
    });
});

// クリックスクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
});