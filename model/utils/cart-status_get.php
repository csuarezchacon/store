<?php
    session_start();
    
    if(isset($_SESSION['cart'])) {
        echo TRUE;
    } else {
        echo FALSE;
    }
?>