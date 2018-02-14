var map = new google.maps.Map(document.getElementById('aidmap'), {
  zoom: 4,
  center: new google.maps.LatLng(53.883967, 27.4395463),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function (marker, i) {
    return function () {
      infowindow.setContent(infoWindowContent[locations[i][0]]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}