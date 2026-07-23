/*
Programs the buttons to load pages into the content section of the page.
*/

$(".nav").click(function () {
  $("#content").load($(this).data("page"));
  
  $(".nav").removeClass("active");
  $(this).addClass("active");
});

$("#content").load("pages/1.html");