### Notas

* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana7) se encuenta la descripción de las estrategias utilizadas (pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio), para la construcción de las pruebas.
* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/issues) se encuentran los issues de defectos por manejo de datos inválidos encontrados en la ejecución de las pruebas.

* Se recomienda agregar la siguiente entrada al archivo config.development.json de la instancia de ghost que ejecutara para las pruebas para evitar problemas con muchos intentos de login fallidos:
```
  "spam": {
	"user_login": {
		"minWait": 0,
		"maxWait": 0,
		"freeRetries": 100000000
	},
	"user_reset": {
		"minWait": 0,
		"maxWait": 0,
		"lifetime": 3600,
		"freeRetries": 100000000
	},
	"global_reset": {
		"minWait": 0,
		"maxWait": 0,
		"lifetime": 3600,
		"freeRetries":100000000
	},
	"global_block": {
		"minWait": 0,
		"maxWait": 0,
		"lifetime": 3600,
		"freeRetries":100000000
	},
	"private_block": {
		"minWait": 0,
		"maxWait": 0,
		"lifetime": 3600,
		"freeRetries":100000000
	},
	"content_api_key": {
		"minWait": 0,
		"maxWait": 0,
		"lifetime": 3600,
		"freeRetries": 100000000
	}
  }
```
