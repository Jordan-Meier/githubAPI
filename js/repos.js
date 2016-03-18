var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {
  // var user = $('input#user').val();
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
