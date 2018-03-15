(function($) {
  
  "use strict";

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    }); 

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });


/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /* 
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/* 
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

}(jQuery));


/*RIGHT sitbar*/
window.onload = function () {
    document.getElementById('arclick_right').onclick = function () {
        openbox_right('rightsidebar', this);
        return false;
    };
};

// RIGHT
function openbox_right(id, arclick_right) {
    var div = document.getElementById(id);

    if (div.style.right == '-141px') {
        div.style.right = '0';
        div.style.opacity = 1;
        /* нет прозрачности */
        arclick_right.style.background = 'url(img/sidebar-right/img/arrow_l-r.png)';
    }
    else {
        div.style.right = '-141px';
        div.style.opacity = 0.5;
        /* полупрозрачность */
        arclick_right.style.background = 'url(img/sidebar-right/img/arrow_r-l.png)';
    }
}

// END
// Исчезание бокового меню при маленьком разрешении
// TODO
// Убирание к низу при ширине 1024. Исчезание вовсе при ширине 600
/*
function testBlock() {
    var obj = document.getElementById('contaner');
    var	size = document.body.offsetWidth;
    if (size < 1024) {
        obj.style.bottom = '56px';
        obj.style.height = '197px';
        obj.style.width = '100%';
    }
}
*/
/*end RIGHT sitbar*/

$(document).ready(function() {
    $(function(){
        $("#phone").mask("+7 (999) 99-99-999");
    });
    // Expand Panel
    $("#open").click(function(){
        $("div#sliding_panel").slideDown("slow");

    });

    // Collapse Panel
    $(".close").click(function(){
        $("div#sliding_panel").slideUp("slow");
    });

    // Switch buttons from "Log In | Register" to "Close Panel" on click
    $("#toggle a").click(function () {
        $("#toggle a").toggle();
    });

});

    // -------   Mail Send ajax
    $(document).ready(function () {
        var form = $('#order-form'); // contact form
        var submit = $('#sends'); // submit button
        var alert = $('#responsesend'); // alert div for show alert message
        //кнопка скрытия модалки
        $("#responseclose").on("click", function () {
            alert.fadeOut();
        });
        // alert.fadeOut;

        // убираем отправку формы
        form.submit(function () {
            return false;
        });

        // button click event
        submit.on('click', function (e) {
            // prevent default form submit

            $.ajax({
                url: $('#order-send-url').val(), // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function () {
                    submit.html('Отправка....'); // change submit button text
                },
                success: function (data) {
                    alert.fadeIn(); // fade in response data
                    // form.trigger('reset'); // reset form
                    submit.html('Отправленно'); // change submit button text
                    submit.prop("disabled", true);
                },
                error: function (e) {
                    console.log(e)
                }
            });
        });

    });

