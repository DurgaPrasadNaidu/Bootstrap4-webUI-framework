$(document).ready(function(){
    $('#reservationDiv').modal('hide');
    $("#loginModal").modal('hide');
    $("#mycarousel").carousel( { interval: 5000 } );
     $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
   
});

$('#reserveButton').click(function(){
   $('#reservationDiv').modal('show');
   });
  
   $('#loginButton').click(function(){
     $('#loginModal').modal('show');
  });
  $('.close').click(function(){
    $('#reservationDiv').modal('hide');
    $('#loginModal').modal('hide');

  });

});
