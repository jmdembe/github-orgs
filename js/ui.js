(function() {
    'use strict';
    window.ghOrgs = window.ghOrgs || {};


    $('button')
        .on('click', function getGHInfo(event) {
            var token = $('input').val();
            var githubData = window.ghOrgs.getGithubData(token);

        })//ends button click event

    window.ghOrgs.buildList = function buildList(data) {
      data.forEach(function getGHOrgs(githubData) {
          $('ul')
            .append($('<li><img src='+githubData.avatar_url+'/> '+githubData.login+'</li>'))
        console.log(githubData);
      })
    }//ends buildList function




})();
