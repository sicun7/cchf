define(['app'], function (app) {
    app.controller('MailWarnListController', ['$scope', 'CommonService', function ($scope, CommonService) {
        var vm = this;
        vm.smsWarnList = [{ id: 121, name: 'lisan' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    }]);
});