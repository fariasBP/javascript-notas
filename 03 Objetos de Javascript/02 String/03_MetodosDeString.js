/* METODOS DEL OBJETO STRING
    a continuacion mostraremos todos los metodos que tiene el objeto STring
    TEMAS:
        - Metodos de Busqueda
            - String.charAt(<int posicion>):String -> devuelve el carater de una posicion
            - String.indexOf(<String caracter>):int -> devuelve la posicion de un caracter en una cadena
            - String.lastIndexOf(<String caracter>):int -> devuelve la ultima posicion de un caracter en una cadena
            - String.search(<String cadena|regexp expresion>):String -> busca una cadena o expresion regular en una cadena
            - String.match(<regExp expresion>) -> busca una expresion regular y devulve la cadena que se menciona la expresion en una cadena
        - Metodos de Comparacion
            - <String cadena_de_referencia>.localeCompare(<String cadena_de_comparacion):int -> Devuelve un número negativo si la cadena de referencia ocurre antes de la cadena de comparación; positivo si la cadena de referencia ocurre después de la cadena de comparación; 0 si son equivalentes.


*/

const mi_texto = "Este mi text0 de ejemplo"

// METODOS DE BUSQUEDA
    // charAt - devuelve el caracter de una posicion
    console.log("CHARAT")
        console.log("\t" + mi_texto.charAt(5))  // print: m
        console.log("\t" + mi_texto.charAt(6)) // print: i

    // indexOf - devuelve la posicion de un caracter en una cadena
    console.log("INDEXOF")
        console.log("\t" + mi_texto.indexOf("m")) // print: 5 // Este [m]i text0 de ejemplo
        console.log("\t" + mi_texto.indexOf("i")) // print: 6 // Este m[i] text0 de ejemplo
        console.log("\t" + mi_texto.indexOf("a")) // print: -1  // imprime -1 por que no existe el caracter en la cadena
        console.log("\t" + mi_texto.indexOf("w")) // print: -1 // imprime -1 por que no existe el caracter en la cadena
    
    // indexOf - devuelve la posicion de un caracter en una cadena
    console.log("INDEXOF")
        console.log("\t" + mi_texto.lastIndexOf("m")) // print: 20 // Este mi text0 de eje[m]plo
        console.log("\t" + mi_texto.lastIndexOf("i")) // print: 6 // Este m[i] text0 de ejemplo
        console.log("\t" + mi_texto.lastIndexOf("w")) // print: -1 // imprime -1 por que no existe el caracter en la cadena
    
    // search(<String cadena|regExp expresion>) -> busca una cadena o expresion regular y devuelve su posicion en una cadena
    console.log("SEARCH")
        console.log("\t" + mi_texto.search("de")) // print: 14 // Este mi text0 [de] ejemplo
        console.log("\t" + mi_texto.search(/\s/)) // print: 4 // Este[ ]mi text0 de ejemplo

    // match(<regExp expresion>) -> busca una expresion regular y devulve la cadena que se menciona la expresion en una cadena
    console.log("MATCH")
        console.log("\t" + mi_texto.match("de")) // print: de // Este mi text0 [de] ejemplo
        console.log("\t" + mi_texto.match("algo")) // print: null // por que no que esta evaluando no existe en la cadena
        console.log("\t" + mi_texto.match(/\d/)) // print: 0 // Este mi text[0] de ejemplo

// METODOS DE COMPARACION
    // <String cadena_de_referencia>.localeCompare(<String cadena_de_comparacion):int -> Devuelve un número negativo si la cadena de referencia ocurre antes de la cadena de comparación; positivo si la cadena de referencia ocurre después de la cadena de comparación; 0 si son equivalentes.
    console.log("LOCALECOMPARE")
        console.log("\t" + "a".localeCompare("c")) // print: -[numero] // devuelve numero negativo si 
        console.log("\t" + "algo".localeCompare("Este")) // print: +[numero] // por que no que esta evaluando no existe en la cadena
        console.log("\t" + mi_texto.localeCompare("Este mi text0 de ejemplo")) // print: 0 // Este[ ]mi text0 de ejemplo