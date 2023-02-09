<?php
    $login = " ";
    $passwor = " ";
    $pol = " ";
    $pol1 = " ";
    if(isset($_POST['login'])) 
        $login = $_POST['login'];
    if(isset($_POST['passwor'])) 
        $passwor = $_POST['passwor'];
    if(isset($_POST['pol']) && isset($_POST['pol1'])){
        $pol = $_POST['pol'];
        echo "Gender: Attack helicopter <br>";}
    else if(isset($_POST['pol'])){
            $pol = $_POST['pol'];
            echo "Gender: man <br>";}
            else{ 
                $pol1 = $_POST['pol1'];
                echo "Gender: girl <br>";}
    echo "Login: $login <br> Password: $passwor";
?>