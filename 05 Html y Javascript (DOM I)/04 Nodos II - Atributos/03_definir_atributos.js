/*  SET ATRIBUTE - DEFINIR ATRIBUTOS
    devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe,
    el valor retornado puede ser tanto null como "" (una cadena vacía).
    TEMAS:
        - setAtribute(<String atributo>, <String valor>) -> devuelve el atributo especificado en el parametro, de un elemento.
    NOTACION:
        - [HTMLElement elemento].setAtribute(<String atributo>, <String valor>)
*/

/*atributos de una etiqueta
    <h1 [atributos]>titulo</h1>
*/

console.log("---SET ATRIBUTE---")
var titulo = document.getElementById("id_title")

var barra = document.getElementById("id_barra")
var contenido = document.getElementById("id_contenido")

// definiendo atributos con setAtribute()
barra.setAttribute("class", "barra-style")
titulo.setAttribute("style", "color:white; font-weight: 400;")
barra.setAttribute("mi_atr", "quetal")

// Pero tambien se puede definir atributos por medio de propiedades (ya que son porpiedades)
contenido.className = "contenido-style"