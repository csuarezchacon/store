<?php
    $cart = (object) array();
    
    $_SESSION['cart'] = $cart;

    echo(json_encode($_SESSION['cart']));
?>