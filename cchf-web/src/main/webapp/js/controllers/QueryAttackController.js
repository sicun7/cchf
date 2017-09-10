define(['app'], function (app) {
    app.controller('QueryAttackController', ['$scope', '$stateParams', 'CommonService', function ($scope, $stateParams, CommonService) {
        var vm = this;
        console.log($stateParams);
    }]);
});