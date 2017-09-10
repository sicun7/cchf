require.config({
    baseUrl: '/js',
    paths: {
        'angular': '../lib/angular.min',
        'angular-ui-router': '../lib/angular-ui-router.min',
        'jquery': '../lib/jquery.min',
        'lodash': '../lib/lodash',
        'plugin': '../lib/plugin',
        'semantic': '../lib/semantic.min',
        'datetimepicker': '../lib/jquery.datetimepicker',
        'datatable': '../lib/jquery.dataTables.min',
        'datatable-semantic': '../lib/dataTables.semanticui.min',
        'ng-progress': '../lib/ng-progress'
    },
    shim: {
        'app': {
            deps: ['jquery', 'semantic', 'plugin', 'datetimepicker', 'lodash', 'datatable', 'datatable-semantic', 'angular', 'angular-ui-router', 'ng-progress']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'semantic': {
            deps: ['jquery']
        },
        'plugin': {
            deps: ['jquery']
        },
        'datetimepicker': {
            deps: ['jquery']
        },
        'datatable': {
            deps: ['jquery']
        },
        'datatable-semantic': {
            deps: ['jquery', 'semantic', 'datatable']
        },
        'ng-progress': {
            deps: ['angular']
        },
    }
});

require(['app'],
    function (app) {
        angular.bootstrap(document, ['app']);
    }
);