function initMap()
{
    var grc = {lat: 47.3135852, lng:-122.1800072};
    var DicksDrive = {lat: 47.661062, lng:-122.327777};
    var mapDiv = new google.maps.Map(document.getElementById('map'),
        {
            zoom:11,
            center: DicksDrive
        });
    var marker = new google.maps.Marker(
        {
            position: DicksDrive,
            map: mapDiv
        });
}