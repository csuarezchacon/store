<?php
    session_start();
    
    if(isset($_SESSION['cart'])) {
        $prodCnt = count($_SESSION['cart']->product);
        $product = "nuevo producto {$prodCnt}";
        array_push($_SESSION['cart']->product, $product);

        echo(json_encode($product));
    } else {
        echo('Carrito no existe');
    }
?>