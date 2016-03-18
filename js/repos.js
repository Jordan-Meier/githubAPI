var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {
  // var user = $('input#user').val();
  // $("#showRepos").empty();
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#userPhoto').append("<img src='" + response.avatar_url + "'>");
    $('#showFollowers').text("Number of Followers: " + response.followers);
    $('#githubUserName').text("Github User Name: " + response.login);
    $('#showUserName').text(response.name + "'s Github Info");

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);

    for (var i =0; i <= response.length; i++){
      var last_updated = new Date(response[i].updated_at);
      $('#repos').append("<div id='singleRepo'><h5> Repository Name: " + response[i].name + "</h5><h5> Date Last Updated: " + last_updated + "</h5><h5>Repository Description: " + response[i].description + ".</h5></div><br>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
