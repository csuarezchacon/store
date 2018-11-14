<?php
    if(isset($_POST['index'])) {
        $index = $_POST['index'];
    } else {
        $index = "PFasdfasd";
    }

    session_start();
    if(isset($_SESSION['cart'])) {
        unset($_SESSION["cart"]->product[$index]);
        echo $index;
    }
?>