$(document).ready(function() {
  $("ul li span").append('<i class="far fa-trash-alt"></i>');
});
//Check off specific Todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
// Click on X to delete todo
$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});
$("input[type='text']").on("keypress", function(event) {
  if (event.which === 13) {
    if ($(this).val() != "") {
      var todoText = $(this).val();
      var span = '<span><i class="far fa-trash-alt"></i></span>';
      $("ul").append(`<li>${span} ${todoText}</li>`);
      $("input[type='text']").val("");
    }
  }
});
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
