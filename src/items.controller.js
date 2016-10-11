(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService', '$stateParams'];
    function ItemsController(MenuDataService, $stateParams) {
        var items = this;

        var short_name = $stateParams.categoryId;

        var promise = MenuDataService.getItemsForCategory(short_name);

        promise.then(function (response) {
            items.menu_items = response.data.menu_items;
        });
    }
})();
