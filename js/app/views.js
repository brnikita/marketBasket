define(
    ['backbone', './collections'],
    function (Backbone, Collections) {

        /**
         * Возарвщает шаблон по id
         *
         * @private
         * @function
         * @name template
         * @param {String} id Указываем id шаблона для рендеринга
         * @returns {Object}
         */
        var template = function (id) {
            return _.template($('#' + id).html());
        };

        /**
         * Объект содержащий классы видов
         *
         * @public
         * @name Views
         * @type {Object}
         */
        var Views = {

            /**
             * Класс создания вида товара
             *
             * @class
             */
            Product: Backbone.View.extend({

                /**
                 * @private
                 * @name Views.Product#tagName
                 * @type {String}
                 */
                tagName: 'li',

                /**
                 * @private
                 * @name Views.Product#className
                 * @type {String}
                 */
                className: 'span2 product-item',

                /**
                 * Шаблон товара
                 *
                 * @private
                 * @name Views.Product#template
                 * @type {String}
                 */
                template: template('productTemplate'),

                /**
                 * Обработчики событий
                 *
                 * @private
                 * @name Views.Product#events
                 * @type {Object}
                 */
                events: {
                    'click a': 'addToBasket'
                },

                /**
                 * Метод добавления товара в корзину
                 *
                 * @private
                 * @function
                 * @name Views.Product#addToBasket
                 * @returns {boolean}
                 */
                addToBasket: function(){
                    App.basketProductsView.collection.create(this.model.toJSON(null));
                    return false;
                },

                /**
                 * Отрисовываем товар
                 *
                 * @public
                 * @function
                 * @name Views.Product#render
                 * @returns {Product}
                 */
                render: function () {
                    this.$el.html(this.template(this.model.toJSON(null)));
                    return this;
                }
            }),

            /**
             * Класс создания вида списка товаров
             *
             * @class
             */
            Products: Backbone.View.extend({

                /**
                 * Id корневого элемента
                 *
                 * @private
                 * @name Views.Products#el
                 * @type {String}
                 */
                el: '#products-list',

                /**
                 * Отрисовываем список товаров
                 *
                 * @public
                 * @function
                 * @name Views.Products#render
                 * @returns {Backbone.View}
                 */
                render: function () {
                    this.collection.each(this.addOne, this);
                    return this;
                },

                /**
                 * Добавляем товар
                 *
                 * @private
                 * @function
                 * @name Views.Products#addOne
                 * @param {Backbone.Model} product
                 * @returns {undefined}
                 */
                addOne: function (product) {
                    var productView = new Views.Product({model: product});
                    this.$el.append(productView.render().$el);
                },

                /**
                 * @constructor
                 * @name Views.Products#initialize
                 * @returns {undefined}
                 */
                initialize: function(){
                    this.collection = new Collections.Products();
                    this.collection.on('reset', this.render, this);
                    this.collection.fetch({reset: true});
                }
            }),

            /**
             * Класс создания вида товара в корзине
             *
             * @class
             */
            BasketProduct: Backbone.View.extend({

                /**
                 * @private
                 * @name Views.BasketProduct#tagName
                 * @type {String}
                 */
                tagName: 'li',

                /**
                 * @private
                 * @name Views.BasketProduct#className
                 * @type {String}
                 */
                className: 'basket-product-item',

                /**
                 * Шаблон товара в корзине
                 *
                 * @private
                 * @name Views.Product#template
                 * @type {String}
                 */
                template: template('basketProductTemplate'),

                /**
                 * Обработчики событий
                 *
                 * @private
                 * @name Views.Product#events
                 * @type {Object}
                 */
                events: {
                    'click a': 'removeFromBasket'
                },

                /**
                 * Метод удаления товара из корзины
                 *
                 * @private
                 * @function
                 * @name Views.Product#removeFromBasket
                 * @returns {boolean}
                 */
                removeFromBasket: function(){
                   App.basketProductsView.collection.where({'productId': this.model.get('productId')})[0].destroy();
                   return false;
                },

                /**
                 * Отрисовываем товар
                 *
                 * @public
                 * @function
                 * @name Views.Product#render
                 * @returns {Product}
                 */
                render: function () {
                    this.$el.html(this.template(this.model.toJSON(null)));
                    return this;
                }
            }),

            /**
             * Класс создания вида списка товаров в корзине
             *
             * @class
             */
            BasketProducts: Backbone.View.extend({

                /**
                 * Id корневого элемента
                 *
                 * @private
                 * @name Views.BasketProducts#el
                 * @type {String}
                 */
                el: '#basket-products-list',

                /**
                 * Отрисовываем список товаров
                 *
                 * @public
                 * @function
                 * @name Views.BasketProducts#render
                 * @returns {Backbone.View}
                 */
                render: function () {
                    this.$el.html('');
                    this.collection.each(this.addOne, this);
                    return this;
                },

                /**
                 * Добавляем товар
                 *
                 * @private
                 * @function
                 * @name Views.BasketProducts#addOne
                 * @param {Backbone.Model} product
                 * @returns {undefined}
                 */
                addOne: function (product) {
                    var basketProductView = new Views.BasketProduct({model: product});
                    this.$el.append(basketProductView.render().$el);
                },

                /**
                 * @constructor
                 * @name Views.BasketProducts#initialize
                 * @returns {undefined}
                 */
                initialize: function(){
                    this.collection = new Collections.BasketProducts();
                    this.collection.on('reset', this.render, this);
                    this.collection.on('add', this.render, this);
                    this.collection.on('remove', this.render, this);
                    this.collection.fetch({reset: true});
                }
            })
        };

        return Views;
    });