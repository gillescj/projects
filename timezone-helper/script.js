const addressInput = document.getElementById('search-address');

const latInput = document.getElementById('search-lat');
const longInput = document.getElementById('search-long');

const timeResult = document.getElementById('time-result');

// bingGeocoder.geocode('1600 Pennsylvania Ave NW, Washington, DC', function(result) {
//     console.log(result);
// });

// bingGeocoder.geodecode("44.915", "-93.21", function(result) {
//     console.log(result);
// });


function getLocation() {
    var bingGeocoder = new GeocoderJS.createGeocoder({
        provider: 'bing',
        apiKey: 'As11PsBXYvAoGEXmz59ZWl93T8_OACdXi2QnRKWMRIUK6hzOXgN3BcZHnbKyPZYo'
    });

    var address = document.getElementById('search-address').value;

    var test = bingGeocoder.geocode(address);
    return test;
    // function(result) {
    // return {
    //     lat: result[0].latitude,
    //     long: result[0].longitude
    // }
    // console.log(result[0].latitude);
    // console.log(typeof(result));
}

function getTimezone() {
    if (addressInput === null | addressInput.value === '') {
        var location = {
            lat: latInput.value,
            long: longInput.value
        }
    }
    // var location = [44.915, -93.21];
    // console.log(location);
    timezone = tzlookup(location.lat, location.long);
    var time = new Date().toLocaleString("en-US", { timeZone: timezone });
    timeResult.innerHTML = time + " in " + timezone;
}

// On places button click show date and time info
function placesLocation(place) {
    var timezone = place.getAttribute("data-timezone");
    var time = new Date().toLocaleString("en-US", { timeZone: timezone });
    timeResult.innerHTML = time + " in " + timezone;
}

function placesRanLocation() {
    var randomPlace = allTimezones[Math.floor(Math.random() * allTimezones.length)];
    var time = new Date().toLocaleString("en-US", { timeZone: randomPlace });
    timeResult.innerHTML = time + " in " + randomPlace;
}






// 1: Find geocode service to convert address to latlong
// 2: Find timezone service to find UTC offset for latlong

// Moment Timezone??? https://medium.com/@toastui/handling-time-zone-in-javascript-547e67aa842d
// https://momentjs.com/timezone/docs/