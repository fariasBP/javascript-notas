var apiFile = window.File && window.FileReader;
var salida = document.getElementById('salida');
var inp_Archivo = document.getElementById('archivos');

if (!apiFile) {
    salida.innerHTML = 'No soporta el api File';
} else {
    salida.innerHTML = 'Si soporta el api File';
    inp_Archivo.addEventListener('change', seleccionaArchivo);
}
function seleccionaArchivo(e) {
    var archivosSeleccionados = e.target.files[0];
    salida.innerHTML = `Seleccionaste el archivo ${archivosSeleccionados.name}`;
}