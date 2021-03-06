$( document ).ready(function(){
  //configure mobile sidenav
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
  );

  //configure scrollfire for page sections
  var options = [
      {selector: '.about-section', offset: 300, callback: function(el) {
        $('.about-me').css('visibility', 'visible');
        $('.about-me').addClass('animated fadeInUp');
      }},
      {selector: '.about-section', offset: 900, callback: function(el) {
        $('#aHome').removeClass('active');
        $('#aAbout').addClass('active');
        $('#aContact').removeClass('active');
      }},
      {selector: '.contact-section', offset: 900, callback: function(el) {
        $('#aHome').removeClass('active');
        $('#aAbout').removeClass('active');
        $('#aContact').addClass('active');
      }}
    ];
    Materialize.scrollFire(options);

  $(window).on('wheel', function(e) {

  	var delta = e.originalEvent.deltaY;

  	if (delta < 0) {
      $('#aHome').removeClass('active');
      $('#aAbout').removeClass('active');
      $('#aContact').removeClass('active');
    }
  });

  //smooth scroll
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('#aHome').on('click', function() {
    $('#aHome').addClass('active');
    $('#aAbout').removeClass('active');
    $('#aContact').removeClass('active');
  });

  $('#aAbout').on('click', function() {
    $('#aHome').removeClass('active');
    $('#aAbout').addClass('active');
    $('#aContact').removeClass('active');
  });

  $('#aContact').on('click', function() {
    $('#aHome').removeClass('active');
    $('#aAbout').removeClass('active');
    $('#aContact').addClass('active');
  });
});
