define(['app'], function (app) {
    app.service('CommonService', [function () {
        this.ruleTypes = [{ 'type': 1, 'desc': '正则表达式' }, { 'type': 2, 'desc': '敏感字匹配' }, { 'type': 3, 'desc': '任意方式匹配' }];
        this.bugTypes = [{ 'type': 1, 'desc': 'SQL注入' }, { 'type': 2, 'desc': '信息泄漏' }, { 'type': 3, 'desc': 'SSRF' }, { 'type': 4, 'desc': 'RCE' }, { 'type': 5, 'desc': 'XSS' }, { 'type': 6, 'desc': '撞库' }, { 'type': 7, 'desc': '任意路径跳转' }, { 'type': 8, 'desc': 'webshell' }, { 'type': 9, 'desc': '暴力破解' }, { 'type': 10, 'desc': '其他' }];
        this.smsWarnTypes = [{ 'type': 1, 'desc': '漏洞通告' }, { 'type': 2, 'desc': '漏洞预警' }];

        this.csvToArray = async function (domId) {
            var result = null;
            try {
                // var file = document.getElementById(domId).files[0];
                // var reader = new FileReader();
                // //将文件以文本形式读入页面  
                // reader.readAsText(file);
                // reader.onloadend = await function () {
                //     var strs = this.result;
                //     if (strs && _.isString(strs)) result = strs.split(',');
                // }
                result = await readFile(domId);
                return result;
            } catch (e) {
                console.log('read csv file error', e);
            }
        }

        const readFile = () => {
            return new Promise((resolve, reject) => {
                var file = document.getElementById(domId).files[0];
                var reader = new FileReader();
                //将文件以文本形式读入页面  
                reader.readAsText(file);
                reader.onloadend = function () {
                    var strs = this.result;
                    //if (strs && _.isString(strs)) result = strs.split(',');
                    resolve(strs);
                },
                    reader.onerror = function (e) {
                        reject(e);
                    }
            });
        };
    }]);


    app.factory('HttpService', ['$http', '$q', function ($http, $q) {
        return {
            get: function (url, params) {
                var defered = $q.defer();
                $http({
                    method: 'GET',
                    url: url,
                    params: params
                })
                    .then(function (data) {
                        defered.resolve(data);
                    })
                    .catch(function (err) {
                        defered.reject(err);
                    });
                return defered.promise;
            },
            post: function (url, params, data) {
                var defered = $q.defer();
                $http({
                    method: 'POST',
                    url: url,
                    params: params,
                    data: data
                })
                    .then(function (data) {
                        defered.resolve(data);
                    })
                    .catch(function (err) {
                        defered.reject(err);
                    });
                return defered.promise;
            },
            put: function (url, params, data) {
                var defered = $q.defer();
                $http({
                    method: 'PUT',
                    url: url,
                    params: params,
                    data: data
                })
                    .then(function (data) {
                        defered.resolve(data);
                    })
                    .catch(function (err) {
                        defered.reject(err);
                    });
                return defered.promise;
            },
            delete: function (url, params, data) {
                var defered = $q.defer();
                $http({
                    method: 'DELETE',
                    url: url,
                    params: params,
                    data: data
                })
                    .then(function (data) {
                        defered.resolve(data);
                    })
                    .catch(function (err) {
                        defered.reject(err);
                    });
                return defered.promise;
            },
            promiseAll: function (taskArray) {
                return $q.all(taskArray);
            }
        }
    }]);

});