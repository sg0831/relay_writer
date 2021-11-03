$(document).ready( function() {
  $.ajax({
    url: "hppt://localhost:8000/api/user",
    type: "GET",
    dataType: "json",
    success: function(res) {
      alert("ajax 성공!");
      // $("#backend-test").append(res);
    }
  })
})