<?php
$env = parse_ini_file('../.env');

$content = trim(file_get_contents("php://input"));
$request_data = json_decode($content, true);

// Check for empty fields
if (
   empty($request_data['name']) ||
   empty($request_data['email']) ||
   empty($request_data['subject']) ||
   empty($request_data['message'])
) {
   $arrResult = array('response' => 'error', 'errorMessage' => 'No arguments Provided!');
   echo json_encode($arrResult);
} else if (!isset($request_data['token']) || empty($request_data['token'])) {
   $arrResult = array('response' => 'error', 'errorMessage' => 'Please click on the reCAPTCHA box.');
   echo json_encode($arrResult);
}


$secret = $env['RECAPTCHA_SECRET_KEY'];

$response = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $request_data['token']), true);
if ($response['success'] == false || $response['score'] < 0.5) {
   $arrResult = array('response' => 'error', 'errorMessage' => 'captcha failed!');
   echo json_encode($arrResult);
} else {
   $name = strip_tags(htmlspecialchars($request_data['name']));
   $email_address = strip_tags(htmlspecialchars($request_data['email']));
   $subject = strip_tags(htmlspecialchars($request_data['subject']));
   $message = strip_tags(htmlspecialchars($request_data['message']));

   $to = $env['MAIL_ADMIN'];

   $email_subject = "Nova poruka s web stranice od:  $name";
   $email_body = "Primili ste novu poruku s barcode.hr.\n\n" . "Ovo su detalji poruke:\n\nIme i prezime: \n$name\n\nEmail: \n$email_address\n\nNaslov:\n$subject\n\nPoruka:\n$message";
   $headers = "From: noreply@barcode.hr\n";
   $headers .= "Reply-To: $email_address";
   mail($to, $email_subject, $email_body, $headers);

   $arrResult = array('response' => 'success');
   echo json_encode($arrResult);
}
?>