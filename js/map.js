const token ="";

export let currentLocation = {
    lat: null,
    lng: null
};

export function loadMap(mapImg, longitude= -60.6505, latitude= -32.9442) {
    const url =`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+2563EB(${longitude},${latitude})/${longitude},${latitude},12/600x400?access_token=${token}`;
    
    mapImg.src= url;
}
export function getUserLocation(mapImg) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        
        currentLocation= {
            lat: latitude,
            lng: longitude
        };
        loadMap(mapImg, longitude, latitude);
    });
}