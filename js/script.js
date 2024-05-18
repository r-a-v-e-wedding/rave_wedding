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
        $(".letter").attr("src", "assets/letter.png")
      }
    }

    //make buttons turn dark 
    // $("nav > a").on( "click", function() {
    //   $(this > "img").css("opacity ") 
    // });

    $( ".menu" ).on( "click", function() {
      let button = $(this).attr("id");
        buttonID = button.replace("-btn", "");

        let section = $(".section-desktop");
  
        let sectionID = buttonID;
        $(section).css("display", "none");
        $("#" + sectionID).css("display", "block");
    } );
});

