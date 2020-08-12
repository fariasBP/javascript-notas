/* OBTENER NODOS DE TIPO TEXTO

    TEMAS:
        - textContent
        - innerHtml
*/

var contenido = document.getElementById("id_parrafo")
var contenido2 = document.getElementById("id_parrafo_2")
var contenido3 = document.getElementById("id_parrafo_3")

contenido2.textContent = "Este es el parrafo 2 de la pagina, y esta palabra esta en <b>negrita</b> para que resalte mejor en el contenido."
contenido3.innerHTML = "Este es el parrafo 3 de la pagina, y esta palabra esta en <b>negrita</b> para que resalte mejor en el contenido."