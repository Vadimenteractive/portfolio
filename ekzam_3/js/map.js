function initMap() {
    var centerMap = {lat: 48.732994, lng: 37.578281},
        position =  {lat: 48.734271, lng: 37.579445},
        map = new google.maps.Map(document.getElementById('map'), {
            center: centerMap,
            zoom: 16
        }),
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: {
                url: "img/Pin.svg",
                scaledSize: new google.maps.Size(46, 53)
            }
        });
}