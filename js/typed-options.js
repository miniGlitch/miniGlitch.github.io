(function ($) {

    "use strict";

        // Typed JS
        var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
        $(".element").typed({
          strings: subElementArray,
          typeSpeed: 30,
          contentType: 'html',
          showCursor: false,
          loop: true,
          loopCount: true,
        });

})(jQuery);
