### api-sentimental-language
> Esta Api es una herramienta que te permite atravez de una ruta get, obtener la puntuacion sentimental de una frase.Actualmente la aplicacion realiza la puntacion sentimental mediante una cadena de texto en ingles, por lo cual el API hace la conversion de tu cadena de texto de español a ingles.

### Ejemplo

```sh
GET   "translate?text='CADENA-DE-TEXTO'
```
### Resultado de la consulta
```sh
	{"success":true,"data":{"score":0,"comparative":0,"tokens":[""],"words":[""],"positive":[""],"negative":[]}}
```
### ¿Qué necesito saber antes de empezar a usar el API?

	Aquí están las tecnologias usadas para empezar:
		-Node js
		-Protocolo HTTPS

### ¿Cómo puedo conectar a la API?

La API está disponible para todos los usuarios. En general, el procesamiento de los datos se realiza a través de una petición con el método GET. Es necesario contar con un KEY de google translate la cual puedes obtener en la siguiente ruta , [Google translate](https://cloud.google.com/translate/) y nodejs instalado.

### ¿Qué formatos de retorno son compatibles?

	API-SENTIMENTAL-LANGUAJE actualmente devuelve datos en formato JSON.

### ¿Existe algun demo?

Por el momento se puede consultar un demo de la aplicacion, [DEMO](https://sentimental-language.herokuapp.com/translate?text=%27Me%20encanta%20la%20ciudad%20de%20Morelia%27)

### Licencia
	
Es un software de codigo abierto bajo la licencia [MIT license](http://opensource.org/licenses/MIT)

### Contribucion
	
	MoreliaHacks
