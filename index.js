$("#menu-btn").click(function () {
    $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
    $("nav .navigation ul").removeClass("active");
});
$(document).ready(function(){
    $('.slick-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  });