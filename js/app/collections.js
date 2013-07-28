define(
    ['backbone', './models', 'backboneLocalStorage'],
    function (Backbone, Models) {
        var Collections = {

            /**
             * Класс коллекции товаров
             *
             * @class
             */
            BasketProducts: Backbone.Collection.extend({

                /**
                 * Переписываем дефолтный метод Backbone.sync на метод адаптера
                 * для Local Storage
                 *
                 * @private
                 * @name Collections.BasketProducts#model
                 * @type {Backbone.LocalStorage}
                 */
                localStorage: new Backbone.LocalStorage("marketBasket"),

                /**
                 * Модель товара
                 *
                 * @public
                 * @name Collections.BasketProducts#model
                 * @type {Backbone.Model}
                 */
                model: Models.Product
            }),

            /**
             * Класс коллекции товаров
             *
             * @class
             */
            Products: Backbone.Collection.extend({

                /**
                 * Данные коллекции
                 *
                 * @private
                 * @name Collections.Products#url
                 * @type {String}
                 */
                url: '/products.json',

                /**
                 * Модель товара
                 *
                 * @public
                 * @name Collections.Products#model
                 * @type {Backbone.Model}
                 */
                model: Models.Product
            })
        };

        return Collections;
    });
