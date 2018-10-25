<?php
    session_start();

    $cart = (object) array(
        'product' => array()
    );
    
    $_SESSION['cart'] = $cart;

    echo(json_encode($_SESSION['cart']));
?>