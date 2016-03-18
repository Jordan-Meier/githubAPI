var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repos.js').getRepos;

$(document).ready(function () {
  $('#showRepos').hide();
  $('#getRepos').click(function () {
    var user = $('input#userName').val();
    $("#userPhoto").empty();
    $("#showUserName").empty();
    $("#githubUserName").empty();
    $("#showFollowers").empty();
    $("#repos").empty();
    $('#showRepos').show();
    getRepos(user);

  });

});
