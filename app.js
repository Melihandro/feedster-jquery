var main = function() {
  $('.notification img').click(function(){
    $('.notification-menu').toggle();
  });
  $('.btn').click(function() {
    $('.btn').toggleClass('btn-like');
  });
};

$(document).ready(main);