$( document ).ready(function() {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      dist: 0,
      padding: 10,
      numVisible: 4
    });
    $('#buttonLeft').click(function(){
      $(".slider").scrollLeft(1000);
    });
    $('#buttonRight').click(function(){
      $(".slider").scrollRight(1000);
    });
});
