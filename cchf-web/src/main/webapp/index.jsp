<html>

<script src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
<body>
<h2>Hello World!</h2>


<script>

    $(function () {

        var obj = {"user_name": "test_user1", "password": "123xxx"};

        $.ajax({
            url: '/backend_user/list',
            type: 'GET',
            data: obj,
            contentType: "application/json",
            dataType: 'json',
            beforeSend: function (xhr) {
                console.log(xhr);
                console.log('发送前');
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
            },
            error: function (xhr, textStatus) {
                console.log('错误');
                console.log(xhr);
                console.log(textStatus)
            },
            complete: function () {
                console.log('结束')
            }
        });


        $.post("/backend_user/create", obj,
            function (data) {
                alert("Data Loaded: " + data);
            });


        $.ajax({
            url: '/backend_user/create',
            type: 'POST',
            data: JSON.stringify(obj),
            contentType: "application/json",
            dataType: 'json',
            beforeSend: function (xhr) {
                console.log(xhr);
                console.log('发送前');
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
            },
            error: function (xhr, textStatus) {
                console.log('错误');
                console.log(xhr);
                console.log(textStatus)
            },
            complete: function () {
                console.log('结束')
            }
        })
    });

</script>


</body>
</html>
