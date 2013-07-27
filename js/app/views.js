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
         * @private
         * @name Views
         * @type {Object}
         */
        var Views = {
            View: Backbone.View.extend({

            })
        };

        return Views;
    });