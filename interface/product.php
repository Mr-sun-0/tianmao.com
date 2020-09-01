<?php
   include('./conn.php');
   $sql="select * from product";

   $res=$mysql->query($sql);

   $mysql->close();
    $arr=array();
    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json=json_encode($arr);

    echo $json;
?>