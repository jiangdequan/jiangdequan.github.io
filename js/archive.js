$(document).ready(function(){var l=$(".simple-appbar"),a=$("#simple-archive-title").text(),i=140;"Archives"===a&&(i=90);var s=!1;$(window).bind("scroll",function(){var e=$(window).scrollTop();s=i<e?(s||(l.addClass("mdui-appbar"),$("#simple-header-title small").text(a)),!0):(s&&($("#simple-header-title small").text(""),l.removeClass("mdui-appbar"),l.addClass("simple-appbar")),!1)}),$("#simple-all").click(function(){$(".simple-archive-labels").toggle(),$(".simple-archive-articles").toggle()})});