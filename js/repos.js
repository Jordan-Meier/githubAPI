var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {

  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#userPhoto').append("<img src='" + response.avatar_url + "'>");
    $('#showFollowers').text("Number of Followers: " + response.followers);
    $('#githubUserName').text("Github User Name: " + response.login);
    $('#showUserName').text(response.name + "'s Github Info");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
    response.sort(function(a,b){
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
    for (var i =0; i <= response.length; i++){
      var last_updated = new Date(response[i].updated_at);
      $('#repos').append("<div id='singleRepo'><h5 id='repoName'>Repository Name: <a href='" + response[i].html_url + "'>" +
        response[i].name +
        "</a></h5><h5> Date Last Updated: " +
        last_updated +
        "</h5><h5>Repository Description: " +
        response[i].description +
        ".</h5></div><br>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
