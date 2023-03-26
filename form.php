<?php
$headers = "From: lukas.verschraegen@student.odisee.be\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$msg = file_get_contents('index.html'); 

if(mail($_GET['email'],"SNKR",$msg,$headers))
 {
  header("Location: signin_up/tnx.html");
  exit;
 }
?>