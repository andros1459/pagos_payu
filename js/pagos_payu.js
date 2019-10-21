pay_payu=new Array();
currency_payu='';
iva_payu='';
dir='';
mensajes={
	"1":"Debe colocar el id o la clase del elemento contenedor.",
	"2":"Debe colocar la ruta del elemento.",
	"3":"Debe Colocar una descripcion para el nuevo elemento.",
	"4":"Debe colocar el valor para el nuevo elemento."
}
function pagos_payu(data){
	//funciones necesarias
	if(data.obj){
		if(data.obj!=''){
			obj=data.obj;
		}else{
			console.error(mensajes[1]);
			return;
		}
	}else{
		console.error(mensajes[1]);
		return;
	}
	if(data.dir){
		if(data.dir!=''){
			dir=data.dir;
		}else{
			console.error(mensajes[2]);
			return;
		}
	}else{
		console.error(mensajes[2]);
		return;
	}
	if(data.tipo){
		tipo=data.tipo;
	}else{
		tipo="float_payu";
	}
	if(data.idioma){
		idioma=data.idioma;
	}else{
		idioma="ES_es";
	}
	if(data.moneda){
		currency_payu=data.moneda;
	}else{
		currency_payu='COP';
	}
	if(data.iva){
		iva_payu=data.iva;
	}
	$.getJSON(dir+idioma+".json", function(text){

		$(obj).addClass("box_payu");
		$(obj).addClass(tipo);
		html='<div class="card">';
		html+='<div class="card-header"><h3 class="card-title">'+text.title+'</h3></div>';
		html+='<div class="card-body">';
		html+='<table id="datos_payu">';
		html+='</table>';
		html+='</div>';
		html+='<div class="card-footer">';
		html+='<buttom class="btn btn-success" onclick="pago_payu();">'+text.buttom+'</buttom>';
		html+='<div id="case_payu"></div>';
		html+='</div>';
		html+='</div>'
		$(obj).html(html);
	});
}
function add_payu(data){
	if(data.descripcion){
		if(data.descripcion!=''){
			descripcion=data.descripcion;
		}else{
			console.error(mensajes[3])
			return;
		}
	}else{
		console.error(mensajes[3]);
		return;
	}
	if(data.valor){
		if(data.valor!=''){
			valor=data.valor;
		}else{
			console.error(mensajes[4]);
			return;
		}
	}else{
		console.error(mensajes[4]);
		return;
	}
	pay_payu.push(data);
	cargar_payu();
}
function cargar_payu(){
	html='';
	for(i in pay_payu){
		html+='<tr><td><buttom class="btn btn-sm btn-danger" onclick="remove_payu('+i+')">x</buttom></td><td>'+pay_payu[i]['descripcion']+'</td><td><b>$ '+pay_payu[i]['valor']+'</b></td></tr>';
	}
	$("#datos_payu").html(html);
	return;
}
function remove_payu(i){
	pay_payu.splice(i,1);
	cargar_payu();
}
function pago_payu(){

	$("#case_payu").load(dir+"../cargar.php",{payu:'pago',currency_payu:currency_payu,pay_payu:JSON.stringify(pay_payu),iva:iva_payu},function(){
		document.getElementById('pagar_payu').submit();
	})
}