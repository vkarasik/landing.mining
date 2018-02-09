<?php
if( ! empty($_POST) ) {
    $data = (object) $_POST;
    $to = 'v.karasik@cd-life.by';
    $subject = 'Обратный звонок (Серверное оборудование)';
    $message = 'Имя: ' . $data->name . ' Телефон: ' . $data->tel;
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: <from@example.com>\r\n";
    mail($to, $subject, $message, $headers);
} 
?>