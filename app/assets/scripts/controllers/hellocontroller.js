'use strict';

var HelloController = function($scope, dataService) {
    var scope = $scope;

    scope.test = 'We are up and running from a required module!';

    dataService.getServerData().then(function (response) {
        console.log(response);
        response.content.console();
        scope.servicedata = response.content.name;
    }, function (err) {console.log(err);});
};

module.exports = HelloController;
