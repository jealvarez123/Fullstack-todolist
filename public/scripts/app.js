console.log('Can I kick it');

var $todoList;

var allTodoList = [];

$(document).ready(function(){

  $todoList = $('#todoTarget');
  $.ajax({
    method: 'GET',
    url: '/api/todoList',
    success: on()
  });
  });
var on = () => {
  console.log($todoList);
}


$(document).ready(function () {
    $('button').click(function () {
      $('#todo').append("<ul>" + $("input[name=task]").val() +': ' + $("input[name=des]").val() +  " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("ul").remove();
    });
});
