<?php
  $data = json_decode(file_get_contents("php://input"), true);
  if (isset($data)) {
    //Variáveis
    $nome = $data['nome'];
    $email = $data['email'];
    $empresa = $data['empresa'];
    $area_atuacao = $data['area_atuacao'];
    $mensagem = $data['msg'];
    $data_envio = date('d/m/Y');
    $hora_envio = date('H:i:s');
    
    // emails para quem será enviado o formulário
    $destino = 'teste@gmail.com';
    $assunto = "Contato pelo Site";
  
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: ' . $nome .'<' . $email . '>';
    
    $enviaremail = mail($destino, $assunto, $mensagem, $headers);
    if ($enviaremail) {
      $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
      echo true;
    } 
    else {
      $mgm = "ERRO AO ENVIAR E-MAIL!";
      echo false;
    }
  }
?>