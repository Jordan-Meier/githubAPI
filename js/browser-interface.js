var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repos.js').getRepos;

$(document).ready(function () {
  $('#getRepos').click(function () {
    var user = $('input#userName').val();
    $("#userPhoto").empty();
    $("#showUserName").empty();
    $("#githubUserName").empty();
    $("#showFollowers").empty();
    $("#repos").empty();

    getRepos(user);

  });

});
