$( document ).ready(function() {

    // Some initialize
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      dist: 0,
      padding: 10,
      numVisible: 4
    });

    // Get the header height for fixed menu purpose
    var headerHeight = $('#homeSection').height();

    // Show/hide the menu based on the header visibility in the viewport
    function menuVisibility(){
      if($(window).scrollTop() > headerHeight-1){
        $('#mainMenuFixed').show();
      }else{
        $('#mainMenuFixed').hide();
      }
    }

    //Check the opening position
    menuVisibility();

    //Check the header visibility when scrolling
    $(window).scroll(function (event) {
        menuVisibility();
    });

    // Buttons for slider
    $('#scrollButtonLeft').click(function(){
      $('.slider').animate({scrollLeft: -9999});
    });

    $('#scrollButtonRight').click(function(){
      $('.slider').animate({scrollLeft: 9999});
    });

    // Check the active section and give an active class to the menu list
    function checkActiveSection(){
      var sections = ["homeSection","aboutUsSection","whatWeDoSection","meetTheTeamSection","ourWorkSection","getInTouchSection"];

      sections.forEach(function(section){
          if($(this).scrollTop()>=$('#'+section).position().top-20 && $(this).scrollTop()<($('#'+section).position().top+$('#'+section).height())){
              if(!$("."+section+"Link").hasClass("active")){
                  $("."+section+"Link").addClass("active");
              }
          }else{
              if($("."+section+"Link").hasClass("active")){
                  $("."+section+"Link").removeClass("active");
              }
          }
      });

      // If the viewport reach the bottom, then the selected menu item must be Get In Touch section/Footer
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
         $(".getInTouchSectionLink").addClass("active");
         $(".ourWorkSectionLink").removeClass("active");
       }

    }

    // Check the opening position
    checkActiveSection()

    // Check when scrolling
    $(document).on('scroll', function() {
        checkActiveSection();
    });

    // Make the anchor link will scroll the page
    scrollIt = function(){
      $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
          scrollTop: position
        });
      });
    }

    scrollIt();

    // Use the reveal animation
    ScrollReveal().reveal('#homeSection a img', {delay:200});
    ScrollReveal().reveal('#headerMainTitle', {delay:400});
    ScrollReveal().reveal('#mainMenu', {delay:600});
    ScrollReveal().reveal('.sectionTitle');
    ScrollReveal().reveal('section h1', {delay:200});
    ScrollReveal().reveal('section img', {delay:400});
    ScrollReveal().reveal('#aboutUsSection .sectionTitle', {delay:600});
    ScrollReveal().reveal('#aboutUsSection p', {delay:400});
    ScrollReveal().reveal('#whatWeDoSection h3', {delay:600});
    ScrollReveal().reveal('#meetTheTeamSection .name', {delay:600});
    ScrollReveal().reveal('#meetTheTeamSection .title', {delay:800});
    ScrollReveal().reveal('#meetTheTeamSection .socmed', {delay:1000});
    ScrollReveal().reveal('#ourWorkSection .slider', {delay:800});

});
