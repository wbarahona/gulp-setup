'use strict';

var listeners       = {};

var $toast           = $('.toast');

//
// Declare here all listener
// ------------------------------------------------------------------
    listeners.switches      = function () {
        $('#switch').change(function () {
            console.log(1);
            $toast.toggleClass('is-visible');
        });
    };

//
// Init all thangs here
// ------------------------------------------------------------------
    listeners.init          = function () {
        listeners.switches();
    };


module.exports = listeners;
