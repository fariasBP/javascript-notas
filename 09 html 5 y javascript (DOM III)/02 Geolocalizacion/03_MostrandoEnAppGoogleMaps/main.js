var marcador_tiempo_real, mapa;
google.maps.event.addDomListener(window, 'load', dibujarMapa);
function dibujarMapa() {
    var opcionesMapa = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    mapa = new google.maps.Map(document.getElementById('salida'),opcionesMapa);
    navigator.geolocation.getCurrentPosition(function(posicion){
        var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);
        var marcador = new google.maps.Marker({
            map: mapa,
            position:geolocalizacion,
            visible: true
        });
        marcador_tiempo_real = new google.maps.Marker({
            map: mapa,
            position:geolocalizacion,
            visible: true
        });
        mapa.setCenter(geolocalizacion);
        navigator.geolocation.watchPosition(actualizarPosicion,function(error){console.log(error);},{maximumAge: 0});
    },function(error){
        console.log(error);
    });
}
function actualizarPosicion(posicion){
    var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);
    marcador_tiempo_real.setPosition(geolocalizacion);
    mapa.setCenter(geolocalizacion);
}