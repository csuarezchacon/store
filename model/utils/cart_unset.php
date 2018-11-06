<?php
    session_start();

    if(isset($_SESSION['cart'])) {
        unset($_SESSION["cart"]);
        echo ("Carrito Eliminado");
    } else {
        echo ("Carrito no existe");
    }
    
?>