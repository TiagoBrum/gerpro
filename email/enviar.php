<?php
	$nome 			= $_POST['nome'];
    $doc 			= strip_tags(trim($_POST['doc']));
    $fone 			= strip_tags(trim($_POST['fone']));
    $email 			= strip_tags(trim($_POST['email']));
    $pessoa 		= strip_tags(trim($_POST['pessoa']));
    $endereco 		= strip_tags(trim($_POST['endereco']));
    $num 			= strip_tags(trim($_POST['num']));
    $bairro 		= strip_tags(trim($_POST['bairro']));
    $complemento 	= strip_tags(trim($_POST['complemento']));
    $cep 			= strip_tags(trim($_POST['cep']));
    $cidade 		= strip_tags(trim($_POST['cidade']));
    $estado 		= strip_tags(trim($_POST['estado']));
    $to 			= " tiagobrum@hotmail.com.br";
//    $produto		= $dados['titulo'];
    $data_envio 	= date('d/m/Y');

    // -------------

    // Corpo E-mail

    $arquivo = "
			<html lang='pt-br'>
				<style type='text/css'>
				body {
					margin:0px;
					font-family:Verdane;
					font-size:12px;
					color: #666666;
				}
				a{
					color: #666666;
					text-decoration: none;
				}
				a:hover {
					color: #FF0000;
					text-decoration: none;
				}
				</style>

				<body>
					<p>Manifestei interesse no produto $produto,no link <a href='http://gusetec.com.br/index.php?module=product&action=detail&id'>http://gusetec.com.br/index.php?module=product&action=detail&id</a></p><br>
					<table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#FFF'>
						<tr><td>Nome/Razão Social</td><td>$nome</td></tr>
						<tr><td>CPF/CNPJ</td><td>$doc</td></tr>
						<tr><td>Telefone</td><td>$fone</td></tr>
						<tr><td>E-mail</td><td>$email</td></tr>
						<tr><td>Pessoa</td><td>$pessoa</td></tr>
						<tr><td>Endereço</td><td>$endereco</td></tr>
						<tr><td>Número</td><td>$num</td></tr>
						<tr><td>Bairro</td><td>$bairro</td></tr>
						<tr><td>Complemento</td><td>$complemento</td></tr>
						<tr><td>Cep</td><td>$cep</td></tr>
						<tr><td>Cidade</td><td>$cidade</td></tr>
						<tr><td>Estado</td><td>$estado</td></tr>
					  <tr>
					  </tr>
					</table><br>
					<p>Este e-mail foi enviado em <b>$data_envio</b></p>
				</body>
			</html>";

    // -------------------------

    //enviar

    // emails para quem será enviado o formulário
    $destino = "tiagobrum@hotmail.com.br";
    $assunto = "Pedido de orçamento";

    // É necessário indicar que o formato do e-mail é html
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html;charset=utf-8' . "\r\n";
    $headers .= 'From: $nome <$email>';
    //$headers .= "Bcc: $EmailPadrao\r\n";

    $enviaremail = mail($destino, $assunto, $arquivo, $headers);
    if($enviaremail){
      //echo " <meta http-equiv='refresh' content='3;URL=contato.php'>";
      echo("<script language = 'javascript'> alert('Mensagem enviada com sucesso!'); </script>");
      //			echo("<script language = 'javascript'> location.href = 'index.php?module=product&action=detail&id=$id'; </script>");
      $_POST = null;
      unset($_POST);
    } else {
      $mgm = "ERRO AO ENVIAR E-MAIL!";
      echo $mgm;
    }
?>