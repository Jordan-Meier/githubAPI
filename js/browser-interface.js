var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repos.js').getRepos;

$(document).ready(function () {
  $('#getRepos').click(function () {
    var user = $('input#userName').val();
    getRepos(user);

    // var user = $('input#userName').val();
    // $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    //   console.log(response);
    // }).fail(function(error){
    //   console.log(error.responseJSON.message);
    // });
  });

});
