const addressInput = document.getElementById('search-address');

const latInput = document.getElementById('search-lat');
const longInput = document.getElementById('search-long');

const timeResult = document.getElementById('result-container');



function getTimezone(selection) {
    if (selection === 'coords') {
        var location = {
            lat: latInput.value,
            long: longInput.value
        };
        try { timezone = tzlookup(location.lat, location.long); } catch {
            // timezone = tzlookup(0, 0);
            timeResult.innerHTML = "Could not find Coordinates";
            return;
        }

        var time = new Date().toLocaleString("en-US", { timeZone: timezone });
        timeResult.innerHTML = time + " in " + timezone;
        addressInput.value = '';

    } else {
        var address = addressInput.value.replace(" ", "+");
        var url = "https://nominatim.openstreetmap.org/search?q=" + address + "&format=json&addressdetails=1";
        fetch(url)
            .then(function(data) { return data.json(); })
            .then(function(res) {

                var location = {
                    lat: res[0].lat,
                    long: res[0].lon
                };

                timezone = tzlookup(location.lat, location.long);
                var time = new Date().toLocaleString("en-US", { timeZone: timezone });
                timeResult.innerHTML = time + " in " + timezone;
                latInput.value = location.lat;
                longInput.value = location.long;
            })
            .catch(function() {
                timeResult.innerHTML = "Could not find Address";
            });
    }
}

// On places button click show date and time info
function placesLocation(place) {
    var timezone = place.getAttribute("data-timezone");
    var time = new Date().toLocaleString("en-US", { timeZone: timezone });
    timeResult.innerHTML = time + " in " + timezone;
    addressInput.value = '';
    latInput.value = '';
    longInput.value = '';
}

function placesRanLocation() {
    var randomPlace = allTimezones[Math.floor(Math.random() * allTimezones.length)];
    var time = new Date().toLocaleString("en-US", { timeZone: randomPlace });
    timeResult.innerHTML = time + " in " + randomPlace;
    addressInput.value = '';
    latInput.value = '';
    longInput.value = '';
}

// var url = "https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&addressdetails=1";

// // var response = fetch(url);
// // var myJson = response.json();
// // console.log(myJson);


// function testFun() {
//     fetch(url)
//         .then(function(data) { return data.json() })
//         .then(function(res) {
//             console.log(res);
//             console.log(res.length);
//             console.log(res[0].lat);
//             return res;
//         });
// }

// console.log(test[0].lat);

// $.getJSON(url, function(result) {
//         console.log(long);
//     }

// )

// 1: Find geocode service to convert address to latlong
// 2: Find timezone service to find UTC offset for latlong

// Moment Timezone??? https://medium.com/@toastui/handling-time-zone-in-javascript-547e67aa842d
// https://momentjs.com/timezone/docs/