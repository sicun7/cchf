define(['app'], function (app) {
    app.controller('QueryIntegrityController', ['$scope', '$stateParams', 'CommonService', function ($scope, $stateParams, CommonService) {
        var vm = this;
        console.log($stateParams);
    }]);
});