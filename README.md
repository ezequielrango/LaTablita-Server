<h1 align="center">
 <img align="center" src="https://readme-typing-svg.herokuapp.com?color=dce319&size=48&width=1000&duration=3000&height=81&center=true&vCenter=true&lines=La+Tablita+Server"/>
</h1>
Database creation using SQL language and server with Nodejs, Express. Different routes with https requests. Theoretical questions of Database. Data manipulation without ORM, only with query and using stored procedures. <br>
The purpose of this activity is to reinforce basic but fundamental knowledge of MySQl databases, that's why I don't use an ORM like Sequelize. 

### EER Diagram (Enhanced entity-relationship):

![EER-Diagram](https://user-images.githubusercontent.com/79542271/179872820-7a3fe1ed-2d79-4f52-99fb-3c7362418b6e.JPG)

<h3> Trabajo Práctico Nº2 </h3>
<p>
1) Escribir toda la sintaxis de la base de datos de La Tablita. <br>
2) Crear un servidor en Express con todas las rutas posibles, utilizando toda la
sintaxis aprendida hasta ahora, y dándole vida a La Tablita. <br>
3) Responder este cuestionario: <br>
a) ¿Qué es una base de datos? <br>
b) ¿Qué es una tabla? ¿Cómo funciona? <br>
c) ¿Qué comandos de SQL conoces? Describe su utilidad. <br>
4) Describe paso a paso, cómo fue tu procedimiento para llevar a cabo el punto 2 <br> 

<br>
3)

a) Programa capaz de almacenar gran cantidad de datos, relacionados y estructurados, que pueden ser consultados rápidamente de acuerdo con las características selectivas que se deseen.
<br>

b) Todas las tablas de una base de datos relacional están formadas por columnas y filas, y cada columna está diseñada para un atributo determinado. Poseen PK que identifican al registro de la tabla, y puede tener una o varias FK, que hacen referencia a la PK de otra tabla. Sirven para almacenar datos y poder transformarlos en información, previo procesamiento de los mismos. 

<br>

c) Comandos SQL Básicos<br>

Definiendo cómo es almacenada la información.<br>

    CREATE DATABASE se utiliza para crear una nueva base de datos vacía.<br>
    DROP DATABASE se utiliza para eliminar completamente una base de datos existente.<br>
    CREATE TABLE se utiliza para crear una nueva tabla, donde la información se almacena realmente.<br>
    ALTER TABLE se utiliza para modificar una tabla ya existente.<br>
    DROP TABLE se utiliza para eliminar por completo una tabla existente. <br>

Manipulando los datos.<br>

    SELECT se utiliza cuando quieres leer (o seleccionar) tus datos.<br>
    INSERT se utiliza cuando quieres añadir (o insertar) nuevos datos.<br>
    UPDATE se utiliza cuando quieres cambiar (o actualizar) datos existentes.<br>
    DELETE se utiliza cuando quieres eliminar (o borrar) datos existentes.<br>
    REPLACE se utiliza cuando quieres añadir o cambiar (o reemplazar) datos nuevos o ya existentes.<br>
    TRUNCATE se utiliza cuando quieres vaciar (o borrar) todos los datos de la plantilla. <br>
    
  Clausulas básicas

Las cláusulas son condiciones y las utilizamos para especificar los datos que deseamos seleccionar o manipular.

FROM se utiliza para especificar la tabla de la cual se van a consultar los registros
GROUP BY se utiliza para separar en grupos específicos los registros consultados.
ORDER BY  se utiliza para ordenar los registros seleccionados tomando en cuenta los parámetros que le indiquemos.
WHERE Se utilizar para determinar los registros seleccionados con la cláusula FROM
HAVING es parecida a WHERE, ya que determina qué registros se seleccionan. Cuando los registros se han agrupado utilizando GROUP BY, la cláusula HAVING determina cuáles de ellos se van a mostrar.
Comandos para la cláusula Select
AVG Se utiliza para determinar el promedio de los registros de un campo determinado, en una tabla especifica.
COUNT Se utiliza para devolver el número de registros que se muestran en una consulta realizada.
SUM Se utiliza para devolver la suma de todos los registros de un campo especifico, dentro de una tabla.
MAX Se utiliza para devolver el registro mayor o cantidad mayor de un campo especifico, dentro de una tabla.
MIN Se utiliza para devolver el registro menor o cantidad menor de un campo especifico, dentro de una tabla.


### 4) Paso a paso: 

En primer lugar, detecto las entidades con sus respectivos atributos y sus posibles relaciones (cardinalidad de las mismas). Luego, procedo a desarrollar el código para la creación de la db, tablas con atributos e inserción de datos en la misma. 
<br>
Una vez ejecutado el script SQL y creada la db, aplico ingeniería inversa para así obtener el EER de la misma. 
 <br>
 Creo un proyecto NodeJs con el comando 'npm init -y', la estructura inicial de carpetas y también ejecuto el comando 'git init', para trabajar con control de versiones y vincular a un repositorio remoto (github). En el app.js, el entry point de la API, requiero Express y almacenado la ejecución del mismo dentro de una variable llamada 'app'. Instalo dependencias con el Node Package Manager (NPM), y también la de Desarrollo, Nodemon. La función de la misma, es la de reiniciar el servidor automaticamente cada vez que se detectan cambios en el código desarrollado. Configuro e inicializo el servidor, empleando el middleware morgan para ver el trafico de req-res entre servidor, cliente y db. Requiero y utilizo dotenv para setear las variables de entorno que utilizo para configurar la conexión con la base de datos MySQL, y utilizo el metodo .json() de Express para poder manejar los Json que recibo. 
 <br>
 En la carpeta de routes tengo un 'index.js', donde se encuentras los endpoinst de las entidades. En cada router.use() se ejecuta una ruta con el nombre de la entidad y se requieren las rutas contenidas en un archivo.js aparte. En el archivo requerido por cada entidad, se encuentran las rutas con distintos verbos HTTP (get,post,update,delete) y la utilización de sus respectivos controladores. 
 Dentro de un entity_controller.js , donde se encuentran todos los controladores de 'x' entidad, por cada uno de ellos trabajo con arrow function, y asincronismo. Porque Nodejs es de un solo hilo de ejecucion y si no empleo asincronismo puede alterarse la ejecucion del programa esperando los resultados de las consultas a la base de datos. <br> 
 Requiero el modulo creado 'mysqlConnection' y lo almacenado en una variable. Con esa variable, ejecuto el metodo .query() , que recibe como parámetros Una consulta SQL, datos dinamicos del cliente (opcional, segun el controlador) , provenientes del req.params (id) y/o del req.body (valores a insertar en la db previa validación por parte del server). Para consultas que consisten en crear o actualizar un registro de la db, creo procedimientos almacenados y los llamo con el comando 'CALL  nombreProcedimineto' dentro del controlador. <br>
 
</p> 

