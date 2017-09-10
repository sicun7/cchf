define(['app'], function (app) {
    app.directive('sidebarMenu',
        [
            function () {
                return function (scope, element, attrs) {
                    $.sidebarMenu(element);
                }
            }
        ]);
    app.directive('dropDown',
        [
            function () {
                return function (scope, element, attrs) {
                    angular.element(element).dropdown();
                }
            }
        ])

    app.directive('datePicker', [function () {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                angular.element(element).datetimepicker({ format: 'Y-m-d H:i:s' });
            }
        };
    }]);

    app.directive('table', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (scope.$last == true) {
                    element.ready(function () {
                        $timeout(function () {
                            $('#' + attrs.tableId + '').DataTable({
                                'scrollY': 'calc(100vh - ' + attrs.otherHeight + 'px)',
                                'scrollCollapse': true,
                                'paging': false, 'info': false, 'searching': false
                            });
                        }, 0);
                    });
                }
            }
        };
    }]);


    var pageTemplate = '<div class="ui center aligned">' +
        '<span class="page-circle" ng-disabled="conf.currentPage==1"> <i class="angle double left icon"></i> </span>' +
        '<span class="page-circle" ng-disabled="conf.currentPage==1"> <i class="angle left icon"></i> </span>' +
        '<span class="page-separator"></span> Page <input class="page-no-input" ng-model="conf.currentPage"> of {{conf.totalPage}}' +
        '<span class="ui-separator"></span>' +
        '<span class="page-circle" ng-disabled="conf.currentPage==totalPage"> <i class="angle right icon"></i> </span>' +
        '<span class="page-circle" ng-disabled="conf.currentPage==totalPage"> <i class="angle double right icon"></i> </span>' +
        '<select  ng-options="size for size in conf.pageSizeList" ng-change="changePageSize(conf.pageSize)" ng-model="conf.pageSize"></select>' +
        '<label class="pull-right">View {{(conf.currentPage-1) * conf.pageSize + 1}} - {{conf.currentPage == conf.totalPage ? conf.total :conf.currentPage * conf.pageSize }} of {{conf.total}}</label>' +
        '</div>';

    app.directive('page', ['$http', '$q', 'HttpService', function ($http, $q, HttpService) {
        return {
            restrict: 'E',
            template: pageTemplate,
            replace: true,
            scope: {
                list: '=', //列表数据
                url: '@', //接口url
                method: '@', //get or post
                queryParam: '=', //请求参数
                queryData: '=', //请求对象数据
                event: '@' //事件名, 外部调用分页查询的事件
            },
            link: function (scope, element) {
                //监听事件
                scope.$on(scope.event, function (event, data) {
                    scope.loadData();
                });

                //配置参数
                scope.conf = {
                    currentPage: 1,
                    totalPage: 1,
                    endPage: 1,
                    pageSizeInput: 20,
                    pages: [],
                    total: 0,
                    pageSizeList: [15, 30, 100],
                    pageSize: 15
                };

                //加载数据
                scope.loadData = function () {
                    scope.queryParam = scope.queryParam instanceof Object && scope.queryParam || {};
                    scope.queryData = scope.queryData instanceof Object && scope.queryData || {};
                    scope.queryParam.page = scope.conf.currentPage;
                    scope.queryParam.pageSize = scope.conf.pageSize;

                    var promise = null;
                    if (scope.method == 'GET') promise = HttpService.get(scope.url, scope.queryParam);
                    else if (scope.method == 'POST') promise = HttpService.post(scope.url, scope.queryParam, scope.queryData);
                    promise.then(function (resp) {
                        if (resp && resp.code == 0) {
                            if (resp.result && resp.result instanceof Array) {
                                scope.list = resp.result;
                            }
                            else scope.list = [];
                            if (resp.total && typeof (resp.total) == 'number') scope.conf.total = resp.total;
                            else scope.conf.total = 0;
                        }
                        scope.calcPages();
                    });
                };

                //改变页大小
                scope.changePageSize = function (n) {
                    scope.conf.pageSize = n;
                    scope.conf.pageSizeInput = n;
                    scope.conf.currentPage = 1;
                    scope.loadData();
                };

                var isInt = function (input) {
                    var g = /^[1-9]*[1-9][0-9]*$/;
                    return g.test(input);
                };

                //改变页大小
                scope.changePageSizeInput = function (event) {
                    if (event && event.keyCode == 13) {
                        var _pageSize = scope.conf.pageSizeInput;
                        _pageSize = isInt(_pageSize) ? parseInt(_pageSize) : scope.conf.pageSize;
                        scope.conf.pageSizeInput = _pageSize;
                        if (scope.conf.pageSize != _pageSize) {
                            scope.conf.pageSize = _pageSize;
                            scope.conf.currentPage = 1;
                            scope.loadData();
                        }
                    }
                };

                //下一页
                scope.next = function () {
                    if (scope.conf.currentPage < scope.conf.totalPage) {
                        scope.conf.currentPage++;
                        scope.loadData();
                    }
                };

                //上一页
                scope.prev = function () {
                    if (scope.conf.currentPage > 1) {
                        scope.conf.currentPage--;
                        scope.loadData();
                    }
                };

                //加载指定页
                scope.loadPage = function (page) {
                    if (scope.conf.currentPage != page) {
                        scope.conf.currentPage = page;
                        scope.loadData();
                    }
                };

                //计算页数
                scope.calcPages = function () {
                    //计算总页数
                    scope.conf.totalPage = Math.ceil(scope.conf.total / scope.conf.pageSize);
                };

                //查询
                scope.query = function () {
                    scope.conf.currentPage = 1;
                    scope.loadData();
                };

                //立即查询
                scope.query();
            }
        };
    }]);

});
