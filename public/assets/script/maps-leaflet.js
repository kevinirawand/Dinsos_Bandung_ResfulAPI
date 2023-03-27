(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Basic Map
    // ------------------------------------------------------ //	
	// var mymap = L.map('basic-map').setView([-6.9034495, 107.6431575], 10);

	// 	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// 		maxZoom: 18,
	// 		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	// 		id: 'mapbox.streets'
	// 	}).addTo(mymap);
		
    // ------------------------------------------------------- //
    // Map Marker
    // ------------------------------------------------------ //
	var mymap = L.map('map-marker').setView([-6.9034495, 107.6431575], 10);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		id: 'mapbox.streets'
	}).addTo(mymap);

	// custom popup image + text
	const customPopup =
	'<div class="customPopup"><figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg/1920px-A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg"><figcaption>Source: wikipedia.org</figcaption></figure><div>Kraków,[a] also written in English as Krakow and traditionally known as Cracow, is the second-largest and one of the oldest cities in Poland. Situated on the Vistula River in Lesser Poland Voivodeship... <a href="https://en.wikipedia.org/wiki/Krak%C3%B3w" target="_blank">→ show more</a></div></div>';

	// specify popup options
	const customOptions = {
	minWidth: "220", // set max-width
	keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.
	};

	L.marker([-6.9034495, 107.6431575]).addTo(mymap)
		.bindPopup("Pasirkoja").openPopup();

	L.marker([-6.9231887,107.6450072]).addTo(mymap)
		.bindPopup("Samsat").openPopup();


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
	
    // ------------------------------------------------------- //
    // Custom Marker
    // ------------------------------------------------------ //
	// var map = L.map('custom-marker').setView([51.5, -0.09], 10);

	// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// 	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	// }).addTo(map);

	// var LeafIcon = L.Icon.extend({
	// 	options: {
	// 		shadowUrl: 'assets/img/plugins/leaflet/custom-marker-shadow.png',
	// 		iconSize:     [46, 60],
	// 		shadowSize:   [45, 22],
	// 		iconAnchor:   [22, 94],
	// 		shadowAnchor: [4, 62],
	// 		popupAnchor:  [-3, -76]
	// 	}
	// });

	// var greenIcon = new LeafIcon({iconUrl: 'assets/img/plugins/leaflet/custom-marker.png'});

	// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
	
    // ------------------------------------------------------- //
    // Layers COntrol
    // ------------------------------------------------------ //
	// var cities = L.layerGroup();

	// L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
	// L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
	// L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
	// L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


	// var mbAttr = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	// 	mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	// var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
	// 	streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

	// var map = L.map('layer-control', {
	// 	center: [39.73, -104.99],
	// 	zoom: 10,
	// 	layers: [grayscale, cities]
	// });

	// var baseLayers = {
	// 	"Grayscale": grayscale,
	// 	"Streets": streets
	// };

	// var overlays = {
	// 	"Cities": cities
	// };

	// L.control.layers(baseLayers, overlays).addTo(map);
	
});