<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Enviar E-mail com PHP</title>
  </head>
  <style type="text/css">
    body{
      font-size:12px;
      font-family:Verdana, Geneva, sans-serif;
    }
    #contato_form{
      width:500px;
      min-height:175px;
      color:#999;
      margin:auto;
    }
    .asteristico{
      color:#F00;
    }
  </style>
  <body>
    <div class="row">
      <div class="col-md-6">
        <!--CABECALHO PRODUTO-->
        <div class="row">
          <div class="col-md-12" style="border-bottom: 1px solid #c2c2c2">
          </div>
        </div>
        <!--DESCRICAO PRODUTO-->
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
        <!--BOTAO ORCAMENTO PRODUTO-->
        <div class="row">
          <div class="col-md-12">
            <!-- Large modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="fa fa-list-alt"></i> Pedido de Orçamento</button>
          </div>
        </div>
        <div class="row" style="padding-top:20px">
          <div class="col-md-12">
            <div class="alert alert-success alert-dismissible fade" role="alert" id="sucorcamento">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> 
              <h4>Pedido de Orçamento enviado com sucesso!</h4> 
              <p>Em breve retornaremos.</p>
              <p> <button type="button" class="btn btn-success" data-dismiss="alert" aria-label="Close">OK</button> 
                <!--								<button type="button" class="btn btn-default">Or do this</button> -->
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"><i class="fa fa-list-alt"></i> Pedido de Orçamento</h4>
          </div>
          <form method="post" action=enviar.php"">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8" style="padding-top:10px">
                  <label for="nome">Nome/Razão Social</label>
                  <input class="" type="text" value="" name="nome" style="width:100%;" required minlength="3">
                </div>
                <div class="col-md-4" style="padding-top:10px">
                  <label for="doc">CPF/CNPJ</label>
                  <input class="" type="text" value="" name="doc" style="width:100%" required minlength="11">
                </div>
                <div class="col-md-4" style="padding-top:10px">
                  <label for="fone">Telefone</label>
                  <input class="" type="text" value="" name="fone" style="width:100%" required minlength="8">
                </div>
                <div class="col-md-5" style="padding-top:10px">
                  <label for="email">E-mail</label>
                  <input class="" type="text" value="" name="email" style="width:100%" required minlength="12">
                </div>
                <div class="col-md-3" style="padding-top:10px">
                  <!--							<input class="" type="text" value="" name="fone" style="width:100%" required minlength="">-->
                  <!--							<span class="bold">Pessoa:</span>-->
                  <label for="pessoa">Pessoa:</label>
                  <div class="btn-group btn-sm" data-toggle="buttons" style="width:100%;padding: 0px 0px;">
                    <label class="btn btn-sm btn-primary active" style="width:50%">
                      <input type="radio" name="pessoa" id="option1" autocomplete="off" checked>Fisica
                    </label>
                    <label class="btn btn-sm btn-primary" style="width:50%">
                      <input type="radio" name="pessoa" id="option2" autocomplete="off"> Juridica
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style="padding-top:10px">
                  <label for="endereco">Endereço</label>
                  <input class="" type="text" value="" name="endereco" style="width:100%;" required minlength="6">
                </div>
                <div class="col-md-2" style="padding-top:10px">
                  <label for="num">Número</label>
                  <input class="" type="number" value="" name="num" style="width:100%" required minlength="1">
                </div>
                <div class="col-md-4" style="padding-top:10px">
                  <label for="bairro">Bairro</label>
                  <input class="" type="text" value="" name="bairro" style="width:100%" required minlength="1">
                </div>
                <div class="col-md-3" style="padding-top:10px">
                  <label for="complemento">Complemento</label>
                  <input class="" type="text" value="" name="complemento" style="width:100%">
                </div>
                <div class="col-md-2" style="padding-top:10px">
                  <label for="cep">Cep</label>
                  <input class="" type="text" value="" name="cep" style="width:100%" required minlength="9">
                </div>
                <div class="col-md-4" style="padding-top:10px">
                  <label for="cidade">Cidade</label>
                  <input class="" type="text" value="" name="cidade" style="width:100%" required minlength="4">
                </div>

                <div class="col-md-3" style="padding-top:10px">
                  <label for="estado">Estado</label>
                  <input class="" type="text" value="" name="estado" style="width:100%" required minlength="2">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">cancelar</button>
              <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <?php
if (isset($_POST)){
  $spam=False;
  $spamwords = "/(<a|href)/i";
  if (preg_match($spamwords, implode($_POST))) {$spam=true;}
  if (preg_match_all("/<a|href/i", implode($texto = $_POST), $out) > 3) {$spam=true;}

  if ($spam==False) //testa span
  {
    $nome 			= strip_tags(trim($_POST['nome']));
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
    $produto		= $dados['titulo'];
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
					<p>Manifestei interesse no produto $produto,no link <a href='http://gusetec.com.br/index.php?module=product&action=detail&id=$id'>http://gusetec.com.br/index.php?module=product&action=detail&id=$id</a></p><br>
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
  }else{
    //		$message="Span evitado/n ".$message;
    //		mail("joaohenriqueulzafer@gmail.com","Span: Guse",$message,$headers);
  }
}

    ?>

  </body>
</html>