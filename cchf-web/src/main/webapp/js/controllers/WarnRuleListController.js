define(['app'], function (app) {
    app.controller('WarnRuleListController', ['$scope', 'CommonService', function ($scope, CommonService) {
        var vm = this;
        vm.bugTypes = CommonService.bugTypes;
        vm.ruleList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    }]);
});