$(document).ready(function(){
  $("form").submit(function(event){
    var activity = parseInt($("select#activity").val());
    var color = parseInt($("select#color").val());
    var duration = parseInt($("select#duration").val());
    var describe = parseInt($("select#describe").val());
    var number = parseInt($("select#describe").val());
    var total = activity + color + duration + describe + number
    if (total >= 13) {
      $(".questions").hide();
      $(".japan").show();
      $("body").addClass("japanstyle");
    } else if (total >= 11) {
      $(".questions").hide()
      $(".newzealand").show()
      $("body").addClass("newzealandstyle");
    } else if (total >= 9) {
      $(".questions").hide();
      $(".london").show();
      $("body").addClass("londonstyle");
      $(".jumbotron").addClass("londonjumbo");
      $(".jumbotron").addClass("londonjumbo h1");
      $("footer").addClass("londonfooter");
    } else if (total >= 4) {
      $(".questions").hide()
      $(".hawaii").show()
      $("body").addClass("hawaiistyle");
      $(".jumbotron").addClass("hawaiijumbo");
      $(".jumbotron").addClass("hawaiijumbo h1");
      $(".jumbotron").addClass("hawaiijumbo h3");
    } else {
      alert("Please complete the questions")
    }
    event.preventDefault();
  });
});
