# Ejecutar las pruebas de Ghost realizadas con KRAKEN 

1. 
2. 
3. Ubicarse en la carpeta del proyecto y ejecutar este comando 
./node_modules/kraken-node/bin/kraken-node run



## Ejecución de los escenarios

### Precondiciones
*  Tener instalado [NodeJS](https://nodejs.org/es/)
*  Instalar GHOST Versión [Ghost version: 4.41.3]
*  Tener acceso a la aplicación GHOST [Crear un usuario en GHOST y actualizar este archivo con el usuario y contraseña en este archivo https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/pruebas-kraken/properties.json en los campos USERNAME y PASSWORD o utilizar las credenciales de uno que ya tengan y colocarlo ahi, adicional si es necesario cambiar el puerto de la aplicación en este mismo archivo podran encontrar las URL's de la aplicación para ajustarlo ]
*  Estar registrado en GHOST
*  Tener el ambiente kraken y adb instalado en la computadora

### Instrucciones
*  Descargar esta carpeta -> https://github.com/j-albarracin-uniandes/pruebas-automatizadas/tree/master/semana7/pruebas-kraken
*  Kraken ya se encuentra en la carpeta instalado
*  Ubicarse en la [carpeta de kraken](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/tree/master/semana7/pruebas-kraken) y ejecutar el comando npm install. Esto instalara las librerias faker y moment, necesarias para la ejecución de los escenarios
*  Ejecutar npm i @faker-js/faker
*  Ejecutar ./node_modules/kraken-node/bin/kraken-node run

### Notas

* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana7) se encuenta la descripción de las estrategias utilizadas (pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio), para la construcción de las pruebas.
* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/issues) se encuentran los issues de defectos por manejo de datos inválidos encontrados en la ejecución de las pruebas.

### Descripción Detalle de los Escenarios
