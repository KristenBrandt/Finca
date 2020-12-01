Feature: Ingreso Ventas
	Para ingresar una venta
	Como el administrador
	Quiero que me de un mensaje de comprobación

@mytag
Scenario: Ingreso ventas sin internet
	Given Que no tengo conexion a internet
	When Apacho el boton de ingresar venta
	Then Se despliega un mensaje/aleta de que se la logrado exitosamente.


