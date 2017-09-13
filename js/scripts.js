$(document).ready(function() {
  $("#btnBuy").click(function() {
    $("#formOne").submit(function(event) {
      var name1=($("#name").val());
      var address1=($("#address").val());
      var jewelry1 = $("input:radio[name=jewelry]:checked").val();
      $("#purchaseConfirmation").show();

      $(".name1").text(name1);
      $(".address1").text(address1);
      $(".jewelry1").text(jewelry1);





event.preventDefault();
    });
  });








});
