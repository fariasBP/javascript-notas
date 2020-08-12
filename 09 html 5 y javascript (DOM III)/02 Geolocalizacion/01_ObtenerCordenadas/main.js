var p = document.getElementById("salida");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(obtenerCordenadas, manajadorDeErrores);
} else {
    console.log('tu navegador no soporta la geolocalizacion');
    p.innerHTML = "Tu navegador no soporta la geolocalizacion";
}
function obtenerCordenadas(posicion) {
    var lt = posicion.coords.latitude;
    var lg = posicion.coords.longitude;
    p.innerHTML = `Latitud: ${lt} y Longitud: ${lg}`;
}
function manajadorDeErrores(error) {
    var action;
    switch(error.code) {
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