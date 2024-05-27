$(document).ready(function () {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loading").style.visibility = "visible";
    } else {
      document.querySelector("#loading").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };

  let content = $("#content");
  let section = $("section");

  var campImg = $(".img-large.camp");
  var driveImg = $(".img-large.drive");

  function hideAll() {
    $("#location-sign").hide();
    $(".sign-legs").hide();
    $("#location").css("background", "#FFFFFF");
    $(".spacer.desktop").hide();
  }

  function showAll() {
    $("#location-sign").show();
    $(".sign-legs").show();
    $("#location").css("background", "#B8E4CB");
    $(".spacer.desktop").show();
  }

  const mql = window.matchMedia("(max-width: 1100px)", "(max-width: 1100px) and (max-height: 700px)");

  mqlHandler();
  $(mql).on("change", mqlHandler);

  function mqlHandler() {
    if (mql.matches) {
      content.attr("class", "content-scroll");
      section.attr("class", "section-mobile")
      $(section).css("display", "block");
      // $(".letter").attr("src", "assets/letter@075x.png")
      $("#location-sign").show();
      $("#location").css("background", "#B8E4CB");
      $(".img-large").css("display", "none");
      $("#location .section-content img").css("cursor", "default");
      $(".img-large").css("cursor", "default");
    } else {
      content.attr("class", "content-fixed");
      section.attr("class", "section-desktop")
      $(section).css("display", "none");
      $("#intro").css("display", "block");
      $("#cabin-img").css("display", "block");
      // $(".letter").attr("src", "assets/letter.png")
      $("#location .section-content img").css("cursor", "zoom-in");
      $(".img-large").css("cursor", "zoom-out");
    }
  }

  $(".row > a").on("mousedown mouseup", function (btnChange) {
    let imgSRC = $(this).find("img").attr("src");
    imgnewSRC = imgSRC.replace(".png", "")
    if (btnChange.type === 'mousedown') {
      $(this).find("img").css({ "filter": "brightness(0%) sepia(100%) blur(0.3px)", "mix-blend-mode": "overlay", "opacity": "40%" })
    }
    else {
      $(this).find("img").css({ "filter": "none", "mix-blend-mode": "normal", "opacity": "100%" })
    }
  });

  $(".popup a").on("click", function () {
    $(".popup").css("display", "none");
  })

  $(".menu").on("click", function () {
    let button = $(this).attr("id");
    buttonID = button.replace("-btn", "");

    let section = $(".section-desktop");

    let sectionID = buttonID;
    $(section).css("display", "none");
    $("#" + sectionID).css("display", "block");

    if ($(campImg || driveImg).css("display", "inline")) {
      showAll();
      $(".img-large").css("display", "none");
    }

  });

  $(".content-fixed #location img").on("click", function () {
    console.log(mql.matches)
    if (content.hasClass("content-fixed") && $(this).is(".camp")) {
      $(campImg).toggle();
      if ($(campImg).is(":visible")) {
        hideAll();
      } else {
        showAll();
      }
    } else if (content.hasClass("content-fixed") && $(this).is(".drive")) {
      $(driveImg).toggle();
      if ($(driveImg).is(":visible")) {
        hideAll();
      } else {
        showAll();
      }
    }
  });

});

