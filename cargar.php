<?
include"parametros.php";
	$array=json_decode($_POST['pay_payu'],true);
	$currency=$_post['currency_payu'];

	$amount=0;
	$descripcion='';
	foreach ($array as $v) {
		$amount+=$v['valor'];
		if($descripcion!=''){
			$descripcion.=', ';
		}
		$descripcion.=$v['descripcion'];
	}

	if($_POST['iva']!=''){
		$tax=($amount*($_POST['iva']/100));
		$taxReturnBase=($amount*(1-($_POST['iva']/100)));
	}else{
		$tax=0;
		$taxReturnBase=0;
	}
	
	$signature=md5($parametros['apikey'].'~'.$parametros['cuenta'].'~'.$parametros['referenceCode'].'~'.$amount.'~'.$currency);
	//echo$apikey;
	?>
	<form method="post" action="<?=$parametros['url'.$parametros['test']]?>" id="pagar_payu">
  <input name="merchantId"    type="hidden"  value="<?=$parametros['cuenta']?>">
  <input name="accountId"     type="hidden"  value="<?=$parametros['accountId']?>">
  <input name="description"   type="hidden"  value="<?=$descripcion?>">
  <input name="referenceCode" type="hidden"  value="<?=$parametros['referenceCode']?>">
  <input name="amount"        type="hidden"  value="<?=$amount?>">
  <input name="tax"           type="hidden"  value="<?=$tax?>"  >
  <input name="taxReturnBase" type="hidden"  value="<?=$taxReturnBase?>" >
  <input name="currency"      type="hidden"  value="<?=$currency?>" >
  <input name="signature"     type="hidden"  value="<?=$signature?>">
  <input name="test"          type="hidden"  value="<?=$parametros['test']?>" >
  <input name="buyerEmail"    type="hidden"  value="test@test.com" >
</form>