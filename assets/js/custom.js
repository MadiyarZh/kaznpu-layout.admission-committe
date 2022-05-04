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
    
    // Modal 
    $(".degree-block-left a").click(function (){
      $('#'+$(this).data('target')).css('display', 'block');
    });
    $(".modal-content .close").click(function (){
      $('.modal').css('display', 'none');
    });

    // 3d tooor modal
    $(".info-block .info-wrapper .link-btn").click(function (){
      $('.toor').css('display', 'block');
    });
    $(".toor .close").click(function (){
      $('.toor').css('display', 'none');
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


// modal 

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn_01");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
