Feature: Ventas
	Para ingresar una nueva venta
	Como un trabajador de la finca
	Quiero poder ingresar los datos y agregar otra venta
	
@mytag
Scenario: Venta Sin Penalizacion
	Given Se acaba de hager una venta
	And Palmas de Ixcan ya entrego el recibo
	When se ingresan los datos de racimos,pepas, toneladas,y total y apacho el boton de ingresar
	Then se ingresan los datos a la base de datos
