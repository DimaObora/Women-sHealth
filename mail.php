<?php
/**
 * Created by PhpStorm.
 * User: Дмитрий Иванович
 * Date: 06.03.2018
 * Time: 14:25
 */

/*
$sendto   = "web-originals@yandex.ru";
$usermail = $_POST['email'];
$username = $_POST['name'];
$userphone = $_POST['phone'];
$content  = nl2br($_POST['msg']);
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение </h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Номер телефона:</strong> ".$userphone."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$content."</p>\r\n";
$msg .= "</body></html>";
// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "true";
} else {
    echo "false";
}
*/


$usermail = $_POST['email'];
$username = $_POST['name'];
$userphone = $_POST['phone'];
$content  = nl2br($_POST['msg']);

require '/var/www/lechimdetei.santal.rf/htdocs/PHPMailer/PHPMailerAutoload.php';
$ip = $_SERVER['REMOTE_ADDR'];

/////////////////////////// ОТПРАВКА ВЕБМАСТЕРУ //////////////////////////////////

$to1 = "web-originals@yandex.ru";
$subject = "Письмо с сайта ЛечимДетей.Санталь.РФ";

$body = "\n";
$body .= "Имя: $username\n";
$body .= "Телефон: $userphone\n";
$body .= "E-mail: $usermail\n";
$body .= "Сообщение: $content\n";
$body .= "IP: $ip\n";


///////////////////////////// ПОДКЛЮЧАЕМ SMTP-МАЙЛЕР //////////////////////////////////////

$emailTo1 = $to1;

function sendMailPHPmailer1($emailTo1, $subject, $body) {
    $mail = new PHPMailer;

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = '192.168.1.56';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true; // turn on SMTP authentication
    $mail->Username = 'web-mail@0370.ru';
    $mail->Password = "Ndks_eT294";
    $mail->Port = 25;
    $mail->CharSet = 'UTF-8';
    $mail->From = 'web-mail@0370.ru';
    $mail->FromName = 'Почтовый робот ЦСМ';
    $mail->addAddress($emailTo1);
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;
    if(!$mail->send()) {
        return 'error';
//        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        return 'sent';
    }
}

sendMailPHPmailer1($emailTo1, $subject, $body);
/////////////////////////////////////////////////////////////////////////////////////////////



?>