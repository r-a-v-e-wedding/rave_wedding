$(document).ready(function(){
    const mql = window.matchMedia("(max-width: 1100px)", "(max-width: 1100px) and (max-height: 700px)");

    mqlHandler();
    mql.addEventListener("change", mqlHandler);


    function mqlHandler(){
      let content = $("#content");
      let section = $("section");
      if (mql.matches) {
                  content.attr("class", "content-scroll");
                  section.attr("class", "section-mobile")
                  $(section).css("display", "block");
                  $(".letter").attr("src", "assets/letter@075x.png")
      } else {
        content.attr("class", "content-fixed");
        section.attr("class", "section-desktop")
        $(section).css("display", "none");
        $("#intro").css("display", "block");
        $("#cabin-img").css("display", "block");
        $(".letter").attr("src", "assets/letter.png")
      }
    }

    $(".row > a").on( "mousedown mouseup", function(btnChange) {
      let imgSRC = $(this).find("img").attr("src");
      imgnewSRC = imgSRC.replace(".png", "")
      if (btnChange.type === 'mousedown') {
        $(this).find("img").css({"filter": "brightness(0%) sepia(100%) blur(0.3px)", "mix-blend-mode": "overlay", "opacity": "40%"}) 
      }
      else {
        $(this).find("img").css({"filter": "none", "mix-blend-mode": "normal", "opacity": "100%"}) 
      }
    });

    $( ".popup a" ).on( "click", function() {
      $(".popup").css('display', 'none');
    })

    $( ".menu" ).on( "click", function() {
      let button = $(this).attr("id");
        buttonID = button.replace("-btn", "");

        let section = $(".section-desktop");
  
        let sectionID = buttonID;
        $(section).css("display", "none");
        $("#" + sectionID).css("display", "block");
    } );
});

