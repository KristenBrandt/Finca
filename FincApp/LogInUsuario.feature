Feature: LogIn Usario
	Para poder ingresar a la applicacion y luego utilizarla
	Como gerente de la finca
	Quiero poder ingresar con mi cuenta previamente creada

@mytag
Scenario: Gerente ingresa a el app con su usario y contraseña
	Given El gerente ya tiene una cuenta creada
	When el gerente ingresa su usario y contraseña a la applicacion
	Then la applicacion ingresa a el menu principal y le muestra los botones de centros de costo y personal
