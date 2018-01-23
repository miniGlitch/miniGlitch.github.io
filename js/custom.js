(function ($) {

    "use strict";

        // PRE LOADER
        $(window).on('load', function(){
          $('.preloader').fadeOut(750); // set duration in brackets    
        });


        // navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });
        

        // Parallax JS
        function initParallax() {
          $('#home').parallax("100%", 100);
          $('#about').parallax("80%", 80);
          $('#service').parallax("60%", 60);
          $('#portfolio').parallax("40%", 40);
          $('#blog').parallax("20%", 20);
          $('#blog-header').parallax("50%", 50);
          $('#blog-detail').parallax("70%", 70);
          $('#contact').parallax("90%", 90);
          }
        initParallax();

        // // Contact Form
        // $("#contact").submit(function (e) {
        //   e.preventDefault();
        //   var name = $("#cf-name").val();
        //   var email = $("#cf-email").val();
        //   var subject = $("#cf-subject").val();
        //   var message = $("#cf-message").val();
        //   var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        //
        //   function isValidEmail(emailAddress) {
        //       var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        //       return pattern.test(emailAddress);
        //   };
        //   if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        //       $.ajax({
        //           type: "POST",
        //           url: "php/contact.php",
        //           data: dataString,
        //           success: function () {
        //               $('.text-success').fadeIn(1000);
        //               $('.text-danger').fadeOut(500);
        //           }
        //       });
        //   }
        //   else {
        //       $('.text-danger').fadeIn(1000);
        //       $('.text-success').fadeOut(500);
        //   }
        //   return false;
        // });


        // Go top
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
              } else {
                $('.go-top').fadeOut(200);
            }
          });   
          // Animate the scroll to top
          $('.go-top').on('click', function(event) {
            event.preventDefault();
          $('html, body').animate({scrollTop: 0}, 300);
        })
        

        // smoothscroll JS
        $(function() {
          $('.navbar-default a, #home a, #schedulebutton a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });
    



})(jQuery);
