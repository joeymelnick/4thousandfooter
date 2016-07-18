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