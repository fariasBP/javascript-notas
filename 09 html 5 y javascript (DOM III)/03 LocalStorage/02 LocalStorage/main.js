/* LOCAL STORAGE
    para guardar datos en el dicos duro de la pc esta es segura ya solo se podra ingresar a esta
    TEMAS:
        - typeof(Storage) >>> para saber si soporta
        -localStorage
    FORMA DE ESCRITURA:
        localStorage.[name_data] = <string data>
*/
let salida = document.getElementById('salida'),
    nombre = document.getElementById('nombre'),
    contra = document.getElementById('contra'),
    btn_guardar = document.getElementById('btn_guardar'),
    btn_mostrar = document.getElementById('btn_mostrar');
btn_guardar.addEventListener('click', guardarDatos);
btn_mostrar.addEventListener('click', mostrarDatos);

if (typeof(Storage) !== undefined) {
    salida.innerHTML = 'Si soporta LocalStorage';
} else {
    salida.innerHTML = 'No soporta LocalStorage';
}
function guardarDatos() {
    localStorage.nombre = nombre.value;
    localStorage.contra = contra.value;
}
function mostrarDatos() {
    if(localStorage.nombre != undefined && localStorage.contra != undefined) {
        salida.innerHTML = `Tu nombre es:${localStorage.nombre} y tu contrasena es:${localStorage.contra}`;
    } else {
        salida.innerHTML = 'No hay datos almacenados';
    }
}