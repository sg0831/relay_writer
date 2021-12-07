// $(document).ready( function() {
//   $.ajax({
//     url: "http://152.70.251.145:8000/api/user/",
//     type: "GET",
//     dataType: "json",
//     success: function(res) {
//       alert("ajax 성공! value: " + res[0].username);
//     },
//     error : function(XMLHttpRequest, textStatus, errorThrown){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
//       alert("통신 실패.")
//     }
//   })
// })