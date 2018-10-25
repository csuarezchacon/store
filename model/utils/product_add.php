<?php
    session_start();
    
    prodCnt = count($_SESSION['cart']->product);
    array_push($_SESSION['cart']->product, 'nuevo producto ' + prodCnt);

    echo(json_encode($_SESSION['cart']));
?>