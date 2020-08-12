/*SELECTORES

    TEMAS:
        - Selectores de id
            - getElementById(<String id_elemento>) -> selecciona y devuelve un nodo del DOM, en donde corresponda con el id (identificador) que se puso como parametro.
        - Selectores de etiqueta
            - getElementsByTagName(<String etiqueta) -> seleciona y devuelve nodos del DOM, en donde corresponda con la etiqueta que se puso como parametro.
        - Selectores de nombre
            - document.getElementsByName(<String nombre_elemento>)
        - Selectores de Clase
        - Selectores css
    NOTACION:
        - document.getElementById(<String id_elemento>):HTMLElement
        - document.getElementsByTagName(<String etiqueta>):HTMLCollections[]
        - document.getElementsByName(<String nombre>):HTMLElement
        - document.querySelector(<String selector_css>):HTMLElement
        - document.querySelectorAll(<String selector_css>):NodeList[]

*/ 

// SELECTORES DE ID
console.log('SELECTOR DE ID');
    var parrafo2 = document.getElementById('parrafo_2');
    console.log(parrafo2);
// SELECTORES DE ETIQUETA
console.log('SELECTOR DE ETIQUETA');
    var parrafos = document.getElementsByTagName('p');
    console.log(parrafos);
    console.log(parrafos[1]);
// SELECTORES DE CLASE
console.log('SELECTOR DE CLASE');
    var titulo = document.getElementsByClassName('titulo');
    console.log(titulo);
    console.log(titulo[0]);
    console.log(titulo[1]);
// SELECTORES DE NOMBRE
console.log('SELECTOR DE NOMBRE');
    var apellido = document.getElementsByName('apellido');
    console.log(apellido);
    console.log(apellido[0])
// SELECTOR CSS
console.log('SELECTOR CSS');
    var subtitulo = document.querySelector('#subtitulo');
    console.log(subtitulo);
    var titulo = document.querySelector('.titulo');
    console.log(titulo);
    var lista = document.querySelector('ul');
    console.log(lista);
    var lista_item1 = document.querySelector('ul li:first-child');
    console.log(lista_item1);
    var lista_item2 = document.querySelector('ul li:nth-child(2)');
    console.log(lista_item2);
// SELECTOR CSS MULTIPLE
console.log('SELECTOR CSS MULTIPLE');
    var tituloAll = document.querySelectorAll('.titulo');
    console.log(tituloAll);
    console.log(tituloAll[0]);