define(['app'], function (app) {
    app.controller('QuerySoftwareController', ['$scope', '$stateParams', 'CommonService', function ($scope, $stateParams, CommonService) {
        var vm = this;
        console.log($stateParams);
    }]);
});