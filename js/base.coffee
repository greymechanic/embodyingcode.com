---
---
$(document).ready ->
  # add target to all links
  $('a').attr 'target', '_blank'
  $('a.scroll-on-page-link,a.page-link').attr 'target', ''
  # menu
  $(".js-menu-trigger,.js-menu-screen").on "click touchstart", (e) ->
    $(".js-menu,.js-menu-screen").toggleClass "is-visible"
    e.preventDefault()
  if $("a.scroll-on-page-link").on "click touchstart"
    $(".js-menu,.js-menu-screen").toggleClass "is-visible" if $(".js-menu,.js-menu-screen").hasClass "is-visible"
  # expand section
  expanderTrigger = document.getElementById("js-expander-trigger")
  expanderContent = document.getElementById("js-expander-content")
  expanderTrigger2 = document.getElementById("js-expander-trigger-2")
  expanderContent2 = document.getElementById("js-expander-content-2")
  $("#js-expander-trigger").click ->
    $(this).toggleClass "expander-hidden"
  $("#js-expander-trigger-2").click ->
    $(this).toggleClass "expander-hidden"

# smooth scroll anchors
jQuery ->
  jQuery.mark = jump: (options) ->
    defaults = selector: "a.scroll-on-page-link"
    defaults.selector = options  if typeof options is "string"
    options = jQuery.extend(defaults, options)
    jQuery(options.selector).click (e) ->
      jumpobj = jQuery(this)
      target = jumpobj.attr("href")
      thespeed = 400
      offset = jQuery(target).offset().top - 86
      jQuery("html,body").animate
        scrollTop: offset, thespeed, "swing"
      e.preventDefault()

jQuery ->
  jQuery.mark.jump()
