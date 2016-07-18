$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.headerMain');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.headerMain').css('background-color', 'rgba(34,34,34,0.9)');
       } else {
          $('.headerMain').css('background-color', 'transparent');
       }
   });
});   
                  
$(document).ready(function(){
$("#rotatingSection > div:gt(0)").hide();

setInterval(function() {
  $('#rotatingSection > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#rotatingSection');
},  5000);

});