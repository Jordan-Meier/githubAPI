var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {
  // var user = $('input#user').val();
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#showUserName').text("User Name: " + response[0].owner.login);

    for (var i =0; i <= response.length; i++){
      // var date = moment.unix(response.bikes[i].date_stolen).format("MM/DD/YYYY");
      $('#repos').append("<li> Repository Name: " + response[i].name + ". Repository Description: " + response[i].description + ". </li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
