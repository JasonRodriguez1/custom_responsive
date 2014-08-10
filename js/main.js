/*
Author: Jason Rodriguez
*/

$(function() {
    var menu = "close";
    var map;

    $(window).load(function(){
        $("body").mCustomScrollbar({
          theme: "dark-thin"
        });
    });

    $('.menu-toggle').click(function() {
      if(menu == "close") {
          $('.navbar').css('-webkit-transform', 'translate(0, 0)');
          $('.title-container').css('-webkit-transform', 'translate(20%, 0');
          $('.map-container').css('-webkit-transform', 'translate(20%, 0');
          $('.main-footer').css('-webkit-transform', 'translate(20%, 0');
          menu = "open";
      } else {
          $('.navbar').css('-webkit-transform', 'translate(-100%, 0)');
          $('.title-container').css('-webkit-transform', 'translate(0, 0');
          $('.map-container').css('-webkit-transform', 'translate(0, 0');
          $('.main-footer').css('-webkit-transform', 'translate(0, 0');
          menu = "close";
      }
    });


    $('.js-map-link').click(function() {
        $('#map').slideToggle('expanded');
        map = new google.maps.Map(document.getElementById('#map'), mapOptions);
        google.maps.event.trigger(map, 'resize');
    });

    if(Modernizr.svg == false) {
        $('img[src$=".svg"]').each(function() {
            this.src = /(.*)\.svg$/.exec(this.src)[1] + '.png';
        });
    }

    Modernizr.load({
    test: Modernizr.audio,
    nope: {
    'mediaelementjs': 'js/vendor/mediaelement/mediaelement-and-player.min.js'
    },
    callback: {
      'mediaelementjs': function() {
        $('audio').mediaelementplayer();
      }
    }
        });
});
