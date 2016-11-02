(function() {
    'use strict';
    window.$ghOrgs = window.$ghOrgs || {};


    $('button')
        .on('click', function getGHInfo(event) {
            var token = $('input').val();
            var githubData = window.$ghOrgs.getGithubData(token);

        })

    window.$ghOrgs.buildList = function buildList(data) {
      data.forEach(function getGHOrgs(githubData) {
          $('ul')
            .append($('<li><img src=#></li>'))
        console.log(githubData);
      })
    }


    // event handler for button
    // when clicked get github data give it the token





})();
