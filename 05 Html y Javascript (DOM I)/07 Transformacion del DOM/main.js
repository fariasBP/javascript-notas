// CREAR ELEMENTO
var element = document.createElement('p');
// CREAR NODO
var content = document.createTextNode('este es el contenido de')
// DAR ATRIBUTO AL ELEMENTO
element.setAttribute('align', 'center');
// PONER CONTENT EN ELEMENT
element.appendChild(content);
// PONER EL ELEMENTO AL BODY
document.body.appendChild(element);