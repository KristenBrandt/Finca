﻿Feature: Ingreso Gastos
	Para ingresar un gasto
	Como el administrador
	Quiero que me de un mensaje de comprobación

@mytag
Scenario: Ingreso gasto con internet
	Given Que tengo conexion a internet
	When Apacho el boton de ingresar gasto
	Then Se despliega un mensaje/aleta de que se la logrado exitosamente.

