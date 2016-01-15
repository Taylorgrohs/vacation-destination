$(document).ready(function(){
  $("form").submit(function(event){
    var activity = parseInt($("select#activity").val());
    var color = parseInt($("select#color").val());
    var duration = parseInt($("select#duration").val());
    var describe = parseInt($("select#describe").val());
    var number = parseInt($("select#describe").val());
    var total = activity + color + duration + describe + number
    if (total > 13) {
      $("form").hide()
      $(".japan").show()
    } else if (total > 11) {
      $("form").hide()
      $(".newzealand").show()
    } else if (total > 9) {
      $("form").hide()
      $(".london").show()
    } else if (total > 4) {
      $("form").hide()
      $(".hawaii").show()
    } else {
      alert("Please complete the questions")
    }
    event.preventDefault();
  });
});
