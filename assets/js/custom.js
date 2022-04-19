$(document).ready(function (){
    $(".banner-down-btn").click(function (){

        var w = $(window).width(); // Получаем ширину окна

        if (w >= 767) {
            var top_position = 75;
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
            var top_position = 75;
        } else {
            var top_position = 60;
        }

        $(".main_menu").toggleClass('opened');
        $('html, body').animate({
            scrollTop: $("#"+degree).offset().top-top_position
        }, 1000); 
        
    });
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});