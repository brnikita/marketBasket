require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "libs/jquery",
        "underscore": "libs/underscore",
        "backbone": "libs/backbone",
        "bootstrap": "libs/bootstrap",
        "json2": "libs/json2",
        "backboneLocalStorage": "libs/backboneLocalStorage"
    },

    shim: {
        "bootstrap": ["jquery"],
        "backbone": {
            "deps": ["underscore", "jquery", "json2"],
            "exports": "Backbone"
        },
        "backboneLocalStorage": ["backbone"]
    }
});

var App = {

    /**
     * @public
     * @function
     * @name App.init
     * @param {Backbone} Backbone
     * @param {Backbone.View} Views
     * @param {Backbone.Router} Router
     * @returns {undefined}
     */
    init: function (Backbone, Views, Router) {

        this.addListeners();
    },

    /**
     * Добавляем обработчики событий
     *
     * @private
     * @function
     * @name App.addListeners
     * @returns {undefined}
     */
    addListeners: function () {
    }
};

require(
    ['backbone', 'app/views', 'app/router', 'bootstrap'],
    function (Backbone, Views, Router) {
        App.init(Backbone, Views, Router);
    }
);