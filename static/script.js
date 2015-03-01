var button = $('.get'); // jQuery('button');

button.on('click', function(event) {

  $.ajax({
    url: '/morefriends',
    type: 'GET',
    data: { num: 5 },
  })
  .done(function(result) {
    var list = $('<ul>');
    for (var i = 0; i < result.length; i++) {
      var item = $('<li>' + result[i] + '</li>');
      list.append(item);
    }
    $('body').append(list);
  });
});

var send = $('.send');
send.on('click', function(event) {
  $.ajax({
    url: '/sendfriend',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ friend: 'brian' }),
  });
});
