define(['services/DependencyResolver'], function (dependencyResolverFor) {
    var loadController = function (controllerName) {
        return ["$q", function ($q) {
            var deferred = $q.defer();
            require([controllerName], function () {
                deferred.resolve();
            });
            return deferred.promise;
        }];
    };

    return {
        defaultRoutePath: '/',
        states: [
            {
                name: "app",
                data: {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: '/views/common/wrapper.html',
                            controller: 'MainController'
                        },
                        'content@app': {
                            templateUrl: '/views/common/content.html',
                            controller: null
                        }
                    },
                    resolve: {
                        MainController: loadController("controllers/MainController")
                    }
                }
            },
            {
                name: "app.warn_rule_set",
                data: {
                    url: 'warn_rule_set',
                    desc: '告警规则/设置',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/rule_set.html',
                            controller: 'WarnRuleSetController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        WarnRuleSetController: loadController("controllers/WarnRuleSetController")
                    }
                }
            },
            {
                name: "app.warn_rule_list",
                data: {
                    url: 'warn_rule_list',
                    desc: '告警规则/列表',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/rule_list.html',
                            controller: 'WarnRuleListController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        WarnRuleListController: loadController("controllers/WarnRuleListController")
                    }
                }
            },
            {
                name: "app.warn_rule_detail",
                data: {
                    url: 'warn_rule_detail',
                    desc: '告警规则/详情',
                    params: { pWarnRule: null },
                    views: {
                        'content': {
                            templateUrl: '/views/warn/rule_detail.html',
                            controller: 'WarnRuleDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        WarnRuleDetailController: loadController("controllers/WarnRuleDetailController")
                    }
                }
            },
            {
                name: "app.warn_sms_set",
                data: {
                    url: 'warn_sms_set',
                    desc: '短信告警/设置',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/sms_set.html',
                            controller: 'SmsWarnSetController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        SmsWarnSetController: loadController("controllers/SmsWarnSetController")
                    }
                }
            },
            {
                name: "app.warn_sms_list",
                data: {
                    url: 'warn_sms_list',
                    desc: '短信告警/列表',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/sms_list.html',
                            controller: 'SmsWarnListController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        SmsWarnListController: loadController("controllers/SmsWarnListController")
                    }
                }
            },
            {
                name: "app.warn_sms_detail",
                data: {
                    url: 'warn_sms_detail',
                    desc: '短信告警/详情',
                    params: { pSmsWarn: null },
                    views: {
                        'content': {
                            templateUrl: '/views/warn/sms_detail.html',
                            controller: 'SmsWarnDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        SmsWarnDetailController: loadController("controllers/SmsWarnDetailController")
                    }
                }
            },
            {
                name: "app.warn_mail_set",
                data: {
                    url: 'warn_mail_set',
                    desc: '邮件告警/设置',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/mail_set.html',
                            controller: 'MailWarnSetController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        MailWarnSetController: loadController("controllers/MailWarnSetController")
                    }
                }
            },
            {
                name: "app.warn_mail_list",
                data: {
                    url: 'warn_mail_list',
                    desc: '邮件告警/列表',
                    views: {
                        'content': {
                            templateUrl: '/views/warn/mail_list.html',
                            controller: 'MailWarnListController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        MailWarnListController: loadController("controllers/MailWarnListController")
                    }
                }
            },
            {
                name: "app.warn_mail_detail",
                data: {
                    url: 'warn_mail_detail',
                    desc: '邮件告警/详情',
                    params: { pMailWarn: null },
                    views: {
                        'content': {
                            templateUrl: '/views/warn/mail_detail.html',
                            controller: 'MailWarnDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        MailWarnDetailController: loadController("controllers/MailWarnDetailController")
                    }
                }
            },

            {
                name: "app.query_component",
                data: {
                    url: 'query_component',
                    desc: '查询关联/组件',
                    views: {
                        'content': {
                            templateUrl: '/views/query/component.html',
                            controller: 'QueryComponentController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        QueryComponentController: loadController("controllers/QueryComponentController")
                    }
                }
            },
            {
                name: "app.query_core",
                data: {
                    url: 'query_core',
                    desc: '查询关联/内核',
                    views: {
                        'content': {
                            templateUrl: '/views/query/core.html',
                            controller: 'QueryCoreController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        QueryCoreController: loadController("controllers/QueryCoreController")
                    }
                }
            },
            {
                name: "app.query_software",
                data: {
                    url: 'query_software',
                    desc: '查询关联/软件',
                    views: {
                        'content': {
                            templateUrl: '/views/query/software.html',
                            controller: 'QuerySoftwareController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        QuerySoftwareController: loadController("controllers/QuerySoftwareController")
                    }
                }
            },
            {
                name: "app.query_integrity",
                data: {
                    url: 'query_integrity',
                    desc: '查询关联/完整性',
                    views: {
                        'content': {
                            templateUrl: '/views/query/integrity.html',
                            controller: 'QueryIntegrityController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        QueryIntegrityController: loadController("controllers/QueryIntegrityController")
                    }
                }
            },
            {
                name: "app.query_attack",
                data: {
                    url: 'query_attack',
                    desc: '查询关联/攻击事件',
                    views: {
                        'content': {
                            templateUrl: '/views/query/attack.html',
                            controller: 'QueryAttackController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        QueryAttackController: loadController("controllers/QueryAttackController")
                    }
                }
            },
        ]
    };
});