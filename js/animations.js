$(document).ready(function() {
  $('#tweet-controls').hide();
  $('.tweet-actions').hide();

  $('#tweet-content>.tweet-compose').on('click', function() {
    $('#tweet-controls').show();
    $('#tweet-content>.tweet-compose').css('height', '5em');
  });

  $('.tweet-compose').keyup(updateCount);
  $('.tweet-compose').keydown(updateCount);

  function updateCount() {
    var cs = 140 - $(this).val().length;
    $('#char-count').text(cs);
    if (cs <= 10) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    }
    if (cs < 0) {
      $('#tweet-submit').prop('disabled', true);
    } else {
      $('#tweet-submit').prop('disabled', false);
    }
  };

  $('#tweet-submit').on('click', function() {
    var ttweet = $('.tweet:first-of-type').clone();
     ttweet.find('.tweet-text').text($('textarea.tweet-compose').val());
     ttweet.find('img.avatar').attr('src','img/alagoon.jpg');
     ttweet.find('.content strong.fullname').text($('#name').text());

    $(ttweet).prependTo($('#stream'));
  })

  $(function() {
    $('.stats').hover(function(){
      $('.tweet-actions').fadeIn();
    }, function() {
      $('.tweet-actions').fadeOut();
    });
  });

  $(function() {
    $('.tweet-actions').hover(function(){
      $('.tweet-actions').fadeIn();
    }, function() {
      $('.tweet-actions').fadeOut();
    });
  });

});
