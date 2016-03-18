var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {
  // var user = $('input#user').val();
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#userPhoto').append("<img src='" + response.avatar_url + "'>");
    $('#showFollowers').text("Number of Followers: " + response.followers);
    $('#githubUserName').text("Github User Name: " + response.login);
    $('#showUserName').text(response.name + "'s Github Info");

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    for (var i =0; i <= response.length; i++){
      // var date = moment.unix(response.bikes[i].date_stolen).format("MM/DD/YYYY");
      $('#repos').append("<li> Repository Name: " + response[i].name + ". Repository Description: " + response[i].description + ". </li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
