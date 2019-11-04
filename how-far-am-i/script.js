const hawaiiCrds = {
    lat: 20.716179,
    long: -158.214676
}

var currentCrds;

function getDistance() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var crds = position;
        myDistance(crds);
    }, function(error) {
        alert('Error occurred. Error code: ' + error.code);
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

function toRad(value) {
    return value * Math.PI / 180;
}

function myDistance(location) {
    var dis = calculateDistance(location.coords.latitude, location.coords.longitude, hawaiiCrds.lat, hawaiiCrds.long);
    document.getElementById('far-results').innerHTML = Math.round(dis, 0) + ' km';
    currentCrds = {
        lat: location.coords.latitude,
        long: location.coords.longitude

    }
}