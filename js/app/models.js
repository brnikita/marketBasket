define(
    ['backbone'],
    function (Backbone) {
        var Models =  {

            /**
             * Класс модели товара
             *
             * @class
             */
            Product: Backbone.Model.extend({

                /**
                 * @public
                 * @name Models.productModel#defaults
                 * @type {Object}
                 */
                defaults: {
                    img: '/img/products/i.jpg',
                    description: 'Демо',
                    price: '0'
                }
            })
        };

        return Models;
    });