Feature: LogIn Usario con email
	Para entrar a la applicacion
	Como Gerente
	Quiero poder ingresar a la aplicacion utilizando mi correo electronico

	@mytag
	Scenario: Gerente ingresa a el app con su email
		Given El usuario tiene correo
		When el gerente ingresa su correo a la applicacion
		Then la applicacion ingresa a el menu principal
