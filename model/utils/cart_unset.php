<?php
    session_start();

    unset($_SESSION["cart"]);
    
    echo ("Carrito Eliminado");
?>