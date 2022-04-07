$(document).ready(function (){
    $(".banner-down-btn").click(function (){

        var w = $(window).width(); // Получаем ширину окна

        if (w >= 767) {
            var top_position = 100;
        } else {
            var top_position = 60;
        }

        $('html, body').animate({
            scrollTop: $("#bachelor").offset().top-top_position
        }, 1000);
    });
    
    $(".main_menu label").click(function (){
        $(".main_menu").toggleClass('opened');
    });

    $(".ham-menu ul li").click(function (){
        var w = $(window).width(); // Получаем ширину окна
        var degree = $(this).attr("data-menu");

        if (w >= 767) {
            var top_position = 100;
        } else {
            var top_position = 60;
        }

        $(".main_menu").toggleClass('opened');
        $('html, body').animate({
            scrollTop: $("#"+degree).offset().top-top_position
        }, 1000); 
        
    });
});