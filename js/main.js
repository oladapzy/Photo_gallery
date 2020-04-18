/// Image category code ////
jQuery(document).ready(function ($) {
  $("a[data-rel^=lightcase]").lightcase();
});

/// Search Filter code ////
$("#search").keyup(function () {
  let currentQuery = $("#search").val().toLowerCase();
  $("#gallery img").filter(function () {
    let currentKeyword = $(this).attr("alt").toLowerCase();
    if (currentKeyword.indexOf(currentQuery) >= 0) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  });
});
