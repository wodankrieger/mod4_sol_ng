(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

    console.log("MenuDataService is loaded");

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/categories.json"
        });
        console.log(response);
        return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
        var response = $http({
            method: "GET",
            url: "davids-restaurant.herokuapp.com/menu_items.json?category=",
            params: {
                category: categoryShortName
            }
        });
        console.log(response);
        return response;
    }
}
})();
