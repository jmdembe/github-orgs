(function() {
    'use strict';


    $('button')
        .on('click', function getGHInfo(event) {
            var token = $('input').val();
            $.ajax({
                url: 'https://api.github.com/users/jisaacks/orgs',
                dataType: 'json',
                headers: {
                    Authorization: 'token ' + token
                }
            })
        .done(function handleGHOrgs(data){
            console.log("YAY DATA!");
            console.log(data);
        })
        .fail(function handleGHOrgError(xhr) {
            console.log("Well this is embarrassing...", xhr);
        });

      });

})();
