        
$(document).ready(function() {

  //MENU
  $('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

  $(".btn-close").click(function(){
    $("#menu").removeClass("open");
    $(".toggle-menu").removeClass('active');
  });

  $(".heading-wrapper .nav-menu ul li a").click(function(){
    $(".heading-main").find(".nav-menu").removeClass("open");
    $(".heading-main").find(".toggle-menu").removeClass("active");
  });

  //TOGGLE
  $('#form-modal').submit( function(e) {
    e.preventDefault()
    }
  )


$(".nav-menu ul li").click(function(e){

  // e.preventDefault();
  // e.stopPropagation();

  if(window.innerWidth < 1024){
    const menuHidden = $(this).find(".menu-hidden")

    if(menuHidden.hasClass('test-ul')){
        $(this).find(".menu-hidden").toggleClass("test-ul");
        $(this).find("a").toggleClass("a-transform");
    }
     else {
        $(".menu-hidden").removeClass("test-ul");
        $("a").removeClass("a-transform");
        $(this).find(".menu-hidden").toggleClass("test-ul");
        $(this).find("a").toggleClass("a-transform");
    }

  }

})

  $(".nav-menu ul li").hover(function(){
    window.innerWidth >= 1024 && $(this).find('.menu-hidden').toggleClass("test-ul");
    },
    function(){
      window.innerWidth >= 1024 && $(this).find('.menu-hidden').toggleClass("test-ul");
    }
);

 
  $(document).on("click", function (e) { 
    const hasParent = $(e.target).parents('.nav-menu').length > 0
    if (!hasParent) {
      $("menu").prop(remove.this)
    }
  });


    $(window).scroll(function(e) {
      const scrollTop = $(this).scrollTop();
      if (scrollTop > 30) {
          $(".heading-main").addClass("sticky")
      } else {
          $(".heading-main").removeClass("sticky")
      }
  });

    
//SLIDE PARTNER
$('.partner-slide-1').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 5,
  lazyLoad: 'ondemand',
  speed: 2100,
  asNavFor: '.partner-slide-2',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    }
  ]

});
$('.partner-slide-2').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 5,
  lazyLoad: 'ondemand',
  speed: 1800,
  asNavFor: '.partner-slide-1',
  dots: true,
  appendDots: $('.dots-custom'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});
$('.case-slide').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  speed: 1800,
  prevArrow: $(".btn-prev"),
  nextArrow: $(".btn-next"),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.cover-item').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 1,
  lazyLoad: 'ondemand',
  speed: 1800,
  fade: true,
  nextArrow: false,
  prevArrow: false,
  cssEase: 'linear',
});

    // AOS
    AOS.init({
      once: false,
      duration: 800,
      delay: 200,

    });

});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accorlist = this.nextElementSibling;
    if (accorlist.style.maxHeight) {
      accorlist.style.maxHeight = null;
    } else {
      accorlist.style.maxHeight = accorlist.scrollHeight + "px";
    } 
  });
}

   $('a[href*=\\#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 500);
    });

    //EXIT
    
    $(document).on("click", function (e) { 
      const hasParent = $(e.target).parents('.heading-main').length > 0
      if (!hasParent) {
        $(".heading-main").find(".toggle-menu").removeClass("active");
        $(".heading-main").find(".nav-menu").removeClass("open");
      }
    });