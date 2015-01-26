(function() {
  $(document).ready(function() {
    var expanderContent, expanderContent2, expanderTrigger, expanderTrigger2;
    $('a').attr('target', '_blank');
    $('a.scroll-on-page-link,a.page-link').attr('target', '');
    $(".js-menu-trigger,.js-menu-screen").on("click touchstart", function(e) {
      $(".js-menu,.js-menu-screen").toggleClass("is-visible");
      return e.preventDefault();
    });
    if ($("a.scroll-on-page-link").on("click touchstart")) {
      if ($(".js-menu,.js-menu-screen").hasClass("is-visible")) {
        $(".js-menu,.js-menu-screen").toggleClass("is-visible");
      }
    }
    expanderTrigger = document.getElementById("js-expander-trigger");
    expanderContent = document.getElementById("js-expander-content");
    expanderTrigger2 = document.getElementById("js-expander-trigger-2");
    expanderContent2 = document.getElementById("js-expander-content-2");
    $("#js-expander-trigger").click(function() {
      return $(this).toggleClass("expander-hidden");
    });
    return $("#js-expander-trigger-2").click(function() {
      return $(this).toggleClass("expander-hidden");
    });
  });

  jQuery(function() {
    return jQuery.mark = {
      jump: function(options) {
        var defaults;
        defaults = {
          selector: "a.scroll-on-page-link"
        };
        if (typeof options === "string") {
          defaults.selector = options;
        }
        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function(e) {
          var jumpobj, offset, target, thespeed;
          jumpobj = jQuery(this);
          target = jumpobj.attr("href");
          thespeed = 400;
          offset = jQuery(target).offset().top - 86;
          jQuery("html,body").animate({
            scrollTop: offset
          }, thespeed, "swing");
          return e.preventDefault();
        });
      }
    };
  });

  jQuery(function() {
    return jQuery.mark.jump();
  });

}).call(this);
