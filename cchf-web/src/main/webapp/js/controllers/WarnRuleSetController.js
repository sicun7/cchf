define(['app'], function (app) {
    app.controller('WarnRuleSetController', ['$scope', '$state', 'CommonService', 'HttpService', function ($scope, $state, CommonService, HttpService) {
        var vm = this;
        vm.ruleTypes = CommonService.ruleTypes;
        vm.bugTypes = CommonService.bugTypes;
        vm.rule = {rec_log: true};

        vm.reset = function () {
            vm.rule = {rec_log: true};
        };

        //$state.go('app.warn_rule_list');

        console.log($state);

        var obj = {"user_name": "test_user1", "password": "123xxx"};


        HttpService.post('/backend_user/create', null, obj);

    }]);
});