# Pruebas con Cypress

*  [Escenarios de prueba](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana-5#parte-n-1-funcionalidad-pruebas-e2e-con-cypress)
*  [Pros y contras de cypress](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana-5#pros)

## Ejecución de los escenarios

### Precondiciones
*  Tener instalado [NodeJS](https://nodejs.org/es/)
*  Tener acceso a la aplicación GHOST
*  Estar registrado en GHOST

### Instrucciones
*  Instalar cyprees en una terminal con el comando npm install -g cypress
*  Ubicarse en la [carpeta de cypress](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/tree/master/semana7/pruebas-cypress) y ejecutar el comando npm install. Esto instalara las librerias faker y moment, necesarias para la ejecución de los escenarios
*  Reemplazar el host del sitio de ghost en la linea 2 del archivo [parameters.json](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/semana7/pruebas-cypress/cypress/integration/ghost/parameters.json)
*  Reemplazar el email de usuario que tenga de acceso, en la linea de código 5 del archivo [parameters.json](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/semana7/pruebas-cypress/cypress/integration/ghost/parameters.json)
*  Reemplazar el password de usuario que tenga de acceso, en la linea de código 6 del archivos [parameters.json](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/semana7/pruebas-cypress/cypress/integration/ghost/parameters.json)
*  Ingresar a la carpeta de cyprres en la terminal y ejecutar el comando cypress open. Al hacer esto se abrira la interfaz grafica de cypress
*  En la pestaña "Tests" de la interfaz identificar la carpeta [ghost](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/tree/master/semana7/pruebas-cypress/cypress/integration/ghost) y ejecutar todos los archivos cuya extensión sea "spec.js" .

### Notas

* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana7) se encuenta la descripción de las estrategias utilizadas (pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio), para la construcción de las pruebas.
* En el siguiente [enlace](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/issues) se encuentran los issues de defectos por manejo de datos inválidos encontrados en la ejecución de las pruebas por .
