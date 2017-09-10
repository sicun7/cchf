define(['routes', 'util', 'services/Interceptor', 'angular-ui-router'], function (config, util, Interceptor) {

    var app = angular.module('app', ['ui.router', 'ng-progress']);

    app.config(
        [
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            '$stateProvider',
            '$urlRouterProvider',
            '$httpProvider',
            '$httpProgressOpsProvider',

            function ($locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider, $httpProvider, $httpProgressOpsProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                //$locationProvider.html5Mode(true);

                if (config.states !== undefined) {
                    angular.forEach(config.states, function (states, path) {
                        $stateProvider.state(states.name, states.data);
                    });
                }

                // if (config.defaultRoutePath !== undefined) {
                //     $urlRouterProvider.otherwise({ redirectTo: config.defaultRoutePath });
                // }

                $urlRouterProvider.otherwise('/');

                //异常拦截器
                $httpProvider.interceptors.push(Interceptor.exception);

                //http请求拦截,进度条
                $httpProgressOpsProvider.setOps({
                    background: '#6435c9',
                    startAt: 30,
                    autoPauseAt: 75,
                    //http : false,
                    //increment : 0.5,
                    //duration : 100
                });
            }
        ]);

    app.run(['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //判断登录
            if (!$rootScope.user) {
                //取消默认跳转行为
                //event.preventDefault();
                //跳转
                //$state.go('app.warn_rule_set');
            }

            console.log(event, fromState, toState, $state);
            $rootScope.currentStateDesc = toState.desc || null;
        });
    }]);


    return app;
});