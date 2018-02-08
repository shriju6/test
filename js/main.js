/*--------------------------------------------------------------
#Sticky Header
--------------------------------------------------------------*/
jQuery(document).ready(function($){
  if ($(window).width() > 1) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.site-header').addClass("sticky-header");
      }
      else {
        $('.site-header').removeClass("sticky-header");
      }
    });
  }

/*--------------------------------------------------------------
back to top
--------------------------------------------------------------*/
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = 100;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});
$('a.back-to-top, a.simple-back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  return false;
});
/*--------------------------------------------------------------
readmore
--------------------------------------------------------------*/
$('.about-read-more').click(function(){
$('.more-content').slideToggle('slow');
$(this).toggleClass('arrow-up');
});

/*--------------------------------------------------------------
smoth scroll
--------------------------------------------------------------*/
$('.main-navigation a[href*="#"]:not([href="#"]), .scroll-to-section a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - $('#masthead').outerHeight()
      }, 1000);
      return false;
    }
  }
});

//on page load scroll to hash element
var uri = window.location.toString();
if (uri.indexOf("#") > 0) {
  var hashValue = location.hash;
  var clean_uri = uri.substring(0, uri.indexOf("#"));
  window.history.replaceState({}, document.title, clean_uri);
  setTimeout(function(){
    $('html,body').animate({
      scrollTop: $(hashValue).offset().top
    }, 1000);
  },500);
}

});


