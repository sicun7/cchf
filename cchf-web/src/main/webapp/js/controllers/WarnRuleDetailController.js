define(['app'], function (app) {
    app.controller('WarnRuleDetailController', ['$scope', 'CommonService', function ($scope, CommonService) {
        var vm = this;
        vm.ruleTypes = CommonService.ruleTypes;
        vm.bugTypes = CommonService.bugTypes;
        vm.rule = { rec_log: true };

        vm.reset = function () {
            vm.rule = { rec_log: true };
        };

    }]);
});