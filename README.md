pagos_payu
==========

Este plugin genera un carro de compras en vivo, que va a ir agregando productos y precios para poder pagar con payu

- Inicial

	Esta es la forma de inciar el botone pagos.

		pagos_payu({
			[Array]
		});

	+parametros

	Array: Tiene todos los parametros que se necesitan para la creacion, los parametros son los siguientes:

	-obj[STRING]: es el id o la clase que va contener nuestro calendario, debe usar los prefijos de Jquery para distingir los ("#", ".").

	-moneda[STRING]: Es la moneda a manejar EJ. "COP", USD.

	-iva[INT]:Si aplica esta tasa o impuesto se debe colocar el valor del porcentaje.

	-idioma[STRING] opcional: es el idioma del calendario si no se coloca el idioma oficial es español.

	-dir[STRING]: es la direccion de ubicacion del json con el idioma de pagos_payu.

	EJ.

		pagos_payu({
			obj:"#compras",
			idioma:"ES_es",
			dir:"language/"
		});

- Agregar productos y/o servicios
	Con esta opcion de puede agregar datos al carro de compras

		add_payu({
			[Array]
		})

	Array: Tiene todos los parametros que se necesitan para el envio, los parametros son los siguientes:

	-descripcion[STRING]: Es la descripcion del producto y/o Servicio.

	-valor[INT]: Es el valor a cobrar.

	EJ.

		add_payu({
			"descripcion":"pago 3",
			"valor":1000
		})

Todos los aportes son voluntarios.

Si deseas ayudarme para continuar con mis aportes puedes enviarme a mi billetera en BTC

1NrBE31sYvq5F96nD8GGRS5TWXneVnG3yo
