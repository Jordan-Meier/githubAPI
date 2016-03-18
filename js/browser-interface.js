var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repos.js').getRepos;

$(document).ready(function () {
  $('#getRepos').click(function () {
    var user = $('input#userName').val();

    getRepos(user);

  });

});
