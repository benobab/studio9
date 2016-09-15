// Load Map

var map;

function initMap(){
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 52.350718,lng: -7.393167},
		zoom: 13
	});
}
