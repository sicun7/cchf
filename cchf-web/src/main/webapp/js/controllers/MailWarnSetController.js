define(['app'], function (app) {
    app.controller('MailWarnSetController', ['$scope', 'CommonService', function ($scope, CommonService) {
        var vm = this;
        vm.smsWarnTypes = CommonService.smsWarnTypes;
        vm.smsWarn = {};

        vm.import = function () {
            CommonService.csvToArray('file_phone_import').then(function (data) {
                console.log(data);
            });
            console.log(vm.smsWarn.phone_nos);
        }
    }]);
});