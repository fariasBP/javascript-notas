/*  GET ATRIBUTE - OBTENER ATRIBUTOS
    devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe,
    el valor retornado puede ser tanto null como "" (una cadena vacía).
    TEMAS:
        - getAtribute(<String atributo) -> devuelve el atributo especificado en el parametro, de un elemento.
    NOTACION:
        - [HTMLElement elemento].getAtribute(<String atributo>)
*/

/*atributos de una etiqueta
    <h1 [atributos]>titulo</h1>
*/
console.log("---GET ATRIBUTE---")
var titulo = document.getElementById("id_title")

// obteniendo atributos con getAtribute()
console.log(titulo.getAttribute("style")) // print: "color: black; font-weight: 400;"
console.log(titulo.getAttribute("id")) // print: "id_title"
console.log(titulo.getAttribute("mi_atributo")) // print: "hola"

// Pero tambien se puede obtener atributos por medio de propiedades (ya que son porpiedades)
console.log(titulo.style)
console.log(titulo.style.cssText) // print: "color: black; font-weight: 400;"
console.log(titulo.id) // print: "id_title"
console.log(titulo.mi_atributo) // print: undefined