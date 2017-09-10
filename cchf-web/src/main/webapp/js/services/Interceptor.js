define([], function () {
    const Interceptor = {
        exception: function ($q) {
            return {
                'responseError': function (response) {
                    var status = response.status;
                    if (status == 400) {
                        toast('操作失败', '提交数据有误:' + response.data.message || '', -1);
                    } else if (status == 401) {
                        toast('操作失败', '权限受限', -1);
                    } else if (status == 403) {
                        toast('操作失败', response.data.message || '', -1);
                    } else if (status == 404) {
                        toast('操作失败', response.data || '', -1);
                    } else {
                        toast('操作失败', '系统异常', -1);
                    }
                },
                'response': function (response) {
                    return response;
                }
            }
        }
    };
    return Interceptor;
});