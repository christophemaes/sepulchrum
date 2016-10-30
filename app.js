$(document).ready(function(){

  google.maps.event.addDomListener(window, 'load', initialize);

  function initialize() {

    var belgium = new google.maps.LatLng(50.648662, 4.571474);
    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement,{
      center: belgium,
      zoom: 8,
      panControl:false,
      zoomControl:false,
      mapTypeControl:false,
      scaleControl:true,
      streetViewControl:false,
      overviewMapControl:false,
      rotateControl:false,
      draggableCursor: 'crosshair',
      //mapTypeId:google.maps.MapTypeId.ROADMAP DIT MAG ER NIET STAAN ALS JE STYLES WIL WIJZIGEN
      styles:

      [
      {
        "featureType": "administrative",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
        {
          "color": "#84afa3"
        },
        {
          "lightness": 52
        }
        ]
      },
      {
        "stylers": [
        {
          "saturation": -77
        }
        ]
      },
      {
        "featureType": "road"
      }
      ]});
        //map.setOptions({ draggableCursor: 'crosshair' });
        var layerCWGC = new google.maps.FusionTablesLayer({
          query: {select: 'address', from: '1w2nS3hXDllNTleiUqHF1LfWWx8bpvuEfNzznE_WK',  where: 'country=Belgium'},
          suppressInfoWindows: true,
          styles: [{where: "'country'='Belgium'", markerOptions:{ iconName:"open_diamond"}}]
        });
        var nationslayer = new google.maps.FusionTablesLayer({
          query: {select: "'Full Address'",from: '1DqX0BxwByjSybJhHQbJdZhQ_RKkAQdgH9XcxpLRA'},
          suppressInfoWindows: true
        });
        layerCWGC.setMap(map);
        nationslayer.setMap(map);
        //This is the best alternative, combining style-options, setcontent and table integration
        var infowindow;
        var infoWindowContent = '';
        var coordinate;
        var latlng = new google.maps.LatLng(44.74648547505308, -89.84939737499997);
        //click listener on layer
        google.maps.event.addListener(layerCWGC, 'click', function(e)
        {
          map.setZoom(12);
          if(infowindow) infowindow.close();
          else infowindow = new google.maps.InfoWindow();

          //create info window layer
          infoWindowContent = infowindow.setContent(
            '<h1>This comes from the Fusion Table: <br />' + e.row['name'].value + '</h1>' +
            '<br />' +
            '<p>This is hardcoded to the script <br /> and will appear in each infowindow</p>' +
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>');
infowindow.setPosition(e.latLng);
map.setCenter(e.latLng);
infowindow.open(map);
});

   //Closes the infowindow if you click somewhere else
   google.maps.event.addListener(map, "click", function(){infowindow.close()});
 }
 google.maps.event.addDomListener(window, 'load', initialize);


})

