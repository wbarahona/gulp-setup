(function () {
    'use strict';

    // Dependencies
    var $               = require('jquery'),
        material        = require('material'),
        listeners       = require('./modules/listeners');

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
