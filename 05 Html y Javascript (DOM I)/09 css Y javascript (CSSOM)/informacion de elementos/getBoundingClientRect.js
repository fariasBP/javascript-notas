/*GETBOUNDINGCLIENRECT
	Veremos com obtener la posision del un elemento en el navegador, igual que su tamaño
	TEMAS:
		- getBoundingClientRect >>> accede a distintas propiedades del elemento como ser:
			- top >>> desde la parte superior del navegador hasta la posicion [0,0] del elemento
			- bottom >>> desde la parte inferior del navegador hasta la posicion [0,0] del elemento
			- left >>> desde la parte izquierda del navegador hasta la posicion [0,0] del elemento
			- right >>> desde la parte derecha del navegador hasta la posicion [0,0] del elemento
			- width >>> ancho del elemento
			- height >>> alto del elemento
*/

let elemento = documento.getElementById('element');

var posicionTop = elemento.getBoundingClientRect().top;

var posicionBottom = elemento.getBoundingClientRect().bottom;

var posicionLeft = elemento.getBoundingClientRect().left;

var posicionRight = elemento.getBoundingClientRect().right;

var tamanoAncho = elemento.getBoundingClientRect().width;

var tamanoAlto = elemento.getBoundingClientRect().height;

console.log(`
	posicionTop : ${posicionTop}\n
	posicionBottom : ${posicionBottom}\n
	posicionLeft : ${posicionLeft}\n
	posicionRight : ${posicionRight}\n\n
	tamañoAncho : ${tamanoAncho}\n
	tamañoAlto : ${tamanoAlto}\n
`);