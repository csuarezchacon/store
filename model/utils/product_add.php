<?php
    session_start();
    
    if(isset($_SESSION['cart'])) {
        $prodCnt = count($_SESSION['cart']->product);
        $product = (object) array('id'=>$prodCnt, 'description'=>"nuevo producto {$prodCnt}");

        array_push($_SESSION['cart']->product, $product);
        
        echo(json_encode($product));
    }
?>