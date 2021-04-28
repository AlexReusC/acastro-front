var url = "http://localhost:8087/api/users";

function postUser() {
  var myName = $('#name').val();
  var myEmail = $('#email').val();
  var myAge = $('#age').val();
  var myComments = $('#comments').val();

  var myUser = {
    name: myName,
    email: myEmail,
    age: myAge,
    comments: myComments
  };
  console.log(myUser);

  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      $("#resultado").html(JSON.stringify(data.user));
    },
    data: JSON.stringify(myUser)
  })

}

function getUsers() {
  $.getJSON(url,
    function(json){
      var arrUsers = json.users;

      var htmlTabUsers = '<table border=1>'

      arrUsers.forEach(function(item) {
        htmlTabUsers += '<tr>' +
          '<td>' + item.id + '</td>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.email + '</td>' +
          '<td>' + item.age + '</td>' +
          '<td>' + item.comments + '</td>' +
          '</tr>'
      })
      htmlTabUsers += '</table>';

      console.log(htmlTabUsers)

      $('#resultado').html(htmlTabUsers)

    }
  )
}
