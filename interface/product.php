<?php
    include('./conn.php');
    $id = $_REQUEST['id'];
    $sql ="select * from product where id='$id'";
    $res = $mysqli->query($sql);
    $mysqli->close();
    $row =$res->fetch_assoc();
    $json=JSON_encode($row);
    echo $json;
?>