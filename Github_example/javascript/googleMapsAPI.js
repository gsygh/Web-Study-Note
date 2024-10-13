import config from './APIKey.js';

const CONFIGURATION = {
    "locations": [
        { "title": "GitHub", "address1": "88 Colin P Kelly Jr St", "address2": "San Francisco, CA 94107 미국", "coords": { "lat": 37.782300317906035, "lng": -122.3911483067459 }, "placeId": "ChIJ32KaYX-AhYARNa93OffiHEk" }
    ],
    "mapOptions": { "center": { "lat": 38.0, "lng": -100.0 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 4, "zoomControl": true, "maxZoom": 17, "mapId": "" },
    "mapsApiKey": config.GOOGLE_MAPS_API_KEY,
    "capabilities": { "input": false, "autocomplete": false, "directions": false, "distanceMatrix": false, "details": false, "actions": false }
};


const $gmpx_api_loader = document.getElementsByTagName('gmpx-api-loader');
$gmpx_api_loader[0].setAttribute('key', config.GOOGLE_MAPS_API_KEY);

console.log($gmpx_api_loader[0]);





// google maps api
document.addEventListener('DOMContentLoaded', async () => {
    await customElements.whenDefined('gmpx-store-locator');
    const locator = document.querySelector('gmpx-store-locator');
    locator.configureFromQuickBuilder(CONFIGURATION);
});