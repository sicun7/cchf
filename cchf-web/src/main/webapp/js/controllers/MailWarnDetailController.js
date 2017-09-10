define(['app'], function (app) {
    app.controller('MailWarnDetailController', ['$scope', '$stateParams', 'CommonService', function ($scope, $stateParams, CommonService) {
        var vm = this;
        console.log($stateParams);
    }]);
});