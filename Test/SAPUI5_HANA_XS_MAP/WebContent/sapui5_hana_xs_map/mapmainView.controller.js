sap.ui.controller("sapui5_hana_xs_map.mapmainView", {
	
    actSearch: function () {  
        
        var aUrl = '../../../hana_xs_map/SAP_HANA_XS_MAP/services/mapservice.xsjs?cmd=actSearch'+'&place='+ document.getElementById("inpSearch").getValue(); /* this.getView().byId("inpSearch").getValue(); */
        jQuery.ajax({
	    url: aUrl,
	    method: 'GET',
	    dataType: 'json' });
    	
  	
    },

    onInit: function () {  
        this.getView().byId("map_canvas").addStyleClass("myMap");  
    },  
    onAfterRendering: function () {  

        var aUrl = '../../../hana_xs_map/SAP_HANA_XS_MAP/services/mapservice.xsjs?cmd=onAfterRendering';
        jQuery.ajax({
	    url: aUrl,
	    method: 'GET',
	    dataType: 'json' });
    	
    }
});


