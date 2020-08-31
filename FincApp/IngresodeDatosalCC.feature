Feature: Ingreso de datos a los Centros de Costo
	Para ingresar una nueva compra a los centros de costo
	como el administrador de la finca
	Quiero poder ingresar el costo y descripicon de la compra hecha
	
@mytag
Scenario: Ingreso de datos al CC con descripcion
	Given el administrador hizo una nueva compra
	And ya esta registrado y logged in a el app
	When el administrador ingresa el costo, el nombre del articulo o servicio comprado, una pequeña descripcion y a que centro de costo pertenece
	Then el dato se ingresa a la base de datos si se encuentra online y si se encuentra offline se sube despues
