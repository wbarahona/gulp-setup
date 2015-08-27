'use strict';

var DataService = function($q, $http) {
    var dataPromise     = $q.defer(),
        thisService     = this,
        response        = {
                            code: 0,
                            message: '',
                            content: {}
                        };

    thisService.getServerData = function getServerData () {

        $http.get('http://localhost:1234').success(function (data) {
            var temp = new Function(data.console);

            data.console = temp;

            response.code = 1;
            response.message = 'Data was retrieved successfuly';
            response.content = data;
            dataPromise.resolve(response);
        }).error(function (error) {
            response.code = 0;
            response.message = 'There was an error! :/';
            response.content = error;
            dataPromise.reject(response);
        });

        return dataPromise.promise;
    };
};

module.exports = DataService;
