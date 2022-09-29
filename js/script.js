// Initialize and add the map
function initMap() {
    const storeOneLocation = {
        lat: 35.82776767573893,
        lng: -96.38750766317956
    };

    const mapOne = new google.maps.Map(document.getElementById("mapOne"), {
        zoom: 18,
        center: storeOneLocation,
    });

    const marker = new google.maps.Marker({
        position: storeOneLocation,
        map: mapOne,
    });

    // This is the second map
    const storeTwoLocation = {
        lat: 35.82776767573893,
        lng: -96.38750766317956
    };

    const mapTwo = new google.maps.Map(document.getElementById("mapTwo"), {
        zoom: 18,
        center: storeTwoLocation,
    });

    const markerTwo = new google.maps.Marker({
        position: storeTwoLocation,
        map: mapTwo,
    });
}

window.initMap = initMap;