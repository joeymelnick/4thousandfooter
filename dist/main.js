$(document).ready(function(){var n=0,e=$(".headerMain"),t=e.offset();$(document).scroll(function(){n=$(this).scrollTop(),n>t.top?$(".headerMain").css("background-color","rgba(34,34,34,0.9)"):$(".headerMain").css("background-color","transparent")})}),$(document).ready(function(){$("#rotatingSection > div:gt(0)").hide(),setInterval(function(){$("#rotatingSection > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#rotatingSection")},5e3)});