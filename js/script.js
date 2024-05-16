$(document).ready(function(){
    const mql = window.matchMedia("(max-width: 1000px)", "(max-width: 1000px) and (max-height: 800px)");
    mql.addEventListener("change", (event) => {
      if (event.matches) {
        window.location.href = "../index.html"; 
        
      //   $("section").hide();

      //  $(".btn").on( "click", function() {

      //   let section = $("section");
      //   var btnID = this.id;
      //   btnID = btnID.replace("-btn", "");

      //   console.log(btnID)

      //   section.id

      //   $(section).hide();
      //   $("#" + btnID).show();

      //  })

      } else {
        // $("section").show();
        // console.log("desktop view");
      }
    });
    
});

// $(window).resize(function() {
//     console.log($(window).width())
//     if ($(window).width() <= 980 | ($(window).width() <= 980) & ($(window).height() <= 800))   {
//         // $("#schedule").show();
//         // $("#location").show();
//         // $("#lodging").show();
//         // $("#faq").show();
//         // $("#gift").show();
//         // $("#outreach").show();
//         // $("#rsvp").show();
//      }
//      else {
//         console.log('More than 960');
//     //     /** desktop view **/
//     //     $("#schedule").hide();
//     //     $("#location").hide();
//     //     $("#lodging").hide();
//     //     $("#faq").hide();
//     //     $("#gift").hide();
//     //     $("#outreach").hide();
//     //     $("#rsvp").hide();
//     //  }

//     });

// $(document).ready(function(){


//     // $("#hide").click(function(){
//     //   $("p").hide();
//     // });
//     // $("#show").click(function(){
//     //   $("p").show();
//     // });
//   });