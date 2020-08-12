
// Rescantando Propiedades
console.log(document.doctype) // print: <!doctype html>
console.log(document.lang)
console.log(document.head)
    console.log(document.charset) // print: UTF-8
    console.log(document.title)
console.log(document.children[0].lang)

// Cambiando valores a propiedades
document.title = "Mi nuevo titulo"
document.children[0].lang = "es"
document.head.title = "iso"