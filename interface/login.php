<?php
    include('./connuser.php');

    // 登录
    // 1. 链接数据库
    // 2. 接受前端的数据
    // 3. 在数据库中查找账号和密码
    //    判断查找结果 如果有数据 说明 登录成功
    //                  没用数据 说明 用户名或密码错误

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username='$username' and password='$password'";

    // 执行查询
    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        $temp=[];
        $row=$result->fetch_assoc();
        $json =json_encode($row);
        echo $json;
       
    }else{
        echo '["用户名或密码错误"]';
    }

?>