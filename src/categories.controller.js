(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
    var categorylist = this;

    var promise = MenuDataService.getAllCategories();

    promise.then(function (response) {
        categorylist.categories = response.data;
    });
}
})();

