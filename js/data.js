(function() {
    'use strict';
    window.$ghOrgs = window.$ghOrgs || {};

    window.$ghOrgs.getGithubData = function getGithubData(token) {
      // ajax call!
      // when done... execute a fn on the ui module passing in the data
      $.ajax({
          url: 'https://api.github.com/users/jisaacks/orgs',
          dataType: 'json',
          headers: {
              Authorization: 'token ' + token
          }
        })
        .done(function handleGHOrgs(data){
            window.$ghOrgs.buildList(data);
          })
          .fail(function handleGHOrgError(xhr) {
              console.log("Well this is embarrassing...", xhr);
          })
  }
})();
