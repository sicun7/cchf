define(['app'], function (app) {
    app.controller('SmsWarnDetailController', ['$scope', '$stateParams', 'CommonService', function ($scope, $stateParams, CommonService) {
        var vm = this;
        console.log($stateParams);
    }]);
});