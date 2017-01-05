<?php

if (isset($_POST["name"]) && isset($_POST['message'])) {
    $to      = 'info@alphaviridis.com';
    $subject = 'Contact form from: ' . $_POST['name'];
    $message = $_POST['message'];
    $headers = 'From: no-reply@alphaviridis.com' . "\r\n" .
        'Reply-To: ' . $_POST['email'] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $header);
} else {
    header("Location: http://alphaviridis.com/index.html");
}
?>