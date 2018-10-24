<?php
    session_start();
    
    if(isset($_SESSION['cart'])) {
        echo("true");
    } else {
        echo("false");
    }
?>