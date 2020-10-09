export const initMap = () => {
	const springvale = {lat: -37.945203, lng: 145.151673};
	let map = new google.maps.Map(
		document.getElementById("map-springvale"), {zoom: 15, center: springvale});
	let marker = new google.maps.Marker({position: springvale, map: map});

	const laverton = {lat: -37.842275, lng: 144.779621};
	let mapTwo = new google.maps.Map(
		document.getElementById("map-laverton"), {zoom: 15, center: laverton});
	let markerTwo = new google.maps.Marker({position: laverton, map: mapTwo});

};



