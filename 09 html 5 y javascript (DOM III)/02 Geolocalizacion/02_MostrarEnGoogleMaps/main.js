var p = document.getElementById("salida");
var map = document.getElementById("mapa");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarCordenadas, manjadorDeErrores);
} else {
    p.innerHTML = "Tu navegador no soporta golocalizacion";
}
function mostrarCordenadas(posicion) {
    let lt = posicion.coords.latitude,
        lg = posicion.coords.longitude;
        p.innerHTML = `Latitud: ${lt} y Longitud: ${lg}`;
}
function manjadorDeErrores(err) {
    let action;
    switch(err.code) {
        case error.PERMISSION_DENIED:
            action = "Permiso denegado";
            break;
        case error.POSITION_UNAVAILABLE:
            action = "Posicion no disponible";
            break;
        case error.TIMEOUT:
            action = "Tiempo excedido";
            break;
        case error.UNKNOWN_ERROR:
            action = "Error desconocido";
            break;
    }
    p.innerHTML = 'Error:'+action;
}