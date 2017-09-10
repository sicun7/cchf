function toast(title, msg, type) {
    title = title || '操作成功';
    msg = msg || '';
    type = type == -1 ? 'warning' : 'success';
    $.Toast(title, msg, type, {
        stack: true,
        has_icon: true,
        has_close_btn: true,
        fullscreen: false,
        timeout: 5000,
        sticky: false,
        has_progress: true,
        rtl: false,
    });
}