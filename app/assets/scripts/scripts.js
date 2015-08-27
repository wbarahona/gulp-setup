(function () {
    'use strict';

    // Dependencies
    var $               = require('jquery'),
        material        = require('material'),
        listeners       = require('./modules/listeners'),
        angular         = require('angular');

        var HelloController         = require('./controllers/hellocontroller');
        var DataService             = require('./model/services/dataservice');

        var app = angular.module('myApp', []);
        // Services
        app.service('DataService', ['$q','$http',DataService]);
        // Controllers
        app.controller('HelloController', ['$scope', 'DataService', HelloController]);



        // Start all events here
        function init () {
            // Here below all inits you need
            listeners.init();
        }

        $('document').ready(function () {
            // Init all things
            init();
        });
}());
