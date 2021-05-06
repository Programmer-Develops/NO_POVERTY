<?php
   $name = $_POST['name'];
   $Visitors_email = $_POST['email'];
   $message = $_POST['message'];

   $email_from = 'pandyaamit72@gmail.com';
   $email_subject = "No_Poverty_Response";
   $email_body = "User Name: $name.\n".
                   "User Email: $Visitors_email.\n".
                     "User Message: $message.\n";

   $to = "shachipandya29@gmail.com";
   $headers = "From: $email_from \r\n";
   $headers = "Replay-To: $Visitors_email \r\n";
   
   mail($to,$email_subject,$email_body,$headers);
   header("Location: index.html");

?>