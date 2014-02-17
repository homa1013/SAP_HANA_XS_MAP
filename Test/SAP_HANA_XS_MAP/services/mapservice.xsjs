$.import("hana_xs_map.SAP_HANA_XS_MAP.services", "googlemapsapi");

function actSearch() {  
		var map = this.map;  
        var address = $.request.parameters.get('place');
        this.geocoder.geocode({ 'address': address }, function (results, status) {  
            if (status === google.maps.GeocoderStatus.OK) {  
                map.setCenter(results[0].geometry.location);  
                var marker = new google.maps.Marker({  
                    map: map,  
                    position: results[0].geometry.location  
                });  
            } else {  
                prompt('Geocode was not successful for the following reason: ' + status);  
            }  
        });
}

function onAfterRendering () {
	
    if (!this.initialized) {  
        this.initialized = true;  
        this.geocoder = new google.maps.Geocoder();  
        var mapOptions = {  
            center: new google.maps.LatLng(-34.397, 150.644),  
            zoom: 8,  
            mapTypeId: google.maps.MapTypeId.ROADMAP  
        };  
        this.map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),  
            mapOptions);  
    }  
}

var action = $.request.parameters.get('action');
switch (action) {

case "actSearch":
	actSearch();
	break;
case "onAfterRendering":
	onAfterRendering();
    break;
	
default:

	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody('Ungültiger Befehl:' + action);
	
}
