require.config({
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
     * Экземпляр класса вида товаров
     *
     * @public
     * @name App.productsView
     * @type {Views.Products}
     */
    productsView: null,

    /**
     * Экземпляр класса вида товаров в корзине
     *
     * @public
     * @name App.basketProductsView
     * @type {Views.BasketProducts}
     */
    basketProductsView: null
};

require(
    ['app/views', 'bootstrap'],
    function (Views) {
        App.productsView = new Views.Products();
        App.basketProductsView = new Views.BasketProducts();
    }
);