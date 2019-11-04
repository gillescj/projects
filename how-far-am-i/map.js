var distanceMap = L.map('distanceMap').setView([hawaiiCrds.lat, hawaiiCrds.long], 5);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {
    attribution
}).addTo(distanceMap);

document.getElementById('fly-to').onclick = function(e) {
    if (currentCrds) {
        var pos = [currentCrds.lat, currentCrds.long];
        var zoom = '13';
        var loc = pos;
        var z = parseInt(zoom);
        distanceMap.flyTo(loc, z);
    }
}

document.getElementById('fit-bounds').onclick = function(e) {
    if (currentCrds) {
        var pos = [currentCrds.lat, currentCrds.long];
        var hawaii = [hawaiiCrds.lat, hawaiiCrds.long];
        var bounds = [pos, hawaii];
        L.marker(pos).addTo(distanceMap);
        L.marker(hawaii).addTo(distanceMap);
        distanceMap.fitBounds(bounds);
    }
}