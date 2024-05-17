$(document).ready(function(){
    const mql = window.matchMedia("(max-width: 1000px)", "(max-width: 1000px) and (max-height: 800px)");

    mqlHandler();
    mql.addEventListener("change", mqlHandler);


    function mqlHandler(){
      let content = $("#content");
      let section = $("section");
      if (mql.matches) {
        console.log("working")
                  content.attr("class", "content-scroll");
                  section.attr("class", "section-mobile")
                  $(section).css("display", "block");
      } else {
        content.attr("class", "content-fixed");
        section.attr("class", "section-desktop")
        $(section).css("display", "none");
        $("#intro").css("display", "block");
      }
    }

    $( ".menu" ).on( "click", function() {
      let button = $(this).attr("id");
        buttonID = button.replace("-btn", "");

        let section = $(".section-desktop");
      
  
        let sectionID = buttonID;
        $(section).css("display", "none");
        console.log($(section))
        $("#" + sectionID).css("display", "block");
    } );
});

