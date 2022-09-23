 <?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = 'victor.odah@isslng.com';

$email_subject = "contact us form";

$email_body = "user Name: $name.\n".
              "user email: $visitor_email.\n".
              "user message: $message.\n";

$to = "victor.odah@isslng.com";

$headers = "From: $email_From \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contactus.html");

?>
