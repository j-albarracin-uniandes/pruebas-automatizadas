# Pruebas con Cypress

*  [Escenarios de prueba](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana-5#parte-n-1-funcionalidad-pruebas-e2e-con-cypress)
*  [Pros y contras de cypress](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/wiki/semana-5#pros)

## Ejecuciónm de los escenarios

### Precondiciones
*  Tener instalado [NodeJS](https://nodejs.org/es/)
*  Tener acceso a la aplicación GHOST
*  Estar registrado en GHOST

### Instrucciones
*  Instalar cyprees en una terminal con el comando npm install -g cypress
*  Reemplazar el contenido de la carpeta "integration" con el archivo de pruebas [test.spec.js](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/pruebas/cypress/test.spec.js)   
*  Reemplazar el email de usuario que tenga de acceso de la linea de código 5 del archivo [test.spec.js](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/pruebas/cypress/test.spec.js) 
*  Reemplazar el password de usuario que tenga de acceso de la linea de código 6 del archivo [test.spec.js](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/pruebas/cypress/test.spec.js) 
*  Ingresar a la carpeta de cyprres en la terminal y ejecutar el comando cypress open. Al hacer esto se abrira la interfaz grafica de cypress
*  En la pestaña "Tests" de lla interfaz, ubicar el archivo [test.spec.js](https://github.com/j-albarracin-uniandes/pruebas-automatizadas/blob/master/pruebas/cypress/test.spec.js) y darle doble click para ejecutar las pruebas
