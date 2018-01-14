function aidmap() {
    var mapOptions = {
        center: new google.maps.LatLng(53.883967, 27.4395463,10),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(document.getElementById("aidmap"), mapOptions);
    
    var minsk = new google.maps.LatLng(53.883967, 27.4395463,10);
    var marker = new google.maps.Marker({position:minsk});
    marker.setMap(map);
    
    var gomel = new google.maps.LatLng(52.4226468,30.70586,10);
    var marker = new google.maps.Marker({position:gomel});
    marker.setMap(map);
        }